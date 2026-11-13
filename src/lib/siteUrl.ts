// Absolute site origin for canonical URLs, hreflang and the sitemap
export function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SERVER_URL
  if (explicit) return explicit.replace(/\/$/, '')
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  return 'http://localhost:3000'
}

// Encodes Hebrew and other non-ASCII path segments for use in XML and headers
export const absoluteUrl = (path: string) => `${siteUrl()}${encodeURI(path)}`
