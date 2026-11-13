import { isCptSlug } from '@/content/types'
import { isLocale, type Locale } from '@/i18n/config'
import { localizePath } from '@/i18n/paths'
import { findPublishedItem, getCptBases } from '@/lib/queries/content'
import { findPublishedPageById, getHomePageId, pagePath } from '@/lib/queries/pages'
import { cptItemPath } from '@/lib/routing/cptPaths'

// Front-end URL of the latest (draft) version of a document
export async function draftPath(collection: string, id: number, rawLocale: string): Promise<string | null> {
  const locale: Locale = isLocale(rawLocale) ? rawLocale : 'en'
  if (collection === 'pages') {
    const page = await findPublishedPageById(id, locale, true)
    return page ? localizePath(locale, pagePath(page, await getHomePageId())) : null
  }
  if (isCptSlug(collection)) {
    const doc = await findPublishedItem(collection, locale, { id }, true)
    return doc?.slug ? localizePath(locale, cptItemPath(collection, doc.slug, await getCptBases(locale))) : null
  }
  return null
}
