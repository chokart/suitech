import type { SolutionItem, ProjectItem, ValuePillar, WorkStep, IndustryItem, LearningItem } from '../types';

export const BRAND_INFO = {
  name: 'Suitech',
  legalName: 'Suitech Soluciones Tecnológicas',
  domain: 'https://suitechpe.com',
  domainDisplay: 'suitechpe.com',
  tagline: 'Tecnología que crea soluciones y abre posibilidades.',
  shortDescription: 'Ingeniería aplicada a problemas reales: unimos desarrollo de software, inteligencia artificial, IoT y sistemas industriales.',
  contactEmail: 'contacto@suitechpe.com',
  whatsappUrl: 'https://wa.me/51999999999?text=Hola%20Suitech,%20deseo%20conversar%20sobre%20un%20proyecto%20tecnol%C3%B3gico', // Configurable por el usuario
  linkedinUrl: 'https://www.linkedin.com/company/suitechpe', // Configurable
  youtubeUrl: 'https://www.youtube.com/@suitechpe', // Configurable
  githubUrl: 'https://github.com/suitechpe', // Configurable
  location: 'Perú',
};

export const CAPABILITIES: string[] = [
  'Desarrollo de software a medida',
  'Inteligencia artificial aplicada',
  'Automatización de procesos',
  'IoT & Microcontroladores ESP32',
  'Sistemas operativos industriales',
  'Balances metalúrgicos & Ingeniería',
  'Formación tecnológica práctica'
];

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'software-medida',
    number: '01',
    title: 'Software a Medida',
    summary: 'Construcción de aplicaciones web sólidas, paneles de control y APIs diseñadas para procesos operacionales específicos.',
    description: 'Desarrollamos soluciones que reemplazan hojas de cálculo desconectadas o tareas manuales propensas a errores, creando sistemas confiables y fáciles de mantener.',
    iconName: 'Code2',
    badge: 'Arquitectura Web & Cloud',
    features: [
      'Aplicaciones web interactivas y paneles de control',
      'Sistemas de gestión operativa y administrativa',
      'Diseño y consumo de APIs seguras',
      'Modelado de bases de datos relacionales y no relacionales',
      'Digitalización y trazabilidad integral de procesos'
    ],
    deliverables: ['Código documentado', 'Despliegue automatizado', 'Guía de uso y soporte']
  },
  {
    id: 'ia-aplicada',
    number: '02',
    title: 'Inteligencia Artificial Aplicada',
    summary: 'Integración práctica de modelos de lenguaje, visión y analítica para automatizar tareas cognitivas y optimizar decisiones.',
    description: 'Enfocamos la IA no como una moda, sino como una herramienta práctica: extracción de datos de documentos, asistentes operativos y algoritmos de apoyo analítico.',
    iconName: 'BrainCircuit',
    badge: 'Automatización Inteligente',
    features: [
      'Integración de modelos de lenguaje (LLMs) en sistemas existentes',
      'Automatización de tareas repetitivas y procesamiento de texto',
      'Asistentes técnicos para consulta rápida de manuales y procedimientos',
      'Generación automatizada de reportes operativos e informes técnicos',
      'Sistemas de recomendación y apoyo analítico a decisiones'
    ],
    deliverables: ['Pipelines de datos limpios', 'Modelos probados con tus datos', 'Integración vía API']
  },
  {
    id: 'soluciones-industriales',
    number: '03',
    title: 'Soluciones Industriales',
    summary: 'Herramientas de ingeniería para monitoreo de operaciones, control de producción y gestión técnica en entornos exigentes.',
    description: 'Diseñadas a partir de más de una década de experiencia en minería y procesos productivos, uniendo el rigor técnico de la metalurgia con la ingeniería de software.',
    iconName: 'Factory',
    badge: 'Minería & Procesos',
    features: [
      'Monitoreo y seguimiento de disponibilidad de equipos y flotas',
      'Registro y balance de movimientos de mineral y producción',
      'Gestión de personal operativo y programación de guardias (roster)',
      'Indicadores clave de desempeño (KPIs) en tiempo real',
      'Herramientas de cálculo para operaciones metalúrgicas y de planta'
    ],
    deliverables: ['Paneles de control en planta', 'Historial auditable', 'Reportabilidad ejecutiva']
  },
  {
    id: 'iot-sistemas-conectados',
    number: '04',
    title: 'IoT y Sistemas Conectados',
    summary: 'Puente directo entre el mundo físico y la web: sensores, microcontroladores ESP32 y telemetría en tiempo real.',
    description: 'Adquisición de datos desde sensores físicos, transmisión mediante protocolos seguros (HTTP/MQTT) y visualización instantánea en paneles de monitoreo.',
    iconName: 'Cpu',
    badge: 'Hardware + Firmware + Web',
    features: [
      'Instrumentación y sensores (nivel, ultrasonido, presión, temperatura)',
      'Firmware eficiente sobre microcontroladores ESP32 / Arduino',
      'Envío de telemetría a servidores locales o en la nube',
      'Monitoreo remoto de estados, alertas y umbrales críticos',
      'Integración directa: Sensor -> Microcontrolador -> API -> Dashboard'
    ],
    deliverables: ['Firmware en C/C++', 'API receptora de telemetría', 'Tablero de visualización web']
  },
  {
    id: 'productos-digitales',
    number: '05',
    title: 'Productos Digitales Especializados',
    summary: 'Creación de plataformas técnicas propias, como SuiteMinerals, orientadas a cálculos de ingeniería y metalurgia.',
    description: 'Desarrollamos herramientas modulares y componentes reutilizables que resuelven cálculos matemáticos complejos de forma accesible y verificable.',
    iconName: 'Layers',
    badge: 'Herramientas Propias',
    features: [
      'SuiteMinerals: plataforma web de balances metalúrgicos',
      'Módulos de cálculo de rendimiento, recuperación y molienda',
      'Herramientas técnicas parametrizables para ingenieros y operadores',
      'Sistemas configurables para optimización de recursos',
      'Componentes reutilizables listos para escalar según demanda'
    ],
    deliverables: ['Acceso web inmediato', 'Exportación de reportes', 'Fórmulas validadas']
  },
  {
    id: 'formacion-tecnologica',
    number: '06',
    title: 'Formación y Divulgación Técnica',
    summary: 'Transferencia de conocimiento honesta: tutoriales prácticos, código abierto y guías de construcción paso a paso.',
    description: 'Compartimos aprendizajes reales de ingeniería: cómo conectar un microcontrolador con la nube, cómo estructurar un sistema industrial y cómo aplicar IA de forma viable.',
    iconName: 'GraduationCap',
    badge: 'Construyendo Suitech',
    features: [
      'Tutoriales prácticos de desarrollo de software desde cero',
      'Guías paso a paso de IoT con ESP32 y conexión con APIs web',
      'Visualización de datos de sensores en dashboards modernos',
      'Automatización práctica de procesos con herramientas de IA',
      'Desarrollo de software aplicado a ingeniería y metalurgia'
    ],
    deliverables: ['Guías paso a paso', 'Repositorios con código de ejemplo', 'Videos explicativos']
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
    subtitle: 'Experiencia técnica de campo + ingeniería de sistemas',
    description: 'Combinamos cerca de una década en operaciones industriales y metalúrgicas con la formación en sistemas para entender el fondo del problema.',
    iconName: 'Wrench',
    quote: 'Entendemos los procesos productivos desde adentro, no solo desde un editor de código.'
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
    id: 'suiteminerals',
    name: 'SuiteMinerals',
    shortName: 'SuiteMinerals',
    category: 'Producto Digital · Metalurgia',
    status: 'desarrollo',
    statusLabel: 'En desarrollo · Prototipo web',
    problem: 'Los ingenieros metalúrgicos y operadores de planta suelen realizar balances metalúrgicos, cálculos de recuperación y dimensionamiento en hojas de cálculo complejas, difíciles de auditar, propensas a errores de fórmulas y sin respaldo en la nube.',
    solution: 'Plataforma web técnica especializada que centraliza balances metalúrgicos de dos y tres productos, cálculos de concentración, masa y leyes, con validación de datos en tiempo real y generación de reportes técnicos claros.',
    technologies: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vite', 'Algoritmos Metalúrgicos'],
    architectureSummary: 'Arquitectura SPA reactiva con motor de cálculo matemático desacoplado en TypeScript, validación estricta de leyes y balances estequiométricos.',
    keyFeatures: [
      'Balances metalúrgicos de dos y tres productos (Concentrado, Relave, Cabeza)',
      'Cálculo automático de distribución y recuperación porcentual',
      'Validación matemática para evitar balances incoherentes',
      'Exportación rápida de balances a formatos auditables',
      'Interfaz optimizada para tablets y laptops de campo'
    ],
    honestDisclaimer: 'Proyecto propio en fase de pruebas con profesionales del sector para validar un conjunto inicial de funciones de alto valor.',
    visualType: 'metallurgy'
  },
  {
    id: 'sistema-operaciones-mineras',
    name: 'Sistema de Gestión Operativa',
    shortName: 'Gestión Operativa',
    category: 'Software Industrial · Operaciones',
    status: 'desarrollo',
    statusLabel: 'En validación técnica',
    problem: 'Falta de consolidación entre el avance de equipos pesados, movimientos de mineral, asignación de operadores por guardia (roster) y reportes de producción diarios, generando desfasajes de información en la toma de decisiones.',
    solution: 'Sistema modular de software para monitorear horas efectivas de equipos, registrar toneladas movidas por tajo/frente, administrar el rol de guardias del personal y consolidar indicadores operativos en una sola fuente veraz.',
    technologies: ['Vue 3', 'Node.js', 'PostgreSQL / SQLite', 'REST API', 'Docker'],
    architectureSummary: 'Plataforma cliente-servidor con base de datos relacional orientada a eventos de turnos operativos, reportabilidad diaria y control de disponibilidad mecánica.',
    keyFeatures: [
      'Control de flota: horómetros, tiempos muertos y disponibilidad mecánica',
      'Registro de ciclos y movimientos de acarreo y carguío',
      'Administración de turnos y roster de operadores',
      'Generación de reportes de fin de guardia en formato estándar',
      'Separación total de datos confidenciales y reglas parametrizables'
    ],
    honestDisclaimer: 'Desarrollado a partir de experiencia directa en operaciones mineras. Mostrado como prototipo/demostración genérica sin exponer información confidencial de terceros.',
    visualType: 'operations'
  },
  {
    id: 'iot-nivel-agua',
    name: 'Monitoreo Inteligente de Nivel de Agua',
    shortName: 'Telemetría IoT Nivel',
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
      'Panel web con visualización gráfica del tanque en tiempo real',
      'Alertas visuales de nivel bajo, nivel óptimo y sobrellenado',
      'Módulo pensado como base para proyectos de telemetría industrial'
    ],
    honestDisclaimer: 'Prototipo activo de demostración e investigación técnica. Empleado en divulgación y como base experimental antes de certificarlo para control crítico de bombas.',
    visualType: 'iot'
  },
  {
    id: 'sistema-gestion-empresarial',
    name: 'Sistema de Gestión Empresarial',
    shortName: 'Gestión Comercial & Stock',
    category: 'Software Empresarial · Productividad',
    status: 'operativo',
    statusLabel: 'Operativo en entorno real',
    problem: 'Pérdida de control financiero y desorden de existencias en pequeños negocios y operaciones comerciales que gestionan compras, ventas, energía y gastos en libretas o notas sueltas.',
    solution: 'Aplicación administrativa práctica para registrar flujos diarios de caja, cobros por servicios, control estricto de inventario, consumo de servicios y métricas de rentabilidad neta.',
    technologies: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vite', 'LocalStorage / Cloud DB'],
    architectureSummary: 'Aplicación web ligera con gestión de estado centralizada, cálculo automático de márgenes operativos y reportes imprimibles/exportables.',
    keyFeatures: [
      'Registro rápido de ingresos y egresos por categorías',
      'Inventario de insumos con aviso de stock mínimo',
      'Control de tiempos de servicio y uso de equipamiento',
      'Cierre de caja diario con conciliación automática',
      'Resumen visual de rentabilidad y gastos del período'
    ],
    honestDisclaimer: 'Solución probada y en uso en operaciones propias, adaptada para ser replicable en negocios con necesidades análogas.',
    visualType: 'business'
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
    id: 'mineria-industria',
    title: 'Industria y Minería',
    description: 'Ambientes exigentes donde la disponibilidad mecánica, el control de turnos y la reportabilidad operativa definen la rentabilidad.',
    applications: ['Monitoreo de equipos', 'Control de acarreo y frentes', 'Roster y turnos de personal', 'Indicadores de producción'],
    iconName: 'Pickaxe'
  },
  {
    id: 'ingenieria-metalurgia',
    title: 'Ingeniería y Metalurgia',
    description: 'Procesamiento de minerales y cálculos técnicos donde la precisión de balance de masas y leyes es vital.',
    applications: ['Balances metalúrgicos 2 y 3 productos', 'Modelado de recuperación', 'SuiteMinerals', 'Estandarización de cálculos'],
    iconName: 'FlaskConical'
  },
  {
    id: 'gestion-empresarial',
    title: 'Gestión y Negocios',
    description: 'Pequeñas y medianas operaciones que requieren dar el salto desde hojas de cálculo dispersas hacia sistemas centralizados.',
    applications: ['Control de inventarios y stock', 'Caja diaria y conciliación', 'Gestión de servicios y consumo', 'Métricas de rentabilidad'],
    iconName: 'Building2'
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
    description: 'Captura de variables físicas remotas para saber qué ocurre en tanques, bombas y maquinaria sin presencia física constante.',
    applications: ['Sensores de nivel ultrasónico/presión', 'Telemetría ESP32 a la nube', 'Alertas tempranas de fallas', 'Paneles web de telemetría'],
    iconName: 'Radio'
  },
  {
    id: 'formacion-creadores',
    title: 'Profesionales & Emprendedores Tech',
    description: 'Personas técnicas que buscan aprender a integrar hardware con software y desarrollar sus propios proyectos.',
    applications: ['Tutoriales de ESP32 con APIs', 'Aprender Vue y desarrollo web', 'Construcción paso a paso', 'Comunidad técnica'],
    iconName: 'Sparkles'
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
    id: 'balances-metalurgicos-web',
    title: 'Cómo desarrollar herramientas digitales para cálculos de ingeniería y metalurgia',
    category: 'Software de Ingeniería',
    readTime: '12 min de lectura',
    summary: 'La lógica detrás de SuiteMinerals: cómo transformar fórmulas matemáticas de balances metalúrgicos de dos productos en funciones tipadas y verificadas.',
    tags: ['Metalurgia', 'TypeScript', 'Ingeniería', 'SuiteMinerals'],
    status: 'Caso de estudio',
    targetPlatform: 'Construyendo Suitech'
  },
  {
    id: 'automatizacion-procesos-ia',
    title: 'Cómo automatizar la extracción de datos de reportes operativos con Inteligencia Artificial',
    category: 'IA Aplicada',
    readTime: '7 min de lectura',
    summary: 'Uso práctico de modelos LLM para procesar texto desestructurado de minutas de guardia y convertirlos en registros estructurados en una base de datos.',
    tags: ['IA', 'Automatización', 'Productividad', 'Python/JS'],
    status: 'Guía práctica',
    targetPlatform: 'Construyendo Suitech'
  }
];
