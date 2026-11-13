import { RichText } from '@payloadcms/richtext-lexical/react'

import { cptTaxonomies, type CptSlug } from '@/content/types'
import type { Locale } from '@/i18n/config'
import { localizePath } from '@/i18n/paths'
import { cptItemPath, termArchivePath, type CptBases } from '@/lib/routing/cptPaths'
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
        {/* Term chips link to term archives, e.g. /blog/category/news */}
        {cptTaxonomies[collection].map((tax) => (
          <TermList
            key={tax.field}
            label={tax.label}
            terms={(doc as unknown as Record<string, never>)[tax.field]}
            hrefFor={(slug) => localizePath(locale, termArchivePath(collection, tax.key, slug, bases))}
          />
        ))}
        {collection === 'events' && asPeople((doc as Event).speakers).length > 0 && (
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
        {collection === 'resources' && (doc as Resource).externalUrl && (
          <p>
            <a className="btn btn--primary" href={(doc as Resource).externalUrl!}>
              Open resource
            </a>
          </p>
        )}
        {collection === 'glossary' && <TermList label="Related terms" terms={(doc as Glossary).relatedTerms} hrefFor={(slug) => localizePath(locale, cptItemPath('glossary', slug, bases))} />}
      </footer>
    </article>
  )
}
