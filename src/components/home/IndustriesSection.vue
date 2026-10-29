<script setup lang="ts">
import { INDUSTRIES } from '../../data/suitechData';
import { 
  Pickaxe, 
  FlaskConical, 
  Building2, 
  Cpu, 
  Radio, 
  Sparkles,
  Layers
} from 'lucide-vue-next';

const iconMap: Record<string, any> = {
  Pickaxe,
  FlaskConical,
  Building2,
  Cpu,
  Radio,
  Sparkles
};
</script>

<template>
  <section class="py-24 relative bg-brand-dark overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-accent/30 text-xs font-mono text-brand-accent mb-4">
          <Layers class="w-3.5 h-3.5" />
          <span>CAMPOS DE APLICACIÓN</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Sectores donde aportamos <span class="text-gradient-accent">valor tangible</span>.
        </h2>
        <p class="mt-4 text-base sm:text-lg text-slate-300">
          Identificamos desafíos técnicos en entornos específicos y diseñamos arquitecturas adaptadas a su nivel de exigencia operativa.
        </p>
      </div>

      <!-- Industries Grid (6 Sectors) -->
      <div class="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div
          v-for="industry in INDUSTRIES"
          :key="industry.id"
          class="rounded-2xl glass-panel p-6 sm:p-7 flex flex-col justify-between border border-white/10 hover:border-brand-accent-cyan/40 hover:bg-brand-surface-elevated/70 transition-all duration-300"
        >
          <div>
            <div class="w-12 h-12 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-accent-cyan mb-5">
              <component :is="iconMap[industry.iconName] || Layers" class="w-6 h-6" />
            </div>

            <h3 class="text-xl font-bold text-white mb-2">
              {{ industry.title }}
            </h3>

            <p class="text-sm text-slate-300 leading-relaxed font-normal">
              {{ industry.description }}
            </p>
          </div>

          <!-- Applications list -->
          <div class="mt-6 pt-5 border-t border-white/5">
            <div class="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">
              Casos de aplicación:
            </div>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="(app, aIdx) in industry.applications"
                :key="aIdx"
                class="px-2.5 py-1 rounded-md bg-white/[0.04] text-[11px] font-mono text-slate-300"
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
