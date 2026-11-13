export type Crumb = { label: string; href: string }

export function Breadcrumbs({ crumbs, label }: { crumbs: Crumb[]; label: string }) {
  if (crumbs.length < 2) return null
  return (
    <nav aria-label={label} className="breadcrumbs container">
      <ol>
        {crumbs.map((crumb, i) => (
          <li key={crumb.href}>
            {i === crumbs.length - 1 ? <span aria-current="page">{crumb.label}</span> : <a href={crumb.href}>{crumb.label}</a>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
