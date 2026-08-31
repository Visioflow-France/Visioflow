import { db, dbStatus, SETUP_HINT } from '../../../lib/firebase-admin'

function checkAuth(req) {
  const cookies = Object.fromEntries(
    (req.headers.cookie || '').split(';').map(c => {
      const [k, ...v] = c.trim().split('=')
      return [k.trim(), v.join('=').trim()]
    }).filter(([k]) => k)
  )
  return !!process.env.ADMIN_TOKEN && cookies.vf_admin === process.env.ADMIN_TOKEN
}

export default async function handler(req, res) {
  if (!checkAuth(req)) return res.status(401).json({ error: 'Non autorisé' })
  if (req.method !== 'GET') return res.status(405).end()

  const out = {
    serviceAccountConfigured: dbStatus.ok,
    initError: dbStatus.error,
    projectId: process.env.FIREBASE_PROJECT_ID || 'visioflow-cb6eb-9d051',
    firestoreAccessible: false,
    projectsCount: null,
    firestoreError: null,
    hint: null,
  }

  if (!dbStatus.ok) {
    out.hint = SETUP_HINT
    return res.status(200).json(out)
  }

  try {
    const snap = await db.collection('projects').get()
    out.firestoreAccessible = true
    out.projectsCount = snap.size
  } catch (e) {
    out.firestoreError = e.message
    out.hint = `Le service account est chargé mais Firestore refuse la connexion : ${e.message}`
  }

  res.status(200).json(out)
}
