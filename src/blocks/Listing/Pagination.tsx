import Link from 'next/link'

import type { UiStrings } from '@/i18n/ui'

type Props = {
  page: number
  totalPages: number
  hrefFor: (page: number) => string
  strings: UiStrings
}

// Numbered pages with a window around the current page
export function Pagination({ page, totalPages, hrefFor, strings }: Props) {
  if (totalPages <= 1) return null
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).filter(
    (n) => n === 1 || n === totalPages || Math.abs(n - page) <= 1,
  )

  return (
    <nav className="pagination" aria-label={strings.pagination}>
      {page > 1 && (
        <Link className="btn btn--outline btn--sm" href={hrefFor(page - 1)} scroll={false} rel="prev">
          {strings.previous}
        </Link>
      )}
      {pages.map((n, i) => (
        <span key={n} className="cluster" style={{ gap: 'var(--space-1)' }}>
          {i > 0 && n - pages[i - 1] > 1 && <span className="muted">…</span>}
          {n === page ? (
            <span className="btn btn--primary btn--sm" aria-current="page">
              {n}
            </span>
          ) : (
            <Link className="btn btn--ghost btn--sm" href={hrefFor(n)} scroll={false}>
              {n}
            </Link>
          )}
        </span>
      ))}
      {page < totalPages && (
        <Link className="btn btn--outline btn--sm" href={hrefFor(page + 1)} scroll={false} rel="next">
          {strings.next}
        </Link>
      )}
    </nav>
  )
}
