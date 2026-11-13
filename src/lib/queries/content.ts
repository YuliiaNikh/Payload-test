import config from '@payload-config'
import { getPayload, type Where } from 'payload'

import { defaultCptBases, type CptSlug } from '@/content/types'
import { locales, type Locale } from '@/i18n/config'
import { localizePath } from '@/i18n/paths'
import { cptItemPath, matchCptPath, matchTermArchivePath, type CptBases } from '@/lib/routing/cptPaths'
import type { Config, Page } from '@/payload-types'

import { findPublishedPageById, findPublishedPageByPath, getHomePageId, pagePath } from './pages'

export type CptDoc = Config['collections'][CptSlug]

export type TermPreset = { collection: CptSlug; field: string; termId: number; title: string }

export type Route =
  | { kind: 'page'; doc: Page; preset?: TermPreset }
  | { kind: 'item'; collection: CptSlug; doc: CptDoc }

const published = { _status: { equals: 'published' } } as const

export async function getCptBases(locale: Locale): Promise<CptBases> {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'site-settings', locale, depth: 0 })
  return { ...defaultCptBases, ...settings.cptBases }
}

export async function findPublishedItem(
  collection: CptSlug,
  locale: Locale,
  by: { slug: string } | { id: number },
): Promise<CptDoc | null> {
  const payload = await getPayload({ config })
  const match: Where = 'slug' in by ? { slug: { equals: by.slug } } : { id: { equals: by.id } }
  const { docs } = await payload.find({
    collection,
    locale,
    draft: false,
    limit: 1,
    depth: 2,
    where: { and: [match, published] },
  })
  return (docs[0] as CptDoc | undefined) ?? null
}

export async function resolveRoute(path: string, locale: Locale): Promise<Route | null> {
  const bases = await getCptBases(locale)
  const match = matchCptPath(path, bases)
  if (match) {
    const doc = await findPublishedItem(match.collection, locale, { slug: match.slug })
    if (doc) return { kind: 'item', collection: match.collection, doc }
  }
  const term = matchTermArchivePath(path, bases)
  if (term) {
    // Term archives reuse the CPT archive page (the page at /<base>) with the term preset
    const payload = await getPayload({ config })
    const { docs } = await payload.find({
      collection: term.taxonomy.taxonomy,
      locale,
      depth: 0,
      limit: 1,
      where: { slug: { equals: term.slug } },
    })
    const archive = docs[0] && (await findPublishedPageByPath(`/${bases[term.collection]}`, locale))
    if (docs[0] && archive) {
      return {
        kind: 'page',
        doc: archive,
        preset: { collection: term.collection, field: term.taxonomy.field, termId: docs[0].id, title: docs[0].title },
      }
    }
  }

  const page = await findPublishedPageByPath(path, locale)
  return page ? { kind: 'page', doc: page } : null
}

// The real URL of this route in every language, or null where it is not published (for hreflang)
export async function getRouteTranslations(route: Route): Promise<Record<Locale, string | null>> {
  const homeId = route.kind === 'page' ? await getHomePageId() : null
  const entries = await Promise.all(
    locales.map(async (locale) => {
      if (route.kind === 'page') {
        const page = await findPublishedPageById(route.doc.id, locale)
        return [locale, page ? localizePath(locale, pagePath(page, homeId)) : null] as const
      }
      const doc = await findPublishedItem(route.collection, locale, { id: route.doc.id })
      return [locale, doc?.slug ? localizePath(locale, cptItemPath(route.collection, doc.slug, await getCptBases(locale))) : null] as const
    }),
  )
  return Object.fromEntries(entries) as Record<Locale, string | null>
}

// For the language switcher: missing translations fall back to that language's home page
export async function getRouteAlternates(route: Route): Promise<Record<Locale, string>> {
  const translations = await getRouteTranslations(route)
  return Object.fromEntries(
    locales.map((locale) => [locale, translations[locale] ?? localizePath(locale, '/')]),
  ) as Record<Locale, string>
}
