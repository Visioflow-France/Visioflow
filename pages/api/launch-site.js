// Réception des demandes "Lancer mon site" depuis la page Services :
// questionnaire + estimation → Firestore + notification email pour rappeler le client.

function toFirestore(value) {
  if (value === null || value === undefined) return { nullValue: null }
  if (typeof value === 'string')  return { stringValue: value }
  if (typeof value === 'boolean') return { booleanValue: value }
  if (typeof value === 'number')  return Number.isInteger(value) ? { integerValue: String(value) } : { doubleValue: value }
  if (Array.isArray(value))       return { arrayValue: { values: value.map(toFirestore) } }
  if (typeof value === 'object') {
    const fields = {}
    for (const [k, v] of Object.entries(value)) fields[k] = toFirestore(v)
    return { mapValue: { fields } }
  }
  return { stringValue: String(value) }
}

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
}

async function sendAdminEmail(payload, docId) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey || apiKey.startsWith('re_XXX')) return

  const { form, estimate, serviceTitle } = payload
  const lines = (estimate?.lines || [])
    .map((l) => `<tr><td style="padding:5px 0;color:#666">${esc(l.label)}</td><td style="padding:5px 0;font-weight:600;text-align:right">${l.price}&nbsp;€</td></tr>`)
    .join('')

  const html = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
      <h2 style="color:#0071E3">🚀 Nouvelle demande « Lancer mon site »</h2>
      <p style="color:#888;font-size:13px;margin-top:-8px">Page Services — estimation acceptée par le client. <strong>À rappeler sous 24h ouvrées</strong> pour le rendez-vous téléphonique.</p>
      <table style="width:100%;border-collapse:collapse;background:rgba(0,113,227,.05);border-radius:12px;padding:12px">
        <tr><td style="padding:6px 0;color:#666;width:150px">Service</td><td style="padding:6px 0;font-weight:600">${esc(serviceTitle)}</td></tr>
        <tr><td style="padding:6px 0;color:#666">Entreprise</td><td style="padding:6px 0;font-weight:600">${esc(form.companyName)}</td></tr>
        ${form.city ? `<tr><td style="padding:6px 0;color:#666">Ville</td><td style="padding:6px 0;font-weight:600">${esc(form.city)}</td></tr>` : ''}
        ${form.sector ? `<tr><td style="padding:6px 0;color:#666">Secteur</td><td style="padding:6px 0;font-weight:600">${esc(form.sector)}</td></tr>` : ''}
        <tr><td style="padding:6px 0;color:#666">Contact</td><td style="padding:6px 0;font-weight:600">${esc(form.contactName)}</td></tr>
        <tr><td style="padding:6px 0;color:#666">Téléphone</td><td style="padding:6px 0;font-weight:700;color:#0071E3;font-size:16px">${esc(form.phone)}</td></tr>
        <tr><td style="padding:6px 0;color:#666">Email</td><td style="padding:6px 0">${esc(form.email)}</td></tr>
      </table>
      <h3 style="font-size:15px;margin:22px 0 8px">Estimation acceptée : ${estimate?.low ?? '—'}€ — ${estimate?.high ?? '—'}€</h3>
      <table style="width:100%;border-collapse:collapse">
        ${lines}
        <tr><td style="padding:8px 0;border-top:2px solid #eee;color:#666"><strong>Fourchette</strong></td><td style="padding:8px 0;border-top:2px solid #eee;text-align:right;font-weight:700">${estimate?.low ?? '—'}€ — ${estimate?.high ?? '—'}€</td></tr>
      </table>
      ${(form.colors && form.colors.length) || form.notes || form.deadline ? `
      <h3 style="font-size:15px;margin:22px 0 8px">Préférences client</h3>
      <ul style="color:#444;font-size:14px;line-height:1.8;margin:0;padding-left:20px">
        ${form.colors && form.colors.length ? `<li>Couleurs souhaitées : <strong>${esc(form.colors.join(', '))}</strong></li>` : ''}
        ${form.options && form.options.length ? `<li>Options choisies : <strong>${esc(form.options.join(', '))}</strong></li>` : ''}
        <li>Délai : <strong>${esc(form.deadline)}</strong></li>
        ${form.notes ? `<li>Remarques : « ${esc(form.notes)} »</li>` : ''}
      </ul>` : ''}
      <p style="margin-top:20px;color:#888;font-size:12px">Doc Firestore : ${esc(docId)} — collection <code>launch_requests</code></p>
    </div>
  `

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.RESEND_FROM || 'VisioFlow <noreply@visioflow.fr>',
      to: process.env.ADMIN_NOTIFY_EMAIL || 'visioflow77@gmail.com',
      subject: `🚀 Lancer mon site — ${form.companyName} (${estimate?.low ?? ''}–${estimate?.high ?? ''}€)`,
      html,
    }),
  })
}

async function sendClientEmail(payload) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey || apiKey.startsWith('re_XXX')) return
  const { form, estimate, serviceTitle } = payload
  if (!form.email) return

  const html = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#0f172a;color:#f1f5f9;padding:32px;border-radius:16px">
      <div style="text-align:center;margin-bottom:28px">
        <div style="font-size:40px;margin-bottom:8px">🚀</div>
        <h1 style="font-size:24px;font-weight:800;margin:0;color:#fff">Votre projet est lancé !</h1>
        <p style="color:rgba(255,255,255,.5);margin-top:6px;font-size:14px">${esc(form.companyName)} · ${esc(serviceTitle)}</p>
      </div>
      <div style="background:rgba(255,255,255,.06);border-radius:12px;padding:20px 24px;margin-bottom:20px">
        <p style="margin:0 0 12px;font-size:13px;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.06em">Estimation retenue</p>
        <p style="margin:0;font-size:26px;font-weight:800;color:#60a5fa">${estimate?.low ?? '—'}€ — ${estimate?.high ?? '—'}€</p>
        <p style="margin:6px 0 0;font-size:12px;color:rgba(255,255,255,.4)">Montant indicatif, confirmé ensemble par téléphone.</p>
      </div>
      <div style="background:rgba(52,211,153,.08);border:1px solid rgba(52,211,153,.2);border-radius:12px;padding:16px 20px;margin-bottom:24px">
        <p style="margin:0;font-size:13px;color:#34d399;line-height:1.7">
          ✓ Un membre de l'équipe Visioflow vous <strong>appelle sous 24h ouvrées</strong><br/>
          ✓ Rendez-vous téléphonique pour affiner votre projet<br/>
          ✓ Aucun engagement avant votre accord final
        </p>
      </div>
      <p style="font-size:12px;color:rgba(255,255,255,.25);text-align:center;margin:0">
        Une question ? Répondez à cet email ou écrivez à contact@visioflow.fr
      </p>
    </div>
  `

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.RESEND_FROM || 'VisioFlow <noreply@visioflow.fr>',
      to: form.email,
      subject: `🚀 Votre projet ${form.companyName} est lancé — Visioflow`,
      html,
    }),
  })
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { serviceId, serviceTitle, form, estimate } = req.body || {}
  if (!form || !form.companyName || !form.contactName || !form.email || !form.phone) {
    return res.status(400).json({ error: 'Champs obligatoires manquants (entreprise, contact, email, téléphone)' })
  }

  const now = new Date()
  const doc = {
    type: 'launch_request',
    source: 'services-page',
    serviceId,
    serviceTitle,
    ...form,
    estimate,
    status: 'to_call', // à rappeler pour RDV téléphonique
    createdAt: now.toISOString(),
    timestamp: now,
  }

  const payload = { serviceId, serviceTitle, form, estimate }

  // 1) SDK admin (FIREBASE_SERVICE_ACCOUNT sur Vercel) — chemin fiable.
  try {
    const { db } = await import('../../lib/firebase-admin')
    const ref = await db.collection('launch_requests').add(doc)
    sendAdminEmail(payload, ref.id).catch(() => {})
    sendClientEmail(payload).catch(() => {})
    return res.status(200).json({ success: true, docId: ref.id })
  } catch (sdkErr) {
    // 2) Repli REST avec FIREBASE_API_KEY.
    const apiKey = process.env.FIREBASE_API_KEY
    if (!apiKey) {
      console.error('launch-site:', sdkErr.message)
      return res.status(500).json({ error: sdkErr.message })
    }

    const projectId = process.env.FIREBASE_PROJECT_ID || 'visioflow-cb6eb-9d051'
    const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/launch_requests?key=${apiKey}`
    const fields = {}
    for (const [k, v] of Object.entries(doc)) {
      if (k === 'timestamp') fields[k] = { timestampValue: v.toISOString() }
      else fields[k] = toFirestore(v)
    }

    try {
      const resp = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields }),
      })
      if (!resp.ok) return res.status(500).json({ error: await resp.text() })

      const created = await resp.json()
      const docId = (created.name && created.name.split('/').pop()) || ''

      sendAdminEmail(payload, docId).catch(() => {})
      sendClientEmail(payload).catch(() => {})

      res.status(200).json({ success: true, docId })
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }
}
