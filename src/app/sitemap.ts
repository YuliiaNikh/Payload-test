import config from '@payload-config'
import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'

import { cptSlugs, defaultCptBases } from '@/content/types'
import { locales, type Locale } from '@/i18n/config'
import { localizePath } from '@/i18n/paths'
import { absoluteUrl } from '@/lib/siteUrl'

export const dynamic = 'force-dynamic'

type Localized<T> = Partial<Record<Locale, T>> | null | undefined
type AllLocalesDoc = {
  id: number
  updatedAt: string
  slug?: Localized<string>
  _status?: Localized<string>
  breadcrumbs?: Localized<{ url?: string | null }[]>
  meta?: { noindex?: boolean | null } | null
}

// Every published page and item in both languages, with hreflang alternates
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'site-settings', locale: 'all', depth: 0 })
  const homeId = typeof settings.homePage === 'object' ? settings.homePage?.id : settings.homePage
  const bases = settings.cptBases as unknown as Record<string, Localized<string>> | undefined

  const entries: MetadataRoute.Sitemap = []
  const add = (doc: AllLocalesDoc, pathFor: (locale: Locale) => string | null) => {
    if (doc.meta?.noindex) return
    const paths = Object.fromEntries(
      locales.map((locale) => [locale, doc._status?.[locale] === 'published' ? pathFor(locale) : null]),
    ) as Record<Locale, string | null>
    const languages = Object.fromEntries(
      locales.filter((l) => paths[l]).map((l) => [l, absoluteUrl(localizePath(l, paths[l]!))]),
    )
    for (const locale of locales) {
      const path = paths[locale]
      if (!path) continue
      entries.push({
        url: absoluteUrl(localizePath(locale, path)),
        lastModified: doc.updatedAt,
        alternates: { languages },
      })
    }
  }

  // Each query reads all languages at once: slugs, breadcrumbs and per-language status
  const pages = await payload.find({ collection: 'pages', locale: 'all', draft: false, depth: 0, pagination: false })
  for (const page of pages.docs as unknown as AllLocalesDoc[]) {
    add(page, (locale) => (page.id === homeId ? '/' : (page.breadcrumbs?.[locale]?.at(-1)?.url ?? null)))
  }

  for (const collection of cptSlugs) {
    const items = await payload.find({ collection, locale: 'all', draft: false, depth: 0, pagination: false })
    for (const item of items.docs as unknown as AllLocalesDoc[]) {
      add(item, (locale) => {
        const slug = item.slug?.[locale]
        const base = bases?.[collection]?.[locale] ?? defaultCptBases[collection]
        return slug ? `/${base}/${slug}` : null
      })
    }
  }
  return entries
}
