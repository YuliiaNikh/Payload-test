export type SearchParams = Record<string, string | string[] | undefined>

export const sortKeys = ['newest', 'oldest', 'az', 'za', 'updated'] as const
export type SortKey = (typeof sortKeys)[number]

export type ListingState = {
  terms: Record<string, string[]>
  person?: string
  when?: 'upcoming' | 'past'
  from?: string
  to?: string
  q?: string
  letter?: string
  sort?: SortKey
  page: number
}

const list = (value: string | string[] | undefined): string[] =>
  (Array.isArray(value) ? value : value ? [value] : []).map((v) => v.trim()).filter(Boolean)

const one = (value: string | string[] | undefined): string | undefined => list(value)[0]

const isDate = (value: string | undefined) => (value && /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : undefined)

// Filter state from the URL; a prefix keeps several listings on one page apart
export function readListingState(params: SearchParams, prefix: string, termKeys: string[]): ListingState {
  const get = (key: string) => params[`${prefix}${key}`]
  const terms: Record<string, string[]> = {}
  for (const key of termKeys) {
    const values = list(get(key))
    if (values.length) terms[key] = values
  }

  const state: ListingState = { terms, page: Math.max(1, Number.parseInt(one(get('page')) ?? '1', 10) || 1) }
  const person = one(get('person'))
  if (person) state.person = person
  const when = one(get('when'))
  if (when === 'upcoming' || when === 'past') state.when = when
  const from = isDate(one(get('from')))
  if (from) state.from = from
  const to = isDate(one(get('to')))
  if (to) state.to = to
  const q = one(get('q'))
  if (q) state.q = q
  const letter = one(get('letter'))
  if (letter) state.letter = letter
  const sort = one(get('sort'))
  if (sort && (sortKeys as readonly string[]).includes(sort)) state.sort = sort as SortKey
  return state
}

// URL for a state change (pagination, clear filters, load more), keeping other listings' params
export function listingHref(pathname: string, current: SearchParams, prefix: string, state: Partial<ListingState>): string {
  const params = new URLSearchParams()
  for (const [key, value] of Object.entries(current)) {
    if (key.startsWith(prefix) && (prefix || !/^l\d+_/.test(key))) continue
    for (const v of list(value)) params.append(key, v)
  }
  for (const [key, values] of Object.entries(state.terms ?? {})) {
    for (const v of values) params.append(`${prefix}${key}`, v)
  }
  for (const key of ['person', 'when', 'from', 'to', 'q', 'letter', 'sort'] as const) {
    const value = state[key]
    if (value) params.set(`${prefix}${key}`, value)
  }
  if (state.page && state.page > 1) params.set(`${prefix}page`, String(state.page))
  const qs = params.toString()
  return qs ? `${pathname}?${qs}` : pathname
}
