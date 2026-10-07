# SPEC 01 — Mapa básico de Google Maps

> **Status:** Approved
> **Depends on:** —
> **Date:** 2026-10-06
> **Objective:** Renderizar un mapa de Google Maps con un marcador fijo en Buenos Aires dentro de `src/components/map.tsx`, mostrado en `HomePage`.

## Scope

**In:**

- Instalar `@vis.gl/react-google-maps`.
- API key desde la variable `VITE_GOOGLE_MAPS_API_KEY`.
- Map ID desde la variable `VITE_GOOGLE_MAPS_MAP_ID`, con fallback a `"DEMO_MAP_ID"`.
- `<APIProvider>` global en `src/main.tsx`.
- Mapa en `src/components/map.tsx` centrado en Buenos Aires (`-34.6037, -58.3816`), zoom 12.
- Un `<AdvancedMarker>` en el centro.
- Controles por defecto (zoom y pan).
- Contenedor fijo `w-full h-[500px]`.
- Mensaje dentro del contenedor si falta la API key.
- Renderizar `<Map />` en `HomePage` debajo del `h1` "Hello world!" existente, sin modificarlo.

**Out of scope (for future specs):**

- Centrar el mapa en la ubicación del usuario (geolocalización).
- Múltiples marcadores o marcadores dinámicos.
- InfoWindow, búsqueda, rutas.
- Map ID propio con estilos en Google Cloud.
- Ruta dedicada `/map`.

## Data model

Esta feature no introduce estructuras de datos. Solo constantes y variables de entorno:

```ts
// src/components/map.tsx
const DEFAULT_CENTER = { lat: -34.6037, lng: -58.3816 };
const DEFAULT_ZOOM = 12;
```

```dotenv
# .env.template (versionado)
VITE_GOOGLE_MAPS_API_KEY=
VITE_GOOGLE_MAPS_MAP_ID=
```

La key real va en `.env`, que ya está ignorado por la regla `.env` del `.gitignore`.

## Implementation plan

1. Instalar la dependencia: `pnpm add @vis.gl/react-google-maps`.
2. Crear `.env.template` con las dos variables vacías.
3. Crear `.env` con la key real (paso manual, no versionado).
4. En `src/main.tsx`, envolver `<RouterProvider>` con `<APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? ""}>`.
5. En `src/components/map.tsx`:
   - Importar `Map as GoogleMap` y `AdvancedMarker` (alias para evitar choque con el componente `Map`).
   - Si no hay key, renderizar un aviso dentro del contenedor `w-full h-[500px]`.
   - Si hay key, renderizar `<GoogleMap>` con `defaultCenter`, `defaultZoom`, `mapId` y un `<AdvancedMarker position={DEFAULT_CENTER} />`.
6. En `src/pages/home.tsx`, devolver un fragmento con el `h1` existente y `<Map />` debajo.

## Acceptance criteria

- [ ] `pnpm build` termina sin errores de TypeScript.
- [ ] `pnpm lint` termina sin errores.
- [ ] Con una key válida, en `/` se ve "Hello world!" y debajo el mapa.
- [ ] El mapa ocupa todo el ancho y 500px de alto.
- [ ] El mapa abre centrado en Buenos Aires con zoom 12.
- [ ] Hay un marcador visible en el centro.
- [ ] Se puede hacer zoom (botones o rueda) y arrastrar el mapa.
- [ ] Sin la variable de key, el contenedor muestra el mensaje de aviso y la página no se rompe.
- [ ] `.env` no aparece en `git status`.
- [ ] Con key válida no hay errores de Google Maps en la consola.

## Decisions

- **Yes:** `@vis.gl/react-google-maps`. Librería recomendada por Google, compatible con React 19.
- **No:** `@react-google-maps/api`. Mantenimiento más lento, soporte de React 19 incierto.
- **No:** carga manual con `js-api-loader`. Más código sin beneficio para un mapa básico.
- **Yes:** `APIProvider` global en `main.tsx`. Prepara la app para múltiples mapas a futuro.
- **Yes:** `AdvancedMarker`. El `Marker` clásico está deprecado.
- **Yes:** fallback `DEMO_MAP_ID`. Funciona sin configuración extra y permite un ID real después.
- **Yes:** contenedor fijo `w-full h-[500px]`. Simple y predecible.
- **No:** pantalla completa o tamaño por props. Innecesario por ahora.
- **Yes:** mensaje visible si falta la key. Mejor que el error genérico de Google o romper la página.
- **No:** geolocalización. Se deja para una spec futura.

## Risks

| Risk                                                                 | Mitigation                                                                                          |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Sin key, `APIProvider` intenta cargar el script y genera error en consola | `Map` no renderiza `<GoogleMap>` y muestra el aviso; el error de consola se acepta en ese caso.     |
| API key expuesta en el bundle del cliente                            | Es inherente a Maps JS; restringir la key por HTTP referrer en Google Cloud Console.                |
| `DEMO_MAP_ID` no apto para producción                                | Configurar `VITE_GOOGLE_MAPS_MAP_ID` cuando sea necesario.                                          |

## What is **not** in this spec

- Geolocalización del usuario.
- Múltiples marcadores, InfoWindow, búsqueda o rutas.
- Estilos personalizados de mapa.
- Ruta `/map` dedicada.

Cada uno de esos, si llega, va en su propia spec.
