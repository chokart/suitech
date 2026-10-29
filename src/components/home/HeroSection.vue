<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import HeroCanvasBackground from './HeroCanvasBackground.vue';
import { 
  ArrowRight, 
  Cpu, 
  Activity, 
  Layers, 
  Terminal, 
  Server, 
  Zap, 
  Radio
} from 'lucide-vue-next';

// Dynamic typewriter words inspired by Tekton Labs intro
const words = [
  'software a medida.',
  'inteligencia artificial aplicada.',
  'sistemas IoT & telemetría.',
  'soluciones industriales.',
  'productos digitales.'
];

const currentWordIndex = ref(0);
const currentText = ref('');
const isDeleting = ref(false);
let typewriterTimeout: any = null;

const typeSpeed = 75;
const deleteSpeed = 35;
const pauseTime = 2200;

const runTypewriter = () => {
  const fullWord = words[currentWordIndex.value];

  if (!isDeleting.value) {
    currentText.value = fullWord.substring(0, currentText.value.length + 1);
    if (currentText.value === fullWord) {
      typewriterTimeout = setTimeout(() => {
        isDeleting.value = true;
        runTypewriter();
      }, pauseTime);
      return;
    }
  } else {
    currentText.value = fullWord.substring(0, currentText.value.length - 1);
    if (currentText.value === '') {
      isDeleting.value = false;
      currentWordIndex.value = (currentWordIndex.value + 1) % words.length;
      typewriterTimeout = setTimeout(runTypewriter, 350);
      return;
    }
  }

  typewriterTimeout = setTimeout(
    runTypewriter,
    isDeleting.value ? deleteSpeed : typeSpeed
  );
};

onMounted(() => {
  runTypewriter();
});

onUnmounted(() => {
  if (typewriterTimeout) clearTimeout(typewriterTimeout);
});

// Interactive Layer Switcher
const activeLayer = ref<'iot' | 'api' | 'ai' | 'dashboard'>('iot');

const layers = [
  {
    id: 'iot',
    name: '01. Hardware & IoT',
    badge: 'ESP32 Telemetría',
    title: 'Dispositivo & Captura Física',
    code: 'ESP32::read_ultrasonic_tank() -> 78.4% [OK]',
    metric: '78.4%',
    metricLabel: 'Nivel Tanque',
    status: 'Conectado · RSSI -58 dBm'
  },
  {
    id: 'api',
    name: '02. Red & API Gateway',
    badge: 'REST / WebSocket',
    title: 'Transmisión & Ingesta',
    code: 'POST /api/v1/telemetry/nodes { node_id: "ESP-09" }',
    metric: '18 ms',
    metricLabel: 'Latencia Ingesta',
    status: 'HTTP 200 · SSL/TLS Activo'
  },
  {
    id: 'ai',
    name: '03. Lógica & Algoritmos',
    badge: 'IA & Balances',
    title: 'Cálculo & Inferencia',
    code: 'MetalBalance::solve_two_products(recup: 89.4%)',
    metric: '89.4%',
    metricLabel: 'Recup. Metalúrgica',
    status: 'Balance Verificado'
  },
  {
    id: 'dashboard',
    name: '04. Aplicación Web',
    badge: 'Frontend Reactivo',
    title: 'Control Operativo en Vivo',
    code: 'Vue3.render(TelemetryView, { autoRefresh: true })',
    metric: '99.9%',
    metricLabel: 'Disponibilidad Web',
    status: 'SPA Reactiva · Dokploy VPS'
  }
];
</script>

<template>
  <section id="inicio" class="relative min-h-[95vh] pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col justify-center overflow-hidden">
    <!-- Interactive 3D Waves Background Canvas -->
    <HeroCanvasBackground />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      
      <!-- Top Tagline Pill -->
      <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-surface/90 border border-brand-accent/40 text-xs font-mono text-slate-300 mb-6 shadow-glow-accent/20 backdrop-blur-md">
        <span class="flex h-2 w-2 relative">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
        </span>
        <span class="text-white font-bold tracking-wide uppercase text-[11px]">SUI<span class="text-brand-accent">TECH</span></span>
        <span class="text-white/20">|</span>
        <span class="text-slate-300 font-medium">AI-Native Software · IoT Industrial · Ingeniería Aplicada</span>
      </div>

      <!-- Monumental Editorial Typography (Tekton Inspired) -->
      <div class="max-w-5xl">
        <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.06]">
          Convertimos ideas y desafíos en
          <span class="block mt-2 min-h-[1.18em]">
            <span class="text-gradient-accent">{{ currentText }}</span>
            <span class="inline-block w-1 h-[0.85em] bg-brand-accent ml-1 align-baseline animate-pulse"></span>
          </span>
        </h1>
      </div>

      <!-- Asymmetric Editorial Grid (Description & Action Pills + Interactive Live Telemetry) -->
      <div class="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
        
        <!-- Left: Condensed Value Proposition & Dual Action Pills -->
        <div class="lg:col-span-6 space-y-8">
          <p class="text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-xl">
            Diseñamos y construimos plataformas web, integramos modelos de inteligencia artificial y conectamos sensores físicos para transformar operaciones en resultados medibles.
          </p>

          <!-- Dual Action Buttons -->
          <div class="flex flex-wrap items-center gap-4">
            <a
              href="#soluciones"
              class="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-bold text-sm text-white bg-gradient-to-r from-brand-accent to-brand-accent-glow shadow-glow-accent hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-brand-accent/40"
            >
              <span>Explorar soluciones</span>
              <ArrowRight class="w-4 h-4" />
            </a>

            <a
              href="#proyectos"
              class="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-semibold text-sm text-white bg-brand-surface/80 hover:bg-brand-surface-elevated border border-white/15 hover:border-brand-accent/50 hover:text-brand-accent transition-all duration-200 backdrop-blur-md"
            >
              <span>Conocer proyectos reales</span>
            </a>
          </div>

          <!-- Quick Quantitative Metrics Row (Tekton-Style Highlights) -->
          <div class="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-left">
            <div>
              <div class="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center">
                &lt; 24h
              </div>
              <div class="text-[11px] sm:text-xs text-brand-muted mt-0.5">Viabilidad técnica inicial</div>
            </div>
            <div>
              <div class="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center">
                100%
              </div>
              <div class="text-[11px] sm:text-xs text-brand-muted mt-0.5">Ingeniería real y verificable</div>
            </div>
            <div>
              <div class="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center">
                Full-Stack
              </div>
              <div class="text-[11px] sm:text-xs text-brand-muted mt-0.5">Hardware + API + Dashboard</div>
            </div>
          </div>
        </div>

        <!-- Right: Floating Telemetry & Pipeline Console -->
        <div class="lg:col-span-6">
          <div class="relative rounded-2xl glass-panel-elevated p-5 sm:p-6 shadow-tech-card border border-brand-accent/30">
            
            <!-- Terminal Header -->
            <div class="flex items-center justify-between pb-3.5 border-b border-white/10">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span class="font-mono text-xs text-slate-400 ml-2">suitech-system-pipeline.v1</span>
              </div>
              <span class="text-[11px] font-mono text-brand-accent bg-brand-accent/10 px-2 py-0.5 rounded border border-brand-accent/30 font-bold flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping"></span>
                LIVE PIPELINE
              </span>
            </div>

            <!-- Layer Switcher Tabs -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-4">
              <button
                v-for="layer in layers"
                :key="layer.id"
                @click="activeLayer = layer.id as any"
                :class="[
                  'px-2 py-2 text-[11px] font-mono rounded-lg transition-all text-center',
                  activeLayer === layer.id
                    ? 'bg-brand-accent/20 text-brand-accent border border-brand-accent/60 font-bold shadow-sm'
                    : 'bg-brand-surface/50 text-slate-400 hover:text-white hover:bg-white/5 border border-white/5'
                ]"
              >
                {{ layer.name.split('.')[0] }}
              </button>
            </div>

            <!-- Active Layer Display Box -->
            <div 
              v-for="layer in layers" 
              :key="layer.id"
              v-show="activeLayer === layer.id"
              class="mt-4 space-y-3.5"
            >
              <div class="flex items-start justify-between">
                <div>
                  <span class="text-[11px] font-mono uppercase tracking-wider text-brand-accent font-bold">
                    {{ layer.badge }}
                  </span>
                  <h3 class="text-base sm:text-lg font-bold text-white mt-0.5">
                    {{ layer.title }}
                  </h3>
                </div>
                <div class="text-right">
                  <div class="text-2xl font-mono font-extrabold text-white">
                    {{ layer.metric }}
                  </div>
                  <div class="text-[10px] uppercase font-mono text-slate-400">
                    {{ layer.metricLabel }}
                  </div>
                </div>
              </div>

              <!-- Live Code / Telemetry Log Line -->
              <div class="p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-slate-300 flex items-center gap-2 overflow-x-auto">
                <Terminal class="w-4 h-4 text-brand-accent shrink-0" />
                <span class="text-brand-accent font-semibold">$</span>
                <span class="whitespace-nowrap">{{ layer.code }}</span>
              </div>

              <!-- Graphic Architecture Pipeline -->
              <div class="p-3.5 rounded-xl bg-brand-surface/80 border border-white/10 relative overflow-hidden">
                <div class="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span class="flex items-center gap-1.5">
                    <Activity class="w-3.5 h-3.5 text-brand-accent animate-pulse" />
                    Estado de Señal
                  </span>
                  <span class="text-emerald-400 font-semibold">{{ layer.status }}</span>
                </div>

                <!-- Pipeline Nodes Graphic -->
                <div class="mt-4 pt-3 border-t border-white/5 flex items-center justify-between relative">
                  <!-- Connector line -->
                  <div class="absolute top-1/2 left-4 right-4 h-[2px] bg-gradient-to-r from-blue-600/40 via-brand-accent to-brand-accent-cyan -translate-y-1/2 z-0"></div>
                  
                  <!-- Node 1: Sensor -->
                  <div class="relative z-10 flex flex-col items-center">
                    <div class="w-8 h-8 rounded-full bg-brand-dark border-2 border-brand-accent flex items-center justify-center text-brand-accent shadow-glow-accent">
                      <Radio class="w-3.5 h-3.5" />
                    </div>
                    <span class="text-[9px] font-mono text-slate-400 mt-1">Sensor</span>
                  </div>

                  <!-- Node 2: ESP32 -->
                  <div class="relative z-10 flex flex-col items-center">
                    <div class="w-8 h-8 rounded-full bg-brand-dark border-2 border-brand-accent flex items-center justify-center text-brand-accent shadow-glow-accent">
                      <Cpu class="w-3.5 h-3.5" />
                    </div>
                    <span class="text-[9px] font-mono text-slate-400 mt-1">ESP32</span>
                  </div>

                  <!-- Node 3: Cloud / API -->
                  <div class="relative z-10 flex flex-col items-center">
                    <div class="w-8 h-8 rounded-full bg-brand-dark border-2 border-brand-accent-cyan flex items-center justify-center text-brand-accent-cyan shadow-glow-cyan">
                      <Server class="w-3.5 h-3.5" />
                    </div>
                    <span class="text-[9px] font-mono text-slate-400 mt-1">API Cloud</span>
                  </div>

                  <!-- Node 4: Web UI -->
                  <div class="relative z-10 flex flex-col items-center">
                    <div class="w-8 h-8 rounded-full bg-brand-dark border-2 border-blue-400 flex items-center justify-center text-blue-400">
                      <Layers class="w-3.5 h-3.5" />
                    </div>
                    <span class="text-[9px] font-mono text-slate-400 mt-1">Suitech UI</span>
                  </div>
                </div>
              </div>

            </div>

            <!-- Footer Tip -->
            <div class="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
              <span class="flex items-center gap-1.5">
                <Zap class="w-3.5 h-3.5 text-brand-accent" />
                Interconexión de ingeniería verificada
              </span>
              <span class="font-mono text-brand-accent">suitechpe.com</span>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>
