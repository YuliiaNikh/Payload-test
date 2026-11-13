import config from '@payload-config'
import { getPayload } from 'payload'

import { isCptSlug } from '@/content/types'
import { localizePath, splitLocale } from '@/i18n/paths'

import { findPublishedItem, getCptBases } from './content'
import { findPublishedPageById, getHomePageId, pagePath } from './pages'
import { cptItemPath } from '@/lib/routing/cptPaths'

// Redirects manager lookup (checked only when no page or item matches the URL)
export async function findRedirect(pathname: string): Promise<{ href: string; permanent: boolean } | null> {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'redirects',
    depth: 0,
    limit: 1,
    where: { from: { equals: pathname } },
  })
  const redirect = docs[0]
  if (!redirect) return null
  const permanent = redirect.type !== '302'

  if (redirect.to?.type === 'custom') return redirect.to.url ? { href: redirect.to.url, permanent } : null

  const ref = redirect.to?.reference
  if (!ref) return null
  const id = typeof ref.value === 'object' ? ref.value.id : ref.value
  // The target in the language of the old URL
  const { locale } = splitLocale(pathname)

  if (ref.relationTo === 'pages') {
    const page = await findPublishedPageById(id, locale)
    return page ? { href: localizePath(locale, pagePath(page, await getHomePageId())), permanent } : null
  }
  if (isCptSlug(ref.relationTo)) {
    const doc = await findPublishedItem(ref.relationTo, locale, { id })
    return doc?.slug
      ? { href: localizePath(locale, cptItemPath(ref.relationTo, doc.slug, await getCptBases(locale))), permanent }
      : null
  }
  return null
}
