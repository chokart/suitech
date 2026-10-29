<script setup lang="ts">
import { ref } from 'vue';
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
  <section id="inicio" class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
    <!-- Background Ambient Glow & Grid -->
    <div class="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none"></div>
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-accent/10 blur-[130px] rounded-full pointer-events-none"></div>
    <div class="absolute top-1/3 right-10 w-[400px] h-[300px] bg-brand-accent-cyan/10 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Top Tagline Pill -->
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface/90 border border-brand-accent/25 text-xs font-mono text-slate-300 mb-6 shadow-sm">
        <span class="flex h-2 w-2 relative">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
        </span>
        <span class="text-brand-accent font-semibold tracking-wide uppercase text-[11px]">Suitech</span>
        <span class="text-white/20">|</span>
        <span class="text-slate-300">Software · Inteligencia Artificial · IoT · Industria</span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <!-- Left Column: Narrative & Call to Actions -->
        <div class="lg:col-span-7">
          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            Convertimos ideas y desafíos en 
            <span class="text-gradient-accent block mt-1">soluciones tecnológicas reales.</span>
          </h1>

          <p class="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            Desarrollamos software, integramos inteligencia artificial y conectamos dispositivos para crear soluciones digitales prácticas para empresas, profesionales e industrias.
          </p>

          <!-- Action Buttons -->
          <div class="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#soluciones"
              class="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-brand-dark bg-gradient-to-r from-brand-accent to-brand-accent-cyan shadow-glow-accent hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Explorar soluciones</span>
              <ArrowRight class="w-4 h-4" />
            </a>

            <a
              href="#proyectos"
              class="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-brand-surface/80 hover:bg-brand-surface-elevated border border-white/10 hover:border-brand-accent/40 hover:text-brand-accent transition-all duration-200"
            >
              <span>Conocer proyectos</span>
            </a>
          </div>

          <!-- Quick Trust & Positioning Bullets -->
          <div class="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-left">
            <div>
              <div class="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center">
                100%
              </div>
              <div class="text-[11px] sm:text-xs text-brand-muted mt-0.5">Ingeniería aplicada y honesta</div>
            </div>
            <div>
              <div class="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center">
                Full-Stack
              </div>
              <div class="text-[11px] sm:text-xs text-brand-muted mt-0.5">Hardware + API + Web</div>
            </div>
            <div>
              <div class="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center">
                Producción
              </div>
              <div class="text-[11px] sm:text-xs text-brand-muted mt-0.5">Sistemas en uso real</div>
            </div>
          </div>
        </div>

        <!-- Right Column: Interactive Tech Architecture Visualizer (Original Suitech Matrix) -->
        <div class="lg:col-span-5">
          <div class="relative rounded-2xl glass-panel-elevated p-5 sm:p-6 shadow-tech-card border border-white/15">
            
            <!-- Terminal Header -->
            <div class="flex items-center justify-between pb-4 border-b border-white/10">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span class="font-mono text-xs text-slate-400 ml-2">suitech-system-pipeline.v1</span>
              </div>
              <span class="text-[11px] font-mono text-brand-accent bg-brand-accent/10 px-2 py-0.5 rounded border border-brand-accent/20">
                LIVE DEMO
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
                    ? 'bg-brand-accent/20 text-brand-accent border border-brand-accent/40 font-semibold'
                    : 'bg-brand-surface/40 text-slate-400 hover:text-white hover:bg-white/5 border border-white/5'
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
              class="mt-5 space-y-4"
            >
              <div class="flex items-start justify-between">
                <div>
                  <span class="text-[11px] font-mono uppercase tracking-wider text-brand-accent font-semibold">
                    {{ layer.badge }}
                  </span>
                  <h3 class="text-lg font-bold text-white mt-0.5">
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
              <div class="p-4 rounded-xl bg-brand-surface/80 border border-white/10 relative overflow-hidden">
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
                  <div class="absolute top-1/2 left-4 right-4 h-[2px] bg-gradient-to-r from-emerald-500/40 via-cyan-500/60 to-blue-500/40 -translate-y-1/2 z-0"></div>
                  
                  <!-- Node 1: Sensor -->
                  <div class="relative z-10 flex flex-col items-center">
                    <div class="w-8 h-8 rounded-full bg-brand-dark border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shadow-glow-accent/40">
                      <Radio class="w-3.5 h-3.5" />
                    </div>
                    <span class="text-[9px] font-mono text-slate-400 mt-1">Sensor</span>
                  </div>

                  <!-- Node 2: ESP32 -->
                  <div class="relative z-10 flex flex-col items-center">
                    <div class="w-8 h-8 rounded-full bg-brand-dark border-2 border-brand-accent flex items-center justify-center text-brand-accent shadow-glow-accent/40">
                      <Cpu class="w-3.5 h-3.5" />
                    </div>
                    <span class="text-[9px] font-mono text-slate-400 mt-1">ESP32</span>
                  </div>

                  <!-- Node 3: Cloud / API -->
                  <div class="relative z-10 flex flex-col items-center">
                    <div class="w-8 h-8 rounded-full bg-brand-dark border-2 border-brand-accent-cyan flex items-center justify-center text-brand-accent-cyan shadow-glow-cyan/40">
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
                Interconexión verificada
              </span>
              <span class="font-mono text-slate-400">suitechpe.com</span>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>
