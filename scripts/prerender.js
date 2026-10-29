import fs from 'fs';
import path from 'path';

// Define all canonical indexable routes, exact SEO metadata and semantic static HTML shells
const routesMeta = [
  {
    path: '/',
    title: 'Suitech Perú | Software a Medida, Inteligencia Artificial & IoT',
    description: 'Ingeniería aplicada a problemas reales: desarrollo de software a medida, inteligencia artificial práctica y sistemas de telemetría IoT con ESP32 para empresas en Perú.',
    canonical: 'https://suitechpe.com/',
    keywords: 'Suitech Perú, desarrollo de software a medida en Perú, inteligencia artificial aplicada, monitoreo remoto con ESP32, automatización de procesos, aplicaciones web Perú',
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://suitechpe.com/#organization',
          name: 'Suitech Perú',
          url: 'https://suitechpe.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://suitechpe.com/suitech-logo.png',
            caption: 'Suitech Perú'
          },
          email: 'chokart@gmail.com',
          areaServed: {
            '@type': 'Country',
            name: 'Perú'
          },
          description: 'Marca tecnológica peruana especializada en desarrollo de software, inteligencia artificial aplicada, telemetría IoT y formación técnica.'
        },
        {
          '@type': 'WebSite',
          '@id': 'https://suitechpe.com/#website',
          url: 'https://suitechpe.com',
          name: 'Suitech Perú',
          publisher: {
            '@id': 'https://suitechpe.com/#organization'
          },
          inLanguage: 'es-PE'
        }
      ]
    },
    htmlContent: `
      <header style="padding: 1.5rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); background: #070C17; color: #fff;">
        <nav style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center;">
          <a href="/" style="color: #fff; font-weight: bold; text-decoration: none; font-size: 1.25rem;">SUITECH <span style="color: #006EFE;">PERÚ</span></a>
          <div>
            <a href="/soluciones/" style="color: #cbd5e1; margin-left: 1.5rem; text-decoration: none;">Soluciones</a>
            <a href="/inteligencia-artificial/" style="color: #cbd5e1; margin-left: 1.5rem; text-decoration: none;">IA</a>
            <a href="/iot/" style="color: #cbd5e1; margin-left: 1.5rem; text-decoration: none;">IoT</a>
            <a href="/proyectos/" style="color: #cbd5e1; margin-left: 1.5rem; text-decoration: none;">Proyectos</a>
            <a href="/academy/" style="color: #cbd5e1; margin-left: 1.5rem; text-decoration: none;">Academy</a>
            <a href="/contacto/" style="color: #006EFE; margin-left: 1.5rem; text-decoration: none; font-weight: bold;">Contacto</a>
          </div>
        </nav>
      </header>
      <main style="max-width: 1200px; margin: 0 auto; padding: 4rem 1rem; color: #e2e8f0; font-family: system-ui, sans-serif;">
        <h1 style="font-size: 2.75rem; font-weight: 800; color: #ffffff; line-height: 1.2; margin-bottom: 1.5rem;">
          Tecnología que crea soluciones y abre posibilidades.
        </h1>
        <p style="font-size: 1.25rem; color: #94a3b8; max-width: 800px; line-height: 1.6; margin-bottom: 2.5rem;">
          Ingeniería aplicada a problemas reales: unimos desarrollo de software, inteligencia artificial, automatización y sistemas conectados IoT en Perú.
        </p>
        <section style="margin-top: 3rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
          <article style="padding: 2rem; border-radius: 1rem; background: rgba(15,23,42,0.8); border: 1px solid rgba(255,255,255,0.1);">
            <h2 style="font-size: 1.5rem; color: #ffffff; margin-bottom: 0.75rem;"><a href="/soluciones/" style="color: #fff; text-decoration: none;">Suitech Solutions</a></h2>
            <p style="color: #94a3b8; line-height: 1.5;">Desarrollo de sistemas web, aplicaciones, APIs, bases de datos e integraciones de software a medida.</p>
          </article>
          <article style="padding: 2rem; border-radius: 1rem; background: rgba(15,23,42,0.8); border: 1px solid rgba(255,255,255,0.1);">
            <h2 style="font-size: 1.5rem; color: #ffffff; margin-bottom: 0.75rem;"><a href="/inteligencia-artificial/" style="color: #fff; text-decoration: none;">Suitech AI</a></h2>
            <p style="color: #94a3b8; line-height: 1.5;">Inteligencia artificial aplicada, extracción de información en documentos y asistentes de consulta técnica.</p>
          </article>
          <article style="padding: 2rem; border-radius: 1rem; background: rgba(15,23,42,0.8); border: 1px solid rgba(255,255,255,0.1);">
            <h2 style="font-size: 1.5rem; color: #ffffff; margin-bottom: 0.75rem;"><a href="/iot/" style="color: #fff; text-decoration: none;">Suitech IoT</a></h2>
            <p style="color: #94a3b8; line-height: 1.5;">Telemetría y monitoreo con microcontroladores ESP32, sensores de nivel y tableros web en tiempo real.</p>
          </article>
          <article style="padding: 2rem; border-radius: 1rem; background: rgba(15,23,42,0.8); border: 1px solid rgba(255,255,255,0.1);">
            <h2 style="font-size: 1.5rem; color: #ffffff; margin-bottom: 0.75rem;"><a href="/academy/" style="color: #fff; text-decoration: none;">Suitech Academy</a></h2>
            <p style="color: #94a3b8; line-height: 1.5;">Tutoriales, guías técnicas y documentación de proyectos de desarrollo web, hardware y sistemas en español.</p>
          </article>
        </section>
      </main>
      <footer style="margin-top: 5rem; padding: 3rem 1rem; border-top: 1px solid rgba(255,255,255,0.1); background: #070C17; color: #64748b; text-align: center;">
        <p>&copy; 2026 Suitech Perú. Todos los derechos reservados. Correo: chokart@gmail.com</p>
      </footer>
    `
  },
  {
    path: '/soluciones/',
    title: 'Desarrollo de Software a Medida y Sistemas Web en Perú | Suitech Solutions',
    description: 'Desarrollo de sistemas web, aplicaciones cloud, APIs seguras e integración de bases de datos para empresas en Perú. Código documentado y arquitectura moderna.',
    canonical: 'https://suitechpe.com/soluciones/',
    keywords: 'desarrollo de software a medida en Perú, desarrollo de aplicaciones web, sistemas de gestión empresarial, desarrollo de API e integración de sistemas',
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: 'Desarrollo de Software a Medida y Sistemas Web',
          provider: {
            '@type': 'Organization',
            name: 'Suitech Perú',
            url: 'https://suitechpe.com'
          },
          serviceType: 'Desarrollo de Software',
          areaServed: {
            '@type': 'Country',
            name: 'Perú'
          },
          description: 'Construcción de aplicaciones web interactivas, paneles de control, APIs REST y modelado de bases de datos relacionales sin bloqueos propietarios.',
          url: 'https://suitechpe.com/soluciones/'
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://suitechpe.com/' },
            { '@type': 'ListItem', position: 2, name: 'Suitech Solutions', item: 'https://suitechpe.com/soluciones/' }
          ]
        }
      ]
    },
    htmlContent: `
      <main style="max-width: 1200px; margin: 0 auto; padding: 4rem 1rem; color: #e2e8f0; font-family: system-ui, sans-serif;">
        <h1 style="font-size: 2.5rem; font-weight: 800; color: #ffffff; line-height: 1.2; margin-bottom: 1.5rem;">
          Desarrollo de software a medida y sistemas web en Perú
        </h1>
        <p style="font-size: 1.2rem; color: #94a3b8; max-width: 800px; line-height: 1.6; margin-bottom: 2.5rem;">
          Construimos plataformas digitales sólidas y a medida que optimizan la operativa diaria de negocios y profesionales, eliminando procesos manuales propensos a errores.
        </p>
        <section style="margin-top: 2rem;">
          <h2 style="font-size: 1.75rem; color: #fff; margin-bottom: 1rem;">Capacidades Técnicas</h2>
          <ul style="color: #94a3b8; line-height: 1.8; font-size: 1.1rem;">
            <li>Aplicaciones web reactivas y paneles de control modernos en Vue 3 y TypeScript.</li>
            <li>Desarrollo de APIs REST y microservicios con Spring Boot y Node.js.</li>
            <li>Modelado y gestión de bases de datos relacionales en PostgreSQL y MySQL.</li>
            <li>Integración de sistemas existentes y digitalización de flujos de trabajo.</li>
          </ul>
        </section>
        <div style="margin-top: 3rem;">
          <a href="/contacto/" style="display: inline-block; padding: 0.75rem 2rem; background: #006EFE; color: #fff; text-decoration: none; border-radius: 9999px; font-weight: bold;">Consultar por desarrollo de software</a>
        </div>
      </main>
    `
  },
  {
    path: '/inteligencia-artificial/',
    title: 'Inteligencia Artificial para Empresas en Perú | Suitech AI',
    description: 'Integración práctica de modelos de inteligencia artificial, procesamiento inteligente de documentos PDF y asistentes virtuales conectados a sus bases de datos en Perú.',
    canonical: 'https://suitechpe.com/inteligencia-artificial/',
    keywords: 'inteligencia artificial para empresas en Perú, automatización de procesos con IA, integración de inteligencia artificial en aplicaciones, extracción de datos de documentos',
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: 'Inteligencia Artificial Aplicada para Empresas',
          provider: {
            '@type': 'Organization',
            name: 'Suitech Perú',
            url: 'https://suitechpe.com'
          },
          serviceType: 'Inteligencia Artificial y Automatización',
          areaServed: {
            '@type': 'Country',
            name: 'Perú'
          },
          description: 'Integración de modelos LLM, visión artificial, procesamiento estructurado de documentos y automatización de procesos bajo evaluación técnica.',
          url: 'https://suitechpe.com/inteligencia-artificial/'
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://suitechpe.com/' },
            { '@type': 'ListItem', position: 2, name: 'Suitech AI', item: 'https://suitechpe.com/inteligencia-artificial/' }
          ]
        }
      ]
    },
    htmlContent: `
      <main style="max-width: 1200px; margin: 0 auto; padding: 4rem 1rem; color: #e2e8f0; font-family: system-ui, sans-serif;">
        <h1 style="font-size: 2.5rem; font-weight: 800; color: #ffffff; line-height: 1.2; margin-bottom: 1.5rem;">
          Inteligencia artificial aplicada a problemas reales en Perú
        </h1>
        <p style="font-size: 1.2rem; color: #94a3b8; max-width: 800px; line-height: 1.6; margin-bottom: 2.5rem;">
          Área de desarrollo e integración tecnológica: conectamos modelos de lenguaje y visión computacional en aplicaciones web mediante APIs, priorizando la privacidad y la viabilidad técnica.
        </p>
        <section style="margin-top: 2rem;">
          <h2 style="font-size: 1.75rem; color: #fff; margin-bottom: 1rem;">Líneas de Desarrollo</h2>
          <ul style="color: #94a3b8; line-height: 1.8; font-size: 1.1rem;">
            <li>Extracción y procesamiento estructurado de datos en documentos (facturas, comprobantes, contratos PDF).</li>
            <li>Asistentes técnicos basados en modelos de lenguaje con arquitecturas de recuperación de información (RAG).</li>
            <li>Integración de APIs de modelos comerciales y de código abierto en sistemas existentes.</li>
          </ul>
        </section>
        <div style="margin-top: 3rem;">
          <a href="/contacto/" style="display: inline-block; padding: 0.75rem 2rem; background: #006EFE; color: #fff; text-decoration: none; border-radius: 9999px; font-weight: bold;">Evaluar caso de uso con IA</a>
        </div>
      </main>
    `
  },
  {
    path: '/iot/',
    title: 'Monitoreo Remoto con ESP32 y Sensores IoT en Perú | Suitech IoT',
    description: 'Sistemas de telemetría y monitoreo remoto con microcontroladores ESP32, sensores de nivel y conexión a servidores en la nube para empresas en Perú.',
    canonical: 'https://suitechpe.com/iot/',
    keywords: 'monitoreo remoto con ESP32, telemetría y adquisición de datos, sensores de nivel, sistemas IoT en Perú, hardware conectado',
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: 'Monitoreo Remoto con ESP32 y Telemetría IoT',
          provider: {
            '@type': 'Organization',
            name: 'Suitech Perú',
            url: 'https://suitechpe.com'
          },
          serviceType: 'Internet de las Cosas y Telemetría',
          areaServed: {
            '@type': 'Country',
            name: 'Perú'
          },
          description: 'Diseño de prototipos de telemetría con ESP32, sensores de nivel de agua y tableros web en tiempo real sobre servidores VPS.',
          url: 'https://suitechpe.com/iot/'
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://suitechpe.com/' },
            { '@type': 'ListItem', position: 2, name: 'Suitech IoT', item: 'https://suitechpe.com/iot/' }
          ]
        }
      ]
    },
    htmlContent: `
      <main style="max-width: 1200px; margin: 0 auto; padding: 4rem 1rem; color: #e2e8f0; font-family: system-ui, sans-serif;">
        <h1 style="font-size: 2.5rem; font-weight: 800; color: #ffffff; line-height: 1.2; margin-bottom: 1.5rem;">
          Monitoreo remoto con sensores y telemetría IoT en tiempo real
        </h1>
        <p style="font-size: 1.2rem; color: #94a3b8; max-width: 800px; line-height: 1.6; margin-bottom: 2.5rem;">
          Conectamos el mundo físico con la web: instrumentación de campo basada en microcontroladores ESP32, transmisión de telemetría hacia servidores VPS y visualización en paneles reactivos.
        </p>
        <section style="margin-top: 2rem;">
          <h2 style="font-size: 1.75rem; color: #fff; margin-bottom: 1rem;">Proyecto Demostrable</h2>
          <p style="color: #94a3b8; line-height: 1.6; font-size: 1.1rem;">
            Contamos con un prototipo funcional de monitoreo de nivel de agua en reservorios que captura lecturas con sensores ultrasónicos y las transmite vía WiFi/HTTP hacia un servidor VPS con visualización gráfica instantánea.
          </p>
        </section>
        <div style="margin-top: 3rem;">
          <a href="/contacto/" style="display: inline-block; padding: 0.75rem 2rem; background: #006EFE; color: #fff; text-decoration: none; border-radius: 9999px; font-weight: bold;">Consultar por proyectos IoT</a>
        </div>
      </main>
    `
  },
  {
    path: '/academy/',
    title: 'Tutoriales de Programación, ESP32 y Desarrollo Web en Español | Suitech Academy',
    description: 'Guías prácticas y tutoriales de desarrollo web con Vue 3, proyectos IoT con ESP32 y automatización con IA en español. Aprendizaje técnico honesto.',
    canonical: 'https://suitechpe.com/academy/',
    keywords: 'tutoriales de programación en español, proyectos con ESP32, desarrollo web con Vue y TypeScript, telemetría para principiantes, automatización con IA',
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          name: 'Suitech Academy · Formación y Divulgación Tecnológica',
          url: 'https://suitechpe.com/academy/',
          description: 'Espacio de divulgación y artículos técnicos de ingeniería de software, hardware con ESP32 y desarrollo web.'
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://suitechpe.com/' },
            { '@type': 'ListItem', position: 2, name: 'Suitech Academy', item: 'https://suitechpe.com/academy/' }
          ]
        }
      ]
    },
    htmlContent: `
      <main style="max-width: 1200px; margin: 0 auto; padding: 4rem 1rem; color: #e2e8f0; font-family: system-ui, sans-serif;">
        <h1 style="font-size: 2.5rem; font-weight: 800; color: #ffffff; line-height: 1.2; margin-bottom: 1.5rem;">
          Tutoriales de programación, IoT con ESP32 y aplicaciones de IA
        </h1>
        <p style="font-size: 1.2rem; color: #94a3b8; max-width: 800px; line-height: 1.6; margin-bottom: 2.5rem;">
          Divulgación técnica honesta en español: compartimos guías paso a paso de desarrollo web con Vue 3 y TypeScript, proyectos de telemetría con ESP32 y automatización de procesos.
        </p>
        <section style="margin-top: 2rem;">
          <h2 style="font-size: 1.75rem; color: #fff; margin-bottom: 1rem;">Próximas Publicaciones</h2>
          <ul style="color: #94a3b8; line-height: 1.8; font-size: 1.1rem;">
            <li>Cómo conectar un microcontrolador ESP32 con una API web REST.</li>
            <li>Cómo visualizar datos de sensores en una interfaz web moderna en tiempo real.</li>
            <li>Cómo estructurar aplicaciones web escalables con Vue 3 y TypeScript.</li>
            <li>Cómo automatizar la extracción de datos de documentos con Inteligencia Artificial.</li>
          </ul>
        </section>
      </main>
    `
  },
  {
    path: '/proyectos/',
    title: 'Portafolio de Proyectos Tecnológicos y Software | Suitech Perú',
    description: 'Explora nuestros proyectos en desarrollo y operativos: sistemas de gestión, monitoreo de nivel con ESP32, herramientas con IA y software para metalurgia SuiteMinerals.',
    canonical: 'https://suitechpe.com/proyectos/',
    keywords: 'proyectos tecnológicos Perú, software a medida, prototipo ESP32 nivel, SuiteMinerals, software balances metalúrgicos',
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          name: 'Portafolio de Proyectos Tecnológicos Suitech',
          url: 'https://suitechpe.com/proyectos/',
          description: 'Sistemas web operativos, prototipos de telemetría IoT y software industrial en desarrollo.'
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://suitechpe.com/' },
            { '@type': 'ListItem', position: 2, name: 'Proyectos', item: 'https://suitechpe.com/proyectos/' }
          ]
        }
      ]
    },
    htmlContent: `
      <main style="max-width: 1200px; margin: 0 auto; padding: 4rem 1rem; color: #e2e8f0; font-family: system-ui, sans-serif;">
        <h1 style="font-size: 2.5rem; font-weight: 800; color: #ffffff; line-height: 1.2; margin-bottom: 1.5rem;">
          Portafolio de proyectos y desarrollos técnicos
        </h1>
        <p style="font-size: 1.2rem; color: #94a3b8; max-width: 800px; line-height: 1.6; margin-bottom: 2.5rem;">
          Demostramos capacidades a través de código y prototipos funcionales: sistemas de gestión comercial, telemetría IoT y herramientas de ingeniería aplicada.
        </p>
        <section style="margin-top: 2rem;">
          <h2 style="font-size: 1.75rem; color: #fff; margin-bottom: 1rem;">Proyectos Destacados</h2>
          <ul style="color: #94a3b8; line-height: 1.8; font-size: 1.1rem;">
            <li><strong>Sistema de Gestión Empresarial:</strong> Control de ingresos, egresos, stock y cierre de caja.</li>
            <li><strong>Telemetría IoT de Nivel:</strong> Microcontrolador ESP32 con sensor ultrasónico y panel web en vivo.</li>
            <li><strong><a href="/proyectos/suiteminerals/" style="color: #006EFE; text-decoration: none;">SuiteMinerals:</a></strong> Plataforma en desarrollo para balances de materia y cálculos metalúrgicos.</li>
          </ul>
        </section>
      </main>
    `
  },
  {
    path: '/proyectos/suiteminerals/',
    title: 'SuiteMinerals | Software de Balances Metalúrgicos y Cálculos en Perú',
    description: 'SuiteMinerals es una plataforma en desarrollo que reúne herramientas digitales para cálculos y análisis metalúrgicos. Balances de materia y reportes operativos.',
    canonical: 'https://suitechpe.com/proyectos/suiteminerals/',
    keywords: 'herramientas de cálculo metalúrgico, software para procesos metalúrgicos, balances metalúrgicos con software, balance de dos productos, balance metalúrgico Perú, SuiteMinerals',
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'SoftwareApplication',
          name: 'SuiteMinerals',
          applicationCategory: 'EngineeringSoftware',
          operatingSystem: 'Web Browser',
          description: 'Plataforma en desarrollo que reúne herramientas digitales para cálculos y análisis metalúrgicos en plantas y laboratorios en el Perú.',
          url: 'https://suitechpe.com/proyectos/suiteminerals/',
          author: {
            '@type': 'Organization',
            name: 'Suitech Perú',
            url: 'https://suitechpe.com'
          }
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://suitechpe.com/' },
            { '@type': 'ListItem', position: 2, name: 'Proyectos', item: 'https://suitechpe.com/proyectos/' },
            { '@type': 'ListItem', position: 3, name: 'SuiteMinerals', item: 'https://suitechpe.com/proyectos/suiteminerals/' }
          ]
        }
      ]
    },
    htmlContent: `
      <main style="max-width: 1200px; margin: 0 auto; padding: 4rem 1rem; color: #e2e8f0; font-family: system-ui, sans-serif;">
        <h1 style="font-size: 2.5rem; font-weight: 800; color: #ffffff; line-height: 1.2; margin-bottom: 1.5rem;">
          SuiteMinerals: Software de balances metalúrgicos y cálculos de procesos en Perú
        </h1>
        <p style="font-size: 1.2rem; color: #94a3b8; max-width: 800px; line-height: 1.6; margin-bottom: 2.5rem;">
          SuiteMinerals es una plataforma en desarrollo que reúne herramientas digitales para cálculos y análisis metalúrgicos. Sus funcionalidades se incorporan y verifican progresivamente.
        </p>
        <section style="margin-top: 2rem;">
          <h2 style="font-size: 1.75rem; color: #fff; margin-bottom: 1rem;">Módulos en Desarrollo</h2>
          <ul style="color: #94a3b8; line-height: 1.8; font-size: 1.1rem;">
            <li>Balances metalúrgicos de materia por dos y tres productos (leyes de alimentación, concentrado y relave).</li>
            <li>Evaluación de cinéticas de flotación y curvas de recuperación.</li>
            <li>Generación y exportación de reportes de turno estandarizados.</li>
          </ul>
        </section>
        <div style="margin-top: 3rem;">
          <a href="/contacto/" style="display: inline-block; padding: 0.75rem 2rem; background: #006EFE; color: #fff; text-decoration: none; border-radius: 9999px; font-weight: bold;">Consultar por SuiteMinerals</a>
        </div>
      </main>
    `
  },
  {
    path: '/contacto/',
    title: 'Contacto Técnico Directo | Suitech Perú',
    description: 'Conversemos directamente sobre su proyecto de software, inteligencia artificial, IoT o SuiteMinerals. Evaluación técnica honesta y sin compromiso.',
    canonical: 'https://suitechpe.com/contacto/',
    keywords: 'contacto Suitech Perú, cotizar software a medida en Perú, consultoría tecnológica, soporte proyectos IoT',
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ContactPage',
          name: 'Contacto Técnico Directo Suitech Perú',
          url: 'https://suitechpe.com/contacto/',
          description: 'Canal de comunicación directa con el equipo técnico de Suitech Perú.'
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://suitechpe.com/' },
            { '@type': 'ListItem', position: 2, name: 'Contacto', item: 'https://suitechpe.com/contacto/' }
          ]
        }
      ]
    },
    htmlContent: `
      <main style="max-width: 1200px; margin: 0 auto; padding: 4rem 1rem; color: #e2e8f0; font-family: system-ui, sans-serif;">
        <h1 style="font-size: 2.5rem; font-weight: 800; color: #ffffff; line-height: 1.2; margin-bottom: 1.5rem;">
          Contacto Técnico Directo con Suitech Perú
        </h1>
        <p style="font-size: 1.2rem; color: #94a3b8; max-width: 800px; line-height: 1.6; margin-bottom: 2.5rem;">
          Conversemos sobre tu proyecto tecnológico con evaluación técnica directa y sin intermediarios comerciales.
        </p>
        <section style="margin-top: 2rem;">
          <h2 style="font-size: 1.5rem; color: #fff; margin-bottom: 1rem;">Canal Oficial de Correo</h2>
          <p style="color: #94a3b8; font-size: 1.1rem;">
            Escríbenos directamente a: <a href="mailto:chokart@gmail.com" style="color: #006EFE; text-decoration: none; font-weight: bold;">chokart@gmail.com</a>
          </p>
          <p style="color: #64748b; font-size: 0.95rem; margin-top: 0.5rem;">Respuesta y revisión técnica en menos de 24 horas hábiles.</p>
        </section>
      </main>
    `
  }
];

function generateHtmlForRoute(baseHtml, route) {
  let html = baseHtml;

  // Ensure html lang="es-PE"
  html = html.replace(/<html lang=".*?"/i, '<html lang="es-PE"');

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, () => `<title>${route.title}</title>`);

  // Replace Meta Description
  html = html.replace(/<meta name="description" content=".*?" \/>/i, () => `<meta name="description" content="${route.description}" />`);

  // Replace or inject Canonical Link
  if (html.includes('<link rel="canonical"')) {
    html = html.replace(/<link rel="canonical" href=".*?" \/>/i, () => `<link rel="canonical" href="${route.canonical}" />`);
  } else {
    html = html.replace('</head>', `    <link rel="canonical" href="${route.canonical}" />\n  </head>`);
  }

  // Replace Keywords if present
  if (html.includes('<meta name="keywords"')) {
    html = html.replace(/<meta name="keywords" content=".*?" \/>/i, () => `<meta name="keywords" content="${route.keywords}" />`);
  }

  // Replace OpenGraph
  html = html.replace(/<meta property="og:title" content=".*?" \/>/i, () => `<meta property="og:title" content="${route.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/i, () => `<meta property="og:description" content="${route.description}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/i, () => `<meta property="og:url" content="${route.canonical}" />`);

  // Replace Twitter
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/i, () => `<meta name="twitter:title" content="${route.title}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/i, () => `<meta name="twitter:description" content="${route.description}" />`);

  // Replace JSON-LD
  const schemaJson = JSON.stringify(route.schema, null, 2);
  html = html.replace(
    /<script id="suitech-structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/i,
    () => `<script id="suitech-structured-data" type="application/ld+json">\n${schemaJson}\n    </script>`
  );

  // Inyectar HTML semántico dentro de <div id="app"></div> para rastreo e indexación inmediata
  if (route.htmlContent) {
    html = html.replace(
      /<div id="app"><\/div>/i,
      () => `<div id="app">${route.htmlContent}</div>`
    );
  }

  return html;
}

async function runPrerender() {
  const distDir = path.resolve('dist');
  const indexHtmlPath = path.join(distDir, 'index.html');

  if (!fs.existsSync(indexHtmlPath)) {
    console.warn('dist/index.html no existe. Omitiendo etapa de prerender.');
    return;
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
  console.log('Generando archivos HTML estáticos pre-renderizados con contenido semántico...');

  for (const route of routesMeta) {
    try {
      const routeHtml = generateHtmlForRoute(baseHtml, route);
      
      if (route.path === '/') {
        fs.writeFileSync(indexHtmlPath, routeHtml, 'utf-8');
        console.log(`✓ / -> dist/index.html (${Math.round(routeHtml.length / 1024)} KB con HTML semántico)`);
      } else {
        const subDir = path.join(distDir, route.path.replace(/^\/|\/$/g, ''));
        fs.mkdirSync(subDir, { recursive: true });
        const targetFile = path.join(subDir, 'index.html');
        fs.writeFileSync(targetFile, routeHtml, 'utf-8');
        console.log(`✓ ${route.path} -> ${path.relative(distDir, targetFile)} (${Math.round(routeHtml.length / 1024)} KB)`);
      }
    } catch (e) {
      console.warn(`No se pudo pre-renderizar la ruta ${route.path}:`, e.message);
    }
  }

  // Crear alias para /aprendizaje/ -> dist/aprendizaje/index.html
  try {
    const aprendizajeDir = path.join(distDir, 'aprendizaje');
    fs.mkdirSync(aprendizajeDir, { recursive: true });
    const academyMeta = routesMeta.find(r => r.path === '/academy/');
    if (academyMeta) {
      fs.writeFileSync(path.join(aprendizajeDir, 'index.html'), generateHtmlForRoute(baseHtml, academyMeta), 'utf-8');
      console.log('✓ /aprendizaje/ (alias) -> dist/aprendizaje/index.html');
    }
  } catch (e) {
    console.warn('No se pudo crear el alias /aprendizaje/:', e.message);
  }

  console.log('\nPrerender estático completado.');
}

runPrerender().catch(err => {
  console.warn('Error en proceso de prerender:', err);
});
