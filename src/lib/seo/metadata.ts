import config from '@payload-config'
import type { Metadata } from 'next'
import { getPayload } from 'payload'

import { localeTags, type Locale } from '@/i18n/config'
import { getRouteTranslations, type Route } from '@/lib/queries/content'
import { absoluteUrl, siteUrl } from '@/lib/siteUrl'
import type { Media } from '@/payload-types'

export function titleFromPattern(pattern: string | null | undefined, title: string, site: string): string {
  if (!site) return title
  return (pattern || '%title% | %site%').replaceAll('%title%', title).replaceAll('%site%', site)
}

type Meta = { title?: string | null; description?: string | null; image?: number | Media | null; noindex?: boolean | null; canonical?: string | null }

const imageUrl = (image: unknown): string | null =>
  typeof image === 'object' && image !== null && 'url' in image && typeof image.url === 'string' ? image.url : null

// Yoast-style head: SEO title or pattern, description, OG image fallbacks, canonical, hreflang, noindex
export async function buildMetadata(route: Route, locale: Locale, pathname: string): Promise<Metadata> {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'site-settings', locale, depth: 1 })
  const doc = route.doc as typeof route.doc & { meta?: Meta; excerpt?: string | null; featuredImage?: unknown }
  const meta = doc.meta ?? {}
  const pageTitle = route.kind === 'page' && route.preset ? `${route.preset.title} | ${doc.title}` : doc.title

  const title = meta.title || titleFromPattern(settings.seo?.titlePattern, pageTitle, settings.siteName ?? '')
  const description = meta.description || doc.excerpt || settings.seo?.description || undefined
  const image = imageUrl(meta.image) ?? imageUrl(doc.featuredImage) ?? imageUrl(settings.seo?.image)

  const translations = await getRouteTranslations(route)
  const languages = Object.fromEntries(
    Object.entries(translations)
      .filter(([, href]) => href)
      .map(([lang, href]) => [lang, absoluteUrl(href!)]),
  )

  return {
    metadataBase: new URL(siteUrl()),
    title: { absolute: title },
    description,
    alternates: {
      canonical: meta.canonical || absoluteUrl(pathname),
      // Term archives and other variants of a page only point to themselves
      languages: route.kind === 'page' && route.preset ? undefined : { ...languages, 'x-default': languages.en },
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(pathname),
      siteName: settings.siteName ?? undefined,
      locale: localeTags[locale].replace('-', '_'),
      type: route.kind === 'item' && route.collection === 'posts' ? 'article' : 'website',
      images: image ? [{ url: image }] : undefined,
    },
    robots: meta.noindex ? { index: false, follow: true } : undefined,
  }
}
