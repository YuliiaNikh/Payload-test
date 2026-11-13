'use client'

import Script from 'next/script'
import { useCallback, useEffect, useId, useRef, useState } from 'react'

declare global {
  interface Window {
    hbspt?: { forms: { create: (options: Record<string, string>) => void } }
  }
}

type Props = { portalId: string; formId: string; region: string; display: 'inline' | 'popup'; buttonLabel: string; closeLabel: string }

// Loads HubSpot's embed script once and renders the form into a target element
export function HubSpotEmbed({ portalId, formId, region, display, buttonLabel, closeLabel }: Props) {
  const id = `hs-${useId().replace(/[^a-zA-Z0-9]/g, '')}`
  const [ready, setReady] = useState(false)
  const created = useRef(false)
  const dialog = useRef<HTMLDialogElement>(null)

  const create = useCallback(() => {
    if (created.current || !window.hbspt) return
    created.current = true
    window.hbspt.forms.create({ portalId, formId, region, target: `#${id}` })
  }, [formId, id, portalId, region])

  useEffect(() => {
    if (ready && display === 'inline') create()
  }, [create, display, ready])

  const target = <div id={id} className="hubspot__target" data-portal-id={portalId} data-form-id={formId} />

  return (
    <>
      <Script src="https://js.hsforms.net/forms/embed/v2.js" strategy="lazyOnload" onReady={() => setReady(true)} />
      {display === 'inline' ? (
        target
      ) : (
        <>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => {
              dialog.current?.showModal()
              create()
            }}
          >
            {buttonLabel}
          </button>
          <dialog ref={dialog} className="hubspot__dialog">
            <form method="dialog" className="hubspot__close">
              <button type="submit" className="btn btn--ghost btn--sm" aria-label={closeLabel}>
                ✕
              </button>
            </form>
            {target}
          </dialog>
        </>
      )}
    </>
  )
}
