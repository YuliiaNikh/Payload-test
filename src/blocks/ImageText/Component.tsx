import React from 'react'

import type { ImageTextBlock as ImageTextBlockProps } from '@/payload-types'

import { CoverMedia } from '@/components/CoverMedia'
import { CMSLink } from '@/components/Link'
import { Section } from '@/components/Section'
import { SectionHeading } from '@/components/SectionHeading'
import { cn } from '@/utilities/ui'

const imageWidths = {
  half: 'md:w-1/2',
  quarter: 'md:w-1/4',
  third: 'md:w-1/3',
}

export const ImageTextBlock: React.FC<ImageTextBlockProps> = ({
  background,
  body,
  headingStyle,
  imagePosition,
  imageWidth,
  links,
  media,
  title,
}) => {
  return (
    <Section
      className={cn(
        'flex flex-col md:flex-row',
        imagePosition === 'right' && 'flex-col-reverse md:flex-row-reverse',
      )}
      tone={background === 'gray' ? 'gray' : 'light'}
    >
      <CoverMedia
        className={cn('min-h-[260px] shrink-0 md:min-h-[560px]', imageWidths[imageWidth || 'half'])}
        resource={media}
        sizes="(min-width: 768px) 50vw, 100vw"
      />
      <div className="flex flex-1 flex-col items-start justify-center gap-8 px-6 py-10 md:gap-12 md:px-24 md:py-[72px]">
        {title && (
          <SectionHeading
            className={cn('max-w-[556px]', headingStyle !== 'bold' && 'tracking-[-0.03em]')}
            size={headingStyle === 'bold' ? 'h3' : 'h2'}
            tone="navy"
            weight={headingStyle === 'bold' ? 'bold' : 'medium'}
          >
            {title}
          </SectionHeading>
        )}
        {body && <p className="type-p max-w-[564px] whitespace-pre-line">{body}</p>}
        {Array.isArray(links) && links.length > 0 && (
          <ul className="flex flex-wrap gap-4 md:gap-6">
            {links.map(({ id, link }) => (
              <li key={id}>
                <CMSLink {...link} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  )
}
