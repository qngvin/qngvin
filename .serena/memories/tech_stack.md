# Tech Stack

## Core Frameworks
- **Runtime**: Node.js (Active LTS v20 recommended in tsconfig `@types/node`).
- **Language**: TypeScript v5.
- **Framework**: Next.js v16.2.2 (v16 is Next.js 16/Next 15 with React 19).
- **Frontend library**: React v19.2.3.

## Key Libraries & Tools
- **Styling**: Tailwind CSS v4 (using `@tailwindcss/postcss` v4).
- **Animations**: Framer Motion v12 (`framer-motion` and `motion`).
- **Internationalization**: `next-intl` v4.8.3. Handles language cookie-based storage under `NEXT_LOCALE`.
- **CSS Class Merging**: `clsx` and `tailwind-merge` (via `lib/utils.ts` `cn(...)` utility).

## Package Management
- **Manager**: npm (has `package-lock.json`). Do not use yarn or pnpm.
