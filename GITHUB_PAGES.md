# Publicar en NaTTechnologies.github.io

Este proyecto corresponde al repositorio de sitio raíz de la cuenta:

```text
NaTTechnologies/nattechnologies.github.io
```

Por esa razón, la URL pública es:

```text
https://nattechnologies.github.io/
```

No se utiliza la subruta `/CafetalOS/`.

## Estructura

El código fuente Vue se mantiene directamente en la rama `main`:

```text
src/
public/
docs/
package.json
vite.config.js
.github/workflows/deploy-pages.yml
```

GitHub Actions genera `dist/` y lo publica como artefacto de Pages. No es necesario versionar `dist/` ni crear una rama `gh-pages`.

## Publicación

1. Sube el contenido del proyecto a la raíz del repositorio.
2. Abre **Settings → Pages**.
3. En **Source**, selecciona **GitHub Actions**.
4. Realiza un `push` a `main` o ejecuta manualmente el workflow **Deploy Cafetal OS Website to GitHub Pages**.
5. Verifica que los jobs `build` y `deploy` terminen correctamente.

## Compilación local

```bash
npm ci
npm run build
npm run preview
```

## Relación con la aplicación

La aplicación Electron continúa en `NaTTechnologies/CafetalOS`. Este repositorio contiene únicamente el sitio web oficial y enlaza al repositorio de la aplicación para releases, issues, documentación técnica y contribuciones.
