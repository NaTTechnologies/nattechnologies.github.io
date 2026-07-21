const loaders = import.meta.glob('../../docs/*.md', { query: '?raw', import: 'default' })

export const documentationGroups = [
  {
    id: 'empezar',
    title: 'Usuarios y primeros pasos',
    icon: 'book',
    description: 'Instala, accede y aprende a trabajar con Cafetal OS.',
    docs: [
      { file: 'MANUAL_USUARIO.md', title: 'Manual de usuario', text: 'Recorrido funcional por las pantallas principales.' },
      { file: 'CONFIGURACION_Y_DEMO.md', title: 'Configuración y demo', text: 'Bases separadas, demostración y ajustes locales.' },
      { file: 'AUTENTICACION_USUARIOS.md', title: 'Autenticación y usuarios', text: 'Cuenta inicial, roles, sesiones y cambio de contraseña.' },
      { file: 'MODULOS.md', title: 'Catálogo de módulos', text: 'Alcance y capacidades de cada área del sistema.' },
      { file: 'DEMO.md', title: 'Datos de demostración', text: 'Contenido de la demo y cómo restaurarla.' },
    ],
  },
  {
    id: 'desarrollo',
    title: 'Desarrollo y arquitectura',
    icon: 'code',
    description: 'Comprende el repositorio y prepara un entorno de desarrollo.',
    docs: [
      { file: 'DESARROLLO.md', title: 'Guía de desarrollo', text: 'Entorno, scripts, convenciones y flujo de trabajo.' },
      { file: 'ARQUITECTURA.md', title: 'Arquitectura', text: 'Procesos, componentes y decisiones de diseño.' },
      { file: 'API_IPC.md', title: 'Contrato IPC', text: 'Comunicación segura entre Electron, preload y renderer.' },
      { file: 'MODELO_DATOS.md', title: 'Modelo de datos', text: 'Entidades, relaciones y persistencia local.' },
      { file: 'BUILD.md', title: 'Compilación y distribución', text: 'Construye y empaqueta para Windows, macOS y Linux.' },
      { file: 'MIGRACION_VUE.md', title: 'Migración a Vue', text: 'Estrategia incremental para modernizar módulos.' },
    ],
  },
  {
    id: 'calidad',
    title: 'Calidad, pruebas y releases',
    icon: 'shield',
    description: 'Valida cambios y publica versiones reproducibles.',
    docs: [
      { file: 'TESTING.md', title: 'Testing', text: 'Pruebas unitarias, componentes y E2E.' },
      { file: 'VALIDACION_TECNICA.md', title: 'Validación técnica', text: 'Criterios de calidad y riesgos conocidos.' },
      { file: 'RELEASE_CHECKLIST.md', title: 'Checklist de release', text: 'Controles antes de publicar una versión.' },
      { file: 'CAPTURAS_PLAYWRIGHT.md', title: 'Capturas con Playwright', text: 'Galerías desktop y móvil reproducibles.' },
      { file: 'RESPONSIVE_Y_MOVIL.md', title: 'Responsive y móvil', text: 'Drawer, tablas adaptativas y evolución futura.' },
      { file: 'ROADMAP.md', title: 'Roadmap', text: 'Prioridades y evolución planificada.' },
    ],
  },
  {
    id: 'experiencia',
    title: 'Diseño e identidad',
    icon: 'sparkles',
    description: 'Principios visuales, navegación y naming oficial.',
    docs: [
      { file: 'IDENTIDAD_VISUAL.md', title: 'Identidad visual', text: 'Logo, marca y uso correcto de Cafetal OS.' },
      { file: 'SISTEMA_VISUAL.md', title: 'Sistema visual', text: 'Colores, componentes y estilos de interfaz.' },
      { file: 'NAVEGACION_Y_UX.md', title: 'Navegación y UX', text: 'Estructura de información e interacción.' },
      { file: 'NAMING.md', title: 'Naming', text: 'Nombre oficial y convenciones del proyecto.' },
      { file: 'INVESTIGACION_Y_BENCHMARK.md', title: 'Investigación y benchmark', text: 'Referencias que orientan el producto.' },
    ],
  },
]

export const documentation = documentationGroups.flatMap((group) => group.docs.map((doc) => ({
  ...doc,
  groupId: group.id,
  groupTitle: group.title,
  slug: doc.file.replace(/\.md$/i, '').toLocaleLowerCase('es'),
})))

export function getDocument(slug) {
  return documentation.find((doc) => doc.slug === slug) || null
}

export async function loadDocument(file) {
  const entry = Object.entries(loaders).find(([path]) => path.endsWith(`/${file}`))
  if (!entry) throw new Error(`No se encontró el documento ${file}`)
  return entry[1]()
}
