import { localeLabels, locales, type Locale } from '@/i18n/config'

type Props = {
  current: Locale
  hrefs: Record<Locale, string>
}

export function LanguageSwitcher({ current, hrefs }: Props) {
  return (
    <nav aria-label="Language" className="lang-switcher">
      <ul>
        {locales.map((locale) => (
          <li key={locale}>
            {locale === current ? (
              <span aria-current="true">{localeLabels[locale]}</span>
            ) : (
              <a href={hrefs[locale]} hrefLang={locale} lang={locale}>
                {localeLabels[locale]}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
