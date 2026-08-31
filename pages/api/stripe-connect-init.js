// Génère l'URL OAuth Stripe Connect pour qu'un restaurant connecte son compte
export default function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end()

  const clientId = process.env.STRIPE_CONNECT_CLIENT_ID
  if (!clientId) return res.status(500).json({ error: 'STRIPE_CONNECT_CLIENT_ID manquant dans .env.local' })

  const { projectId } = req.query
  if (!projectId) return res.status(400).json({ error: 'projectId manquant' })

  const origin = process.env.NEXT_PUBLIC_SITE_URL || 'https://visioflow2.vercel.app'
  const redirectUri = `${origin}/api/stripe-connect-callback`

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    scope: 'read_write',
    state: projectId, // on retrouve le project Firebase dans le callback
    redirect_uri: redirectUri,
    'suggested_capabilities[]': 'transfers',
  })

  res.redirect(`https://connect.stripe.com/oauth/authorize?${params}`)
}
