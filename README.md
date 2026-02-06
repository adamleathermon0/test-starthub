# StartHub Feature Card

Interactive **Feature Card** component for the StartHub landing page. Built with Next.js (App Router), React, and Framer Motion.

## What’s included

- **Entrance animation**: When the card scrolls into view, icon → title → text stagger-fade in with a spring.
- **Hover micro-interaction**: Card lifts and scales with a spring; icon rotates and scales; a soft glow fades in. All use Framer Motion springs (no linear easing).
- **Tech**: React 18, Next.js 14, Framer Motion, SCSS modules.
- **Performance**: `willChange` on animated props, `useInView` with `once` and `amount`, and spring-based motion so animations stay smooth (60fps) and work on mobile.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), scroll down to the card, then hover (or tap on mobile) to see the interaction.

## Usage

```tsx
import { FeatureCard } from "@/components/FeatureCard";

<FeatureCard
  icon={<YourIcon />}
  title="Feature name"
  text="Short description of the feature."
/>
```

## File structure

- `src/components/FeatureCard/` – component and SCSS module
- `src/app/page.tsx` – demo page with one card in a centered container
