import React from 'react'

import type { PeopleCarouselBlock as PeopleCarouselBlockProps } from '@/payload-types'

import { Carousel } from '@/components/Carousel'
import { CoverMedia } from '@/components/CoverMedia'
import { CMSLink } from '@/components/Link'
import { Section } from '@/components/Section'
import { SectionHeading } from '@/components/SectionHeading'

export const PeopleCarouselBlock: React.FC<PeopleCarouselBlockProps> = ({
  enableLink,
  link,
  people,
  title,
}) => {
  return (
    <Section className="flex flex-col items-start gap-9 px-6 pb-12 pt-10 md:px-20 md:pb-[68px] md:pt-[58px]">
      {title && <SectionHeading>{title}</SectionHeading>}
      {people && people.length > 0 && (
        <Carousel
          className="w-full"
          dotActiveClassName="bg-pardes-red"
          dotInactiveClassName="bg-pardes-red-100"
          label={title || 'People'}
          trackClassName="gap-6 [&>*]:basis-full sm:[&>*]:basis-[calc((100%-1.5rem)/2)] md:[&>*]:basis-[calc((100%-3rem)/3)] lg:[&>*]:basis-[calc((100%-6rem)/5)]"
        >
          {people.map(({ id, name, photo }) => (
            <article
              className="overflow-hidden rounded-b-pardes-md rounded-t-card bg-white"
              key={id}
            >
              <CoverMedia
                className="aspect-square"
                resource={photo}
                sizes="(min-width: 1024px) 20vw, 100vw"
              />
              <h3 className="px-4 py-6 text-lg font-bold leading-[1.35] text-pardes-red">{name}</h3>
            </article>
          ))}
        </Carousel>
      )}
      {enableLink && link && <CMSLink {...link} />}
    </Section>
  )
}
