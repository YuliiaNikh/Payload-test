import type { BlockContext } from '@/blocks/context'
import { linkHref, type LinkValue } from '@/lib/links'

export function Button({ link, ctx, className }: { link: LinkValue | null | undefined; ctx: BlockContext; className?: string }) {
  const href = linkHref(link, ctx)
  if (!href || !link?.label) return null
  return (
    <a
      className={className ?? `btn btn--${link.appearance ?? 'primary'}`}
      href={href}
      {...(link.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {link.label}
    </a>
  )
}

export function Buttons({ links, ctx }: { links?: { link?: LinkValue | null; id?: string | null }[] | null; ctx: BlockContext }) {
  if (!links?.length) return null
  return (
    <div className="btn-group">
      {links.map((item, i) => (
        <Button key={item.id ?? i} link={item.link} ctx={ctx} />
      ))}
    </div>
  )
}
