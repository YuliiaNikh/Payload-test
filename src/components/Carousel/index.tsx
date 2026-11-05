'use client'

import { cn } from '@/utilities/ui'
import React, { useCallback, useEffect, useRef, useState } from 'react'

type CarouselProps = {
  children: React.ReactNode
  className?: string
  /** Classes for the active and inactive pagination dots */
  dotActiveClassName: string
  dotInactiveClassName: string
  label: string
  /** Gap and per-slide width are set by the caller via `[&>*]:basis-…` on the track */
  trackClassName?: string
}

// Horizontal scroll-snap track; each dot is one viewport-width "page" of slides
export const Carousel: React.FC<CarouselProps> = ({
  children,
  className,
  dotActiveClassName,
  dotInactiveClassName,
  label,
  trackClassName,
}) => {
  const trackRef = useRef<HTMLDivElement>(null)
  const [pageCount, setPageCount] = useState(1)
  const [activePage, setActivePage] = useState(0)

  const measure = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    setPageCount(Math.max(1, Math.ceil(track.scrollWidth / track.clientWidth - 0.01)))
    setActivePage(Math.round(track.scrollLeft / track.clientWidth))
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    return () => observer.disconnect()
  }, [measure])

  const goTo = (page: number) => {
    const track = trackRef.current
    if (!track) return
    track.scrollTo({ behavior: 'smooth', left: page * track.clientWidth })
  }

  return (
    <div aria-label={label} aria-roledescription="carousel" className={className} role="region">
      <div
        className={cn(
          'flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&>*]:shrink-0 [&>*]:snap-start',
          trackClassName,
        )}
        onScroll={measure}
        ref={trackRef}
      >
        {children}
      </div>
      {pageCount > 1 && (
        <div className="mt-6 flex items-center justify-center gap-3">
          {Array.from({ length: pageCount }, (_, page) => (
            <button
              aria-current={page === activePage}
              aria-label={`Go to slide group ${page + 1} of ${pageCount}`}
              className={cn(
                'size-3 rounded-full transition-colors',
                page === activePage ? dotActiveClassName : dotInactiveClassName,
              )}
              key={page}
              onClick={() => goTo(page)}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  )
}
