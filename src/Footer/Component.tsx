import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import { CMSLink } from '@/components/Link'
import { NewsletterForm } from './NewsletterForm'

/* eslint-disable @next/next/no-img-element */
const socialIcons = {
  facebook: <img alt="" className="h-5 w-[11px]" src="/pardes/icon-facebook.svg" />,
  // Instagram is exported from Figma as three layered pieces
  instagram: (
    <span className="relative block size-5">
      <img alt="" className="absolute inset-0 size-full" src="/pardes/icon-instagram-frame.svg" />
      <img alt="" className="absolute inset-1/4 size-1/2" src="/pardes/icon-instagram-lens.svg" />
      <img
        alt=""
        className="absolute inset-[19.79%_19.79%_73.54%_73.54%]"
        src="/pardes/icon-instagram-dot.svg"
      />
    </span>
  ),
  linkedin: <img alt="" className="size-5" src="/pardes/icon-linkedin.svg" />,
  tiktok: <img alt="" className="size-5" src="/pardes/icon-tiktok.svg" />,
}
/* eslint-enable @next/next/no-img-element */

const socialLabels = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  tiktok: 'TikTok',
}

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)()

  const columns = footerData?.columns || []
  const social = footerData?.social || {}
  const newsletter = footerData?.newsletter
  const newsletterForm = newsletter?.form

  return (
    <footer className="mx-4 mt-auto rounded-t-[32px] bg-pardes-navy px-6 pb-12 pt-8 text-white md:mx-10 md:px-20 md:pb-20">
      <div className="flex flex-col gap-8 border-b border-pardes-teal pb-8 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="Pardes" className="h-10 w-28" src="/pardes/logo-white.svg" />
          <ul className="flex items-center gap-5">
            {(Object.keys(socialIcons) as (keyof typeof socialIcons)[]).map((network) =>
              social[network] ? (
                <li key={network}>
                  <a
                    aria-label={socialLabels[network]}
                    className="flex items-center"
                    href={social[network]!}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {socialIcons[network]}
                  </a>
                </li>
              ) : null,
            )}
          </ul>
        </div>
        {newsletterForm && typeof newsletterForm === 'object' && (
          <NewsletterForm
            buttonLabel={newsletter?.buttonLabel || 'Sign me up'}
            formId={newsletterForm.id}
            heading={newsletter?.heading || 'Sign up for our newsletter!'}
          />
        )}
      </div>

      {/* Desktop: all columns open */}
      <nav className="mt-8 hidden gap-8 md:flex md:flex-wrap lg:justify-between">
        {columns.map(({ heading, id, links }) => (
          <div className="flex min-w-[160px] flex-col gap-5" key={id}>
            <p className="font-semibold">{heading}</p>
            {links?.map(({ id: linkId, link }) => (
              <CMSLink {...link} className="hover:text-pardes-teal" key={linkId} />
            ))}
          </div>
        ))}
      </nav>

      {/* Mobile: each column collapses */}
      <nav className="mt-6 flex flex-col md:hidden">
        {columns.map(({ heading, id, links }) => (
          <details className="group border-b border-white/20 py-3" key={id}>
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold [&::-webkit-details-marker]:hidden">
              {heading}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                className="h-2 w-[15px] invert transition-transform group-open:rotate-180"
                src="/pardes/icon-chevron-down.svg"
              />
            </summary>
            <div className="flex flex-col gap-4 pb-2 pt-4">
              {links?.map(({ id: linkId, link }) => (
                <CMSLink {...link} key={linkId} />
              ))}
            </div>
          </details>
        ))}
      </nav>
    </footer>
  )
}
