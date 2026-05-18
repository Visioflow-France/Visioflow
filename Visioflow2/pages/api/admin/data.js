import { db } from '../../../lib/firebase-admin'

function checkAuth(req) {
  const token = req.headers['x-admin-token']
  return token === process.env.ADMIN_TOKEN
}

export default async function handler(req, res) {
  if (!checkAuth(req)) return res.status(401).json({ error: 'Non autorisé' })
  if (req.method !== 'GET') return res.status(405).end()

  try {
    const [configSnap, subsSnap, formsSnap, projectsSnap] = await Promise.all([
      db.collection('site_config').doc('main').get(),
      db.collection('submissions').orderBy('timestamp', 'desc').limit(200).get(),
      db.collection('form_submissions').orderBy('timestamp', 'desc').limit(200).get(),
      db.collection('client_projects').orderBy('createdAt', 'desc').limit(200).get(),
    ])

    const config = configSnap.exists ? configSnap.data() : null
    const submissions = []
    subsSnap.forEach(d => submissions.push({ id: d.id, ...d.data() }))
    const forms = []
    formsSnap.forEach(d => forms.push({ id: d.id, ...d.data() }))
    const clientProjects = []
    projectsSnap.forEach(d => clientProjects.push({ id: d.id, ...d.data() }))

    res.status(200).json({ config, submissions, forms, clientProjects })
  } catch (e) {
    console.error('admin/data:', e)
    res.status(500).json({ error: e.message })
  }
}
