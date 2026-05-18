const PACK_DEFAULTS = {
  essentiel: { amount: 15000, label: 'Pack Essentiel VisioFlow' },
  premium:   { amount: 49000, label: 'Pack Premium VisioFlow'   },
}

const FIRESTORE_URL =
  'https://firestore.googleapis.com/v1/projects/visioflow-cb6eb-9d051/databases/(default)/documents/site_config/main'
const FIREBASE_API_KEY = 'AIzaSyD2R3SfaC6ifiA_juCfM_1q7SRaAm-G1gY'

// Lit le prix d'un pack directement depuis Firestore (toujours à jour)
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

  const { pack, email, clientReferenceId } = req.body
  if (!PACK_DEFAULTS[pack]) return res.status(400).json({ error: 'Pack invalide : ' + pack })

  // Prix lu depuis Firestore (source de vérité), fallback sur valeur par défaut
  const amountFromFirestore = await getPriceFromFirestore(pack)
  const amountCents = amountFromFirestore || PACK_DEFAULTS[pack].amount

  const origin = req.headers.origin
    || req.headers.referer?.split('/').slice(0, 3).join('/')
    || 'https://visioflow2.vercel.app'

  try {
    const Stripe = (await import('stripe')).default
    const stripe = new Stripe(secretKey, { apiVersion: '2023-10-16' })

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'eur',
          unit_amount: amountCents,
          product_data: {
            name: PACK_DEFAULTS[pack].label,
            description: 'Site web restaurant — paiement unique, hébergement inclus',
          },
        },
        quantity: 1,
      }],
      customer_email: email || undefined,
      client_reference_id: clientReferenceId || pack,
      metadata: { pack },
      success_url: origin + '/?paiement=success&pack=' + pack + '&session_id={CHECKOUT_SESSION_ID}',
      cancel_url:  origin + '/?paiement=cancel',
      locale: 'fr',
    })

    res.status(200).json({ url: session.url })
  } catch (err) {
    console.error('[Checkout Session]', err.message)
    res.status(500).json({ error: err.message })
  }
}
