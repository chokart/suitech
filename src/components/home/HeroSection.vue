<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import HeroLabBackground from './HeroLabBackground.vue';
import { ArrowRight, ChevronRight } from 'lucide-vue-next';

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

// ─── Metrics data ───
const metrics = [
  { value: 'Full-Stack', label: 'Software + Hardware + IA', accent: false },
  { value: '100%', label: 'Ingeniería aplicada', accent: true },
  { value: 'Open', label: 'Tecnología abierta', accent: false },
  { value: '24/7', label: 'Monitoreo continuo', accent: true },
];

const animatedValues = ref<Record<number, string>>({});

function animateCountUp(index: number, target: string) {
  if (target === '100%') {
    let current = 0;
    const step = () => {
      current += 3;
      if (current >= 100) {
        animatedValues.value[index] = '100%';
        return;
      }
      animatedValues.value[index] = current + '%';
      requestAnimationFrame(step);
    };
    animatedValues.value[index] = '0%';
    step();
  } else if (target === '24/7') {
    let current = 0;
    const step = () => {
      current += 1;
      if (current >= 24) {
        animatedValues.value[index] = '24/7';
        return;
      }
      animatedValues.value[index] = current + '/7';
      requestAnimationFrame(step);
    };
    animatedValues.value[index] = '0/7';
    step();
  } else {
    animatedValues.value[index] = target;
  }
}

function getMetricValue(index: number, fallback: string) {
  return animatedValues.value[index] ?? fallback;
}

onMounted(() => {
  setTimeout(() => { isReady.value = true; }, 100);
  typeTimer = setTimeout(typeEffect, 900);
  cursorTimer = setInterval(() => { showCursor.value = !showCursor.value; }, 500);

  setTimeout(() => {
    metrics.forEach((m, i) => animateCountUp(i, m.value));
  }, 1200);
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

    <!-- ═══ Main Central Content ═══ -->
    <div class="relative z-10 w-full flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      
      <!-- Frosted Glass Console Backdrop (isolates text from busy background noise) -->
      <div
        :class="[
          'max-w-4xl w-full mx-auto p-6 sm:p-10 md:p-12 rounded-3xl glass-hero border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] flex flex-col items-center text-center transition-all duration-1000',
          isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        ]"
      >

        <!-- Tagline Pill -->
        <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[11px] sm:text-xs font-mono tracking-wider text-slate-300 uppercase mb-6 sm:mb-8 backdrop-blur-md">
          <span class="flex h-2 w-2 relative">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span>Software · Inteligencia Artificial · IoT · Automatización</span>
        </div>

        <!-- Monumental Title (clean, no absolute overlap bugs) -->
        <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] max-w-3xl">
          <span class="block text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            Convertimos ideas en
          </span>
          <span class="block mt-2 min-h-[1.25em]">
            <span class="typewriter-glow font-black">
              {{ displayedText }}
            </span>
            <span
              class="inline-block w-[3px] sm:w-[4px] h-[0.8em] bg-cyan-400 rounded-sm ml-1 align-baseline shadow-[0_0_12px_#38bdf8]"
              :class="showCursor ? 'opacity-100' : 'opacity-0'"
              style="transition: opacity 0.08s;"
            ></span>
          </span>
        </h1>

        <!-- Subtitle (strictly separated, zero risk of text overlap) -->
        <p class="mt-6 sm:mt-8 text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Desarrollamos software, integramos inteligencia artificial y conectamos
          dispositivos para crear <span class="text-cyan-300 font-semibold">soluciones digitales prácticas</span>
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

          <a
            href="#proyectos"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base text-white/90 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-white/30 transition-all duration-200 backdrop-blur-md"
          >
            <span>Conocer proyectos</span>
            <ChevronRight class="w-4 h-4 text-slate-400" />
          </a>
        </div>

      </div>

    </div>

    <!-- ═══ Metrics Strip ═══ -->
    <div
      :class="[
        'relative z-10 w-full border-t border-white/[0.08] transition-all duration-1000 delay-500',
        isReady ? 'opacity-100' : 'opacity-0'
      ]"
      style="background: linear-gradient(180deg, rgba(7,12,23,0.7) 0%, rgba(7,12,23,0.95) 100%); backdrop-filter: blur(16px);"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(metric, index) in metrics"
            :key="index"
            :class="[
              'py-4 sm:py-6 px-4 sm:px-6 text-center lg:text-left',
              index > 0 ? 'border-l border-white/[0.08]' : '',
            ]"
          >
            <div class="font-mono text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
              <span :class="metric.accent ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300' : 'text-white'">
                {{ getMetricValue(index, metric.value) }}
              </span>
            </div>
            <div class="text-[10px] sm:text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">
              {{ metric.label }}
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.glass-hero {
  background: rgba(7, 12, 23, 0.72);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.typewriter-glow {
  background: linear-gradient(135deg, #38BDF8 0%, #7DD3FC 50%, #FFFFFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 20px rgba(56, 189, 248, 0.6));
}
</style>
