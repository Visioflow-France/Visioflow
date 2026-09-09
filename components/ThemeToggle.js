import { useEffect, useState } from 'react'

/* ── Interrupteur de thème clair / sombre ──
   Monté sur TOUTES les pages via _app.js (accueil compris).
   Pilule en verre dépoli à damier gauche/droite soleil/lune, curseur
   coulissant avec ressort, coin bas-droit (le bas-gauche est occupé par
   le bouton cookies). Icônes SVG, cible 44px+, SSR-safe.               */

const Sun = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
)
const Moon = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null) // null tant que non monté (évite le mismatch SSR)

  useEffect(() => {
    const read = () => setTheme(document.documentElement.getAttribute('data-theme') || 'light')
    read()
    const onStorage = (e) => { if (e.key === 'vf-theme') read() }
    const onCustom = () => read()
    window.addEventListener('storage', onStorage)
    window.addEventListener('vf-theme-change', onCustom)
    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener('vf-theme-change', onCustom)
    }
  }, [])

  const toggle = () => {
    const next = (theme === 'dark') ? 'light' : 'dark'
    const d = document.documentElement
    d.setAttribute('data-theme', next)
    d.style.colorScheme = next
    try { localStorage.setItem('vf-theme', next) } catch (e) {}
    setTheme(next)
    window.dispatchEvent(new Event('vf-theme-change'))
  }

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
      aria-pressed={isDark}
      title={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
      className="vf-theme-switch"
      data-on={isDark ? 'true' : 'false'}
      style={{ opacity: theme ? 1 : 0 }}
    >
      <span className="vf-theme-track" aria-hidden="true">
        <span className="vf-theme-glyph vf-theme-glyph-sun">{Sun}</span>
        <span className="vf-theme-glyph vf-theme-glyph-moon">{Moon}</span>
        <span className="vf-theme-knob" aria-hidden="true">
          {isDark ? Moon : Sun}
        </span>
      </span>
      <style jsx>{`
        .vf-theme-switch {
          position: fixed;
          bottom: max(18px, env(safe-area-inset-bottom));
          right: max(18px, env(safe-area-inset-right));
          z-index: 600;
          padding: 4px;
          border: 1px solid var(--bord-md, rgba(0, 113, 227, 0.18));
          border-radius: 999px;
          background: var(--nav-bg, rgba(255, 255, 255, 0.75));
          -webkit-backdrop-filter: saturate(180%) blur(16px);
          backdrop-filter: saturate(180%) blur(16px);
          box-shadow: 0 10px 30px rgba(2, 8, 20, 0.22), 0 2px 8px rgba(2, 8, 20, 0.14);
          cursor: pointer;
          font-family: inherit;
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.25s ease, opacity 0.3s ease;
        }

        .vf-theme-switch:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 38px rgba(2, 8, 20, 0.3), 0 3px 10px rgba(2, 8, 20, 0.16);
        }

        .vf-theme-switch:active { transform: translateY(-1px) scale(0.97); }

        .vf-theme-switch:focus-visible {
          outline: 2px solid var(--vf2-blue, #0071E3);
          outline-offset: 3px;
        }

        .vf-theme-track {
          position: relative;
          display: flex;
          align-items: center;
          gap: 6px;
          width: 66px;
          height: 32px;
          padding: 0 8px;
          border-radius: 999px;
          background: linear-gradient(120deg, rgba(255, 193, 69, 0.28), rgba(56, 189, 248, 0.24));
          box-sizing: border-box;
          overflow: hidden;
        }

        .vf-theme-glyph {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 16px;
          color: var(--text, #0f172a);
          opacity: 0.55;
          transition: opacity 0.3s ease, color 0.3s ease, transform 0.3s ease;
        }

        .vf-theme-glyph svg { width: 14px; height: 14px; }

        .vf-theme-glyph-sun { margin-right: auto; color: #b45309; }
        .vf-theme-glyph-moon { margin-left: auto; color: #1d4ed8; }

        .vf-theme-switch[data-on='true'] .vf-theme-glyph-sun,
        .vf-theme-switch[data-on='false'] .vf-theme-glyph-moon { opacity: 0.9; }

        .vf-theme-knob {
          position: absolute;
          top: 3px;
          left: 3px;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          background: linear-gradient(135deg, #0066FF, #00D4FF);
          box-shadow: 0 3px 10px rgba(0, 102, 255, 0.45), inset 0 1px 2px rgba(255, 255, 255, 0.5);
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.35s ease;
          will-change: transform;
        }

        .vf-theme-knob :global(svg) { width: 13px; height: 13px; }

        .vf-theme-switch[data-on='true'] .vf-theme-knob {
          transform: translateX(34px);
          background: linear-gradient(135deg, #1e293b, #0f172a);
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.45), inset 0 1px 2px rgba(255, 255, 255, 0.18);
        }

        @media (max-width: 480px) {
          .vf-theme-switch {
            bottom: max(14px, env(safe-area-inset-bottom));
            right: max(14px, env(safe-area-inset-right));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .vf-theme-switch,
          .vf-theme-knob,
          .vf-theme-glyph { transition: none; }
        }
      `}</style>
    </button>
  )
}
