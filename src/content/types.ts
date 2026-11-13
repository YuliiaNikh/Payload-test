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

// Which relationship field of each CPT points at which taxonomy, and its URL key for filters/archives
export type CptTaxonomy = { field: string; taxonomy: TaxonomySlug; key: string; label: string }

export const cptTaxonomies: Record<CptSlug, CptTaxonomy[]> = {
  posts: [
    { field: 'categories', taxonomy: 'categories', key: 'category', label: 'Category' },
    { field: 'tags', taxonomy: 'tags', key: 'tag', label: 'Tag' },
  ],
  events: [{ field: 'eventTypes', taxonomy: 'event-types', key: 'type', label: 'Type' }],
  resources: [
    { field: 'resourceType', taxonomy: 'resource-types', key: 'type', label: 'Type' },
    { field: 'industries', taxonomy: 'industries', key: 'industry', label: 'Industry' },
    { field: 'topics', taxonomy: 'topics', key: 'topic', label: 'Topic' },
  ],
  glossary: [],
  people: [{ field: 'department', taxonomy: 'departments', key: 'department', label: 'Department' }],
}

// Date used for newest/oldest sorting and date filters
export const cptDateField: Record<CptSlug, string> = {
  posts: 'publishedDate',
  events: 'startDate',
  resources: 'createdAt',
  glossary: 'createdAt',
  people: 'createdAt',
}

// Relationship to People used by the "person" filter
export const cptPersonField: Partial<Record<CptSlug, string>> = {
  posts: 'author',
  events: 'speakers',
}

// Item fields a Dynamic field block can show (and a visibility rule can test)
export const dynamicFieldNames = ['title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle'] as const
