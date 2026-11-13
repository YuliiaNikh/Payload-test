import { cptSlugs, type CptSlug } from '@/content/types'

export type CptBases = Record<CptSlug, string>

// "/blog/hello" -> posts + "hello". Only exactly two segments: the bare base is the archive Page.
export function matchCptPath(path: string, bases: CptBases): { collection: CptSlug; slug: string } | null {
  const segments = path.split('/').filter(Boolean)
  if (segments.length !== 2) return null
  const [base, slug] = segments
  const collection = cptSlugs.find((cpt) => bases[cpt] === base)
  return collection ? { collection, slug } : null
}

export function cptItemPath(collection: CptSlug, slug: string, bases: CptBases): string {
  return `/${bases[collection]}/${slug}`
}
