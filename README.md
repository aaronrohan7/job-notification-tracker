# KodNest Premium Build System – Design System

This repository contains the **KodNest Premium Build System** design system. It is a calm, production-grade SaaS layout and component language, not a marketing site or student project.

The system defines:

- A strict global layout: **Top Bar → Context Header → Primary Workspace + Secondary Panel → Proof Footer**.
- A reduced, intentional palette (off‑white background, deep neutral text, deep red accent, muted success and warning hues).
- A consistent spacing scale: `8px, 16px, 24px, 40px, 64px` only.
- A clear hierarchy between serif headings and clean sans‑serif body text.
- Predictable components: cards, buttons, inputs, panels, and proof checklist.

## Viewing the system

Open `index.html` in any modern browser.

The page demonstrates:

- The full global layout.
- Primary and secondary panels.
- Button styles (primary and secondary).
- Input, textarea, focus and proof fields.
- The persistent proof footer with the required checklist:
  - `UI Built`
  - `Logic Working`
  - `Test Passed`
  - `Deployed`

## Design constraints

- **No gradients, no glassmorphism, no neon, no animation noise.**
- Transitions are limited to **150–200ms** with `ease-in-out` timing.
- Cards use a subtle border, no shadows, and balanced padding.
- Error and empty states are factual, non‑blaming, and always propose a clear next step.

This repository intentionally contains **design system structure only**. No product features or business flows are implemented here.

