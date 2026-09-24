# Growth Solutions Engineer Positioning & Copy Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Implement the validated dual-threat Growth Solutions Engineer positioning across the personal site, incorporating verified Google Analytics metrics (18.4K active users, 27.1K sessions), reframing technical copy into business outcomes for clients and product impact for Meta RPM recruiters, and strictly eliminating all em dashes across the site.

**Architecture:** Update Next.js App Router presentation layer components (`Hero.tsx`, `ServicesTeaser.tsx`, `services/page.tsx`) and underlying project data (`projects.json`) while ensuring zero linting regressions, zero em dashes, and complete TypeScript type safety across static page generation.

**Tech Stack:** Next.js 16 (Turbopack, App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion.

---

### Task 1: Complete Em Dash Elimination Across the Site

**Files:**

- Modify: `src/components/sections/Hero.tsx:38,81`
- Modify: `src/data/projects.json:255`
- Modify: `src/components/sections/ContactForm.tsx:33`
- Modify: `src/components/sections/ExperienceTimeline.tsx:72`
- Modify: `src/app/resume/page.tsx:108,180`
- Modify: `src/app/projects/[slug]/page.tsx:119`
- Modify: `docs/plans/2026-09-24-growth-engineer-positioning-design.md:37,40`

**Step 1: Replace all instances of `—` with clean, natural punctuation**

- In `Hero.tsx`: Replace `Kevin Adu-Poku — Growth Solutions Engineer` with `Kevin Adu-Poku | Growth Solutions Engineer`.
- In `Hero.tsx`: Replace `Solutions engineer at JW Player — kept video...` with human phrasing.
- In `projects.json`: Replace `"Nebula — Web3 DRM Audio Player"` with `"Nebula: Web3 DRM Audio Player"`.
- In `ContactForm.tsx`: Replace `— ${data.name}` with `${data.name}`.
- In `ExperienceTimeline.tsx`, `resume/page.tsx`, and `projects/[slug]/page.tsx`: Replace date range em dashes with standard hyphens `-`.
- In `docs/plans/2026-09-24-growth-engineer-positioning-design.md`: Replace em dashes with commas or colons.

**Step 2: Verify zero em dashes in source**
Run: `git grep "—" src/`
Expected: 0 matches found in `src/`.

**Step 3: Commit**

```bash
git add src/ docs/plans/
git commit -m "style: remove all em dashes across site copy and components"
```

---

### Task 2: Update Homepage Hero for Dual-Threat Positioning

**Files:**

- Modify: `src/components/sections/Hero.tsx:77-85`

**Step 1: Update Hero Subheadline**
Replace existing copy with the validated dual-threat copy:

```tsx
<p className="text-muted-foreground text-lg leading-relaxed font-medium sm:text-xl">
  Growth Solutions Engineer bridging systems architecture, product execution,
  and measurable business growth. Enterprise background at JW Player (powering
  media infrastructure for Forbes, NPR, and NBC), Apple, and Yale, paired with
  building 0-to-1 consumer platforms that scale past 18K+ active users and
  generate automated revenue.
</p>
```

**Step 2: Verify TypeScript & Build**
Run: `npx tsc --noEmit`
Expected: Exit code 0.

**Step 3: Commit**

```bash
git add src/components/sections/Hero.tsx
git commit -m "feat(hero): update subheadline with dual-threat positioning"
```

---

### Task 3: Refactor Coach Josh Projects in `src/data/projects.json` with Verified Metrics

**Files:**

- Modify: `src/data/projects.json:4-47, 50-89`

**Step 1: Update `coach-josh-boxing` Data**

- Update `description` to highlight 18.4K active users and 27.1K sessions:
  `"High-performance member acquisition funnel and local web platform for Hamden, CT boxing gym. Driven by targeted local SEO and automated booking workflows, scaling platform traffic to 18.4K active users and 27.1K sessions."`
- Update `longDescription` to focus on business outcomes and verified traffic rather than code trivia.
- Update `features`:
  - `title`: `"18.4K Active Users"`, `detail`: `"27.1K sessions driven through organic search and acquisition funnels"`
  - `title`: `"GymDesk Integration"`, `detail`: `"Automated schedule syncing and free trial booking"`
  - `title`: `"Stripe Gateway"`, `detail`: `"Direct membership and training package checkouts"`
  - `title`: `"Local Search Dominance"`, `detail`: `"Top ranking across New Haven area boxing queries"`

**Step 2: Update `coach-josh-official` Data**

- Ensure copy emphasizes scalable direct-to-consumer digital course architecture (Mux adaptive video streaming, Next.js, Stripe checkout) without citing raw unit counts.

**Step 3: Verify JSON validity and TypeScript types**
Run: `npm run build`
Expected: Exit code 0 with 35/35 pages generated.

**Step 4: Commit**

```bash
git add src/data/projects.json
git commit -m "feat(projects): enrich Coach Josh projects with verified 18.4K user metrics"
```

---

### Task 4: Reframe Services on Homepage and Services Page for Business & Product Impact

**Files:**

- Modify: `src/components/sections/ServicesTeaser.tsx:7-27`
- Modify: `src/app/services/page.tsx:20-60`

**Step 1: Update `ServicesTeaser.tsx`**
Update `services` array to focus on outcomes:

1. `title`: `"Automated Acquisition Systems"`, `description`: `"Funnels, local search optimization, and scheduling workflows that convert visitors into active members without manual back-and-forth."`, `tag`: `"Member Acquisition"`
2. `title`: `"Direct-to-Consumer Product Platforms"`, `description`: `"Custom course architectures, automated Stripe checkouts, and gated media hubs built to monetize audience demand."`, `tag`: `"Digital Products & DTC"`
3. `title`: `"Enterprise Media & Playback Systems"`, `description`: `"High-concurrency video delivery, ad tech integration, and player SDK solutions derived from production experience at JW Player."`, `tag`: `"Video Infra & Playback"`

**Step 2: Update `src/app/services/page.tsx`**
Ensure detailed services copy aligns with the new outcome-focused structure while maintaining zero em dashes.

**Step 3: Verify build**
Run: `npm run build`
Expected: Exit code 0.

**Step 4: Commit**

```bash
git add src/components/sections/ServicesTeaser.tsx src/app/services/page.tsx
git commit -m "feat(services): reframe service offerings around business outcomes and product execution"
```

---

### Task 5: Final Verification & Quality Assurance

**Files:**

- Whole workspace

**Step 1: Verify 0 em dashes in repository code**
Run: `git grep "—" src/`
Expected: Empty output.

**Step 2: Run Production Build**
Run: `npm run build`
Expected: Exit code 0, all 35 routes static/prerendered.

**Step 3: Final Commit & Review**
Review `git diff` against `main`.
