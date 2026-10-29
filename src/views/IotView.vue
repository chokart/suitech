<script setup lang="ts">
import { 
  Cpu, 
  Radio, 
  Activity, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Gauge,
  Wifi
} from 'lucide-vue-next';

const iotPillars = [
  {
    icon: Cpu,
    title: 'Firmware sobre ESP32 & Microcontroladores',
    description: 'Desarrollamos firmware en C/C++ (Arduino Framework / ESP-IDF) optimizado para la lectura continua de sensores analógicos y digitales, con manejo eficiente de energía y reconexión.'
  },
  {
    icon: Radio,
    title: 'Telemetría Directa a la Nube (WiFi / HTTP / REST)',
    description: 'Transmisión segura de mediciones en formato JSON hacia APIs alojadas en servidores y VPS, asegurando trazabilidad de datos con marcas de tiempo precisas.'
  },
  {
    icon: Gauge,
    title: 'Sensores de Nivel y Variables Físicas',
    description: 'Integración práctica de sensores ultrasónicos, de presión y ambientales. Nuestro caso activo monitorea niveles de reservorios y tanques de agua en tiempo real.'
  },
  {
    icon: Activity,
    title: 'Dashboards Web Reactivos en Tiempo Real',
    description: 'Paneles de visualización en Vue 3 con gráficos en vivo, umbrales de advertencia y visualización instantánea del estado de los dispositivos conectados.'
  }
];

const technicalSpecs = [
  'Flujo completo validado: Sensor físico -> Microcontrolador ESP32 -> API en VPS -> Dashboard Web',
  'Monitoreo continuo de conectividad y estado de enlace WiFi',
  'Prototipos funcionales orientados a telemetría de niveles, temperatura y variables de supervisión',
  'Despliegue de APIs receptoras y paneles de control en servidores VPS con Docker y Dokploy'
];

const faqs = [
  {
    question: '¿Por qué trabajar con microcontroladores ESP32 en lugar de PLCs tradicionales?',
    answer: 'El ESP32 ofrece conectividad WiFi/Bluetooth integrada, potencia de doble núcleo a 240MHz y un coste por nodo sustancialmente inferior, permitiendo desplegar múltiples puntos de telemetría sin licencias recurrentes costosas.'
  },
  {
    question: '¿Qué sucede si se interrumpe la conexión a internet en la zona de monitoreo?',
    answer: 'Nuestros firmwares implementan memoria intermedia local (Flash o EEPROM). Cuando se restablece la conectividad, las mediciones almacenadas se transmiten en ráfaga con su marca de tiempo exacta.'
  },
  {
    question: '¿Ofrecen el desarrollo tanto del dispositivo físico como del software web?',
    answer: 'Sí. Suitech cubre el ciclo completo: desde el esquema electrónico y firmware hasta la API de ingestión de datos y el tablero web de monitoreo para los usuarios.'
  }
];
</script>

<template>
  <div class="min-h-screen pt-28 pb-20 bg-brand-dark text-slate-100">
    
    <!-- Hero Section de Suitech IoT -->
    <section class="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div class="absolute -top-10 left-1/3 w-96 h-96 bg-brand-accent/15 rounded-full blur-[140px] pointer-events-none"></div>

      <!-- Breadcrumbs -->
      <nav aria-label="Breadcrumb" class="mb-8">
        <ol class="flex items-center gap-2 text-xs font-mono text-slate-400">
          <li>
            <router-link to="/" class="hover:text-brand-accent transition-colors">Inicio</router-link>
          </li>
          <li><ChevronRight class="w-3.5 h-3.5 text-slate-600" /></li>
          <li class="text-brand-accent font-semibold" aria-current="page">Suitech IoT</li>
        </ol>
      </nav>

      <div class="max-w-4xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-accent/30 text-xs font-mono text-brand-accent mb-6 shadow-sm">
          <Sparkles class="w-3.5 h-3.5" />
          <span>SUITECH IOT · TELEMETRÍA Y SISTEMAS CONECTADOS EN PERÚ</span>
        </div>

        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
          Monitoreo remoto con <span class="text-gradient-accent">sensores y telemetría IoT</span> en tiempo real.
        </h1>

        <p class="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl">
          Unimos el mundo físico con la web: instrumentación de campo con microcontroladores ESP32, comunicación segura de datos y paneles de visualización gráfica para empresas y operaciones en Perú.
        </p>

        <div class="mt-8 flex flex-wrap gap-4 items-center">
          <router-link
            to="/contacto"
            class="inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-accent to-brand-accent-glow hover:shadow-glow-accent hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-brand-accent/40 shadow-lg"
          >
            <span>Consultar por proyecto IoT</span>
            <ArrowRight class="w-4 h-4" />
          </router-link>

          <router-link
            to="/proyectos"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <span>Ver prototipos y casos de uso</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Pilares de Suitech IoT -->
    <section class="mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="border-t border-white/10 pt-16">
        <div class="max-w-3xl mb-12">
          <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Nuestras capacidades en hardware y telemetría
          </h2>
          <p class="mt-3 text-slate-300 text-sm sm:text-base">
            No dejamos la integración en el aire: diseñamos el firmware, configuramos la conexión de red segura y desplegamos la plataforma de monitoreo accesible desde cualquier navegador o teléfono móvil.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(pillar, index) in iotPillars"
            :key="index"
            class="p-8 rounded-2xl glass-panel border border-white/10 hover:border-brand-accent/40 hover:bg-brand-surface-elevated/80 transition-all duration-300 group"
          >
            <div class="w-12 h-12 rounded-xl bg-brand-surface border border-white/10 group-hover:border-brand-accent/40 flex items-center justify-center text-brand-accent mb-6 shadow-sm">
              <component :is="pillar.icon" class="w-6 h-6" />
            </div>

            <h3 class="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
              {{ pillar.title }}
            </h3>

            <p class="mt-3 text-slate-300 text-sm leading-relaxed">
              {{ pillar.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Especificaciones y Robustez -->
    <section class="mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="p-8 sm:p-12 rounded-3xl bg-brand-surface/70 border border-white/10 relative overflow-hidden">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-3">
            <Wifi class="w-4 h-4" />
            <span>INGENIERÍA ROBUSTA DE HARDWARE Y COMUNICACIONES</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Diseñado para entornos reales de operación
          </h2>
          <p class="mt-3 text-slate-300 text-sm sm:text-base">
            Garantizamos la fidelidad de las lecturas y la persistencia de las métricas históricas para auditorías y toma de decisiones operativas.
          </p>

          <ul class="mt-8 space-y-3.5">
            <li
              v-for="(spec, sIdx) in technicalSpecs"
              :key="sIdx"
              class="flex items-start gap-3 text-sm text-slate-200"
            >
              <CheckCircle2 class="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>{{ spec }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="border-t border-white/10 pt-16 max-w-3xl">
        <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-8">
          Preguntas frecuentes sobre telemetría y sensores IoT
        </h2>

        <div class="space-y-6">
          <article
            v-for="(faq, fIdx) in faqs"
            :key="fIdx"
            class="p-6 rounded-2xl glass-panel border border-white/10"
          >
            <h3 class="text-base font-bold text-white mb-2">
              {{ faq.question }}
            </h3>
            <p class="text-sm text-slate-300 leading-relaxed">
              {{ faq.answer }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <div class="p-10 rounded-3xl bg-gradient-to-b from-brand-surface to-brand-surface-elevated border border-brand-accent/30 shadow-glow-accent/10">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          ¿Necesita monitorear sensores, niveles o variables de proceso a distancia?
        </h2>
        <p class="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          Conversemos sobre los sensores que necesita integrar y el entorno de instalación. Le presentaremos una arquitectura de telemetría viable y económica.
        </p>
        <div class="mt-6 flex justify-center">
          <router-link
            to="/contacto"
            class="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-accent to-brand-accent-glow hover:shadow-glow-accent transition-all duration-200"
          >
            <span>Conversar sobre telemetría IoT</span>
            <ArrowRight class="w-4 h-4" />
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>
