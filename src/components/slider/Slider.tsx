'use client'

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from 'react'

import { pageCount, stepTo } from './pages'

export type SliderOptions = {
  perView: number
  arrows: boolean
  dots: boolean
  autoplay: boolean
  interval: number
  fullWidth: boolean
}

type Props = SliderOptions & {
  children: ReactNode
  label: string
  labels: { previous: string; next: string; slide: string }
}

// Scroll-snap slider: touch and trackpad scrolling work natively; arrows, dots and autoplay are extras
export function Slider({ children, label, labels, perView, arrows, dots, autoplay, interval, fullWidth }: Props) {
  const slides = Children.toArray(children)
  const track = useRef<HTMLDivElement>(null)
  const [visiblePerView, setVisiblePerView] = useState(perView)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const pages = pageCount(slides.length, visiblePerView)

  // Phones show one slide, tablets at most two (mirrors the CSS breakpoints)
  useEffect(() => {
    const update = () =>
      setVisiblePerView(window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? Math.min(perView, 2) : perView)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [perView])

  // The first mostly-visible slide is the active position (also when the visitor swipes)
  useEffect(() => {
    const items = Array.from(track.current?.children ?? []) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).map((e) => items.indexOf(e.target as HTMLElement))
        if (visible.length) setActive(Math.min(Math.min(...visible), pages - 1))
      },
      { root: track.current, threshold: 0.6 },
    )
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [pages, slides.length])

  const goTo = useCallback((index: number) => {
    const item = track.current?.children[index] as HTMLElement | undefined
    if (!track.current || !item) return
    // Move only the track, never the page; the same math works right to left
    const trackBox = track.current.getBoundingClientRect()
    const itemBox = item.getBoundingClientRect()
    const rtl = getComputedStyle(track.current).direction === 'rtl'
    track.current.scrollBy({ left: rtl ? itemBox.right - trackBox.right : itemBox.left - trackBox.left, behavior: 'smooth' })
    setActive(index)
  }, [])

  useEffect(() => {
    if (!autoplay || paused || pages < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => goTo(stepTo(active, 1, pages)), Math.max(2, interval) * 1000)
    return () => window.clearInterval(timer)
  }, [active, autoplay, goTo, interval, pages, paused])

  return (
    <div
      className={`slider${fullWidth ? ' slider--full' : ''}`}
      style={{ ['--per-view' as string]: perView }}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      data-autoplay={autoplay || undefined}
      data-per-view={perView}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div ref={track} className="slider__track">
        {slides.map((slide, i) => (
          <div key={i} className="slider__slide" role="group" aria-roledescription="slide" aria-label={`${i + 1} / ${slides.length}`}>
            {slide}
          </div>
        ))}
      </div>
      {pages > 1 && (arrows || dots) && (
        <div className="slider__controls">
          {arrows && (
            <button type="button" className="slider__arrow" aria-label={labels.previous} onClick={() => goTo(stepTo(active, -1, pages))}>
              <span aria-hidden="true" className="slider__chevron slider__chevron--prev" />
            </button>
          )}
          {dots && (
            <div className="slider__dots">
              {Array.from({ length: pages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  className="slider__dot"
                  aria-label={`${labels.slide} ${i + 1}`}
                  aria-current={i === active}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
          )}
          {arrows && (
            <button type="button" className="slider__arrow" aria-label={labels.next} onClick={() => goTo(stepTo(active, 1, pages))}>
              <span aria-hidden="true" className="slider__chevron slider__chevron--next" />
            </button>
          )}
        </div>
      )}
    </div>
  )
}
