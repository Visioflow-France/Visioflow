import { useEffect, useState, useCallback } from 'react'

/* ── Couche PWA de l'espace admin ──
   Monté sur /admin et /login-admin :
   • pointe l'unique <link rel="manifest"> vers la PWA admin ;
   • enregistre /sw-admin.js (production uniquement — le SW casse le HMR en dev) ;
   • capte beforeinstallprompt → bouton « Installer l'application »
     (sur iOS, qui ne propose pas d'invite native : rappel du geste
     Partager → « Sur l'écran d'accueil ») ;
   • bandeau fixe quand la connexion réseau tombe.                    */

function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent)
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
}

function isStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches
    || window.navigator.standalone === true
}

export default function AdminPWA() {
  const [mounted, setMounted] = useState(false)
  const [online, setOnline] = useState(true)
  const [installEvent, setInstallEvent] = useState(null)
  const [iosHint, setIosHint] = useState(false)

  useEffect(() => {
    setMounted(true)
    setOnline(navigator.onLine)

    const goOnline  = () => setOnline(true)
    const goOffline = () => setOnline(false)
    window.addEventListener('online', goOnline)
    window.addEventListener('offline', goOffline)

    // Un seul manifeste dans le document : celui de la PWA admin
    const links = document.querySelectorAll('link[rel="manifest"]')
    links.forEach((link, i) => {
      if (i === 0) link.href = '/manifest-admin.json'
      else link.remove()
    })

    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw-admin.js').catch(() => {})
    }

    const onBeforeInstall = (e) => { e.preventDefault(); setInstallEvent(e) }
    const onInstalled = () => setInstallEvent(null)
    window.addEventListener('beforeinstallprompt', onBeforeInstall)
    window.addEventListener('appinstalled', onInstalled)

    return () => {
      window.removeEventListener('online', goOnline)
      window.removeEventListener('offline', goOffline)
      window.removeEventListener('beforeinstallprompt', onBeforeInstall)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  const install = useCallback(async () => {
    if (!installEvent) return
    installEvent.prompt()
    await installEvent.userChoice
    setInstallEvent(null)
  }, [installEvent])

  if (!mounted) return null

  const standalone = isStandalone()
  const ios = isIOS()
  const showInstall = !standalone && (installEvent || ios)

  return (
    <>
      {!online && (
        <div style={{
          position: 'fixed', top: 12, left: '50%', transform: 'translateX(-50%)',
          zIndex: 9999, maxWidth: 'calc(100vw - 32px)',
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '10px 18px', borderRadius: 999,
          background: 'rgba(15,23,42,0.92)', color: '#f1f5f9',
          fontSize: 13, fontWeight: 600, fontFamily: 'Inter, -apple-system, sans-serif',
          boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
          border: '1px solid rgba(255,255,255,0.12)', whiteSpace: 'nowrap',
        }}>
          📡 Hors ligne
        </div>
      )}

      {showInstall && (
        <div style={{
          position: 'fixed', right: 16, bottom: 16, zIndex: 9998,
          display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8,
        }}>
          {iosHint && (
            <div style={{
              background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12,
              padding: '12px 14px', fontSize: 13, color: '#0f172a',
              fontFamily: 'Inter, -apple-system, sans-serif',
              boxShadow: '0 12px 32px rgba(0,0,0,0.14)', maxWidth: 260, lineHeight: 1.5,
            }}>
              Sur iPhone / iPad : bouton <b>Partager</b> ⬆️ puis <b>« Sur l&apos;écran d&apos;accueil »</b> pour installer l&apos;app admin.
            </div>
          )}
          <button
            onClick={() => (ios ? setIosHint(v => !v) : install())}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '11px 18px', borderRadius: 999, border: 'none', cursor: 'pointer',
              background: 'linear-gradient(135deg,#3b82f6,#1d4ed8)', color: '#fff',
              fontSize: 13.5, fontWeight: 700, fontFamily: 'Inter, -apple-system, sans-serif',
              boxShadow: '0 10px 24px rgba(29,78,216,0.35)',
            }}
          >
            📲 {ios && !installEvent ? 'Comment installer ?' : 'Installer l\'application'}
          </button>
        </div>
      )}
    </>
  )
}
