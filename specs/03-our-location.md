# SPEC 03 — Sección "Our Location" con mapa

> **Status:** Approved
> **Depends on:** SPEC 02
> **Date:** 2026-10-07
> **Objective:** Agregar una sección "Our Location" entre HowTo y Contact que renderice el `<Map />` existente dentro de un marco con bordes redondeados.

## Scope

**In:**

- Nuevo componente `Location` en `src/components/location/` con `location.tsx`, `location.data.ts` e `index.ts`.
- Nuevo tipo en `src/typings/components/location.ts` (`LocationProps` con `title`, `ctaLabel`, `ctaHref`).
- La sección muestra título "Our Location" con el mismo estilo `h2` de `how-to.tsx` y CTA `Button` ("Get Started" → `#contact`) en la fila superior, igual que HowTo.
- El mapa se renderiza con `<Map />` sin props (reutiliza `DEFAULT_CENTER`, `DEFAULT_ZOOM` y `MARKERS` de `map.data.ts`).
- El mapa va envuelto en `div` con `overflow-hidden rounded-[30px]`, igual que `how-to.tsx:34`.
- El aviso por falta de API key se muestra centrado con altura mínima dentro del marco redondeado.
- `home.tsx` inserta `<Location />` entre `<HowTo />` y `<Contact />`.
- Contenedor de sección con el mismo ancho y paddings que HowTo (`mx-auto max-w-[1200px]`, `px-6 md:px-10`).

**Out of scope (for future specs):**

- Cambiar centro, zoom o marcadores del mapa.
- Modificar `src/components/map/map.tsx` o `map.data.ts`.
- Agregar texto descriptivo, SectionLabel o ancla `#location` en la navegación.
- Geolocalización, InfoWindow, rutas o estilos custom del mapa.

## Data model

Esta feature no introduce estructuras de datos nuevas. Reutiliza el modelo de SPEC 02 y agrega solo props con defaults:

```ts
// src/typings/components/location.ts
export type LocationProps = {
  title?: string;
  ctaLabel?: string;
  ctaHref?: string;
};
```

```ts
// src/components/location/location.data.ts
export const LOCATION_DEFAULTS: Required<LocationProps> = {
  title: "Our Location",
  ctaLabel: "Get Started",
  ctaHref: "#contact",
};
```

## Implementation plan

1. Crear `src/typings/components/location.ts` con `LocationProps`.
2. Crear `src/components/location/location.data.ts` con `LOCATION_DEFAULTS`.
3. Crear `src/components/location/location.tsx` que renderice sección, fila título + `Button`, y el marco `overflow-hidden rounded-[30px]` con `<Map />` dentro; si falta la key, el aviso de `Map` queda centrado con `min-h` dentro del marco.
4. Crear `src/components/location/index.ts` como barrel (`export { Location } from "./location"`).
5. Editar `src/pages/home.tsx` para importar y renderizar `<Location />` entre `<HowTo />` y `<Contact />`.
6. Verificar visualmente en 375px, 768px y 1440px que el marco redondeado coincide con el de las imágenes.

## Acceptance criteria

- [ ] `pnpm build` termina sin errores de TypeScript.
- [ ] `pnpm lint` termina sin errores.
- [ ] `/` muestra "Our Location" debajo de "Map Your Success" y encima de la sección Contact.
- [ ] El título usa el mismo estilo `h2` de HowTo y el CTA "Get Started" apunta a `#contact`.
- [ ] El mapa se ve dentro de un marco con `rounded-[30px]` y sin esquinas cuadradas visibles.
- [ ] El mapa abre centrado en Buenos Aires con zoom 12 y su marcador, igual que antes.
- [ ] Sin `VITE_GOOGLE_MAPS_API_KEY`, el marco muestra el aviso centrado y la página no se rompe.
- [ ] `Location` funciona sin props (usa `LOCATION_DEFAULTS`) y acepta props personalizadas.
- [ ] No hay scroll horizontal en 375px.

## Decisions

- **Yes:** componente nuevo `location/` en vez de meter el mapa en `HowTo`. Respeta la convención de SPEC 02 (una carpeta por sección).
- **No:** modificar `map.tsx`. El redondeado lo aporta el wrapper de la sección, no el mapa.
- **Yes:** `overflow-hidden rounded-[30px]`. Copia exacta de `how-to.tsx:34` para consistencia visual.
- **Yes:** fila título + CTA como HowTo, con "Get Started" → `#contact`. Consistencia con la sección anterior.
- **Yes:** mismo `h2`, sin `SectionLabel`. Lo confirmado en clarificación.
- **Yes:** aviso de key faltante centrado con altura mínima dentro del marco. Mejor que un `<p>` pegado al borde.
- **No:** cambiar centro/zoom/marcadores. Se reutilizan los defaults actuales.
- **No:** ancla `#location` en navbar. No se pidió navegación nueva.

## What is **not** in this spec

- Nuevo centro, zoom o marcadores.
- Cambios en `map.tsx` / `map.data.ts`.
- Texto descriptivo, SectionLabel o link de navegación.
- Geolocalización, InfoWindow, rutas o estilos custom del mapa.

Cada uno de esos, si llega, va en su propia spec.
