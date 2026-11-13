# Phase 9: Demo Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans. Steps use checkbox (`- [ ]`) syntax.

**Goal:** A believable bilingual demo site ("Northwind", a payments company) so every feature can be clicked through: ~10 pages built from blocks, all CPTs with terms and relations, mega menus, footers, reusable sections, item defaults, visibility rules and a draft page.

**Architecture:**
- `src/seed/index.ts` creates everything in English, then adds Hebrew versions (some items English-only on purpose). Images are generated with sharp (gradients, avatars, logos), so no stock assets are needed.
- It runs inside one database transaction (all or nothing) and records `demoSeed` (hidden Site settings field). `pnpm seed` and the Vercel build both call `scripts/seed-demo.ts`; when the version is already recorded it skips, so production is seeded exactly once and user data is never deleted.
- Header buttons became localized (each language its own label/target); the migration copies existing values into both languages before dropping the old columns.

## Tasks
- [x] Seed module, image generators, `pnpm seed`, build step.
- [x] Visual check (EN, HE/RTL, mobile, mega menu, listings).
- [x] Migration with data-preserving copy; rehearsal: phase-8 DB upgrade, fresh DB seeded twice (second run skipped, no duplicates).
- [ ] Full tests, deploy, verify production pages.
