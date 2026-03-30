# PerformanceLabs Revenue Intelligence — Interactive One-Sheet

A single-page interactive marketing site for **PerformanceLabs Revenue Intelligence**, powered by **Aplora.ai**. Built as a high-fidelity "one-sheet" that replaces static PDF collateral with an animated, scroll-driven web experience.

## Live Sections

| Section | Description |
|---|---|
| **Hero** | Headline, brand logos, CTA buttons, scroll indicator |
| **Problem** | Side-by-side comparison — Rigid SaaS vs. Custom AI Deployment — with animated wireframe cube and node cluster |
| **How We Work** | Three-step forward-deployed execution timeline (Diagnose → Deploy → Refine) |
| **Architecture** | Three-column data flow: Inputs → Agentic AI Core → Executive Outputs (CEO, CFO, CMO, CRO, COO) with animated flow dots and connector arrows |
| **Metrics** | Animated count-up KPIs (Data Health Score, Pipeline Visibility, Revenue Unified, Days to Value) |
| **Solutions** | Bento grid with live mockup panels — dashboard, kanban, chart, chat, compliance |
| **Call to Action** | Contact info and external links |

## Global Layers

- **ParticleCanvas** — Ambient floating particles rendered on a full-screen `<canvas>`
- **CursorGlow** — Radial gradient that follows the mouse cursor
- **ScrollProgress** — Gradient progress bar fixed to the top of the viewport
- **StickyNav** — Appears after scrolling past the hero; includes section links and contact CTA

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS 4 (via `@tailwindcss/vite` plugin) |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| Fonts | Instrument Serif (display) + DM Sans (body) via Google Fonts |

## Design System

All brand colors, typography, and spacing tokens are defined in `src/index.css`:

### Brand Tokens (`@theme`)

```
--color-navy          #102d50
--color-navy-deep     #0a1e36
--color-navy-mid      #1a3d66
--color-brand-orange   #faa840
--color-brand-red      #ef4537
--color-brand-cream    #faf6ef
--color-brand-charcoal #1c2438
--color-brand-gray     #8896a8
--color-aplora-blue    #5bb8f5
```

### CSS Custom Properties (`:root`)

SVG paint tokens, Framer Motion hover values, gradient accents, and shadow tokens are defined as CSS custom properties on `:root`. This allows `var()` references in contexts where Tailwind classes can't be used (SVG attributes, Framer Motion `whileHover` objects, inline gradients).

### Glass Utility

The `.glass` class uses overridable CSS custom properties (`--glass-bg`, `--glass-border`) so individual components can adjust the glass effect without rewriting the utility.

## Project Structure

```
src/
├── App.tsx                     # Root layout — global layers + content sections
├── index.css                   # Design tokens, CSS custom properties, utilities, keyframes
├── main.tsx                    # React entry point
├── assets/                     # Logos and static images
├── data/
│   └── content.ts              # All copy, labels, and structured data (single source of truth)
├── components/
│   ├── Hero.tsx                # Landing section with headline and CTAs
│   ├── ProblemSection.tsx      # Side-by-side comparison with CSS 3D cube + SVG node cluster
│   ├── HowWeWork.tsx           # Three-step process timeline
│   ├── Architecture.tsx        # Three-column data pipeline flow with animated dots
│   ├── Metrics.tsx             # Animated count-up statistics
│   ├── Solutions.tsx           # Bento grid with embedded mockup components
│   ├── CallToAction.tsx        # Contact and links
│   ├── StickyNav.tsx           # Scroll-triggered fixed navigation bar
│   ├── ParticleCanvas.tsx      # Full-screen ambient particle animation (canvas 2D)
│   ├── CursorGlow.tsx          # Mouse-following radial gradient overlay
│   ├── ScrollProgress.tsx      # Top-of-page scroll progress bar
│   ├── ui/
│   │   ├── GlassCard.tsx       # Reusable glass-morphism card with hover animation
│   │   └── RevealOnScroll.tsx  # Scroll-triggered fade/slide reveal wrapper
│   └── mockups/
│       ├── MockDashboard.tsx   # Donut chart + stat cards + field fill rates
│       ├── MockKanban.tsx      # Pipeline board with deal cards
│       ├── MockChart.tsx       # Bar chart with trend indicator
│       ├── MockChat.tsx        # AI chat interface mockup
│       └── MockCompliance.tsx  # Audit checklist mockup
└── hooks/
    ├── useCountUp.ts           # Animated number counter (IntersectionObserver-triggered)
    └── useMousePosition.ts     # Mouse coordinate tracker for cursor effects
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Run

```bash
git clone https://github.com/tonybangert/Interactive-One-Sheet-Application.git
cd Interactive-One-Sheet-Application
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
npm run preview    # Preview the production build locally
```

The production build outputs to `dist/`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | TypeScript check + Vite production build |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

## Content Editing

All text content lives in `src/data/content.ts`. This includes:

- Navigation links
- Hero headline and subtext
- Problem section copy and bullet points
- How We Work steps
- Architecture inputs, core stages, and executive outputs
- Metrics values and labels
- Solutions titles and descriptions
- CTA tagline and contact info

Edit this single file to update any copy without touching component code.

## Customization

### Adding a New Section

1. Create a new component in `src/components/`
2. Import and add it to `src/App.tsx` inside `<main>`
3. Add a nav link in `content.ts` → `navLinks` array
4. Add content data to `content.ts`

### Modifying the Color Palette

Update the `@theme` block in `src/index.css`. Tailwind utility classes (`bg-brand-orange`, `text-navy-deep`, etc.) update automatically. For SVG/animation colors, update the corresponding CSS custom properties in the `:root` block.

## License

Private — PerformanceLabs / Aplora.ai
