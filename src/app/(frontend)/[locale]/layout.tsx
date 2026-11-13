import type { ReactNode } from 'react'

import { defaultLocale, isLocale, localeDir } from '@/i18n/config'

import '../styles/tokens.css'
import '../styles/base.css'

type Props = {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: raw } = await params
  // proxy.ts only lets valid locales through; fall back defensively instead of throwing in the root layout
  const locale = isLocale(raw) ? raw : defaultLocale

  return (
    <html lang={locale} dir={localeDir(locale)}>
      <body>{children}</body>
    </html>
  )
}
