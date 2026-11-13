import type { CptSlug } from '@/content/types'
import type { Locale } from '@/i18n/config'
import type { CptDoc } from '@/lib/queries/content'
import type { CptBases } from '@/lib/routing/cptPaths'

// What every block may need to render: language, URL bases, home page, and the current CPT item (if any)
export type BlockContext = {
  locale: Locale
  bases: CptBases
  homeId: number | null
  item?: { collection: CptSlug; doc: CptDoc }
}
