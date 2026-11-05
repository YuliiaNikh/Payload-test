import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import { Icon } from '@/components/Icon'
import { CMSLink } from '@/components/Link'
import { Section } from '@/components/Section'
import { NewsletterForm } from './NewsletterForm'

const socialNetworks = ['facebook', 'instagram', 'linkedin', 'tiktok'] as const

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
    <Section
      as="footer"
      className="mt-auto rounded-b-none px-6 pb-12 pt-8 md:rounded-b-none md:px-20 md:pb-20"
      tone="navy"
    >
      <div className="flex flex-col gap-8 border-b border-pardes-teal pb-8 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="Pardes" className="h-10 w-28" src="/pardes/logo-white.svg" />
          <ul className="flex items-center gap-5">
            {socialNetworks.map((network) =>
              social[network] ? (
                <li key={network}>
                  <a
                    aria-label={socialLabels[network]}
                    className="flex items-center"
                    href={social[network]!}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon name={network} />
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
              <Icon
                className="invert transition-transform group-open:rotate-180"
                name="chevronDown"
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
    </Section>
  )
}
