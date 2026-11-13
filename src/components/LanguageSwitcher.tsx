import { localeLabels, locales, type Locale } from '@/i18n/config'

type Props = {
  current: Locale
  hrefs: Record<Locale, string>
  label?: string
}

// Dropdown of languages; the header closes it on outside click and Escape
export function LanguageSwitcher({ current, hrefs, label = 'Language' }: Props) {
  return (
    <nav aria-label={label} className="lang-switcher">
      <details className="lang-switcher__disclosure">
        <summary className="lang-switcher__toggle" lang={current}>
          <svg className="lang-switcher__icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          {localeLabels[current]}
        </summary>
        <ul className="lang-switcher__menu">
          {locales.map((locale) => (
            <li key={locale}>
              {locale === current ? (
                <span className="lang-switcher__option" aria-current="true" lang={locale}>
                  {localeLabels[locale]}
                </span>
              ) : (
                <a className="lang-switcher__option" href={hrefs[locale]} hrefLang={locale} lang={locale}>
                  {localeLabels[locale]}
                </a>
              )}
            </li>
          ))}
        </ul>
      </details>
    </nav>
  )
}
