import { cn } from '@/utilities/ui'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

// The exported artwork has padding, so it's cropped into a 134×48 frame as in the design
export const Logo = (props: Props) => {
  const { loading = 'lazy', priority = 'low', className } = props

  return (
    <span className={cn('relative block h-12 w-[134px] overflow-hidden', className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="Pardes"
        className="absolute left-[-9px] top-[-10px] h-[63px] w-[148px] max-w-none"
        decoding="async"
        fetchPriority={priority}
        height={63}
        loading={loading}
        src="/pardes/logo.svg"
        width={148}
      />
    </span>
  )
}
