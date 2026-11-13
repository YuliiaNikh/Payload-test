import type { CollectionAfterChangeHook, CollectionBeforeChangeHook, PayloadRequest } from 'payload'

import { defaultCptBases, type CptSlug } from '@/content/types'
import { isLocale, type Locale } from '@/i18n/config'
import { localizePath } from '@/i18n/paths'

type Routable = 'pages' | CptSlug
type Doc = { id?: number; slug?: string | null; _status?: string | null; breadcrumbs?: { url?: string | null }[] | null }

async function pathOf(collection: Routable, doc: Doc, locale: Locale, req: PayloadRequest): Promise<string | null> {
  if (collection === 'pages') return doc.breadcrumbs?.at(-1)?.url ?? null
  if (!doc.slug) return null
  const settings = await req.payload.findGlobal({ slug: 'site-settings', locale, depth: 0, req })
  const bases = { ...defaultCptBases, ...settings.cptBases }
  return `/${bases[collection]}/${doc.slug}`
}

const key = (collection: string, id: unknown) => `autoRedirect:${collection}:${String(id)}`

// When a document that is live in this language gets a new URL, keep the old URL working with a 301
// (Yoast Premium / Redirection plugin behaviour). Children of a renamed page are re-saved by the
// nested docs plugin and get their own redirects the same way.
export const autoRedirectHooks = (collection: Routable) => {
  const beforeChange: CollectionBeforeChangeHook = async ({ data, operation, originalDoc, req }) => {
    const locale = req.locale
    if (operation !== 'update' || !originalDoc?.id || !isLocale(locale) || data._status !== 'published') return data
    // The live version (drafts may already carry the new slug)
    const live = (await req.payload.findByID({
      collection,
      id: originalDoc.id,
      locale,
      draft: false,
      depth: 0,
      req,
      disableErrors: true,
    })) as Doc | null
    if (live?._status === 'published') {
      const old = await pathOf(collection, live, locale, req)
      if (old) req.context[key(collection, originalDoc.id)] = old
    }
    return data
  }

  const afterChange: CollectionAfterChangeHook = async ({ doc, req }) => {
    const locale = req.locale
    const oldPath = req.context[key(collection, doc.id)] as string | undefined
    if (!oldPath || !isLocale(locale) || doc._status !== 'published') return doc
    delete req.context[key(collection, doc.id)]

    const newPath = await pathOf(collection, doc as Doc, locale, req)
    if (!newPath || newPath === oldPath) return doc
    const from = localizePath(locale, oldPath)
    const to = localizePath(locale, newPath)

    // No loops: nothing may redirect away from the new URL, and the old URL gets exactly one redirect
    await req.payload.delete({ collection: 'redirects', where: { from: { in: [from, to] } }, req })
    await req.payload.create({
      collection: 'redirects',
      data: { from, to: { type: 'reference', reference: { relationTo: collection, value: doc.id } }, type: '301' },
      req,
    })
    return doc
  }

  return { beforeChange, afterChange }
}
