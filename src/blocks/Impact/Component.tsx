import React from 'react'

import type { ImpactBlock as ImpactBlockProps } from '@/payload-types'

import { Carousel } from '@/components/Carousel'

export const ImpactBlock: React.FC<ImpactBlockProps> = ({
  description,
  stats,
  testimonials,
  title,
}) => {
  return (
    <section className="mx-4 overflow-hidden rounded-[32px] text-white md:mx-5">
      <div className="bg-pardes-navy px-6 pb-10 pt-12 md:px-[57px] md:pb-[38px] md:pt-[70px]">
        <div className="max-w-[848px]">
          {title && <h2 className="type-h4">{title}</h2>}
          {description && <p className="type-p mt-6">{description}</p>}
        </div>
        {stats && stats.length > 0 && (
          <ul className="mt-8 flex flex-col items-center gap-8 md:flex-row md:items-stretch md:justify-center md:gap-0 md:px-24 md:pt-8">
            {stats.map(({ id, label, value }) => (
              <li
                className="flex flex-col items-center gap-3 text-center md:gap-5 md:border-white/50 md:px-10 [&:not(:first-child)]:md:border-l"
                key={id}
              >
                <span className="text-[40px] font-black text-pardes-teal md:text-[64px]">
                  {value}
                </span>
                <span className="type-h4 max-w-[321px] font-medium">{label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {testimonials && testimonials.length > 0 && (
        <div className="bg-pardes-slate px-6 py-10 md:px-20 md:py-[60px]">
          <Carousel
            dotActiveClassName="bg-pardes-teal"
            dotInactiveClassName="bg-pardes-teal/40"
            label="Testimonials"
            trackClassName="gap-8 [&>*]:basis-full sm:[&>*]:basis-[calc((100%-2rem)/2)] lg:[&>*]:basis-[calc((100%-6rem)/4)]"
          >
            {testimonials.map(({ detail, id, location, name, quote }) => (
              <figure className="flex flex-col gap-5" key={id}>
                <blockquote className="type-h6 whitespace-pre-line">“{quote}”</blockquote>
                <hr className="w-[143px] border-white" />
                <figcaption className="type-p flex flex-col gap-4">
                  <span className="text-pardes-teal">{name}</span>
                  {location && <span>{location}</span>}
                  {detail && <span>{detail}</span>}
                </figcaption>
              </figure>
            ))}
          </Carousel>
        </div>
      )}
    </section>
  )
}
