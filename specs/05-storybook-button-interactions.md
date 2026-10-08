# SPEC 05 — Ejemplo básico de Interactions para Button

> **Status:** Approved
> **Depends on:** SPEC 04
> **Date:** 2026-10-08
> **Objective:** Agregar una story de Button que simule un clic y verifique el foco mediante Interactions integrado en Storybook 10.

## Scope

**In:**

- Agregar `InteractionExample` en `src/components/ui/button/button.stories.tsx`.
- Usar una función `play` con `canvas`, `userEvent` y `expect` de `storybook/test`.
- Buscar el botón por rol y nombre accesible.
- Simular un clic y verificar que recibe foco.
- Mostrar la ejecución en el panel Interactions.

**Out of scope (for future specs):**

- Instalar `@storybook/addon-interactions` o cambiar la versión de Storybook.
- Modificar `Button` o sus tipos.
- Agregar `onClick`, Vitest, test-runner o CI.
- Probar navegación de enlaces, teclado u otros componentes.

## Data model

Esta feature no introduce estructuras de datos ni persistencia. Reutiliza `ButtonProps` y el tipo `Story` existentes.

## Implementation plan

1. Agregar `InteractionExample` al archivo de stories existente, con variante `primary`, texto `Interaction Example` y sin `href`. Conservar `Primary`, `Outline` y `AsLink`.
2. Importar `expect` desde `storybook/test` y agregar `play` a la nueva story. Buscar el botón con `canvas.getByRole`, comprobar que es visible, ejecutar `await userEvent.click` y comprobar el foco con `await expect(...).toHaveFocus()`. Añadir comentarios breves que expliquen las acciones.

Cada paso deja Storybook funcional. El único archivo de implementación que cambia es `src/components/ui/button/button.stories.tsx`.

## Acceptance criteria

- [ ] `pnpm storybook` muestra `UI/Button/Interaction Example`.
- [ ] La story renderiza un `<button>` con nombre accesible `Interaction Example`.
- [ ] `play` comprueba visibilidad, ejecuta un clic y verifica el foco.
- [ ] El panel Interactions muestra las acciones y aserciones sin fallos.
- [ ] Repetir la ejecución desde el panel vuelve a pasar con los args predeterminados.
- [ ] `Primary`, `Outline` y `AsLink` permanecen disponibles.
- [ ] `pnpm build-storybook`, `pnpm build` y `pnpm lint` terminan sin errores.
- [ ] No cambian dependencias, configuración de Storybook, componente ni tipos.

## Decisions

- **Yes:** Interactions integrado en Storybook 10.6.1. Evita instalar un paquete antiguo.
- **Yes:** clic y foco. Permite un ejemplo real sin ampliar la API de `Button`.
- **Yes:** story nueva. Mantiene las stories existentes sin cambios.
- **Yes:** consultas por rol y nombre accesible. No requiere selectores ni atributos de prueba.
- **Yes:** verificación manual en Interactions y builds existentes. Es suficiente para este ejemplo básico.
- **No:** callback `onClick`, runner automatizado o CI. Amplían innecesariamente el alcance.

## Risks

| Risk                                                                              | Mitigation                                                                                             |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Cambiar `href` o el texto desde Controls altera el elemento esperado por el test. | Verificar con los args predeterminados y restablecerlos antes de repetir.                              |
| Confundir un build exitoso con una prueba ejecutada.                              | Comprobar explícitamente el resultado de `play` en Interactions; el build no ejecuta estas aserciones. |

## What is **not** in this spec

- Instalación del addon antiguo.
- Cambios en `Button` o `ButtonProps`.
- Pruebas de callbacks, enlaces, teclado u otros componentes.
- Vitest, test-runner, CI o nuevas dependencias.

Cada uno de esos, si llega, va en su propia spec.
