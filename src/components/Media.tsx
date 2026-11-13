import Image from 'next/image'

import type { Media as MediaDoc } from '@/payload-types'

type Props = {
  media: number | MediaDoc | null | undefined
  sizes?: string
  className?: string
  priority?: boolean
}

export function Media({ media, sizes = '100vw', className, priority }: Props) {
  if (!media || typeof media !== 'object' || !media.url) return null
  if (media.width && media.height) {
    return (
      <Image
        className={className}
        src={media.url}
        alt={media.alt ?? ''}
        width={media.width}
        height={media.height}
        sizes={sizes}
        priority={priority}
      />
    )
  }
  // eslint-disable-next-line @next/next/no-img-element -- files without stored dimensions (e.g. SVG)
  return <img className={className} src={media.url} alt={media.alt ?? ''} />
}
