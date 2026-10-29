<script setup lang="ts">
import { 
  Code2, 
  Database, 
  Workflow, 
  CheckCircle2, 
  ArrowRight, 
  Server, 
  Lock, 
  Sparkles,
  ChevronRight
} from 'lucide-vue-next';

const servicePillars = [
  {
    icon: Code2,
    title: 'Aplicaciones Web & Paneles de Control',
    description: 'Desarrollamos interfaces reactivas, modernas y de alto rendimiento utilizando Vue 3, TypeScript y Tailwind CSS. Sistemas rápidos de cargar y adaptados a flujos operativos exigentes.'
  },
  {
    icon: Server,
    title: 'Desarrollo de APIs REST & Microservicios',
    description: 'Diseñamos arquitecturas de backend sólidas con Spring Boot o Node.js, contratos de API OpenAPI/Swagger documentados, autenticación segura JWT y tiempos de respuesta mínimos.'
  },
  {
    icon: Database,
    title: 'Modelado y Gestión de Bases de Datos',
    description: 'Diseño relacional y optimización de consultas en PostgreSQL, MySQL y almacenamiento cloud. Integridad referencial, respaldos automatizados y esquemas preparados para escalar.'
  },
  {
    icon: Workflow,
    title: 'Integración de Sistemas & Automatización',
    description: 'Conectamos plataformas existentes, ERPs, pasarelas de pago y servicios externos mediante webhooks y colas de mensajes, eliminando la doble digitación manual.'
  }
];

const technicalCapabilities = [
  'Arquitectura limpia basada en componentes y separación de responsabilidades',
  'Despliegue automatizado continuo (CI/CD) con Docker, Git y Dokploy',
  'Seguridad perimetral: cifrado HTTPS/TLS, validación de inputs y protección CSRF/XSS',
  'Pruebas unitarias y de integración para garantizar estabilidad en producción',
  'Propiedad total: entregamos el código fuente documentado sin bloqueos de proveedor'
];

const faqs = [
  {
    question: '¿Qué tipo de software desarrolla Suitech?',
    answer: 'Desarrollamos sistemas de gestión interna, plataformas web SaaS, portales para clientes, APIs para intercambio de datos e interfaces operativas para empresas y profesionales en Perú.'
  },
  {
    question: '¿Soy dueño del código desarrollado?',
    answer: 'Sí. En Suitech entregamos el repositorio Git completo con la documentación técnica y las instrucciones de despliegue. No utilizamos licencias propietarias cautivas.'
  },
  {
    question: '¿Cómo garantizan el rendimiento y la escalabilidad?',
    answer: 'Utilizamos tecnologías probadas como Vue 3, TypeScript y bases de datos relacionales optimizadas, implementando paginación, compresión y estructuras de código modulares.'
  }
];
</script>

<template>
  <div class="min-h-screen pt-28 pb-20 bg-brand-dark text-slate-100">
    
    <!-- Hero Section de Soluciones -->
    <section class="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <!-- Glow ambient background -->
      <div class="absolute -top-10 left-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-[140px] pointer-events-none"></div>

      <!-- Breadcrumbs -->
      <nav aria-label="Breadcrumb" class="mb-8">
        <ol class="flex items-center gap-2 text-xs font-mono text-slate-400">
          <li>
            <router-link to="/" class="hover:text-brand-accent transition-colors">Inicio</router-link>
          </li>
          <li><ChevronRight class="w-3.5 h-3.5 text-slate-600" /></li>
          <li class="text-brand-accent font-semibold" aria-current="page">Suitech Solutions</li>
        </ol>
      </nav>

      <div class="max-w-4xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-accent/30 text-xs font-mono text-brand-accent mb-6 shadow-sm">
          <Sparkles class="w-3.5 h-3.5" />
          <span>SUITECH SOLUTIONS · DESARROLLO DE SOFTWARE EN PERÚ</span>
        </div>

        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
          Desarrollo de <span class="text-gradient-accent">software a medida</span> y sistemas web para empresas en Perú.
        </h1>

        <p class="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl">
          Construimos plataformas digitales sólidas, APIs seguras y sistemas web adaptados a la operación real de su negocio. Eliminamos hojas de cálculo dispersas y procesos manuales con tecnología mantenible y orientada a resultados.
        </p>

        <div class="mt-8 flex flex-wrap gap-4 items-center">
          <router-link
            to="/contacto"
            class="inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-accent to-brand-accent-glow hover:shadow-glow-accent hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-brand-accent/40 shadow-lg"
          >
            <span>Cotizar proyecto de software</span>
            <ArrowRight class="w-4 h-4" />
          </router-link>

          <router-link
            to="/proyectos"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <span>Ver proyectos desarrollados</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Pilares de Servicio -->
    <section class="mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="border-t border-white/10 pt-16">
        <div class="max-w-3xl mb-12">
          <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Nuestros servicios de ingeniería de software
          </h2>
          <p class="mt-3 text-slate-300 text-sm sm:text-base">
            Cada línea de código que escribimos está orientada a resolver cuellos de botella específicos, garantizar seguridad de datos y permitir el crecimiento continuo de la organización.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(pillar, index) in servicePillars"
            :key="index"
            class="p-8 rounded-2xl glass-panel border border-white/10 hover:border-brand-accent/40 hover:bg-brand-surface-elevated/80 transition-all duration-300 group"
          >
            <div class="w-12 h-12 rounded-xl bg-brand-surface border border-white/10 group-hover:border-brand-accent/40 flex items-center justify-center text-brand-accent mb-6 shadow-sm">
              <component :is="pillar.icon" class="w-6 h-6" />
            </div>

            <h3 class="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
              {{ pillar.title }}
            </h3>

            <p class="mt-3 text-slate-300 text-sm leading-relaxed">
              {{ pillar.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Estándares y Garantías -->
    <section class="mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="p-8 sm:p-12 rounded-3xl bg-brand-surface/70 border border-white/10 relative overflow-hidden">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-3">
            <Lock class="w-4 h-4" />
            <span>ESTÁNDARES DE CALIDAD Y ENTREGABLES</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Cómo aseguramos el éxito de cada sistema
          </h2>
          <p class="mt-3 text-slate-300 text-sm sm:text-base">
            No entregamos cajas negras. Nuestra metodología entrega transparencia total, código testeado y documentación para que su equipo mantenga el control.
          </p>

          <ul class="mt-8 space-y-3.5">
            <li
              v-for="(cap, cIdx) in technicalCapabilities"
              :key="cIdx"
              class="flex items-start gap-3 text-sm text-slate-200"
            >
              <CheckCircle2 class="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>{{ cap }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="border-t border-white/10 pt-16 max-w-3xl">
        <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-8">
          Preguntas frecuentes sobre desarrollo a medida
        </h2>

        <div class="space-y-6">
          <article
            v-for="(faq, fIdx) in faqs"
            :key="fIdx"
            class="p-6 rounded-2xl glass-panel border border-white/10"
          >
            <h3 class="text-base font-bold text-white mb-2">
              {{ faq.question }}
            </h3>
            <p class="text-sm text-slate-300 leading-relaxed">
              {{ faq.answer }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <div class="p-10 rounded-3xl bg-gradient-to-b from-brand-surface to-brand-surface-elevated border border-brand-accent/30 shadow-glow-accent/10">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          ¿Listo para digitalizar o modernizar los sistemas de su empresa?
        </h2>
        <p class="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          Conversemos sobre su necesidad técnica. Le plantearemos una propuesta realista, con entregables por fases y presupuesto claro.
        </p>
        <div class="mt-6 flex justify-center">
          <router-link
            to="/contacto"
            class="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-accent to-brand-accent-glow hover:shadow-glow-accent transition-all duration-200"
          >
            <span>Iniciar conversación técnica</span>
            <ArrowRight class="w-4 h-4" />
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>
