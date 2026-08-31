import { db } from '../../../lib/firebase-admin'

function generateCode() {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { email } = req.body
  if (!email) return res.status(400).json({ error: 'email manquant' })

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey || apiKey.startsWith('re_XXX')) {
    return res.status(500).json({ error: 'Service email non configuré' })
  }

  const code = generateCode()
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000).toISOString()

  // Invalider les anciens codes pour cet email
  const old = await db.collection('verification_codes')
    .where('email', '==', email.toLowerCase())
    .where('used', '==', false)
    .get()
  const batch = db.batch()
  old.docs.forEach(d => batch.update(d.ref, { used: true }))
  await batch.commit()

  // Stocker le nouveau code
  await db.collection('verification_codes').add({
    email: email.toLowerCase(),
    code,
    expiresAt,
    used: false,
    createdAt: new Date().toISOString(),
  })

  // Envoyer l'email
  const resp = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.RESEND_FROM || 'VisioFlow <noreply@visioflow.fr>',
      to: email.toLowerCase(),
      subject: `${code} — Votre code de vérification VisioFlow`,
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;background:#0f172a;color:#f1f5f9;padding:32px;border-radius:16px">
          <div style="text-align:center;margin-bottom:28px">
            <div style="font-size:32px;margin-bottom:8px">🔐</div>
            <h1 style="font-size:22px;font-weight:800;margin:0;color:#fff">Confirmez votre email</h1>
            <p style="color:rgba(255,255,255,.5);margin-top:6px;font-size:13px">Entrez ce code dans VisioFlow pour activer votre compte</p>
          </div>
          <div style="background:rgba(0,113,227,.12);border:1px solid rgba(0,113,227,.3);border-radius:14px;padding:24px;text-align:center;margin-bottom:24px">
            <div style="font-size:42px;font-weight:900;letter-spacing:10px;color:#60a5fa;font-family:monospace">${code}</div>
            <p style="margin:10px 0 0;font-size:12px;color:rgba(255,255,255,.35)">Valable 15 minutes</p>
          </div>
          <p style="font-size:12px;color:rgba(255,255,255,.25);text-align:center;margin:0">
            Si vous n'avez pas créé de compte, ignorez cet email.
          </p>
        </div>
      `,
    }),
  })

  if (!resp.ok) {
    const err = await resp.text()
    console.error('[send-verification] Resend error:', err)
    return res.status(500).json({ error: 'Erreur envoi email' })
  }

  res.status(200).json({ success: true })
}
