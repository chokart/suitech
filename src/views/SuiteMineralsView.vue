<script setup lang="ts">
import { 
  Calculator, 
  FlaskConical, 
  FileSpreadsheet, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  ShieldCheck, 
  Sparkles, 
  Cpu
} from 'lucide-vue-next';

const mineralsFeatures = [
  {
    icon: Calculator,
    title: 'Balances Metalúrgicos de Materia por Dos y Tres Productos',
    description: 'Cálculo algorítmico riguroso de recuperación metalúrgica, ratios de concentración y contenidos finos a partir de leyes de alimentación, concentrado y relave.'
  },
  {
    icon: FlaskConical,
    title: 'Modelado y Evaluación de Circuitos de Molienda y Flotación',
    description: 'Herramientas interactivas para análisis de granulometría, curvas de moliendabilidad, consumo específico de reactivos y parámetros cinéticos de celdas.'
  },
  {
    icon: FileSpreadsheet,
    title: 'Exportación Directa de Reportes Operativos en Excel y PDF',
    description: 'Generación limpia y automatizada de hojas de cálculo normalizadas y reportes de turno listos para entrega a superintendencias de planta y control de procesos.'
  },
  {
    icon: Cpu,
    title: 'Cálculos de Dimensionamiento de Equipos Metalúrgicos',
    description: 'Módulos para estimación de capacidad de espesadores, celdas de flotación, molinos de bolas y bombas de pulpa basados en fórmulas estandarizadas de ingeniería.'
  }
];

const engineeringStandards = [
  'Algoritmos validados con casos de balance de masa en plantas concentradoras peruanas',
  'Interfaz web reactiva sin necesidad de instalar macros lentas o complementos de Excel inseguros',
  'Arquitectura modular desarrollada en Vue 3 y TypeScript con precisión numérica en punto flotante',
  'Diseñado por ingenieros para metalurgistas, supervisores de planta y estudiantes de ingeniería de minas y metalurgia'
];

const faqs = [
  {
    question: '¿Qué es SuiteMinerals y a quién está dirigido?',
    answer: 'SuiteMinerals es una plataforma de software desarrollada por Suitech para optimizar los cálculos metalúrgicos rutinarios en plantas de beneficio mineral, concentradoras y laboratorios metalúrgicos en el Perú y Latinoamérica.'
  },
  {
    question: '¿Reemplaza a simuladores industriales comerciales como JKSimMet o Metsim?',
    answer: 'No busca sustituir simuladores de dinámica de fluidos de gran escala, sino proporcionar una herramienta web ligera, instantánea y precisa para el cálculo diario de balances de masa, reportes de turno y comprobaciones operativas de campo.'
  },
  {
    question: '¿Cómo puedo probar SuiteMinerals o solicitar una adaptación a mi planta?',
    answer: 'Puede contactarnos para solicitar una demostración guiada o cotizar la personalización de los balances según el diagrama de flujo (flowshet) particular de su operación.'
  }
];
</script>

<template>
  <div class="min-h-screen pt-28 pb-20 bg-brand-dark text-slate-100">
    
    <!-- Hero Section de SuiteMinerals -->
    <section class="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div class="absolute -top-10 left-1/4 w-96 h-96 bg-brand-accent/15 rounded-full blur-[140px] pointer-events-none"></div>

      <!-- Breadcrumbs -->
      <nav aria-label="Breadcrumb" class="mb-8">
        <ol class="flex items-center gap-2 text-xs font-mono text-slate-400">
          <li>
            <router-link to="/" class="hover:text-brand-accent transition-colors">Inicio</router-link>
          </li>
          <li><ChevronRight class="w-3.5 h-3.5 text-slate-600" /></li>
          <li>
            <router-link to="/proyectos" class="hover:text-brand-accent transition-colors">Proyectos</router-link>
          </li>
          <li><ChevronRight class="w-3.5 h-3.5 text-slate-600" /></li>
          <li class="text-brand-accent font-semibold" aria-current="page">SuiteMinerals</li>
        </ol>
      </nav>

      <div class="max-w-4xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-accent/30 text-xs font-mono text-brand-accent mb-6 shadow-sm">
          <Sparkles class="w-3.5 h-3.5" />
          <span>PROYECTO DESTACADO · SOFTWARE INDUSTRIAL & METALURGIA</span>
        </div>

        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
          SuiteMinerals: <span class="text-gradient-accent">Software de balances metalúrgicos</span> y cálculos de procesos en Perú.
        </h1>

        <p class="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl">
          Herramienta de ingeniería desarrollada para calcular balances de materia, evaluar recuperaciones de planta y dimensionar circuitos de concentración mineral sin depender de hojas de cálculo desconectadas.
        </p>

        <div class="mt-8 flex flex-wrap gap-4 items-center">
          <router-link
            to="/contacto"
            class="inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-accent to-brand-accent-glow hover:shadow-glow-accent hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-brand-accent/40 shadow-lg"
          >
            <span>Consultar por SuiteMinerals</span>
            <ArrowRight class="w-4 h-4" />
          </router-link>

          <router-link
            to="/proyectos"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <span>Volver al portafolio</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Módulos de Cálculo de SuiteMinerals -->
    <section class="mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="border-t border-white/10 pt-16">
        <div class="max-w-3xl mb-12">
          <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Módulos y capacidades técnicas de cálculo
          </h2>
          <p class="mt-3 text-slate-300 text-sm sm:text-base">
            Diseñado para simplificar la jornada de metalurgistas de guardia, superintendentes y consultores independientes que necesitan resultados verificados en minutos.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(feat, index) in mineralsFeatures"
            :key="index"
            class="p-8 rounded-2xl glass-panel border border-white/10 hover:border-brand-accent/40 hover:bg-brand-surface-elevated/80 transition-all duration-300 group"
          >
            <div class="w-12 h-12 rounded-xl bg-brand-surface border border-white/10 group-hover:border-brand-accent/40 flex items-center justify-center text-brand-accent mb-6 shadow-sm">
              <component :is="feat.icon" class="w-6 h-6" />
            </div>

            <h3 class="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
              {{ feat.title }}
            </h3>

            <p class="mt-3 text-slate-300 text-sm leading-relaxed">
              {{ feat.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Rigor Metalúrgico -->
    <section class="mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="p-8 sm:p-12 rounded-3xl bg-brand-surface/70 border border-white/10 relative overflow-hidden">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-3">
            <ShieldCheck class="w-4 h-4" />
            <span>RIGOR DE CÁLCULO Y CONFIABILIDAD OPERATIVA</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Fundamentos de ingeniería química y metalúrgica
          </h2>
          <p class="mt-3 text-slate-300 text-sm sm:text-base">
            Cada ecuación implementada respeta los principios fundamentales de conservación de materia y balance metalúrgico estandarizados en la industria minera peruana.
          </p>

          <ul class="mt-8 space-y-3.5">
            <li
              v-for="(std, sIdx) in engineeringStandards"
              :key="sIdx"
              class="flex items-start gap-3 text-sm text-slate-200"
            >
              <CheckCircle2 class="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>{{ std }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="border-t border-white/10 pt-16 max-w-3xl">
        <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-8">
          Preguntas frecuentes sobre SuiteMinerals
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
          ¿Desea implementar SuiteMinerals en su laboratorio o planta?
        </h2>
        <p class="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          Podemos adaptar las fórmulas a los circuitos específicos de su operación (cobre, oro, polimetálico) y desplegar la herramienta en servidores locales o en la nube.
        </p>
        <div class="mt-6 flex justify-center">
          <router-link
            to="/contacto"
            class="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-accent to-brand-accent-glow hover:shadow-glow-accent transition-all duration-200"
          >
            <span>Solicitar demostración de SuiteMinerals</span>
            <ArrowRight class="w-4 h-4" />
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>
