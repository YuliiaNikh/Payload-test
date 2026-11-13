import { visibilityConditions } from './registry'
import type { ConditionRow, VisibilityContext } from './types'

export type VisibilityValue = { match?: 'all' | 'any' | null; rules?: ConditionRow[] | null } | null | undefined

// Server decision + CSS classes for one block
export async function evaluateVisibility(
  visibility: VisibilityValue,
  ctx: VisibilityContext,
): Promise<{ visible: boolean; classes: string[] }> {
  const rows = visibility?.rules ?? []
  const classes: string[] = []
  const results: boolean[] = []

  for (const row of rows) {
    const condition = visibilityConditions.find((c) => c.slug === row.type)
    if (!condition) continue
    if (condition.classes) classes.push(...condition.classes(row))
    if (condition.evaluate) results.push(await condition.evaluate(row, ctx))
  }

  if (!results.length) return { visible: true, classes }
  const visible = visibility?.match === 'any' ? results.some(Boolean) : results.every(Boolean)
  return { visible, classes }
}
