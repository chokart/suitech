<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import HeroLabBackground from './HeroLabBackground.vue';
import { 
  ArrowRight, 
  ChevronRight, 
  Code2, 
  BrainCircuit, 
  Cpu, 
  Workflow 
} from 'lucide-vue-next';

// ─── Typewriter rotating words ───
const rotatingWords = [
  'soluciones tecnológicas.',
  'software inteligente.',
  'sistemas conectados.',
  'herramientas digitales.',
  'innovación aplicada.',
];

const currentWordIndex = ref(0);
const displayedText = ref('');
const isDeleting = ref(false);
const showCursor = ref(true);
const isReady = ref(false);
let typeTimer: ReturnType<typeof setTimeout> | null = null;
let cursorTimer: ReturnType<typeof setInterval> | null = null;

const currentWord = computed(() => rotatingWords[currentWordIndex.value]);

function typeEffect() {
  const word = currentWord.value;

  if (!isDeleting.value) {
    displayedText.value = word.substring(0, displayedText.value.length + 1);
    if (displayedText.value === word) {
      typeTimer = setTimeout(() => {
        isDeleting.value = true;
        typeEffect();
      }, 2200);
      return;
    }
    typeTimer = setTimeout(typeEffect, 65 + Math.random() * 30);
  } else {
    displayedText.value = word.substring(0, displayedText.value.length - 1);
    if (displayedText.value === '') {
      isDeleting.value = false;
      currentWordIndex.value = (currentWordIndex.value + 1) % rotatingWords.length;
      typeTimer = setTimeout(typeEffect, 350);
      return;
    }
    typeTimer = setTimeout(typeEffect, 28);
  }
}

// ─── Bottom Capabilities Bar (Software, IA, IoT, Automatización) ───
const capabilities = [
  {
    title: 'SOFTWARE',
    subtitle: 'A medida & aplicaciones web',
    icon: Code2,
    accent: false,
    path: '/soluciones',
  },
  {
    title: 'INTELIGENCIA ARTIFICIAL',
    subtitle: 'Modelos aplicados & datos',
    icon: BrainCircuit,
    accent: false,
    path: '/inteligencia-artificial',
  },
  {
    title: 'IOT',
    subtitle: 'Sensores & telemetría ESP32',
    icon: Cpu,
    accent: false,
    path: '/iot',
  },
  {
    title: 'AUTOMATIZACIÓN',
    subtitle: 'Integración & flujos digitales',
    icon: Workflow,
    accent: false,
    path: '/soluciones',
  },
];

onMounted(() => {
  setTimeout(() => { isReady.value = true; }, 100);
  typeTimer = setTimeout(typeEffect, 900);
  cursorTimer = setInterval(() => { showCursor.value = !showCursor.value; }, 500);
});

onUnmounted(() => {
  if (typeTimer) clearTimeout(typeTimer);
  if (cursorTimer) clearInterval(cursorTimer);
});
</script>

<template>
  <section
    id="inicio"
    class="relative flex flex-col justify-between overflow-hidden"
    style="min-height: 100svh;"
  >
    <!-- Suitech Engineering Lab Background -->
    <HeroLabBackground />

    <!-- ═══ Main Central Content (100% Transparent, no box) ═══ -->
    <div class="relative z-10 w-full flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      
      <div
        :class="[
          'max-w-4xl w-full mx-auto flex flex-col items-center text-center transition-all duration-1000',
          isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        ]"
      >

        <!-- Monumental Title -->
        <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] max-w-3xl">
          <span class="block text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            Convertimos ideas en
          </span>
          <span class="block mt-2 min-h-[1.25em]">
            <span class="typewriter-glow font-black">
              {{ displayedText }}
            </span>
            <span
              class="inline-block w-[3px] sm:w-[4px] h-[0.8em] bg-brand-accent-glow rounded-sm ml-1 align-baseline shadow-[0_0_12px_#006EFE]"
              :class="showCursor ? 'opacity-100' : 'opacity-0'"
              style="transition: opacity 0.08s;"
            ></span>
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="mt-6 sm:mt-8 text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
          Desarrollamos software, integramos inteligencia artificial y conectamos
          dispositivos para crear <span class="text-blue-400 font-semibold">soluciones digitales prácticas</span>
          para empresas, emprendimientos y profesionales.
        </p>

        <!-- Action Buttons -->
        <div class="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <a
            href="#soluciones"
            class="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full font-bold text-sm sm:text-base text-white bg-gradient-to-r from-brand-accent to-brand-accent-glow hover:shadow-glow-accent active:scale-[0.98] transition-all duration-200 border border-brand-accent/40 shadow-lg"
          >
            <span>Explorar soluciones</span>
            <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <router-link
            to="/proyectos"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base text-white/90 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-white/30 transition-all duration-200 backdrop-blur-md"
          >
            <span>Conocer proyectos</span>
            <ChevronRight class="w-4 h-4 text-slate-400" />
          </router-link>
        </div>

      </div>

    </div>

    <!-- ═══ Bottom Bar: SOFTWARE · INTELIGENCIA ARTIFICIAL · IOT · AUTOMATIZACIÓN ═══ -->
    <div
      :class="[
        'relative z-10 w-full border-t border-white/[0.1] transition-all duration-1000 delay-500',
        isReady ? 'opacity-100' : 'opacity-0'
      ]"
      style="background: linear-gradient(180deg, rgba(7,12,23,0.78) 0%, rgba(7,12,23,0.95) 100%); backdrop-filter: blur(16px);"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4">
          <router-link
            v-for="(item, index) in capabilities"
            :key="index"
            :to="item.path"
            :class="[
              'group py-5 sm:py-6 px-4 sm:px-6 flex flex-col justify-center transition-all hover:bg-white/[0.04]',
              index > 0 ? 'border-l border-white/[0.08]' : '',
            ]"
          >
            <div class="flex items-center gap-2 mb-2">
              <component :is="item.icon" class="w-5 h-5 text-brand-accent group-hover:text-blue-400 transition-colors" />
            </div>
            
            <div class="font-mono text-sm sm:text-base lg:text-lg font-extrabold tracking-tight">
              <span :class="item.accent ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-accent-glow to-blue-200' : 'text-white group-hover:text-blue-400 transition-colors'">
                {{ item.title }}
              </span>
            </div>
            
            <div class="text-[10px] sm:text-[11px] text-slate-400 mt-1 uppercase tracking-wider font-medium truncate">
              {{ item.subtitle }}
            </div>
          </router-link>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.typewriter-glow {
  background: linear-gradient(135deg, #006EFE 0%, #2584FF 35%, #60A5FA 70%, #FFFFFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 24px rgba(0, 110, 254, 0.75));
}
</style>
