# Phase 4: Listing Block and Filters Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans. Steps use checkbox (`- [ ]`) syntax.

**Goal:** One Listing block (JetEngine listing + query + JetSmartFilters replacement) placeable on any page: choose a CPT, fixed filters, visitor filters (taxonomy as tabs/select/checkboxes, person, date, search, A–Z, sort), card style, grid/list/slider, numbered pages or load more. Term archives (`/blog/category/news`) reuse the CPT archive page with the term preset.

**Architecture:**
- Filter state lives in the URL. `state.ts` (pure) reads/writes it with an optional per-block prefix (the 2nd listing on a page uses `l2_`, the 3rd `l3_`, …).
- `query.ts` (pure) turns settings + state + resolved ids into a Payload `where` and `sort`. Both are unit-tested.
- The server component resolves term/person slugs to ids, queries Payload, and renders cards; the first load is server-rendered and works without JavaScript (a plain GET form).
- `Filters.tsx` (client) intercepts changes and calls `router.push(url, { scroll: false })`, so results update without a full reload and the back button works.
- A–Z uses a hidden localized `letter` field computed from the title on save (Hebrew final letters fold to their base letter; Payload has no "starts with" operator).
- Per-CPT taxonomy/date/person field maps live in `src/content/types.ts`; the block, the term archive routes and the item chips all read them.
- Load more = `page=N` shows N pages' worth from the start (server-rendered, shareable).

## Tasks

- [ ] **1. Content maps** (`cptTaxonomies`, `cptDateField`, `cptPersonField`) and **letters** util (`firstLetter`, `alphabet`) with unit tests; hidden `letter` field on every CPT.
- [ ] **2. Listing state** (`readListingState` / `listingHref`) with unit tests: prefixes, repeated params, page parsing, unknown sort ignored.
- [ ] **3. Listing query** (`buildListingWhere` / `buildListingSort`) with unit tests: published filter, term ids, impossible match for unknown slugs, upcoming/past, date range, search, letter, person, exclude current, related-to-current.
- [ ] **4. Block config** + register; generate types.
- [ ] **5. Server component, client filters, cards, pagination; CSS.** `RenderBlocks` passes listing index; route passes `searchParams` in the block context.
- [ ] **6. Term archives:** `matchTermArchivePath` (unit tests), `resolveRoute` returns the CPT archive page with a preset term; term chips on items link to term archives.
- [ ] **7. Int test:** listing query against real data (category filter by slug, search, letter, upcoming events, person). **E2E:** blog listing tab filter updates URL and results; glossary A–Z; load more; term archive page.
- [ ] **8. Migration** (review, rehearse fresh + upgrade), lint, all tests, deploy.
