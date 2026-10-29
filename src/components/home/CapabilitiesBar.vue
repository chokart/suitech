<script setup lang="ts">
import { CAPABILITIES } from '../../data/suitechData';
import { 
  Code2, 
  BrainCircuit, 
  Cpu, 
  Cog, 
  Factory, 
  FlaskConical, 
  GraduationCap
} from 'lucide-vue-next';

const icons = [
  Code2,
  BrainCircuit,
  Cog,
  Cpu,
  Factory,
  FlaskConical,
  GraduationCap
];
</script>

<template>
  <div class="relative py-6 bg-brand-surface/70 border-y border-white/10 overflow-hidden backdrop-blur-md">
    <!-- Subtle gradient masks for smooth edge fade -->
    <div class="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none"></div>
    <div class="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none"></div>

    <div class="flex items-center">
      <!-- Infinite marquee container -->
      <div class="flex shrink-0 animate-marquee items-center gap-8 pr-8 hover:[animation-play-state:paused]">
        <div 
          v-for="(item, index) in CAPABILITIES" 
          :key="'cap-1-' + index"
          class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 hover:border-brand-accent/40 hover:bg-white/[0.06] transition-colors whitespace-nowrap"
        >
          <span class="w-2 h-2 rounded-full bg-brand-accent shadow-glow-accent"></span>
          <component :is="icons[index % icons.length]" class="w-4 h-4 text-brand-accent-cyan" />
          <span class="text-xs sm:text-sm font-medium tracking-wide text-slate-200">
            {{ item }}
          </span>
        </div>
      </div>

      <!-- Duplicate for infinite seamless loop -->
      <div class="flex shrink-0 animate-marquee items-center gap-8 pr-8 hover:[animation-play-state:paused]" aria-hidden="true">
        <div 
          v-for="(item, index) in CAPABILITIES" 
          :key="'cap-2-' + index"
          class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 hover:border-brand-accent/40 hover:bg-white/[0.06] transition-colors whitespace-nowrap"
        >
          <span class="w-2 h-2 rounded-full bg-brand-accent shadow-glow-accent"></span>
          <component :is="icons[index % icons.length]" class="w-4 h-4 text-brand-accent-cyan" />
          <span class="text-xs sm:text-sm font-medium tracking-wide text-slate-200">
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
