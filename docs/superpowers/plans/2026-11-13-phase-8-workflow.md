# Phase 8: Workflow Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Live preview in the admin (mobile/tablet/desktop), shareable 7-day preview links for people without a login, draft mode with a visible banner, and scheduled publish/unpublish per language.

**Architecture:**
- Admin `livePreview` points at `/next/preview?collection&id&locale`; that route enables Next draft mode for logged-in users and redirects to the document's draft URL. `RefreshRouteOnSave` re-renders the page on every save/autosave (2s), which is what "updates as you type" means with server-rendered blocks.
- Share links carry an HMAC-signed token (`PAYLOAD_SECRET`) with collection, id, locale and expiry; `/next/preview-link` creates one for logged-in users; a sidebar UI field shows the button.
- Queries take a `draft` flag: drafts skip the published filter (listings, menus and reusable sections stay published-only).
- `versions.drafts.schedulePublish` adds Payload's schedule UI; jobs run via `/api/payload-jobs/run` (logged-in users or `Authorization: Bearer $CRON_SECRET`), auto-run every minute locally, and by Vercel cron in production (daily on the Hobby plan; every minute needs Pro).

## Tasks
- [x] 1. Token sign/verify with unit tests.
- [x] 2. Draft flag through page/item queries and the route; preview/exit/preview-link routes; banner.
- [x] 3. Live preview config, preview link sidebar field, schedulePublish, jobs access + autoRun, vercel cron.
- [x] 4. Int tests (draft vs published, unpublished preview, scheduled publish in one language); e2e (share link, forged token, admin button).
- [ ] 5. Migration, lint, tests, deploy.
