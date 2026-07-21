# Cafetal OS Web

Sitio oficial, centro de documentación y punto de entrada para la comunidad de **Cafetal OS**.

Cafetal OS es una plataforma open source, local-first, orientada a la gestión de fincas cafetaleras, lotes, cosechas, inventario, costos, calidad, sostenibilidad y trazabilidad.

## Qué incluye este repositorio

- Landing page responsive de Cafetal OS.
- Catálogo navegable de los 17 módulos funcionales y el panel de resumen.
- Biblioteca de documentación Markdown renderizada dentro del sitio.
- Página de comunidad y rutas claras de contribución.
- Vistas conceptuales locales del producto, sin imágenes de terceros.
- Metadatos SEO y datos estructurados de software.
- Plantillas para issues y pull requests.
- Integración continua y despliegue opcional en GitHub Pages.

## Stack

- Vue 3
- Vue Router
- Vite
- Tailwind CSS
- Marked
- DOMPurify

## Requisitos

- Node.js 22.12 o superior.
- npm 10 o superior.

## Desarrollo

```bash
npm ci
npm run dev
```

La aplicación estará disponible normalmente en `http://localhost:5173`.

## Validación

```bash
npm run build
npm run check
```

`npm run check` compila la web y ejecuta la auditoría de dependencias con umbral alto.

## Configuración del proyecto

Los enlaces públicos se centralizan en:

```text
src/config/site.js
```

Antes de publicar, confirma:

- Organización y repositorio de GitHub.
- URL de Discussions.
- URL de Issues y Releases.
- Correo comunitario.
- Política de seguridad.

## Documentación

Los documentos fuente se mantienen en `docs/`. La web los carga directamente durante el build mediante `import.meta.glob`, por lo que no es necesario duplicarlos en `public/`.

Para agregar un documento:

1. Crea el archivo Markdown dentro de `docs/`.
2. Regístralo en `src/data/documentation.js`.
3. Ejecuta `npm run build`.

## Despliegue en GitHub Pages

Este repositorio está diseñado para publicarse directamente desde `NaTTechnologies/nattechnologies.github.io`. El código fuente Vue permanece en la rama `main`; el workflow `.github/workflows/deploy-pages.yml` instala dependencias, ejecuta `npm run build` y publica únicamente `dist/` como artefacto de GitHub Pages.

La dirección pública es `https://nattechnologies.github.io/`. En **Settings → Pages** selecciona **GitHub Actions** como origen.

## Comunidad

Lee antes de colaborar:

- [CONTRIBUTING.md](CONTRIBUTING.md)
- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)
- [SECURITY.md](SECURITY.md)
- [GOVERNANCE.md](GOVERNANCE.md)
- [TRADEMARKS.md](TRADEMARKS.md)
- [WEB_VALIDATION.md](WEB_VALIDATION.md)

## Licencia

El código de este sitio se distribuye bajo la **licencia MIT**. Consulta [LICENSE](LICENSE).

Los nombres, logotipos e identidad visual de Cafetal OS y NaT Lab se administran por separado según [TRADEMARKS.md](TRADEMARKS.md).
