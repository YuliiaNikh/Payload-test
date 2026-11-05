import React from 'react'

import type { CardsSectionBlock as CardsSectionBlockProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'

export const CardsSectionBlock: React.FC<CardsSectionBlockProps> = ({ cards, title }) => {
  return (
    <section className="mx-4 rounded-[30px] bg-pardes-light px-4 py-8 md:mx-10 md:px-[52px] md:py-[45px]">
      {title && (
        <h2 className="type-h3 mb-6 font-extrabold capitalize text-pardes-red md:mb-10">{title}</h2>
      )}
      <div className="grid gap-6 md:grid-cols-3 md:gap-[27px]">
        {cards?.map(({ description, enableLink, id, link, media, title: cardTitle }) => (
          <article className="flex flex-col" key={id}>
            <div className="relative h-[180px] overflow-hidden rounded-t-[40px] md:h-[220px]">
              {media && typeof media === 'object' && (
                <Media
                  fill
                  imgClassName="object-cover"
                  pictureClassName="absolute inset-0"
                  resource={media}
                  size="(min-width: 768px) 33vw, 100vw"
                />
              )}
            </div>
            <div className="flex flex-1 flex-col items-start gap-6 rounded-b-[40px] bg-white px-6 py-7 md:min-h-[332px] md:gap-[35px] md:px-9">
              <h3 className="type-h2 font-normal tracking-[-0.03em] text-pardes-red">
                {cardTitle}
              </h3>
              {description && (
                <p className="type-p whitespace-pre-line text-pardes-navy">{description}</p>
              )}
              {enableLink && link && <CMSLink {...link} />}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
