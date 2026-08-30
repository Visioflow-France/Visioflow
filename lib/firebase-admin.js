import admin from 'firebase-admin'

export const SETUP_HINT =
  "Firebase n'est pas configuré : ajoutez la variable d'environnement FIREBASE_SERVICE_ACCOUNT sur Vercel " +
  '(Firebase Console → Paramètres du projet → Comptes de service → Générer une nouvelle clé privée, ' +
  'collez le JSON complet), puis redéployez le site.'

export const dbStatus = { ok: false, error: null }

function parseServiceAccount(raw) {
  const value = String(raw).trim()
  const parsed = value.startsWith('{')
    ? JSON.parse(value)
    : JSON.parse(Buffer.from(value, 'base64').toString('utf8'))
  // Vercel remplace parfois les "\n" de la clé privée par de vrais retours à la ligne (ou l'inverse)
  if (parsed.private_key) parsed.private_key = parsed.private_key.replace(/\\n/g, '\n')
  return parsed
}

// Substitut de db : toute requête échoue immédiatement avec un message clair
// au lieu d'un crash obscure ("Cannot read properties of null").
function stubDb(message) {
  const fail = () => { throw new Error(message) }
  return new Proxy(fail, {
    get: (target, prop) => {
      if (prop === 'then' || prop === 'catch' || prop === 'finally') return undefined
      return stubDb(message)
    },
    apply: fail,
  })
}

function initDb() {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT || process.env.FIREBASE_SERVICE_ACCOUNT_BASE64
  const projectId = process.env.FIREBASE_PROJECT_ID || 'visioflow-cb6eb-9d051'

  // applicationDefault() ne peut pas fonctionner sur Vercel sans ces variables :
  // autant échouer tout de suite avec un message explicite plutôt qu'à la première requête.
  if (!raw && !process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    throw new Error('FIREBASE_SERVICE_ACCOUNT manquant')
  }

  if (!admin.apps.length) {
    admin.initializeApp(
      raw
        ? { credential: admin.credential.cert(parseServiceAccount(raw)), projectId }
        : { credential: admin.credential.applicationDefault(), projectId }
    )
  }
  return admin.firestore()
}

let db
try {
  db = initDb()
  dbStatus.ok = true
} catch (e) {
  dbStatus.ok = false
  dbStatus.error = e.message
  db = stubDb(`${SETUP_HINT} (détail : ${e.message})`)
}

export { db }
