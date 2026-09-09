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

const ALLOWED = ['estimate_requests']
const ALLOWED_FIELDS = ['status', 'notes']

export default async function handler(req, res) {
  if (!checkAuth(req)) return res.status(401).json({ error: 'Non autorisé' })
  if (req.method !== 'POST') return res.status(405).end()

  try {
    const { collection, col, id, data } = req.body || {}
    const name = ALLOWED.includes(collection) ? collection : (ALLOWED.includes(col) ? col : null)
    if (!name || !id || !data || typeof data !== 'object')
      return res.status(400).json({ error: 'Paramètres invalides' })

    const patch = {}
    for (const k of ALLOWED_FIELDS) {
      if (data[k] !== undefined) patch[k] = typeof data[k] === 'string' ? data[k].slice(0, 2000) : data[k]
    }
    if (Object.keys(patch).length === 0)
      return res.status(400).json({ error: 'Aucun champ modifiable fourni' })

    patch.updatedAt = new Date().toISOString()
    await db.collection(name).doc(id).set(patch, { merge: true })
    res.status(200).json({ ok: true })
  } catch (e) {
    console.error('admin/update:', e)
    res.status(500).json({ error: e.message })
  }
}
