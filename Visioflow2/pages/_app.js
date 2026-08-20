import { useEffect, useRef, useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import '../styles/pages.css'
import dynamic from 'next/dynamic'
import { gsap } from 'gsap'
import ThemeToggle from '@/components/ThemeToggle'
import CookieConsent from '@/components/CookieConsent'

/* ── Composants client uniquement ── */
const FloatingBackground = dynamic(() => import('@/components/FloatingBackground'), { ssr: false })
const ShowcaseIntro      = dynamic(() => import('@/components/ShowcaseIntro'),      { ssr: false })

/* ── Scroll observer ── */
const SCROLL_SEL = [
  'h2', 'h3', '.sh', '.stl', '.sd', '.tc', '.fc',
  '.pcard', '.ps', '.sc', '.pp-card', '.sec-cell',
  '.info-card', '.menu-card', '.vt-section-header',
  '.band h2', '.offres-cta h2', '.av-cta h2', '.form-section',
].join(',')

function attachScrollObserver(io) {
  try {
    document.querySelectorAll(SCROLL_SEL).forEach((el) => {
      if ('scrollWired' in el.dataset) return
      const r = el.getBoundingClientRect()
      if (r.top < window.innerHeight - 40 && r.bottom > 0) return
      const siblings = Array.from(el.parentElement?.children ?? [])
      el.dataset.scroll      = ''
      el.dataset.sd          = (siblings.indexOf(el) % 4) + 1
      el.dataset.scrollWired = ''
      io.observe(el)
    })
  } catch (_) {}
}

/* ── Extras client (FloatingBG + Intro + ScrollObserver) ── */
function ClientExtras() {
  const [gone, setGone] = useState(false)
  const introRef        = useRef(null)

  const handleComplete = useCallback(() => {
    if (introRef.current) {
      gsap.to(introRef.current, {
        opacity: 0, duration: 0.35, ease: 'power2.inOut', delay: 0.05,
        onComplete: () => setGone(true),
      })
    } else {
      setGone(true)
    }
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('vf-in'); io.unobserve(e.target) }
      }),
      { threshold: 0.10, rootMargin: '0px 0px -30px 0px' }
    )
    const t1 = setTimeout(() => attachScrollObserver(io), 600)
    const t2 = setTimeout(() => attachScrollObserver(io), 1400)
    const mo = new MutationObserver(() => attachScrollObserver(io))
    mo.observe(document.body, { childList: true, subtree: true })
    return () => { clearTimeout(t1); clearTimeout(t2); io.disconnect(); mo.disconnect() }
  }, [])

  return (
    <>
      <FloatingBackground />
      {!gone && (
        <div
          ref={introRef}
          style={{ position: 'fixed', inset: 0, zIndex: 9000, pointerEvents: 'auto' }}
        >
          <ShowcaseIntro onComplete={handleComplete} />
        </div>
      )}
    </>
  )
}

/* ClientExtras ne tourne jamais côté serveur */
const ClientExtrasNoSSR = dynamic(() => Promise.resolve(ClientExtras), { ssr: false })

/* ── App ── */
const SKIP_PAGES = ['/dashboard', '/preview', '/paiement', '/vitrine', '/landing', '/stripe-connect-link', '/stripe-express-link']

export default function App({ Component, pageProps }) {
  const router   = useRouter()
  const skipWrap = SKIP_PAGES.includes(router.pathname)

  if (skipWrap) return (
    <>
      <Component {...pageProps} />
      <ThemeToggle />
      <CookieConsent />
    </>
  )

  /* Le serveur rend UNIQUEMENT <Component> — pas d'extras.
     Le client ajoute ClientExtrasNoSSR après hydratation sans mismatch. */
  return (
    <>
      <Component {...pageProps} />
      <ClientExtrasNoSSR />
      <ThemeToggle />
      <CookieConsent />
    </>
  )
}
