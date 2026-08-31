import { db } from '../../../lib/firebase-admin'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const snapshot = await db.collection('projects')
      .where('published', '==', true)
      .get()

    const projects = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))

    // Sort by createdAt in JavaScript instead of Firestore
    projects.sort((a, b) => {
      const dateA = a.createdAt?.toMillis?.() || new Date(a.createdAt || 0).getTime()
      const dateB = b.createdAt?.toMillis?.() || new Date(b.createdAt || 0).getTime()
      return dateB - dateA // Descending order
    })

    res.status(200).json(projects)
  } catch (error) {
    console.error('Error fetching projects:', error)
    res.status(500).json({ error: 'Failed to fetch projects' })
  }
}