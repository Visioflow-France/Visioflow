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

const ALLOWED = ['submissions', 'form_submissions', 'projects']

export default async function handler(req, res) {
  if (!checkAuth(req)) return res.status(401).json({ error: 'Non autorisé' })
  if (req.method !== 'POST') return res.status(405).end()

  try {
    const { collection, col, id } = req.body || {}
    const name = ALLOWED.includes(collection) ? collection : (ALLOWED.includes(col) ? col : null)
    if (!name || !id)
      return res.status(400).json({ error: 'Paramètres invalides' })
    await db.collection(name).doc(id).delete()
    res.status(200).json({ ok: true })
  } catch (e) {
    console.error('admin/delete:', e)
    res.status(500).json({ error: e.message })
  }
}
