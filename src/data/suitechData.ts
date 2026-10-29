import type { SolutionItem, ProjectItem, ValuePillar, WorkStep, IndustryItem, LearningItem } from '../types';

export const BRAND_INFO = {
  name: 'Suitech',
  legalName: 'Suitech Soluciones Tecnológicas',
  domain: 'https://suitechpe.com',
  domainDisplay: 'suitechpe.com',
  tagline: 'Tecnología que crea soluciones y abre posibilidades.',
  shortDescription: 'Ingeniería aplicada a problemas reales: unimos desarrollo de software, inteligencia artificial, automatización y sistemas conectados IoT.',
  contactEmail: 'contacto@suitechpe.com',
  whatsappUrl: 'https://wa.me/51999999999?text=Hola%20Suitech,%20deseo%20conversar%20sobre%20un%20proyecto%20tecnol%C3%B3gico', // Configurable por el usuario
  linkedinUrl: 'https://www.linkedin.com/company/suitechpe', // Configurable
  youtubeUrl: 'https://www.youtube.com/@suitechpe', // Configurable
  githubUrl: 'https://github.com/suitechpe', // Configurable
  location: 'Perú',
};

export const CAPABILITIES: string[] = [
  'Suitech Solutions · Desarrollo Web & APIs',
  'Suitech AI · Inteligencia Artificial Aplicada',
  'Suitech IoT · Sensores & Telemetría ESP32',
  'Suitech Academy · Formación Tecnológica'
];

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'suitech-solutions',
    number: '01',
    title: 'Suitech Solutions',
    badge: 'Desarrollo Web & Cloud',
    summary: 'Desarrollo de sistemas web, aplicaciones, APIs, bases de datos, integraciones y automatización para personas y empresas.',
    description: 'Construimos plataformas digitales sólidas y a medida que optimizan la operativa diaria de negocios y profesionales, eliminando procesos manuales propensos a errores.',
    iconName: 'Code2',
    features: [
      'Aplicaciones web interactivas y paneles de control modernos',
      'Desarrollo y consumo de APIs seguras, rápidas y escalables',
      'Diseño y modelado de bases de datos relacionales y cloud',
      'Integración y sincronización de sistemas existentes',
      'Digitalización y trazabilidad integral de flujos de trabajo'
    ],
    deliverables: ['Código fuente documentado', 'Despliegues automatizados', 'Garantía técnica']
  },
  {
    id: 'suitech-ai',
    number: '02',
    title: 'Suitech AI',
    badge: 'Inteligencia Artificial Práctica',
    summary: 'Aplicaciones prácticas de IA, asistentes, procesamiento de documentos, automatización inteligente e integración de modelos en sistemas existentes.',
    description: 'Enfocamos la inteligencia artificial como una herramienta pragmática para resolver cuellos de botella: extracción de datos de comprobantes, asistentes técnicos y pipelines automatizados.',
    iconName: 'BrainCircuit',
    features: [
      'Extracción y procesamiento estructurado de documentos (PDFs, facturas, recibos)',
      'Asistentes virtuales entrenados con el conocimiento de tu empresa',
      'Automatización inteligente de tareas cognitivas y repetitivas',
      'Integración de modelos LLM y visión computacional vía API',
      'Generación automatizada de reportes y resúmenes ejecutivos'
    ],
    deliverables: ['Modelos integrados vía API', 'Pipelines validados con tus datos', 'Guía de uso']
  },
  {
    id: 'suitech-iot',
    number: '03',
    title: 'Suitech IoT',
    badge: 'Dispositivos Inteligentes & IoT',
    summary: 'Dispositivos inteligentes, sensores, ESP32, monitoreo remoto, telemetría y conexión entre hardware, software y servicios en la nube.',
    description: 'Unimos el mundo físico con la web: capturamos lecturas desde sensores en campo, las transmitimos de forma segura y las visualizamos en tiempo real.',
    iconName: 'Cpu',
    features: [
      'Instrumentación y sensores (nivel ultrasónico, temperatura, flujo, presión)',
      'Firmware eficiente y de bajo consumo en ESP32 / Arduino',
      'Transmisión de telemetría segura vía WiFi/HTTP hacia servidores',
      'Paneles web reactivos con visualización gráfica en vivo',
      'Alertas tempranas automáticas ante niveles o umbrales críticos'
    ],
    deliverables: ['Firmware en C/C++', 'API receptora de telemetría', 'Tablero web de control']
  },
  {
    id: 'suitech-academy',
    number: '04',
    title: 'Suitech Academy',
    badge: 'Formación & Comunidad',
    summary: 'Tutoriales, cursos, guías, artículos, ejemplos de código y proyectos educativos en español.',
    description: 'Transferencia técnica honesta para desarrolladores, profesionales y emprendedores que buscan aprender a crear software real y conectar hardware con la nube.',
    iconName: 'GraduationCap',
    features: [
      'Tutoriales paso a paso de desarrollo web con Vue 3 y TypeScript',
      'Guías prácticas de IoT conectando microcontroladores ESP32 con APIs REST',
      'Casos reales de automatización de procesos e integración con IA',
      'Repositorios de código abierto documentados para estudiar y reutilizar',
      'Comunidad técnica activa y videos explicativos en YouTube'
    ],
    deliverables: ['Guías paso a paso', 'Repositorios con código fuente', 'Videos explicativos']
  }
];

export const VALUE_PILLARS: ValuePillar[] = [
  {
    number: '01',
    title: 'Soluciones integrales',
    subtitle: 'Hardware, software y datos sin barreras',
    description: 'Conectamos dispositivos físicos, APIs, modelos analíticos e interfaces de usuario en un solo ecosistema cuando el problema lo requiere.',
    iconName: 'Network',
    quote: 'La solución no termina en la pantalla ni en el microcontrolador: abarca el flujo completo.'
  },
  {
    number: '02',
    title: 'Enfoque práctico',
    subtitle: 'Resolver necesidades reales antes que modas',
    description: 'Priorizamos resolver cuellos de botella comprobables con la tecnología más simple, robusta y económica de mantener.',
    iconName: 'Target',
    quote: 'Tecnología con propósito: cada línea de código debe justificar su valor en la operación.'
  },
  {
    number: '03',
    title: 'Ingeniería aplicada',
    subtitle: 'Experiencia técnica directa + ingeniería de software',
    description: 'Combinamos experiencia técnica directa en resolución de problemas complejos con ingeniería de software moderna para entender el fondo de cada necesidad.',
    iconName: 'Wrench',
    quote: 'Entendemos las necesidades operativas desde adentro, no solo desde un editor de código.'
  },
  {
    number: '04',
    title: 'Aprendizaje continuo',
    subtitle: 'Honestidad técnica y mejora constante',
    description: 'Documentamos, experimentamos y refinamos nuestras soluciones con total transparencia, enseñando y compartiendo lo que construimos.',
    iconName: 'BookOpenCheck',
    quote: 'Construir en público, medir resultados reales y mejorar de forma iterativa.'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'sistema-gestion-empresarial',
    name: 'Sistema de Gestión Empresarial',
    shortName: 'Gestión Comercial & Stock',
    category: 'Software Empresarial · Productividad',
    status: 'operativo',
    statusLabel: 'Operativo en entorno real',
    problem: 'Pérdida de control financiero y desorden de existencias en negocios que gestionan compras, ventas, insumos y gastos en libretas o notas sueltas.',
    solution: 'Aplicación administrativa práctica para registrar flujos diarios de caja, cobros por servicios, control estricto de inventario, consumo de insumos y métricas de rentabilidad neta.',
    technologies: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vite', 'LocalStorage / Cloud DB'],
    architectureSummary: 'Aplicación web ligera con gestión de estado centralizada, cálculo automático de márgenes operativos y reportes imprimibles/exportables.',
    keyFeatures: [
      'Registro rápido de ingresos y egresos por categorías',
      'Inventario de insumos con aviso automático de stock mínimo',
      'Control de tiempos de servicio y uso de recursos',
      'Cierre de caja diario con conciliación automática',
      'Resumen visual de rentabilidad y gastos del período'
    ],
    honestDisclaimer: 'Solución probada y en uso en operaciones comerciales reales, adaptada para ser replicable en negocios con necesidades análogas.',
    visualType: 'business'
  },
  {
    id: 'iot-nivel-agua',
    name: 'Monitoreo Inteligente de Nivel de Reservorios',
    shortName: 'Telemetría IoT de Nivel',
    category: 'IoT · Hardware & Telemetría',
    status: 'prototipo',
    statusLabel: 'Prototipo funcional demostrativo',
    problem: 'Riesgo de desabastecimiento o rebalse en reservorios y tanques debido a revisiones manuales discontinuas, falta de alertas tempranas y ausencia de telemetría a distancia en puntos remotos.',
    solution: 'Sistema IoT compuesto por un microcontrolador ESP32 acoplado a un sensor ultrasónico/de presión, firmware que transmite lecturas vía WiFi/HTTP hacia un servidor, y un panel web en tiempo real que alerta niveles críticos.',
    technologies: ['ESP32', 'C/C++ (Arduino/ESP-IDF)', 'Sensores Ultrasónicos', 'REST API', 'Vue 3 Dashboard'],
    architectureSummary: 'Sensor -> Conversión ADC/Serial -> Microcontrolador ESP32 -> Envío JSON seguro vía HTTP -> API Backend -> Panel Web Reactivo con gráficos de nivel.',
    keyFeatures: [
      'Lectura continua de nivel de líquido en porcentaje y volumen estimado',
      'Transmisión de telemetría con manejo de reconexión y bajo consumo',
      'Panel web con visualización gráfica del reservorio en tiempo real',
      'Alertas visuales de nivel bajo, nivel óptimo y sobrellenado',
      'Módulo pensado como base para proyectos de telemetría y supervisión remota'
    ],
    honestDisclaimer: 'Prototipo activo de demostración e investigación técnica. Empleado en divulgación y como base experimental de hardware conectado.',
    visualType: 'iot'
  },
  {
    id: 'automatizacion-ia-documentos',
    name: 'Plataforma de Extracción y Automatización con IA',
    shortName: 'Automatización con IA',
    category: 'Inteligencia Artificial · Automatización',
    status: 'desarrollo',
    statusLabel: 'En desarrollo · Validación técnica',
    problem: 'Pérdida de horas de trabajo en digitación manual de comprobantes, facturas, recibos y reportes operativos sin formato unificado.',
    solution: 'Pipeline asistido por IA que recibe documentos en PDF o imágenes, procesa y extrae campos estructurados automáticamente (RUC, montos, fechas, ítems) y los integra con la base de datos.',
    technologies: ['Python', 'LLM Vision APIs', 'Vue 3', 'REST API', 'PostgreSQL / SQLite'],
    architectureSummary: 'Carga de archivos -> Preprocesamiento de imagen -> Prompt estructurado con esquema JSON estricto -> Ingesta automática en API -> Dashboard de validación humana.',
    keyFeatures: [
      'Extracción automática de datos estructurados desde PDFs e imágenes',
      'Validación de esquemas y reglas de negocio en tiempo real',
      'Panel de confirmación visual para discrepancias detectadas',
      'Exportación directa a sistemas contables y hojas de cálculo',
      'Reducción drástica del tiempo de ingreso de información'
    ],
    honestDisclaimer: 'Proyecto en etapa de refinamiento de modelos y prompts para garantizar tasas de precisión elevadas antes de su lanzamiento general.',
    visualType: 'ai-automation'
  },
  {
    id: 'dashboard-metricas-operativas',
    name: 'Panel Centralizado de Analítica y Métricas',
    shortName: 'Dashboard de Analítica',
    category: 'Software Web · Analítica',
    status: 'desarrollo',
    statusLabel: 'En validación técnica',
    problem: 'Falta de visibilidad unificada de KPIs, estado de servicios, usuarios activos y métricas de desempeño, obligando a revisar múltiples herramientas dispersas.',
    solution: 'Dashboard web reactivo de alta velocidad que consolida métricas clave, gráficos interactivos, alertas de umbrales y roles de acceso en un solo entorno limpio y moderno.',
    technologies: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Chart.js / SVG', 'REST API'],
    architectureSummary: 'Arquitectura SPA reactiva desacoplada del backend, con actualización periódica de métricas, diseño responsive e interfaz modo oscuro de alta legibilidad.',
    keyFeatures: [
      'Visualización de métricas en tiempo real con indicadores de tendencia',
      'Filtrado interactivo por rangos de fecha y categorías operativas',
      'Generación de reportes ejecutivos en PDF con un clic',
      'Diseño 100% responsive optimizado para móviles y pantallas grandes',
      'Componentes modulares adaptables a distintos tipos de negocio'
    ],
    honestDisclaimer: 'Desarrollado como base de producto digital para clientes que requieren una capa visual moderna sobre sus datos existentes.',
    visualType: 'analytics'
  }
];

export const WORK_PROCESS: WorkStep[] = [
  {
    step: '01',
    title: 'Entender',
    action: 'Identificar el problema real, los objetivos técnicos y los límites del entorno.',
    deliverable: 'Levantamiento de requerimientos, alcance bien delimitado y viabilidad técnica.',
    iconName: 'SearchCheck'
  },
  {
    step: '02',
    title: 'Diseñar',
    action: 'Definir la arquitectura de software, hardware y datos más simple y mantenible.',
    deliverable: 'Esquema de componentes, wireframes funcionales y plan de hitos.',
    iconName: 'Compass'
  },
  {
    step: '03',
    title: 'Desarrollar',
    action: 'Construir el código, programar microcontroladores e integrar APIs y modelos.',
    deliverable: 'Prototipo interactivo, pruebas de conectividad y código documentado.',
    iconName: 'Code'
  },
  {
    step: '04',
    title: 'Validar y Mejorar',
    action: 'Probar en condiciones reales, medir resultados y planificar mejoras continuas.',
    deliverable: 'Sistema funcional, entrega transparente y ruta de evolución probada.',
    iconName: 'CheckCircle2'
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'empresas-comercios',
    title: 'Empresas y Comercios',
    description: 'Negocios y empresas de servicios que requieren digitalizar su operativa diaria, optimizar inventarios y centralizar flujos comerciales.',
    applications: ['Control de inventarios y stock', 'Caja diaria y conciliación', 'Gestión de servicios y compras', 'Métricas de rentabilidad'],
    iconName: 'Building2'
  },
  {
    id: 'startups-emprendedores',
    title: 'Startups y Emprendedores Tech',
    description: 'Fundadores y proyectos emergentes que necesitan un socio técnico para construir MVPs, productos digitales y prototipos funcionales.',
    applications: ['Desarrollo ágil de MVPs', 'Arquitectura frontend moderna', 'Integración de APIs y pagos', 'Pruebas de concepto rápidas'],
    iconName: 'Sparkles'
  },
  {
    id: 'gestion-productividad',
    title: 'Gestión y Productividad',
    description: 'Organizaciones que buscan reemplazar hojas de cálculo dispersas con plataformas web centralizadas, seguras y accesibles.',
    applications: ['Paneles de control y reportes', 'Digitalización de formularios', 'Gestión de usuarios y accesos', 'Seguimiento de tareas'],
    iconName: 'Layers'
  },
  {
    id: 'automatizacion-procesos',
    title: 'Automatización de Procesos',
    description: 'Reducción de tareas mecánicas y repetitivas mediante software a medida y herramientas de inteligencia artificial.',
    applications: ['Extracción de datos en reportes', 'Asistentes de procedimientos', 'Generación de informes', 'Integración de APIs'],
    iconName: 'Cpu'
  },
  {
    id: 'telemetria-iot',
    title: 'Monitoreo & Dispositivos Conectados',
    description: 'Captura de variables físicas remotas para supervisar niveles, ambientes y estados operativos sin presencia física constante.',
    applications: ['Sensores de nivel ultrasónico/presión', 'Telemetría ESP32 a la nube', 'Alertas tempranas de umbrales', 'Paneles web de telemetría'],
    iconName: 'Radio'
  },
  {
    id: 'formacion-creadores',
    title: 'Profesionales & Creadores Técnicos',
    description: 'Desarrolladores y entusiastas que buscan aprender a integrar hardware con software y crear sus propios proyectos.',
    applications: ['Tutoriales de ESP32 con APIs', 'Aprender Vue 3 y desarrollo web', 'Construcción paso a paso', 'Comunidad técnica abierta'],
    iconName: 'GraduationCap'
  }
];

export const LEARNING_POSTS: LearningItem[] = [
  {
    id: 'esp32-api-rest',
    title: 'Cómo conectar un microcontrolador ESP32 con una API web REST',
    category: 'IoT & Firmware',
    readTime: '8 min de lectura',
    summary: 'Aprende a estructurar el envío de lecturas de sensores mediante peticiones HTTP POST JSON hacia un servidor en la nube sin bloquear el bucle principal.',
    tags: ['ESP32', 'C/C++', 'REST API', 'JSON'],
    status: 'Artículo técnico',
    targetPlatform: 'Construyendo Suitech'
  },
  {
    id: 'visualizar-sensores-web',
    title: 'Cómo visualizar datos de sensores en una interfaz web moderna en tiempo real',
    category: 'Frontend & Telemetría',
    readTime: '10 min de lectura',
    summary: 'Guía paso a paso para crear un dashboard reactivo en Vue 3 con gráficos limpios que muestren el nivel de líquido de un tanque y estados de alerta.',
    tags: ['Vue 3', 'Tailwind CSS', 'WebSockets', 'Dashboard'],
    status: 'Tutorial paso a paso',
    targetPlatform: 'Construyendo Suitech'
  },
  {
    id: 'arquitectura-vue3-typescript',
    title: 'Cómo estructurar aplicaciones web escalables con Vue 3 y TypeScript',
    category: 'Frontend & Arquitectura',
    readTime: '11 min de lectura',
    summary: 'Patrones prácticos para organizar componentes, tipado estricto en TypeScript, desacoplamiento de lógica y buenas prácticas para paneles de control.',
    tags: ['Vue 3', 'TypeScript', 'Frontend', 'Arquitectura'],
    status: 'Guía de ingeniería',
    targetPlatform: 'Construyendo Suitech'
  },
  {
    id: 'automatizacion-procesos-ia',
    title: 'Cómo automatizar la extracción de datos de documentos con Inteligencia Artificial',
    category: 'IA Aplicada',
    readTime: '7 min de lectura',
    summary: 'Uso práctico de modelos LLM para procesar texto desestructurado de comprobantes y reportes para convertirlos en registros estructurados en base de datos.',
    tags: ['IA', 'Automatización', 'Productividad', 'Python/JS'],
    status: 'Guía práctica',
    targetPlatform: 'Construyendo Suitech'
  }
];
