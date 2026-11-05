import React from 'react'

import type { Page } from '@/payload-types'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

// Framed image with the title in a white tab on its bottom edge, then a centered intro
export const PardesHero: React.FC<Page['hero']> = ({ media, richText, title }) => {
  return (
    <section className="px-4 md:px-5">
      <div className="relative flex h-[475px] items-end overflow-hidden rounded-[40px] md:h-[607px] md:justify-center">
        {media && typeof media === 'object' && (
          <Media
            fill
            imgClassName="object-cover"
            pictureClassName="absolute inset-0"
            priority
            resource={media}
            size="100vw"
          />
        )}
        {title && (
          <h1 className="relative max-w-[85%] rounded-t-2xl bg-white px-5 pb-6 pt-5 type-h1 text-pardes-navy md:max-w-none md:px-10 md:pb-10 md:pt-8 md:text-center">
            {title}
          </h1>
        )}
      </div>
      {richText && (
        <RichText
          className="mx-auto mt-7 max-w-[1078px] type-p text-pardes-navy md:type-h5 md:font-normal [&_p]:my-0"
          data={richText}
          enableGutter={false}
          enableProse={false}
        />
      )}
    </section>
  )
}
