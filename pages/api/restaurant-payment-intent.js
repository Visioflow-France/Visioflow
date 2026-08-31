// Crée un PaymentIntent pour les commandes du restaurant — l'argent va sur le compte Stripe du restaurant
// VisioFlow prend automatiquement une commission (PLATFORM_FEE_PERCENT dans .env.local)
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) return res.status(500).json({ error: 'STRIPE_SECRET_KEY manquant' })

  const { amount, currency = 'eur', projectId, description } = req.body
  if (!amount || !projectId) return res.status(400).json({ error: 'amount et projectId requis' })

  // Récupérer l'account Stripe du restaurant depuis Firebase
  const FIREBASE_PROJECT_ID = 'visioflow-cb6eb-9d051'
  const FIREBASE_API_KEY    = 'AIzaSyD2R3SfaC6ifiA_juCfM_1q7SRaAm-G1gY'

  let stripeAccountId = null
  try {
    const fbRes = await fetch(
      `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents/client_projects/${projectId}?key=${FIREBASE_API_KEY}`,
      { cache: 'no-store' }
    )
    const doc = await fbRes.json()
    stripeAccountId = doc?.fields?.stripeAccountId?.stringValue || null
  } catch (e) {
    console.warn('[restaurant-payment-intent] Firebase fetch failed:', e.message)
  }

  if (!stripeAccountId) {
    return res.status(400).json({ error: 'Ce restaurant n\'a pas encore connecté son compte Stripe.' })
  }

  // Commission VisioFlow (ex: 2%)
  const feePercent = parseFloat(process.env.PLATFORM_FEE_PERCENT || '2')
  const applicationFee = Math.round(amount * feePercent / 100)

  try {
    const Stripe = (await import('stripe')).default
    const stripe = new Stripe(secretKey, { apiVersion: '2023-10-16' })

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      automatic_payment_methods: { enabled: true },
      description: description || 'Commande restaurant',
      application_fee_amount: applicationFee,
      transfer_data: {
        destination: stripeAccountId,
      },
    })

    res.status(200).json({ clientSecret: paymentIntent.client_secret })
  } catch (err) {
    console.error('[restaurant-payment-intent]', err.message)
    res.status(500).json({ error: err.message })
  }
}
