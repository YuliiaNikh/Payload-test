'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { Icon } from '@/components/Icon'
import { CMSLink } from '@/components/Link'
import Link from 'next/link'

// Desktop: items with sub-links open a dropdown on hover or keyboard focus
export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="hidden items-center gap-4 pt-2 lg:flex">
      {navItems.map(({ id, link, subItems }) => {
        const hasSubItems = Array.isArray(subItems) && subItems.length > 0

        return (
          <div className="group relative" key={id}>
            <CMSLink
              {...link}
              className="flex items-center gap-1 px-1 pb-2 pt-1 text-[15px] text-pardes-navy hover:text-pardes-red"
            >
              {hasSubItems && <Icon name="chevronDown" />}
            </CMSLink>
            {hasSubItems && (
              <ul className="invisible absolute left-0 top-full min-w-52 rounded-pardes-md bg-white p-3 opacity-0 shadow-pardes-lg transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                {subItems.map(({ id: subId, link: subLink }) => (
                  <li key={subId}>
                    <CMSLink
                      {...subLink}
                      className="block rounded-pardes-sm px-3 py-2 text-[15px] text-pardes-navy hover:bg-pardes-light hover:text-pardes-red"
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        )
      })}
    </nav>
  )
}

// Mobile: a stacked list under the header bar, sub-links indented
export const MobileNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="border-t border-pardes-gray px-5 pb-6 pt-2 lg:hidden">
      <ul>
        {navItems.map(({ id, link, subItems }) => (
          <li className="border-b border-pardes-gray py-3 last:border-b-0" key={id}>
            <CMSLink {...link} className="text-base font-semibold text-pardes-navy" />
            {Array.isArray(subItems) && subItems.length > 0 && (
              <ul className="mt-2 flex flex-col gap-2 pl-4">
                {subItems.map(({ id: subId, link: subLink }) => (
                  <li key={subId}>
                    <CMSLink {...subLink} className="text-[15px] text-pardes-navy" />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <li className="pt-3">
          <Link className="text-base text-pardes-navy" href="/search">
            Search
          </Link>
        </li>
      </ul>
    </nav>
  )
}
