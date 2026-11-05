import React from 'react'

import type { CardsSectionBlock as CardsSectionBlockProps } from '@/payload-types'

import { CoverMedia } from '@/components/CoverMedia'
import { CMSLink } from '@/components/Link'
import { Section } from '@/components/Section'
import { SectionHeading } from '@/components/SectionHeading'

export const CardsSectionBlock: React.FC<CardsSectionBlockProps> = ({ cards, title }) => {
  return (
    <Section className="px-4 py-8 md:px-[52px] md:py-[45px]">
      {title && (
        <SectionHeading className="mb-6 capitalize md:mb-10" size="h3">
          {title}
        </SectionHeading>
      )}
      <div className="grid gap-6 md:grid-cols-3 md:gap-[27px]" data-reveal-stagger>
        {cards?.map(({ description, enableLink, id, link, media, title: cardTitle }) => (
          <article className="flex flex-col" key={id}>
            <CoverMedia
              className="h-[180px] rounded-t-card md:h-[220px]"
              resource={media}
              sizes="(min-width: 768px) 33vw, 100vw"
            />
            <div className="flex flex-1 flex-col items-start gap-6 rounded-b-card bg-white px-6 py-7 md:min-h-[332px] md:gap-[35px] md:px-9">
              <SectionHeading as="h3" className="tracking-[-0.03em]" size="h2" weight="regular">
                {cardTitle}
              </SectionHeading>
              {description && <p className="type-p whitespace-pre-line">{description}</p>}
              {enableLink && link && <CMSLink {...link} />}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
