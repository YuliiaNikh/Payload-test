import type { Locale } from '@/i18n/config'

// Hebrew final forms sort and filter under their base letter
const hebrewFinals: Record<string, string> = { ך: 'כ', ם: 'מ', ן: 'נ', ף: 'פ', ץ: 'צ' }

export const alphabets: Record<Locale, string[]> = {
  en: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
  he: 'אבגדהוזחטיכלמנסעפצקרשת'.split(''),
  // Accents are stripped by firstLetter, so French shares the Latin alphabet
  fr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
}

// First letter of a title for the A–Z filter; "#" for digits and symbols
export function firstLetter(title: string | null | undefined): string | null {
  const char = title?.trim().normalize('NFKD').replace(/\p{M}/gu, '').charAt(0)
  if (!char) return null
  const letter = hebrewFinals[char] ?? char.toUpperCase()
  return /\p{L}/u.test(letter) ? letter : '#'
}

// The language's alphabet, plus any other letters that actually occur (e.g. English titles on Hebrew pages)
export function alphabetFor(locale: Locale, present: Iterable<string>): string[] {
  const base = alphabets[locale]
  const extra = [...new Set(present)].filter((letter) => !base.includes(letter)).sort()
  return [...base, ...extra]
}
