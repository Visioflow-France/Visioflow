import { db } from '../../../lib/firebase-admin'

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
