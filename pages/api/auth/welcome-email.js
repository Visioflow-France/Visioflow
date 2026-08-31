export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { email, name } = req.body
  if (!email) return res.status(400).json({ error: 'email manquant' })

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey || apiKey.startsWith('re_XXX')) return res.status(200).json({ skipped: true })

  const prenom = name ? name.split(' ')[0] : ''

  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || 'VisioFlow <noreply@visioflow.fr>',
        to: email,
        subject: '✅ Bienvenue sur VisioFlow !',
        html: `
          <div style="font-family:sans-serif;max-width:520px;margin:0 auto;background:#0f172a;color:#f1f5f9;padding:32px;border-radius:16px">
            <div style="text-align:center;margin-bottom:24px">
              <div style="font-size:36px;margin-bottom:8px">👋</div>
              <h1 style="font-size:24px;font-weight:800;margin:0;color:#fff">Bienvenue${prenom ? `, ${prenom}` : ''} !</h1>
              <p style="color:rgba(255,255,255,.5);margin-top:6px;font-size:14px">Votre compte VisioFlow a bien été créé.</p>
            </div>
            <div style="background:rgba(255,255,255,.06);border-radius:12px;padding:18px 22px;margin-bottom:20px;font-size:14px;line-height:1.7;color:rgba(255,255,255,.8)">
              Vous pouvez dès maintenant passer commande et suivre l'avancement de votre site depuis votre espace client.
            </div>
            <p style="font-size:12px;color:rgba(255,255,255,.25);text-align:center;margin:0">
              Une question ? Répondez à cet email — nous répondons sous 24h.
            </p>
          </div>
        `,
      }),
    })
    res.status(200).json({ success: true })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
