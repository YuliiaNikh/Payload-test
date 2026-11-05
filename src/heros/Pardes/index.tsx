import React from 'react'

import type { Page } from '@/payload-types'

import { CoverMedia } from '@/components/CoverMedia'
import RichText from '@/components/RichText'

// Framed image with the title in a white tab on its bottom edge, then a centered intro.
// Plays its entrance on load: the image settles, then the title and intro rise in.
export const PardesHero: React.FC<Page['hero']> = ({ media, richText, title }) => {
  return (
    <section className="px-4 md:px-5">
      <div className="relative flex h-[475px] items-end overflow-hidden rounded-card md:h-[607px] md:justify-center">
        <CoverMedia
          className="!absolute inset-0"
          imgClassName="motion-safe:animate-settle"
          priority
          resource={media}
        />
        {title && (
          <h1 className="relative max-w-[85%] rounded-t-pardes-md bg-white px-5 pb-6 pt-5 text-pardes-navy motion-safe:animate-rise motion-safe:[animation-delay:200ms] md:max-w-none md:px-10 md:pb-10 md:pt-8 md:text-center">
            {title}
          </h1>
        )}
      </div>
      {richText && (
        <RichText
          className="type-p mx-auto mt-7 max-w-[1078px] text-pardes-navy motion-safe:animate-rise motion-safe:[animation-delay:400ms] md:type-h5 md:font-normal [&_p]:my-0"
          data={richText}
          enableGutter={false}
          enableProse={false}
        />
      )}
    </section>
  )
}
