import { NextResponse, type NextRequest } from 'next/server'

import { routeRequest } from './i18n/routing'

export function proxy(request: NextRequest) {
  const action = routeRequest(request.nextUrl.pathname)
  if (action.kind === 'next') return NextResponse.next()

  const url = request.nextUrl.clone()
  url.pathname = action.pathname
  return action.kind === 'redirect' ? NextResponse.redirect(url, 308) : NextResponse.rewrite(url)
}

export const config = {
  // Skip Next internals and any path with a file extension (favicon.ico, robots.txt, images)
  matcher: ['/((?!_next/|.*\\..*).*)'],
}
