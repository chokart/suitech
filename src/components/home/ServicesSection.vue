<script setup lang="ts">
import { 
  Code2, 
  BrainCircuit, 
  Workflow, 
  Cpu, 
  Layers, 
  GraduationCap, 
  ArrowUpRight,
  Sparkles
} from 'lucide-vue-next';
import { SOLUTIONS } from '../../data/suitechData';

const iconMap: Record<string, any> = {
  Code2,
  BrainCircuit,
  Workflow,
  Cpu,
  Layers,
  GraduationCap
};

const getSolutionRoute = (id: string) => {
  switch (id) {
    case 'suitech-solutions':
      return '/soluciones';
    case 'suitech-ai':
      return '/inteligencia-artificial';
    case 'suitech-iot':
      return '/iot';
    case 'suitech-academy':
      return '/academy';
    default:
      return '/soluciones';
  }
};

const getStatusBadgeClass = (statusType?: string) => {
  switch (statusType) {
    case 'primary':
      return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
    case 'exploration':
      return 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30';
    case 'prototypes':
      return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30';
    case 'upcoming':
      return 'bg-slate-500/15 text-slate-300 border-slate-500/30';
    default:
      return 'bg-brand-surface text-slate-300 border-white/10';
  }
};

const getStatusDotClass = (statusType?: string) => {
  switch (statusType) {
    case 'primary':
      return 'bg-emerald-400 animate-pulse';
    case 'exploration':
      return 'bg-indigo-400';
    case 'prototypes':
      return 'bg-cyan-400';
    case 'upcoming':
      return 'bg-slate-400';
    default:
      return 'bg-slate-400';
  }
};

const getButtonLabel = (id: string) => {
  switch (id) {
    case 'suitech-solutions':
      return 'Conocer más sobre soluciones';
    case 'suitech-ai':
      return 'Conocer más sobre Suitech AI';
    case 'suitech-iot':
      return 'Conocer más sobre Suitech IoT';
    case 'suitech-academy':
      return 'Conocer más sobre Academy';
    default:
      return 'Conocer más';
  }
};
</script>

<template>
  <section id="soluciones" class="py-24 relative bg-brand-dark overflow-hidden">
    <!-- Subtle glow background accents -->
    <div class="absolute top-1/2 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none"></div>
    <div class="absolute bottom-10 right-0 w-96 h-96 bg-brand-accent-cyan/5 rounded-full blur-[140px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-accent/30 text-xs font-mono text-brand-accent mb-4">
          <Sparkles class="w-3.5 h-3.5" />
          <span>NUESTRAS LÍNEAS DE TRABAJO</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Tecnología que toma <span class="text-gradient-accent">forma</span>.
        </h2>
        <p class="mt-2 text-lg sm:text-xl font-medium text-brand-accent-glow">
          Cuatro líneas, una misma visión.
        </p>
        <p class="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          Desarrollamos software, exploramos nuevas tecnologías y construimos proyectos que conectan el mundo digital con necesidades reales.
        </p>
      </div>

      <!-- Solutions Grid (4 Connected Brand Lines - 2x2 Grid) -->
      <div class="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
        
        <div
          v-for="solution in SOLUTIONS"
          :key="solution.id"
          class="group relative flex flex-col justify-between rounded-2xl glass-panel p-6 sm:p-8 hover:bg-brand-surface-elevated/90 transition-all duration-300 border border-white/10 hover:border-brand-accent/50 hover:shadow-glow-accent/25"
        >
          <div>
            <!-- Top Row: Prominent Brand Line Name, Maturity Tag & Icon -->
            <div class="flex items-start justify-between gap-4 mb-5">
              <div class="flex flex-wrap items-center gap-2.5">
                <!-- Brand Line Name: Gran protagonismo -->
                <span class="inline-flex items-center text-xs font-mono font-bold uppercase tracking-wider text-brand-accent bg-brand-accent/10 px-3 py-1.5 rounded-lg border border-brand-accent/30 shadow-sm">
                  {{ solution.lineName || solution.title }}
                </span>

                <!-- Maturity / Role Badge -->
                <span 
                  class="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-md border font-medium"
                  :class="getStatusBadgeClass(solution.statusType)"
                >
                  <span class="w-1.5 h-1.5 rounded-full" :class="getStatusDotClass(solution.statusType)"></span>
                  {{ solution.statusTag }}
                </span>
              </div>

              <!-- Icon -->
              <div class="w-11 h-11 rounded-xl bg-brand-surface border border-white/10 group-hover:border-brand-accent/40 flex items-center justify-center shrink-0 text-brand-accent-glow group-hover:scale-105 transition-all duration-300 shadow-md">
                <component :is="iconMap[solution.iconName] || Code2" class="w-5 h-5 text-brand-accent group-hover:text-blue-300" />
              </div>
            </div>

            <!-- Título claro y conciso -->
            <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-blue-100 transition-colors">
              {{ solution.heading || solution.badge }}
            </h3>

            <!-- Descripción breve -->
            <p class="mt-3.5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {{ solution.summary }}
            </p>

            <!-- Áreas de trabajo -->
            <div class="mt-6 pt-5 border-t border-white/5">
              <div class="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                Áreas de trabajo:
              </div>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="(area, aIndex) in solution.areas" 
                  :key="aIndex"
                  class="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs text-slate-200 font-mono hover:border-brand-accent/40 hover:text-white transition-colors"
                >
                  {{ area }}
                </span>
              </div>
            </div>
          </div>

          <!-- Bottom Action: Internal Linking -->
          <div class="mt-8 pt-5 border-t border-white/5">
            <router-link
              :to="getSolutionRoute(solution.id)"
              class="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-brand-accent hover:text-white text-xs font-semibold uppercase tracking-wider text-slate-200 transition-all duration-200 group/btn"
            >
              <span>{{ getButtonLabel(solution.id) }}</span>
              <ArrowUpRight class="w-4 h-4 text-brand-accent group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </router-link>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>
