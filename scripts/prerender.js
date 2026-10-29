import fs from 'fs';
import path from 'path';

// Define all canonical indexable routes and their exact SEO metadata
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
          legalName: 'Suitech Soluciones Tecnológicas',
          url: 'https://suitechpe.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://suitechpe.com/suitech-logo.png',
            caption: 'Suitech Perú'
          },
          email: 'contacto@suitechpe.com',
          areaServed: {
            '@type': 'Country',
            name: 'Perú'
          },
          sameAs: [
            'https://www.linkedin.com/company/suitechpe',
            'https://github.com/suitechpe',
            'https://www.youtube.com/@suitechpe'
          ],
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
    }
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
    }
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
          serviceType: 'Inteligencia Artificial',
          areaServed: {
            '@type': 'Country',
            name: 'Perú'
          },
          description: 'Automatización de tareas cognitivas, extracción estructurada de documentos PDF/facturas y asistentes virtuales con arquitectura RAG.',
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
    }
  },
  {
    path: '/iot/',
    title: 'Monitoreo Remoto con Sensores y Telemetría IoT en Perú | Suitech IoT',
    description: 'Sistemas de telemetría IoT con ESP32, sensores industriales y tableros web en tiempo real. Monitoreo confiable de nivel, flujo y variables operativas en Perú.',
    canonical: 'https://suitechpe.com/iot/',
    keywords: 'monitoreo remoto con ESP32, sistemas IoT industriales, monitoreo de sensores mediante internet, telemetría y adquisición de datos Perú',
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: 'Telemetría IoT y Monitoreo Remoto con ESP32',
          provider: {
            '@type': 'Organization',
            name: 'Suitech Perú',
            url: 'https://suitechpe.com'
          },
          serviceType: 'Internet de las Cosas (IoT)',
          areaServed: {
            '@type': 'Country',
            name: 'Perú'
          },
          description: 'Instrumentación con microcontroladores ESP32, sensores de campo y transmisión segura hacia tableros web reactivos en la nube.',
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
    }
  },
  {
    path: '/academy/',
    title: 'Tutoriales de Programación, IoT con ESP32 & IA en Español | Suitech Academy',
    description: 'Aprende ingeniería de software real: tutoriales paso a paso de Vue 3, TypeScript, microcontroladores ESP32 con APIs REST y automatización práctica con IA.',
    canonical: 'https://suitechpe.com/academy/',
    keywords: 'tutoriales de programación en español, proyectos con ESP32, desarrollo web con Vue y Spring, inteligencia artificial aplicada a proyectos',
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'EducationalOrganization',
          name: 'Suitech Academy',
          url: 'https://suitechpe.com/academy/',
          description: 'Comunidad y recursos técnicos abiertos para aprender a crear software moderno, conectar hardware y aplicar inteligencia artificial.',
          inLanguage: 'es-PE'
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://suitechpe.com/' },
            { '@type': 'ListItem', position: 2, name: 'Suitech Academy', item: 'https://suitechpe.com/academy/' }
          ]
        }
      ]
    }
  },
  {
    path: '/proyectos/',
    title: 'Proyectos y Portafolio de Ingeniería de Software & IoT | Suitech Perú',
    description: 'Portafolio técnico de Suitech Perú: sistemas de gestión empresarial, monitoreo de nivel de agua con ESP32, extracción con IA y software industrial.',
    canonical: 'https://suitechpe.com/proyectos/',
    keywords: 'proyectos de software Perú, portafolio IoT ESP32, casos de automatización con inteligencia artificial',
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          name: 'Proyectos y Portafolio Técnico de Suitech',
          url: 'https://suitechpe.com/proyectos/',
          description: 'Casos reales de ingeniería aplicada a problemas operacionales en Perú.'
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://suitechpe.com/' },
            { '@type': 'ListItem', position: 2, name: 'Proyectos', item: 'https://suitechpe.com/proyectos/' }
          ]
        }
      ]
    }
  },
  {
    path: '/proyectos/suiteminerals/',
    title: 'SuiteMinerals | Software de Balances Metalúrgicos y Cálculos de Procesos en Perú',
    description: 'Herramienta de software para cálculo de balances metalúrgicos de materia, evaluación de recuperaciones y dimensionamiento de circuitos de plantas concentradoras en Perú.',
    canonical: 'https://suitechpe.com/proyectos/suiteminerals/',
    keywords: 'software para procesos metalúrgicos, balances metalúrgicos con software, herramientas de cálculo metalúrgico, balances de materia minería Perú',
    ogType: 'article',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'SoftwareApplication',
          name: 'SuiteMinerals',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web, Windows, Linux, macOS',
          description: 'Plataforma de software para cálculo de balances metalúrgicos por dos y tres productos, recuperación metalúrgica y dimensionamiento de equipos de beneficio mineral.',
          url: 'https://suitechpe.com/proyectos/suiteminerals/',
          publisher: {
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
    }
  },
  {
    path: '/contacto/',
    title: 'Contacto Técnico y Asesoría Tecnológica | Suitech Perú',
    description: 'Comuníquese directamente con el equipo de ingeniería de Suitech Perú. Cotice desarrollo de software a medida, proyectos de inteligencia artificial o telemetría IoT.',
    canonical: 'https://suitechpe.com/contacto/',
    keywords: 'contacto Suitech Perú, cotizar software Perú, asesoría tecnológica ingeniería',
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ContactPage',
          name: 'Contacto Técnico Suitech Perú',
          url: 'https://suitechpe.com/contacto/',
          description: 'Canal directo de contacto técnico para empresas y profesionales en Perú.'
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://suitechpe.com/' },
            { '@type': 'ListItem', position: 2, name: 'Contacto', item: 'https://suitechpe.com/contacto/' }
          ]
        }
      ]
    }
  }
];

function generateHtmlForRoute(baseHtml, route) {
  let html = baseHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, () => `<title>${route.title}</title>`);
  html = html.replace(/<meta name="title" content=".*?" \/>/i, () => `<meta name="title" content="${route.title}" />`);

  // Replace Description
  html = html.replace(/<meta name="description" content=".*?" \/>/i, () => `<meta name="description" content="${route.description}" />`);

  // Replace Keywords
  html = html.replace(/<meta name="keywords" content=".*?" \/>/i, () => `<meta name="keywords" content="${route.keywords}" />`);

  // Replace Canonical
  html = html.replace(/<link rel="canonical" href=".*?" \/>/i, () => `<link rel="canonical" href="${route.canonical}" />`);

  // Replace Open Graph
  html = html.replace(/<meta property="og:url" content=".*?" \/>/i, () => `<meta property="og:url" content="${route.canonical}" />`);
  html = html.replace(/<meta property="og:title" content=".*?" \/>/i, () => `<meta property="og:title" content="${route.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/i, () => `<meta property="og:description" content="${route.description}" />`);
  html = html.replace(/<meta property="og:type" content=".*?" \/>/i, () => `<meta property="og:type" content="${route.ogType || 'website'}" />`);

  // Replace Twitter
  html = html.replace(/<meta name="twitter:url" content=".*?" \/>/i, () => `<meta name="twitter:url" content="${route.canonical}" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/i, () => `<meta name="twitter:title" content="${route.title}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/i, () => `<meta name="twitter:description" content="${route.description}" />`);

  // Replace JSON-LD
  const schemaJson = JSON.stringify(route.schema, null, 2);
  html = html.replace(
    /<script id="suitech-structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/i,
    () => `<script id="suitech-structured-data" type="application/ld+json">\n${schemaJson}\n    </script>`
  );

  return html;
}

async function runPrerender() {
  const distDir = path.resolve('dist');
  const indexHtmlPath = path.join(distDir, 'index.html');

  if (!fs.existsSync(indexHtmlPath)) {
    console.warn('dist/index.html does not exist. Skipping prerender step.');
    return;
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
  console.log('Generating pre-rendered static HTML files for all canonical routes...');

  for (const route of routesMeta) {
    try {
      const routeHtml = generateHtmlForRoute(baseHtml, route);
      
      if (route.path === '/') {
        fs.writeFileSync(indexHtmlPath, routeHtml, 'utf-8');
        console.log(`✓ / -> dist/index.html (${Math.round(routeHtml.length / 1024)} KB)`);
      } else {
        const subDir = path.join(distDir, route.path.replace(/^\/|\/$/g, ''));
        fs.mkdirSync(subDir, { recursive: true });
        const targetFile = path.join(subDir, 'index.html');
        fs.writeFileSync(targetFile, routeHtml, 'utf-8');
        console.log(`✓ ${route.path} -> ${path.relative(distDir, targetFile)}`);
      }
    } catch (e) {
      console.warn(`Could not prerender route ${route.path}:`, e.message);
    }
  }

  // Create alias for /aprendizaje/ -> dist/aprendizaje/index.html
  try {
    const aprendizajeDir = path.join(distDir, 'aprendizaje');
    fs.mkdirSync(aprendizajeDir, { recursive: true });
    const academyMeta = routesMeta.find(r => r.path === '/academy/');
    if (academyMeta) {
      fs.writeFileSync(path.join(aprendizajeDir, 'index.html'), generateHtmlForRoute(baseHtml, academyMeta), 'utf-8');
      console.log('✓ /aprendizaje/ (alias) -> dist/aprendizaje/index.html');
    }
  } catch (e) {
    console.warn('Could not create alias for /aprendizaje/:', e.message);
  }

  console.log('\nPrerender complete.');
}

runPrerender().catch(err => {
  console.warn('Prerender process error:', err);
});
