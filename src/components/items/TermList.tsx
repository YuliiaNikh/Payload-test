type Term = { id: number; title?: string | null } | number | null | undefined

export function TermList({ label, terms }: { label: string; terms: Term[] | Term }) {
  const list = (Array.isArray(terms) ? terms : [terms]).filter(
    (term): term is { id: number; title?: string | null } => typeof term === 'object' && term !== null,
  )
  if (!list.length) return null

  return (
    <div className="term-list">
      <span className="term-list__label">{label}</span>
      <ul>
        {list.map((term) => (
          <li key={term.id} className="chip">
            {term.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
