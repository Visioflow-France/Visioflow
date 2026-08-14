import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import AssistanceWidget from '../components/AssistanceWidget'

const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  : null

const PACKS = {
  essentiel: { label: 'Pack Essentiel', price: '150 €', color: '#6b7280', features: ['Site vitrine professionnel', 'Design sur mesure', 'Responsive mobile', 'Livré en 5 jours', 'Hébergement à vie inclus'] },
  premium:   { label: 'Pack Premium',   price: '490 €', color: '#0071E3', features: ['Site avec commandes en ligne', 'Panier & paiement intégré', 'Panel admin restaurant', 'Responsive mobile', 'Livré en 5 jours', 'Hébergement à vie inclus'], stripeExpress: true },
}

/* ── Formulaire avec tous les moyens de paiement Stripe ── */
function CheckoutForm({ pack, restaurantName, onSuccess, livePrice }) {
  const stripe   = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [step, setStep]       = useState('')
  const [error, setError]     = useState('')
  const [ready, setReady]     = useState(false)
  const packData = PACKS[pack] || PACKS.essentiel

  async function handleSubmit(e) {
    e.preventDefault()
    if (!stripe || !elements) return
    setLoading(true)
    setError('')
    setStep('Traitement…')

    const { error: confirmError, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin + '/paiement?success=1&pack=' + pack + '&resto=' + encodeURIComponent(restaurantName || ''),
      },
      redirect: 'if_required',
    })

    if (confirmError) {
      setError(confirmError.message)
      setLoading(false)
      setStep('')
    } else if (paymentIntent && (paymentIntent.status === 'succeeded' || paymentIntent.status === 'processing')) {
      setStep('Paiement confirmé ✓')
      setTimeout(() => onSuccess(), 800)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {!ready && !error && (
        <div style={{ textAlign: 'center', padding: '32px 0', color: '#6b7280' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0071E3" strokeWidth="2" style={{ animation: 'spin 1s linear infinite', display: 'block', margin: '0 auto 10px' }}>
            <circle cx="12" cy="12" r="10" strokeDasharray="31.4" strokeDashoffset="10"/>
          </svg>
          Chargement des moyens de paiement…
        </div>
      )}
      <div style={{ marginBottom: 20, display: ready ? 'block' : 'none' }}>
        <PaymentElement
          onReady={() => setReady(true)}
          onLoadError={(e) => setError('Erreur chargement Stripe : ' + (e?.error?.message || JSON.stringify(e)))}
          options={{ layout: 'tabs' }}
        />
      </div>

      {error && (
        <div style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: 10, padding: '12px 16px', fontSize: 13.5, marginBottom: 14 }}>
          ⚠️ {error}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || !ready || loading}
        style={{
          width: '100%', padding: '15px', borderRadius: 14, marginTop: 4,
          background: step === 'Paiement confirmé ✓' ? '#10b981' : loading ? '#6b7280' : '#0071E3',
          color: '#fff', fontSize: 16, fontWeight: 700, border: 'none',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontFamily: 'Inter, sans-serif', transition: 'background .3s',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}
      >
        {loading ? (
          <>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              style={{ animation: step === 'Paiement confirmé ✓' ? 'none' : 'spin 1s linear infinite' }}>
              {step === 'Paiement confirmé ✓'
                ? <polyline points="20 6 9 17 4 12"/>
                : <circle cx="12" cy="12" r="10" strokeDasharray="31.4" strokeDashoffset="10"/>}
            </svg>
            {step}
          </>
        ) : (
          <>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
            </svg>
            Payer {livePrice || packData.price}
          </>
        )}
      </button>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 14, color: '#9ca3af', fontSize: 12 }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
        Paiement sécurisé SSL · Stripe
      </div>
    </form>
  )
}

/* ── Auth gate ── */
function AuthGate({ onAuth }) {
  const [tab, setTab]             = useState('login')
  const [name, setName]           = useState('')
  const [email, setEmail]         = useState('')
  const [password, setPass]       = useState('')
  const [confirm, setConf]        = useState('')
  const [error, setError]         = useState('')
  const [loading, setLoading]     = useState(false)
  const [verifying, setVerifying] = useState(false) // étape vérification code
  const [pendingEmail, setPendingEmail] = useState('')
  const [code, setCode]           = useState('')
  const [resendCooldown, setResendCooldown] = useState(0)

  // Countdown pour "Renvoyer le code"
  useEffect(() => {
    if (resendCooldown <= 0) return
    const t = setTimeout(() => setResendCooldown(v => v - 1), 1000)
    return () => clearTimeout(t)
  }, [resendCooldown])

  async function submit(e) {
    e.preventDefault()
    setError('')
    if (tab === 'register' && password !== confirm) return setError('Les mots de passe ne correspondent pas.')
    setLoading(true)
    const route = tab === 'login' ? '/api/auth/login' : '/api/auth/register'
    const body  = tab === 'login' ? { email, password } : { email, password, name }
    try {
      const r = await fetch(route, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      const data = await r.json()
      if (!r.ok) { setError(data.error || 'Erreur'); setLoading(false); return }
      if (data.requiresVerification) {
        // Inscription → passer à l'étape de vérification
        setPendingEmail(data.email)
        setVerifying(true)
        setResendCooldown(30)
        setLoading(false)
        return
      }
      try { sessionStorage.setItem('vf_client', JSON.stringify({ token: data.token, email: data.email, name: data.name })) } catch {}
      onAuth(data)
    } catch {
      setError('Erreur réseau')
      setLoading(false)
    }
  }

  async function submitCode(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const r = await fetch('/api/auth/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: pendingEmail, code }),
      })
      const data = await r.json()
      if (!r.ok) { setError(data.error || 'Code invalide'); setLoading(false); return }
      try { sessionStorage.setItem('vf_client', JSON.stringify({ token: data.token, email: data.email, name: data.name })) } catch {}
      onAuth(data)
    } catch {
      setError('Erreur réseau')
      setLoading(false)
    }
  }

  async function resendCode() {
    if (resendCooldown > 0) return
    setError('')
    setResendCooldown(30)
    await fetch('/api/auth/send-verification', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: pendingEmail }),
    }).catch(() => {})
  }

  const inp = { background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 12, padding: '12px 16px', color: '#fff', fontSize: 14, width: '100%', outline: 'none', fontFamily: 'Inter,sans-serif', boxSizing: 'border-box' }
  const lbl = { display: 'block', fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,.4)', marginBottom: 5, textTransform: 'uppercase', letterSpacing: '.06em' }

  // ── Étape vérification code ──
  if (verifying) return (
    <div style={{ width: '100%', maxWidth: 420 }}>
      <div style={{ background: '#141724', border: '1px solid rgba(255,255,255,.1)', borderRadius: 24, overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,.4)' }}>
        <div style={{ padding: '36px 32px 0', textAlign: 'center' }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg,#0071E3,#38bdf8)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 24 }}>🔐</div>
          <div style={{ fontFamily: 'Outfit,sans-serif', fontWeight: 800, fontSize: 22, color: '#fff', marginBottom: 4 }}>Vérifiez votre email</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.35)', marginBottom: 28, lineHeight: 1.6 }}>
            Un code à 6 chiffres a été envoyé à<br/>
            <strong style={{ color: '#60a5fa' }}>{pendingEmail}</strong>
          </div>
        </div>
        <form onSubmit={submitCode} style={{ padding: '0 32px 28px' }}>
          {error && <div style={{ background: 'rgba(239,68,68,.12)', border: '1px solid rgba(239,68,68,.25)', borderRadius: 10, padding: '10px 14px', fontSize: 12, color: '#f87171', marginBottom: 14 }}>⚠️ {error}</div>}
          <div style={{ marginBottom: 20 }}>
            <label style={lbl}>Code de vérification</label>
            <input
              style={{ ...inp, fontSize: 28, fontWeight: 700, letterSpacing: 8, textAlign: 'center', fontFamily: 'monospace' }}
              type="text" inputMode="numeric" maxLength={6} placeholder="000000"
              value={code} onChange={e => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
              autoFocus required
            />
          </div>
          <button type="submit" disabled={loading || code.length < 6}
            style={{ width: '100%', padding: 14, border: 'none', borderRadius: 14, background: loading ? '#6b7280' : '#0071E3', color: '#fff', fontSize: 15, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'Inter,sans-serif', marginBottom: 14 }}>
            {loading ? 'Vérification…' : 'Confirmer →'}
          </button>
          <div style={{ textAlign: 'center' }}>
            <button type="button" onClick={resendCode} disabled={resendCooldown > 0}
              style={{ background: 'none', border: 'none', color: resendCooldown > 0 ? 'rgba(255,255,255,.2)' : '#60a5fa', fontSize: 13, cursor: resendCooldown > 0 ? 'default' : 'pointer', fontFamily: 'Inter,sans-serif' }}>
              {resendCooldown > 0 ? `Renvoyer dans ${resendCooldown}s` : 'Renvoyer le code'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )

  // ── Formulaire login / register ──
  return (
    <div style={{ width: '100%', maxWidth: 420 }}>
      <div style={{ background: '#141724', border: '1px solid rgba(255,255,255,.1)', borderRadius: 24, overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,.4)' }}>
        <div style={{ padding: '36px 32px 0', textAlign: 'center' }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg,#0071E3,#38bdf8)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 24 }}>👤</div>
          <div style={{ fontFamily: 'Outfit,sans-serif', fontWeight: 800, fontSize: 24, color: '#fff', marginBottom: 4 }}>Espace client</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.35)', marginBottom: 24, lineHeight: 1.5 }}>Connectez-vous pour finaliser votre commande</div>
        </div>

        <div style={{ display: 'flex', background: 'rgba(255,255,255,.05)', borderRadius: 12, padding: 3, margin: '0 32px 24px' }}>
          {['login','register'].map(t => (
            <button key={t} onClick={() => { setTab(t); setError('') }}
              style={{ flex: 1, padding: '10px', border: 'none', borderRadius: 10, fontFamily: 'Inter,sans-serif', fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'all .2s',
                background: tab === t ? '#0071E3' : 'none', color: tab === t ? '#fff' : 'rgba(255,255,255,.4)' }}>
              {t === 'login' ? 'Connexion' : 'Inscription'}
            </button>
          ))}
        </div>

        <form onSubmit={submit} style={{ padding: '0 32px 28px' }}>
          {error && <div style={{ background: 'rgba(239,68,68,.12)', border: '1px solid rgba(239,68,68,.25)', borderRadius: 10, padding: '10px 14px', fontSize: 12, color: '#f87171', marginBottom: 14 }}>⚠️ {error}</div>}

          {tab === 'register' && (
            <div style={{ marginBottom: 14 }}>
              <label style={lbl}>Votre nom</label>
              <input style={inp} type="text" placeholder="Prénom Nom" value={name} onChange={e => setName(e.target.value)} required />
            </div>
          )}
          <div style={{ marginBottom: 14 }}>
            <label style={lbl}>Email</label>
            <input style={inp} type="email" placeholder="votre@email.com" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div style={{ marginBottom: tab === 'register' ? 14 : 20 }}>
            <label style={lbl}>Mot de passe</label>
            <input style={inp} type="password" placeholder="••••••••" value={password} onChange={e => setPass(e.target.value)} required />
          </div>
          {tab === 'register' && (
            <div style={{ marginBottom: 20 }}>
              <label style={lbl}>Confirmer le mot de passe</label>
              <input style={inp} type="password" placeholder="••••••••" value={confirm} onChange={e => setConf(e.target.value)} required />
            </div>
          )}
          <button type="submit" disabled={loading}
            style={{ width: '100%', padding: 14, border: 'none', borderRadius: 14, background: loading ? '#6b7280' : '#0071E3', color: '#fff', fontSize: 15, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'Inter,sans-serif' }}>
            {loading ? 'Chargement…' : tab === 'login' ? 'Se connecter →' : 'Créer mon compte →'}
          </button>
        </form>
      </div>
    </div>
  )
}

/* ── Page principale ── */
export default function Paiement() {
  const router   = useRouter()
  const { pack = 'essentiel', resto = '', success } = router.query
  const packData = PACKS[pack] || PACKS.essentiel

  const [clientSecret, setClientSecret] = useState('')
  const [loading, setLoading]           = useState(true)
  const [apiError, setApiError]         = useState('')
  const [paid, setPaid]                 = useState(false)
  const [livePrice, setLivePrice]       = useState(null)
  const [authUser, setAuthUser]         = useState(null)   // { email, name, token }
  const [authChecked, setAuthChecked]   = useState(false)

  // Restore session client
  useEffect(() => {
    try {
      // Session du paiement (après login/register sur cette page)
      const saved = sessionStorage.getItem('vf_client')
      if (saved) { setAuthUser(JSON.parse(saved)); setAuthChecked(true); return }
      // Session du site (connexion en haut à droite) — évite de se reconnecter
      const localSession = localStorage.getItem('vf_client_session')
      if (localSession) {
        const u = JSON.parse(localSession)
        if (u?.email) { setAuthUser({ email: u.email, name: u.name || '', token: 'local' }); setAuthChecked(true); return }
      }
    } catch {}
    setAuthChecked(true)
  }, [])

  useEffect(() => {
    if (!router.isReady || !authChecked) return
    if (!authUser && !success) return // attendre l'auth avant de charger Stripe

    if (success) {
      // Après un redirect Stripe (ex: 3DS), sauvegarder le formulaire en attente
      try {
        const clientEmail = authUser?.email || ''
        const raw = sessionStorage.getItem('vf_pending_form')
        const formData = raw ? { ...JSON.parse(raw), email: clientEmail } : {
          type: 'direct_payment', pack,
          restaurantName: resto ? decodeURIComponent(resto) : '',
          email: clientEmail,
        }
        fetch('/api/save-form', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ formData }),
        }).catch(() => {})
        if (raw) sessionStorage.removeItem('vf_pending_form')
      } catch (e) {
        console.warn('sessionStorage indisponible:', e.message)
      }
      setLoading(false)
      return
    }

    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pack, restaurantName: decodeURIComponent(resto || '') }),
    })
      .then(r => r.json())
      .then(data => {
        if (data.error) { setApiError('Erreur Stripe : ' + data.error); setLoading(false); return }
        if (!data.clientSecret) { setApiError('Clé manquante — vérifiez .env.local et redémarrez.'); setLoading(false); return }
        setClientSecret(data.clientSecret)
        // Mettre à jour le prix affiché avec le montant réel facturé
        if (data.amount) setLivePrice((data.amount / 100).toFixed(0) + ' €')
        setLoading(false)
      })
      .catch(err => { setApiError('Erreur réseau : ' + err.message); setLoading(false) })
  }, [router.isReady, pack, resto, success, authUser, authChecked])

  const stripeOptions = {
    clientSecret,
    locale: 'fr',
    appearance: {
      theme: 'night',
      variables: {
        colorPrimary:         '#0071E3',
        colorBackground:      '#0d1625',
        colorText:            '#f1f5f9',
        colorDanger:          '#f87171',
        fontFamily:           'Inter, -apple-system, sans-serif',
        borderRadius:         '10px',
        colorInputBackground: '#1a2540',
        colorInputBorder:     'rgba(255,255,255,0.12)',
      },
    },
  }

  const isSuccess = success === '1' || paid

  return (
    <>
      <Head>
        <title>Paiement — Visioflow</title>
        <meta name="robots" content="noindex,nofollow" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <style>{`
          *{box-sizing:border-box;margin:0;padding:0}
          body{font-family:'Inter Tight',sans-serif;min-height:100dvh}
          @keyframes spin{to{transform:rotate(360deg)}}
          @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
          @keyframes pulse{0%,100%{opacity:.4}50%{opacity:.8}}
          .fade-up{animation:fadeUp .5s ease forwards}
          @media(max-width:700px){.pay-grid{grid-template-columns:1fr!important}}
        `}</style>
      </Head>

      <div style={{ minHeight: '100dvh', background: 'linear-gradient(135deg,#0f172a 0%,#1e3a5f 100%)', display: 'flex', flexDirection: 'column' }}>

        {/* Header */}
        <div style={{ padding: '18px 32px', borderBottom: '1px solid rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ fontFamily: 'Outfit,sans-serif', fontSize: 22, fontWeight: 800, color: '#fff', textDecoration: 'none' }}>
            Visio<span style={{ color: '#60a5fa' }}>Flow</span>
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(255,255,255,.45)' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
            Paiement 100% sécurisé
          </div>
        </div>

        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 16px' }}>

          {/* Auth gate — si pas connecté et pas en mode succès */}
          {authChecked && !authUser && !isSuccess ? (
            <div className="fade-up">
              <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: 28, fontWeight: 900, color: '#fff', marginBottom: 8 }}>Presque terminé !</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,.5)' }}>Créez votre espace client pour finaliser votre commande</div>
              </div>
              <AuthGate onAuth={user => setAuthUser(user)} />
            </div>
          ) : null}

          {/* Succès */}
          {isSuccess ? (
            <div className="fade-up" style={{ textAlign: 'center', maxWidth: 480 }}>
              <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(52,211,153,.15)', border: '2px solid rgba(52,211,153,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: 32, fontWeight: 900, color: '#fff', marginBottom: 12 }}>Paiement confirmé !</div>
              <div style={{ fontSize: 15, color: 'rgba(255,255,255,.65)', lineHeight: 1.7, marginBottom: 32 }}>
                Merci pour votre commande{resto ? ` pour ${decodeURIComponent(resto)}` : ''}.
                <br />Notre équipe vous contacte sous 24h pour démarrer.
              </div>
              <div style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 14, padding: '18px 24px', marginBottom: 28, textAlign: 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', fontSize: 15 }}>
                  <span>{packData.label}</span>
                  <span style={{ fontWeight: 700, color: '#60a5fa' }}>{livePrice || packData.price}</span>
                </div>
              </div>
              <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 980, background: '#0071E3', color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 14 }}>
                ← Retour à l'accueil
              </a>
            </div>
          ) : authUser ? (
            <div className="pay-grid fade-up" style={{ width: '100%', maxWidth: 900, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>

              {/* Gauche — récap commande */}
              <div style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 20, padding: '32px 28px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.5)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 20 }}>Récapitulatif de commande</div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid rgba(255,255,255,.08)' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: packData.color + '22', border: '1px solid ' + packData.color + '44', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={packData.color} strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: 18, fontWeight: 800, color: '#fff' }}>{packData.label}</div>
                    {resto && <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)', marginTop: 3 }}>{decodeURIComponent(resto)}</div>}
                  </div>
                </div>

                <div style={{ flex: 1 }}>
                  {packData.features.map((f, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 0', borderBottom: '1px solid rgba(255,255,255,.08)', fontSize: 13.5, color: 'rgba(255,255,255,.72)' }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                      {f}
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'rgba(255,255,255,.5)', fontSize: 14 }}>Total TTC</span>
                  {loading ? (
                    <span style={{ display: 'inline-block', width: 90, height: 38, background: 'rgba(255,255,255,.1)', borderRadius: 8, animation: 'pulse 1.5s ease-in-out infinite' }} />
                  ) : (
                    <span style={{ fontFamily: 'Outfit,sans-serif', fontSize: 34, fontWeight: 900, color: '#fff' }}>{livePrice || packData.price}</span>
                  )}
                </div>

                <div style={{ marginTop: 16, padding: '10px 14px', background: 'rgba(52,211,153,.08)', border: '1px solid rgba(52,211,153,.2)', borderRadius: 10, fontSize: 12, color: '#34d399', lineHeight: 1.6 }}>
                  ✓ Paiement unique · Zéro abonnement · Livré en 5 jours
                </div>

                {packData.stripeExpress && (
                  <div style={{ marginTop: 12, padding: '12px 16px', background: 'rgba(96,165,250,.08)', border: '1px solid rgba(96,165,250,.25)', borderRadius: 10, fontSize: 12, color: '#60a5fa', lineHeight: 1.6 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, marginTop: 1 }}>
                        <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
                      </svg>
                      <div>
                        <strong>Important : </strong>
                        Pour activer les paiements en ligne sur votre site, nous vous enverrons un lien <strong>Stripe Express</strong> après votre commande. Ce lien vous permettra de configurer votre compte Stripe pour recevoir les paiements de vos clients (processus simple en 5 minutes).
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Droite — Stripe PaymentElement */}
              <div style={{ background: '#0d1625', border: '1px solid rgba(255,255,255,.1)', borderRadius: 20, padding: '32px 28px' }}>
                <div style={{ fontFamily: 'Outfit,sans-serif', fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 6 }}>
                  Choisissez votre moyen de paiement
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)', marginBottom: 24 }}>
                  Carte, virement, Apple Pay, Google Pay…
                </div>

                {!stripePromise && (
                  <div style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: 10, padding: 14, fontSize: 13, lineHeight: 1.6 }}>
                    ❌ <strong>Clé Stripe manquante</strong><br/>
                    Ajoutez <code>NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code> dans <code>.env.local</code> et redémarrez.
                  </div>
                )}

                {loading && stripePromise && (
                  <div style={{ textAlign: 'center', padding: '48px 0', color: '#6b7280' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0071E3" strokeWidth="2" style={{ animation: 'spin 1s linear infinite', display: 'block', margin: '0 auto 12px' }}>
                      <circle cx="12" cy="12" r="10" strokeDasharray="31.4" strokeDashoffset="10"/>
                    </svg>
                    Chargement des moyens de paiement…
                  </div>
                )}

                {apiError && (
                  <div style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: 10, padding: 14, fontSize: 13, lineHeight: 1.6 }}>
                    ❌ {apiError}
                  </div>
                )}

                {!loading && !apiError && clientSecret && stripePromise && (
                  <Elements stripe={stripePromise} options={stripeOptions}>
                    <CheckoutForm
                      pack={pack}
                      livePrice={livePrice}
                      restaurantName={resto ? decodeURIComponent(resto) : ''}
                      onSuccess={async () => {
                        try {
                          const raw = sessionStorage.getItem('vf_pending_form')
                          const clientEmail = authUser?.email || ''
                          const formData = raw
                            ? { ...JSON.parse(raw), email: clientEmail }
                            : { type: 'direct_payment', pack, restaurantName: resto ? decodeURIComponent(resto) : '', email: clientEmail }
                          await fetch('/api/save-form', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ formData }),
                          }).catch(() => {})
                          if (raw) sessionStorage.removeItem('vf_pending_form')
                        } catch (e) {
                          console.warn('Erreur sauvegarde formulaire:', e.message)
                        }
                        setPaid(true)
                      }}
                    />
                  </Elements>
                )}
              </div>

            </div>
          ) : null}
        </div>
      </div>
      <AssistanceWidget />
    </>
  )
}
