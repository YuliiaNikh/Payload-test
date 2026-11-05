import React from 'react'

import type { PeopleCarouselBlock as PeopleCarouselBlockProps } from '@/payload-types'

import { Carousel } from '@/components/Carousel'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'

export const PeopleCarouselBlock: React.FC<PeopleCarouselBlockProps> = ({
  enableLink,
  link,
  people,
  title,
}) => {
  return (
    <section className="mx-4 flex flex-col items-start gap-9 rounded-[20px] bg-pardes-light px-6 pb-12 pt-10 md:mx-10 md:px-20 md:pb-[68px] md:pt-[58px]">
      {title && <h2 className="type-h4 text-pardes-red">{title}</h2>}
      {people && people.length > 0 && (
        <Carousel
          className="w-full"
          dotActiveClassName="bg-pardes-red"
          dotInactiveClassName="bg-pardes-red-100"
          label={title || 'People'}
          trackClassName="gap-6 [&>*]:basis-full sm:[&>*]:basis-[calc((100%-1.5rem)/2)] md:[&>*]:basis-[calc((100%-3rem)/3)] lg:[&>*]:basis-[calc((100%-6rem)/5)]"
        >
          {people.map(({ id, name, photo }) => (
            <article className="overflow-hidden rounded-b-2xl rounded-t-[40px] bg-white" key={id}>
              <div className="relative aspect-square">
                {photo && typeof photo === 'object' && (
                  <Media
                    fill
                    imgClassName="object-cover"
                    pictureClassName="absolute inset-0"
                    resource={photo}
                    size="(min-width: 1024px) 20vw, 100vw"
                  />
                )}
              </div>
              <h3 className="px-4 py-6 text-lg font-bold leading-[1.35] text-pardes-red">{name}</h3>
            </article>
          ))}
        </Carousel>
      )}
      {enableLink && link && <CMSLink {...link} />}
    </section>
  )
}
