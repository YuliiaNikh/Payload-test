import { isCptSlug } from '@/content/types'
import type { Locale } from '@/i18n/config'
import { localizePath } from '@/i18n/paths'
import { cptItemPath, type CptBases } from '@/lib/routing/cptPaths'

type RefDoc = {
  id: number
  slug?: string | null
  _status?: string | null
  breadcrumbs?: { url?: string | null }[] | null
}

export type LinkValue = {
  type?: 'reference' | 'custom' | null
  reference?: { relationTo: string; value: number | RefDoc } | null
  url?: string | null
  label?: string | null
  newTab?: boolean | null
  appearance?: string | null
}

export type LinkContext = { locale: Locale; bases: CptBases; homeId: number | null }

// Internal links store the referenced document, so the href follows slug changes and the current language
export function linkHref(link: LinkValue | null | undefined, ctx: LinkContext): string | null {
  if (!link) return null
  if (link.type !== 'reference') return link.url || null

  const ref = link.reference
  if (!ref || typeof ref.value !== 'object' || ref.value === null) return null
  const doc = ref.value
  // A target that is not published in this language would be a 404
  if (doc._status && doc._status !== 'published') return null

  if (ref.relationTo === 'pages') {
    if (ctx.homeId != null && doc.id === ctx.homeId) return localizePath(ctx.locale, '/')
    const url = doc.breadcrumbs?.at(-1)?.url
    return url ? localizePath(ctx.locale, url) : null
  }
  if (isCptSlug(ref.relationTo) && doc.slug) {
    return localizePath(ctx.locale, cptItemPath(ref.relationTo, doc.slug, ctx.bases))
  }
  return null
}
