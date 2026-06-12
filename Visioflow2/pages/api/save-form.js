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

async function sendNotificationEmail(formData, docId) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey || apiKey.startsWith('re_XXX')) return

  const pack  = formData.pack || 'â'
  const resto = formData.restaurantName || (formData.cities && formData.cities[0] && formData.cities[0].name) || 'â'
  const email = formData.email || 'â'
  const phone = formData.phone || 'â'

  const html = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
      <h2 style="color:#0071E3">ð° Nouvelle commande VisioFlow</h2>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:6px 0;color:#666;width:140px">Pack</td><td style="padding:6px 0;font-weight:600">${pack}</td></tr>
        <tr><td style="padding:6px 0;color:#666">Restaurant</td><td style="padding:6px 0;font-weight:600">${resto}</td></tr>
        <tr><td style="padding:6px 0;color:#666">Email client</td><td style="padding:6px 0">${email}</td></tr>
        <tr><td style="padding:6px 0;color:#666">TÃ©lÃ©phone</td><td style="padding:6px 0">${phone}</td></tr>
        <tr><td style="padding:6px 0;color:#666">Doc Firestore</td><td style="padding:6px 0;font-size:12px;color:#888">${docId}</td></tr>
      </table>
      <p style="margin-top:20px;color:#888;font-size:13px">
        Connecte-toi au dashboard pour voir tous les dÃ©tails et gÃ©nÃ©rer le site.
      </p>
    </div>
  `

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from:    process.env.RESEND_FROM    || "VisioFlow <noreply@visioflow.fr>",
      to:      process.env.ADMIN_NOTIFY_EMAIL || "visioflow77@gmail.com",
      subject: `ð° Nouvelle commande â ${resto} (${pack})`,
      html,
    }),
  })
}

async function sendConfirmationEmail(formData) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey || apiKey.startsWith('re_XXX')) return
  const clientEmail = formData.email || formData.cities?.[0]?.email
  if (!clientEmail) return

  const pack = formData.pack === 'premium' ? 'Pack Premium' : 'Pack Essentiel'
  const resto = formData.restaurantName || (formData.cities?.[0]?.name) || 'votre restaurant'

  const html = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#0f172a;color:#f1f5f9;padding:32px;border-radius:16px">
      <div style="text-align:center;margin-bottom:28px">
        <div style="font-size:40px;margin-bottom:8px">🎉</div>
        <h1 style="font-size:26px;font-weight:800;margin:0;color:#fff">Commande confirmée !</h1>
        <p style="color:rgba(255,255,255,.5);margin-top:6px;font-size:14px">Merci pour votre confiance</p>
      </div>
      <div style="background:rgba(255,255,255,.06);border-radius:12px;padding:20px 24px;margin-bottom:20px">
        <p style="margin:0 0 12px;font-size:13px;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.06em">Récapitulatif</p>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:6px 0;color:rgba(255,255,255,.5);font-size:13px">Pack</td><td style="padding:6px 0;font-weight:700;color:#60a5fa;text-align:right">${pack}</td></tr>
          <tr><td style="padding:6px 0;color:rgba(255,255,255,.5);font-size:13px">Restaurant</td><td style="padding:6px 0;font-weight:600;color:#fff;text-align:right">${resto}</td></tr>
        </table>
      </div>
      <div style="background:rgba(52,211,153,.08);border:1px solid rgba(52,211,153,.2);border-radius:12px;padding:16px 20px;margin-bottom:24px">
        <p style="margin:0;font-size:13px;color:#34d399;line-height:1.7">
          ✓ Notre équipe vous contacte sous <strong>24h</strong> pour démarrer votre site.<br/>
          ✓ Livraison en <strong>5 jours ouvrés</strong> maximum.<br/>
          ✓ Hébergement inclus à vie.
        </p>
      </div>
      <p style="font-size:12px;color:rgba(255,255,255,.25);text-align:center;margin:0">
        Une question ? Répondez à cet email ou contactez-nous sur <a href="https://visioflow2.vercel.app" style="color:#60a5fa">visioflow.fr</a>
      </p>
    </div>
  `

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.RESEND_FROM || 'VisioFlow <noreply@visioflow.fr>',
      to: clientEmail,
      subject: `✅ Commande confirmée — ${pack} pour ${resto}`,
      html,
    }),
  })
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })

  const { formData } = req.body
  if (!formData) return res.status(400).json({ error: "formData manquant" })

  const projectId = process.env.FIREBASE_PROJECT_ID || "visioflow-cb6eb-9d051"
  const apiKey    = process.env.FIREBASE_API_KEY    || "AIzaSyD2R3SfaC6ifiA_juCfM_1q7SRaAm-G1gY"
  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/form_submissions?key=${apiKey}`

  const now    = new Date()
  const fields = {}
  for (const [k, v] of Object.entries(formData)) fields[k] = toFirestore(v)
  fields.paymentStatus = { stringValue: "paid" }
  fields.paymentDate   = { stringValue: now.toLocaleDateString("fr-FR") }
  fields.status        = { stringValue: "new" }
  fields.createdAt     = { stringValue: now.toISOString() }
  fields.timestamp     = { timestampValue: now.toISOString() }

  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fields }),
    })

    if (!resp.ok) {
      const err = await resp.text()
      return res.status(500).json({ error: err })
    }

    const doc   = await resp.json()
    const docId = doc.name && doc.name.split("/").pop() || ""

    sendNotificationEmail(formData, docId).catch(() => {})

    res.status(200).json({ success: true, docId })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
