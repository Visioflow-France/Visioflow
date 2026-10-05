import { NextResponse } from 'next/server'

const MAIN_SITE = 'https://visioflow.fr'
const ADMIN_HOSTS = new Set(['admin.visioflow.fr'])

/* Fichiers statiques (icônes, manifestes, sw…) : servis tels quels,
   même sur le sous-domaine admin. */
function isAsset(pathname) {
  return pathname.startsWith('/_next/') || /\.[a-z0-9]+$/i.test(pathname)
}

export function middleware(request) {
  const host = (request.headers.get('host') || '').toLowerCase().split(':')[0]
  const pathname = request.nextUrl.pathname
  const isAdminHost = ADMIN_HOSTS.has(host)

  const cookie = request.cookies.get('vf_admin')?.value
  const token  = process.env.ADMIN_TOKEN
  const isAdmin = Boolean(token) && cookie === token

  const loginRedirect = () => {
    const loginUrl = new URL('/login-admin', request.url)
    loginUrl.searchParams.set('from', pathname)
    return NextResponse.redirect(loginUrl)
  }

  /* Sous-domaine admin : la racine affiche le dashboard */
  if (isAdminHost && pathname === '/') {
    if (!isAdmin) return loginRedirect()
    return NextResponse.rewrite(new URL('/admin', request.url))
  }

  /* Sous-domaine admin : tout ce qui n'est pas admin (login, assets,
     API) renvoie vers le site principal — pas de contenu dupliqué. */
  if (isAdminHost && !pathname.startsWith('/admin') && pathname !== '/login-admin' && !isAsset(pathname)) {
    return NextResponse.redirect(MAIN_SITE + pathname)
  }

  /* Dashboard protégé, sur le domaine principal comme sur le sous-domaine */
  if (pathname.startsWith('/admin') && !isAdmin) {
    return loginRedirect()
  }

  /* Admin connecté : le manifeste public devient celui de la PWA admin,
     pour que l'installation depuis /admin crée l'app « VF Admin ». */
  if (pathname === '/manifest.json') {
    return isAdmin
      ? NextResponse.rewrite(new URL('/manifest-admin.json', request.url))
      : NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  /* Tout sauf l'API (protégée dans ses handlers) et les chunks _next. */
  matcher: ['/((?!api/|_next/static|_next/image).*)'],
}
