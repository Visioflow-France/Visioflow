export default function handler(req, res) {
  /* Même Domain que le login : la déconnexion efface le cookie partout. */
  const domain = process.env.NODE_ENV === 'production' ? '; Domain=visioflow.fr' : ''
  res.setHeader('Set-Cookie', `vf_admin=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0${domain}`)
  res.status(200).json({ ok: true })
}
