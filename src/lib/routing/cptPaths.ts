import { cptSlugs, cptTaxonomies, type CptSlug, type CptTaxonomy } from '@/content/types'

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

// "/blog/category/news" -> the posts archive filtered to the "news" category
export function matchTermArchivePath(
  path: string,
  bases: CptBases,
): { collection: CptSlug; taxonomy: CptTaxonomy; slug: string } | null {
  const segments = path.split('/').filter(Boolean)
  if (segments.length !== 3) return null
  const [base, key, slug] = segments
  const collection = cptSlugs.find((cpt) => bases[cpt] === base)
  const taxonomy = collection && cptTaxonomies[collection].find((t) => t.key === key)
  return collection && taxonomy ? { collection, taxonomy, slug } : null
}

export function termArchivePath(collection: CptSlug, key: string, slug: string, bases: CptBases): string {
  return `/${bases[collection]}/${key}/${slug}`
}
