# react-google-map

"Area" landing page built with React + TypeScript + Vite, featuring an integrated Google Maps map (`@vis.gl/react-google-maps`), Tailwind CSS v4, and Storybook.

It includes the Navbar, Hero, TrustedBy, Benefits, BigPicture, Specs, Testimonial, HowTo, Location (map), Contact, and Footer sections, composed in `src/pages/home.tsx`.

## Requirements

- Node.js + pnpm
- Google Maps API key (and optionally a Map ID)

## Setup

```bash
pnpm install
cp .env.template .env
```

Fill in the `.env`:

```bash
VITE_GOOGLE_MAPS_API_KEY="your-api-key"
VITE_GOOGLE_MAPS_MAP_ID="your-map-id"
```

## Commands

```bash
pnpm dev              # dev server
pnpm build            # typecheck (tsc -b) + Vite build
pnpm lint             # oxlint
pnpm storybook        # Storybook at http://localhost:6006
pnpm build-storybook  # static Storybook build
```

## Basic example: using the map

The `APIProvider` is already mounted in `src/main.tsx`. To render a map with custom markers:

```tsx
import { Map } from "@/components/map";

export const MySection = () => (
  <Map
    center={{ lat: -34.6037, lng: -58.3816 }}
    zoom={12}
    markers={[
      { id: "palermo", position: { lat: -34.5889, lng: -58.4306 } },
      { id: "san-telmo", position: { lat: -34.6212, lng: -58.3731 } },
    ]}
  />
);
```

The default values (`DEFAULT_CENTER`, `DEFAULT_ZOOM`, `MARKERS`) live in `src/components/map/map.data.ts`. If `VITE_GOOGLE_MAPS_API_KEY` is missing, the component renders a fallback message instead of the map.
