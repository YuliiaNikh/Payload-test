import { createTaxonomy } from './createTaxonomy'

export const Categories = createTaxonomy({ slug: 'categories', singular: 'Category', plural: 'Categories' })
export const Tags = createTaxonomy({ slug: 'tags', singular: 'Tag', plural: 'Tags' })
export const EventTypes = createTaxonomy({ slug: 'event-types', singular: 'Event type', plural: 'Event types' })
export const Industries = createTaxonomy({ slug: 'industries', singular: 'Industry', plural: 'Industries' })
export const ResourceTypes = createTaxonomy({
  slug: 'resource-types',
  singular: 'Resource type',
  plural: 'Resource types',
})
export const Topics = createTaxonomy({ slug: 'topics', singular: 'Topic', plural: 'Topics' })
export const Departments = createTaxonomy({ slug: 'departments', singular: 'Department', plural: 'Departments' })

export const taxonomies = [Categories, Tags, EventTypes, Industries, ResourceTypes, Topics, Departments]

// Taxonomies with parent/child terms (like WordPress categories)
export const hierarchicalTaxonomies = ['categories'] as const
