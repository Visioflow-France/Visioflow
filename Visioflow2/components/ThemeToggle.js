import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

/* ── OMEGA · LOI II (Bimorphisme) + LOI IV (Zéro Éclair) ──
   Toggle de thème partagé, monté sur TOUTES les pages via _app.js.
   Icônes SVG (LOI : jamais d'emoji), cible 44×44 (LOI IX), SSR-safe. */

const Sun = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
)
const Moon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

export default function ThemeToggle() {
  const router = useRouter()
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

  // La home possède déjà son propre toggle dans la nav — pas de doublon (LOI V).
  if (router.pathname === '/') return null

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
      style={{
        position: 'fixed',
        bottom: 'max(20px, env(safe-area-inset-bottom))',
        left: 'max(20px, env(safe-area-inset-left))',
        zIndex: 600,
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        border: '1px solid var(--bord-md)',
        background: 'var(--nav-bg)',
        WebkitBackdropFilter: 'saturate(180%) blur(14px)',
        backdropFilter: 'saturate(180%) blur(14px)',
        color: 'var(--text)',
        boxShadow: 'var(--sh-md)',
        transition: 'transform .2s ease, box-shadow .2s ease, opacity .25s ease',
        opacity: theme ? 1 : 0,
        fontFamily: 'inherit',
        padding: 0,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)' }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)' }}
    >
      {isDark ? Sun : Moon}
    </button>
  )
}
