export const locales = ['en', 'he'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  he: 'עברית',
}

export const isLocale = (value: unknown): value is Locale =>
  typeof value === 'string' && (locales as readonly string[]).includes(value)

export const localeDir = (locale: Locale): 'ltr' | 'rtl' => (locale === 'he' ? 'rtl' : 'ltr')
