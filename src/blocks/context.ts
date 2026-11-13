import type { CptSlug } from '@/content/types'
import type { Locale } from '@/i18n/config'
import type { CptDoc } from '@/lib/queries/content'
import type { CptBases } from '@/lib/routing/cptPaths'

import type { SearchParams } from './Listing/state'

// What every block may need to render: language, URL bases, home page, and the current CPT item (if any)
export type BlockContext = {
  locale: Locale
  bases: CptBases
  homeId: number | null
  item?: { collection: CptSlug; doc: CptDoc }
  // Visible URL path (with locale prefix) and query, for listing filters and pagination
  pathname: string
  searchParams: SearchParams
  // Set on term archives (/blog/category/news): listings of that CPT are limited to the term
  preset?: { collection: CptSlug; field: string; termId: number; title: string }
}
