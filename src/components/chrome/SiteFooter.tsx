import { localizePath } from '@/i18n/paths'
import { linkHref, type LinkContext } from '@/lib/links'
import type { Footer } from '@/payload-types'

export function SiteFooter({ footer, siteName, ctx }: { footer: Footer | 'fallback'; siteName: string; ctx: LinkContext }) {
  const year = new Date().getFullYear()
  if (footer === 'fallback') {
    return (
      <footer className="site-footer">
        <div className="container site-footer__legal">
          © {year} {siteName}
        </div>
      </footer>
    )
  }

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="stack site-footer__about">
          <a className="site-header__brand" href={localizePath(ctx.locale, '/')}>
            {siteName}
          </a>
          {footer.text && <p className="muted small">{footer.text}</p>}
          {footer.social?.length ? (
            <ul className="cluster site-footer__social">
              {footer.social.map((item, i) => (
                <li key={item.id ?? i}>
                  <a href={item.url} className="chip" target="_blank" rel="noopener noreferrer">
                    {item.platform}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        {footer.columns?.map((column, i) => (
          <nav key={column.id ?? i} className="site-footer__column" aria-label={column.heading ?? undefined}>
            {column.heading && <p className="mega__heading">{column.heading}</p>}
            <ul>
              {column.links?.map((entry, j) => {
                const href = linkHref(entry.link, ctx)
                return href && entry.link?.label ? (
                  <li key={entry.id ?? j}>
                    <a href={href}>{entry.link.label}</a>
                  </li>
                ) : null
              })}
            </ul>
          </nav>
        ))}
      </div>
      <div className="container site-footer__legal">{footer.legal || `© ${year} ${siteName}`}</div>
    </footer>
  )
}
