<script setup lang="ts">
import { VALUE_PILLARS } from '../../data/suitechData';
import { 
  Network, 
  Target, 
  Wrench, 
  BookOpenCheck, 
  ShieldCheck
} from 'lucide-vue-next';

const iconMap: Record<string, any> = {
  Network,
  Target,
  Wrench,
  BookOpenCheck
};
</script>

<template>
  <section id="nosotros" class="py-24 relative bg-brand-surface/40 border-y border-white/10 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="pb-12 border-b border-white/10">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-accent/30 text-xs font-mono text-brand-accent mb-4">
            <ShieldCheck class="w-3.5 h-3.5" />
            <span>PRINCIPIOS DE SUITECH</span>
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Por qué <span class="text-gradient-accent">Suitech</span>.
          </h2>
          <p class="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Creemos en una tecnología bien pensada, construida con criterio y orientada a resolver necesidades reales.
          </p>
        </div>
      </div>

      <!-- 4 Pillars Grid -->
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div
          v-for="pillar in VALUE_PILLARS"
          :key="pillar.number"
          class="relative rounded-2xl glass-panel p-8 hover:border-brand-accent/30 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between mb-6">
              <span class="font-mono text-xs font-bold text-brand-accent px-2.5 py-1 rounded bg-brand-accent/10 border border-brand-accent/20">
                PRINCIPIO {{ pillar.number }}
              </span>
              <div class="w-10 h-10 rounded-lg bg-brand-surface border border-white/10 flex items-center justify-center text-brand-accent-cyan">
                <component :is="iconMap[pillar.iconName] || Network" class="w-5 h-5" />
              </div>
            </div>

            <h3 class="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {{ pillar.title }}
            </h3>

            <div class="text-xs font-mono text-brand-accent-cyan uppercase tracking-wider mt-1 mb-4">
              {{ pillar.subtitle }}
            </div>

            <p class="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {{ pillar.description }}
            </p>
          </div>

          <!-- Technical Quote -->
          <div class="mt-8 pt-6 border-t border-white/5 font-mono text-xs text-slate-400 italic">
            {{ pillar.quote }}
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
