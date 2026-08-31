const PACK_DEFAULTS = {
  essentiel: { amount: 15000, label: 'Pack Essentiel' },
  premium:   { amount: 49000, label: 'Pack Premium'   },
}

const FIRESTORE_URL =
  'https://firestore.googleapis.com/v1/projects/visioflow-cb6eb-9d051/databases/(default)/documents/site_config/main'
const FIREBASE_API_KEY = 'AIzaSyD2R3SfaC6ifiA_juCfM_1q7SRaAm-G1gY'

async function getPriceFromFirestore(pack) {
  try {
    const res = await fetch(`${FIRESTORE_URL}?key=${FIREBASE_API_KEY}`, { cache: 'no-store' })
    if (!res.ok) return null
    const doc = await res.json()
    const packsField = doc?.fields?.packs?.mapValue?.fields
    const priceStr = packsField?.[pack]?.mapValue?.fields?.price?.stringValue
    if (!priceStr) return null
    const cents = Math.round(parseFloat(priceStr.replace(/[^0-9.]/g, '')) * 100)
    return cents > 0 ? cents : null
  } catch {
    return null
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) return res.status(500).json({ error: 'STRIPE_SECRET_KEY manquante dans .env.local' })

  const { pack, restaurantName } = req.body
  if (!PACK_DEFAULTS[pack]) return res.status(400).json({ error: 'Pack invalide : ' + pack })

  // Prix lu depuis Firestore (source de vérité), fallback sur valeur par défaut
  const amountFromFirestore = await getPriceFromFirestore(pack)
  const amount = amountFromFirestore || PACK_DEFAULTS[pack].amount

  try {
    const Stripe = (await import('stripe')).default
    const stripe = new Stripe(secretKey, { apiVersion: '2023-10-16' })

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'eur',
      automatic_payment_methods: { enabled: true },
      metadata: { pack, restaurantName: restaurantName || '' },
    })

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      amount,
    })
  } catch (err) {
    console.error('Stripe error:', err.message)
    res.status(500).json({ error: err.message })
  }
}
