export const cptSlugs = ['posts', 'events', 'resources', 'glossary', 'people'] as const
export type CptSlug = (typeof cptSlugs)[number]

export const taxonomySlugs = [
  'categories',
  'tags',
  'event-types',
  'industries',
  'resource-types',
  'topics',
  'departments',
] as const
export type TaxonomySlug = (typeof taxonomySlugs)[number]

// First URL segment of each CPT's items; editable per language in Site settings
export const defaultCptBases: Record<CptSlug, string> = {
  posts: 'blog',
  events: 'events',
  resources: 'resources',
  glossary: 'glossary',
  people: 'people',
}

export const isCptSlug = (value: string): value is CptSlug =>
  (cptSlugs as readonly string[]).includes(value)
