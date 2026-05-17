import { db } from '../../../lib/firebase-admin'

function checkAuth(req) {
  return req.headers['x-admin-token'] === process.env.ADMIN_TOKEN
}

const ALLOWED = ['submissions', 'form_submissions']

export default async function handler(req, res) {
  if (!checkAuth(req)) return res.status(401).json({ error: 'Non autorisé' })
  if (req.method !== 'POST') return res.status(405).end()

  try {
    const { collection, id } = req.body
    if (!ALLOWED.includes(collection) || !id)
      return res.status(400).json({ error: 'Paramètres invalides' })
    await db.collection(collection).doc(id).delete()
    res.status(200).json({ ok: true })
  } catch (e) {
    console.error('admin/delete:', e)
    res.status(500).json({ error: e.message })
  }
}
