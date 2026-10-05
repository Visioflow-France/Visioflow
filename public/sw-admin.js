/* Service worker de la PWA admin VisioFlow.
   Stratégies :
   • Navigations → network-first, repli sur la coque /admin mise en cache,
     puis sur une page hors ligne minimale (jamais l'erreur navigateur).
   • Assets statiques (icônes, chunks _next/static…) → cache-first.
   • Les appels /api/* passent TOUJOURS par le réseau : les données admin
     ne sont jamais servies depuis le cache SW (fraîcheur + confidentialité). */

const CACHE_NAME = 'vf-admin-v1'
const PRECACHE_URLS = [
  '/admin',
  '/manifest-admin.json',
  '/icon-admin-192.png',
  '/icon-admin-512.png',
]

const OFFLINE_HTML = `<!doctype html>
<html lang='fr'><head><meta charset='utf-8'>
<meta name='viewport' content='width=device-width,initial-scale=1'>
<title>Hors ligne — VisioFlow Admin</title>
<style>
  html,body{margin:0;height:100%;background:#0f172a;color:#e2e8f0;
    font-family:system-ui,-apple-system,'Segoe UI',sans-serif}
  .card{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;
    padding:24px;text-align:center}
  .wave{width:56px;height:56px;margin:0 auto 14px;display:block}
  h1{font-size:20px;margin:0 0 8px}
  p{font-size:14px;color:#94a3b8;margin:0 0 22px;line-height:1.55}
  button{padding:12px 26px;border:none;border-radius:10px;cursor:pointer;
    background:linear-gradient(135deg,#3b82f6,#1d4ed8);color:#fff;font-weight:700;font-size:14px}
</style></head>
<body><div class='card'><div>
  <svg class='wave' viewBox='0 0 44 44' fill='none'>
    <defs><linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#6366f1'/><stop offset='100%' stop-color='#22d3ee'/>
    </linearGradient></defs>
    <path d='M22 22 C18 14, 8 14, 8 22 C8 30, 18 30, 22 22 C26 14, 36 14, 36 22 C36 30, 26 30, 22 22'
      stroke='url(#g)' stroke-width='3.4' stroke-linecap='round'/>
  </svg>
  <h1>Hors ligne</h1>
  <p>Le dashboard n'est pas encore en cache.<br>Reconnecte-toi au réseau, puis réessaie.</p>
  <button onclick="location.reload()">Réessayer</button>
</div></div></body></html>`

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      /* Tolérant : sans session valide, /admin redirige vers le login —
         on n'échoue pas toute l'installation pour ça. */
      Promise.all(PRECACHE_URLS.map((url) => cache.add(url).catch(() => {})))
    )
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
      await self.clients.claim()
    })()
  )
})

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting()
})

self.addEventListener('fetch', (event) => {
  const req = event.request
  if (req.method !== 'GET') return

  const url = new URL(req.url)
  if (url.origin !== self.location.origin) return
  if (url.pathname.startsWith('/api/')) return

  if (req.mode === 'navigate') {
    event.respondWith(networkFirstPage(req, url))
    return
  }

  const isStaticAsset =
    url.pathname.startsWith('/_next/static/') ||
    PRECACHE_URLS.indexOf(url.pathname) !== -1 ||
    /\.(png|ico|svg|jpe?g|woff2?)$/.test(url.pathname)

  if (isStaticAsset) event.respondWith(cacheFirst(req))
})

async function networkFirstPage(req, url) {
  try {
    /* redirect:'follow' — une navigation redirigée (session expirée →
       /login-admin) doit aboutir au lieu de renvoyer une réponse opaque. */
    const fresh = await fetch(req, { redirect: 'follow' })
    if (!fresh.redirected && (url.pathname === '/admin' || url.pathname.startsWith('/admin/'))) {
      const cache = await caches.open(CACHE_NAME)
      cache.put('/admin', fresh.clone())
    }
    return fresh
  } catch {
    const cached = await caches.match('/admin', { cacheName: CACHE_NAME })
    if (cached) return cached
    return new Response(OFFLINE_HTML, {
      status: 503,
      headers: { 'content-type': 'text/html; charset=utf-8' },
    })
  }
}

async function cacheFirst(req) {
  const cached = await caches.match(req)
  if (cached) return cached
  try {
    const fresh = await fetch(req)
    if (fresh.ok) {
      const cache = await caches.open(CACHE_NAME)
      cache.put(req, fresh.clone())
    }
    return fresh
  } catch {
    return new Response('', { status: 504 })
  }
}
