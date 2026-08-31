// Callback OAuth Stripe Connect : échange le code contre un account ID et le sauvegarde dans Firebase
export default async function handler(req, res) {
  const { code, state: projectId, error } = req.query

  const origin = process.env.NEXT_PUBLIC_SITE_URL || 'https://visioflow2.vercel.app'

  if (error) {
    return res.redirect(`${origin}/dashboard?connect_error=${encodeURIComponent(error)}`)
  }
  if (!code || !projectId) {
    return res.redirect(`${origin}/dashboard?connect_error=missing_params`)
  }

  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) return res.status(500).json({ error: 'STRIPE_SECRET_KEY manquant' })

  try {
    const Stripe = (await import('stripe')).default
    const stripe = new Stripe(secretKey, { apiVersion: '2023-10-16' })

    // Échanger le code contre l'account ID du restaurant
    const response = await stripe.oauth.token({ grant_type: 'authorization_code', code })
    const stripeAccountId = response.stripe_user_id

    // Sauvegarder l'account ID dans Firebase sous le projet
    const FIREBASE_PROJECT_ID = 'visioflow-cb6eb-9d051'
    const FIREBASE_API_KEY    = 'AIzaSyD2R3SfaC6ifiA_juCfM_1q7SRaAm-G1gY'

    await fetch(
      `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents/client_projects/${projectId}?key=${FIREBASE_API_KEY}&updateMask.fieldPaths=stripeAccountId`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: {
            stripeAccountId: { stringValue: stripeAccountId },
          },
        }),
      }
    )

    res.redirect(`${origin}/dashboard?connect_success=1&project=${projectId}`)
  } catch (err) {
    console.error('[Stripe Connect Callback]', err.message)
    res.redirect(`${origin}/dashboard?connect_error=${encodeURIComponent(err.message)}`)
  }
}
