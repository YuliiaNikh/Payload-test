import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { isLocale } from '@/i18n/config'
import { localizePath } from '@/i18n/paths'
import { ui } from '@/i18n/ui'

export const metadata: Metadata = { title: 'UI kit' }

const colors = [
  ['Brand 50', '--brand-50'],
  ['Brand 100', '--brand-100'],
  ['Brand 500', '--brand-500'],
  ['Brand 600', '--brand-600'],
  ['Brand 700', '--brand-700'],
  ['Neutral 0', '--neutral-0'],
  ['Neutral 50', '--neutral-50'],
  ['Neutral 100', '--neutral-100'],
  ['Neutral 200', '--neutral-200'],
  ['Neutral 300', '--neutral-300'],
  ['Neutral 500', '--neutral-500'],
  ['Neutral 700', '--neutral-700'],
  ['Neutral 900', '--neutral-900'],
  ['Success', '--success'],
  ['Warning', '--warning'],
  ['Danger', '--danger'],
]

const typeScale = [
  ['display', '--text-display'],
  ['3xl / h1', '--text-3xl'],
  ['2xl / h2', '--text-2xl'],
  ['xl / h3', '--text-xl'],
  ['lg / h4, lead', '--text-lg'],
  ['md / body', '--text-md'],
  ['sm', '--text-sm'],
  ['xs', '--text-xs'],
]

const spacing = ['1', '2', '3', '4', '6', '8', '12', '16']

const buttons = ['primary', 'secondary', 'outline', 'ghost', 'link']

type Props = { params: Promise<{ locale: string }> }

export default async function UiKitPage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const sample = { en: 'The quick brown fox', he: 'שועל חום זריז קופץ', fr: 'Le vif renard brun' }[locale]

  return (
    <>
      <header className="site-bar">
        <div className="container">
          <a className="site-name" href={localizePath(locale, '/')}>
            UI kit
          </a>
          <LanguageSwitcher current={locale} hrefs={{ en: '/ui-kit', he: '/he/ui-kit', fr: '/fr/ui-kit' }} label={ui(locale).language} />
        </div>
      </header>

      <main>
        <section className="section section--spacing-sm">
          <div className="container stack">
            <p className="eyebrow">Test design system</p>
            <h1 className="display">UI kit</h1>
            <p className="lead prose">
              Tokens and components every block uses. Plain CSS with logical properties, so it mirrors
              automatically in Hebrew. Resize the window to see the fluid type.
            </p>
          </div>
        </section>

        <section className="section section--spacing-sm section--bg-surface">
          <div className="container">
            <h2>Palette</h2>
            <div className="grid" style={{ ['--cols' as string]: 4 }}>
              {colors.map(([name, token]) => (
                <div key={token} className="card card--outline">
                  <div
                    style={{ blockSize: 56, borderRadius: 'var(--radius-md)', background: `var(${token})`, border: '1px solid var(--color-border)' }}
                  />
                  <strong className="small">{name}</strong>
                  <code className="small muted">{token}</code>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--spacing-sm">
          <div className="container stack">
            <h2>Typography</h2>
            <p className="muted small">Each step uses clamp(min, fluid, max) between phone and desktop widths.</p>
            {typeScale.map(([name, token]) => (
              <div key={token} className="cluster" style={{ alignItems: 'baseline' }}>
                <code className="small muted" style={{ minInlineSize: 140 }}>
                  {name}
                </code>
                <span style={{ fontSize: `var(${token})`, lineHeight: 1.2 }}>{sample}</span>
              </div>
            ))}
            <p className="eyebrow">Eyebrow label</p>
          </div>
        </section>

        <section className="section section--spacing-sm section--bg-surface">
          <div className="container stack">
            <h2>Spacing</h2>
            {spacing.map((step) => (
              <div key={step} className="cluster">
                <code className="small muted" style={{ minInlineSize: 140 }}>
                  --space-{step}
                </code>
                <span style={{ inlineSize: `var(--space-${step})`, blockSize: 16, background: 'var(--color-accent)' }} />
              </div>
            ))}
            <p className="small muted">
              Sections use fluid spacing: --section-sm, --section-md, --section-lg.
            </p>
          </div>
        </section>

        <section className="section section--spacing-sm">
          <div className="container stack">
            <h2>Buttons</h2>
            {['btn--sm', '', 'btn--lg'].map((size) => (
              <div key={size || 'md'} className="btn-group">
                {buttons.map((variant) => (
                  <a key={variant} href="#" className={`btn btn--${variant} ${size}`}>
                    {variant}
                  </a>
                ))}
              </div>
            ))}
            <div className="cluster">
              <span className="badge">Badge</span>
              <span className="chip">Chip</span>
            </div>
          </div>
        </section>

        <section className="section section--spacing-sm section--bg-surface">
          <div className="container stack">
            <h2>Cards</h2>
            <div className="grid" style={{ ['--cols' as string]: 3 }}>
              {['card', 'card card--outline', 'card card--elevated'].map((cls) => (
                <a key={cls} href="#" className={cls}>
                  <span className="badge">{cls.replace('card ', '') || 'card'}</span>
                  <h3 className="card__title">Card title</h3>
                  <p className="card__text">Short supporting text that wraps onto a second line.</p>
                  <span className="card__footer btn btn--link">Read more</span>
                </a>
              ))}
            </div>
            <div className="card card--outline card--horizontal">
              <div className="card__media">
                <div style={{ aspectRatio: '4 / 3', background: 'var(--color-surface-2)', borderRadius: 'var(--radius-md)' }} />
              </div>
              <div className="stack">
                <h3 className="card__title">Horizontal card</h3>
                <p className="card__text">Media on the start side; flips to the right in Hebrew.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--spacing-sm section--bg-dark">
          <div className="container stack">
            <h2>Dark section</h2>
            <p className="lead">Blocks can switch background: default, surface, accent or dark.</p>
            <div className="btn-group">
              <a href="#" className="btn btn--primary">
                Primary
              </a>
              <a href="#" className="btn btn--outline" style={{ color: 'inherit' }}>
                Outline
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
