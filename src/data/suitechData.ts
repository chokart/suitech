import type { SolutionItem, ProjectItem, ValuePillar, WorkStep, IndustryItem, LearningItem } from '../types';

const envWhatsapp = (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined) || '51961795940';
const isRealWhatsapp = Boolean(envWhatsapp && !envWhatsapp.includes('999999999'));

export const BRAND_INFO = {
  name: 'Suitech',
  shortName: 'Suitech Perú',
  legalName: 'SUITECH PERU',
  domain: 'https://suitechpe.com',
  domainDisplay: 'suitechpe.com',
  tagline: 'Tecnología que crea soluciones y abre posibilidades.',
  shortDescription: 'Ingeniería aplicada a problemas reales: unimos desarrollo de software, inteligencia artificial, automatización y sistemas conectados IoT.',
  contactEmail: (import.meta.env.VITE_CONTACT_EMAIL as string) || 'chokart@gmail.com',
  whatsappNumber: isRealWhatsapp ? envWhatsapp : null,
  whatsappDisplay: '+51 961 795 940',
  whatsappUrl: isRealWhatsapp ? `https://wa.me/${envWhatsapp}?text=Hola%20Suitech,%20deseo%20conversar%20sobre%20un%20proyecto%20tecnol%C3%B3gico` : null,
  linkedinUrl: (import.meta.env.VITE_LINKEDIN_URL as string) || null,
  youtubeUrl: (import.meta.env.VITE_YOUTUBE_URL as string) || null,
  githubUrl: 'https://github.com/chokart/suitech',
  location: 'Arequipa, Perú',
  addressCity: 'Arequipa',
  addressCountry: 'Perú',
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
    deliverables: ['Código fuente documentado', 'Despliegues reproducibles con Git', 'Acompañamiento técnico inicial']
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
    deliverables: ['Evaluación técnica de viabilidad', 'Integración de modelos vía API', 'Guía de uso y documentación']
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
    deliverables: ['Firmware para ESP32 en C/C++', 'API receptora para servidor/VPS', 'Tablero web de visualización']
  },
  {
    id: 'suitech-academy',
    number: '04',
    title: 'Suitech Academy',
    badge: 'Formación & Divulgación',
    summary: 'Tutoriales, guías, artículos, ejemplos de código y proyectos educativos en español.',
    description: 'Transferencia técnica honesta para desarrolladores, profesionales y emprendedores que buscan aprender a crear software real y conectar hardware con la nube.',
    iconName: 'GraduationCap',
    features: [
      'Tutoriales paso a paso de desarrollo web con Vue 3 y TypeScript',
      'Guías prácticas de IoT conectando microcontroladores ESP32 con APIs REST',
      'Casos reales de automatización de procesos e integración con IA',
      'Repositorios de código abierto documentados para estudiar y reutilizar',
      'Documentación técnica clara y de libre acceso'
    ],
    deliverables: ['Guías técnicas paso a paso', 'Repositorios con código fuente', 'Documentación de proyectos reales']
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
  },
  {
    id: 'suiteminerals',
    name: 'SuiteMinerals · Software de Balances Metalúrgicos',
    shortName: 'SuiteMinerals (Metalurgia)',
    category: 'Software Industrial · Metalurgia & Procesos',
    status: 'desarrollo',
    statusLabel: 'En desarrollo · Validación técnica',
    problem: 'Hojas de cálculo complejas y desarticuladas en plantas concentradoras para calcular balances de materia, recuperación metalúrgica y dimensionamiento de circuitos.',
    solution: 'Plataforma web de ingeniería de procesos para el cálculo riguroso de balances de materia por dos y tres productos, cinéticas de flotación y reportes normalizados de turno.',
    technologies: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Algoritmos Numéricos', 'Exportación PDF/Excel'],
    architectureSummary: 'Motor de cálculo metalúrgico reactivo en el navegador con verificación de consistencia de leyes, algoritmos de mínimos cuadrados y generación instantánea de balances.',
    keyFeatures: [
      'Balance de materia de dos y tres productos con leyes de cabeza, concentrado y relave',
      'Cálculo automático de recuperación metalúrgica y ratio de concentración',
      'Dimensionamiento paramétrico de celdas de flotación y espesadores',
      'Exportación normalizada de reportes de guardia a Excel y PDF',
      'Diseñado para cálculos metalúrgicos rutinarios y control de procesos'
    ],
    honestDisclaimer: 'SuiteMinerals es una plataforma en desarrollo que reúne herramientas digitales para cálculos y análisis metalúrgicos. Sus funcionalidades se incorporan y verifican progresivamente.',
    visualType: 'industrial',
    dedicatedUrl: '/proyectos/suiteminerals'
  }
];

export const WORK_PROCESS: WorkStep[] = [
  {
    step: '01',
    title: 'Entender',
    action: 'Identificamos la necesidad, los objetivos del proyecto y las condiciones técnicas en las que se desarrollará.',
    deliverable: 'Requerimientos iniciales, alcance del proyecto y viabilidad técnica.',
    iconName: 'SearchCheck'
  },
  {
    step: '02',
    title: 'Diseñar',
    action: 'Definimos cómo funcionará la solución, seleccionamos las tecnologías y organizamos sus componentes.',
    deliverable: 'Propuesta técnica, estructura de componentes y planificación del desarrollo.',
    iconName: 'Compass'
  },
  {
    step: '03',
    title: 'Desarrollar',
    action: 'Construimos la solución mediante programación, integración de componentes y configuración de las tecnologías necesarias.',
    deliverable: 'Versión funcional o prototipo, según el alcance del proyecto.',
    iconName: 'Code'
  },
  {
    step: '04',
    title: 'Probar y mejorar',
    action: 'Revisamos el funcionamiento, identificamos ajustes necesarios y realizamos mejoras de acuerdo con los objetivos definidos.',
    deliverable: 'Pruebas realizadas, ajustes documentados y siguientes pasos del proyecto.',
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
    status: 'En preparación · Próxima publicación',
    targetPlatform: 'Suitech Academy'
  },
  {
    id: 'visualizar-sensores-web',
    title: 'Cómo visualizar datos de sensores en una interfaz web moderna en tiempo real',
    category: 'Frontend & Telemetría',
    readTime: '10 min de lectura',
    summary: 'Guía paso a paso para crear un dashboard reactivo en Vue 3 con gráficos limpios que muestren el nivel de líquido de un tanque y estados de alerta.',
    tags: ['Vue 3', 'Tailwind CSS', 'WebSockets', 'Dashboard'],
    status: 'En preparación · Próxima publicación',
    targetPlatform: 'Suitech Academy'
  },
  {
    id: 'arquitectura-vue3-typescript',
    title: 'Cómo estructurar aplicaciones web escalables con Vue 3 y TypeScript',
    category: 'Frontend & Arquitectura',
    readTime: '11 min de lectura',
    summary: 'Patrones prácticos para organizar componentes, tipado estricto en TypeScript, desacoplamiento de lógica y buenas prácticas para paneles de control.',
    tags: ['Vue 3', 'TypeScript', 'Frontend', 'Arquitectura'],
    status: 'En preparación · Próxima publicación',
    targetPlatform: 'Suitech Academy'
  },
  {
    id: 'automatizacion-procesos-ia',
    title: 'Cómo automatizar la extracción de datos de documentos con Inteligencia Artificial',
    category: 'IA Aplicada',
    readTime: '7 min de lectura',
    summary: 'Uso práctico de modelos LLM para procesar texto desestructurado de comprobantes y reportes para convertirlos en registros estructurados en base de datos.',
    tags: ['IA', 'Automatización', 'Productividad', 'Python/JS'],
    status: 'En preparación · Próxima publicación',
    targetPlatform: 'Suitech Academy'
  }
];
