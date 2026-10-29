<script setup lang="ts">
import { 
  FileText, 
  Bot, 
  Network, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  ShieldCheck, 
  Cpu
} from 'lucide-vue-next';

const aiCapabilities = [
  {
    icon: FileText,
    title: 'Extracción de Información en Documentos (Línea en desarrollo)',
    description: 'Diseño de pipelines para interpretar documentos técnicos, comprobantes o reportes PDF mediante modelos de lenguaje, estructurando datos en formato JSON.'
  },
  {
    icon: Bot,
    title: 'Asistentes de Consulta Técnica (Bajo evaluación técnica)',
    description: 'Exploración de arquitecturas de recuperación de información (RAG) para asistir en la búsqueda ágil de datos dentro de manuales o procedimientos operativos.'
  },
  {
    icon: Network,
    title: 'Integración de Modelos de IA vía API',
    description: 'Conexión de APIs de modelos de lenguaje en plataformas web existentes, evaluando costos, tiempos de inferencia y privacidad de datos.'
  },
  {
    icon: Cpu,
    title: 'Automatización de Tareas Repetitivas',
    description: 'Desarrollo de scripts y microservicios que simplifican el formateo de reportes y la sincronización de información entre herramientas.'
  }
];

const practicalPrinciples = [
  'Enfoque pragmático: evaluamos la viabilidad económica y técnica antes de aplicar un modelo',
  'Privacidad estricta: los datos confidenciales de su empresa no se utilizan para reentrenar modelos públicos',
  'Pipelines validados con métricas de precisión y mecanismos de respaldo humano (human-in-the-loop)',
  'Arquitecturas híbridas: modelos cloud para razonamiento complejo y microservicios ligeros para velocidad'
];

const faqs = [
  {
    question: '¿Por qué contratar Suitech para implementar Inteligencia Artificial?',
    answer: 'Porque no vendemos expectativas infladas. Analizamos el cuello de botella concreto en sus procesos y diseñamos una solución de IA medible que ahorra horas de trabajo repetitivo cada semana.'
  },
  {
    question: '¿Mis datos empresariales permanecen seguros y privados?',
    answer: 'Absolutamente. Configuramos contratos de procesamiento de datos empresariales donde los datos se transmiten encriptados y bajo políticas estrictas de no-retención para entrenamiento.'
  },
  {
    question: '¿Se requiere reemplazar el software que ya usamos?',
    answer: 'No. El valor de Suitech AI radica en integrarse a sus bases de datos, APIs o sistemas actuales mediante conectores y microservicios sin interrumpir la operación existente.'
  }
];
</script>

<template>
  <div class="min-h-screen pt-28 pb-20 bg-brand-dark text-slate-100">
    
    <!-- Hero Section de Suitech AI -->
    <section class="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div class="absolute -top-10 right-1/4 w-96 h-96 bg-brand-accent/15 rounded-full blur-[140px] pointer-events-none"></div>

      <!-- Breadcrumbs -->
      <nav aria-label="Breadcrumb" class="mb-8">
        <ol class="flex items-center gap-2 text-xs font-mono text-slate-400">
          <li>
            <router-link to="/" class="hover:text-brand-accent transition-colors">Inicio</router-link>
          </li>
          <li><ChevronRight class="w-3.5 h-3.5 text-slate-600" /></li>
          <li class="text-brand-accent font-semibold" aria-current="page">Suitech AI</li>
        </ol>
      </nav>

      <div class="max-w-4xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-accent/30 text-xs font-mono text-brand-accent mb-6 shadow-sm">
          <Sparkles class="w-3.5 h-3.5" />
          <span>SUITECH AI · INTELIGENCIA ARTIFICIAL PARA EMPRESAS EN PERÚ</span>
        </div>

        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
          Inteligencia artificial <span class="text-gradient-accent">aplicada a problemas reales</span> de su empresa.
        </h1>

        <p class="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl">
          Ayudamos a empresas peruanas a integrar modelos de inteligencia artificial y automatización cognitiva. Desde procesamiento automático de documentos hasta asistentes técnicos conectados a sus bases de datos.
        </p>

        <div class="mt-8 flex flex-wrap gap-4 items-center">
          <router-link
            to="/contacto"
            class="inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-accent to-brand-accent-glow hover:shadow-glow-accent hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-brand-accent/40 shadow-lg"
          >
            <span>Evaluar caso de uso con IA</span>
            <ArrowRight class="w-4 h-4" />
          </router-link>

          <router-link
            to="/proyectos"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <span>Ver proyectos de IA</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Pilares de Suitech AI -->
    <section class="mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="border-t border-white/10 pt-16">
        <div class="max-w-3xl mb-12">
          <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Casos prácticos de integración de Inteligencia Artificial
          </h2>
          <p class="mt-3 text-slate-300 text-sm sm:text-base">
            No abordamos la IA como una moda decorativa, sino como una herramienta de ingeniería con retorno de inversión demostrable en productividad y exactitud operativa.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(cap, index) in aiCapabilities"
            :key="index"
            class="p-8 rounded-2xl glass-panel border border-white/10 hover:border-brand-accent/40 hover:bg-brand-surface-elevated/80 transition-all duration-300 group"
          >
            <div class="w-12 h-12 rounded-xl bg-brand-surface border border-white/10 group-hover:border-brand-accent/40 flex items-center justify-center text-brand-accent mb-6 shadow-sm">
              <component :is="cap.icon" class="w-6 h-6" />
            </div>

            <h3 class="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
              {{ cap.title }}
            </h3>

            <p class="mt-3 text-slate-300 text-sm leading-relaxed">
              {{ cap.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Principios y Seguridad -->
    <section class="mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="p-8 sm:p-12 rounded-3xl bg-brand-surface/70 border border-white/10 relative overflow-hidden">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-3">
            <ShieldCheck class="w-4 h-4" />
            <span>SEGURIDAD, ÉTICA Y PRIVACIDAD DE DATOS</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Implementaciones de IA con rigor técnico
          </h2>
          <p class="mt-3 text-slate-300 text-sm sm:text-base">
            Construimos pipelines con observabilidad, límites de gasto por API y protocolos que resguardan la propiedad intelectual de su empresa.
          </p>

          <ul class="mt-8 space-y-3.5">
            <li
              v-for="(item, pIdx) in practicalPrinciples"
              :key="pIdx"
              class="flex items-start gap-3 text-sm text-slate-200"
            >
              <CheckCircle2 class="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="border-t border-white/10 pt-16 max-w-3xl">
        <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-8">
          Preguntas frecuentes sobre adopción de Inteligencia Artificial
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
          ¿Desea explorar cómo la IA puede optimizar su operación?
        </h2>
        <p class="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          Analizamos sus procesos y le mostramos con honestidad técnica qué se puede resolver de inmediato y cuál es el camino óptimo.
        </p>
        <div class="mt-6 flex justify-center">
          <router-link
            to="/contacto"
            class="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-accent to-brand-accent-glow hover:shadow-glow-accent transition-all duration-200"
          >
            <span>Consultar sobre Suitech AI</span>
            <ArrowRight class="w-4 h-4" />
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>
