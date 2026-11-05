'use client'

import React, { useEffect, useRef, useState } from 'react'

type RevealProps = {
  children: React.ReactNode
  className?: string
}

// Fades its content up the first time it scrolls into view (styles in globals.css).
// Put data-reveal-stagger on a list inside to bring its items in one after another.
export const Reveal: React.FC<RevealProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    node.querySelectorAll('[data-reveal-stagger]').forEach((group) => {
      Array.from(group.children).forEach((child, index) => {
        ;(child as HTMLElement).style.setProperty('--reveal-index', String(index))
      })
    })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={className} data-reveal="" data-revealed={revealed ? '' : undefined} ref={ref}>
      {children}
    </div>
  )
}
