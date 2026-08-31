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
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  if (!checkAuth(req)) return res.status(401).json({ error: 'Non autorisé' })

  const { docId, pack, restaurantName } = req.body
  if (!docId) return res.status(400).json({ error: 'docId manquant' })

  const projectId = process.env.FIREBASE_PROJECT_ID || 'visioflow-cb6eb-9d051'
  const apiKey    = process.env.FIREBASE_API_KEY    || 'AIzaSyD2R3SfaC6ifiA_juCfM_1q7SRaAm-G1gY'
  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/form_submissions/${docId}?key=${apiKey}&updateMask.fieldPaths=paymentStatus&updateMask.fieldPaths=paymentDate&updateMask.fieldPaths=status`

  try {
    const resp = await fetch(url, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: {
          paymentStatus: { stringValue: 'paid' },
          paymentDate:   { stringValue: new Date().toLocaleDateString('fr-FR') },
          status:        { stringValue: 'paid' },
        }
      })
    })

    if (!resp.ok) {
      const err = await resp.text()
      return res.status(500).json({ error: err })
    }

    res.status(200).json({ success: true })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
