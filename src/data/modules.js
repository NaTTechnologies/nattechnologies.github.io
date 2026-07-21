export const modules = [
  {
    "id": "acceso",
    "nombre": "Acceso local",
    "icon": "lock",
    "categoria": "sistema",
    "descripcion": "Inicio de sesión local, usuarios y roles.",
    "descripcionLarga": "Protege el acceso a la aplicación mediante cuentas almacenadas localmente, contraseñas derivadas con scrypt y sesiones vinculadas a cada ventana.",
    "tech": [
      "Electron",
      "scrypt"
    ],
    "funciones": [
      "Inicio de sesión local",
      "Usuarios múltiples",
      "Roles Administrador y Usuario",
      "Cambio de contraseña"
    ],
    "screenshot": "screenshots/00-inicio-sesion.png"
  },
  {
    "id": "inicio",
    "nombre": "Resumen",
    "icon": "chart",
    "categoria": "operacion",
    "descripcion": "Indicadores de producción, actividad reciente y accesos rápidos.",
    "descripcionLarga": "Un panel de control para consultar lotes activos, área cultivada, cosecha del período, inventario y movimientos recientes sin recorrer múltiples pantallas.",
    "tech": [
      "Vue 3",
      "Chart.js"
    ],
    "funciones": [
      "KPIs operativos",
      "Producción reciente",
      "Inventario estimado",
      "Accesos rápidos"
    ],
    "screenshot": "screenshots/01-resumen.png"
  },
  {
    "id": "finca",
    "nombre": "Mi finca",
    "icon": "farm",
    "categoria": "operacion",
    "descripcion": "Información general, ubicación, superficie y certificaciones.",
    "descripcionLarga": "Centraliza los datos esenciales de la unidad productiva y ofrece un punto de partida consistente para los demás registros de Cafetal OS.",
    "tech": [
      "SQL.js",
      "Electron"
    ],
    "funciones": [
      "Datos generales",
      "Ubicación y altitud",
      "Área total y cultivada",
      "Certificaciones"
    ],
    "screenshot": "screenshots/02-mi-finca.png"
  },
  {
    "id": "lotes",
    "nombre": "Lotes",
    "icon": "map",
    "categoria": "operacion",
    "descripcion": "Parcelas, variedades, área, edad, alertas y seguimiento.",
    "descripcionLarga": "Organiza la finca por lotes para mantener información agronómica, variedades, área cultivada, fechas, alertas y antecedentes asociados a cada parcela.",
    "tech": [
      "SQL.js",
      "Vue 3"
    ],
    "funciones": [
      "Registro por parcela",
      "Variedades",
      "Alertas activas",
      "Historial del lote"
    ],
    "screenshot": "screenshots/03-lotes.png"
  },
  {
    "id": "cosecha",
    "nombre": "Cosecha",
    "icon": "harvest",
    "categoria": "operacion",
    "descripcion": "Cortes diarios, recolectores, cantidades y pagos.",
    "descripcionLarga": "Registra la cosecha por fecha, lote y recolector para entender el avance productivo y mantener trazabilidad desde el origen.",
    "tech": [
      "SQL.js",
      "Vue 3"
    ],
    "funciones": [
      "Registro diario",
      "Recolectores",
      "Latas y kilos",
      "Pagos estimados"
    ],
    "screenshot": "screenshots/04-cosecha.png"
  },
  {
    "id": "beneficio",
    "nombre": "Beneficio",
    "icon": "factory",
    "categoria": "operacion",
    "descripcion": "Procesamiento de café y rendimiento entre etapas.",
    "descripcionLarga": "Documenta los procesos de beneficio y compara entradas y salidas para analizar el rendimiento de transformación del café.",
    "tech": [
      "SQL.js"
    ],
    "funciones": [
      "Registro de procesos",
      "Rendimiento",
      "Origen por lote",
      "Humedad y secado"
    ],
    "screenshot": "screenshots/05-beneficio.png"
  },
  {
    "id": "inventario",
    "nombre": "Inventario",
    "icon": "package",
    "categoria": "operacion",
    "descripcion": "Existencias, entradas, salidas, ventas y movimientos.",
    "descripcionLarga": "Mantiene el control local de existencias y movimientos para conocer qué producto está disponible, de dónde proviene y cuál fue su destino.",
    "tech": [
      "SQL.js"
    ],
    "funciones": [
      "Existencias",
      "Movimientos",
      "Entradas y ventas",
      "Historial por lote"
    ],
    "screenshot": "screenshots/06-inventario.png"
  },
  {
    "id": "gastos",
    "nombre": "Gastos",
    "icon": "wallet",
    "categoria": "operacion",
    "descripcion": "Costos por categoría, fecha y relación con la producción.",
    "descripcionLarga": "Registra los costos de la operación cafetalera y permite analizarlos por período, categoría y contexto productivo.",
    "tech": [
      "SQL.js",
      "Chart.js"
    ],
    "funciones": [
      "Categorías de gasto",
      "Filtros por período",
      "Análisis visual",
      "Historial de costos"
    ],
    "screenshot": "screenshots/07-gastos.png"
  },
  {
    "id": "reportes",
    "nombre": "Reportes",
    "icon": "chart",
    "categoria": "inteligencia",
    "descripcion": "Resultados consolidados y exportaciones en PDF y Excel.",
    "descripcionLarga": "Convierte los registros operativos en información consultable sobre producción, rentabilidad, inventario y rendimiento.",
    "tech": [
      "PDFKit",
      "ExcelJS",
      "Chart.js"
    ],
    "funciones": [
      "Rentabilidad de temporada",
      "Rendimiento por lote",
      "Exportación PDF",
      "Exportación Excel"
    ],
    "screenshot": "screenshots/08-reportes.png"
  },
  {
    "id": "sostenibilidad",
    "nombre": "Sostenibilidad",
    "icon": "leaf",
    "categoria": "inteligencia",
    "descripcion": "Prácticas, emisiones estimadas y certificaciones.",
    "descripcionLarga": "Ayuda a documentar prácticas regenerativas, emisiones estimadas y certificaciones que pueden evolucionar con la comunidad.",
    "tech": [
      "SQL.js",
      "Chart.js"
    ],
    "funciones": [
      "Registro de emisiones",
      "Prácticas regenerativas",
      "Certificaciones",
      "Indicadores ambientales"
    ],
    "screenshot": "screenshots/09-sostenibilidad.png"
  },
  {
    "id": "calidad",
    "nombre": "Calidad",
    "icon": "award",
    "categoria": "inteligencia",
    "descripcion": "Cataciones, atributos sensoriales y evaluación SCA.",
    "descripcionLarga": "Registra evaluaciones de calidad y perfiles de taza para comparar lotes y conservar conocimiento sobre el café producido.",
    "tech": [
      "SQL.js",
      "Chart.js"
    ],
    "funciones": [
      "Evaluación sensorial",
      "Puntajes SCA",
      "Notas de taza",
      "Comparación por lote"
    ],
    "screenshot": "screenshots/10-calidad.png"
  },
  {
    "id": "trazabilidad",
    "nombre": "Trazabilidad",
    "icon": "link",
    "categoria": "inteligencia",
    "descripcion": "Cadena verificable, códigos por lote y QR.",
    "descripcionLarga": "Enlaza eventos de la cadena productiva mediante hashes SHA-256 para detectar alteraciones y conservar el origen de los registros.",
    "tech": [
      "SHA-256",
      "QR",
      "PDFKit"
    ],
    "funciones": [
      "Cadena de registros",
      "Verificación de integridad",
      "Código QR",
      "Ruta por lote"
    ],
    "screenshot": "screenshots/11-trazabilidad.png"
  },
  {
    "id": "predictivo",
    "nombre": "Predictivo",
    "icon": "brain",
    "categoria": "inteligencia",
    "descripcion": "Estimaciones agronómicas transparentes y perfiles de tueste.",
    "descripcionLarga": "Explora estimaciones sencillas y explicables para apoyar el análisis de rendimiento sin presentar modelos experimentales como certezas.",
    "tech": [
      "JavaScript",
      "Chart.js"
    ],
    "funciones": [
      "Estimaciones por lote",
      "Variables explicables",
      "Desviaciones",
      "Perfiles de tueste"
    ],
    "screenshot": "screenshots/12-predictivo.png"
  },
  {
    "id": "mercado",
    "nombre": "Mercado",
    "icon": "chart",
    "categoria": "inteligencia",
    "descripcion": "Referencias de precios y comparación con la finca.",
    "descripcionLarga": "Organiza referencias de mercado para compararlas con ventas, costos e indicadores locales.",
    "tech": [
      "Chart.js"
    ],
    "funciones": [
      "Arábica y robusta",
      "Histórico de precios",
      "Benchmarks",
      "Comparación con ventas"
    ],
    "screenshot": "screenshots/13-mercado.png"
  },
  {
    "id": "clima",
    "nombre": "Clima",
    "icon": "cloud",
    "categoria": "inteligencia",
    "descripcion": "Registros ambientales y alertas fitosanitarias.",
    "descripcionLarga": "Conserva datos climáticos y observaciones de campo para relacionarlos con la producción y apoyar alertas agronómicas.",
    "tech": [
      "SQL.js",
      "Chart.js"
    ],
    "funciones": [
      "Temperatura",
      "Precipitación",
      "Humedad",
      "Alertas por lote"
    ],
    "screenshot": "screenshots/14-clima.png"
  },
  {
    "id": "marketing",
    "nombre": "Marketing",
    "icon": "megaphone",
    "categoria": "comunidad",
    "descripcion": "Clientes, campañas y comunicación comercial.",
    "descripcionLarga": "Organiza información comercial y acciones de comunicación para productores y organizaciones que venden su propio café.",
    "tech": [
      "SQL.js"
    ],
    "funciones": [
      "Perfiles de clientes",
      "Campañas",
      "Contenido promocional",
      "Puntos de lealtad"
    ],
    "screenshot": "screenshots/15-marketing.png"
  },
  {
    "id": "suscripcion",
    "nombre": "Perfiles de café",
    "icon": "coffee",
    "categoria": "comunidad",
    "descripcion": "Preferencias, sabores y recomendaciones personalizadas.",
    "descripcionLarga": "Relaciona perfiles sensoriales con preferencias para documentar recomendaciones y aprender de la respuesta del consumidor.",
    "tech": [
      "JavaScript",
      "SQL.js"
    ],
    "funciones": [
      "Perfiles de sabor",
      "Preferencias",
      "Recomendaciones",
      "Variedades disponibles"
    ],
    "screenshot": "screenshots/16-perfiles-cafe.png"
  },
  {
    "id": "educacion",
    "nombre": "Educación",
    "icon": "graduation",
    "categoria": "comunidad",
    "descripcion": "Guías y recursos para aprender dentro del sistema.",
    "descripcionLarga": "Reúne contenido práctico para usuarios, productores y personas que están aprendiendo sobre gestión, beneficio, tueste y preparación de café.",
    "tech": [
      "JavaScript"
    ],
    "funciones": [
      "Artículos",
      "Filtros temáticos",
      "Guías prácticas",
      "Fuentes de referencia"
    ],
    "screenshot": "screenshots/17-educacion.png"
  },
  {
    "id": "ayuda",
    "nombre": "Ayuda",
    "icon": "book",
    "categoria": "comunidad",
    "descripcion": "Manual, glosario, flujos y orientación contextual.",
    "descripcionLarga": "Ofrece documentación funcional dentro de la aplicación para reducir la dependencia del soporte y facilitar el aprendizaje.",
    "tech": [
      "Markdown"
    ],
    "funciones": [
      "Manual de usuario",
      "Glosario cafetalero",
      "Guía por pantalla",
      "Preguntas frecuentes"
    ],
    "screenshot": "screenshots/18-ayuda.png"
  },
  {
    "id": "configuracion",
    "nombre": "Configuración",
    "icon": "settings",
    "categoria": "sistema",
    "descripcion": "Base productiva, demo, cuenta, usuarios y proyecto.",
    "descripcionLarga": "Administra la base activa, restaura la demostración, cambia credenciales, gestiona usuarios y abre la documentación del proyecto.",
    "tech": [
      "Vue 3",
      "Electron",
      "SQL.js"
    ],
    "funciones": [
      "Base productiva y demo",
      "Mi cuenta",
      "Usuarios y roles",
      "Documentación del proyecto"
    ],
    "screenshot": "screenshots/19-configuracion-datos.png"
  }
]

export const categories = [
  {
    "id": "operacion",
    "nombre": "Operación",
    "icon": "farm"
  },
  {
    "id": "inteligencia",
    "nombre": "Inteligencia",
    "icon": "chart"
  },
  {
    "id": "comunidad",
    "nombre": "Comunidad",
    "icon": "users"
  },
  {
    "id": "sistema",
    "nombre": "Sistema",
    "icon": "settings"
  }
]
