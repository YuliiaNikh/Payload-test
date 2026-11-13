import type { Field } from 'payload'

import type { BlockContext } from '@/blocks/context'

export type ConditionRow = Record<string, unknown> & { type: string }

export type VisibilityContext = BlockContext & { now: Date }

// One visibility rule. Add a file in ./conditions and list it in ./registry.ts to make it available in every block.
export type VisibilityCondition = {
  slug: string
  label: string
  // Field names must start with `${slug}_` so rows of different types never clash
  fields: Field[]
  // Server-side decision; omit for CSS-only conditions
  evaluate?: (row: ConditionRow, ctx: VisibilityContext) => boolean | Promise<boolean>
  // CSS classes to add instead (e.g. device), so cached HTML stays correct on every screen
  classes?: (row: ConditionRow) => string[]
}
