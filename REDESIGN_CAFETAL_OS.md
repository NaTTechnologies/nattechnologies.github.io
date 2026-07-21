# Rediseño web de Cafetal OS

## Objetivo

Convertir una landing sencilla en el sitio oficial, biblioteca documental y centro de comunidad de Cafetal OS.

## Cambios implementados

- Identidad pública actualizada a Cafetal OS.
- Logo incorporado como icono principal y favicon.
- Sistema de iconografía SVG consistente.
- Navegación responsive para producto, módulos, documentación, comunidad y roadmap.
- Catálogo basado en los módulos reales de la aplicación.
- Documentación Markdown renderizada dentro del sitio con sanitización HTML.
- Buscador de documentación y filtros de módulos.
- Capturas conceptuales locales del producto.
- Controles accesibles para menú, FAQ, roadmap, carrusel y diálogos.
- Rutas compatibles con GitHub Pages mediante hash routing y assets relativos.
- Archivos de licencia, contribución, seguridad, soporte, gobernanza y marcas.
- Integración continua y despliegue automático en GitHub Pages.

## Configuración pendiente antes de publicar

Edita `src/config/site.js` para confirmar:

- Organización y repositorio definitivo.
- URLs de Discussions, Issues y Releases.
- Correo de comunidad y seguridad.

## Validación

```bash
npm ci
npm run check
```
