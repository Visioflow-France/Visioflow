import { db } from '../../../lib/firebase-admin'

function checkAuth(req) {
  return req.headers['x-admin-token'] === process.env.ADMIN_TOKEN
}

export default async function handler(req, res) {
  if (!checkAuth(req)) return res.status(401).json({ error: 'Non autorisé' })
  if (req.method !== 'POST') return res.status(405).end()

  try {
    const { cfg } = req.body
    if (!cfg) return res.status(400).json({ error: 'cfg manquant' })
    await db.collection('site_config').doc('main').set(cfg, { merge: true })
    res.status(200).json({ ok: true })
  } catch (e) {
    console.error('admin/config:', e)
    res.status(500).json({ error: e.message })
  }
}
