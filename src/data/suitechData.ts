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
  shortDescription: 'Desarrollamos software y construimos proyectos que integran tecnología, información e ingeniería para resolver necesidades reales.',
  contactEmail: (import.meta.env.VITE_CONTACT_EMAIL as string) || 'chokart@gmail.com',
  whatsappNumber: isRealWhatsapp ? envWhatsapp : null,
  whatsappDisplay: 'Conversar por WhatsApp',
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
    title: 'SUITECH SOLUTIONS',
    lineName: 'SUITECH SOLUTIONS',
    heading: 'Desarrollo de software.',
    badge: 'Desarrollo de software.',
    statusTag: 'LÍNEA PRINCIPAL',
    statusType: 'primary',
    summary: 'Sistemas y aplicaciones web para organizar información, integrar procesos y resolver necesidades de gestión.',
    description: 'Sistemas y aplicaciones web para organizar información, integrar procesos y resolver necesidades de gestión.',
    iconName: 'Code2',
    features: [],
    deliverables: []
  },
  {
    id: 'suitech-ai',
    number: '02',
    title: 'SUITECH AI',
    lineName: 'SUITECH AI',
    heading: 'Inteligencia artificial aplicada.',
    badge: 'Inteligencia artificial aplicada.',
    statusTag: 'EXPLORACIÓN Y DESARROLLO',
    statusType: 'exploration',
    summary: 'Exploramos aplicaciones de IA para procesar información, desarrollar asistentes y simplificar tareas.',
    description: 'Exploramos aplicaciones de IA para procesar información, desarrollar asistentes y simplificar tareas.',
    iconName: 'BrainCircuit',
    features: [],
    deliverables: []
  },
  {
    id: 'suitech-iot',
    number: '03',
    title: 'SUITECH IoT',
    lineName: 'SUITECH IoT',
    heading: 'Dispositivos y proyectos conectados.',
    badge: 'Dispositivos y proyectos conectados.',
    statusTag: 'PROYECTOS Y PROTOTIPOS',
    statusType: 'prototypes',
    summary: 'Construimos proyectos que integran sensores, dispositivos electrónicos y plataformas de monitoreo.',
    description: 'Construimos proyectos que integran sensores, dispositivos electrónicos y plataformas de monitoreo.',
    iconName: 'Cpu',
    features: [],
    deliverables: []
  },
  {
    id: 'suitech-academy',
    number: '04',
    title: 'SUITECH ACADEMY',
    lineName: 'SUITECH ACADEMY',
    heading: 'Conocimiento y aprendizaje.',
    badge: 'Conocimiento y aprendizaje.',
    statusTag: 'EN PREPARACIÓN',
    statusType: 'upcoming',
    summary: 'Compartimos conocimientos y experiencias técnicas a partir de nuestros proyectos.',
    description: 'Compartimos conocimientos y experiencias técnicas a partir de nuestros proyectos.',
    iconName: 'GraduationCap',
    features: [],
    deliverables: []
  }
];

export const VALUE_PILLARS: ValuePillar[] = [
  {
    number: '01',
    title: 'Tecnología conectada.',
    subtitle: 'SOFTWARE, HARDWARE E INFORMACIÓN.',
    description: 'No vemos la tecnología como piezas aisladas. Buscamos integrar herramientas, sistemas y dispositivos cuando hacerlo aporta valor a una solución.',
    iconName: 'Network',
    quote: '«La tecnología funciona mejor cuando sus partes tienen un propósito común».'
  },
  {
    number: '02',
    title: 'Resolver antes que complicar.',
    subtitle: 'SOLUCIONES CON PROPÓSITO.',
    description: 'Partimos de comprender el problema. Elegimos las herramientas y tecnologías según lo que realmente se necesita, evitando complejidad innecesaria.',
    iconName: 'Target',
    quote: '«No se trata de utilizar más tecnología, sino de utilizarla mejor».'
  },
  {
    number: '03',
    title: 'Ingeniería con criterio.',
    subtitle: 'CONOCIMIENTO TÉCNICO Y DESARROLLO.',
    description: 'Combinamos conocimientos de ingeniería y desarrollo de software para comprender las necesidades, analizar alternativas y construir soluciones coherentes con cada contexto.',
    iconName: 'Wrench',
    quote: '«Entender el problema es tan importante como saber desarrollar la solución».'
  },
  {
    number: '04',
    title: 'Aprender construyendo.',
    subtitle: 'EXPERIMENTACIÓN Y MEJORA CONTINUA.',
    description: 'Desarrollamos, probamos, documentamos y aprendemos de cada proyecto. Creemos que las buenas soluciones se construyen mediante la práctica y la mejora constante.',
    iconName: 'BookOpenCheck',
    quote: '«Cada proyecto es una oportunidad para aprender y mejorar».'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'gestion-operaciones-mineras',
    name: 'Sistema de gestión y monitoreo de operaciones mineras.',
    shortName: 'Gestión Minera',
    category: 'SOFTWARE · GESTIÓN OPERATIVA · MINERÍA',
    filterCategory: 'software',
    status: 'desarrollado',
    statusLabel: 'Desarrollado',
    description: 'Sistema web desarrollado para facilitar el seguimiento y la gestión de actividades operativas en el entorno minero. Integra información relacionada con equipos, movimientos de cancha, personal y producción en una plataforma digital.',
    problem: 'Dispersión de registros diarios en faenas mineras respecto a horas de maquinaria, transferencias de material en cancha, turnos de personal y conciliación de volumen de producción.',
    solution: 'Plataforma web integrada que unifica en tiempo real el registro de equipos, movimientos de cancha, cuadrillas operativas y avance de producción con trazabilidad inmediata.',
    complementaryText: 'Un desarrollo que integra software y conocimiento del entorno minero para organizar información y facilitar el seguimiento de las operaciones.',
    technologies: ['Vue 3', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    architectureSummary: 'Arquitectura web con base de datos relacional para registro operativo, panel reactivo de turnos y reportes operacionales exportables.',
    keyFeatures: [
      'Monitoreo de equipos.',
      'Registro de movimientos de cancha.',
      'Gestión de rol de personal.',
      'Visualización y seguimiento de producción.'
    ],
    honestDisclaimer: 'Sistema desarrollado por iniciativa propia con autorización comercial. Se resguarda la estricta confidencialidad de datos operativos reales y de terceros.',
    visualType: 'mining',
    images: [
      { src: '/images/projects/mineria/panel-operaciones.webp', caption: 'Panel principal de operaciones', isPrimary: true },
      { src: '/images/projects/mineria/equipos.webp', caption: 'Monitoreo de equipos' },
      { src: '/images/projects/mineria/movimientos-cancha.webp', caption: 'Movimientos de cancha' },
      { src: '/images/projects/mineria/produccion.webp', caption: 'Producción y rol de personal' }
    ]
  },
  {
    id: 'sistema-gestion-empresarial',
    name: 'Sistema de gestión empresarial.',
    shortName: 'Gestión Empresarial',
    category: 'SOFTWARE · GESTIÓN EMPRESARIAL',
    filterCategory: 'software',
    status: 'desarrollado',
    statusLabel: 'Desarrollado',
    description: 'Aplicación web orientada a la gestión de operaciones, ventas, inventarios y registros administrativos. Busca centralizar información y facilitar las actividades de gestión del negocio.',
    problem: 'Pérdida de control en inventarios, ventas no sincronizadas y dificultad para conciliar caja diaria en negocios que operan con registros manuales.',
    solution: 'Aplicación web administrativa para registrar transacciones de venta, gestionar inventario de productos e insumos, control de caja y emisión de reportes administrativos.',
    complementaryText: 'Desarrollo práctico enfocado en ordenar la información operativa del negocio sin añadir pasos innecesarios.',
    technologies: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vite', 'Cloud DB'],
    architectureSummary: 'Aplicación web ligera con gestión de estado centralizada, registro de ventas, control de existencias y reportes administrativos.',
    keyFeatures: [
      'Gestión de productos.',
      'Control de inventarios.',
      'Registro de ventas.',
      'Control de caja.',
      'Gestión de gastos.',
      'Reportes administrativos.'
    ],
    honestDisclaimer: 'Aplicación funcional orientada a la gestión administrativa diaria de negocios y comercios.',
    visualType: 'business',
    images: [
      { src: '/images/projects/gestion/dashboard.webp', caption: 'Dashboard principal', isPrimary: true },
      { src: '/images/projects/gestion/productos.webp', caption: 'Módulo de productos' },
      { src: '/images/projects/gestion/reportes.webp', caption: 'Reportes y gestión' }
    ]
  },
  {
    id: 'iot-nivel-agua',
    name: 'Monitoreo remoto de nivel de agua.',
    shortName: 'Monitoreo de Nivel IoT',
    category: 'IoT · HARDWARE · MONITOREO REMOTO',
    filterCategory: 'iot',
    status: 'prototipo',
    statusLabel: 'Prototipo',
    description: 'Proyecto que integra un microcontrolador ESP32, sensor ultrasónico, conectividad inalámbrica y una plataforma web para visualizar información del nivel de agua de un tanque.',
    problem: 'Supervisión manual riesgosa y discontinua en tanques de agua, con ausencia de lecturas continuas o alertas a distancia.',
    solution: 'Sistema que conecta una medición física ultrasónica con un microcontrolador ESP32 y un servidor en la nube para visualizar lecturas a través de una plataforma web.',
    complementaryText: 'El objetivo es conectar un sistema de medición física con una plataforma digital que permita consultar la información de manera remota.',
    technologies: [
      'ESP32-S3',
      'Sensor ultrasónico JSN-SR04T',
      'Conectividad Wi-Fi',
      'Comunicación con servidor VPS',
      'Plataforma web de monitoreo'
    ],
    architectureSummary: 'Sensor JSN-SR04T -> Microcontrolador ESP32-S3 -> Transmisión JSON HTTP vía Wi-Fi -> Servidor VPS -> Plataforma web de monitoreo.',
    keyFeatures: [
      'ESP32-S3.',
      'Sensor ultrasónico JSN-SR04T.',
      'Conectividad Wi-Fi.',
      'Comunicación con servidor VPS.',
      'Plataforma web de monitoreo.'
    ],
    honestDisclaimer: 'Prototipo funcional demostrativo de hardware y software conectado, desarrollado para validar la transmisión de variables físicas a la web.',
    visualType: 'iot',
    images: [
      { src: '/images/projects/iot/prototipo.webp', caption: 'Prototipo electrónico ESP32', isPrimary: true },
      { src: '/images/projects/iot/sensor-tanque.webp', caption: 'Sensor instalado en el tanque' },
      { src: '/images/projects/iot/monitoreo-web.webp', caption: 'Panel web de monitoreo' }
    ]
  },
  {
    id: 'suiteminerals',
    name: 'SuiteMinerals.',
    shortName: 'SuiteMinerals',
    category: 'INGENIERÍA · METALURGIA · SOFTWARE',
    filterCategory: 'ingenieria',
    status: 'desarrollo',
    statusLabel: 'En desarrollo',
    description: 'SuiteMinerals es una plataforma tecnológica en desarrollo orientada a incorporar herramientas de cálculo, balances de materia y análisis de información relacionada con procesos metalúrgicos.',
    problem: 'Hojas de cálculo dispersas y propensas a errores para el cálculo rutinario de balances de materia y evaluación metalúrgica de plantas de procesamiento mineral.',
    solution: 'Plataforma web de ingeniería que integra herramientas de cálculo numérico, balances de dos y tres productos y estructuración de información técnica de procesos.',
    complementaryText: 'Un producto propio que busca conectar conocimientos de ingeniería metalúrgica con herramientas digitales para facilitar cálculos y análisis técnicos.',
    technologies: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Algoritmos Numéricos', 'Exportación de Datos'],
    architectureSummary: 'Motor de cálculo paramétrico metalúrgico implementado en web para balance de materia, estimación de recuperaciones y reportes estructurados.',
    keyFeatures: [
      'Cálculos metalúrgicos.',
      'Balances de materia.',
      'Organización de información técnica.',
      'Análisis de datos de procesos.',
      'Visualización de resultados.',
      'Incorporación progresiva de módulos especializados.'
    ],
    honestDisclaimer: 'SuiteMinerals es un producto propio en desarrollo. Sus módulos y funcionalidades se implementan y verifican de forma progresiva.',
    visualType: 'industrial',
    dedicatedUrl: '/proyectos/suiteminerals',
    images: [
      { src: '/images/projects/suiteminerals/inicio.webp', caption: 'Interfaz principal de SuiteMinerals', isPrimary: true },
      { src: '/images/projects/suiteminerals/balance-materia.webp', caption: 'Módulo de balance de materia' },
      { src: '/images/projects/suiteminerals/analisis.webp', caption: 'Módulo de cálculos o análisis' }
    ]
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
    id: 'gestion-empresarial',
    number: '01',
    title: 'Gestión empresarial',
    description: 'Sistemas y aplicaciones para organizar información, gestionar operaciones y facilitar el seguimiento de actividades.',
    applications: [
      'Sistemas de gestión',
      'Aplicaciones web',
      'Bases de datos',
      'Paneles de información'
    ],
    iconName: 'Building2'
  },
  {
    id: 'ingenieria-procesos',
    number: '02',
    title: 'Ingeniería y procesos',
    description: 'Herramientas digitales orientadas a cálculos, análisis de información y necesidades técnicas de distintos procesos.',
    badge: 'En desarrollo',
    applications: [
      'Cálculos técnicos',
      'Balances de materia',
      'Análisis de información',
      'SuiteMinerals en desarrollo'
    ],
    iconName: 'Cpu'
  },
  {
    id: 'monitoreo-conectividad',
    number: '03',
    title: 'Monitoreo y conectividad',
    description: 'Proyectos que integran sensores, dispositivos y plataformas digitales para obtener y visualizar información remota.',
    badge: 'Proyectos & prototipos',
    applications: [
      'ESP32 y sensores',
      'Monitoreo de variables',
      'Comunicación entre dispositivos',
      'Telemetría y plataformas web'
    ],
    iconName: 'Radio'
  },
  {
    id: 'informacion-automatizacion',
    number: '04',
    title: 'Información y automatización',
    description: 'Aplicaciones de software e inteligencia artificial para procesar información y simplificar tareas.',
    applications: [
      'Procesamiento de documentos',
      'Aplicaciones de IA',
      'Automatización de tareas',
      'Integración de sistemas'
    ],
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
