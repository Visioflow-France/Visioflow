import { db } from '../../../lib/firebase-admin'
import crypto from 'crypto'

function verifyPassword(password, stored) {
  const [salt, hash] = stored.split(':')
  const attempt = crypto.scryptSync(password, salt, 64).toString('hex')
  return attempt === hash
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { email, password } = req.body
  if (!email || !password) return res.status(400).json({ error: 'Email et mot de passe requis.' })

  try {
    const snap = await db.collection('clients').where('email', '==', email.toLowerCase()).limit(1).get()
    if (snap.empty) return res.status(401).json({ error: 'Email ou mot de passe incorrect.' })

    const doc = snap.docs[0]
    const data = doc.data()

    if (!verifyPassword(password, data.password)) {
      return res.status(401).json({ error: 'Email ou mot de passe incorrect.' })
    }

    const payload = JSON.stringify({ id: doc.id, email: data.email, name: data.name || '' })
    const secret = process.env.JWT_SECRET || process.env.ADMIN_TOKEN || 'fallback-secret-change-in-production'
    const signature = crypto.createHmac('sha256', secret).update(payload).digest('hex')
    const token = Buffer.from(JSON.stringify({ payload, signature })).toString('base64')

    res.status(200).json({ token, email: data.email, name: data.name || '' })
  } catch (e) {
    console.error('login:', e)
    res.status(500).json({ error: e.message })
  }
}
