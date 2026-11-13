import config from '@payload-config'
import { getPayload, type Where } from 'payload'

import { defaultCptBases, type CptSlug } from '@/content/types'
import { locales, type Locale } from '@/i18n/config'
import { localizePath } from '@/i18n/paths'
import { cptItemPath, matchCptPath, type CptBases } from '@/lib/routing/cptPaths'
import type { Config, Page } from '@/payload-types'

import { findPublishedPageByPath, getPageAlternates } from './pages'

export type CptDoc = Config['collections'][CptSlug]

export type Route =
  | { kind: 'page'; doc: Page }
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
  const match = matchCptPath(path, await getCptBases(locale))
  if (match) {
    const doc = await findPublishedItem(match.collection, locale, { slug: match.slug })
    if (doc) return { kind: 'item', collection: match.collection, doc }
  }
  const page = await findPublishedPageByPath(path, locale)
  return page ? { kind: 'page', doc: page } : null
}

// Href of this route in every language; that language's home page when it has no published version
export async function getRouteAlternates(route: Route): Promise<Record<Locale, string>> {
  if (route.kind === 'page') return getPageAlternates(route.doc.id)

  const entries = await Promise.all(
    locales.map(async (locale) => {
      const doc = await findPublishedItem(route.collection, locale, { id: route.doc.id })
      const path = doc?.slug ? cptItemPath(route.collection, doc.slug, await getCptBases(locale)) : '/'
      return [locale, localizePath(locale, path)] as const
    }),
  )
  return Object.fromEntries(entries) as Record<Locale, string>
}
