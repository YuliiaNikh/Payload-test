import React from 'react'

import type { ImageTextBlock as ImageTextBlockProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
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
  const imageRight = imagePosition === 'right'

  return (
    <section
      className={cn(
        'mx-4 flex flex-col overflow-hidden rounded-[32px] md:mx-10 md:flex-row md:rounded-[40px]',
        imageRight && 'flex-col-reverse md:flex-row-reverse',
        background === 'gray' ? 'bg-pardes-gray' : 'bg-pardes-light',
      )}
    >
      <div
        className={cn(
          'relative min-h-[260px] shrink-0 md:min-h-[560px]',
          imageWidths[imageWidth || 'half'],
        )}
      >
        {media && typeof media === 'object' && (
          <Media
            fill
            imgClassName="object-cover"
            pictureClassName="absolute inset-0"
            resource={media}
            size="(min-width: 768px) 50vw, 100vw"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col items-start justify-center gap-8 px-6 py-10 md:gap-12 md:px-24 md:py-[72px]">
        {title && (
          <h2
            className={cn(
              'max-w-[556px] text-pardes-navy',
              headingStyle === 'bold' ? 'type-h3' : 'type-h2 tracking-[-0.03em]',
            )}
          >
            {title}
          </h2>
        )}
        {body && (
          <p className="type-p max-w-[564px] whitespace-pre-line text-pardes-navy">{body}</p>
        )}
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
    </section>
  )
}
