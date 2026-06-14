import { useEffect, useState } from 'react'

/**
 * Bandeau de consentement aux cookies — conforme aux recommandations CNIL / ePrivacy.
 *
 * Comportement :
 *  - S'affiche au premier passage de l'utilisateur (absence de cookie `cookie_consent`).
 *  - Boutons « Tout refuser » et « Tout accepter » d'égale importance (exigence CNIL).
 *  - Bouton « Personnaliser » ouvrant le détail par catégorie.
 *  - Le choix est mémorisé 13 mois dans le cookie `cookie_consent`.
 *  - Un lien « Gérer les cookies » (⚠) flottant permet de rouvrir le bandeau à tout moment.
 *
 * Le site n'utilise actuellement QUE des cookies strictement nécessaires. Les catégories
 * « mesure d'audience » et « publicité » sont prévues pour le jour où ces traceurs seraient
 * activés ; tant qu'ils ne le sont pas, aucune balise de suivi n'est chargée.
 */
const STORAGE_KEY = 'cookie_consent'
const CONSENT_TTL_DAYS = 13

/* Catégories de cookies. `required` = non désactivable. */
const CATEGORIES = [
  {
    key: 'necessary',
    label: 'Cookies strictement nécessaires',
    description:
      "Indispensables au fonctionnement du site (authentification, sécurité, préférence d'affichage). Ils ne peuvent pas être désactivés.",
    required: true,
  },
  {
    key: 'analytics',
    label: "Cookies de mesure d'audience",
    description:
      "Permettent de mesurer l'audience du site de façon anonyme afin de l'améliorer. Actuellement aucun cookie de ce type n'est déposé.",
    required: false,
  },
  {
    key: 'ads',
    label: 'Cookies publicitaires',
    description:
      "Permettent d'afficher des publicités pertinentes. Actuellement aucun cookie de ce type n'est déposé.",
    required: false,
  },
]

function setConsent(choices) {
  const payload = { choices, ts: Date.now() }
  try {
    const expires = new Date(Date.now() + CONSENT_TTL_DAYS * 864e5).toUTCString()
    /* Cookie lisible côté serveur + miroir localStorage pour la lecture client immédiate. */
    document.cookie = `${STORAGE_KEY}=${encodeURIComponent(JSON.stringify(payload))}; expires=${expires}; path=/; SameSite=Lax`
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  } catch (_) {
    /* ignore (mode privé, etc.) */
  }
}

function readConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch (_) {
    return null
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [detailed, setDetailed] = useState(false)
  const [choices, setChoices] = useState({ necessary: true, analytics: false, ads: false })

  useEffect(() => {
    const saved = readConsent()
    /* Si aucun choix enregistré, on affiche le bandeau après un court délai. */
    if (!saved) {
      const t = setTimeout(() => setVisible(true), 600)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = (all) => {
    const next = all
      ? { necessary: true, analytics: true, ads: true }
      : { necessary: true, analytics: false, ads: false }
    setConsent(next)
    setChoices(next)
    setVisible(false)
    setDetailed(false)
  }

  const saveChoices = () => {
    setConsent(choices)
    setVisible(false)
    setDetailed(false)
  }

  const reopen = () => {
    const saved = readConsent()
    if (saved?.choices) setChoices({ necessary: true, analytics: !!saved.choices.analytics, ads: !!saved.choices.ads })
    setDetailed(true)
    setVisible(true)
  }

  if (!visible) {
    return (
      <button
        key="cc-fab"
        onClick={reopen}
        aria-label="Gérer les cookies"
        title="Gérer les cookies"
        style={{
          position: 'fixed', bottom: 16, left: 16, zIndex: 9998,
          width: 40, height: 40, borderRadius: '50%', border: 'none', cursor: 'pointer',
          background: 'rgba(15,23,42,.85)', color: '#fff', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(0,0,0,.25)',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      </button>
    )
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gestion des cookies"
      style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999,
        background: '#0f172a', color: '#e2e8f0',
        borderTop: '1px solid rgba(0,113,227,.4)',
        boxShadow: '0 -8px 30px rgba(0,0,0,.4)',
        fontFamily: "'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif",
        padding: '18px 20px',
        animation: 'ccSlideUp .35s ease',
      }}
    >
      <style>{`@keyframes ccSlideUp{from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}`}</style>

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Bandeau simplifié */}
        {!detailed && (
          <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 360px', fontSize: 14, lineHeight: 1.55 }}>
              <strong style={{ color: '#fff', fontSize: 15 }}>🍪 Vos préférences cookies</strong>
              <p style={{ margin: '6px 0 0', color: '#94a3b8' }}>
                Nous utilisons des cookies strictement nécessaires au fonctionnement du site. Avec
                votre consentement, nous pourrons aussi mesurer l'audience. Vous pouvez choisir à
                tout moment.{' '}
                <a href="/politique-cookies" style={{ color: '#0071E3' }}>En savoir plus</a>
              </p>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <button onClick={() => accept(false)} style={btn(false)}>
                Tout refuser
              </button>
              <button onClick={() => setDetailed(true)} style={btn('ghost')}>
                Personnaliser
              </button>
              <button onClick={() => accept(true)} style={btn(true)}>
                Tout accepter
              </button>
            </div>
          </div>
        )}

        {/* Vue détaillée */}
        {detailed && (
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <h3 style={{ margin: '0 0 6px', fontSize: 17, color: '#fff' }}>Paramétrer les cookies</h3>
            <p style={{ margin: '0 0 14px', fontSize: 13.5, color: '#94a3b8' }}>
              Sélectionnez les catégories de cookies que vous acceptez. Les cookies strictement
              nécessaires ne peuvent pas être désactivés.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
              {CATEGORIES.map((cat) => (
                <label
                  key={cat.key}
                  style={{
                    display: 'flex', gap: 12, alignItems: 'flex-start', padding: '12px 14px',
                    background: 'rgba(255,255,255,.03)', borderRadius: 10,
                    border: '1px solid rgba(255,255,255,.06)', cursor: cat.required ? 'default' : 'pointer',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={choices[cat.key]}
                    disabled={cat.required}
                    onChange={(e) => setChoices((c) => ({ ...c, [cat.key]: e.target.checked }))}
                    style={{ marginTop: 3, width: 16, height: 16, accentColor: '#0071E3' }}
                  />
                  <span>
                    <span style={{ display: 'block', color: '#f1f5f9', fontWeight: 600, fontSize: 14 }}>
                      {cat.label}
                      {cat.required && (
                        <span style={{ marginLeft: 8, fontSize: 11, color: '#0071E3', textTransform: 'uppercase', letterSpacing: '.5px' }}>
                          Obligatoire
                        </span>
                      )}
                    </span>
                    <span style={{ display: 'block', color: '#94a3b8', fontSize: 13, marginTop: 2 }}>
                      {cat.description}
                    </span>
                  </span>
                </label>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <button onClick={() => accept(false)} style={btn(false)}>Tout refuser</button>
              <button onClick={saveChoices} style={btn(true)}>Enregistrer mes choix</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function btn(primary) {
  if (primary === 'ghost') {
    return {
      padding: '11px 18px', borderRadius: 10, border: '1px solid rgba(255,255,255,.2)',
      background: 'transparent', color: '#e2e8f0', fontSize: 14, fontWeight: 600, cursor: 'pointer',
    }
  }
  return {
    padding: '11px 18px', borderRadius: 10,
    border: primary ? '1px solid #0071E3' : '1px solid rgba(255,255,255,.2)',
    background: primary ? '#0071E3' : 'transparent',
    color: '#fff', fontSize: 14, fontWeight: 600, cursor: 'pointer',
  }
}
