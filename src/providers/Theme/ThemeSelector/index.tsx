'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import React, { useSyncExternalStore } from 'react'

import type { Theme } from './types'

import { useTheme } from '..'
import { themeLocalStorageKey } from './types'

// localStorage doesn't notify the tab that wrote to it, so changes made here dispatch this event
const preferenceChangeEvent = 'theme-preference-change'

const subscribe = (onChange: () => void) => {
  window.addEventListener('storage', onChange)
  window.addEventListener(preferenceChangeEvent, onChange)
  return () => {
    window.removeEventListener('storage', onChange)
    window.removeEventListener(preferenceChangeEvent, onChange)
  }
}

const getPreference = () => window.localStorage.getItem(themeLocalStorageKey) ?? 'auto'

// Empty on the server and during hydration, so the first client render matches the HTML
const getServerPreference = () => ''

export const ThemeSelector: React.FC = () => {
  const { setTheme } = useTheme()
  const value = useSyncExternalStore(subscribe, getPreference, getServerPreference)

  const onThemeChange = (themeToSet: Theme & 'auto') => {
    setTheme(themeToSet === 'auto' ? null : themeToSet)
    window.dispatchEvent(new Event(preferenceChangeEvent))
  }

  return (
    <Select onValueChange={onThemeChange} value={value}>
      <SelectTrigger
        aria-label="Select a theme"
        className="w-auto bg-transparent gap-2 pl-0 md:pl-3 border-none"
      >
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="auto">Auto</SelectItem>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
      </SelectContent>
    </Select>
  )
}
