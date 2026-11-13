import config from '@payload-config'
import Link from 'next/link'
import { getPayload } from 'payload'

import { cptPersonField, cptTaxonomies } from '@/content/types'
import { ui } from '@/i18n/ui'
import type { CptDoc } from '@/lib/queries/content'
import type { ListingBlock as ListingData } from '@/payload-types'
import { alphabetFor } from '@/utilities/letters'

import type { BlockContext } from '../context'
import { Section, SectionHeader } from '../Section'
import { ListingCard, type CardStyle } from './Card'
import { ListingFilters, type FilterUI } from './Filters'
import { Pagination } from './Pagination'
import { buildListingSort, buildListingWhere } from './query'
import { listingHref, readListingState, sortKeys, type ListingState } from './state'

const published = { _status: { equals: 'published' } } as const

const idsOf = (value: unknown): number[] =>
  (Array.isArray(value) ? value : [value])
    .map((v) => (typeof v === 'object' && v !== null ? (v as { id?: number }).id : v))
    .filter((v): v is number => typeof v === 'number')

export async function ListingBlock({ block, ctx, index = 0 }: { block: ListingData; ctx: BlockContext; index?: number }) {
  const payload = await getPayload({ config })
  const { locale } = ctx
  const strings = ui(locale)
  const collection = block.collection
  const taxonomies = cptTaxonomies[collection]
  const prefix = index > 0 ? `l${index + 1}_` : ''
  const listingId = `listing-${block.id ?? index}`
  const filters = block.filters ?? []
  const enabled = new Set(filters.map((f) => f.type))
  const taxonomyFilters = filters.filter((f) => f.type === 'taxonomy' && taxonomies.some((t) => t.key === f.taxonomy))

  // Only honour URL params for filters the editor switched on
  const raw = readListingState(ctx.searchParams, prefix, taxonomyFilters.map((f) => f.taxonomy!))
  const state: ListingState = {
    terms: raw.terms,
    page: raw.page,
    ...(enabled.has('person') && cptPersonField[collection] && raw.person ? { person: raw.person } : {}),
    ...(enabled.has('date') ? { when: raw.when, from: raw.from, to: raw.to } : {}),
    ...(enabled.has('search') && raw.q ? { q: raw.q } : {}),
    ...(enabled.has('az') && raw.letter ? { letter: raw.letter } : {}),
    ...(enabled.has('sort') && raw.sort ? { sort: raw.sort } : {}),
  }
  const sort = state.sort ?? block.defaultSort ?? 'newest'

  // Slugs in the URL -> ids
  const termIds: Record<string, number[]> = {}
  for (const [key, slugs] of Object.entries(state.terms)) {
    const tax = taxonomies.find((t) => t.key === key)!
    const { docs } = await payload.find({
      collection: tax.taxonomy,
      locale,
      depth: 0,
      limit: slugs.length,
      where: { slug: { in: slugs } },
    })
    termIds[key] = docs.map((d) => d.id)
  }
  let personId: number | null = null
  if (state.person) {
    const { docs } = await payload.find({
      collection: 'people',
      locale,
      depth: 0,
      limit: 1,
      where: { and: [{ slug: { equals: state.person } }, published] },
    })
    personId = docs[0]?.id ?? null
  }

  const fixedTermIds: Record<string, number[]> = {}
  for (const term of block.fixedTerms ?? []) {
    const tax = taxonomies.find((t) => t.taxonomy === term.relationTo)
    const id = typeof term.value === 'object' ? term.value.id : term.value
    if (tax) (fixedTermIds[tax.field] ??= []).push(id)
  }
  const presetTermIds = ctx.preset?.collection === collection ? { [ctx.preset.field]: [ctx.preset.termId] } : undefined

  const onOwnItem = ctx.item?.collection === collection ? ctx.item.doc : null
  const relatedTermIds =
    block.relatedToCurrent && onOwnItem
      ? Object.fromEntries(taxonomies.map((t) => [t.field, idsOf((onOwnItem as unknown as Record<string, unknown>)[t.field])]))
      : undefined

  const queryInput = {
    collection,
    state,
    termIds,
    fixedTermIds,
    presetTermIds,
    fixedWhen: block.when,
    personId,
    excludeId: block.excludeCurrent && onOwnItem ? onOwnItem.id : null,
    relatedTermIds,
    now: new Date(),
  }
  const perPage = block.perPage ?? 9
  const paging = block.paging ?? 'numbers'
  const result = await payload.find({
    collection,
    locale,
    draft: false,
    depth: 1,
    where: buildListingWhere(queryInput),
    sort: buildListingSort(collection, sort),
    limit: paging === 'loadMore' ? perPage * state.page : perPage,
    page: paging === 'numbers' ? state.page : 1,
  })

  // Filter options
  const ui_filters: FilterUI[] = []
  for (const filter of filters) {
    if (filter.type === 'taxonomy') {
      const tax = taxonomies.find((t) => t.key === filter.taxonomy)
      if (!tax) continue
      const { docs } = await payload.find({ collection: tax.taxonomy, locale, depth: 0, limit: 100, sort: 'title' })
      ui_filters.push({
        kind: 'taxonomy',
        key: tax.key,
        label: tax.label,
        display: filter.display ?? 'tabs',
        options: docs.filter((d) => d.title && d.slug).map((d) => ({ value: d.slug, label: d.title })),
        selected: state.terms[tax.key] ?? [],
      })
    } else if (filter.type === 'person' && cptPersonField[collection]) {
      const { docs } = await payload.find({ collection: 'people', locale, depth: 0, limit: 100, sort: 'title', where: published })
      ui_filters.push({ kind: 'person', options: docs.map((d) => ({ value: d.slug, label: d.title })), selected: state.person })
    } else if (filter.type === 'date') {
      ui_filters.push({ kind: 'date', when: state.when, from: state.from, to: state.to })
    } else if (filter.type === 'search') {
      ui_filters.push({ kind: 'search', q: state.q })
    } else if (filter.type === 'az') {
      const { docs } = await payload.find({
        collection,
        locale,
        draft: false,
        depth: 0,
        pagination: false,
        select: { letter: true },
        where: buildListingWhere({ ...queryInput, state: { ...state, letter: undefined } }),
      })
      const present = new Set(docs.map((d) => (d as { letter?: string | null }).letter).filter((l): l is string => Boolean(l)))
      ui_filters.push({
        kind: 'az',
        letters: alphabetFor(locale, present).map((letter) => ({ letter, enabled: present.has(letter) })),
        selected: state.letter,
      })
    } else if (filter.type === 'sort') {
      ui_filters.push({ kind: 'sort', selected: sort, options: [...sortKeys] })
    }
  }

  const hrefFor = (page: number) => listingHref(ctx.pathname, ctx.searchParams, prefix, { ...state, page })
  const clearHref = listingHref(ctx.pathname, ctx.searchParams, prefix, { terms: {}, page: 1 })
  const hasFilters = JSON.stringify({ ...state, page: 1 }) !== JSON.stringify({ terms: {}, page: 1 })
  const layout = block.layout ?? 'grid3'
  const cardStyle = (block.cardStyle ?? 'standard') as CardStyle
  const { results: _results, ...stringsForClient } = strings

  return (
    <Section style={block.style} id={block.id} className="listing">
      <SectionHeader heading={ctx.preset?.collection === collection ? `${block.heading ?? ''} · ${ctx.preset.title}`.replace(/^ · /, '') : block.heading} intro={block.intro} />
      {ui_filters.length > 0 && (
        <ListingFilters
          key={JSON.stringify(state)}
          prefix={prefix}
          filters={ui_filters}
          strings={stringsForClient}
          listingId={listingId}
        />
      )}
      <div className="listing__meta cluster">
        <p className="muted small" role="status">
          {strings.results(result.totalDocs)}
        </p>
        {hasFilters && (
          <Link className="btn btn--link btn--sm" href={clearHref} scroll={false}>
            {strings.clear}
          </Link>
        )}
      </div>
      {result.docs.length ? (
        <div
          id={listingId}
          className={layout === 'slider' ? 'slider' : layout === 'list' ? 'stack listing__list' : 'grid'}
          style={layout.startsWith('grid') ? { ['--cols' as string]: Number(layout.slice(4)) } : undefined}
        >
          {result.docs.map((doc) => (
            <ListingCard key={doc.id} doc={doc as CptDoc} collection={collection} style={cardStyle} ctx={ctx} />
          ))}
        </div>
      ) : (
        <p id={listingId} className="listing__empty">
          {strings.noResults}
        </p>
      )}
      {paging === 'numbers' && (
        <Pagination page={result.page ?? 1} totalPages={result.totalPages} hrefFor={hrefFor} strings={strings} />
      )}
      {paging === 'loadMore' && result.hasNextPage && (
        <div className="listing__more">
          <Link className="btn btn--outline" href={hrefFor(state.page + 1)} scroll={false}>
            {strings.loadMore}
          </Link>
        </div>
      )}
    </Section>
  )
}
