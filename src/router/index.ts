import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SolutionsView from '../views/SolutionsView.vue';
import AiView from '../views/AiView.vue';
import IotView from '../views/IotView.vue';
import LearningView from '../views/LearningView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import SuiteMineralsView from '../views/SuiteMineralsView.vue';
import ContactView from '../views/ContactView.vue';
import { updateSeoMeta, type RouteSeoMeta } from '../utils/seo';
import { trackPageView } from '../utils/analytics';

declare module 'vue-router' {
  interface RouteMeta extends Partial<RouteSeoMeta> {}
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Suitech Perú | Software a Medida, Inteligencia Artificial & IoT',
      description: 'Ingeniería aplicada a problemas reales: desarrollo de software a medida, inteligencia artificial práctica y sistemas de telemetría IoT con ESP32 para empresas en Perú.',
      canonical: 'https://suitechpe.com/',
      keywords: 'Suitech Perú, desarrollo de software a medida en Perú, inteligencia artificial aplicada, monitoreo remoto con ESP32, automatización de procesos, aplicaciones web Perú',
      ogType: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': 'https://suitechpe.com/#organization',
            name: 'Suitech Perú',
            legalName: 'SUITECH PERU',
            url: 'https://suitechpe.com',
            logo: {
              '@type': 'ImageObject',
              url: 'https://suitechpe.com/suitech-logo.png',
              caption: 'Suitech Perú'
            },
            email: 'chokart@gmail.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Arequipa',
              addressRegion: 'Arequipa',
              addressCountry: 'PE'
            },
            areaServed: {
              '@type': 'Country',
              name: 'Perú'
            },
            description: 'Marca tecnológica peruana con sede en Arequipa especializada en desarrollo de software, inteligencia artificial aplicada, telemetría IoT y formación técnica.'
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
    } as RouteSeoMeta
  },
  {
    path: '/soluciones',
    name: 'soluciones',
    component: SolutionsView,
    meta: {
      title: 'Desarrollo de Software a Medida y Sistemas Web en Perú | Suitech Solutions',
      description: 'Desarrollo de sistemas web, aplicaciones cloud, APIs seguras e integración de bases de datos para empresas en Perú. Código documentado y arquitectura moderna.',
      canonical: 'https://suitechpe.com/soluciones/',
      keywords: 'desarrollo de software a medida en Perú, desarrollo de aplicaciones web, sistemas de gestión empresarial, desarrollo de API e integración de sistemas',
      ogType: 'website',
      structuredData: {
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
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Inicio',
                item: 'https://suitechpe.com/'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Suitech Solutions',
                item: 'https://suitechpe.com/soluciones/'
              }
            ]
          }
        ]
      }
    } as RouteSeoMeta
  },
  {
    path: '/inteligencia-artificial',
    name: 'inteligencia-artificial',
    component: AiView,
    meta: {
      title: 'Inteligencia Artificial para Empresas en Perú | Suitech AI',
      description: 'Integración práctica de modelos de inteligencia artificial, procesamiento inteligente de documentos PDF y asistentes virtuales conectados a sus bases de datos en Perú.',
      canonical: 'https://suitechpe.com/inteligencia-artificial/',
      keywords: 'inteligencia artificial para empresas en Perú, automatización de procesos con IA, integración de inteligencia artificial en aplicaciones, extracción de datos de documentos',
      ogType: 'website',
      structuredData: {
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
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Inicio',
                item: 'https://suitechpe.com/'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Suitech AI',
                item: 'https://suitechpe.com/inteligencia-artificial/'
              }
            ]
          }
        ]
      }
    } as RouteSeoMeta
  },
  {
    path: '/iot',
    name: 'iot',
    component: IotView,
    meta: {
      title: 'Monitoreo Remoto con Sensores y Telemetría IoT en Perú | Suitech IoT',
      description: 'Sistemas de telemetría IoT con ESP32, sensores industriales y tableros web en tiempo real. Monitoreo confiable de nivel, flujo y variables operativas en Perú.',
      canonical: 'https://suitechpe.com/iot/',
      keywords: 'monitoreo remoto con ESP32, sistemas IoT industriales, monitoreo de sensores mediante internet, telemetría y adquisición de datos Perú',
      ogType: 'website',
      structuredData: {
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
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Inicio',
                item: 'https://suitechpe.com/'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Suitech IoT',
                item: 'https://suitechpe.com/iot/'
              }
            ]
          }
        ]
      }
    } as RouteSeoMeta
  },
  {
    path: '/academy',
    name: 'academy',
    component: LearningView,
    alias: ['/aprendizaje', '/blog'],
    meta: {
      title: 'Tutoriales de Programación, IoT con ESP32 & IA en Español | Suitech Academy',
      description: 'Aprende ingeniería de software real: tutoriales paso a paso de Vue 3, TypeScript, microcontroladores ESP32 con APIs REST y automatización práctica con IA.',
      canonical: 'https://suitechpe.com/academy/',
      keywords: 'tutoriales de programación en español, proyectos con ESP32, desarrollo web con Vue y Spring, inteligencia artificial aplicada a proyectos',
      ogType: 'website',
      structuredData: {
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
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Inicio',
                item: 'https://suitechpe.com/'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Suitech Academy',
                item: 'https://suitechpe.com/academy/'
              }
            ]
          }
        ]
      }
    } as RouteSeoMeta
  },
  {
    path: '/proyectos',
    name: 'proyectos',
    component: ProjectsView,
    meta: {
      title: 'Proyectos y Portafolio de Ingeniería de Software & IoT | Suitech Perú',
      description: 'Portafolio técnico de Suitech Perú: sistemas de gestión empresarial, monitoreo de nivel de agua con ESP32, extracción con IA y software industrial.',
      canonical: 'https://suitechpe.com/proyectos/',
      keywords: 'proyectos de software Perú, portafolio IoT ESP32, casos de automatización con inteligencia artificial',
      ogType: 'website',
      structuredData: {
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
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Inicio',
                item: 'https://suitechpe.com/'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Proyectos',
                item: 'https://suitechpe.com/proyectos/'
              }
            ]
          }
        ]
      }
    } as RouteSeoMeta
  },
  {
    path: '/proyectos/suiteminerals',
    name: 'suiteminerals',
    component: SuiteMineralsView,
    meta: {
      title: 'SuiteMinerals | Software de Balances Metalúrgicos y Cálculos de Procesos en Perú',
      description: 'Herramienta de software para cálculo de balances metalúrgicos de materia, evaluación de recuperaciones y dimensionamiento de circuitos de plantas concentradoras en Perú.',
      canonical: 'https://suitechpe.com/proyectos/suiteminerals/',
      keywords: 'software para procesos metalúrgicos, balances metalúrgicos con software, herramientas de cálculo metalúrgico, balances de materia minería Perú',
      ogType: 'article',
      structuredData: {
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
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Inicio',
                item: 'https://suitechpe.com/'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Proyectos',
                item: 'https://suitechpe.com/proyectos/'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'SuiteMinerals',
                item: 'https://suitechpe.com/proyectos/suiteminerals/'
              }
            ]
          }
        ]
      }
    } as RouteSeoMeta
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactView,
    meta: {
      title: 'Contacto Técnico y Asesoría Tecnológica | Suitech Perú',
      description: 'Comuníquese directamente con el equipo de ingeniería de Suitech Perú. Cotice desarrollo de software a medida, proyectos de inteligencia artificial o telemetría IoT.',
      canonical: 'https://suitechpe.com/contacto/',
      keywords: 'contacto Suitech Perú, cotizar software Perú, asesoría tecnológica ingeniería',
      ogType: 'website',
      structuredData: {
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
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Inicio',
                item: 'https://suitechpe.com/'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Contacto',
                item: 'https://suitechpe.com/contacto/'
              }
            ]
          }
        ]
      }
    } as RouteSeoMeta
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80
      };
    }
    return { top: 0, behavior: 'smooth' };
  }
});

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    updateSeoMeta(to.meta as unknown as RouteSeoMeta);
  }
  trackPageView(to.fullPath, to.meta?.title as string | undefined);
});

export default router;
