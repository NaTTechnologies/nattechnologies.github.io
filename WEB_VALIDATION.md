# Validación del sitio Cafetal OS 2.2.2

Fecha: 2026-07-21

## Destino

- Repositorio web: `NaTTechnologies/nattechnologies.github.io`.
- URL pública: `https://nattechnologies.github.io/`.
- Repositorio de la aplicación: `NaTTechnologies/CafetalOS`.

## Resultados

| Validación | Resultado |
|---|---|
| `npm ci` | Aprobado |
| Build Vite con base `/` | Aprobado |
| `npm audit --audit-level=high` | Sin vulnerabilidades altas |
| Documentos integrados | 22 |
| Capturas integradas | 20 |
| Licencia del sitio | MIT |
| Fuente principal | IBM Plex Sans mediante Google Fonts |
| Workflow GitHub Pages | Incluido |
| `.nojekyll` | Incluido |

## GitHub Pages

El build se valida con:

```bash
GITHUB_ACTIONS=true \
GITHUB_REPOSITORY=NaTTechnologies/nattechnologies.github.io \
npm run build
```

Al tratarse del repositorio especial `<cuenta>.github.io`, Vite utiliza `base: /` y no una subruta de proyecto.
