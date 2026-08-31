import { useState, useEffect } from 'react'
import Head from 'next/head'

export default function StripeExpressLinkPage() {
  const [linkUrl, setLinkUrl] = useState('')
  const [projectId, setProjectId] = useState('')
  const [accountId, setAccountId] = useState('')
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Récupérer le lien depuis l'URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const expressLinkUrl = params.get('linkUrl')
    const pid = params.get('projectId')
    const acid = params.get('accountId')
    if (expressLinkUrl) {
      setLinkUrl(expressLinkUrl)
      setProjectId(pid || '')
      setAccountId(acid || '')
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
    const body = encodeURIComponent(`Bonjour,\n\nVotre site est prêt ! Il ne vous reste plus qu'à connecter votre compte Stripe pour commencer à recevoir des paiements.\n\nCliquez sur le lien ci-dessous pour connecter votre compte en quelques minutes :\n\n${linkUrl}\n\nCe lien est sécurisé et vous permettra de :\n- Recevoir les paiements de vos clients directement\n- Gérer vos ventes simplement\n- Être payé automatiquement\n\nCliquez sur ce lien quand vous êtes prêt, devant votre ordinateur.\n\nCordialement,\nL'équipe VisioFlow`)
    window.location.href = `mailto:?subject=${subject}&body=${body}`
  }

  const sendViaWhatsApp = () => {
    const text = encodeURIComponent(`Bonjour ! Votre site VisioFlow est prêt 🎉\n\nVoici le lien pour connecter votre compte Stripe : ${linkUrl}\n\nCliquez dessus quand vous êtes prêt pour commencer à recevoir les paiements !`)
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
        <title>Stripe Express - VisioFlow</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', padding: 20 }}>
        <div style={{ maxWidth: 600, width: '100%', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 40 }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>💳</div>
            <h1 style={{ fontSize: 28, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Stripe Express</h1>
            <p style={{ color: '#94a3b8', fontSize: 14 }}>
              Envoyez ce lien au restaurateur pour qu'il puisse connecter son compte Stripe
            </p>
          </div>

          {/* Info importante */}
          <div style={{ marginBottom: 24, padding: 16, background: 'rgba(0,113,227,0.1)', borderRadius: 12, border: '1px solid rgba(0,113,227,0.2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <span style={{ fontSize: 20 }}>📧</span>
              <div style={{ color: '#0071E3', fontSize: 14, fontWeight: 600 }}>
                Envoyez ce lien au restaurateur
              </div>
            </div>
            <p style={{ color: '#94a3b8', fontSize: 13, margin: 0 }}>
              Le restaurateur pourra cliquer sur ce lien quand il sera prêt, devant son ordinateur.
            </p>
          </div>

          {/* Lien à copier */}
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', color: '#fff', fontSize: 13, fontWeight: 600, marginBottom: 8 }}>
              Lien d'inscription Stripe Express :
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
          <div style={{ marginBottom: 24 }}>
            <div style={{ color: '#94a3b8', fontSize: 13, marginBottom: 12 }}>
              Envoyer le lien par :
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
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
                  <div style={{ fontSize: 12, color: '#94a3b8' }}>Envoyer par email avec message personnalisé</div>
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
          </div>

          {/* Instructions */}
          <div style={{ padding: 16, background: 'rgba(34,197,94,0.1)', borderRadius: 12, border: '1px solid rgba(34,197,94,0.2)', marginBottom: 24 }}>
            <div style={{ color: '#22c55e', fontSize: 13, fontWeight: 600, marginBottom: 8 }}>
              ✅ Comment ça marche ?
            </div>
            <ol style={{ color: '#94a3b8', fontSize: 13, margin: 0, paddingLeft: 20, lineHeight: 1.8 }}>
              <li>Envoyez le lien au restaurateur (email, WhatsApp, etc.)</li>
              <li>Le restaurateur clique sur le lien quand il est prêt</li>
              <li>Il arrive sur une page Stripe sécurisée et simple</li>
              <li>Il remplit ses infos en 5-10 minutes</li>
              <li>Son compte est automatiquement connecté à son site</li>
              <li>Il peut commencer à recevoir des paiements !</li>
            </ol>
          </div>

          {/* Info Stripe Express */}
          <div style={{ padding: 16, background: 'rgba(255,255,255,0.02)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)', marginBottom: 24 }}>
            <div style={{ color: '#f1f5f9', fontSize: 13, fontWeight: 600, marginBottom: 8 }}>
              💡 Pourquoi Stripe Express ?
            </div>
            <ul style={{ color: '#94a3b8', fontSize: 13, margin: 0, paddingLeft: 20, lineHeight: 1.8 }}>
              <li>Processus simple et rapide (5-10 minutes)</li>
              <li>Tout est en français</li>
              <li>Légal et conforme en France</li>
              <li>Dashboard simplifié pour le restaurateur</li>
              <li>Support direct avec Stripe</li>
            </ul>
          </div>

          {/* Bouton retour */}
          <div style={{ textAlign: 'center' }}>
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
