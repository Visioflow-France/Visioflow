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

const ALLOWED = ['projects']
const CATEGORIES = ['vitrine', 'ecommerce', 'google', 'reseaux']

export default async function handler(req, res) {
  if (!checkAuth(req)) return res.status(401).json({ error: 'Non autorisé' })
  if (req.method !== 'POST') return res.status(405).end()

  try {
    const { col, data } = req.body
    if (!ALLOWED.includes(col) || !data || !data.url)
      return res.status(400).json({ error: 'Paramètres invalides' })

    let url = String(data.url).trim()
    if (!/^https?:\/\//i.test(url)) url = 'https://' + url

    let title = String(data.title || '').trim()
    if (!title) {
      try { title = new URL(url).hostname.replace(/^www\./, '') } catch { title = url }
    }

    const category = CATEGORIES.includes(data.category) ? data.category : 'vitrine'

    const doc = await db.collection('projects').add({
      title,
      url,
      category,
      published: data.published !== false,
      createdAt: new Date(),
    })

    res.status(200).json({ ok: true, id: doc.id })
  } catch (e) {
    console.error('admin/save:', e)
    res.status(500).json({ error: e.message })
  }
}
