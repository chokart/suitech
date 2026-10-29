<script setup lang="ts">
import { 
  X, 
  CheckCircle2, 
  Layers, 
  ShieldAlert, 
  Code
} from 'lucide-vue-next';
import type { ProjectItem } from '../../types';

defineProps<{
  project: ProjectItem | null;
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'operativo':
      return {
        text: 'Operativo en entorno real',
        classes: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
      };
    case 'desarrollo':
      return {
        text: 'En desarrollo · Validación técnica',
        classes: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
      };
    case 'prototipo':
    default:
      return {
        text: 'Prototipo funcional de investigación',
        classes: 'bg-amber-500/10 text-amber-400 border-amber-500/30'
      };
  }
};
</script>

<template>
  <transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div 
      v-if="isOpen && project" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <!-- Backdrop -->
      <div 
        class="fixed inset-0 bg-brand-dark/80 backdrop-blur-md transition-opacity" 
        @click="emit('close')"
      ></div>

      <!-- Modal Card -->
      <div class="relative w-full max-w-3xl rounded-2xl glass-panel-elevated p-6 sm:p-8 shadow-2xl border border-white/15 z-10 max-h-[90vh] overflow-y-auto">
        
        <!-- Header -->
        <div class="flex items-start justify-between pb-6 border-b border-white/10">
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-2">
              <span class="text-xs font-mono text-brand-muted uppercase tracking-wider">
                {{ project.category }}
              </span>
              <span 
                :class="[
                  'text-[11px] font-mono px-2.5 py-0.5 rounded-full border',
                  getStatusBadge(project.status).classes
                ]"
              >
                {{ getStatusBadge(project.status).text }}
              </span>
            </div>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {{ project.name }}
            </h3>
          </div>

          <button
            type="button"
            @click="emit('close')"
            class="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            aria-label="Cerrar detalles del proyecto"
          >
            <X class="w-5 h-5" />
          </button>
        </div>

        <!-- Body Content -->
        <div class="mt-6 space-y-6">
          
          <!-- Problem Box -->
          <div class="p-4 rounded-xl bg-red-950/20 border border-red-500/20">
            <h4 class="text-xs font-mono uppercase tracking-wider text-red-400 font-bold mb-1.5 flex items-center gap-1.5">
              <span>Desafío u Oportunidad Operativa</span>
            </h4>
            <p class="text-sm text-slate-300 leading-relaxed">
              {{ project.problem }}
            </p>
          </div>

          <!-- Solution Box -->
          <div class="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
            <h4 class="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-1.5 flex items-center gap-1.5">
              <span>Solución de Ingeniería Suitech</span>
            </h4>
            <p class="text-sm text-slate-300 leading-relaxed">
              {{ project.solution }}
            </p>
          </div>

          <!-- Architecture & Stack -->
          <div>
            <h4 class="text-xs font-mono uppercase tracking-wider text-brand-accent-cyan font-bold mb-3 flex items-center gap-2">
              <Code class="w-4 h-4" />
              <span>Tecnologías Confirmadas</span>
            </h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-3 py-1 rounded-lg bg-brand-surface border border-white/10 text-xs font-mono text-slate-200"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Key Features -->
          <div>
            <h4 class="text-xs font-mono uppercase tracking-wider text-brand-accent font-bold mb-3 flex items-center gap-2">
              <Layers class="w-4 h-4" />
              <span>Funcionalidades Clave</span>
            </h4>
            <ul class="space-y-2">
              <li
                v-for="(feat, fIndex) in project.keyFeatures"
                :key="fIndex"
                class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
              >
                <CheckCircle2 class="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <span>{{ feat }}</span>
              </li>
            </ul>
          </div>

          <!-- Honest Disclaimer / Intellectual Property Protection -->
          <div v-if="project.honestDisclaimer" class="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-400 flex items-start gap-3">
            <ShieldAlert class="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span class="font-bold text-slate-300 block mb-0.5">Nota de transparencia y confidencialidad:</span>
              {{ project.honestDisclaimer }}
            </div>
          </div>

        </div>

        <!-- Footer -->
        <div class="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div class="text-xs font-mono text-slate-400">
            Suitech Perú · suitechpe.com
          </div>
          <button
            type="button"
            @click="emit('close')"
            class="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white transition-colors"
          >
            Cerrar ficha
          </button>
        </div>

      </div>
    </div>
  </transition>
</template>
