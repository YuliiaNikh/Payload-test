import type { BlockSlug, FlattenedField, Payload } from 'payload'

type Data = Record<string, unknown>
export type Translate = (text: string) => string

// Text fields that hold codes or addresses, never copy
const KEEP = new Set(['slug', 'url', 'formId', 'anchor', 'portalId', 'region', 'email', 'phone', 'embed', 'code', 'icon'])
// Written by Payload or a plugin, not by the seed
const SYSTEM = new Set(['id', 'createdAt', 'updatedAt', '_status', 'breadcrumbs', 'demoSeed'])

const hasLetters = (text: string) => /\p{L}/u.test(text)

function lexical(node: unknown, t: Translate): unknown {
  if (Array.isArray(node)) return node.map((child) => lexical(child, t))
  if (!node || typeof node !== 'object') return node
  const out: Data = {}
  for (const [key, value] of Object.entries(node)) {
    out[key] = key === 'text' && typeof value === 'string' && hasLetters(value) ? t(value) : lexical(value, t)
  }
  return out
}

// A document's data for another language: the same structure with its words passed through `t`.
// Rows of localized arrays and blocks lose their ids (each language has its own rows); rows of
// shared arrays keep them so the other languages' values stay attached.
export function localizeCopy(payload: Payload, fields: FlattenedField[], data: Data, t: Translate, inLocalized = false, top = true): Data {
  const out: Data = {}
  for (const field of fields) {
    const value = data[field.name]
    if (value === undefined || value === null) continue
    if (top && SYSTEM.has(field.name)) continue
    const localized = inLocalized || Boolean('localized' in field && field.localized)
    if (localized && field.name === 'id') continue

    switch (field.type) {
      case 'text':
      case 'textarea': {
        const swap = (v: unknown) => (localized && typeof v === 'string' && !KEEP.has(field.name) && hasLetters(v) ? t(v) : v)
        out[field.name] = Array.isArray(value) ? value.map(swap) : swap(value)
        break
      }
      case 'richText':
        out[field.name] = localized ? lexical(value, t) : value
        break
      case 'group':
      case 'tab':
        out[field.name] = localizeCopy(payload, field.flattenedFields, value as Data, t, localized, false)
        break
      case 'array':
        out[field.name] = (value as Data[]).map((row) => localizeCopy(payload, field.flattenedFields, row, t, localized, false))
        break
      case 'blocks':
        out[field.name] = (value as Data[]).map((row) => {
          const slug = row.blockType as string
          const block = field.blocks.find((b) => b.slug === slug) ?? payload.blocks[slug as BlockSlug]
          if (!block) return row
          return {
            ...localizeCopy(payload, block.flattenedFields, row, t, localized, false),
            blockType: slug,
            ...(row.blockName ? { blockName: row.blockName } : {}),
          }
        })
        break
      case 'join':
        break
      default:
        out[field.name] = value
    }
  }
  return out
}
