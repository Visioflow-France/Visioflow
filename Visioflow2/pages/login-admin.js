import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function LoginAdmin() {
  const router  = useRouter()
  const [pwd, setPwd]       = useState('')
  const [err, setErr]       = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setErr('')
    setLoading(true)
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ password: pwd }),
      })
      const data = await res.json()
      if (!res.ok) { setErr(data.error || 'Code incorrect'); setLoading(false); return }
      const dest = router.query.from || '/dashboard'
      router.replace(dest)
    } catch {
      setErr('Erreur réseau')
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Accès admin — Visioflow</title>
        <meta name="robots" content="noindex,nofollow" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div style={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg,#0f172a 0%,#1e293b 100%)',
        fontFamily: 'Inter, sans-serif',
        padding: 16,
        overflow: 'hidden',
        position: 'fixed',
        inset: 0,
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 20,
          padding: '44px 40px',
          width: '100%',
          maxWidth: 380,
          boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
        }}>
          {/* Logo */}
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ fontSize: 26, fontWeight: 800, color: '#fff', letterSpacing: '-0.5px', marginBottom: 6 }}>
              Visio<span style={{ color: '#60a5fa' }}>Flow</span>
            </div>
            <div style={{ fontSize: 13, color: '#64748b' }}>Espace administrateur</div>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#e2e8f0', marginBottom: 7, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Code d'accès
              </label>
              <input
                type="password"
                value={pwd}
                onChange={e => { setPwd(e.target.value); setErr('') }}
                placeholder="••••••••••••"
                autoFocus
                autoComplete="current-password"
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: 10,
                  border: err ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.1)',
                  background: '#0f172a',
                  color: '#ffffff',
                  fontSize: 15,
                  outline: 'none',
                  boxSizing: 'border-box',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'border-color 0.2s',
                  colorScheme: 'dark',
                }}
              />
              {err && (
                <div style={{ marginTop: 8, fontSize: 12.5, color: '#f87171', display: 'flex', alignItems: 'center', gap: 5 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  {err}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || !pwd}
              style={{
                width: '100%',
                padding: '13px',
                borderRadius: 10,
                background: loading || !pwd ? 'rgba(255,255,255,0.08)' : 'linear-gradient(135deg,#3b82f6,#1d4ed8)',
                color: loading || !pwd ? '#475569' : '#fff',
                fontWeight: 700,
                fontSize: 14,
                border: 'none',
                cursor: loading || !pwd ? 'not-allowed' : 'pointer',
                fontFamily: 'Inter, sans-serif',
                transition: 'all 0.2s',
                letterSpacing: '0.01em',
              }}
            >
              {loading ? 'Vérification…' : 'Accéder au dashboard →'}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
