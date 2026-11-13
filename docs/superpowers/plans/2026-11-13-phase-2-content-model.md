# Phase 2: Content Model Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Five CPTs (Blog posts, Events, Resources, Glossary, People), seven taxonomies, JetEngine-style relations, translatable CPT base paths, and a single-item page for every CPT in both languages.

**Architecture:** Two factories keep the collections small and consistent: `createTaxonomy()` (terms: localized title, slug, description; hierarchical ones use the nested docs plugin) and `cptBaseFields()` (localized title, slug, excerpt, featured image). CPTs share Pages' draft settings (per-language status). Site settings hold a localized base path per CPT. One resolver turns a URL path into either a Page or a CPT item: a path whose first segment is a CPT base in that language is an item (`/blog/my-post`, `/he/בלוג/my-post`), everything else is a page. People show their posts and events in the admin through `join` fields; the website queries published items explicitly.

**Tech Stack:** Payload 3.93, Next.js 16.4, Postgres, Vitest, Playwright.

**Spec:** `docs/superpowers/specs/2026-11-13-wp-replacement-demo-design.md` sections 1 (CPT base paths), 2 (CPTs, taxonomies, relations).

**Moved out of this phase:** Page appearance (header/footer choice) moves to phase 5, where Headers and Footers exist. CPT archive pages and term archives arrive with the Listing block in phase 4.

**Conventions:** same as phase 1 (repo root, local Docker Postgres, run only the named tests, commit on `develop`). Every visitor-facing query filters `_status: published` with a `locale` (see phase 1 "Verified facts").

---

## File structure

| File | Responsibility |
|---|---|
| `src/content/types.ts` | CPT and taxonomy slugs, default base paths. |
| `src/collections/shared/drafts.ts` | Shared versions config (drafts, autosave, per-language status). |
| `src/fields/cptBase.ts` | Title, slug, excerpt, featured image for every CPT. |
| `src/collections/taxonomies/createTaxonomy.ts` | Taxonomy collection factory. |
| `src/collections/taxonomies/index.ts` | The seven taxonomies. |
| `src/collections/{Posts,Events,Resources,Glossary,People}.ts` | The CPTs. |
| `src/globals/SiteSettings.ts` | Adds `cptBases` group. |
| `src/lib/routing/cptPaths.ts` | Pure: match a path to a CPT base, build an item path. |
| `src/lib/queries/content.ts` | Published item lookups, bases per language, route resolution, alternates. |
| `src/components/items/ItemView.tsx` | Single-item template for all CPTs. |
| `src/components/items/TermList.tsx` | Term chips. |
| `src/app/(frontend)/[locale]/[[...path]]/page.tsx` | Uses the route resolver. |

---

### Task 1: Content type constants and shared drafts config

**Files:**
- Create: `src/content/types.ts`, `src/collections/shared/drafts.ts`
- Modify: `src/collections/Pages.ts`

- [ ] **Step 1: Create the constants**

Create `src/content/types.ts`:

```ts
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
```

- [ ] **Step 2: Extract the drafts config**

Create `src/collections/shared/drafts.ts`:

```ts
import type { CollectionConfig } from 'payload'

// Drafts with autosave; each language has its own draft/published status
export const localizedDrafts: CollectionConfig['versions'] = {
  drafts: {
    autosave: { interval: 2000 },
    localizeStatus: true,
  },
  maxPerDoc: 50,
}
```

In `src/collections/Pages.ts` add `import { localizedDrafts } from './shared/drafts'`, replace the whole `versions: { ... },` block with `versions: localizedDrafts,`, and add `group: 'Content',` inside `admin`.

- [ ] **Step 3: Check types and commit**

Run: `pnpm tsc --noEmit`
Expected: no errors.

```bash
git add src/content src/collections/shared src/collections/Pages.ts
git commit -m "Add content type constants and shared drafts config"
```

---

### Task 2: Taxonomies

**Files:**
- Create: `src/collections/taxonomies/createTaxonomy.ts`, `src/collections/taxonomies/index.ts`
- Modify: `src/payload.config.ts`

- [ ] **Step 1: Create the factory**

Create `src/collections/taxonomies/createTaxonomy.ts`:

```ts
import type { CollectionConfig } from 'payload'

import { isStaff } from '@/access/roles'
import { slugField } from '@/fields/slug'

type Options = {
  slug: string
  singular: string
  plural: string
}

// A WordPress-style taxonomy: terms have no drafts and are public.
// Hierarchical taxonomies are registered with the nested docs plugin, which adds parent + breadcrumbs.
export const createTaxonomy = ({ slug, singular, plural }: Options): CollectionConfig => ({
  slug,
  labels: { singular, plural },
  admin: {
    group: 'Taxonomies',
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
    create: isStaff,
    update: isStaff,
    delete: isStaff,
  },
  fields: [
    { name: 'title', type: 'text', localized: true, required: true },
    slugField(),
    { name: 'description', type: 'textarea', localized: true },
  ],
})
```

Create `src/collections/taxonomies/index.ts`:

```ts
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
```

- [ ] **Step 2: Register them**

In `src/payload.config.ts`:
- add `import { hierarchicalTaxonomies, taxonomies } from './collections/taxonomies'`
- change `collections: [Pages, Media, Users],` to `collections: [Pages, ...taxonomies, Media, Users],`
- change the nested docs plugin's `collections: ['pages'],` to `collections: ['pages', ...hierarchicalTaxonomies],`

- [ ] **Step 3: Generate types and check**

Run: `pnpm generate:types && pnpm tsc --noEmit`
Expected: `src/payload-types.ts` has `interface Category` with `parent` and `breadcrumbs`, and `interface Tag` without them; no type errors.

- [ ] **Step 4: Commit**

```bash
git add src/collections/taxonomies src/payload.config.ts src/payload-types.ts
git commit -m "Add seven taxonomies, categories hierarchical"
```

---

### Task 3: CPT base fields and the five CPTs

**Files:**
- Create: `src/fields/cptBase.ts`, `src/collections/Posts.ts`, `src/collections/Events.ts`, `src/collections/Resources.ts`, `src/collections/Glossary.ts`, `src/collections/People.ts`
- Modify: `src/payload.config.ts`

- [ ] **Step 1: Shared CPT fields**

Create `src/fields/cptBase.ts`:

```ts
import type { Field } from 'payload'

import { slugField } from './slug'

// Fields every CPT item has, like a WordPress post's title, slug, excerpt and featured image
export const cptBaseFields = ({ titleLabel = 'Title' }: { titleLabel?: string } = {}): Field[] => [
  { name: 'title', label: titleLabel, type: 'text', localized: true, required: true },
  slugField(),
  { name: 'excerpt', type: 'textarea', localized: true },
  {
    name: 'featuredImage',
    type: 'upload',
    relationTo: 'media',
    admin: { position: 'sidebar' },
  },
]
```

- [ ] **Step 2: Blog posts**

Create `src/collections/Posts.ts`:

```ts
import type { CollectionConfig } from 'payload'

import { isStaff, publishedOrStaff } from '@/access/roles'
import { cptBaseFields } from '@/fields/cptBase'

import { localizedDrafts } from './shared/drafts'

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: { singular: 'Blog post', plural: 'Blog posts' },
  admin: {
    group: 'Content',
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'publishedDate', '_status'],
  },
  access: { read: publishedOrStaff, create: isStaff, update: isStaff, delete: isStaff },
  versions: localizedDrafts,
  defaultSort: '-publishedDate',
  fields: [
    ...cptBaseFields(),
    { name: 'content', type: 'richText', localized: true },
    {
      name: 'publishedDate',
      type: 'date',
      // Filled with "now" on create, so it is never empty in practice
      defaultValue: () => new Date().toISOString(),
      admin: { position: 'sidebar' },
    },
    { name: 'author', type: 'relationship', relationTo: 'people', admin: { position: 'sidebar' } },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: { position: 'sidebar' },
    },
    { name: 'tags', type: 'relationship', relationTo: 'tags', hasMany: true, admin: { position: 'sidebar' } },
  ],
}
```

- [ ] **Step 3: Events**

Create `src/collections/Events.ts`:

```ts
import type { CollectionConfig } from 'payload'

import { isStaff, publishedOrStaff } from '@/access/roles'
import { cptBaseFields } from '@/fields/cptBase'

import { localizedDrafts } from './shared/drafts'

export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    group: 'Content',
    useAsTitle: 'title',
    defaultColumns: ['title', 'startDate', 'location', '_status'],
  },
  access: { read: publishedOrStaff, create: isStaff, update: isStaff, delete: isStaff },
  versions: localizedDrafts,
  defaultSort: 'startDate',
  fields: [
    ...cptBaseFields(),
    {
      type: 'row',
      fields: [
        {
          name: 'startDate',
          type: 'date',
          required: true,
          admin: { date: { pickerAppearance: 'dayAndTime' }, width: '50%' },
        },
        {
          name: 'endDate',
          type: 'date',
          admin: { date: { pickerAppearance: 'dayAndTime' }, width: '50%' },
        },
      ],
    },
    { name: 'location', type: 'text', localized: true },
    { name: 'content', type: 'richText', localized: true },
    {
      name: 'speakers',
      type: 'relationship',
      relationTo: 'people',
      hasMany: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'eventTypes',
      type: 'relationship',
      relationTo: 'event-types',
      hasMany: true,
      admin: { position: 'sidebar' },
    },
  ],
}
```

- [ ] **Step 4: Resources**

Create `src/collections/Resources.ts`:

```ts
import type { CollectionConfig } from 'payload'

import { isStaff, publishedOrStaff } from '@/access/roles'
import { cptBaseFields } from '@/fields/cptBase'

import { localizedDrafts } from './shared/drafts'

export const Resources: CollectionConfig = {
  slug: 'resources',
  admin: {
    group: 'Content',
    useAsTitle: 'title',
    defaultColumns: ['title', 'resourceType', '_status', 'updatedAt'],
  },
  access: { read: publishedOrStaff, create: isStaff, update: isStaff, delete: isStaff },
  versions: localizedDrafts,
  fields: [
    ...cptBaseFields(),
    { name: 'content', type: 'richText', localized: true },
    {
      name: 'externalUrl',
      label: 'External link (video, PDF…)',
      type: 'text',
      localized: true,
    },
    {
      name: 'relatedResources',
      type: 'relationship',
      relationTo: 'resources',
      hasMany: true,
      filterOptions: ({ id }) => (id ? { id: { not_equals: id } } : true),
    },
    {
      name: 'resourceType',
      type: 'relationship',
      relationTo: 'resource-types',
      admin: { position: 'sidebar' },
    },
    {
      name: 'industries',
      type: 'relationship',
      relationTo: 'industries',
      hasMany: true,
      admin: { position: 'sidebar' },
    },
    { name: 'topics', type: 'relationship', relationTo: 'topics', hasMany: true, admin: { position: 'sidebar' } },
  ],
}
```

- [ ] **Step 5: Glossary**

Create `src/collections/Glossary.ts`:

```ts
import type { CollectionConfig } from 'payload'

import { isStaff, publishedOrStaff } from '@/access/roles'
import { cptBaseFields } from '@/fields/cptBase'

import { localizedDrafts } from './shared/drafts'

export const Glossary: CollectionConfig = {
  slug: 'glossary',
  labels: { singular: 'Glossary term', plural: 'Glossary' },
  admin: {
    group: 'Content',
    useAsTitle: 'title',
    defaultColumns: ['title', '_status', 'updatedAt'],
  },
  access: { read: publishedOrStaff, create: isStaff, update: isStaff, delete: isStaff },
  versions: localizedDrafts,
  defaultSort: 'title',
  fields: [
    ...cptBaseFields({ titleLabel: 'Term' }),
    { name: 'content', label: 'Definition', type: 'richText', localized: true },
    {
      name: 'relatedTerms',
      type: 'relationship',
      relationTo: 'glossary',
      hasMany: true,
      filterOptions: ({ id }) => (id ? { id: { not_equals: id } } : true),
    },
  ],
}
```

- [ ] **Step 6: People (with reverse relations)**

Create `src/collections/People.ts`:

```ts
import type { CollectionConfig } from 'payload'

import { isStaff, publishedOrStaff } from '@/access/roles'
import { cptBaseFields } from '@/fields/cptBase'

import { localizedDrafts } from './shared/drafts'

export const People: CollectionConfig = {
  slug: 'people',
  labels: { singular: 'Person', plural: 'People' },
  admin: {
    group: 'Content',
    useAsTitle: 'title',
    defaultColumns: ['title', 'jobTitle', 'department', '_status'],
  },
  access: { read: publishedOrStaff, create: isStaff, update: isStaff, delete: isStaff },
  versions: localizedDrafts,
  defaultSort: 'title',
  fields: [
    ...cptBaseFields({ titleLabel: 'Name' }),
    { name: 'jobTitle', type: 'text', localized: true },
    { name: 'content', label: 'Bio', type: 'richText', localized: true },
    { name: 'department', type: 'relationship', relationTo: 'departments', admin: { position: 'sidebar' } },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Blog posts',
          // JetEngine-style reverse relation: posts that have this person as author
          fields: [{ name: 'posts', type: 'join', collection: 'posts', on: 'author' }],
        },
        {
          label: 'Events',
          fields: [{ name: 'events', type: 'join', collection: 'events', on: 'speakers' }],
        },
      ],
    },
  ],
}
```

- [ ] **Step 7: Register the CPTs**

In `src/payload.config.ts` add:

```ts
import { Events } from './collections/Events'
import { Glossary } from './collections/Glossary'
import { People } from './collections/People'
import { Posts } from './collections/Posts'
import { Resources } from './collections/Resources'
```

and change `collections: [Pages, ...taxonomies, Media, Users],` to:

```ts
  collections: [Pages, Posts, Events, Resources, Glossary, People, ...taxonomies, Media, Users],
```

- [ ] **Step 8: Generate types and import map, check**

Run: `pnpm generate:types && pnpm generate:importmap && pnpm tsc --noEmit`
Expected: interfaces `Post`, `Event`, `Resource`, `Glossary`, `Person` exist; `Person` has `posts?: { docs?: ... }` and `events?: { docs?: ... }`; no type errors.

- [ ] **Step 9: Commit**

```bash
git add src/fields/cptBase.ts src/collections src/payload.config.ts src/payload-types.ts "src/app/(payload)/admin/importMap.js"
git commit -m "Add blog posts, events, resources, glossary and people"
```

---

### Task 4: Relations work both ways

**Files:**
- Test: `tests/int/relations.int.spec.ts`

- [ ] **Step 1: Write the test**

Create `tests/int/relations.int.spec.ts`:

```ts
// @vitest-environment node
import { getPayload, type Payload } from 'payload'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import config from '@payload-config'

let payload: Payload
const s = Date.now()
const ids: Record<string, number[]> = { people: [], posts: [], events: [], categories: [] }

describe('relations', () => {
  let personId: number

  beforeAll(async () => {
    payload = await getPayload({ config })
    const person = await payload.create({
      collection: 'people',
      data: { title: `Rel Person ${s}`, _status: 'published' },
    })
    personId = person.id
    ids.people.push(person.id)

    const post = await payload.create({
      collection: 'posts',
      data: { title: `Rel Post ${s}`, author: person.id, _status: 'published' },
    })
    ids.posts.push(post.id)

    const event = await payload.create({
      collection: 'events',
      data: {
        title: `Rel Event ${s}`,
        startDate: new Date().toISOString(),
        speakers: [person.id],
        _status: 'published',
      },
    })
    ids.events.push(event.id)
  })

  afterAll(async () => {
    for (const collection of ['posts', 'events', 'people', 'categories'] as const) {
      if (ids[collection].length) {
        await payload.delete({ collection, where: { id: { in: ids[collection] } } })
      }
    }
  })

  it('lists a person’s posts and events through join fields', async () => {
    const person = await payload.findByID({ collection: 'people', id: personId, depth: 0 })
    expect(person.posts?.docs).toHaveLength(1)
    expect(person.events?.docs).toHaveLength(1)
  })

  it('builds category breadcrumbs from the parent', async () => {
    const parent = await payload.create({ collection: 'categories', data: { title: `News ${s}` } })
    const child = await payload.create({
      collection: 'categories',
      data: { title: `Company ${s}`, parent: parent.id },
    })
    ids.categories.push(child.id, parent.id)
    expect(child.breadcrumbs?.map((b) => b.url)).toEqual([`/news-${s}`, `/news-${s}/company-${s}`])
  })
})
```

- [ ] **Step 2: Run it**

Run: `pnpm vitest run --config ./vitest.config.mts tests/int/relations.int.spec.ts`
Expected: PASS (2 tests). The first run pushes the new tables to the local DB; accept any data-loss prompt (local only).

- [ ] **Step 3: Commit**

```bash
git add tests/int/relations.int.spec.ts
git commit -m "Test reverse relations and category breadcrumbs"
```

---

### Task 5: CPT base paths in Site settings

**Files:**
- Modify: `src/globals/SiteSettings.ts`

- [ ] **Step 1: Add the bases group**

In `src/globals/SiteSettings.ts` add the imports:

```ts
import { cptSlugs, defaultCptBases } from '@/content/types'
import { slugify } from '@/utilities/slugify'
```

and append this field to `fields`:

```ts
    {
      name: 'cptBases',
      label: 'URL bases',
      type: 'group',
      admin: {
        description: 'First part of the URL for each content type, per language (like WPML "translate slugs").',
      },
      fields: cptSlugs.map((cpt) => ({
        name: cpt,
        type: 'text' as const,
        localized: true,
        required: true,
        defaultValue: defaultCptBases[cpt],
        hooks: {
          beforeValidate: [({ value }: { value?: unknown }) => (typeof value === 'string' ? slugify(value) : value)],
        },
      })),
    },
```

- [ ] **Step 2: Generate types and check**

Run: `pnpm generate:types && pnpm tsc --noEmit`
Expected: `SiteSetting` has `cptBases: { posts: string; events: string; resources: string; glossary: string; people: string }`.

- [ ] **Step 3: Commit**

```bash
git add src/globals/SiteSettings.ts src/payload-types.ts
git commit -m "Add translatable CPT URL bases to Site settings"
```

---

### Task 6: Pure CPT path helpers

**Files:**
- Create: `src/lib/routing/cptPaths.ts`
- Test: `tests/unit/cptPaths.spec.ts`

- [ ] **Step 1: Write the failing test**

Create `tests/unit/cptPaths.spec.ts`:

```ts
// @vitest-environment node
import { describe, expect, it } from 'vitest'

import { defaultCptBases } from '@/content/types'
import { cptItemPath, matchCptPath } from '@/lib/routing/cptPaths'

const heBases = { ...defaultCptBases, posts: 'בלוג' }

describe('matchCptPath', () => {
  it('matches base + slug', () => {
    expect(matchCptPath('/blog/hello', defaultCptBases)).toEqual({ collection: 'posts', slug: 'hello' })
    expect(matchCptPath('/people/dana', defaultCptBases)).toEqual({ collection: 'people', slug: 'dana' })
  })

  it('uses the bases of the current language', () => {
    expect(matchCptPath('/בלוג/shalom', heBases)).toEqual({ collection: 'posts', slug: 'shalom' })
    expect(matchCptPath('/blog/shalom', heBases)).toBeNull()
  })

  it('ignores the bare base (that is the archive page) and deeper paths', () => {
    expect(matchCptPath('/blog', defaultCptBases)).toBeNull()
    expect(matchCptPath('/blog/a/b', defaultCptBases)).toBeNull()
    expect(matchCptPath('/', defaultCptBases)).toBeNull()
  })
})

describe('cptItemPath', () => {
  it('joins base and slug', () => {
    expect(cptItemPath('posts', 'hello', defaultCptBases)).toBe('/blog/hello')
    expect(cptItemPath('posts', 'shalom', heBases)).toBe('/בלוג/shalom')
  })
})
```

- [ ] **Step 2: Run it to verify it fails**

Run: `pnpm vitest run --config ./vitest.config.mts tests/unit/cptPaths.spec.ts`
Expected: FAIL, cannot resolve `@/lib/routing/cptPaths`.

- [ ] **Step 3: Implement**

Create `src/lib/routing/cptPaths.ts`:

```ts
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
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `pnpm vitest run --config ./vitest.config.mts tests/unit/cptPaths.spec.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/lib/routing tests/unit/cptPaths.spec.ts
git commit -m "Add CPT path matching"
```

---

### Task 7: Route resolution and alternates

**Files:**
- Create: `src/lib/queries/content.ts`
- Test: `tests/int/resolve.int.spec.ts`

- [ ] **Step 1: Write the failing test**

Create `tests/int/resolve.int.spec.ts`:

```ts
// @vitest-environment node
import { getPayload, type Payload } from 'payload'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import config from '@payload-config'
import { getRouteAlternates, resolveRoute } from '@/lib/queries/content'
import type { SiteSetting } from '@/payload-types'

let payload: Payload
const s = Date.now()
let postId: number
let enOnlyId: number
let pageId: number
let previousHeBases: SiteSetting['cptBases']

describe('resolveRoute', () => {
  beforeAll(async () => {
    payload = await getPayload({ config })
    const he = await payload.findGlobal({ slug: 'site-settings', locale: 'he', depth: 0 })
    previousHeBases = he.cptBases
    await payload.updateGlobal({
      slug: 'site-settings',
      locale: 'he',
      data: { siteName: he.siteName || 'Payload demo', cptBases: { ...he.cptBases, posts: 'בלוג' } },
    })

    const post = await payload.create({
      collection: 'posts',
      locale: 'en',
      data: { title: `Resolve ${s}`, slug: `resolve-${s}`, _status: 'published' },
    })
    await payload.update({
      collection: 'posts',
      id: post.id,
      locale: 'he',
      data: { title: `פתרון ${s}`, slug: `pitaron-${s}`, _status: 'published' },
    })
    postId = post.id

    const enOnly = await payload.create({
      collection: 'posts',
      locale: 'en',
      data: { title: `English only ${s}`, slug: `en-only-${s}`, _status: 'published' },
    })
    enOnlyId = enOnly.id

    const page = await payload.create({
      collection: 'pages',
      locale: 'en',
      data: { title: `Blog-like page ${s}`, slug: `pagey-${s}`, _status: 'published' },
    })
    pageId = page.id
  })

  afterAll(async () => {
    await payload.updateGlobal({ slug: 'site-settings', locale: 'he', data: { cptBases: previousHeBases } })
    await payload.delete({ collection: 'posts', where: { id: { in: [postId, enOnlyId] } } })
    await payload.delete({ collection: 'pages', id: pageId })
  })

  it('resolves a CPT item under its English base', async () => {
    const route = await resolveRoute(`/blog/resolve-${s}`, 'en')
    expect(route?.kind).toBe('item')
    expect(route?.kind === 'item' && route.collection).toBe('posts')
    expect(route?.doc.id).toBe(postId)
  })

  it('resolves the Hebrew item under the translated base', async () => {
    const route = await resolveRoute(`/בלוג/pitaron-${s}`, 'he')
    expect(route?.doc.title).toBe(`פתרון ${s}`)
  })

  it('does not resolve an item that is not published in that language', async () => {
    expect(await resolveRoute(`/בלוג/en-only-${s}`, 'he')).toBeNull()
  })

  it('still resolves pages', async () => {
    const route = await resolveRoute(`/pagey-${s}`, 'en')
    expect(route?.kind).toBe('page')
    expect(route?.doc.id).toBe(pageId)
  })

  it('builds alternates for items, with the home page as fallback', async () => {
    const both = await resolveRoute(`/blog/resolve-${s}`, 'en')
    expect(await getRouteAlternates(both!)).toEqual({
      en: `/blog/resolve-${s}`,
      he: `/he/בלוג/pitaron-${s}`,
    })
    const enOnly = await resolveRoute(`/blog/en-only-${s}`, 'en')
    expect(await getRouteAlternates(enOnly!)).toEqual({ en: `/blog/en-only-${s}`, he: '/he' })
  })
})
```

- [ ] **Step 2: Run it to verify it fails**

Run: `pnpm vitest run --config ./vitest.config.mts tests/int/resolve.int.spec.ts`
Expected: FAIL, cannot resolve `@/lib/queries/content`.

- [ ] **Step 3: Implement**

Create `src/lib/queries/content.ts`:

```ts
import config from '@payload-config'
import { getPayload } from 'payload'

import { defaultCptBases, type CptSlug } from '@/content/types'
import { locales, type Locale } from '@/i18n/config'
import { localizePath } from '@/i18n/paths'
import { cptItemPath, matchCptPath, type CptBases } from '@/lib/routing/cptPaths'
import type { Config, Page } from '@/payload-types'

import { findPublishedPageByPath, getPageAlternates } from './pages'

export type CptDoc = Config['collections'][CptSlug]

export type Route =
  | { kind: 'page'; doc: Page }
  | { kind: 'item'; collection: CptSlug; doc: CptDoc }

const published = { _status: { equals: 'published' } } as const

export async function getCptBases(locale: Locale): Promise<CptBases> {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'site-settings', locale, depth: 0 })
  return { ...defaultCptBases, ...settings.cptBases }
}

export async function findPublishedItem(
  collection: CptSlug,
  locale: Locale,
  by: { slug: string } | { id: number },
): Promise<CptDoc | null> {
  const payload = await getPayload({ config })
  const match = 'slug' in by ? { slug: { equals: by.slug } } : { id: { equals: by.id } }
  const { docs } = await payload.find({
    collection,
    locale,
    draft: false,
    limit: 1,
    depth: 2,
    where: { and: [match, published] },
  })
  return (docs[0] as CptDoc | undefined) ?? null
}

export async function resolveRoute(path: string, locale: Locale): Promise<Route | null> {
  const match = matchCptPath(path, await getCptBases(locale))
  if (match) {
    const doc = await findPublishedItem(match.collection, locale, { slug: match.slug })
    if (doc) return { kind: 'item', collection: match.collection, doc }
  }
  const page = await findPublishedPageByPath(path, locale)
  return page ? { kind: 'page', doc: page } : null
}

// Href of this route in every language; that language's home page when it has no published version
export async function getRouteAlternates(route: Route): Promise<Record<Locale, string>> {
  if (route.kind === 'page') return getPageAlternates(route.doc.id)

  const entries = await Promise.all(
    locales.map(async (locale) => {
      const doc = await findPublishedItem(route.collection, locale, { id: route.doc.id })
      const path = doc?.slug ? cptItemPath(route.collection, doc.slug, await getCptBases(locale)) : '/'
      return [locale, localizePath(locale, path)] as const
    }),
  )
  return Object.fromEntries(entries) as Record<Locale, string>
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `pnpm vitest run --config ./vitest.config.mts tests/int/resolve.int.spec.ts`
Expected: PASS (5 tests).

- [ ] **Step 5: Commit**

```bash
git add src/lib/queries/content.ts tests/int/resolve.int.spec.ts
git commit -m "Resolve URLs to pages or CPT items per language"
```

---

### Task 8: Single-item template

**Files:**
- Create: `src/components/items/TermList.tsx`, `src/components/items/ItemView.tsx`
- Modify: `src/app/(frontend)/[locale]/[[...path]]/page.tsx`, `src/app/(frontend)/styles/base.css`

- [ ] **Step 1: Term chips**

Create `src/components/items/TermList.tsx`:

```tsx
type Term = { id: number; title?: string | null } | number | null | undefined

export function TermList({ label, terms }: { label: string; terms: Term[] | Term }) {
  const list = (Array.isArray(terms) ? terms : [terms]).filter(
    (term): term is { id: number; title?: string | null } => typeof term === 'object' && term !== null,
  )
  if (!list.length) return null

  return (
    <div className="term-list">
      <span className="term-list__label">{label}</span>
      <ul>
        {list.map((term) => (
          <li key={term.id} className="chip">
            {term.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
```

(Term links arrive with term archives in phase 4.)

- [ ] **Step 2: Item view**

Create `src/components/items/ItemView.tsx`:

```tsx
import { RichText } from '@payloadcms/richtext-lexical/react'

import type { CptSlug } from '@/content/types'
import type { Locale } from '@/i18n/config'
import { localizePath } from '@/i18n/paths'
import { cptItemPath, type CptBases } from '@/lib/routing/cptPaths'
import type { CptDoc } from '@/lib/queries/content'
import type { Event, Glossary, Media, Person, Post, Resource } from '@/payload-types'

import { TermList } from './TermList'

type Props = {
  collection: CptSlug
  doc: CptDoc
  locale: Locale
  bases: CptBases
}

const formatDate = (value: string | null | undefined, locale: Locale) =>
  value
    ? new Intl.DateTimeFormat(locale === 'he' ? 'he-IL' : 'en-GB', { dateStyle: 'long' }).format(new Date(value))
    : null

function PersonLink({ person, locale, bases }: { person: Person; locale: Locale; bases: CptBases }) {
  return <a href={localizePath(locale, cptItemPath('people', person.slug, bases))}>{person.title}</a>
}

const asPeople = (value: unknown): Person[] =>
  (Array.isArray(value) ? value : [value]).filter(
    (p): p is Person => typeof p === 'object' && p !== null && '_status' in p && p._status === 'published',
  )

export function ItemView({ collection, doc, locale, bases }: Props) {
  const image = typeof doc.featuredImage === 'object' ? (doc.featuredImage as Media | null) : null

  return (
    <article className="item">
      <header className="item__header">
        <h1>{doc.title}</h1>

        {collection === 'posts' && (
          <p className="item__meta">
            {formatDate((doc as Post).publishedDate, locale)}
            {asPeople((doc as Post).author).map((person) => (
              <span key={person.id}>
                {' · '}
                <PersonLink person={person} locale={locale} bases={bases} />
              </span>
            ))}
          </p>
        )}

        {collection === 'events' && (
          <p className="item__meta">
            {formatDate((doc as Event).startDate, locale)}
            {(doc as Event).location ? ` · ${(doc as Event).location}` : null}
          </p>
        )}

        {collection === 'people' && (doc as Person).jobTitle && (
          <p className="item__meta">{(doc as Person).jobTitle}</p>
        )}

        {doc.excerpt && <p className="item__excerpt">{doc.excerpt}</p>}
      </header>

      {image?.url && (
        // eslint-disable-next-line @next/next/no-img-element -- image sizes come with the blocks phase
        <img className="item__image" src={image.url} alt={image.alt ?? ''} />
      )}

      {doc.content && <RichText className="item__content" data={doc.content} />}

      <footer className="item__footer">
        {collection === 'posts' && (
          <>
            <TermList label="Categories" terms={(doc as Post).categories} />
            <TermList label="Tags" terms={(doc as Post).tags} />
          </>
        )}
        {collection === 'events' && (
          <>
            <TermList label="Type" terms={(doc as Event).eventTypes} />
            {asPeople((doc as Event).speakers).length > 0 && (
              <div className="term-list">
                <span className="term-list__label">Speakers</span>
                <ul>
                  {asPeople((doc as Event).speakers).map((person) => (
                    <li key={person.id}>
                      <PersonLink person={person} locale={locale} bases={bases} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
        {collection === 'resources' && (
          <>
            <TermList label="Type" terms={(doc as Resource).resourceType} />
            <TermList label="Industries" terms={(doc as Resource).industries} />
            <TermList label="Topics" terms={(doc as Resource).topics} />
            {(doc as Resource).externalUrl && (
              <p>
                <a href={(doc as Resource).externalUrl!}>Open resource</a>
              </p>
            )}
          </>
        )}
        {collection === 'people' && <TermList label="Department" terms={(doc as Person).department} />}
        {collection === 'glossary' && <TermList label="Related terms" terms={(doc as Glossary).relatedTerms} />}
      </footer>
    </article>
  )
}
```

- [ ] **Step 3: Use the resolver in the route**

Replace `src/app/(frontend)/[locale]/[[...path]]/page.tsx`:

```tsx
import config from '@payload-config'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

import { ItemView } from '@/components/items/ItemView'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { isLocale, type Locale } from '@/i18n/config'
import { localizePath, normalizePath } from '@/i18n/paths'
import { getCptBases, getRouteAlternates, resolveRoute } from '@/lib/queries/content'

type Props = {
  params: Promise<{ locale: string; path?: string[] }>
}

async function resolve(params: Props['params']) {
  const { locale, path } = await params
  if (!isLocale(locale)) notFound()
  const route = await resolveRoute(normalizePath(path), locale)
  if (!route) notFound()
  return { locale, route }
}

async function getSiteName(locale: Locale): Promise<string> {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'site-settings', locale, depth: 0 })
  return settings.siteName ?? ''
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, route } = await resolve(params)
  const siteName = await getSiteName(locale)
  return { title: siteName ? `${route.doc.title} | ${siteName}` : route.doc.title }
}

export default async function PageRoute({ params }: Props) {
  const { locale, route } = await resolve(params)
  const [alternates, siteName, bases] = await Promise.all([
    getRouteAlternates(route),
    getSiteName(locale),
    getCptBases(locale),
  ])

  return (
    <>
      <header className="site-bar">
        <div className="container">
          <a className="site-name" href={localizePath(locale, '/')}>
            {siteName}
          </a>
          <LanguageSwitcher current={locale} hrefs={alternates} />
        </div>
      </header>
      <main className="page-main container">
        {route.kind === 'item' ? (
          <ItemView collection={route.collection} doc={route.doc} locale={locale} bases={bases} />
        ) : (
          <h1>{route.doc.title}</h1>
        )}
      </main>
    </>
  )
}
```

- [ ] **Step 4: Item styles**

Append to `src/app/(frontend)/styles/base.css`:

```css
.item {
  display: grid;
  gap: var(--space-6);
  max-inline-size: 760px;
}

.item__meta,
.item__excerpt {
  color: var(--color-text-muted);
  margin-block: 0;
}

.item__excerpt {
  font-size: var(--text-lg);
}

.item__image {
  border-radius: var(--radius-md);
}

.item__footer {
  display: grid;
  gap: var(--space-3);
  border-block-start: 1px solid var(--color-border);
  padding-block-start: var(--space-4);
}

.term-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2);
}

.term-list ul {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  list-style: none;
  margin: 0;
  padding: 0;
}

.term-list__label {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.chip {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  padding-block: var(--space-1);
  padding-inline: var(--space-3);
  font-size: var(--text-sm);
}
```

- [ ] **Step 5: Type-check and build**

Run: `pnpm tsc --noEmit && pnpm build`
Expected: both succeed.

- [ ] **Step 6: Commit**

```bash
git add src/components/items "src/app/(frontend)"
git commit -m "Render single CPT items with their terms and relations"
```

---

### Task 9: End-to-end item test

**Files:**
- Create: `tests/e2e/items.e2e.spec.ts`

- [ ] **Step 1: Write the test**

Create `tests/e2e/items.e2e.spec.ts`:

```ts
import { expect, test } from '@playwright/test'
import { getPayload } from 'payload'

import config from '../../src/payload.config.js'

const base = 'http://localhost:3000'
const s = Date.now()
const created: { posts: number[]; people: number[]; categories: number[] } = {
  posts: [],
  people: [],
  categories: [],
}

test.describe('CPT items', () => {
  test.beforeAll(async () => {
    const payload = await getPayload({ config })
    const person = await payload.create({
      collection: 'people',
      data: { title: `E2E Author ${s}`, slug: `e2e-author-${s}`, jobTitle: 'Editor', _status: 'published' },
    })
    const category = await payload.create({ collection: 'categories', data: { title: `E2E News ${s}`, slug: `e2e-news-${s}` } })
    const post = await payload.create({
      collection: 'posts',
      data: {
        title: `E2E Post ${s}`,
        slug: `e2e-post-${s}`,
        excerpt: 'A short summary.',
        author: person.id,
        categories: [category.id],
        _status: 'published',
      },
    })
    created.people.push(person.id)
    created.categories.push(category.id)
    created.posts.push(post.id)
  })

  test.afterAll(async () => {
    const payload = await getPayload({ config })
    await payload.delete({ collection: 'posts', where: { id: { in: created.posts } } })
    await payload.delete({ collection: 'people', where: { id: { in: created.people } } })
    await payload.delete({ collection: 'categories', where: { id: { in: created.categories } } })
  })

  test('shows a blog post with its category and author link', async ({ page }) => {
    await page.goto(`${base}/blog/e2e-post-${s}`)
    await expect(page.locator('h1')).toHaveText(`E2E Post ${s}`)
    await expect(page.getByText(`E2E News ${s}`)).toBeVisible()
    await page.getByRole('link', { name: `E2E Author ${s}` }).click()
    await expect(page).toHaveURL(`${base}/people/e2e-author-${s}`)
    await expect(page.locator('h1')).toHaveText(`E2E Author ${s}`)
  })

  test('returns 404 for the post in Hebrew, where it is not published', async ({ page }) => {
    const response = await page.goto(`${base}/he/blog/e2e-post-${s}`)
    expect(response?.status()).toBe(404)
  })
})
```

- [ ] **Step 2: Run it**

Run: `pnpm test:e2e tests/e2e/items.e2e.spec.ts --reporter=line`
Expected: 2 passed.

- [ ] **Step 3: Commit**

```bash
git add tests/e2e/items.e2e.spec.ts
git commit -m "Test CPT item pages end to end"
```

---

### Task 10: Migration

- [ ] **Step 1: Generate**

Run: `(while true; do printf '\r'; sleep 0.3; done) | script -q /dev/null pnpm payload migrate:create phase2_content_model`

- [ ] **Step 2: Review the `up` SQL**

Check:
- New tables for the 5 CPTs (+ `_locales`, `_rels`, `_v` versions) and 7 taxonomies, `categories_breadcrumbs`.
- `site_settings_locales` gets `cpt_bases_posts` … `cpt_bases_people` with `DEFAULT '<base>' NOT NULL` (safe on the existing row thanks to the default).
- `payload_locked_documents_rels` gets new nullable `*_id` columns.
- No `DROP`, `RENAME`, or `NOT NULL` column without a default on an existing table.

- [ ] **Step 3: Rehearse on an empty DB and on a copy with data**

```bash
U="$(grep ^DATABASE_URL= .env | cut -d= -f2- | sed 's#/[^/]*$#/rehearse#')"
docker exec payload-test-postgres psql -U payload -d postgres -qc "DROP DATABASE IF EXISTS rehearse" -c "CREATE DATABASE rehearse"
DATABASE_URL="$U" NODE_ENV=production pnpm payload migrate
docker exec payload-test-postgres psql -U payload -d postgres -qc "DROP DATABASE rehearse"
```

Expected: `initial`, `phase1_foundation`, `phase2_content_model` all migrate without errors.

Then rehearse the upgrade production will take: a phase-1 database that already has a Site settings row and a user.

```bash
docker exec payload-test-postgres psql -U payload -d postgres -qc "CREATE DATABASE rehearse"
git worktree add -f ../payload-test-p1 ad9731c
ln -s "$PWD/node_modules" ../payload-test-p1/node_modules
(cd ../payload-test-p1 && DATABASE_URL="$U" NODE_ENV=production pnpm payload migrate)
docker exec payload-test-postgres psql -U payload -d rehearse -qc "INSERT INTO site_settings (id) VALUES (1)" -c "INSERT INTO site_settings_locales (site_name, _locale, _parent_id) VALUES ('Demo', 'en', 1)" -c "INSERT INTO users (email) VALUES ('owner@example.test')"
DATABASE_URL="$U" NODE_ENV=production pnpm payload migrate
docker exec payload-test-postgres psql -U payload -d rehearse -tc "SELECT cpt_bases_posts FROM site_settings_locales"
git worktree remove --force ../payload-test-p1
docker exec payload-test-postgres psql -U payload -d postgres -qc "DROP DATABASE rehearse"
```

Expected: the phase 2 migration applies on top, and the existing row reads `blog`.

- [ ] **Step 4: Commit**

```bash
git add src/migrations
git commit -m "Add phase 2 migration"
```

---

### Task 11: Lint, full tests, deploy

- [ ] **Step 1:** `pnpm lint && pnpm vitest run --config ./vitest.config.mts && pnpm test:e2e --reporter=line` — all pass (the existing template warning about `testInfo` is allowed).
- [ ] **Step 2:** `git checkout main && git merge --ff-only develop && git push origin main && git checkout develop`
- [ ] **Step 3:** Wait for Production: `vercel ls payload-test --environment production` until the newest row is `● Ready`; check the build log shows `Migrated: ..._phase2_content_model`: `vercel inspect <deployment-url> --logs | grep Migrat`.
- [ ] **Step 4:** `git push origin develop`
- [ ] **Step 5:** Verify: `curl -s -o /dev/null -w "%{http_code}\n" https://payload-test-sand-nu.vercel.app/admin` → `200`; `curl -s "https://payload-test-sand-nu.vercel.app/api/posts?limit=1"` returns JSON with `"docs"`.
