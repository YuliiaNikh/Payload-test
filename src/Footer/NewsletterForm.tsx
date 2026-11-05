'use client'

import React, { useState } from 'react'

import { getClientSideURL } from '@/utilities/getURL'

type Props = {
  buttonLabel: string
  formId: number | string
  heading: string
}

// Posts to the form-builder's submissions endpoint, like the Form block
export const NewsletterForm: React.FC<Props> = ({ buttonLabel, formId, heading }) => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const email = new FormData(event.currentTarget).get('email')
    setStatus('sending')

    try {
      const res = await fetch(`${getClientSideURL()}/api/form-submissions`, {
        body: JSON.stringify({ form: formId, submissionData: [{ field: 'email', value: email }] }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      })
      setStatus(res.ok ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      className="flex w-full flex-col gap-3 md:w-[600px] md:flex-row md:items-center md:gap-4"
      onSubmit={onSubmit}
    >
      <label className="shrink-0 font-poppins font-bold" htmlFor="newsletter-email">
        {heading}
      </label>
      {status === 'done' ? (
        <p className="text-pardes-teal" role="status">
          Thanks — you&apos;re signed up.
        </p>
      ) : (
        <div className="flex flex-1 flex-col gap-3 sm:flex-row">
          <input
            autoComplete="email"
            className="min-w-0 flex-1 rounded-2xl border-b border-pardes-red-500 bg-white p-3 text-[15px] leading-[1.1] text-[#1e1e1e] placeholder:text-[#1e1e1e]"
            id="newsletter-email"
            name="email"
            placeholder="Your Email"
            required
            type="email"
          />
          <button
            className="rounded-full bg-pardes-teal px-6 py-3 capitalize leading-[1.63] text-pardes-navy hover:bg-pardes-teal-50 disabled:opacity-60"
            disabled={status === 'sending'}
            type="submit"
          >
            {buttonLabel}
          </button>
        </div>
      )}
      {status === 'error' && (
        <p className="text-sm text-pardes-red-100" role="alert">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
