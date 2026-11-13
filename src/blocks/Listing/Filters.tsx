'use client'

import { useRouter } from 'next/navigation'
import { useTransition, type FormEvent } from 'react'

import type { UiStrings } from '@/i18n/ui'

import type { SortKey } from './state'

type Option = { value: string; label: string }

export type FilterUI =
  | { kind: 'taxonomy'; key: string; label: string; display: 'tabs' | 'select' | 'checkboxes'; options: Option[]; selected: string[] }
  | { kind: 'person'; options: Option[]; selected?: string }
  | { kind: 'date'; when?: string; from?: string; to?: string }
  | { kind: 'search'; q?: string }
  | { kind: 'az'; letters: { letter: string; enabled: boolean }[]; selected?: string }
  | { kind: 'sort'; selected: SortKey; options: SortKey[] }

type Props = { prefix: string; filters: FilterUI[]; strings: Omit<UiStrings, 'results'>; listingId: string }

// A plain GET form (works without JavaScript); with JS, changes update the URL in place
export function ListingFilters({ prefix, filters, strings, listingId }: Props) {
  const router = useRouter()
  const [pending, startTransition] = useTransition()

  const apply = (form: HTMLFormElement) => {
    const params = new URLSearchParams(window.location.search)
    // Drop this listing's params (and its page), keep other listings' params
    for (const key of [...params.keys()]) {
      if (prefix ? key.startsWith(prefix) : !/^l\d+_/.test(key)) params.delete(key)
    }
    for (const [key, value] of new FormData(form)) {
      if (typeof value === 'string' && value.trim()) params.append(key, value.trim())
    }
    const qs = params.toString()
    startTransition(() => router.push(`${window.location.pathname}${qs ? `?${qs}` : ''}`, { scroll: false }))
  }

  const onChange = (event: FormEvent<HTMLFormElement>) => {
    // Typing in the search box waits for submit
    if ((event.target as HTMLInputElement).type === 'search') return
    apply(event.currentTarget)
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    apply(event.currentTarget)
  }

  const name = (key: string) => `${prefix}${key}`

  return (
    <form className="filters" method="get" onChange={onChange} onSubmit={onSubmit} aria-controls={listingId} aria-busy={pending}>
      {filters.map((filter, i) => {
        switch (filter.kind) {
          case 'taxonomy':
            if (filter.display === 'select') {
              return (
                <label key={i} className="filters__field">
                  <span className="filters__label">{filter.label}</span>
                  <select name={name(filter.key)} defaultValue={filter.selected[0] ?? ''}>
                    <option value="">{strings.all}</option>
                    {filter.options.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </label>
              )
            }
            return (
              <fieldset key={i} className={`filters__group filters__group--${filter.display}`}>
                <legend className="filters__label">{filter.label}</legend>
                {filter.display === 'tabs' && (
                  <label className="pill">
                    <input type="radio" name={name(filter.key)} value="" defaultChecked={!filter.selected.length} />
                    <span>{strings.all}</span>
                  </label>
                )}
                {filter.options.map((o) => (
                  <label key={o.value} className={filter.display === 'tabs' ? 'pill' : 'check'}>
                    <input
                      type={filter.display === 'tabs' ? 'radio' : 'checkbox'}
                      name={name(filter.key)}
                      value={o.value}
                      defaultChecked={filter.selected.includes(o.value)}
                    />
                    <span>{o.label}</span>
                  </label>
                ))}
              </fieldset>
            )
          case 'person':
            return (
              <label key={i} className="filters__field">
                <span className="filters__label">{strings.person}</span>
                <select name={name('person')} defaultValue={filter.selected ?? ''}>
                  <option value="">{strings.all}</option>
                  {filter.options.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </label>
            )
          case 'date':
            return (
              <fieldset key={i} className="filters__group filters__group--tabs">
                {(['', 'upcoming', 'past'] as const).map((value) => (
                  <label key={value} className="pill">
                    <input type="radio" name={name('when')} value={value} defaultChecked={(filter.when ?? '') === value} />
                    <span>{value === '' ? strings.all : strings[value]}</span>
                  </label>
                ))}
                <label className="filters__field filters__field--inline">
                  <span className="filters__label">{strings.from}</span>
                  <input type="date" name={name('from')} defaultValue={filter.from} />
                </label>
                <label className="filters__field filters__field--inline">
                  <span className="filters__label">{strings.to}</span>
                  <input type="date" name={name('to')} defaultValue={filter.to} />
                </label>
              </fieldset>
            )
          case 'search':
            return (
              <div key={i} className="filters__search" role="search">
                <label className="sr-only" htmlFor={`${listingId}-q`}>
                  {strings.search}
                </label>
                <input id={`${listingId}-q`} type="search" name={name('q')} defaultValue={filter.q} placeholder={strings.searchPlaceholder} />
                <button type="submit" className="btn btn--secondary btn--sm">
                  {strings.search}
                </button>
              </div>
            )
          case 'az':
            return (
              <fieldset key={i} className="filters__group az">
                <legend className="sr-only">{strings.letter}</legend>
                <label className="az__letter">
                  <input type="radio" name={name('letter')} value="" defaultChecked={!filter.selected} />
                  <span>{strings.all}</span>
                </label>
                {filter.letters.map(({ letter, enabled }) => (
                  <label key={letter} className="az__letter" aria-disabled={!enabled}>
                    <input
                      type="radio"
                      name={name('letter')}
                      value={letter}
                      disabled={!enabled}
                      defaultChecked={filter.selected === letter}
                    />
                    <span>{letter}</span>
                  </label>
                ))}
              </fieldset>
            )
          case 'sort':
            return (
              <label key={i} className="filters__field filters__field--end">
                <span className="filters__label">{strings.sort}</span>
                <select name={name('sort')} defaultValue={filter.selected}>
                  {filter.options.map((key) => (
                    <option key={key} value={key}>
                      {strings.sortLabels[key]}
                    </option>
                  ))}
                </select>
              </label>
            )
        }
      })}
      <noscript>
        <button type="submit" className="btn btn--primary btn--sm">
          {strings.apply}
        </button>
      </noscript>
    </form>
  )
}
