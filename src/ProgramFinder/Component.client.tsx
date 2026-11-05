'use client'

import { usePathname } from 'next/navigation'
import React, { useEffect, useId, useRef, useState } from 'react'

import type { ProgramFinder as ProgramFinderData } from '@/payload-types'

import { Icon } from '@/components/Icon'
import { CMSLink } from '@/components/Link'
import { cn } from '@/utilities/ui'

type Option = NonNullable<ProgramFinderData['options']>[number]
type ProgramLink = NonNullable<Option['programs']>[number]['link']

type BotMessage = { from: 'bot'; programs?: ProgramLink[]; text: string }
type Message = BotMessage | { from: 'user'; text: string }

// Words too common to tell programs apart
const fillerWords = new Set([
  'about',
  'find',
  'from',
  'like',
  'looking',
  'program',
  'programs',
  'some',
  'something',
  'that',
  'want',
  'what',
  'with',
])

// Matches typed text against option labels and program names, word by word
const findPrograms = (query: string, options: Option[]): ProgramLink[] => {
  const words = query
    .toLowerCase()
    .split(/\W+/)
    .filter((word) => word.length > 3 && !fillerWords.has(word))
  if (!words.length) return []

  const found = new Map<string, ProgramLink>()
  for (const option of options) {
    const optionMatches = words.some((word) => option.label.toLowerCase().includes(word))
    for (const { link } of option.programs || []) {
      const name = (link.label || '').toLowerCase()
      if (optionMatches || words.some((word) => name.includes(word))) {
        found.set(`${link.label}|${link.url}`, link)
      }
    }
  }
  return [...found.values()]
}

export const ProgramFinderClient: React.FC<{ data: ProgramFinderData }> = ({ data }) => {
  const options = data.options || []
  const greeting: Message = {
    from: 'bot',
    text: data.greeting || 'What program are you looking for?',
  }

  const pathname = usePathname()
  // Remember which page it was opened on, so navigating to a program closes it
  const [openOn, setOpenOn] = useState<string | null>(null)
  const open = openOn === pathname
  const [messages, setMessages] = useState<Message[]>([greeting])

  const panelId = useId()
  const launcherRef = useRef<HTMLButtonElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const logRef = useRef<HTMLOListElement>(null)

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    logRef.current?.scrollTo({ behavior: 'smooth', top: logRef.current.scrollHeight })
  }, [messages])

  const close = () => {
    setOpenOn(null)
    launcherRef.current?.focus()
  }

  const answer = (userText: string, reply: BotMessage) =>
    setMessages((current) => [
      ...current,
      { from: 'user', text: userText },
      reply,
      ...(reply.programs?.length && data.followUp
        ? [{ from: 'bot' as const, text: data.followUp }]
        : []),
    ])

  const pickOption = (option: Option) =>
    answer(option.label, {
      from: 'bot',
      programs: (option.programs || []).map(({ link }) => link),
      text: option.reply || 'Here are some programs that might fit you:',
    })

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const input = inputRef.current
    const query = input?.value.trim()
    if (!input || !query) return

    const programs = findPrograms(query, options)
    answer(
      query,
      programs.length
        ? { from: 'bot', programs, text: 'Here’s what I found:' }
        : {
            from: 'bot',
            text: data.noMatch || 'I couldn’t find a program for that. Try one of these:',
          },
    )
    input.value = ''
  }

  return (
    <div
      className="fixed bottom-6 right-0 z-40 flex flex-col items-end"
      onKeyDown={(event) => event.key === 'Escape' && open && close()}
    >
      {open && (
        <div
          aria-label={data.title || 'Find a program'}
          className="mb-3 mr-4 flex max-h-[min(640px,calc(100dvh-8rem))] w-[343px] max-w-[calc(100vw-2rem)] flex-col gap-4 rounded-pardes-md bg-white px-6 py-4 text-black drop-shadow-[0_0_7px_rgba(0,0,0,0.35)] motion-safe:animate-rise md:mr-8"
          id={panelId}
          role="dialog"
        >
          <p className="type-h5 text-pardes-navy">{data.title || 'Hi there 👋'}</p>

          <ol
            aria-live="polite"
            className="flex flex-1 flex-col gap-4 overflow-y-auto"
            ref={logRef}
          >
            {messages.map((message, index) => (
              <li
                className={cn(
                  'whitespace-pre-line rounded-lg p-4 leading-[1.63] first-letter:uppercase',
                  message.from === 'user'
                    ? 'ml-8 self-end bg-pardes-navy text-white'
                    : 'mr-4 bg-pardes-gray',
                )}
                key={index}
              >
                {message.text}
                {message.from === 'bot' && message.programs && message.programs.length > 0 && (
                  <ul className="mt-4 flex flex-col gap-3">
                    {message.programs.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <CMSLink {...link} className="underline hover:text-pardes-red" />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Suggested answers">
            {options.map((option) => (
              <button
                className="rounded-full border border-pardes-red px-3 py-1 text-left text-sm text-pardes-red hover:bg-pardes-red hover:text-white"
                key={option.id}
                onClick={() => pickOption(option)}
                type="button"
              >
                {option.label}
              </button>
            ))}
          </div>

          <form className="flex items-center gap-3 border-t border-black p-3" onSubmit={onSubmit}>
            <label className="sr-only" htmlFor={`${panelId}-input`}>
              Describe the program you’re looking for
            </label>
            <input
              autoComplete="off"
              className="min-w-0 flex-1 bg-transparent text-[15px] leading-[1.1] placeholder:text-[#818181] focus:outline-none"
              id={`${panelId}-input`}
              placeholder="Write something..."
              ref={inputRef}
            />
            <button aria-label="Send" className="shrink-0" type="submit">
              <Icon name="send" />
            </button>
          </form>
        </div>
      )}

      <button
        aria-controls={open ? panelId : undefined}
        aria-expanded={open}
        aria-label={open ? 'Close program finder' : undefined}
        className={cn(
          'flex h-[55px] items-center justify-center bg-pardes-navy p-4 text-white shadow-pardes-md transition-colors hover:bg-pardes-slate',
          open ? 'mr-4 w-[55px] rounded-full md:mr-8' : 'rounded-l-[32px]',
        )}
        onClick={() => (open ? close() : setOpenOn(pathname))}
        ref={launcherRef}
        type="button"
      >
        {open ? (
          <Icon name="close" />
        ) : (
          <span className="w-[104px] text-center text-sm font-medium italic leading-[1.4]">
            {data.launcherLabel || 'Lets Find You a Program!'}
          </span>
        )}
      </button>
    </div>
  )
}
