import { cn } from '@/utilities/ui'
import React from 'react'

// Style Guide backgrounds: brights (white, light, gray) carry navy text, darks carry white text
const tones = {
  gray: 'bg-pardes-gray text-pardes-navy',
  light: 'bg-pardes-light text-pardes-navy',
  navy: 'bg-pardes-navy text-white',
  none: 'text-pardes-navy',
  slate: 'bg-pardes-slate text-white',
  white: 'bg-white text-pardes-navy',
}

// Gutters from the page edge: most frames sit 40px in on desktop, hero and stats bands 20px
const widths = {
  default: 'mx-4 md:mx-10',
  wide: 'mx-4 md:mx-5',
}

export type SectionTone = keyof typeof tones

type SectionProps = {
  as?: 'div' | 'footer' | 'section'
  children: React.ReactNode
  className?: string
  tone?: SectionTone
  width?: keyof typeof widths
}

// The rounded shell every homepage section sits in
export const Section: React.FC<SectionProps> = ({
  as: Tag = 'section',
  children,
  className,
  tone = 'light',
  width = 'default',
}) => (
  <Tag
    className={cn(
      'overflow-hidden rounded-pardes-lg md:rounded-section',
      widths[width],
      tones[tone],
      className,
    )}
  >
    {children}
  </Tag>
)
