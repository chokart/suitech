<script setup lang="ts">
import { 
  Code2, 
  BrainCircuit, 
  Workflow, 
  Cpu, 
  Layers, 
  GraduationCap, 
  Check, 
  ArrowUpRight,
  Sparkles
} from 'lucide-vue-next';
import { SOLUTIONS } from '../../data/suitechData';
import { useRouter } from 'vue-router';

const router = useRouter();

const emit = defineEmits<{
  (e: 'select-solution', solutionId: string): void;
}>();

const iconMap: Record<string, any> = {
  Code2,
  BrainCircuit,
  Workflow,
  Cpu,
  Layers,
  GraduationCap
};

const handleConsult = (solutionId: string) => {
  emit('select-solution', solutionId);
  const contactElem = document.getElementById('contacto');
  if (contactElem) {
    contactElem.scrollIntoView({ behavior: 'smooth' });
  } else {
    router.push('/#contacto');
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
          <span>CAPACIDADES & SERVICIOS</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Soluciones tecnológicas diseñadas para resolver <span class="text-gradient-accent">problemas reales</span>.
        </h2>
        <p class="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          Desde software especializado y modelos de inteligencia artificial hasta sensores de campo y formación técnica. Construimos herramientas útiles, mantenibles y orientadas a resultados.
        </p>
      </div>

      <!-- Solutions Grid (6 Cards, 3 columns on large screens) -->
      <div class="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        
        <div
          v-for="solution in SOLUTIONS"
          :key="solution.id"
          class="group relative flex flex-col justify-between rounded-2xl glass-panel p-6 sm:p-8 hover:bg-brand-surface-elevated/90 transition-all duration-300 border border-white/10 hover:border-brand-accent/40 hover:shadow-glow-accent/20"
        >
          <!-- Top Row: Number & Icon Badge -->
          <div>
            <div class="flex items-center justify-between mb-6">
              <span class="font-mono text-xs font-bold text-slate-400 group-hover:text-brand-accent transition-colors">
                // {{ solution.number }}
              </span>
              <div class="w-12 h-12 rounded-xl bg-brand-surface border border-white/10 group-hover:border-brand-accent/40 flex items-center justify-center text-brand-accent-cyan group-hover:text-brand-accent group-hover:scale-105 transition-all duration-300">
                <component :is="iconMap[solution.iconName] || Code2" class="w-6 h-6" />
              </div>
            </div>

            <!-- Badge -->
            <span class="inline-block text-[11px] font-mono uppercase tracking-wider text-brand-accent bg-brand-accent/10 px-2.5 py-1 rounded-md border border-brand-accent/20 mb-3">
              {{ solution.badge }}
            </span>

            <!-- Title -->
            <h3 class="text-xl font-bold text-white group-hover:text-white transition-colors">
              {{ solution.title }}
            </h3>

            <!-- Summary -->
            <p class="mt-3 text-sm text-slate-300 leading-relaxed">
              {{ solution.summary }}
            </p>

            <!-- Feature Bullets -->
            <div class="mt-6 pt-6 border-t border-white/5 space-y-2.5">
              <div 
                v-for="(feature, fIndex) in solution.features" 
                :key="fIndex"
                class="flex items-start gap-2.5 text-xs text-slate-300"
              >
                <Check class="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
                <span>{{ feature }}</span>
              </div>
            </div>
          </div>

          <!-- Bottom Action -->
          <div class="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
            <button
              type="button"
              @click="handleConsult(solution.id)"
              class="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-brand-accent hover:text-brand-dark text-xs font-semibold uppercase tracking-wider text-slate-200 transition-all duration-200 group/btn"
            >
              <span>Consultar solución</span>
              <ArrowUpRight class="w-4 h-4 text-brand-accent group-hover/btn:text-brand-dark group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>
