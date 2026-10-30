<script setup lang="ts">
import { WORK_PROCESS } from '../../data/suitechData';
import { 
  SearchCheck, 
  Compass, 
  Code, 
  CheckCircle2, 
  Workflow, 
  ArrowUpRight
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
          Abordamos cada proyecto en cuatro etapas: comprendemos la necesidad, planteamos una solución, la desarrollamos y evaluamos su funcionamiento.
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

            <!-- Title: FASE 0X — Nombre -->
            <h3 class="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">
              <span class="text-brand-accent font-mono text-base">FASE {{ step.step }}</span> — {{ step.title }}
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

      <!-- Methodology adaptability note -->
      <p class="mt-6 text-xs text-slate-400 text-center font-normal">
        Esta metodología es una forma de organizar el trabajo, adaptable a las características de cada proyecto. No implica que todos los proyectos tengan exactamente los mismos entregables.
      </p>

      <!-- Franja inferior: Desarrollo organizado y adaptable -->
      <div class="mt-10 p-6 rounded-2xl bg-brand-surface/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
            <CheckCircle2 class="w-5 h-5" />
          </div>
          <div>
            <div class="text-sm font-semibold text-white">Desarrollo organizado y adaptable.</div>
            <div class="text-xs text-slate-400">Trabajamos con herramientas de desarrollo y control de versiones para mantener el código organizado y facilitar su evolución.</div>
          </div>
        </div>
        <a
          href="#contacto"
          class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-accent to-brand-accent-glow hover:shadow-glow-accent hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-brand-accent/40 shadow-md shrink-0"
        >
          <span>INICIAR UN PROYECTO</span>
          <ArrowUpRight class="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  </section>
</template>
