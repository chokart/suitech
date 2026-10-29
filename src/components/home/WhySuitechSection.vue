<script setup lang="ts">
import { ref } from 'vue';
import { VALUE_PILLARS } from '../../data/suitechData';
import { 
  Network, 
  Target, 
  Wrench, 
  BookOpenCheck, 
  ShieldCheck,
  CheckCircle2,
  Maximize2,
  X,
  Cpu,
  Server,
  Layers,
  Sparkles
} from 'lucide-vue-next';

const iconMap: Record<string, any> = {
  Network,
  Target,
  Wrench,
  BookOpenCheck
};

const isModalOpen = ref(false);
const activeArea = ref<'iot' | 'dev' | 'server' | '3d'>('iot');

const labAreas = [
  {
    id: 'iot' as const,
    label: 'Prototipos IoT',
    icon: Cpu,
    title: 'Mesa de Hardware & Firmware',
    desc: 'Bancos de prueba con ESP32, sensores ultrasónicos, instrumentación y cableado para validar telemetría antes del despliegue en campo.'
  },
  {
    id: 'dev' as const,
    label: 'Software & IA',
    icon: Layers,
    title: 'Puestos de Desarrollo Web & Modelos',
    desc: 'Arquitectura frontend en Vue 3, backend desacoplado, modelado en TypeScript y pipelines de inteligencia artificial aplicada.'
  },
  {
    id: 'server' as const,
    label: 'Servidores & Red',
    icon: Server,
    title: 'Infraestructura & Despliegues',
    desc: 'Servidores dedicados y VPS administrados con contenedores Docker, CI/CD con GitHub y Dokploy para alta disponibilidad.'
  },
  {
    id: '3d' as const,
    label: 'Fabricación 3D',
    icon: Sparkles,
    title: 'Modelado y Gabinetes a Medida',
    desc: 'Impresión 3D para fabricación de soportes, carcasas protectoras y componentes físicos adaptados a cada sensor.'
  }
];
</script>

<template>
  <section id="nosotros" class="py-24 relative bg-brand-surface/40 border-y border-white/10 overflow-hidden">
    <!-- Ambient glow behind lab -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-brand-accent/5 blur-[160px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
        <div class="max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-accent/30 text-xs font-mono text-brand-accent mb-4">
            <ShieldCheck class="w-3.5 h-3.5" />
            <span>ESPACIO DE INGENIERÍA & I+D</span>
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Por qué <span class="text-gradient-accent">Suitech</span>.
          </h2>
          <p class="mt-4 text-base sm:text-lg text-slate-300">
            Donde el código se une con el hardware real. Desarrollamos software sólido, ensamblamos prototipos físicos y probamos cada solución en nuestro propio espacio de trabajo.
          </p>
        </div>

        <div class="flex items-center gap-2 text-xs font-mono text-slate-400 bg-brand-dark/80 px-4 py-2.5 rounded-xl border border-white/10">
          <CheckCircle2 class="w-4 h-4 text-brand-accent" />
          <span>Ingeniería honesta y verificable</span>
        </div>
      </div>

      <!-- ═══ Laboratorio Showcase Card ═══ -->
      <div class="mt-12 rounded-3xl glass-panel-elevated border border-white/15 overflow-hidden shadow-2xl relative group">
        
        <!-- Lab Header Bar -->
        <div class="px-5 py-3.5 bg-brand-surface/90 border-b border-white/10 flex items-center justify-between backdrop-blur-md">
          <div class="flex items-center gap-2.5">
            <span class="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            <span class="font-mono text-xs text-slate-300 ml-2 hidden sm:inline">
              laboratorio-suitech.pe // centro-prototipado-y-desarrollo
            </span>
          </div>

          <div class="flex items-center gap-3">
            <span class="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400 font-semibold">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              LABORATORIO ACTIVO
            </span>

            <button
              type="button"
              @click="isModalOpen = true"
              class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-brand-accent hover:text-brand-dark text-xs font-mono text-slate-300 transition-colors"
              title="Expandir imagen del laboratorio"
            >
              <Maximize2 class="w-3.5 h-3.5" />
              <span class="hidden sm:inline">Expandir</span>
            </button>
          </div>
        </div>

        <!-- Image Container with Aspect Ratio and Zoom Trigger -->
        <div 
          class="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10] bg-black/60 overflow-hidden cursor-pointer"
          @click="isModalOpen = true"
        >
          <img 
            src="/laboratorio.png" 
            alt="Laboratorio de ingeniería y prototipado de Suitech"
            class="w-full h-full object-cover object-center group-hover:scale-[1.015] transition-transform duration-700 ease-out"
            loading="lazy"
            decoding="async"
          />

          <!-- Gradient overlays for legibility and cinematic depth -->
          <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent pointer-events-none"></div>
          <div class="absolute inset-0 bg-brand-accent/5 mix-blend-color pointer-events-none"></div>

          <!-- Bottom floating badge inside image -->
          <div class="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto z-10 pointer-events-none">
            <div class="inline-flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 p-3.5 sm:px-4 sm:py-2.5 rounded-2xl bg-brand-dark/90 border border-white/15 backdrop-blur-md shadow-lg max-w-xl">
              <div class="flex items-center gap-2 font-mono text-xs text-brand-accent font-bold">
                <span class="w-2 h-2 rounded-full bg-brand-accent"></span>
                <span>SUITECH LAB PERÚ</span>
              </div>
              <span class="hidden sm:inline text-white/20">|</span>
              <span class="text-xs text-slate-300 font-sans">
                Integración directa: Software Web · Inteligencia Artificial · Microcontroladores · Redes
              </span>
            </div>
          </div>
        </div>

        <!-- Lab Interactive Areas Drawer -->
        <div class="p-5 sm:p-6 bg-brand-surface/80 border-t border-white/10 backdrop-blur-md">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-2.5">
            <button
              v-for="area in labAreas"
              :key="area.id"
              type="button"
              @click="activeArea = area.id"
              :class="[
                'p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between',
                activeArea === area.id
                  ? 'bg-brand-accent/15 border-brand-accent/60 shadow-glow-accent/20'
                  : 'bg-white/[0.03] border-white/5 hover:bg-white/[0.06] hover:border-white/15'
              ]"
            >
              <div class="flex items-center justify-between mb-2">
                <span :class="[
                  'text-[11px] font-mono font-bold tracking-wider uppercase',
                  activeArea === area.id ? 'text-brand-accent' : 'text-slate-400'
                ]">
                  {{ area.label }}
                </span>
                <component 
                  :is="area.icon" 
                  :class="[
                    'w-4 h-4',
                    activeArea === area.id ? 'text-brand-accent-cyan' : 'text-slate-500'
                  ]" 
                />
              </div>
              <div class="text-xs font-bold text-white truncate">
                {{ area.title.split('&')[0] }}
              </div>
            </button>
          </div>

          <!-- Active Area Detail Callout -->
          <div 
            v-for="area in labAreas" 
            :key="'detail-' + area.id"
            v-show="activeArea === area.id"
            class="mt-4 p-4 rounded-xl bg-brand-dark/70 border border-brand-accent/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
          >
            <div>
              <span class="text-brand-accent font-mono font-bold uppercase tracking-wider block sm:inline mr-2">
                // {{ area.title }}:
              </span>
              <span class="text-slate-300">
                {{ area.desc }}
              </span>
            </div>
            <div class="shrink-0 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Operatividad Verificada
            </div>
          </div>
        </div>

      </div>

      <!-- ═══ 4 Engineering Pillars Grid ═══ -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        
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
            “{{ pillar.quote }}”
          </div>
        </div>

      </div>

    </div>

    <!-- ═══ Fullscreen Modal Lightbox ═══ -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div 
        v-if="isModalOpen" 
        class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <!-- Backdrop -->
        <div 
          class="fixed inset-0 bg-brand-dark/90 backdrop-blur-xl transition-opacity" 
          @click="isModalOpen = false"
        ></div>

        <!-- Modal Container -->
        <div class="relative w-full max-w-6xl rounded-2xl glass-panel-elevated p-4 sm:p-6 shadow-2xl border border-white/20 z-10">
          <div class="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
            <div>
              <span class="text-xs font-mono text-brand-accent uppercase tracking-wider block">
                Suitech // Laboratorio Central
              </span>
              <h3 class="text-lg sm:text-xl font-bold text-white">
                Espacio de Ingeniería, Prototipado IoT & Servidores
              </h3>
            </div>
            <button
              type="button"
              @click="isModalOpen = false"
              class="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
              aria-label="Cerrar vista expandida"
            >
              <X class="w-5 h-5" />
            </button>
          </div>

          <div class="rounded-xl overflow-hidden bg-black max-h-[75vh]">
            <img 
              src="/laboratorio.png" 
              alt="Vista completa del laboratorio de Suitech"
              class="w-full h-auto object-contain max-h-[75vh] mx-auto"
            />
          </div>

          <div class="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 font-mono">
            <span>Suitech Soluciones Tecnológicas · suitechpe.com</span>
            <button
              type="button"
              @click="isModalOpen = false"
              class="px-4 py-1.5 rounded-lg bg-brand-accent text-white font-sans font-semibold hover:bg-brand-accent-glow transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>
