// Génère un lien Stripe Express pour le restaurateur
// Stripe Express : interface simplifiée, légale en France
export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end()

  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) return res.status(500).json({ error: 'STRIPE_SECRET_KEY manquant dans .env.local' })

  const { projectId, restaurantName, restaurantEmail } = req.query
  if (!projectId) return res.status(400).json({ error: 'projectId manquant' })

  try {
    const Stripe = (await import('stripe')).default
    const stripe = new Stripe(secretKey, { apiVersion: '2023-10-16' })

    const origin = process.env.NEXT_PUBLIC_SITE_URL || 'https://visioflow2.vercel.app'
    const refreshUrl = `${origin}/dashboard`
    const returnUrl = `${origin}/dashboard?stripe_success=true`

    // Pour Stripe Express, on crée un nouveau compte
    // Pour simplifier, on va créer un compte Express avec les infos
    const account = await stripe.accounts.create({
      type: 'express',
      country: 'FR',
      email: restaurantEmail,
      business_profile: {
        name: restaurantName || 'Restaurant',
        url: `${origin}/project/${projectId}`,
      },
      capabilities: {
        transfers: { requested: true },
        card_payments: { requested: true },
      },
    })

    // Créer le lien d'onboarding
    const accountLinkUrl = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: refreshUrl,
      return_url: returnUrl,
      type: 'account_onboarding',
    })

    // Rediriger vers la page qui affiche le lien
    res.redirect(`/stripe-express-link?linkUrl=${encodeURIComponent(accountLinkUrl.url)}&projectId=${projectId}&accountId=${account.id}`)

  } catch (error) {
    console.error('Stripe Express Error:', error)
    res.status(500).json({ error: error.message })
  }
}
