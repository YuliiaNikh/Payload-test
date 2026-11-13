'use client'

import { Button, useDocumentInfo, useLocale } from '@payloadcms/ui'
import { useState } from 'react'

// Sidebar button: a link that shows this draft to someone without an admin login (valid 7 days)
export function PreviewLink() {
  const { id, collectionSlug } = useDocumentInfo()
  const locale = useLocale()
  const [url, setUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  if (!id) return null

  const create = async () => {
    setError(null)
    const response = await fetch(`/next/preview-link?collection=${collectionSlug}&id=${id}&locale=${locale.code}`)
    const body = (await response.json()) as { url?: string; error?: string }
    if (body.url) setUrl(body.url)
    else setError(body.error ?? 'Could not create the link.')
  }

  const copy = async () => {
    if (!url) return
    await navigator.clipboard.writeText(url)
    setCopied(true)
  }

  return (
    <div style={{ marginBlockEnd: 'var(--base)' }}>
      <p className="field-label">Share preview</p>
      {url ? (
        <>
          <input readOnly value={url} onFocus={(e) => e.currentTarget.select()} style={{ inlineSize: '100%' }} aria-label="Preview link" />
          <Button buttonStyle="secondary" size="small" onClick={copy}>
            {copied ? 'Copied' : 'Copy link'}
          </Button>
        </>
      ) : (
        <Button buttonStyle="secondary" size="small" onClick={create}>
          Create preview link ({locale.label as string})
        </Button>
      )}
      {error && <p style={{ color: 'var(--theme-error-500)' }}>{error}</p>}
    </div>
  )
}
