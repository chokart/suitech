<script setup lang="ts">
import { INDUSTRIES } from '../../data/suitechData';
import { 
  Building2, 
  Sparkles, 
  Layers, 
  Cpu, 
  Radio
} from 'lucide-vue-next';

const iconMap: Record<string, any> = {
  Building2,
  Sparkles,
  Layers,
  Cpu,
  Radio
};
</script>

<template>
  <section class="py-24 relative bg-brand-dark overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-accent/30 text-xs font-mono text-brand-accent mb-4">
          <Layers class="w-3.5 h-3.5" />
          <span>ÁMBITOS DE APLICACIÓN</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Tecnología aplicada a distintos <span class="text-gradient-accent">contextos</span>.
        </h2>
        <p class="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          Exploramos necesidades de distintos entornos y desarrollamos herramientas digitales, sistemas y proyectos tecnológicos para abordarlas.
        </p>
      </div>

      <!-- Ámbitos de Aplicación Grid (4 Contexts - 2x2 Grid) -->
      <div class="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        
        <div
          v-for="industry in INDUSTRIES"
          :key="industry.id"
          class="rounded-2xl glass-panel p-6 sm:p-8 flex flex-col justify-between border border-white/10 hover:border-brand-accent/40 hover:bg-brand-surface-elevated/80 transition-all duration-300 group"
        >
          <div>
            <!-- Top Bar: Number, Badge and Icon -->
            <div class="flex items-center justify-between gap-4 mb-5">
              <div class="flex items-center gap-2.5">
                <span class="font-mono text-xs font-bold text-brand-accent px-2.5 py-1 rounded bg-brand-accent/10 border border-brand-accent/20">
                  {{ industry.number }}
                </span>
                <span 
                  v-if="industry.badge"
                  class="text-[11px] font-mono px-2 py-0.5 rounded border"
                  :class="industry.id === 'ingenieria-procesos' ? 'bg-amber-500/10 text-amber-300 border-amber-500/30' : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'"
                >
                  {{ industry.badge }}
                </span>
              </div>

              <div class="w-11 h-11 rounded-xl bg-brand-surface border border-white/10 group-hover:border-brand-accent/40 flex items-center justify-center text-brand-accent group-hover:text-blue-300 transition-colors">
                <component :is="iconMap[industry.iconName] || Layers" class="w-5 h-5" />
              </div>
            </div>

            <!-- Title -->
            <h3 class="text-xl sm:text-2xl font-extrabold text-white tracking-tight group-hover:text-blue-100 transition-colors">
              {{ industry.number }}. {{ industry.title }}
            </h3>

            <!-- Description -->
            <p class="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {{ industry.description }}
            </p>
          </div>

          <!-- Áreas list -->
          <div class="mt-6 pt-5 border-t border-white/5">
            <div class="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5">
              Áreas:
            </div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(app, aIdx) in industry.applications"
                :key="aIdx"
                class="px-2.5 py-1 rounded-md text-xs font-mono transition-colors"
                :class="app.includes('en desarrollo') ? 'bg-amber-500/10 text-amber-200 border border-amber-500/30 font-medium' : 'bg-white/[0.04] text-slate-200 border border-white/10 hover:border-brand-accent/40'"
              >
                {{ app }}
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>
