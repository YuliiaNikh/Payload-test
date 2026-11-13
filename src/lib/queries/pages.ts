import config from '@payload-config'
import { getPayload } from 'payload'

import { locales, type Locale } from '@/i18n/config'
import { localizePath } from '@/i18n/paths'
import type { Page } from '@/payload-types'

// With per-language status, a page unpublished in a language still comes back from
// find() with _status "draft", so every visitor-facing query filters on it explicitly.
const published = { _status: { equals: 'published' } } as const

export async function getHomePageId(): Promise<Page['id'] | null> {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'site-settings', depth: 0 })
  const home = settings.homePage
  if (home == null) return null
  return typeof home === 'object' ? home.id : home
}

export async function findPublishedPageById(id: Page['id'], locale: Locale): Promise<Page | null> {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'pages',
    locale,
    draft: false,
    limit: 1,
    where: { and: [{ id: { equals: id } }, published] },
  })
  return docs[0] ?? null
}

export async function findPublishedPageByPath(path: string, locale: Locale): Promise<Page | null> {
  if (path === '/') {
    const homeId = await getHomePageId()
    return homeId == null ? null : findPublishedPageById(homeId, locale)
  }

  const payload = await getPayload({ config })
  // Ancestors' URLs also appear in a child's breadcrumbs, so match on the last breadcrumb
  const { docs } = await payload.find({
    collection: 'pages',
    locale,
    draft: false,
    limit: 50,
    where: { and: [{ 'breadcrumbs.url': { equals: path } }, published] },
  })
  return docs.find((doc) => doc.breadcrumbs?.at(-1)?.url === path) ?? null
}

// Path of a page within its language, without the locale prefix
export function pagePath(page: Pick<Page, 'id' | 'breadcrumbs'>, homeId: Page['id'] | null): string {
  if (homeId != null && page.id === homeId) return '/'
  return page.breadcrumbs?.at(-1)?.url ?? '/'
}

// Href of this page in every language; the language home page when it has no published version
export async function getPageAlternates(id: Page['id']): Promise<Record<Locale, string>> {
  const homeId = await getHomePageId()
  const entries = await Promise.all(
    locales.map(async (locale) => {
      const page = await findPublishedPageById(id, locale)
      return [locale, localizePath(locale, page ? pagePath(page, homeId) : '/')] as const
    }),
  )
  return Object.fromEntries(entries) as Record<Locale, string>
}
