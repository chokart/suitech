<script setup lang="ts">
import { ref, computed } from 'vue';
import { PROJECTS } from '../data/suitechData';
import type { ProjectItem } from '../types';
import ProjectModal from '../components/ui/ProjectModal.vue';
import { trackProjectInteraction } from '../utils/analytics';
import { 
  FolderGit2, 
  ArrowRight, 
  Radio, 
  Check, 
  Layers,
  ArrowLeft
} from 'lucide-vue-next';

const selectedProject = ref<ProjectItem | null>(null);
const isModalOpen = ref(false);
const activeFilter = ref<string>('all');

const filterOptions = [
  { id: 'all', label: 'Todos los proyectos' },
  { id: 'software', label: 'Software & Gestión' },
  { id: 'iot', label: 'IoT & Telemetría' },
  { id: 'ia', label: 'Inteligencia Artificial' },
  { id: 'industrial', label: 'Software Industrial & Metalurgia' },
];

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return PROJECTS;
  if (activeFilter.value === 'software') {
    return PROJECTS.filter(p => p.category.includes('Software') || p.category.includes('Gestión'));
  }
  if (activeFilter.value === 'iot') {
    return PROJECTS.filter(p => p.category.includes('IoT') || p.category.includes('Hardware'));
  }
  if (activeFilter.value === 'ia') {
    return PROJECTS.filter(p => p.category.includes('Inteligencia Artificial') || p.category.includes('Automatización'));
  }
  if (activeFilter.value === 'industrial') {
    return PROJECTS.filter(p => p.category.includes('Industrial') || p.category.includes('Metalurgia'));
  }
  return PROJECTS;
});

const openProject = (project: ProjectItem) => {
  selectedProject.value = project;
  isModalOpen.value = true;
  trackProjectInteraction(project.name, project.category, 'modal_open');
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedProject.value = null;
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'operativo':
      return {
        text: 'Operativo en entorno real',
        color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
      };
    case 'desarrollo':
      return {
        text: 'En desarrollo · Validación técnica',
        color: 'text-blue-400 bg-blue-500/10 border-blue-500/30'
      };
    case 'prototipo':
    default:
      return {
        text: 'Prototipo funcional demostrativo',
        color: 'text-amber-400 bg-amber-500/10 border-amber-500/30'
      };
  }
};
</script>

<template>
  <div class="projects-page min-h-screen pt-28 sm:pt-36 pb-24 relative overflow-hidden">
    <!-- Ambient tech glows -->
    <div class="absolute top-20 left-1/4 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[160px] pointer-events-none"></div>
    <div class="absolute top-1/2 right-10 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Back Navigation Breadcrumb -->
      <div class="mb-8">
        <router-link
          to="/"
          class="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft class="w-4 h-4 text-brand-accent" />
          <span>Volver al inicio</span>
        </router-link>
      </div>

      <!-- Page Header -->
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-accent/30 text-xs font-mono text-brand-accent mb-4">
          <FolderGit2 class="w-3.5 h-3.5" />
          <span>PORTAFOLIO DE INGENIERÍA</span>
        </div>
        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Proyectos reales construidos con <span class="text-gradient-accent">precisión técnica</span>.
        </h1>
        <p class="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          Soluciones tangibles nacidas de necesidades operativas reales. Presentamos cada desarrollo con honestidad de ingeniería, detallando su problema, arquitectura y estado comprobado.
        </p>
      </div>

      <!-- Category Filter Pills -->
      <div class="mt-12 flex flex-wrap gap-2.5">
        <button
          v-for="filter in filterOptions"
          :key="filter.id"
          type="button"
          @click="activeFilter = filter.id"
          :class="[
            'px-5 py-2 rounded-full text-xs font-mono transition-all duration-200 border',
            activeFilter === filter.id
              ? 'bg-brand-accent text-white border-brand-accent font-bold shadow-glow-accent'
              : 'bg-brand-surface text-slate-300 border-white/10 hover:border-brand-accent/40 hover:text-white'
          ]"
        >
          {{ filter.label }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="group rounded-3xl glass-panel p-6 sm:p-8 flex flex-col justify-between border border-white/10 hover:border-brand-accent/40 transition-all duration-300 hover:shadow-glow-accent/20"
        >
          <div>
            <!-- Header Row: Category & Status Badge -->
            <div class="flex items-center justify-between gap-3 mb-5">
              <span class="text-xs font-mono uppercase tracking-wider text-brand-muted">
                {{ project.category }}
              </span>
              <span 
                :class="[
                  'text-xs font-mono px-3 py-1 rounded-full border flex items-center gap-1.5',
                  getStatusBadge(project.status).color
                ]"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                {{ getStatusBadge(project.status).text }}
              </span>
            </div>

            <!-- Project Mockup Visual Header -->
            <div class="mb-6 rounded-2xl bg-brand-surface/90 border border-white/10 p-5 overflow-hidden relative group-hover:border-white/20 transition-all">
              
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
                  <span class="text-blue-400">API 200 OK</span>
                </div>
              </div>

              <!-- Case 2: Analytics & Metrics Dashboard Mockup -->
              <div v-else-if="project.visualType === 'analytics'" class="space-y-3 font-mono text-xs">
                <div class="flex items-center justify-between pb-2 border-b border-white/5 text-[11px] text-slate-400">
                  <span>Analítica Web // Métricas en Vivo</span>
                  <span class="text-blue-400">SPA Reactiva</span>
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
                  <div class="bg-gradient-to-r from-brand-accent to-blue-400 h-full w-[94%]"></div>
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
                    <div class="text-base font-bold text-blue-400 mt-0.5">78.4 %</div>
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
                  <div class="bg-gradient-to-r from-blue-500 to-brand-accent h-full w-[78.4%]"></div>
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
                  <span class="text-blue-400">Turno cerrado</span>
                </div>
              </div>

            </div>

            <!-- Project Title -->
            <h2 class="text-2xl font-bold text-white group-hover:text-brand-accent transition-colors">
              {{ project.name }}
            </h2>

            <!-- Problem & Solution Narrative -->
            <div class="mt-4 space-y-3 text-sm text-slate-300">
              <p>
                <strong class="text-slate-200 font-semibold">Desafío:</strong> {{ project.problem }}
              </p>
              <p>
                <strong class="text-slate-200 font-semibold">Solución:</strong> {{ project.solution }}
              </p>
            </div>

            <!-- Key Features Bullets -->
            <div class="mt-5 pt-4 border-t border-white/5 space-y-2">
              <div 
                v-for="(feature, fIdx) in project.keyFeatures.slice(0, 3)" 
                :key="fIdx"
                class="flex items-start gap-2 text-xs text-slate-300"
              >
                <Check class="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
                <span>{{ feature }}</span>
              </div>
            </div>

            <!-- Technology Tags -->
            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-2.5 py-1 rounded-lg bg-brand-surface border border-white/5 text-xs font-mono text-slate-300"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Bottom CTA -->
          <div class="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
            <span class="text-xs font-mono text-slate-400">
              {{ project.statusLabel }}
            </span>
            <div class="flex items-center gap-2">
              <router-link
                v-if="project.dedicatedUrl"
                :to="project.dedicatedUrl"
                class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-accent/20 hover:bg-brand-accent border border-brand-accent/40 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-200"
              >
                <span>Ver caso completo</span>
                <ArrowRight class="w-3.5 h-3.5" />
              </router-link>
              <button
                type="button"
                @click="openProject(project)"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-brand-accent hover:text-white text-xs font-semibold uppercase tracking-wider text-white transition-all duration-200 shadow-sm"
              >
                <span>Ficha técnica</span>
                <ArrowRight class="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>

      <!-- Call to Action Banner on Projects View -->
      <div class="mt-16 p-8 sm:p-12 rounded-3xl glass-panel-elevated border border-brand-accent/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span class="inline-flex items-center gap-2 text-xs font-mono text-brand-accent uppercase tracking-wider mb-2">
            <Layers class="w-3.5 h-3.5" />
            <span>NUEVOS DESARROLLOS</span>
          </span>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-white">
            ¿Tienes un requerimiento técnico específico?
          </h3>
          <p class="text-sm text-slate-300 mt-2 max-w-xl">
            Evaluamos la viabilidad de tu software, dispositivo o integración sin compromisos ni tecnologías innecesarias.
          </p>
        </div>
        <router-link
          to="/#contacto"
          class="shrink-0 inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm text-white bg-gradient-to-r from-brand-accent to-brand-accent-glow hover:shadow-glow-accent transition-all"
        >
          <span>Consultar proyecto</span>
          <ArrowRight class="w-4 h-4" />
        </router-link>
      </div>

    </div>

    <!-- Technical Details Modal -->
    <ProjectModal
      :is-open="isModalOpen"
      :project="selectedProject"
      @close="closeModal"
    />
  </div>
</template>
