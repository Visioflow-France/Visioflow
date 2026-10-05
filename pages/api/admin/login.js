export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { password } = req.body || {}
  if (!password) return res.status(400).json({ error: 'Mot de passe manquant' })

  const valid = password === process.env.ADMIN_PASSWORD

  if (!valid) return res.status(401).json({ error: 'Code incorrect' })

  const token = process.env.ADMIN_TOKEN
  /* Domaine partagé en prod : la session vaut pour visioflow.fr ET
     admin.visioflow.fr (en dev, cookie host-only pour rester compatible
     avec localhost). */
  const domain = process.env.NODE_ENV === 'production' ? '; Domain=visioflow.fr' : ''
  res.setHeader(
    'Set-Cookie',
    `vf_admin=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=86400${domain}`
  )
  res.status(200).json({ ok: true })
}
