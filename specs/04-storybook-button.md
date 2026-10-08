# SPEC 04 — Instalar Storybook y crear el story de Button

> **Status:** Implemented
> **Depends on:** SPEC 02
> **Date:** 2026-10-07
> **Objective:** Instalar Storybook 10 con `@storybook/react-vite` y crear el story de `Button` en su carpeta.

## Scope

**In:**

- Instalación con `pnpm` de Storybook 10: `storybook`, `@storybook/react-vite` y `@storybook/addon-addon-docs`, en versiones compatibles con React 19, Vite 8 y Tailwind v4.
- Configuración `.storybook/main.ts` con framework `@storybook/react-vite`, `stories` en `../src/**/*.stories.tsx`, addon `addon-docs` y alias `@/` hacia `./src`.
- Configuración `.storybook/preview.ts` que importa `../src/index.css` para que Tailwind v4 se vea igual que en la app.
- Scripts en `package.json`: `storybook` (dev en puerto 6006) y `build-storybook`.
- Story `src/components/ui/button/button.stories.tsx` con `tags: ['autodocs']`.
- Stories `Primary`, `Outline` y `AsLink` (con `href`), con controles para `variant`, `href`, `children` y `className`.
- El story importa `Button` vía `@/components/ui/button` y los tipos de `@/typings/components/ui/button`.

**Out of scope (for future specs):**

- Stories de otros componentes (`SectionLabel`, `Navbar`, resto de secciones).
- Addon de accesibilidad, test-runner, Vitest o Testing Library.
- Chromatic o despliegue de Storybook.
- Cambios en `src/components/ui/button/button.tsx` o `src/typings/components/ui/button.ts`.
- Modo oscuro, internacionalización, animaciones o formulario de contacto.

## Data model

Esta feature no introduce estructuras de datos nuevas. Reutiliza el modelo de SPEC 02:

```ts
// src/typings/components/ui/button.ts
export type ButtonVariant = 'primary' | 'outline';
export type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
};
```

## Implementation plan

1. Instalar dependencias de desarrollo con `pnpm add -D` (`storybook`, `@storybook/react-vite`, `@storybook/addon-addon-docs`).
2. Crear `.storybook/main.ts` con framework, glob de stories, addon addon-docs y alias `@/`.
3. Crear `.storybook/preview.ts` con el import de `../src/index.css`.
4. Agregar los scripts `storybook` y `build-storybook` en `package.json`.
5. Crear `src/components/ui/button/button.stories.tsx` con `Meta<typeof Button>`, `tags: ['autodocs']` y las stories `Primary`, `Outline` y `AsLink`.
6. Verificar `pnpm storybook` muestra el canvas y la página Docs de Button.
7. Verificar `pnpm build-storybook`, `pnpm build` y `pnpm lint` terminan sin errores.

## Acceptance criteria

- [ ] `pnpm storybook` arranca en el puerto 6006 sin errores.
- [ ] El canvas muestra `Primary`, `Outline` y `AsLink` con los estilos Tailwind iguales a la app.
- [ ] La página Docs (autodocs) documenta las props `variant`, `href`, `children` y `className`.
- [ ] Cambiar `variant` o `href` en Controls actualiza el canvas.
- [ ] `AsLink` renderiza un `<a href="...">` y el resto renderiza `<button>`.
- [ ] `pnpm build-storybook` termina sin errores.
- [ ] `pnpm build` termina sin errores de TypeScript.
- [ ] `pnpm lint` termina sin errores.
- [ ] No existe ningún otro archivo `*.stories.tsx` en el repo.

## Decisions

- **Yes:** Storybook 10 con `@storybook/react-vite`. Es la integración nativa para Vite 8 y React 19.
- **Yes:** instalación con `pnpm`. Es coherente con el `pnpm-lock.yaml` existente.
- **Yes:** story junto al componente en `src/components/ui/button/button.stories.tsx`. Es la convención fijada en SPEC 02.
- **Yes:** casos `Primary`, `Outline` y `AsLink`. Cubren las dos variantes y la rama `href` de `button.tsx`.
- **Yes:** addon `addon-docs` con `tags: ['autodocs']`. Da Controls y Docs sin configuración extra.
- **Yes:** importar `src/index.css` en `preview.ts`. Sin esto Tailwind v4 se ve distinto que en la app.
- **Yes:** reutilizar el alias `@/` en `.storybook/main.ts`. El componente ya lo usa en su import de tipos.
- **No:** addon a11y, test-runner, Vitest o Chromatic en esta spec. Van en specs propias si llegan.
- **No:** modificar `button.tsx` o sus tipos. Solo se agrega el story.

## Risks

| Risk                                                    | Mitigation                                                                                             |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Versión de Storybook incompatible con React 19 o Vite 8 | Fijar las versiones instaladas y verificar `pnpm storybook` y `pnpm build-storybook` en el paso final. |
| Tailwind v4 no se aplica dentro del canvas              | `preview.ts` importa `src/index.css`; la aceptación exige estilos iguales a la app.                    |
| El alias `@/` no resuelve en Storybook                  | Se configura en `.storybook/main.ts`; el criterio de `build-storybook` lo detecta.                     |

## What is **not** in this spec

- Stories de otros componentes.
- Accesibilidad, tests, test-runner o Vitest.
- Chromatic o despliegue de Storybook.
- Cambios en `Button` o sus tipos.

Cada uno de esos, si llega, va en su propia spec.
