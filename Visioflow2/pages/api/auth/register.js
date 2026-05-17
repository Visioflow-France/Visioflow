import { db } from '../../../lib/firebase-admin'
import crypto from 'crypto'

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto.scryptSync(password, salt, 64).toString('hex')
  return `${salt}:${hash}`
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { email, password, name } = req.body
  if (!email || !password) return res.status(400).json({ error: 'Email et mot de passe requis.' })
  if (password.length < 6) return res.status(400).json({ error: 'Mot de passe trop court (6 caractères min).' })
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: 'Email invalide.' })

  try {
    const existing = await db.collection('clients').where('email', '==', email.toLowerCase()).limit(1).get()
    if (!existing.empty) return res.status(409).json({ error: 'Un compte existe déjà avec cet email.' })

    const docRef = await db.collection('clients').add({
      email: email.toLowerCase(),
      name: name || '',
      password: hashPassword(password),
      createdAt: new Date().toISOString(),
    })

    const token = Buffer.from(JSON.stringify({ id: docRef.id, email: email.toLowerCase(), name: name || '' })).toString('base64')

    res.status(200).json({ token, email: email.toLowerCase(), name: name || '' })
  } catch (e) {
    console.error('register:', e)
    res.status(500).json({ error: e.message })
  }
}
