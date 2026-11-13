import { Media } from '@/components/Media'
import { cptDateField, type CptSlug } from '@/content/types'
import { localizePath } from '@/i18n/paths'
import type { CptDoc } from '@/lib/queries/content'
import { cptItemPath } from '@/lib/routing/cptPaths'

import type { BlockContext } from '../context'

export type CardStyle = 'standard' | 'horizontal' | 'compact' | 'person' | 'event' | 'feature'

const dateFormat = (locale: string, value: string, options: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat(locale === 'he' ? 'he-IL' : 'en-GB', options).format(new Date(value))

export function ListingCard({ doc, collection, style, ctx }: { doc: CptDoc; collection: CptSlug; style: CardStyle; ctx: BlockContext }) {
  const href = localizePath(ctx.locale, cptItemPath(collection, doc.slug, ctx.bases))
  const record = doc as unknown as Record<string, unknown>
  const dateValue = record[cptDateField[collection]]
  const date =
    typeof dateValue === 'string' && collection !== 'glossary' && collection !== 'people'
      ? dateFormat(ctx.locale, dateValue, { dateStyle: 'medium' })
      : null
  const subtitle = (record.jobTitle ?? record.location) as string | undefined

  if (style === 'feature') {
    return (
      <a className="feature-card" href={href}>
        {doc.featuredImage && <Media media={doc.featuredImage} sizes="100vw" className="feature-card__image" />}
        <span className="feature-card__body">
          {date && <span className="feature-card__meta">{date}</span>}
          <span className="feature-card__title">{doc.title}</span>
          {doc.excerpt && <span className="feature-card__text">{doc.excerpt}</span>}
        </span>
      </a>
    )
  }

  if (style === 'person') {
    return (
      <a className="card card--outline person-card" href={href}>
        <div className="person-card__photo">
          {doc.featuredImage ? <Media media={doc.featuredImage} sizes="96px" /> : <span aria-hidden="true">{doc.title.charAt(0)}</span>}
        </div>
        <h3 className="card__title">{doc.title}</h3>
        {subtitle && <p className="card__text">{subtitle}</p>}
      </a>
    )
  }

  if (style === 'event' && typeof dateValue === 'string') {
    return (
      <a className="card card--outline event-card" href={href}>
        <div className="event-card__date" aria-hidden="true">
          <span className="event-card__day">{dateFormat(ctx.locale, dateValue, { day: 'numeric' })}</span>
          <span className="event-card__month">{dateFormat(ctx.locale, dateValue, { month: 'short' })}</span>
        </div>
        <div className="stack" style={{ gap: 'var(--space-1)' }}>
          <h3 className="card__title">{doc.title}</h3>
          <p className="card__text small">
            {dateFormat(ctx.locale, dateValue, { dateStyle: 'full', timeStyle: 'short' })}
            {subtitle ? ` · ${subtitle}` : ''}
          </p>
        </div>
      </a>
    )
  }

  if (style === 'compact') {
    return (
      <a className="compact-card" href={href}>
        <span className="compact-card__title">{doc.title}</span>
        {date && <span className="muted small">{date}</span>}
      </a>
    )
  }

  return (
    <a className={`card card--outline${style === 'horizontal' ? ' card--horizontal' : ''}`} href={href}>
      {doc.featuredImage && (
        <div className="card__media">
          <Media media={doc.featuredImage} sizes="(max-width: 600px) 100vw, 33vw" />
        </div>
      )}
      <div className="stack" style={{ gap: 'var(--space-2)' }}>
        {date && <span className="muted small">{date}</span>}
        <h3 className="card__title">{doc.title}</h3>
        {doc.excerpt && <p className="card__text">{doc.excerpt}</p>}
      </div>
    </a>
  )
}
