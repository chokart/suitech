<script setup lang="ts">
import { 
  Code2, 
  BrainCircuit, 
  Cpu, 
  GraduationCap, 
  ArrowRight
} from 'lucide-vue-next';
import { SOLUTIONS } from '../../data/suitechData';

const emit = defineEmits<{
  (e: 'select-solution', solutionId: string): void;
}>();

const iconMap: Record<string, any> = {
  Code2,
  BrainCircuit,
  Cpu,
  GraduationCap
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

const getPreselectedArea = (id: string): string => {
  switch (id) {
    case 'suitech-solutions':
      return 'Desarrollo de software.';
    case 'suitech-ai':
      return 'Inteligencia artificial.';
    case 'suitech-iot':
      return 'IoT y dispositivos.';
    case 'suitech-academy':
      return 'Otro.';
    default:
      return 'Desarrollo de software.';
  }
};

const handleCardAction = (id: string) => {
  const targetArea = getPreselectedArea(id);
  emit('select-solution', targetArea);

  const contactEl = document.getElementById('contacto');
  if (contactEl) {
    contactEl.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.location.hash = '#contacto';
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

      <!-- Solutions Grid (4 Cards - 2x2 Grid) -->
      <div class="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        
        <div
          v-for="solution in SOLUTIONS"
          :key="solution.id"
          class="group relative flex flex-col justify-between rounded-3xl glass-panel p-7 sm:p-9 hover:bg-brand-surface-elevated/90 transition-all duration-300 border border-white/10 hover:border-brand-accent/50 hover:shadow-glow-accent/25"
        >
          <div>
            <!-- Top Row: Line Name, Distinctive Status Badge & Icon -->
            <div class="flex items-start justify-between gap-4 mb-6">
              <div class="flex flex-wrap items-center gap-2.5">
                <!-- Line Name -->
                <span class="inline-flex items-center text-xs font-mono font-bold uppercase tracking-wider text-brand-accent bg-brand-accent/10 px-3 py-1.5 rounded-lg border border-brand-accent/30 shadow-sm">
                  {{ solution.lineName || solution.title }}
                </span>

                <!-- Status Badge -->
                <span 
                  class="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md border font-medium"
                  :class="getStatusBadgeClass(solution.statusType)"
                >
                  <span class="w-1.5 h-1.5 rounded-full" :class="getStatusDotClass(solution.statusType)"></span>
                  {{ solution.statusTag }}
                </span>
              </div>

              <!-- Technical Icon -->
              <div class="w-11 h-11 rounded-xl bg-brand-surface border border-white/10 group-hover:border-brand-accent/40 flex items-center justify-center shrink-0 text-brand-accent-glow group-hover:scale-105 transition-all duration-300 shadow-md">
                <component :is="iconMap[solution.iconName] || Code2" class="w-5 h-5 text-brand-accent group-hover:text-blue-300" />
              </div>
            </div>

            <!-- Título claro y conciso -->
            <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-blue-100 transition-colors">
              {{ solution.heading || solution.badge }}
            </h3>

            <!-- Descripción directa -->
            <p class="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {{ solution.summary }}
            </p>
          </div>

          <!-- Bottom Action: Button to Contact Form with Preselection -->
          <div class="mt-8 pt-6 border-t border-white/5">
            <a
              href="#contacto"
              @click.prevent="handleCardAction(solution.id)"
              class="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-brand-accent text-slate-200 hover:text-white border border-white/10 hover:border-brand-accent text-xs font-semibold uppercase tracking-wider transition-all duration-200 group/btn shadow-sm"
            >
              <span>Hablemos de tu proyecto.</span>
              <ArrowRight class="w-4 h-4 text-brand-accent group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>
