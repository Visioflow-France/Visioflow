import { db } from '../../../lib/firebase-admin'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { email, code } = req.body
  if (!email || !code) return res.status(400).json({ error: 'email et code requis' })

  const snap = await db.collection('verification_codes')
    .where('email', '==', email.toLowerCase())
    .where('code', '==', code.trim())
    .where('used', '==', false)
    .limit(1)
    .get()

  if (snap.empty) return res.status(400).json({ error: 'Code invalide. Vérifiez le code reçu.' })

  const doc = snap.docs[0]
  const data = doc.data()

  if (new Date(data.expiresAt) < new Date()) {
    await doc.ref.update({ used: true })
    return res.status(400).json({ error: 'Code expiré. Cliquez sur "Renvoyer le code".' })
  }

  // Invalider le code
  await doc.ref.update({ used: true })

  // Marquer le compte comme vérifié s'il existe dans Firestore
  let token = null, name = ''
  try {
    const clientSnap = await db.collection('clients')
      .where('email', '==', email.toLowerCase())
      .limit(1)
      .get()
    if (!clientSnap.empty) {
      const clientDoc = clientSnap.docs[0]
      const clientData = clientDoc.data()
      await clientDoc.ref.update({ verified: true })
      name = clientData.name || ''
      token = Buffer.from(JSON.stringify({
        id: clientDoc.id,
        email: clientData.email,
        name,
      })).toString('base64')
    }
  } catch (e) { console.error('verify-code token lookup:', e) }

  res.status(200).json({ success: true, token, email: email.toLowerCase(), name })
}
