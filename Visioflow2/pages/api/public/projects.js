import { adminDb } from '../../../lib/firebase-admin'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const snapshot = await adminDb.collection('projects')
      .where('published', '==', true)
      .orderBy('createdAt', 'desc')
      .get()

    const projects = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))

    res.status(200).json(projects)
  } catch (error) {
    console.error('Error fetching projects:', error)
    res.status(500).json({ error: 'Failed to fetch projects' })
  }
}