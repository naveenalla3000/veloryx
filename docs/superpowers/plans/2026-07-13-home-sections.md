# Home Sections Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 4 new sections (StatsBar, TrustedBy, HowWeWork, CTABanner) to the Veloryx home page, inserted between CoreModalities and Footer, each separated by AnimatedDivider.

**Architecture:** Each section is an independent React Server Component file with a matching test file; `app/page.tsx` is updated last to compose all sections in order. No shared state or inter-component dependencies — tasks are fully parallel in theory, but execute sequentially to keep commits clean.

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS v3 with Stitch token set, Jest 29 + React Testing Library 16.

## Global Constraints

- All components are React Server Components — no `"use client"` directive
- Tailwind CSS v3 with Stitch tokens only: `text-primary`, `bg-background`, `glass-card`, `glow-btn`, `text-gradient`, `text-on-surface`, `text-on-surface-variant`, `border-outline-variant`, `bg-surface-container-low`, `text-headline-lg-mobile`, `text-display-lg`, `font-display-lg`, `font-headline-lg`, `font-headline-md`, `font-body-lg`, `font-body-md`, `font-label-caps`, `font-mono-technical`, `text-body-lg`, `text-body-md`, `text-headline-md`, `text-label-caps`, `text-mono-technical`, `gap-gutter`, `py-section-gap`, `px-margin-mobile`, `px-margin-desktop`
- Max content width: `max-w-[1440px] mx-auto`
- Horizontal padding: `px-margin-mobile md:px-margin-desktop`
- Section vertical padding: `py-section-gap`
- All content is realistic placeholder — no real client data
- All copy must match the spec verbatim (exact stat values, exact headings, exact descriptions)
- Project root: `/Users/allanaveen/Developer/veloryx`
- Test runner: `npm test -- --watchAll=false` from project root
- Build check: `npm run build` from project root
- TDD: write failing test first, verify it fails, implement, verify it passes, commit

## File Map

| Action | Path | Responsibility |
|---|---|---|
| Create | `components/StatsBar.tsx` | 4-stat grid section |
| Create | `__tests__/StatsBar.test.tsx` | 8 assertions (4 values + 4 labels) |
| Create | `components/TrustedBy.tsx` | Logo strip section |
| Create | `__tests__/TrustedBy.test.tsx` | 7 assertions (1 heading + 6 names) |
| Create | `components/HowWeWork.tsx` | 4-step methodology section |
| Create | `__tests__/HowWeWork.test.tsx` | 9 assertions (1 heading + 4 numbers + 4 titles) |
| Create | `components/CTABanner.tsx` | Call-to-action banner section |
| Create | `__tests__/CTABanner.test.tsx` | 3 assertions (heading + 2 buttons) |
| Modify | `app/page.tsx` | Compose all 4 new sections with AnimatedDividers |

---

### Task 1: StatsBar Component

**Files:**
- Create: `components/StatsBar.tsx`
- Create: `__tests__/StatsBar.test.tsx`

**Interfaces:**
- Produces: `export default function StatsBar()` — no props

- [ ] **Step 1: Write the failing test**

```typescript
// __tests__/StatsBar.test.tsx
import { render, screen } from '@testing-library/react'
import StatsBar from '@/components/StatsBar'

describe('StatsBar', () => {
  it('renders stat value 200+', () => {
    render(<StatsBar />)
    expect(screen.getByText('200+')).toBeInTheDocument()
  })

  it('renders stat value 99.98%', () => {
    render(<StatsBar />)
    expect(screen.getByText('99.98%')).toBeInTheDocument()
  })

  it('renders stat value 34', () => {
    render(<StatsBar />)
    expect(screen.getByText('34')).toBeInTheDocument()
  })

  it('renders stat value 120+', () => {
    render(<StatsBar />)
    expect(screen.getByText('120+')).toBeInTheDocument()
  })

  it('renders label Global Deployments', () => {
    render(<StatsBar />)
    expect(screen.getByText('Global Deployments')).toBeInTheDocument()
  })

  it('renders label Guaranteed Uptime', () => {
    render(<StatsBar />)
    expect(screen.getByText('Guaranteed Uptime')).toBeInTheDocument()
  })

  it('renders label Countries Served', () => {
    render(<StatsBar />)
    expect(screen.getByText('Countries Served')).toBeInTheDocument()
  })

  it('renders label Certified Engineers', () => {
    render(<StatsBar />)
    expect(screen.getByText('Certified Engineers')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- --watchAll=false --testPathPattern=StatsBar`  
Expected: FAIL — "Cannot find module '@/components/StatsBar'"

- [ ] **Step 3: Write the implementation**

```typescript
// components/StatsBar.tsx
const STATS = [
  { value: '200+', label: 'Global Deployments' },
  { value: '99.98%', label: 'Guaranteed Uptime' },
  { value: '34', label: 'Countries Served' },
  { value: '120+', label: 'Certified Engineers' },
]

export default function StatsBar() {
  return (
    <section className="py-section-gap max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
        {STATS.map(({ value, label }) => (
          <div key={label} className="glass-card rounded-xl p-8 text-center">
            <p className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary">
              {value}
            </p>
            <p className="font-label-caps text-label-caps text-on-surface-variant tracking-widest mt-2 uppercase">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- --watchAll=false --testPathPattern=StatsBar`  
Expected: PASS — 8 tests passing

- [ ] **Step 5: Commit**

```bash
git add components/StatsBar.tsx __tests__/StatsBar.test.tsx
git commit -m "feat: add StatsBar section with 4 stat tiles"
```

---

### Task 2: TrustedBy Component

**Files:**
- Create: `components/TrustedBy.tsx`
- Create: `__tests__/TrustedBy.test.tsx`

**Interfaces:**
- Produces: `export default function TrustedBy()` — no props

- [ ] **Step 1: Write the failing test**

```typescript
// __tests__/TrustedBy.test.tsx
import { render, screen } from '@testing-library/react'
import TrustedBy from '@/components/TrustedBy'

describe('TrustedBy', () => {
  it('renders the section heading', () => {
    render(<TrustedBy />)
    expect(screen.getByText('Trusted by Global Enterprises')).toBeInTheDocument()
  })

  it('renders AWS wordmark', () => {
    render(<TrustedBy />)
    expect(screen.getByText('AWS')).toBeInTheDocument()
  })

  it('renders Microsoft Azure wordmark', () => {
    render(<TrustedBy />)
    expect(screen.getByText('Microsoft Azure')).toBeInTheDocument()
  })

  it('renders Oracle wordmark', () => {
    render(<TrustedBy />)
    expect(screen.getByText('Oracle')).toBeInTheDocument()
  })

  it('renders Cisco wordmark', () => {
    render(<TrustedBy />)
    expect(screen.getByText('Cisco')).toBeInTheDocument()
  })

  it('renders IBM wordmark', () => {
    render(<TrustedBy />)
    expect(screen.getByText('IBM')).toBeInTheDocument()
  })

  it('renders SAP wordmark', () => {
    render(<TrustedBy />)
    expect(screen.getByText('SAP')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- --watchAll=false --testPathPattern=TrustedBy`  
Expected: FAIL — "Cannot find module '@/components/TrustedBy'"

- [ ] **Step 3: Write the implementation**

```typescript
// components/TrustedBy.tsx
const PARTNERS = ['AWS', 'Microsoft Azure', 'Oracle', 'Cisco', 'IBM', 'SAP']

export default function TrustedBy() {
  return (
    <section className="py-section-gap max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
      <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-16 text-center">
        Trusted by Global Enterprises
      </h2>
      <div className="border-t border-b border-outline-variant py-12">
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {PARTNERS.map((name) => (
            <span
              key={name}
              className="font-headline-md text-headline-md text-on-surface-variant/40 hover:text-on-surface-variant/80 transition-colors duration-300 cursor-default tracking-tight"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- --watchAll=false --testPathPattern=TrustedBy`  
Expected: PASS — 7 tests passing

- [ ] **Step 5: Commit**

```bash
git add components/TrustedBy.tsx __tests__/TrustedBy.test.tsx
git commit -m "feat: add TrustedBy section with 6 enterprise wordmarks"
```

---

### Task 3: HowWeWork Component

**Files:**
- Create: `components/HowWeWork.tsx`
- Create: `__tests__/HowWeWork.test.tsx`

**Interfaces:**
- Produces: `export default function HowWeWork()` — no props

- [ ] **Step 1: Write the failing test**

```typescript
// __tests__/HowWeWork.test.tsx
import { render, screen } from '@testing-library/react'
import HowWeWork from '@/components/HowWeWork'

describe('HowWeWork', () => {
  it('renders section heading "How We Operate"', () => {
    render(<HowWeWork />)
    expect(screen.getByText('How We Operate')).toBeInTheDocument()
  })

  it('renders step number 01', () => {
    render(<HowWeWork />)
    expect(screen.getByText('01')).toBeInTheDocument()
  })

  it('renders step number 02', () => {
    render(<HowWeWork />)
    expect(screen.getByText('02')).toBeInTheDocument()
  })

  it('renders step number 03', () => {
    render(<HowWeWork />)
    expect(screen.getByText('03')).toBeInTheDocument()
  })

  it('renders step number 04', () => {
    render(<HowWeWork />)
    expect(screen.getByText('04')).toBeInTheDocument()
  })

  it('renders step title Discovery & Audit', () => {
    render(<HowWeWork />)
    expect(screen.getByText('Discovery & Audit')).toBeInTheDocument()
  })

  it('renders step title Architecture Design', () => {
    render(<HowWeWork />)
    expect(screen.getByText('Architecture Design')).toBeInTheDocument()
  })

  it('renders step title Deployment', () => {
    render(<HowWeWork />)
    expect(screen.getByText('Deployment')).toBeInTheDocument()
  })

  it('renders step title Continuous Support', () => {
    render(<HowWeWork />)
    expect(screen.getByText('Continuous Support')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- --watchAll=false --testPathPattern=HowWeWork`  
Expected: FAIL — "Cannot find module '@/components/HowWeWork'"

- [ ] **Step 3: Write the implementation**

```typescript
// components/HowWeWork.tsx
const STEPS = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description:
      'We map your current infrastructure, identify risk vectors, and define measurable success criteria.',
  },
  {
    number: '02',
    title: 'Architecture Design',
    description:
      'Our engineers draft resilient, multi-cloud blueprints aligned to your compliance and performance requirements.',
  },
  {
    number: '03',
    title: 'Deployment',
    description:
      'Phased rollout with zero-downtime migrations, automated testing, and real-time observability.',
  },
  {
    number: '04',
    title: 'Continuous Support',
    description:
      '24/7 monitoring, proactive incident response, and quarterly architecture reviews.',
  },
]

export default function HowWeWork() {
  return (
    <section className="py-section-gap max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
      <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
        How We Operate
      </h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-16">
        A disciplined four-phase methodology refined across 200+ enterprise engagements.
      </p>
      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="hidden md:block absolute top-6 left-0 right-0 border-t border-outline-variant -z-0" />
        {STEPS.map(({ number, title, description }) => (
          <div key={number} className="relative z-10 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full border border-primary/30 bg-surface-container-low flex items-center justify-center font-mono-technical text-mono-technical text-primary">
              {number}
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">{title}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- --watchAll=false --testPathPattern=HowWeWork`  
Expected: PASS — 9 tests passing

- [ ] **Step 5: Commit**

```bash
git add components/HowWeWork.tsx __tests__/HowWeWork.test.tsx
git commit -m "feat: add HowWeWork 4-step methodology section"
```

---

### Task 4: CTABanner Component

**Files:**
- Create: `components/CTABanner.tsx`
- Create: `__tests__/CTABanner.test.tsx`

**Interfaces:**
- Produces: `export default function CTABanner()` — no props

- [ ] **Step 1: Write the failing test**

```typescript
// __tests__/CTABanner.test.tsx
import { render, screen } from '@testing-library/react'
import CTABanner from '@/components/CTABanner'

describe('CTABanner', () => {
  it('renders heading "Ready to Architect Your Future?"', () => {
    render(<CTABanner />)
    expect(screen.getByText('Ready to Architect Your Future?')).toBeInTheDocument()
  })

  it('renders "Schedule a Consultation" button', () => {
    render(<CTABanner />)
    expect(screen.getByText(/Schedule a Consultation/i)).toBeInTheDocument()
  })

  it('renders "View Our Work" button', () => {
    render(<CTABanner />)
    expect(screen.getByText('View Our Work')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- --watchAll=false --testPathPattern=CTABanner`  
Expected: FAIL — "Cannot find module '@/components/CTABanner'"

- [ ] **Step 3: Write the implementation**

```typescript
// components/CTABanner.tsx
export default function CTABanner() {
  return (
    <section className="py-section-gap max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="glass-card rounded-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center text-center gap-8 p-16">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            Ready to Architect Your Future?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Partner with Veloryx to design infrastructure that scales with your ambition.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-primary text-on-primary font-mono-technical text-mono-technical px-8 py-4 rounded glow-btn flex items-center gap-2">
              Schedule a Consultation{' '}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button className="border border-outline-variant text-on-surface font-mono-technical text-mono-technical px-8 py-4 rounded hover:border-primary hover:text-primary transition-colors">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- --watchAll=false --testPathPattern=CTABanner`  
Expected: PASS — 3 tests passing

- [ ] **Step 5: Commit**

```bash
git add components/CTABanner.tsx __tests__/CTABanner.test.tsx
git commit -m "feat: add CTABanner call-to-action section"
```

---

### Task 5: Wire sections into app/page.tsx

**Files:**
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes:
  - `export default function StatsBar()` from `@/components/StatsBar`
  - `export default function TrustedBy()` from `@/components/TrustedBy`
  - `export default function HowWeWork()` from `@/components/HowWeWork`
  - `export default function CTABanner()` from `@/components/CTABanner`
  - `export default function AnimatedDivider()` from `@/components/AnimatedDivider` (already imported)

- [ ] **Step 1: Write the failing test (extend page.test.tsx)**

Add 4 new assertions to `__tests__/page.test.tsx`. The file currently has 4 tests in a `describe('Home page', ...)` block.

Replace the entire file content with:

```typescript
// __tests__/page.test.tsx
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home page', () => {
  it('renders navbar brand', () => {
    render(<Home />)
    expect(screen.getAllByText('Veloryx').length).toBeGreaterThanOrEqual(1)
  })

  it('renders hero headline', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders Core Modalities section', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /Core Modalities/i })).toBeInTheDocument()
  })

  it('renders footer copyright', () => {
    render(<Home />)
    expect(screen.getByText(/Veloryx Technologies FZ-LLC/i)).toBeInTheDocument()
  })

  it('renders StatsBar stat value 200+', () => {
    render(<Home />)
    expect(screen.getByText('200+')).toBeInTheDocument()
  })

  it('renders TrustedBy heading', () => {
    render(<Home />)
    expect(screen.getByText('Trusted by Global Enterprises')).toBeInTheDocument()
  })

  it('renders HowWeWork heading', () => {
    render(<Home />)
    expect(screen.getByText('How We Operate')).toBeInTheDocument()
  })

  it('renders CTABanner heading', () => {
    render(<Home />)
    expect(screen.getByText('Ready to Architect Your Future?')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify the new 4 tests fail**

Run: `npm test -- --watchAll=false --testPathPattern=page`  
Expected: 4 existing tests PASS, 4 new tests FAIL (components not yet imported)

- [ ] **Step 3: Update app/page.tsx**

Replace the entire file with:

```typescript
// app/page.tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AnimatedDivider from '@/components/AnimatedDivider'
import CoreModalities from '@/components/CoreModalities'
import StatsBar from '@/components/StatsBar'
import TrustedBy from '@/components/TrustedBy'
import HowWeWork from '@/components/HowWeWork'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-[120px] pb-section-gap">
        <Hero />
        <AnimatedDivider />
        <CoreModalities />
        <AnimatedDivider />
        <StatsBar />
        <AnimatedDivider />
        <TrustedBy />
        <AnimatedDivider />
        <HowWeWork />
        <AnimatedDivider />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 4: Run all tests to verify all pass**

Run: `npm test -- --watchAll=false`  
Expected: All tests pass (21 existing + 8 StatsBar + 7 TrustedBy + 9 HowWeWork + 3 CTABanner + 4 new page = 52 total)

- [ ] **Step 5: Verify build**

Run: `npm run build`  
Expected: exit 0, no TypeScript or build errors

- [ ] **Step 6: Commit**

```bash
git add app/page.tsx __tests__/page.test.tsx
git commit -m "feat: wire StatsBar, TrustedBy, HowWeWork, CTABanner into home page"
```
