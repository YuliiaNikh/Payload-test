# Phase 3: UI Kit, Blocks and Page Building Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans. Steps use checkbox (`- [ ]`) syntax.

**Goal:** A small token-based UI kit (palette, fluid `clamp()` typography, spacing, buttons, cards) with a `/ui-kit` showcase page, a block library that clients compose pages from, page templates, reusable sections and per-CPT default blocks.

**Architecture:**
- Blocks are defined once at config level (`config.blocks`) and referenced from every layout field with `blockReferences`, so the database has one set of block tables instead of one per collection.
- Each block lives in `src/blocks/<Name>/` as `config.ts` + `Component.tsx`; `src/blocks/registry.ts` lists them and `RenderBlocks` maps `blockType` → component.
- Every section block gets a **Style** tab (background, spacing, alignment) from one shared field; phase 6 adds the **Visibility** tab in the same place.
- Links (buttons, cards) use one `link` field: internal reference (page or CPT item) or custom URL, plus an appearance. `linkHref()` resolves the reference at render time, so renames never break links.
- Layout fields are localized: each language has its own block list (spec section 1).
- The user asked for a plain test UI: the kit is plain CSS with tokens, logical properties only, no framework.

**User direction (2026-11-13):** run all phases without approval; end with several pages built from test data; design is a simple UI framework for testing — button types, cards, typography with clamps, spacing, palette.

## File structure

| File | Responsibility |
|---|---|
| `src/app/(frontend)/styles/tokens.css` | Palette (neutral + brand + status), fluid type scale with `clamp()`, spacing scale, radius, shadow. |
| `src/app/(frontend)/styles/components.css` | `.btn` (primary, secondary, outline, ghost, link; sm/md/lg), `.card` (default, outline, elevated, horizontal), `.badge`, `.section` backgrounds and spacing, grid utilities. |
| `src/app/(frontend)/[locale]/ui-kit/page.tsx` | Showcase of every token and component. |
| `src/fields/link.ts` | Link group field and `linkArray` helper. |
| `src/fields/blockStyle.ts` | Style tab shared by section blocks. |
| `src/fields/layout.ts` | `layoutField()` — localized blocks field using `blockReferences`. |
| `src/lib/links.ts` | `linkHref()` — pure resolution of a link to an href. |
| `src/blocks/*/config.ts`, `Component.tsx` | Hero, Cards, Tabs, Stats, Logos, CTA, Testimonials, FAQ, MediaText, RichText, Columns, DynamicField, ReusableSection. |
| `src/blocks/registry.ts`, `src/blocks/RenderBlocks.tsx` | Block list and renderer. |
| `src/blocks/context.ts` | `BlockContext` (locale, bases, homeId, current item). |
| `src/components/Media.tsx`, `src/components/Button.tsx` | Image and button primitives. |
| `src/collections/ReusableSections.ts` | Reusable sections (drafts per language). |
| `src/globals/CptDefaults.ts` | Default blocks after every item of each CPT. |
| `src/templates/pageTemplates.ts` | Layout presets; a Pages hook fills the layout on create. |

## Tasks

- [ ] **1. UI kit tokens and components.** Rewrite `tokens.css` (keep existing token names used by base.css), add `components.css`, import it in the locale layout, add the `/ui-kit` page (static route beats the catch-all). Verify `/ui-kit` and `/he/ui-kit` render (RTL) in the dev server.
- [ ] **2. Link field + `linkHref` with unit tests** (`tests/unit/links.spec.ts`): custom URL passthrough; page reference → localized path (home → `/` or `/he`); CPT reference → base + slug; missing reference → null.
- [ ] **3. Shared fields:** `blockStyle`, `layoutField`.
- [ ] **4. Section blocks** (configs + components) and the registry; register `blocks` in the Payload config.
- [ ] **5. Layouts:** `layout` on Pages and every CPT; `ReusableSections` collection; `CptDefaults` global; generate types/import map.
- [ ] **6. Rendering:** `RenderBlocks` with `BlockContext`; page route renders page layouts; item route renders item layout + CPT defaults; ReusableSection fetches the published section in the current language; DynamicField reads the current item.
- [ ] **7. Page templates:** presets + `beforeChange` hook (create only, layout empty, template ≠ blank). Int test: creating a page with template "landing" gets the landing blocks; "blank" stays empty.
- [ ] **8. E2E:** a seeded page with Hero, Cards, Tabs, FAQ and a reusable CTA renders; tab switching works; Hebrew version is RTL and can have a different layout.
- [ ] **9. Migration** (review + rehearse on empty DB and on a phase-2 DB with rows), **lint, all tests, deploy** (main, wait, develop).
