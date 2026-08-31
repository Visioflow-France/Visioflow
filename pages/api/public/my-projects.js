import { db } from '../../../lib/firebase-admin'
import crypto from 'crypto'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { email, token } = req.body
  if (!email || !token) return res.status(400).json({ error: 'email et token requis' })

  // Vérifier la signature HMAC du token
  try {
    const decoded = JSON.parse(Buffer.from(token, 'base64').toString())
    const secret = process.env.JWT_SECRET || process.env.ADMIN_TOKEN || 'fallback-secret-change-in-production'
    const expectedSig = crypto.createHmac('sha256', secret).update(decoded.payload).digest('hex')
    if (decoded.signature !== expectedSig) return res.status(401).json({ error: 'Token invalide' })
    const tokenData = JSON.parse(decoded.payload)
    if (tokenData.email !== email.toLowerCase()) return res.status(401).json({ error: 'Token ne correspond pas à l\'email.' })
  } catch {
    return res.status(401).json({ error: 'Token invalide' })
  }
  if (!email) return res.status(400).json({ error: 'email manquant' })

  const normalizedEmail = email.toLowerCase()

  try {
    const [cpSnap, fsSnap] = await Promise.all([
      db.collection('client_projects')
        .where('contactEmail', '==', normalizedEmail)
        .orderBy('createdAt', 'desc')
        .limit(20)
        .get(),
      db.collection('form_submissions')
        .where('email', '==', normalizedEmail)
        .orderBy('timestamp', 'desc')
        .limit(20)
        .get(),
    ])

    const projects = []

    cpSnap.forEach(d => {
      const data = d.data()
      projects.push({
        id: d.id,
        collection: 'client_projects',
        pack: data.pack || 'essentiel',
        siteName: data.siteName || data.restaurantName || '',
        status: data.status || 'new',
        createdAt: data.createdAt || '',
        // Infos formulaire complètes
        address: data.address || '',
        phone: data.phone || '',
        cuisine: data.cuisine || '',
        color: data.color || '',
        layout: data.layout || '',
        instagram: data.instagram || '',
        facebook: data.facebook || '',
        tiktok: data.tiktok || '',
        website: data.website || '',
        hours: data.hours || null,
        menuMode: data.menuMode || 'items',
        menuCardPhotoUrl: data.menuCardPhotoUrl || '',
        menuItems: data.menuItems || [],
        story: data.story || '',
        notes: data.notes || '',
        delai: data.delai || '5 jours',
        cities: data.cities || [],
        ubereatsUrl: data.ubereatsUrl || '',
        deliverooUrl: data.deliverooUrl || '',
        justEatUrl: data.justEatUrl || '',
      })
    })

    const cpEmails = new Set(projects.map(p => p.siteName + p.createdAt))
    fsSnap.forEach(d => {
      const data = d.data()
      const key = (data.restaurantName || '') + (data.timestamp || '')
      if (!cpEmails.has(key)) {
        projects.push({
          id: d.id,
          collection: 'form_submissions',
          pack: data.pack || 'essentiel',
          siteName: data.restaurantName || data.cities?.[0]?.name || '',
          status: data.status || 'new',
          createdAt: data.timestamp || data.createdAt || '',
          address: data.address || data.cities?.[0]?.address || '',
          phone: data.phone || data.cities?.[0]?.tel || '',
          cuisine: data.cuisine || '',
          color: data.color || '',
          layout: data.layout || '',
          instagram: data.instagram || '',
          facebook: data.facebook || '',
          tiktok: data.tiktok || '',
          website: data.website || '',
          menuMode: data.menuMode || 'items',
          menuCardPhotoUrl: data.menuCardPhotoUrl || '',
          menuItems: data.menuItems || [],
          story: data.remarks || '',
          notes: data.notes || '',
          delai: '5 jours',
          cities: data.cities || [],
          ubereatsUrl: data.ubereats || '',
          deliverooUrl: data.deliveroo || '',
          justEatUrl: data.justeat || '',
        })
      }
    })

    // Tri par date décroissante
    projects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

    res.status(200).json({ projects })
  } catch (e) {
    console.error('my-projects:', e)
    res.status(500).json({ error: e.message })
  }
}
