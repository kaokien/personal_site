# Growth Solutions Engineer Positioning & Copy Design

**Date**: 2026-09-24  
**Author**: Kevin Adu-Poku & Antigravity  
**Target Roles**: Meta Rotational Product/Program Manager (RPM) & High-Ticket Creator/Gym Clients

---

## 1. Executive Summary & Strategy

The objective of this update is to establish a **dual-threat personal brand positioning** that accomplishes two simultaneous goals:

1. **Meta RPM Recruiters**: Demonstrate product execution, end-to-end technical leadership, systems architecture, and data-driven business impact (0-to-1 product ownership, scaling from enterprise clients at JW Player to consumer platforms).
2. **Business Owners & Creators**: Speak directly to business outcomes (automated member acquisition, direct-to-consumer revenue, zero technical friction) without alienating them with developer-only jargon like "sub-second load times."

---

## 2. Verified Metrics & Framing

- **Coach Josh Boxing (`coachjoshboxing.com`)**:
  - **18.4K Active Users** (verified in Google Analytics)
  - **27.1K Sessions** (verified in Google Analytics)
  - **200+ Active Athletes**
  - **GymDesk API Integration & Automated Trial Booking**
  - **Local SEO & GEO Schema**
- **Coach Josh Official & The Boxing Blueprint (`coachjoshofficial.com`)**:
  - Direct-to-Consumer digital course platform supporting a creator brand with **150M+ social views**.
  - **Architecture Focus**: Next.js App Router, adaptive-bitrate video streaming via Mux, Apple HIG-compliant digital reader engine, and self-serve Stripe checkout delivering instant access on autopilot.
  - _Strategic Decision_: Omit raw sales figures (e.g. 40 units) to maintain authority and keep the focus on enterprise-grade technical reliability and frictionless user experience.

---

## 3. Component & Page Specifications

### A. Homepage Hero (`src/components/sections/Hero.tsx`)

- **Semantic H1**: Preserve `<h1 className="sr-only">Kevin Adu-Poku — Growth Solutions Engineer</h1>`.
- **Display Typography**: Preserve large aesthetic typography (`GROWTH / ENGINEER.`).
- **Subheadline Copy**:
  > _"Growth Solutions Engineer bridging systems architecture, product execution, and measurable business growth. Enterprise background at JW Player (powering media infrastructure for Forbes, NPR, and NBC), Apple, and Yale — paired with building 0-to-1 consumer platforms that scale past 18K+ active users and generate automated revenue."_

### B. Services Teaser (`src/components/sections/ServicesTeaser.tsx`)

Reframe the 3 service offerings into outcome-oriented capabilities:

1. **Automated Acquisition Systems**: Funnels, local search optimization, and scheduling workflows that convert visitors into active members without manual back-and-forth.
2. **Direct-to-Consumer Product Platforms**: Custom course architectures, automated Stripe checkouts, and gated media hubs built to monetize audience demand.
3. **Enterprise Media & Playback Infrastructure**: High-concurrency video delivery, ad tech integration, and player SDK solutions derived from production experience at JW Player.

### C. Projects Data (`src/data/projects.json`)

- Update `coach-josh-boxing` description, longDescription, and feature cards with the 18.4K Active Users and 27.1K Sessions metrics.
- Refine `coach-josh-official` and `boxing-wiki` to emphasize product architecture, user engagement loops, and automated operations.

---

## 4. Verification & Testing Criteria

- `npm run build` passes with zero linting, TypeScript, or static generation errors.
- Responsive review across mobile, tablet, and desktop viewports.
- SEO & metadata integrity maintained across all routes.
