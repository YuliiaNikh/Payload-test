export const locales = ['en', 'he', 'fr'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  he: 'עברית',
  fr: 'Français',
}

// BCP 47 tags for Intl formatting and Open Graph
export const localeTags: Record<Locale, string> = {
  en: 'en-GB',
  he: 'he-IL',
  fr: 'fr-FR',
}

export const isLocale = (value: unknown): value is Locale =>
  typeof value === 'string' && (locales as readonly string[]).includes(value)

export const localeDir = (locale: Locale): 'ltr' | 'rtl' => (locale === 'he' ? 'rtl' : 'ltr')
