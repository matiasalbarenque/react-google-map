# AGENTS.md

## Commands (pnpm — repo uses `pnpm-lock.yaml`)

- `pnpm dev` — Vite dev server
- `pnpm build` — typecheck + build (`tsc -b && vite build`); this is the typecheck, there is no separate script
- `pnpm lint` — `oxlint` (config in `.oxlintrc.json`; ignores `dist/**`, `storybook-static/**`)
- `pnpm storybook` / `pnpm build-storybook` — Storybook 10 dev / static build
- No test runner, no CI workflows, no formatter config in repo.

## Setup

- Copy `.env.template` to `.env` and set `VITE_GOOGLE_MAPS_API_KEY` (+ optional `VITE_GOOGLE_MAPS_MAP_ID`).
- Without the API key, `src/components/map/map.tsx` renders a fallback message instead of the map; missing Map ID falls back to `"DEMO_MAP_ID"` (no AdvancedMarker styling without a real ID).

## Architecture

- Entrypoints: `src/main.tsx` wraps `APIProvider` (key from `src/constants/env.ts`) around `RouterProvider`; routes in `src/router.tsx` (`/` → `HomePage`, `*` → `NotFoundPage`).
- `src/pages/home.tsx` composes sections in fixed order: Navbar, Hero, TrustedBy, Benefits, BigPicture, Specs, Testimonial, HowTo, Location, Contact, Footer.
- Component convention: `src/components/<name>/<name>.tsx` + `<name>.data.ts` (defaults/static data) + `index.ts` barrel. Props types live separately in `src/typings/components/<name>.ts` — add new component types there, not colocated.
- Import alias `@/*` → `src/*` (defined in both `vite.config.ts` and `tsconfig.app.json`). Always use `@/` imports, not relative paths out of the component folder.
- Styling: Tailwind CSS v4 (`@import "tailwindcss"` in `src/index.css`). Custom tokens in `@theme`: `olive, sage, mist, stone, slate` colors; `font-serif/sans/inter`. Use `bg-sage`, `font-serif`, etc.
- Maps: `@vis.gl/react-google-maps` (`Map`, `AdvancedMarker`). Defaults in `map.data.ts` (`DEFAULT_CENTER`, `DEFAULT_ZOOM`, `MARKERS`).

## TypeScript / lint constraints (`tsconfig.app.json`)

- `verbatimModuleSyntax`: type-only imports must use `import type`.
- `erasableSyntaxOnly`: no enums, namespaces, or parameter properties.
- `noUnusedLocals` + `noUnusedParameters`: fail the build — remove unused code instead of leaving it.
- `moduleDetection: force`: every file is a module; don't rely on global script scope.
- React Compiler is enabled via babel preset in `vite.config.ts`; follow rules of hooks (enforced as `error` in oxlint).
