'use client'

import { RefreshRouteOnSave } from '@payloadcms/live-preview-react'
import { useRouter } from 'next/navigation'

// Shown in draft mode: re-renders when the editor saves or autosaves, and offers a way out
export function PreviewBanner({ serverURL, exitHref, label, exitLabel }: { serverURL: string; exitHref: string; label: string; exitLabel: string }) {
  const router = useRouter()
  return (
    <>
      <RefreshRouteOnSave refresh={() => router.refresh()} serverURL={serverURL} />
      <div className="preview-banner" role="status">
        <span>{label}</span>
        <a href={exitHref}>{exitLabel}</a>
      </div>
    </>
  )
}
