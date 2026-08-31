const PROJECT_ID = process.env.FIREBASE_PROJECT_ID || 'visioflow-cb6eb-9d051'
const API_KEY    = process.env.FIREBASE_API_KEY    || 'AIzaSyD2R3SfaC6ifiA_juCfM_1q7SRaAm-G1gY'

async function getFirestoreDoc(collection, docId) {
  const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/${collection}/${docId}?key=${API_KEY}`
  const res = await fetch(url)
  if (!res.ok) return null
  const doc = await res.json()
  const f = doc.fields || {}
  const read = (field) => {
    const v = f[field]
    if (!v) return ''
    return v.stringValue ?? v.integerValue ?? v.doubleValue ?? ''
  }
  return { siteName: read('siteName'), pack: read('pack'), contactEmail: read('contactEmail'), email: read('email') }
}

async function markSessionProcessed(sessionId) {
  const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/processed_sessions?key=${API_KEY}`
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields: { sessionId: { stringValue: sessionId }, processedAt: { stringValue: new Date().toISOString() } } }),
  })
}

async function isAlreadyProcessed(sessionId) {
  const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents:runQuery?key=${API_KEY}`
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        structuredQuery: {
          from: [{ collectionId: 'processed_sessions' }],
          where: { fieldFilter: { field: { fieldPath: 'sessionId' }, op: 'EQUAL', value: { stringValue: sessionId } } },
          limit: 1,
        },
      }),
    })
    const rows = await res.json()
    return Array.isArray(rows) && rows.length > 0 && rows[0].document
  } catch { return false }
}

async function sendEmail({ to, subject, html }) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey || apiKey.startsWith('re_XXX')) return
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.RESEND_FROM || 'VisioFlow <noreply@visioflow.fr>',
      to,
      subject,
      html,
    }),
  })
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { sessionId } = req.body
  if (!sessionId) return res.status(400).json({ error: 'sessionId manquant' })

  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) return res.status(500).json({ error: 'STRIPE_SECRET_KEY manquante' })

  try {
    // Idempotence — ne pas envoyer deux fois pour la même session
    const alreadyDone = await isAlreadyProcessed(sessionId)
    if (alreadyDone) return res.status(200).json({ success: true, skipped: true })

    const Stripe = (await import('stripe')).default
    const stripe = new Stripe(secretKey, { apiVersion: '2023-10-16' })
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.payment_status !== 'paid') {
      return res.status(400).json({ error: 'Paiement non confirmé' })
    }

    const clientEmail = session.customer_email || ''
    const docId = session.client_reference_id || ''
    const pack  = session.metadata?.pack || 'essentiel'
    const packLabel = pack === 'premium' ? 'Pack Premium' : 'Pack Essentiel'

    // Récupérer le nom du restaurant depuis Firestore
    let siteName = ''
    if (docId && !docId.startsWith('essentiel') && !docId.startsWith('premium')) {
      const doc = await getFirestoreDoc('client_projects', docId)
      siteName = doc?.siteName || ''
    }
    const restoLabel = siteName || 'votre restaurant'

    // Email de confirmation au client
    if (clientEmail) {
      await sendEmail({
        to: clientEmail,
        subject: `✅ Commande confirmée — ${packLabel} pour ${restoLabel}`,
        html: `
          <div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#0f172a;color:#f1f5f9;padding:32px;border-radius:16px">
            <div style="text-align:center;margin-bottom:28px">
              <div style="font-size:40px;margin-bottom:8px">🎉</div>
              <h1 style="font-size:26px;font-weight:800;margin:0;color:#fff">Commande confirmée !</h1>
              <p style="color:rgba(255,255,255,.5);margin-top:6px;font-size:14px">Merci pour votre confiance</p>
            </div>
            <div style="background:rgba(255,255,255,.06);border-radius:12px;padding:20px 24px;margin-bottom:20px">
              <p style="margin:0 0 12px;font-size:13px;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.06em">Récapitulatif</p>
              <table style="width:100%;border-collapse:collapse">
                <tr><td style="padding:6px 0;color:rgba(255,255,255,.5);font-size:13px">Pack</td><td style="padding:6px 0;font-weight:700;color:#60a5fa;text-align:right">${packLabel}</td></tr>
                <tr><td style="padding:6px 0;color:rgba(255,255,255,.5);font-size:13px">Restaurant</td><td style="padding:6px 0;font-weight:600;color:#fff;text-align:right">${restoLabel}</td></tr>
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
        `,
      })
    }

    // Email de notification à l'admin
    await sendEmail({
      to: process.env.ADMIN_NOTIFY_EMAIL || 'visioflow77@gmail.com',
      subject: `🔔 Nouvelle commande — ${restoLabel} (${packLabel})`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
          <h2 style="color:#0071E3">🔔 Nouvelle commande VisioFlow</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:6px 0;color:#666;width:140px">Pack</td><td style="padding:6px 0;font-weight:600">${packLabel}</td></tr>
            <tr><td style="padding:6px 0;color:#666">Restaurant</td><td style="padding:6px 0;font-weight:600">${restoLabel}</td></tr>
            <tr><td style="padding:6px 0;color:#666">Email client</td><td style="padding:6px 0">${clientEmail}</td></tr>
            <tr><td style="padding:6px 0;color:#666">Doc Firestore</td><td style="padding:6px 0;font-size:12px;color:#888">${docId}</td></tr>
            <tr><td style="padding:6px 0;color:#666">Session Stripe</td><td style="padding:6px 0;font-size:12px;color:#888">${sessionId}</td></tr>
          </table>
          <p style="margin-top:20px;color:#888;font-size:13px">
            Connecte-toi au dashboard pour voir tous les détails et générer le site.
          </p>
        </div>
      `,
    })

    // Marquer comme traité (idempotence)
    await markSessionProcessed(sessionId)

    res.status(200).json({ success: true })
  } catch (err) {
    console.error('[send-confirmation]', err.message)
    res.status(500).json({ error: err.message })
  }
}
