const PACKS = {
  essentiel: { amount: 15000, label: 'Pack Essentiel' },
  premium:   { amount: 49000, label: 'Pack Premium'   },
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) return res.status(500).json({ error: 'STRIPE_SECRET_KEY manquante dans .env.local' })

  const { pack, restaurantName } = req.body
  const packData = PACKS[pack]
  if (!packData) return res.status(400).json({ error: 'Pack invalide : ' + pack })

  try {
    const Stripe = (await import('stripe')).default
    const stripe = new Stripe(secretKey, { apiVersion: '2023-10-16' })

    const paymentIntent = await stripe.paymentIntents.create({
      amount: packData.amount,
      currency: 'eur',
      automatic_payment_methods: { enabled: true },
      metadata: { pack, restaurantName: restaurantName || '' },
    })

    res.status(200).json({ clientSecret: paymentIntent.client_secret })
  } catch (err) {
    console.error('Stripe error:', err.message)
    res.status(500).json({ error: err.message })
  }
}
