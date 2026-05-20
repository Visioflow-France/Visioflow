import { NextResponse } from 'next/server'

export function middleware(request) {
  const cookie = request.cookies.get('vf_admin')?.value
  const token  = process.env.ADMIN_TOKEN

  if (!token || cookie !== token) {
    const loginUrl = new URL('/login-admin', request.url)
    loginUrl.searchParams.set('from', request.nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard'],
}
