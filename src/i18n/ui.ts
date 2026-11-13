import type { Locale } from './config'

// Front-end interface strings (content comes from the CMS; these are the few fixed labels)
const strings = {
  en: {
    all: 'All',
    search: 'Search',
    searchPlaceholder: 'Search…',
    apply: 'Apply filters',
    clear: 'Clear filters',
    results: (n: number) => (n === 1 ? '1 result' : `${n} results`),
    noResults: 'Nothing matches these filters.',
    loadMore: 'Load more',
    previous: 'Previous',
    next: 'Next',
    upcoming: 'Upcoming',
    past: 'Past',
    from: 'From',
    to: 'To',
    sort: 'Sort',
    letter: 'Letter',
    person: 'Person',
    pagination: 'Pagination',
    readMore: 'Read more',
    slide: 'Slide',
    sortLabels: { newest: 'Newest', oldest: 'Oldest', az: 'A–Z', za: 'Z–A', updated: 'Recently updated' },
  },
  he: {
    all: 'הכל',
    search: 'חיפוש',
    searchPlaceholder: 'חיפוש…',
    apply: 'סינון',
    clear: 'ניקוי סינון',
    results: (n: number) => (n === 1 ? 'תוצאה אחת' : `${n} תוצאות`),
    noResults: 'אין תוצאות לסינון הזה.',
    loadMore: 'טען עוד',
    previous: 'הקודם',
    next: 'הבא',
    upcoming: 'קרובים',
    past: 'עברו',
    from: 'מתאריך',
    to: 'עד תאריך',
    sort: 'מיון',
    letter: 'אות',
    person: 'אדם',
    pagination: 'עימוד',
    readMore: 'קרא עוד',
    slide: 'שקופית',
    sortLabels: { newest: 'החדש ביותר', oldest: 'הישן ביותר', az: 'א–ת', za: 'ת–א', updated: 'עודכן לאחרונה' },
  },
} satisfies Record<Locale, unknown>

export type UiStrings = (typeof strings)['en']

export const ui = (locale: Locale): UiStrings => strings[locale]
