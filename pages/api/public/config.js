import { db } from '../../../lib/firebase-admin'

/* Configuration publique du site : coordonnées + réseaux sociaux.
   Modifiables depuis le dashboard admin (onglet Configuration). */
const DEFAULTS = {
  contact: { email: 'contact@visioflow.fr', phone: '+33611045829' },
  social: {
    instagram: 'https://instagram.com/visioflow',
    linkedin: 'https://linkedin.com/company/visioflow',
    twitter: 'https://twitter.com/visioflow',
    facebook: '',
    tiktok: '',
  },
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate=60')
  try {
    const snap = await db.collection('site_config').doc('main').get()
    const data = snap.exists ? snap.data() : {}
    const contact = { ...DEFAULTS.contact, ...(data.contact || {}) }
    const social = { ...DEFAULTS.social, ...(data.social || {}) }
    res.status(200).json({ contact, social })
  } catch {
    res.status(200).json(DEFAULTS)
  }
}
