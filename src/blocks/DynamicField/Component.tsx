import type { DynamicFieldBlock as DynamicFieldData } from '@/payload-types'

import type { BlockContext } from '../context'
import { Section } from '../Section'

const formatDate = (value: string, locale: string) =>
  new Intl.DateTimeFormat(locale === 'he' ? 'he-IL' : 'en-GB', { dateStyle: 'long', timeStyle: 'short' }).format(new Date(value))

export function DynamicFieldBlock({ block, ctx }: { block: DynamicFieldData; ctx: BlockContext }) {
  const raw = ctx.item ? (ctx.item.doc as unknown as Record<string, unknown>)[block.field] : undefined
  if (typeof raw !== 'string' || !raw) return null
  const value = block.format === 'date' ? formatDate(raw, ctx.locale) : raw

  return (
    <Section style={block.style} id={block.id}>
      {block.format === 'heading' ? (
        <h2>
          {block.label && <span className="muted">{block.label} </span>}
          {value}
        </h2>
      ) : (
        <p className="lead">
          {block.label && <strong>{block.label} </strong>}
          {value}
        </p>
      )}
    </Section>
  )
}
