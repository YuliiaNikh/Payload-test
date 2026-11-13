import config from '@payload-config'
import { getPayload } from 'payload'

import { Button } from '@/components/Buttons'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { Media } from '@/components/Media'
import { cptDateField, type CptSlug } from '@/content/types'
import type { Locale } from '@/i18n/config'
import { localizePath } from '@/i18n/paths'
import { ui } from '@/i18n/ui'
import { linkHref, type LinkContext, type LinkValue } from '@/lib/links'
import { cptItemPath } from '@/lib/routing/cptPaths'
import type { Header } from '@/payload-types'

import { HeaderShell } from './HeaderShell'
import { MenuIcon } from './icons'

type MenuItem = NonNullable<Header['menu']>[number]
type Props = {
  header: Header | 'fallback'
  siteName: string
  alternates: Record<Locale, string>
  ctx: LinkContext
}

function NavLink({ link, label, ctx, className = 'nav__link' }: { link?: LinkValue | null; label?: string | null; ctx: LinkContext; className?: string }) {
  const href = linkHref(link, ctx)
  const text = label || link?.label
  if (!href || !text) return null
  return (
    <a className={className} href={href} {...(link?.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {text}
    </a>
  )
}

async function AutoColumn({ auto, ctx }: { auto: NonNullable<NonNullable<MenuItem['mega']>['auto']>; ctx: LinkContext }) {
  const collection = (auto.collection ?? 'posts') as CptSlug
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection,
    locale: ctx.locale,
    draft: false,
    depth: 0,
    limit: auto.count ?? 3,
    sort: `-${cptDateField[collection]}`,
    where: { _status: { equals: 'published' } },
  })
  if (!docs.length) return null
  return (
    <div className="mega__column mega__column--auto">
      {auto.heading && <p className="mega__heading">{auto.heading}</p>}
      <ul>
        {docs.map((doc) => (
          <li key={doc.id}>
            <a className="mega__link" href={localizePath(ctx.locale, cptItemPath(collection, doc.slug, ctx.bases))}>
              <span className="mega__label">{doc.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function MenuEntry({ item, ctx }: { item: MenuItem; ctx: LinkContext }) {
  if (item.type === 'link' || !item.type) {
    return (
      <li className="nav__item">
        <NavLink link={item.link} label={item.label} ctx={ctx} />
      </li>
    )
  }

  if (item.type === 'dropdown') {
    return (
      <li className="nav__item">
        <details name="site-nav" className="nav__disclosure">
          <summary className="nav__link">{item.label}</summary>
          <ul className="nav__panel nav__panel--dropdown">
            {item.links?.map((entry, i) => (
              <li key={entry.id ?? i}>
                <NavLink link={entry.link} ctx={ctx} className="dropdown__link" />
              </li>
            ))}
          </ul>
        </details>
      </li>
    )
  }

  const mega = item.mega
  const promoHref = linkHref(mega?.promo?.link, ctx)
  return (
    <li className="nav__item nav__item--mega">
      <details name="site-nav" className="nav__disclosure">
        <summary className="nav__link">{item.label}</summary>
        <div className="nav__panel nav__panel--mega">
          <div className="mega">
            {mega?.columns?.map((column, i) => (
              <div key={column.id ?? i} className="mega__column">
                {column.heading && <p className="mega__heading">{column.heading}</p>}
                <ul>
                  {column.links?.map((entry, j) => {
                    const href = linkHref(entry.link, ctx)
                    if (!href || !entry.link?.label) return null
                    return (
                      <li key={entry.id ?? j}>
                        <a className="mega__link" href={href}>
                          <MenuIcon name={entry.icon} />
                          <span>
                            <span className="mega__label">{entry.link.label}</span>
                            {entry.description && <span className="mega__description">{entry.description}</span>}
                          </span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
            {mega?.auto?.enabled && <AutoColumn auto={mega.auto} ctx={ctx} />}
            {mega?.promo?.enabled && (
              <a className="mega__promo card card--elevated" href={promoHref ?? '#'}>
                {mega.promo.image && <Media media={mega.promo.image} sizes="280px" />}
                {mega.promo.title && <span className="card__title">{mega.promo.title}</span>}
                {mega.promo.text && <span className="card__text">{mega.promo.text}</span>}
                {mega.promo.link?.label && <span className="btn btn--link">{mega.promo.link.label}</span>}
              </a>
            )}
          </div>
          {mega?.bottomLink?.label && (
            <div className="mega__bottom">
              <NavLink link={mega.bottomLink} ctx={ctx} className="btn btn--link" />
            </div>
          )}
        </div>
      </details>
    </li>
  )
}

export function SiteHeader({ header, siteName, alternates, ctx }: Props) {
  const home = localizePath(ctx.locale, '/')
  const t = ui(ctx.locale)

  if (header === 'fallback') {
    return (
      <header className="site-header">
        <div className="container site-header__bar">
          <a className="site-header__brand" href={home}>
            {siteName}
          </a>
          <div className="site-header__actions">
            <LanguageSwitcher current={ctx.locale} hrefs={alternates} label={t.language} />
          </div>
        </div>
      </header>
    )
  }

  const variant = header.variant ?? 'default'
  const actions = (
    <div className="site-header__actions">
      <Button link={header.cta} ctx={{ ...ctx, item: undefined, pathname: '', searchParams: {} }} className={`btn btn--${header.cta?.appearance ?? 'primary'} btn--sm`} />
      {header.showLanguageSwitcher !== false && <LanguageSwitcher current={ctx.locale} hrefs={alternates} label={t.language} />}
    </div>
  )

  return (
    <HeaderShell className={`site-header site-header--${variant}`} menuLabel={t.menu} actions={actions}>
      <a className="site-header__brand" href={home}>
        {header.logo ? <Media media={header.logo} sizes="160px" className="site-header__logo" /> : siteName}
      </a>
      {variant !== 'minimal' && header.menu?.length ? (
        <nav id="site-nav" className="nav" aria-label={t.mainNav}>
          <ul className="nav__list">
            {header.menu.map((item, i) => (
              <MenuEntry key={item.id ?? i} item={item} ctx={ctx} />
            ))}
          </ul>
        </nav>
      ) : null}
    </HeaderShell>
  )
}
