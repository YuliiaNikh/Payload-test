import type { ReactNode } from 'react'

type Style = {
  background?: string | null
  spacing?: string | null
  align?: string | null
} | null

export function Section({ style, id, children, className = '' }: { style?: Style; id?: string | null; children: ReactNode; className?: string }) {
  const classes = [
    'section',
    `section--bg-${style?.background ?? 'default'}`,
    `section--spacing-${style?.spacing ?? 'md'}`,
    `section--align-${style?.align ?? 'start'}`,
    className,
  ]
  return (
    <section id={id ? `block-${id}` : undefined} className={classes.join(' ').trim()}>
      <div className="container">{children}</div>
    </section>
  )
}

export function SectionHeader({ heading, intro, eyebrow }: { heading?: string | null; intro?: string | null; eyebrow?: string | null }) {
  if (!heading && !intro && !eyebrow) return null
  return (
    <header className="section__header">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {heading && <h2>{heading}</h2>}
      {intro && <p className="lead">{intro}</p>}
    </header>
  )
}
