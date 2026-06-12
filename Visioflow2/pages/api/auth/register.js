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

    await db.collection('clients').add({
      email: email.toLowerCase(),
      name: name || '',
      password: hashPassword(password),
      verified: false,
      createdAt: new Date().toISOString(),
    })

    // Déclencher l'envoi du code de vérification
    const origin = req.headers.origin || 'http://localhost:3000'
    fetch(`${origin}/api/auth/send-verification`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.toLowerCase() }),
    }).catch((e) => { console.error('register: failed to send verification:', e.message) })

    // Pas de token encore — le client doit d'abord vérifier son email
    res.status(200).json({ requiresVerification: true, email: email.toLowerCase() })
  } catch (e) {
    console.error('register:', e)
    res.status(500).json({ error: e.message })
  }
}
