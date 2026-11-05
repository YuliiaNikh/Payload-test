/* eslint-disable @next/next/no-img-element */
import { cn } from '@/utilities/ui'
import React from 'react'

// Icons exported from the Pardes Figma file, served from /public/pardes
const icons = {
  chevronDown: { className: 'h-2 w-[15px]', src: '/pardes/icon-chevron-down.svg' },
  close: { className: 'size-[19px]', src: '/pardes/icon-close.svg' },
  facebook: { className: 'h-5 w-[11px]', src: '/pardes/icon-facebook.svg' },
  linkedin: { className: 'size-5', src: '/pardes/icon-linkedin.svg' },
  menu: { className: 'size-6', src: '/pardes/icon-menu.svg' },
  search: { className: 'size-[21px]', src: '/pardes/icon-search.svg' },
  send: { className: 'h-[19px] w-6', src: '/pardes/icon-send.svg' },
  tiktok: { className: 'size-5', src: '/pardes/icon-tiktok.svg' },
}

export type IconName = keyof typeof icons | 'instagram'

type IconProps = {
  className?: string
  name: IconName
}

// Decorative: give the surrounding link or button an aria-label
export const Icon: React.FC<IconProps> = ({ className, name }) => {
  // Instagram comes out of Figma as three layered pieces
  if (name === 'instagram') {
    return (
      <span aria-hidden className={cn('relative block size-5', className)}>
        <img alt="" className="absolute inset-0 size-full" src="/pardes/icon-instagram-frame.svg" />
        <img alt="" className="absolute inset-1/4 size-1/2" src="/pardes/icon-instagram-lens.svg" />
        <img
          alt=""
          className="absolute inset-[19.79%_19.79%_73.54%_73.54%]"
          src="/pardes/icon-instagram-dot.svg"
        />
      </span>
    )
  }

  const icon = icons[name]

  return <img alt="" aria-hidden className={cn(icon.className, className)} src={icon.src} />
}
