# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A single-page interactive marketing site for PerformanceLabs Revenue Intelligence (powered by Aplora.ai). It replaces static PDF collateral with an animated, scroll-driven web experience. There is no backend, no routing, no tests — it's a purely visual front-end app.

## Commands

- `npm run dev` — Start Vite dev server (http://localhost:5173)
- `npm run build` — TypeScript check + Vite production build (outputs to `dist/`)
- `npm run lint` — ESLint across the project
- `npm run preview` — Serve the production build locally

## Tech Stack

- React 19 + TypeScript, Vite 8
- Tailwind CSS 4 (via `@tailwindcss/vite` plugin — no `tailwind.config.js`)
- Framer Motion 12 for animations
- Lucide React for icons
- Fonts: Instrument Serif (display) + DM Sans (body) loaded via Google Fonts in `index.html`

## Architecture

**App.tsx** is the root — it renders four global overlay layers and seven content sections in order:

Global layers (rendered outside `<main>`, behind content via z-index):
- `ParticleCanvas` — full-screen canvas 2D particle animation
- `CursorGlow` — mouse-following radial gradient
- `ScrollProgress` — top progress bar
- `StickyNav` — appears after scrolling past hero

Content sections (inside `<main className="relative z-10">`):
Hero → ProblemSection → HowWeWork → Architecture → Metrics → Solutions → CallToAction

**All text content** lives in `src/data/content.ts` as exported constants. Edit copy there, not in components.

## Design System

Brand tokens and CSS custom properties are defined in `src/index.css`:
- `@theme` block defines Tailwind color/font/shadow tokens (use as `bg-navy`, `text-brand-orange`, etc.)
- `:root` block defines CSS custom properties for contexts where Tailwind classes can't be used (SVG attributes, Framer Motion `whileHover` objects, inline gradients)
- `.glass` utility class uses overridable custom properties (`--glass-bg`, `--glass-border`)

## Key Patterns

- **RevealOnScroll** (`src/components/ui/RevealOnScroll.tsx`) — wrapper component using IntersectionObserver + Framer Motion for scroll-triggered entrance animations. Used throughout sections.
- **GlassCard** (`src/components/ui/GlassCard.tsx`) — reusable glassmorphism card with hover animation.
- **useCountUp** hook — IntersectionObserver-triggered animated number counter (used in Metrics).
- **useMousePosition** hook — tracks mouse coordinates for CursorGlow.
- **Mockup components** (`src/components/mockups/`) — self-contained visual mockups (dashboard, kanban, chart, chat, compliance) embedded in the Solutions bento grid. These are purely decorative with hardcoded data.

## Adding a New Section

1. Create component in `src/components/`
2. Add it to `App.tsx` inside `<main>`
3. Add nav link in `content.ts` → `navLinks`
4. Add content data to `content.ts`
