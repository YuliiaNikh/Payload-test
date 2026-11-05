import { cn } from '@/utilities/ui'
import React from 'react'

import type { Media as MediaType } from '@/payload-types'

import { Media } from '@/components/Media'

type CoverMediaProps = {
  className?: string
  imgClassName?: string
  priority?: boolean
  resource?: MediaType | number | string | null
  /** The `sizes` hint for responsive images */
  sizes?: string
}

// A positioned frame the image fills with object-cover; size and shape come from className
export const CoverMedia: React.FC<CoverMediaProps> = ({
  className,
  imgClassName,
  priority,
  resource,
  sizes = '100vw',
}) => (
  <div className={cn('relative overflow-hidden', className)}>
    {resource && typeof resource === 'object' && (
      <Media
        fill
        imgClassName={cn('object-cover', imgClassName)}
        pictureClassName="absolute inset-0"
        priority={priority}
        resource={resource}
        size={sizes}
      />
    )}
  </div>
)
