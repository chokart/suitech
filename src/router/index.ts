import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SolutionsView from '../views/SolutionsView.vue';
import AiView from '../views/AiView.vue';
import IotView from '../views/IotView.vue';
import LearningView from '../views/LearningView.vue';
import ProjectsView from '../views/ProjectsView.vue';
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
      title: 'Suitech Academy · Espacio de Aprendizaje en Preparación | Suitech Perú',
      description: 'Suitech Academy es un espacio en preparación donde compartiremos tutoriales, experiencias y proyectos de desarrollo de software, electrónica, IoT e inteligencia artificial.',
      canonical: 'https://suitechpe.com/academy/',
      keywords: 'Suitech Academy, aprendizaje tecnológico Perú, tutoriales de programación en preparación, IoT electrónica software',
      ogType: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'EducationalOrganization',
            name: 'Suitech Academy',
            url: 'https://suitechpe.com/academy/',
            description: 'Espacio de aprendizaje en preparación donde compartiremos conocimientos y experiencias de desarrollo.',
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
      title: 'Proyectos que estamos construyendo · Portafolio de Tecnología | Suitech Perú',
      description: 'Portafolio de proyectos de Suitech Perú: sistema de gestión y monitoreo de operaciones mineras, software de gestión empresarial, monitoreo IoT con ESP32 y SuiteMinerals.',
      canonical: 'https://suitechpe.com/proyectos/',
      keywords: 'proyectos software minería Perú, sistema gestión operaciones mineras, monitoreo nivel agua ESP32, software empresarial Perú, SuiteMinerals',
      ogType: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'CollectionPage',
            name: 'Proyectos que estamos construyendo · Suitech Perú',
            url: 'https://suitechpe.com/proyectos/',
            description: 'Selección de proyectos de desarrollo de software, monitoreo IoT e ingeniería aplicada.'
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
    redirect: () => {
      window.location.href = 'https://suiteminerals.com';
      return '/proyectos';
    }
  },
  {
    path: '/contacto',
    redirect: '/#contacto'
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
