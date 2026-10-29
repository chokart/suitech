<script setup lang="ts">
import { WORK_PROCESS } from '../../data/suitechData';
import { 
  SearchCheck, 
  Compass, 
  Code, 
  CheckCircle2, 
  Workflow, 
  ArrowRight
} from 'lucide-vue-next';

const iconMap: Record<string, any> = {
  SearchCheck,
  Compass,
  Code,
  CheckCircle2
};
</script>

<template>
  <section id="metodologia" class="py-24 relative bg-brand-surface/30 border-y border-white/10 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-accent/30 text-xs font-mono text-brand-accent mb-4">
          <Workflow class="w-3.5 h-3.5" />
          <span>METODOLOGÍA DE DESARROLLO</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Cómo <span class="text-gradient-accent">trabajamos</span>.
        </h2>
        <p class="mt-4 text-base sm:text-lg text-slate-300">
          Un proceso iterativo de ingeniería dividido en cuatro fases claras, asegurando entregas verificables y sin sorpresas presupuestarias.
        </p>
      </div>

      <!-- Process Steps Container (Horizontal Flow on Desktop) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        
        <div
          v-for="step in WORK_PROCESS"
          :key="step.step"
          class="relative rounded-2xl glass-panel p-6 flex flex-col justify-between border border-white/10 hover:border-brand-accent/40 transition-all duration-300 group"
        >
          <!-- Step Number & Connector Line (Visual Pipeline) -->
          <div>
            <div class="flex items-center justify-between mb-6">
              <span class="font-mono text-2xl font-black text-white/20 group-hover:text-brand-accent transition-colors">
                {{ step.step }}
              </span>
              <div class="w-12 h-12 rounded-xl bg-brand-surface border border-white/10 group-hover:border-brand-accent/30 flex items-center justify-center text-brand-accent-cyan group-hover:scale-105 transition-all">
                <component :is="iconMap[step.iconName] || Code" class="w-6 h-6" />
              </div>
            </div>

            <!-- Title -->
            <h3 class="text-xl font-bold text-white mb-2">
              {{ step.title }}
            </h3>

            <!-- Action Description -->
            <p class="text-sm text-slate-300 leading-relaxed font-normal">
              {{ step.action }}
            </p>
          </div>

          <!-- Deliverable Badge -->
          <div class="mt-6 pt-4 border-t border-white/5">
            <span class="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
              Entregable clave:
            </span>
            <div class="text-xs font-mono text-brand-accent">
              {{ step.deliverable }}
            </div>
          </div>

        </div>

      </div>

      <!-- Process Bottom Guarantee -->
      <div class="mt-12 p-6 rounded-2xl bg-brand-surface/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
            <CheckCircle2 class="w-5 h-5" />
          </div>
          <div>
            <div class="text-sm font-semibold text-white">Desarrollo modular y sin ataduras propietarias</div>
            <div class="text-xs text-slate-400">Código fuente documentado, despliegues reproducibles con Git y Dokploy.</div>
          </div>
        </div>
        <a
          href="#contacto"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-200 hover:text-white transition-colors shrink-0"
        >
          <span>Iniciar primera fase</span>
          <ArrowRight class="w-3.5 h-3.5 text-brand-accent" />
        </a>
      </div>

    </div>
  </section>
</template>
