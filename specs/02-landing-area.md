# SPEC 02 — Landing "Area" (réplica de plugin-value-scrum.figma.site)

> **Status:** Implemented
> **Depends on:** SPEC 01
> **Date:** 2026-10-06
> **Objective:** Replicar la landing de https://plugin-value-scrum.figma.site/ en `HomePage`, con cada componente en su propia carpeta dentro de `src/components/` y sus props tipadas en `src/typings/components/`.

## Scope

**In:**

- La landing reemplaza el contenido de `HomePage` (`/`). Se quitan el `h1` "Hello world!" y el `<Map />` de la home.
- Mover `map.tsx` a `src/components/map/` y tipar sus props, sin cambiar su comportamiento.
- Secciones, cada una en su carpeta y en este orden:
  1. **Navbar**: logo, links (Benefits, Specifications, How-to, Contact Us) y CTA "Learn More". En mobile, menú hamburguesa con toggle.
  2. **Hero**: título principal e imagen.
  3. **TrustedBy**: etiqueta "Trusted by:" y 6 logos.
  4. **Benefits** (`#benefits`): encabezado y grilla de 4 tarjetas con ícono, título y descripción.
  5. **BigPicture**: imagen, título, descripción, lista numerada 01–04 y CTA.
  6. **Specs** (`#specifications`): texto, CTA y tabla comparativa de 3 columnas (Area / WebSurge / HyperView) con íconos de check, parcial y cruz.
  7. **Testimonial**: imagen, cita, autor y cargo.
  8. **HowTo** (`#how-to`): título, CTA, 3 pasos numerados e imagen.
  9. **Contact** (`#contact`): título, texto y CTA.
  10. **Footer**: logo, links, ícono y copyright con año.
- Componentes UI: `Button` (variantes `primary` / `outline`) y `SectionLabel`.
- Las secciones reciben su contenido por props, con valores por defecto definidos en `<nombre>.data.ts`.
- Nueva carpeta `src/typings/components/` con un archivo de tipos por componente.
- Assets descargados de `/_assets/v11/*` a `src/assets/landing/`.
- Fuentes Crimson Text (títulos), DM Sans (cuerpo) e Inter desde Google Fonts.
- Tokens de color en `@theme` (Tailwind v4): `#485C11`, `#8E9C78`, `#E9E9E9`, `#929292` y `#6F6F6F`.
- Navegación por anclas con scroll suave.
- Diseño responsive para mobile, tablet y desktop.

**Out of scope (for future specs):**

- Tests unitarios (`*.test.tsx`) y la configuración de Vitest/Testing Library.
- Stories (`*.stories.tsx`) y la instalación de Storybook.
- Animaciones o efectos al hacer scroll.
- Formulario de contacto real (los CTA solo apuntan a anclas).
- Internacionalización (el contenido se deja en inglés, como el original).
- Modo oscuro.

## Estructura de archivos

```
src/
  assets/landing/
  components/
    ui/
      button/
        button.tsx
        index.ts
      section-label/
        section-label.tsx
        index.ts
    map/
      map.tsx
      map.data.ts
      index.ts
    navbar/
      navbar.tsx
      navbar.data.ts
      index.ts
    hero/            (hero.tsx, hero.data.ts, index.ts)
    trusted-by/      (trusted-by.tsx, trusted-by.data.ts, index.ts)
    benefits/        (benefits.tsx, benefits.data.ts, index.ts)
    big-picture/     (big-picture.tsx, big-picture.data.ts, index.ts)
    specs/           (specs.tsx, specs.data.ts, index.ts)
    testimonial/     (testimonial.tsx, testimonial.data.ts, index.ts)
    how-to/          (how-to.tsx, how-to.data.ts, index.ts)
    contact/         (contact.tsx, contact.data.ts, index.ts)
    footer/          (footer.tsx, footer.data.ts, index.ts)
  constants/
    navigation.ts    # NAV_LINKS compartido por Navbar y Footer
  typings/
    components/
      ui/
        button.ts
        section-label.ts
      shared.ts
      map.ts
      navbar.ts
      hero.ts
      trusted-by.ts
      benefits.ts
      big-picture.ts
      specs.ts
      testimonial.ts
      how-to.ts
      contact.ts
      footer.ts
  pages/home.tsx
```

**Convenciones:**

- Archivos en kebab-case.
- `<nombre>.tsx` contiene el componente, con export nombrado (`export const Navbar = () => …`).
- `<nombre>.data.ts` contiene el contenido por defecto, tipado con los tipos de `typings`.
- `index.ts` es un barrel que solo reexporta: `export { Navbar } from "./navbar";`.
- Los archivos de `typings` solo tienen `export type …`, sin lógica ni valores.
- Más adelante se agregan `<nombre>.test.tsx` y `<nombre>.stories.tsx` dentro de la carpeta de cada componente, sin mover nada.

## Data model (typings)

```ts
// typings/components/shared.ts
export type ImageAsset = { src: string; alt: string };
export type NavLink = { label: string; href: string };
export type Step = { number: string; title: string; description?: string };

// typings/components/ui/button.ts
export type ButtonVariant = "primary" | "outline";
export type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
};

// typings/components/ui/section-label.ts
export type SectionLabelProps = { children: React.ReactNode; className?: string };

// typings/components/map.ts
export type LatLng = { lat: number; lng: number };
export type MapMarker = { id: string; position: LatLng };
export type MapProps = { center?: LatLng; zoom?: number; markers?: MapMarker[] };

// typings/components/navbar.ts
export type NavbarProps = { logo?: ImageAsset; links?: NavLink[]; ctaLabel?: string; ctaHref?: string };

// typings/components/hero.ts
export type HeroProps = { title?: string; image?: ImageAsset };

// typings/components/trusted-by.ts
export type TrustedByProps = { label?: string; logos?: ImageAsset[] };

// typings/components/benefits.ts
export type Benefit = { id: string; icon: ImageAsset; title: string; description: string };
export type BenefitsProps = { label?: string; title?: string; subtitle?: string; items?: Benefit[] };

// typings/components/big-picture.ts
export type BigPictureProps = {
  image?: ImageAsset;
  title?: string;
  description?: string;
  steps?: Step[];
  ctaLabel?: string;
};

// typings/components/specs.ts
export type FeatureStatus = "yes" | "partial" | "no";
export type Feature = { label: string; status: FeatureStatus };
export type Competitor = { name: string; highlighted?: boolean; features: Feature[] };
export type SpecsProps = {
  label?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  competitors?: Competitor[];
};

// typings/components/testimonial.ts
export type TestimonialProps = { image?: ImageAsset; quote?: string; author?: string; role?: string };

// typings/components/how-to.ts
export type HowToProps = { title?: string; ctaLabel?: string; steps?: Step[]; image?: ImageAsset };

// typings/components/contact.ts
export type ContactProps = { title?: string; description?: string; ctaLabel?: string; ctaHref?: string };

// typings/components/footer.ts
export type FooterProps = { logo?: ImageAsset; links?: NavLink[]; year?: number; copyright?: string };
```

Patrón de uso de los valores por defecto:

```ts
import type { BenefitsProps } from "@/typings/components/benefits";
import { BENEFITS_DEFAULTS } from "./benefits.data";

export const Benefits = ({ items = BENEFITS_DEFAULTS.items, ...rest }: BenefitsProps) => { … };
```

- `NAV_LINKS` vive en `src/constants/navigation.ts` y es el valor por defecto de Navbar y Footer.
- `map.data.ts` conserva el `DEFAULT_CENTER`, el `DEFAULT_ZOOM` y los `MARKERS` actuales.

## Implementation plan

1. Descargar los assets del sitio a `src/assets/landing/` con nombres descriptivos (`logo.svg`, `hero.png`, `icon-insights.svg`, `check.svg`, `partial.svg`, `cross.svg`, `logo-1.png`…`logo-6.png`, etc.).
2. Agregar el `<link>` de Google Fonts (Crimson Text, DM Sans, Inter) en `index.html`.
3. En `src/index.css`:
   - Quitar las reglas de plantilla de Vite (`#root` con ancho fijo, borde y centrado; estilos globales de `h1`/`h2`; variables del modo oscuro).
   - Agregar `@theme` con los colores y las fuentes (`--font-serif`, `--font-sans`).
   - Agregar `html { scroll-behavior: smooth; }`.
4. Revisar que el alias `@/` esté configurado en `tsconfig.app.json` y `vite.config.ts` (ya lo usa `map.tsx`).
5. Crear `src/typings/components/` con todos los archivos de tipos.
6. Mover `components/map.tsx` a `components/map/map.tsx`, crear `map.data.ts` e `index.ts`, tipar con `MapProps` y actualizar los imports.
7. Crear `ui/button/` y `ui/section-label/`.
8. Crear `src/constants/navigation.ts` con `NAV_LINKS`.
9. Crear las 10 carpetas de sección, cada una con `.tsx`, `.data.ts` e `index.ts`.
10. Navbar: `useState` para el menú mobile, `aria-expanded` en el botón y cierre del menú al elegir un link.
11. Specs: mapear `FeatureStatus` al ícono correspondiente (check, parcial o cruz).
12. `home.tsx`: devolver `<Navbar />`, `<main>` con las secciones y `<Footer />`, importando desde `@/components/<nombre>`.
13. Comparar visualmente con el original en 375px, 768px y 1440px.

## Acceptance criteria

- [ ] `pnpm build` termina sin errores de TypeScript.
- [ ] `pnpm lint` termina sin errores.
- [ ] Cada componente, incluido `map`, vive en `src/components/<nombre>/` con `<nombre>.tsx` e `index.ts`.
- [ ] Cada componente tiene su archivo en `src/typings/components/` (respetando `ui/`) con `export type <Nombre>Props`.
- [ ] Los archivos de `typings` solo contienen exports de tipos.
- [ ] Ninguna sección está implementada en `home.tsx`.
- [ ] Todas las secciones renderizan bien sin props, usando los valores por defecto de `.data.ts`.
- [ ] Pasar props personalizadas reemplaza el contenido por defecto.
- [ ] `/` muestra las 10 secciones en el orden del original.
- [ ] Los links del navbar hacen scroll suave a su sección.
- [ ] En menos de 768px se ve la hamburguesa, el menú abre y cierra, y se cierra al elegir un link.
- [ ] Ninguna imagen se carga desde `figma.site`: todas salen de `src/assets/landing/`.
- [ ] Los títulos usan Crimson Text y el cuerpo DM Sans.
- [ ] La tabla Specs muestra el ícono correcto para cada estado.
- [ ] No hay scroll horizontal en 375px.
- [ ] `<Map />` funciona igual que antes cuando se renderiza sin props.

## Decisions

- **Yes:** reemplazar la Home. **No:** una ruta nueva para la landing.
- **Yes:** una carpeta por componente con barrel `index.ts`. Así el test y la story se agregan después sin tocar los imports.
- **Yes:** mover `map` a su carpeta por uniformidad.
- **Yes:** tipos centralizados en `src/typings/components/`, con la misma estructura que `components`. **No:** definir las props dentro del `.tsx`.
- **Yes:** contenido por props con valores por defecto en `.data.ts`, para que tests y stories puedan inyectar datos.
- **Yes:** `shared.ts` para los tipos compartidos (`NavLink`, `Step`, `ImageAsset`).
- **Yes:** assets locales. **No:** hotlink a figma.site, porque puede romperse.
- **Yes:** Tailwind v4 `@theme` para los tokens. **No:** CSS modules ni styled-components.
- **Yes:** Google Fonts. **No:** usar los woff2 de figma.site.
- **Yes:** archivos en kebab-case, igual que los archivos existentes.
- **No:** librerías de íconos o animación.

## Risks

| Risk | Mitigation |
| --- | --- |
| Licencia de los assets de la plantilla Figma | Usarlos solo como demo y reemplazarlos por assets propios en producción. |
| Al mover `map.tsx` pueden quedar imports rotos | `pnpm build` lo detecta; hoy solo lo importa `home.tsx`. |
| Las reglas actuales de `index.css` rompen el layout | Se limpian en el paso 3. |
| Pequeñas diferencias de espaciado frente al original | Revisión visual en 3 breakpoints (paso 13). |
| El HTML del sitio duplica el contenido por breakpoint | Se implementa una sola versión responsive. |

## What is **not** in this spec

- Tests unitarios y Storybook.
- Animaciones, formulario de contacto, i18n y modo oscuro.

Cada uno de esos, si llega, va en su propia spec.
