function toFirestore(value) {
  if (value === null || value === undefined) return { nullValue: null }
  if (typeof value === 'string') return { stringValue: value }
  if (typeof value === 'boolean') return { booleanValue: value }
  if (typeof value === 'number') {
    return Number.isInteger(value) ? { integerValue: String(value) } : { doubleValue: value }
  }
  if (Array.isArray(value)) {
    return { arrayValue: { values: value.map(toFirestore) } }
  }
  if (typeof value === 'object') {
    const fields = {}
    for (const [k, v] of Object.entries(value)) {
      fields[k] = toFirestore(v)
    }
    return { mapValue: { fields } }
  }
  return { stringValue: String(value) }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { formData } = req.body
  if (!formData) return res.status(400).json({ error: 'formData manquant' })

  const projectId = 'visioflow-cb6eb-9d051'
  const apiKey    = 'AIzaSyD2R3SfaC6ifiA_juCfM_1q7SRaAm-G1gY'
  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/form_submissions?key=${apiKey}`

  const now    = new Date()
  const fields = {}
  for (const [k, v] of Object.entries(formData)) {
    fields[k] = toFirestore(v)
  }
  fields.paymentStatus = { stringValue: 'paid' }
  fields.paymentDate   = { stringValue: now.toLocaleDateString('fr-FR') }
  fields.status        = { stringValue: 'new' }
  fields.createdAt     = { stringValue: now.toISOString() }
  fields.submittedAt   = { stringValue: now.toISOString() }

  try {
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fields }),
    })

    if (!resp.ok) {
      const err = await resp.text()
      return res.status(500).json({ error: err })
    }

    const doc   = await resp.json()
    const docId = doc.name?.split('/').pop()
    res.status(200).json({ success: true, docId })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
