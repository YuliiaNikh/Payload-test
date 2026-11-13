import { RichText } from '@payloadcms/richtext-lexical/react'

import type { CptSlug } from '@/content/types'
import type { Locale } from '@/i18n/config'
import { localizePath } from '@/i18n/paths'
import { cptItemPath, type CptBases } from '@/lib/routing/cptPaths'
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
        {collection === 'posts' && (
          <>
            <TermList label="Categories" terms={(doc as Post).categories} />
            <TermList label="Tags" terms={(doc as Post).tags} />
          </>
        )}
        {collection === 'events' && (
          <>
            <TermList label="Type" terms={(doc as Event).eventTypes} />
            {asPeople((doc as Event).speakers).length > 0 && (
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
          </>
        )}
        {collection === 'resources' && (
          <>
            <TermList label="Type" terms={(doc as Resource).resourceType} />
            <TermList label="Industries" terms={(doc as Resource).industries} />
            <TermList label="Topics" terms={(doc as Resource).topics} />
            {(doc as Resource).externalUrl && (
              <p>
                <a href={(doc as Resource).externalUrl!}>Open resource</a>
              </p>
            )}
          </>
        )}
        {collection === 'people' && <TermList label="Department" terms={(doc as Person).department} />}
        {collection === 'glossary' && <TermList label="Related terms" terms={(doc as Glossary).relatedTerms} />}
      </footer>
    </article>
  )
}
