# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (Next.js)
npm run build    # Production build
npm run start    # Start production server
```

No lint or test scripts are configured.

## Architecture

**Bang Pacinz** is a Mobile Legends gaming services storefront (diamond topup, rank boosting/joki, VIP mabar sessions). It uses Next.js 16 App Router with React 19 and Tailwind CSS v4 — read `node_modules/next/dist/docs/` before writing Next.js code, as this version has breaking changes.

### Data layer

All data is static mock data — there is no backend or API. `src/lib/data/` contains typed arrays for diamonds, ranks, mabar packages, coaches, testimonials, and orders. `src/lib/data/orders.ts` exports a `findOrder()` lookup used by the order-status page.

### Three service flows

Each service is a multi-step wizard form:
- **Topup Diamond** (`/topup-diamond`) — 4 steps: User ID → Diamond package → Payment method → Confirmation
- **Jasa Joki** (`/jasa-joki`) — 3 steps: Rank selection + price calc → Account credentials → Confirmation
- **Mabar VIP** (`/mabar-vip`) — 4 steps: Package → Coach → Schedule → Confirmation

Form orchestrators live in `src/components/forms/{TopupForm,JokiForm,MabarForm}/index.tsx`. Each manages `step` state and a `data` accumulator; individual step components receive `defaultValues`, `onNext(partial)`, and `onBack`. Zod schemas for each step are in `src/lib/validations/`.

### Page pattern

Pages are server components that export `metadata` and render a layout shell, then import either a `*Client.tsx` client component (for interactive pages like `cek-status`) or a form component directly. Avoid making page files client components.

### Styling

Tailwind v4 with `@theme {}` design tokens defined in `src/app/globals.css`. The design system is dark-only. Use these tokens for consistency:

| Token | Value | Used for |
|---|---|---|
| `--color-bp-bg` | `#0b0d12` | Page background |
| `--color-bp-bg-card` | `#12151d` | Card/panel background |
| `--color-bp-orange` | `#ff7a1a` | Topup service accent |
| `--color-bp-purple` | `#9b5cff` | Joki service accent |
| `--color-bp-pink` | `#ff4d8d` | Mabar service accent |
| `--color-bp-green` | `#41e07d` | Success / cek-status accent |
| `--color-bp-text` | `#eef1f6` | Primary text |
| `--color-bp-text-secondary` | `#9aa3b2` | Secondary text |

Because Tailwind v4 arbitrary-value syntax changed, components apply design token colors via inline `style` props rather than `className`. The `cn()` utility (`src/lib/utils/cn.ts`, wraps `clsx` + `tailwind-merge`) is used for conditional class merging only.

Fonts: `--font-sora` (headings/display), `--font-jakarta` (body), `--font-jetbrains` (mono/IDs).

### UI components

`src/components/ui/` contains `Button`, `Input`, `Select`, `Textarea`, `Badge`, and `Stepper`. All accept an `accentColor` prop to match the service context. Extend these rather than writing new primitives.

### Pricing utilities

`src/lib/utils/pricing.ts` exports `calculateJokiPrice(fromRankId, toRankId)` (sums `basePrice` over rank steps), `formatPrice(n)` (IDR locale), and `generateOrderId(prefix)`.
