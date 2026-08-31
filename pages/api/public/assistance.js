import { db } from '../../../lib/firebase-admin'

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate=60')
  try {
    const snap = await db.collection('site_config').doc('main').get()
    const data = snap.exists ? snap.data() : {}
    const a = data.assistance || {}
    res.status(200).json({
      label:  a.label  || 'Besoin d\'aide ?',
      phone1: a.phone1 || '',
      phone2: a.phone2 || '',
    })
  } catch {
    res.status(200).json({ label: 'Besoin d\'aide ?', phone1: '', phone2: '' })
  }
}
