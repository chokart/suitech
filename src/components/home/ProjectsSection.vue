<script setup lang="ts">
import { ref } from 'vue';
import { PROJECTS } from '../../data/suitechData';
import type { ProjectItem } from '../../types';
import ProjectModal from '../ui/ProjectModal.vue';
import { 
  FolderGit2, 
  ArrowRight, 
  Radio
} from 'lucide-vue-next';

const selectedProject = ref<ProjectItem | null>(null);
const isModalOpen = ref(false);

const openProject = (project: ProjectItem) => {
  selectedProject.value = project;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedProject.value = null;
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'operativo':
      return {
        text: 'Operativo',
        color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
      };
    case 'desarrollo':
      return {
        text: 'En desarrollo',
        color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30'
      };
    case 'prototipo':
    default:
      return {
        text: 'Prototipo',
        color: 'text-amber-400 bg-amber-500/10 border-amber-500/30'
      };
  }
};
</script>

<template>
  <section id="proyectos" class="py-24 relative bg-brand-dark overflow-hidden">
    <!-- Ambient light -->
    <div class="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-accent/30 text-xs font-mono text-brand-accent mb-4">
          <FolderGit2 class="w-3.5 h-3.5" />
          <span>PORTAFOLIO & ACTIVOS TÉCNICOS</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Proyectos reales construidos con <span class="text-gradient-accent">precisión de ingeniería</span>.
        </h2>
        <p class="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          Soluciones nacidas de desafíos reales en desarrollo de software, automatización, telemetría e inteligencia artificial. Presentadas con honestidad técnica respecto a su estado actual.
        </p>
      </div>

      <!-- Projects Grid (4 Key Projects) -->
      <div class="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div
          v-for="project in PROJECTS"
          :key="project.id"
          class="group rounded-2xl glass-panel p-6 sm:p-8 flex flex-col justify-between border border-white/10 hover:border-brand-accent/40 transition-all duration-300 hover:shadow-glow-accent/20"
        >
          <div>
            <!-- Header Row: Category & Status Badge -->
            <div class="flex items-center justify-between gap-3 mb-5">
              <span class="text-xs font-mono uppercase tracking-wider text-brand-muted">
                {{ project.category }}
              </span>
              <span 
                :class="[
                  'text-xs font-mono px-2.5 py-0.5 rounded-full border flex items-center gap-1.5',
                  getStatusBadge(project.status).color
                ]"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                {{ getStatusBadge(project.status).text }}
              </span>
            </div>

            <!-- Project Mockup Visual Header (Specific for each project type) -->
            <div class="mb-6 rounded-xl bg-brand-surface/90 border border-white/10 p-4 overflow-hidden relative group-hover:border-white/20 transition-all">
              
              <!-- Case 1: AI Automation Pipeline Mockup -->
              <div v-if="project.visualType === 'ai-automation'" class="space-y-3 font-mono text-xs">
                <div class="flex items-center justify-between pb-2 border-b border-white/5 text-[11px] text-slate-400">
                  <span>IA Extractor // Ingesta JSON</span>
                  <span class="text-emerald-400">Precisión 98.6%</span>
                </div>
                <div class="grid grid-cols-3 gap-2">
                  <div class="p-2.5 rounded bg-black/40 border border-white/5">
                    <div class="text-[10px] text-slate-400">Docs Ingeridos</div>
                    <div class="text-base font-bold text-white mt-0.5">1,240 PDFs</div>
                  </div>
                  <div class="p-2.5 rounded bg-black/40 border border-white/5">
                    <div class="text-[10px] text-slate-400">Tiempo / Doc</div>
                    <div class="text-base font-bold text-brand-accent mt-0.5">1.2 seg</div>
                  </div>
                  <div class="p-2.5 rounded bg-black/40 border border-white/5">
                    <div class="text-[10px] text-slate-400">Validación RUC</div>
                    <div class="text-base font-bold text-emerald-400 mt-0.5">100% OK</div>
                  </div>
                </div>
                <div class="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                  <span class="truncate">Schema: { ruc, total, items, fecha, hash }</span>
                  <span class="text-brand-accent-cyan">API 200 OK</span>
                </div>
              </div>

              <!-- Case 2: Analytics & Metrics Dashboard Mockup -->
              <div v-else-if="project.visualType === 'analytics'" class="space-y-3 font-mono text-xs">
                <div class="flex items-center justify-between pb-2 border-b border-white/5 text-[11px] text-slate-400">
                  <span>Analítica Web // Métricas en Vivo</span>
                  <span class="text-cyan-400">SPA Reactiva</span>
                </div>
                <div class="grid grid-cols-3 gap-2">
                  <div class="p-2.5 rounded bg-black/40 border border-white/5">
                    <div class="text-[10px] text-slate-400">Peticiones / seg</div>
                    <div class="text-base font-bold text-emerald-400 mt-0.5">380 req/s</div>
                  </div>
                  <div class="p-2.5 rounded bg-black/40 border border-white/5">
                    <div class="text-[10px] text-slate-400">Latencia Media</div>
                    <div class="text-base font-bold text-white mt-0.5">42 ms</div>
                  </div>
                  <div class="p-2.5 rounded bg-black/40 border border-white/5">
                    <div class="text-[10px] text-slate-400">Disponibilidad</div>
                    <div class="text-base font-bold text-brand-accent mt-0.5">99.98%</div>
                  </div>
                </div>
                <div class="w-full bg-black/50 h-2 rounded-full overflow-hidden flex">
                  <div class="bg-gradient-to-r from-brand-accent to-brand-accent-cyan h-full w-[94%]"></div>
                  <div class="bg-white/10 h-full w-[6%]"></div>
                </div>
              </div>

              <!-- Case 3: IoT Tank Telemetry Mockup -->
              <div v-else-if="project.visualType === 'iot'" class="space-y-3 font-mono text-xs">
                <div class="flex items-center justify-between pb-2 border-b border-white/5 text-[11px] text-slate-400">
                  <span>ESP32 Telemetría // Nodo Reservorio-01</span>
                  <span class="text-emerald-400 flex items-center gap-1">
                    <Radio class="w-3 h-3 animate-ping" /> Transmitiendo
                  </span>
                </div>
                <div class="grid grid-cols-3 gap-2">
                  <div class="p-2.5 rounded bg-black/40 border border-white/5">
                    <div class="text-[10px] text-slate-400">Nivel Actual</div>
                    <div class="text-base font-bold text-cyan-400 mt-0.5">78.4 %</div>
                  </div>
                  <div class="p-2.5 rounded bg-black/40 border border-white/5">
                    <div class="text-[10px] text-slate-400">Volumen Est.</div>
                    <div class="text-base font-bold text-white mt-0.5">15,680 L</div>
                  </div>
                  <div class="p-2.5 rounded bg-black/40 border border-white/5">
                    <div class="text-[10px] text-slate-400">Señal RSSI</div>
                    <div class="text-base font-bold text-emerald-400 mt-0.5">-62 dBm</div>
                  </div>
                </div>
                <div class="w-full bg-black/50 h-2.5 rounded-full overflow-hidden">
                  <div class="bg-gradient-to-r from-cyan-500 to-brand-accent h-full w-[78.4%]"></div>
                </div>
              </div>

              <!-- Case 4: Business Management Mockup -->
              <div v-else class="space-y-3 font-mono text-xs">
                <div class="flex items-center justify-between pb-2 border-b border-white/5 text-[11px] text-slate-400">
                  <span>Caja & Operación // Resumen Diario</span>
                  <span class="text-emerald-400">Conciliado</span>
                </div>
                <div class="grid grid-cols-3 gap-2">
                  <div class="p-2.5 rounded bg-black/40 border border-white/5">
                    <div class="text-[10px] text-slate-400">Ingresos Hoy</div>
                    <div class="text-base font-bold text-emerald-400 mt-0.5">S/ 2,480</div>
                  </div>
                  <div class="p-2.5 rounded bg-black/40 border border-white/5">
                    <div class="text-[10px] text-slate-400">Gastos Registrados</div>
                    <div class="text-base font-bold text-slate-300 mt-0.5">S/ 620</div>
                  </div>
                  <div class="p-2.5 rounded bg-black/40 border border-white/5">
                    <div class="text-[10px] text-slate-400">Margen Neto</div>
                    <div class="text-base font-bold text-brand-accent mt-0.5">75.0%</div>
                  </div>
                </div>
                <div class="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                  <span>Inventario crítico: 0 alertas</span>
                  <span class="text-brand-accent-cyan">Turno cerrado</span>
                </div>
              </div>

            </div>

            <!-- Project Title -->
            <h3 class="text-2xl font-bold text-white group-hover:text-brand-accent transition-colors">
              {{ project.name }}
            </h3>

            <!-- Problem & Solution Narrative -->
            <div class="mt-4 space-y-3 text-sm text-slate-300">
              <p>
                <strong class="text-slate-200 font-semibold">Problema:</strong> {{ project.problem }}
              </p>
              <p>
                <strong class="text-slate-200 font-semibold">Solución:</strong> {{ project.solution }}
              </p>
            </div>

            <!-- Technology Tags (Confirmed Only) -->
            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-2.5 py-1 rounded bg-brand-surface border border-white/5 text-xs font-mono text-slate-300"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Bottom CTA -->
          <div class="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
            <span class="text-xs font-mono text-slate-400">
              {{ project.statusLabel }}
            </span>
            <button
              type="button"
              @click="openProject(project)"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-brand-accent hover:text-brand-dark text-xs font-semibold uppercase tracking-wider text-white transition-all duration-200"
            >
              <span>Ver proyecto</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

    </div>

    <!-- Technical Details Modal -->
    <ProjectModal
      :is-open="isModalOpen"
      :project="selectedProject"
      @close="closeModal"
    />
  </section>
</template>
