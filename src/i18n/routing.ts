import { defaultLocale } from './config'
import { splitLocale } from './paths'

export type ProxyAction =
  | { kind: 'next' }
  | { kind: 'rewrite'; pathname: string }
  | { kind: 'redirect'; pathname: string }

// First path segments served by Payload or Next itself, never by the page router
const RESERVED = new Set(['admin', 'api', 'next', '_next'])

export function routeRequest(pathname: string): ProxyAction {
  const first = pathname.split('/')[1] ?? ''
  if (RESERVED.has(first)) return { kind: 'next' }

  const { locale, path, prefixed } = splitLocale(pathname)
  if (prefixed && locale === defaultLocale) return { kind: 'redirect', pathname: path }
  if (prefixed) return { kind: 'next' }
  return { kind: 'rewrite', pathname: path === '/' ? `/${defaultLocale}` : `/${defaultLocale}${path}` }
}
