<script setup lang="ts">
import { CAPABILITIES } from '../../data/suitechData';
import { 
  Code2, 
  BrainCircuit, 
  Workflow,
  Cpu, 
  Cloud, 
  LayoutDashboard, 
  GraduationCap
} from 'lucide-vue-next';

const icons = [
  Code2,
  BrainCircuit,
  Workflow,
  Cpu,
  Cloud,
  LayoutDashboard,
  GraduationCap
];
</script>

<template>
  <div class="relative py-5 bg-brand-surface/80 border-y border-brand-accent/20 overflow-hidden backdrop-blur-md">
    <!-- Gradient masks for smooth edge fade -->
    <div class="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none"></div>
    <div class="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none"></div>

    <!-- Single continuous marquee track with width max-content -->
    <div class="marquee-wrapper overflow-hidden flex">
      <div class="marquee-inner flex items-center shrink-0">
        
        <!-- Loop 1 -->
        <div class="flex items-center gap-6 pr-6">
          <div 
            v-for="(item, index) in CAPABILITIES" 
            :key="'set1-' + index"
            class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-dark/60 border border-white/10 hover:border-brand-accent/50 hover:bg-brand-surface-elevated transition-colors whitespace-nowrap shadow-sm"
          >
            <span class="w-2 h-2 rounded-full bg-brand-accent shadow-glow-accent"></span>
            <component :is="icons[index % icons.length]" class="w-4 h-4 text-brand-accent" />
            <span class="text-xs sm:text-sm font-medium tracking-wide text-slate-200">
              {{ item }}
            </span>
          </div>
        </div>

        <!-- Loop 2 (identical duplicate for seamless infinite transition) -->
        <div class="flex items-center gap-6 pr-6" aria-hidden="true">
          <div 
            v-for="(item, index) in CAPABILITIES" 
            :key="'set2-' + index"
            class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-dark/60 border border-white/10 hover:border-brand-accent/50 hover:bg-brand-surface-elevated transition-colors whitespace-nowrap shadow-sm"
          >
            <span class="w-2 h-2 rounded-full bg-brand-accent shadow-glow-accent"></span>
            <component :is="icons[index % icons.length]" class="w-4 h-4 text-brand-accent" />
            <span class="text-xs sm:text-sm font-medium tracking-wide text-slate-200">
              {{ item }}
            </span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee-wrapper {
  width: 100%;
}

.marquee-inner {
  display: flex;
  width: max-content;
  animation: marquee-scroll 32s linear infinite;
}

.marquee-inner:hover {
  animation-play-state: paused;
}

@keyframes marquee-scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-inner {
    animation: none;
    transform: none;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
    width: 100%;
  }
}
</style>
