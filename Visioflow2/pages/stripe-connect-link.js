import { useState, useEffect } from 'react'
import Head from 'next/head'

export default function StripeConnectLinkPage() {
  const [linkUrl, setLinkUrl] = useState('')
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Récupérer le lien depuis l'URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const stripeConnectUrl = params.get('stripeConnectUrl')
    if (stripeConnectUrl) {
      setLinkUrl(stripeConnectUrl)
    } else {
      setError('Aucun lien trouvé. Veuillez réessayer depuis le dashboard.')
    }
    setLoading(false)
  }, [])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(linkUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const sendViaEmail = () => {
    const subject = encodeURIComponent('Connectez votre compte Stripe pour votre site VisioFlow')
    const body = encodeURIComponent(`Bonjour,\n\nVoici le lien pour connecter votre compte Stripe à votre site :\n\n${linkUrl}\n\nCliquez sur ce lien quand vous êtes prêt à connecter votre compte.\n\nCela permettra à vos clients de payer directement sur votre site.\n\nCordialement,\nL'équipe VisioFlow`)
    window.location.href = `mailto:?subject=${subject}&body=${body}`
  }

  const sendViaWhatsApp = () => {
    const text = encodeURIComponent(`Bonjour ! Voici le lien pour connecter votre compte Stripe à votre site VisioFlow : ${linkUrl}`)
    window.open(`https://wa.me/?text=${text}`, '_blank')
  }

  if (loading) {
    return (
      <div style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', color: '#fff' }}>
        <div>Chargement...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', color: '#fff' }}>
        <div style={{ textAlign: 'center', padding: 20 }}>
          <div style={{ fontSize: 24, marginBottom: 16 }}>❌ Erreur</div>
          <div>{error}</div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Lien Stripe Connect - VisioFlow</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', padding: 20 }}>
        <div style={{ maxWidth: 600, width: '100%', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 40 }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔗</div>
            <h1 style={{ fontSize: 28, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Lien Stripe Connect</h1>
            <p style={{ color: '#94a3b8', fontSize: 14 }}>
              Envoyez ce lien au restaurateur pour qu'il puisse connecter son compte Stripe
            </p>
          </div>

          {/* Lien à copier */}
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', color: '#fff', fontSize: 13, fontWeight: 600, marginBottom: 8 }}>
              Lien à envoyer :
            </label>
            <div style={{ display: 'flex', gap: 8 }}>
              <input
                type="text"
                value={linkUrl}
                readOnly
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(0,0,0,0.3)',
                  color: '#f1f5f9',
                  fontSize: 13,
                  fontFamily: 'monospace'
                }}
              />
              <button
                onClick={copyToClipboard}
                style={{
                  padding: '12px 20px',
                  borderRadius: 8,
                  border: 'none',
                  background: copied ? '#22c55e' : '#0071E3',
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {copied ? '✓ Copié' : '📋 Copier'}
              </button>
            </div>
          </div>

          {/* Options d'envoi */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ color: '#94a3b8', fontSize: 13, marginBottom: 8 }}>
              Envoyer le lien par :
            </div>

            <button
              onClick={sendViaEmail}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '14px 16px',
                borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.02)',
                color: '#fff',
                fontSize: 14,
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <span style={{ fontSize: 20 }}>✉️</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600 }}>Email</div>
                <div style={{ fontSize: 12, color: '#94a3b8' }}>Envoyer par email</div>
              </div>
            </button>

            <button
              onClick={sendViaWhatsApp}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '14px 16px',
                borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.02)',
                color: '#fff',
                fontSize: 14,
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <span style={{ fontSize: 20 }}>💬</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600 }}>WhatsApp</div>
                <div style={{ fontSize: 12, color: '#94a3b8' }}>Envoyer par WhatsApp</div>
              </div>
            </button>
          </div>

          {/* Instructions */}
          <div style={{ marginTop: 32, padding: 16, background: 'rgba(0,113,227,0.1)', borderRadius: 8, border: '1px solid rgba(0,113,227,0.2)' }}>
            <div style={{ color: '#0071E3', fontSize: 13, fontWeight: 600, marginBottom: 8 }}>
              📋 Instructions :
            </div>
            <ol style={{ color: '#94a3b8', fontSize: 13, margin: 0, paddingLeft: 20, lineHeight: 1.8 }}>
              <li>Copiez le lien ou envoyez-le par email/WhatsApp</li>
              <li>Le restaurateur clique sur le lien quand il est prêt</li>
              <li>Il se connecte ou crée son compte Stripe</li>
              <li>Son compte sera automatiquement connecté à son site</li>
            </ol>
          </div>

          {/* Bouton retour */}
          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <a
              href="/dashboard"
              style={{
                display: 'inline-block',
                padding: '10px 24px',
                borderRadius: 8,
                background: 'rgba(255,255,255,0.05)',
                color: '#94a3b8',
                textDecoration: 'none',
                fontSize: 13
              }}
            >
              ← Retour au dashboard
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
