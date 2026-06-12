export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { password } = req.body || {}
  if (!password) return res.status(400).json({ error: 'Mot de passe manquant' })

  const valid = password === process.env.ADMIN_PASSWORD

  if (!valid) return res.status(401).json({ error: 'Code incorrect' })

  const token = process.env.ADMIN_TOKEN
  res.setHeader(
    'Set-Cookie',
    `vf_admin=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=86400`
  )
  res.status(200).json({ ok: true })
}
