# Veloryx Home Page — Additional Sections Design Spec

**Date:** 2026-07-13  
**Status:** Approved

---

## Overview

Add 4 new sections to the Veloryx Technologies home page, inserted between CoreModalities and the Footer. Each new section is separated by the existing `AnimatedDivider` component, matching the visual rhythm already established on the page.

**New page flow:**
```
Navbar
Hero
AnimatedDivider
CoreModalities
AnimatedDivider   ← new
StatsBar          ← new
AnimatedDivider   ← new
TrustedBy         ← new
AnimatedDivider   ← new
HowWeWork         ← new
AnimatedDivider   ← new
CTABanner         ← new
Footer
```

---

## Global Constraints (inherited)

- Next.js 14 App Router, TypeScript, all components are React Server Components (no `"use client"`)
- Tailwind CSS v3 with Stitch token set — use existing tokens only (`text-primary`, `bg-background`, `glass-card`, `glow-btn`, `text-gradient`, etc.)
- Max content width: `1440px mx-auto`
- Horizontal padding: `px-margin-mobile md:px-margin-desktop`
- Section vertical padding: `py-section-gap`
- All content is realistic placeholder — no real client data

---

## Section 1: StatsBar

**File:** `components/StatsBar.tsx`  
**Test:** `__tests__/StatsBar.test.tsx`

### Layout
Full-width section, `py-section-gap`, `max-w-[1440px] mx-auto`, `px-margin-mobile md:px-margin-desktop`.

Grid: `grid grid-cols-2 md:grid-cols-4 gap-gutter`.

### Content — 4 stat tiles, each a `glass-card rounded-xl p-8 text-center`

| Stat value | Label |
|---|---|
| `200+` | Global Deployments |
| `99.98%` | Guaranteed Uptime |
| `34` | Countries Served |
| `120+` | Certified Engineers |

### Typography per tile
- Value: `font-display-lg text-headline-lg-mobile md:text-display-lg text-primary` (same scale as h1)
- Label: `font-label-caps text-label-caps text-on-surface-variant tracking-widest mt-2 uppercase`

### Tests
- Renders all 4 stat values (`200+`, `99.98%`, `34`, `120+`)
- Renders all 4 labels

---

## Section 2: TrustedBy

**File:** `components/TrustedBy.tsx`  
**Test:** `__tests__/TrustedBy.test.tsx`

### Layout
Full-width section, `py-section-gap`, `max-w-[1440px] mx-auto`, `px-margin-mobile md:px-margin-desktop`.

Section heading: `font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-16 text-center` — text: **"Trusted by Global Enterprises"**

Logo strip: wrapped in `border-t border-b border-outline-variant py-12`.  
Inner row: `flex flex-wrap items-center justify-center gap-x-16 gap-y-8`.

### Content — 6 text wordmarks

Rendered as `<span>` elements:
- `AWS`
- `Microsoft Azure`
- `Oracle`
- `Cisco`
- `IBM`
- `SAP`

### Typography per wordmark
`font-headline-md text-headline-md text-on-surface-variant/40 hover:text-on-surface-variant/80 transition-colors duration-300 cursor-default tracking-tight`

### Tests
- Renders the section heading
- Renders all 6 partner names

---

## Section 3: HowWeWork

**File:** `components/HowWeWork.tsx`  
**Test:** `__tests__/HowWeWork.test.tsx`

### Layout
Full-width section, `py-section-gap`, `max-w-[1440px] mx-auto`, `px-margin-mobile md:px-margin-desktop`.

Section heading: `font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4` — text: **"How We Operate"**  
Subtitle: `font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-16` — text: **"A disciplined four-phase methodology refined across 200+ enterprise engagements."**

Steps container: `relative grid grid-cols-1 md:grid-cols-4 gap-gutter`.

Connector line (desktop only): `hidden md:block absolute top-6 left-0 right-0 border-t border-outline-variant -z-0` — `top-6` = 24px, the vertical midpoint of the 48px (`w-12 h-12`) number badge.

### Content — 4 steps

| Number | Title | Description |
|---|---|---|
| `01` | Discovery & Audit | We map your current infrastructure, identify risk vectors, and define measurable success criteria. |
| `02` | Architecture Design | Our engineers draft resilient, multi-cloud blueprints aligned to your compliance and performance requirements. |
| `03` | Deployment | Phased rollout with zero-downtime migrations, automated testing, and real-time observability. |
| `04` | Continuous Support | 24/7 monitoring, proactive incident response, and quarterly architecture reviews. |

### Typography per step (each step is a `div` with `relative z-10 flex flex-col gap-4`)
- Number badge: `w-12 h-12 rounded-full border border-primary/30 bg-surface-container-low flex items-center justify-center font-mono-technical text-mono-technical text-primary`
- Title: `font-headline-md text-headline-md text-on-surface`
- Description: `font-body-md text-body-md text-on-surface-variant`

### Tests
- Renders section heading "How We Operate"
- Renders all 4 step numbers (`01`, `02`, `03`, `04`)
- Renders all 4 step titles

---

## Section 4: CTABanner

**File:** `components/CTABanner.tsx`  
**Test:** `__tests__/CTABanner.test.tsx`

### Layout
Full-width section, `py-section-gap`, `max-w-[1440px] mx-auto`, `px-margin-mobile md:px-margin-desktop`.

Outer wrapper: `glass-card rounded-xl relative overflow-hidden`.  
Ambient glow: `absolute inset-0 bg-primary/5 blur-[80px] rounded-full pointer-events-none` (centered behind text).  
Inner content: `relative z-10 flex flex-col items-center text-center gap-8`.

### Content

Heading: `font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface` — text: **"Ready to Architect Your Future?"**

Subtext: `font-body-lg text-body-lg text-on-surface-variant max-w-2xl` — text: **"Partner with Veloryx to design infrastructure that scales with your ambition."**

Buttons row: `flex flex-col sm:flex-row gap-6 justify-center`
- Primary: `bg-primary text-on-primary font-mono-technical text-mono-technical px-8 py-4 rounded glow-btn flex items-center gap-2` — text: **"Schedule a Consultation"** + `arrow_forward` Material Symbol
- Ghost: `border border-outline-variant text-on-surface font-mono-technical text-mono-technical px-8 py-4 rounded hover:border-primary hover:text-primary transition-colors` — text: **"View Our Work"**

### Tests
- Renders heading "Ready to Architect Your Future?"
- Renders "Schedule a Consultation" button
- Renders "View Our Work" button

---

## `app/page.tsx` Changes

Add new imports and insert new components + dividers in the correct order:

```tsx
import StatsBar from '@/components/StatsBar'
import TrustedBy from '@/components/TrustedBy'
import HowWeWork from '@/components/HowWeWork'
import CTABanner from '@/components/CTABanner'

// Inside <main>:
<CoreModalities />
<AnimatedDivider />
<StatsBar />
<AnimatedDivider />
<TrustedBy />
<AnimatedDivider />
<HowWeWork />
<AnimatedDivider />
<CTABanner />
```

---

## Out of Scope

- Real client logos (SVGs or images)
- Scroll animations / intersection observers
- Any interactivity beyond hover states
- Mobile navigation changes
