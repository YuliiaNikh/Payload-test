type Term = { id: number; title?: string | null; slug?: string | null } | number | null | undefined

type Props = {
  label: string
  terms: Term[] | Term
  hrefFor?: (slug: string) => string
}

export function TermList({ label, terms, hrefFor }: Props) {
  const list = (Array.isArray(terms) ? terms : [terms]).filter(
    (term): term is { id: number; title?: string | null; slug?: string | null } => typeof term === 'object' && term !== null,
  )
  if (!list.length) return null

  return (
    <div className="term-list">
      <span className="term-list__label">{label}</span>
      <ul>
        {list.map((term) => (
          <li key={term.id}>
            {hrefFor && term.slug ? (
              <a className="chip" href={hrefFor(term.slug)}>
                {term.title}
              </a>
            ) : (
              <span className="chip">{term.title}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
