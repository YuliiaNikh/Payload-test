'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

// Mobile menu toggle + closing open dropdowns on outside click and Escape
export function HeaderShell({ className, menuLabel, children, actions }: { className: string; menuLabel: string; children: ReactNode; actions: ReactNode }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const closeAll = () => ref.current?.querySelectorAll('details[open]').forEach((d) => d.removeAttribute('open'))
    const onClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) closeAll()
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      const openDetails = ref.current?.querySelector<HTMLDetailsElement>('details[open]')
      closeAll()
      openDetails?.querySelector('summary')?.focus()
      setOpen(false)
    }
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <header ref={ref} className={className} data-open={open}>
      <div className="container site-header__bar">
        {children}
        <button
          type="button"
          className="site-header__toggle btn btn--outline btn--sm"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {menuLabel}
        </button>
        {actions}
      </div>
    </header>
  )
}
