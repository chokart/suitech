<script setup lang="ts">
import { 
  GraduationCap, 
  ArrowLeft,
  ArrowRight,
  Code2,
  Cpu,
  Sparkles,
  BookOpen,
  Hammer
} from 'lucide-vue-next';

const areas = [
  {
    title: 'Tutoriales y guías técnicas.',
    description: 'Documentación estructurada y explicaciones paso a paso.',
    icon: BookOpen
  },
  {
    title: 'Desarrollo de software.',
    description: 'Sistemas web, aplicaciones, arquitecturas y buenas prácticas.',
    icon: Code2
  },
  {
    title: 'Electrónica e IoT.',
    description: 'Microcontroladores ESP32, sensores y conexión con la nube.',
    icon: Cpu
  },
  {
    title: 'Inteligencia artificial aplicada.',
    description: 'Procesamiento de información, asistentes e integración práctica.',
    icon: Sparkles
  }
];
</script>

<template>
  <div class="learning-page min-h-screen pt-28 sm:pt-36 pb-24 relative overflow-hidden bg-brand-dark flex flex-col justify-between">
    <!-- Ambient tech glows -->
    <div class="absolute top-20 left-1/3 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[170px] pointer-events-none"></div>
    <div class="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
      
      <!-- Back Navigation Breadcrumb -->
      <div class="mb-8">
        <router-link
          to="/"
          class="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft class="w-4 h-4 text-brand-accent" />
          <span>Volver al inicio</span>
        </router-link>
      </div>

      <!-- Main Editorial Card / Central Construction Showcase -->
      <div class="rounded-3xl glass-panel p-8 sm:p-12 lg:p-14 border border-white/10 shadow-2xl relative overflow-hidden">
        
        <!-- Top Status & Tag Row -->
        <div class="flex flex-wrap items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-white/10 mb-8">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-surface border border-brand-accent/30 text-xs font-mono text-brand-accent">
            <GraduationCap class="w-4 h-4" />
            <span>SUITECH ACADEMY</span>
          </div>

          <!-- Construction Status Badge -->
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-semibold">
            <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>EN CONSTRUCCIÓN</span>
          </div>
        </div>

        <!-- Headline & Statements -->
        <div class="space-y-4">
          <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Estamos preparando <span class="text-gradient-accent">algo nuevo</span>.
          </h1>

          <p class="text-xl sm:text-2xl font-semibold text-brand-accent-glow pt-1">
            Aprender también es construir.
          </p>

          <p class="text-base sm:text-lg text-slate-300 leading-relaxed font-normal pt-2">
            Estamos preparando un espacio para compartir conocimientos, experiencias y proyectos relacionados con desarrollo de software, inteligencia artificial, electrónica e IoT.
          </p>

          <p class="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
            Queremos compartir contenido práctico basado en lo que desarrollamos y aprendemos en Suitech.
          </p>
        </div>

        <!-- Areas that will be addressed -->
        <div class="mt-10 pt-8 border-t border-white/10">
          <div class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
            <Hammer class="w-3.5 h-3.5 text-brand-accent" />
            <span>Áreas que abordaremos:</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              v-for="area in areas"
              :key="area.title"
              class="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-brand-accent/30 transition-all flex items-start gap-3.5"
            >
              <div class="w-9 h-9 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-accent shrink-0 mt-0.5">
                <component :is="area.icon" class="w-4 h-4" />
              </div>
              <div>
                <h3 class="text-sm font-semibold text-white">
                  {{ area.title }}
                </h3>
                <p class="text-xs text-slate-400 mt-1 leading-relaxed">
                  {{ area.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Complementary Notice Box -->
        <div class="mt-10 p-4 sm:p-5 rounded-2xl bg-brand-surface/70 border border-brand-accent/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-3 text-xs font-mono text-slate-300">
            <span class="w-2 h-2 rounded-full bg-brand-accent shrink-0"></span>
            <span>Estamos preparando los primeros contenidos.</span>
          </div>

          <router-link
            to="/proyectos"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium text-white bg-white/5 hover:bg-brand-accent border border-white/10 hover:border-brand-accent transition-colors"
          >
            <span>Ver proyectos en desarrollo</span>
            <ArrowRight class="w-3.5 h-3.5" />
          </router-link>
        </div>

      </div>

    </div>
  </div>
</template>
