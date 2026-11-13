# Phase 5: Headers, Footers, Mega Menu Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Clients edit several header and footer designs, each with a per-language menu (Link / Dropdown / Mega menu with columns, descriptions, icons, promo card, automatic "latest items" column, bottom link). Site settings pick the defaults; every page and CPT item can use the default, pick another, or hide the header/footer.

**Architecture:**
- `Headers` and `Footers` collections with localized drafts; their `menu`/`columns` arrays are localized so each language has its own tree. Menu links use the shared `link` field, so they follow renames.
- `appearanceField()` (sidebar group) on Pages and CPTs; `resolveChrome()` (pure decision + queries) returns the header/footer to render, falling back to a plain bar when nothing is configured.
- Rendering uses native `<details name="…">` disclosures: one open at a time, keyboard accessible, works without JS; a tiny client component closes menus on outside click and Escape. Below 900px the same markup becomes an accordion. Logical CSS mirrors it in Hebrew.

## Tasks
- [ ] 1. `menuItem` fields, Headers, Footers, appearance field, Site settings defaults; types.
- [ ] 2. `pickChrome()` pure decision with unit tests (default / custom / none / missing default).
- [ ] 3. `SiteHeader`, `MegaMenu`, `SiteFooter` components + CSS; route uses them; auto column queries latest items.
- [ ] 4. E2E: mega menu opens with columns, promo and auto column; Hebrew menu differs; page with header "none" has no banner; footer renders.
- [ ] 5. Migration (review, rehearse), lint, tests, deploy.
