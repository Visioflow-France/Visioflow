import { useState, useEffect } from 'react'

export default function AssistanceWidget() {
  const [mounted, setMounted] = useState(false)
  const [data, setData]       = useState({ label: 'Besoin d\'aide ?', phone1: '', phone2: '' })
  const [open, setOpen]       = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
    fetch('/api/public/assistance')
      .then(r => r.json())
      .then(d => setData(d))
      .catch(() => {})
      .finally(() => setTimeout(() => setVisible(true), 800))
  }, [])

  if (!mounted) return null

  const phones = [data.phone1, data.phone2].filter(Boolean)

  return (
    <div style={{
      position: 'fixed',
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'stretch',
      fontFamily: 'Inter, sans-serif',
      transition: 'opacity 0.4s ease, transform 0.4s ease',
      opacity: visible ? 1 : 0,
      pointerEvents: visible ? 'auto' : 'none',
    }}>

      {/* Panel qui s'ouvre à gauche */}
      <div style={{
        width: open ? 230 : 0,
        overflow: 'hidden',
        transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
        flexShrink: 0,
      }}>
        <div style={{
          width: 230,
          background: 'linear-gradient(160deg,#1e293b,#0f172a)',
          borderRadius: '14px 0 0 14px',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRight: 'none',
          boxShadow: '-8px 0 30px rgba(0,0,0,0.4)',
          padding: '16px 14px',
          boxSizing: 'border-box',
        }}>
          <p style={{ margin: '0 0 10px', fontSize: 12, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            {data.label || 'Besoin d\'aide ?'}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {phones.length > 0 ? phones.map((phone, i) => (
              <a
                key={i}
                href={`tel:${phone.replace(/\s/g, '')}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: 9,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 9,
                  padding: '9px 11px',
                  textDecoration: 'none',
                  color: '#e2e8f0',
                  fontSize: 13.5,
                  fontWeight: 600,
                  transition: 'background 0.15s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(59,130,246,0.15)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.42 9.83 19.79 19.79 0 01.36 1.18 2 2 0 012.34 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.91v2z"/>
                </svg>
                {phone}
              </a>
            )) : (
              <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.3)', lineHeight: 1.5 }}>
                Notre équipe est disponible pour vous aider.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Onglet déclencheur — toujours visible sur le bord */}
      <button
        onClick={() => setOpen(v => !v)}
        aria-label={open ? 'Fermer l\'aide' : 'Besoin d\'aide ?'}
        style={{
          width: 36,
          minHeight: 100,
          background: open
            ? 'linear-gradient(160deg,#1e293b,#0f172a)'
            : 'linear-gradient(160deg,#3b82f6,#1d4ed8)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRight: 'none',
          borderRadius: open ? '0 0 0 0' : '10px 0 0 10px',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          padding: '12px 0',
          boxShadow: open ? 'none' : '-4px 0 16px rgba(59,130,246,0.35)',
          transition: 'background 0.25s, box-shadow 0.25s, border-radius 0.25s',
          flexShrink: 0,
        }}
        onMouseEnter={e => { if (!open) e.currentTarget.style.filter = 'brightness(1.15)' }}
        onMouseLeave={e => { e.currentTarget.style.filter = 'none' }}
      >
        {open ? (
          /* Croix fermer */
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <>
            {/* Icône téléphone */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.42 9.83 19.79 19.79 0 01.36 1.18 2 2 0 012.34 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.91v2z"/>
            </svg>
            {/* Texte vertical */}
            <span style={{
              fontSize: 10,
              fontWeight: 700,
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transform: 'rotate(180deg)',
            }}>
              Aide
            </span>
          </>
        )}
      </button>
    </div>
  )
}
