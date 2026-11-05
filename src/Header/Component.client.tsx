'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

import type { Header } from '@/payload-types'

import { Icon } from '@/components/Icon'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { HeaderNav, MobileNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const pathname = usePathname()
  // Remember which page the menu was opened on, so navigating closes it
  const [menuOpenOn, setMenuOpenOn] = useState<string | null>(null)
  const menuOpen = menuOpenOn === pathname

  return (
    <div className="relative z-20 px-4 md:px-6">
      <header className="relative rounded-b-card bg-white drop-shadow-[0_4px_2.5px_rgba(0,0,0,0.15)]">
        <div className="flex items-center justify-between p-5 md:px-20 md:py-6">
          <Link aria-label="Pardes home" href="/">
            <Logo loading="eager" priority="high" />
          </Link>
          <div className="flex items-center gap-3 lg:gap-12">
            <HeaderNav data={data} />
            <Link aria-label="Search" className="hidden p-0.5 lg:block" href="/search">
              <Icon name="search" />
            </Link>
            {data?.donateLink && <CMSLink {...data.donateLink} appearance="teal" />}
            <button
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="size-6 lg:hidden"
              onClick={() => setMenuOpenOn(menuOpen ? null : pathname)}
              type="button"
            >
              <Icon name="menu" />
            </button>
          </div>
        </div>
        {menuOpen && <MobileNav data={data} />}
      </header>
      {data?.dedication && (
        <p className="mt-5 rounded-pardes-lg bg-pardes-teal px-4 py-3 text-center font-poppins text-[15px] italic text-pardes-navy">
          {data.dedication}
        </p>
      )}
    </div>
  )
}
