import { defaultLocale, isLocale, type Locale } from './config'

// "/he/about" -> he + "/about"; "/about" -> en (default, unprefixed) + "/about"
export function splitLocale(pathname: string): { locale: Locale; path: string; prefixed: boolean } {
  const [, first = '', ...rest] = pathname.split('/')
  if (isLocale(first)) {
    const path = `/${rest.join('/')}`
    return { locale: first, path: path === '/' ? '/' : path.replace(/\/$/, ''), prefixed: true }
  }
  return { locale: defaultLocale, path: pathname || '/', prefixed: false }
}

// The default locale has no prefix: ("en", "/about") -> "/about", ("he", "/") -> "/he"
export function localizePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path
  return path === '/' ? `/${locale}` : `/${locale}${path}`
}

const safeDecode = (segment: string): string => {
  try {
    return decodeURIComponent(segment)
  } catch {
    return segment
  }
}

// Catch-all route segments -> "/a/b"; Next may hand them over percent-encoded
export function normalizePath(segments: string[] | undefined): string {
  if (!segments?.length) return '/'
  return `/${segments.map(safeDecode).join('/')}`
}
