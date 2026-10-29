<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import HeroLabBackground from './HeroLabBackground.vue';
import { ArrowRight } from 'lucide-vue-next';

// ─── Typewriter rotating words ───
const rotatingWords = [
  'soluciones tecnológicas',
  'software inteligente',
  'sistemas conectados',
  'herramientas digitales',
  'innovación aplicada',
];

const currentWordIndex = ref(0);
const displayedText = ref('');
const isDeleting = ref(false);
const showCursor = ref(true);
const isReady = ref(false);
let typeTimer: ReturnType<typeof setTimeout> | null = null;
let cursorTimer: ReturnType<typeof setInterval> | null = null;

const currentWord = computed(() => rotatingWords[currentWordIndex.value]);

// Find the longest word to reserve space and prevent layout shift
const longestWord = computed(() => {
  return rotatingWords.reduce((a, b) => a.length > b.length ? a : b, '');
});

function typeEffect() {
  const word = currentWord.value;

  if (!isDeleting.value) {
    displayedText.value = word.substring(0, displayedText.value.length + 1);
    if (displayedText.value === word) {
      typeTimer = setTimeout(() => {
        isDeleting.value = true;
        typeEffect();
      }, 2400);
      return;
    }
    typeTimer = setTimeout(typeEffect, 60 + Math.random() * 35);
  } else {
    displayedText.value = word.substring(0, displayedText.value.length - 1);
    if (displayedText.value === '') {
      isDeleting.value = false;
      currentWordIndex.value = (currentWordIndex.value + 1) % rotatingWords.length;
      typeTimer = setTimeout(typeEffect, 350);
      return;
    }
    typeTimer = setTimeout(typeEffect, 30);
  }
}

// ─── Metrics data ───
const metrics = [
  { value: 'Full-Stack', label: 'Software + Hardware + IA', accent: false },
  { value: '100%', label: 'Ingeniería aplicada', accent: true },
  { value: 'Open', label: 'Tecnología abierta', accent: false },
  { value: '24/7', label: 'Monitoreo continuo', accent: true },
];

// ─── Count-up animation for numeric metrics ───
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
  // Stagger the entrance
  setTimeout(() => { isReady.value = true; }, 100);
  typeTimer = setTimeout(typeEffect, 1200);
  cursorTimer = setInterval(() => { showCursor.value = !showCursor.value; }, 530);

  // Trigger count-up animations after entrance
  setTimeout(() => {
    metrics.forEach((m, i) => animateCountUp(i, m.value));
  }, 1400);
});

onUnmounted(() => {
  if (typeTimer) clearTimeout(typeTimer);
  if (cursorTimer) clearInterval(cursorTimer);
});
</script>

<template>
  <section
    id="inicio"
    class="relative flex flex-col justify-end overflow-hidden"
    style="min-height: 100svh;"
  >
    <!-- Suitech Engineering Lab & Prototyping Background -->
    <HeroLabBackground />

    <!-- ═══ Main Content ═══ -->
    <div class="relative z-10 w-full flex-1 flex flex-col justify-center">
      <div class="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-14 w-full flex flex-col items-center text-center py-20 lg:py-24">

        <!-- Tagline pill -->
        <div
          :class="[
            'inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[11px] sm:text-xs font-medium tracking-[0.12em] uppercase mb-8 sm:mb-12 transition-all duration-700',
            isReady
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          ]"
          style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); backdrop-filter: blur(8px);"
        >
          <span class="flex h-[7px] w-[7px] relative">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-50"></span>
            <span class="relative inline-flex rounded-full h-[7px] w-[7px] bg-brand-accent"></span>
          </span>
          <span class="text-slate-400">Software · Inteligencia Artificial · Automatización · IoT</span>
        </div>

        <!-- ═══ Monumental Title ═══ -->
        <h1
          :class="[
            'text-[2.2rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.8rem] font-extrabold tracking-[-0.025em] text-white max-w-6xl transition-all duration-1000 delay-200 hero-title-shadow',
            isReady
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          ]"
          style="line-height: 1.05;"
        >
          <span class="block">Convertimos ideas en</span>

          <!-- Typewriter line with reserved space -->
          <span class="block relative mt-1 sm:mt-2">
            <!-- Invisible spacer (longest word) to reserve height/width -->
            <span class="invisible whitespace-nowrap" aria-hidden="true">{{ longestWord }}.</span>

            <!-- Visible typed text overlaid -->
            <span class="absolute inset-0 flex items-start justify-center">
              <span>
                <span class="hero-gradient-text">{{ displayedText }}</span>
                <span
                  class="inline-block w-[3px] sm:w-[4px] h-[0.82em] rounded-sm ml-1 align-middle"
                  :style="{
                    background: 'linear-gradient(180deg, #006EFE, #38BDF8)',
                    opacity: showCursor ? 1 : 0,
                    transition: 'opacity 0.08s',
                  }"
                ></span>
              </span>
            </span>
          </span>
        </h1>

        <!-- Subtitle -->
        <p
          :class="[
            'mt-8 sm:mt-10 text-[0.95rem] sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl transition-all duration-1000 delay-500 hero-subtitle-shadow',
            isReady
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          ]"
        >
          Desarrollamos software, integramos inteligencia artificial y conectamos
          dispositivos para crear
          <span class="text-slate-200 font-medium">soluciones digitales prácticas</span>
          para empresas, emprendimientos y profesionales.
        </p>

        <!-- CTA Buttons -->
        <div
          :class="[
            'mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 transition-all duration-1000 delay-700',
            isReady
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          ]"
        >
          <a
            href="#soluciones"
            class="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm sm:text-[0.95rem] text-white overflow-hidden active:scale-[0.97] transition-transform duration-150"
          >
            <!-- Button background with animated shimmer -->
            <span class="absolute inset-0 bg-brand-accent rounded-full"></span>
            <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent rounded-full translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
            <span class="relative flex items-center gap-3">
              Explorar soluciones
              <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </a>

          <a
            href="#proyectos"
            class="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm sm:text-[0.95rem] text-white/80 hover:text-white border border-white/[0.1] hover:border-white/[0.22] bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-200 backdrop-blur-sm"
          >
            Conocer proyectos
          </a>
        </div>

      </div>
    </div>

    <!-- ═══ Metrics Strip ═══ -->
    <div
      :class="[
        'relative z-10 w-full border-t border-white/[0.06] transition-all duration-1000 delay-1000',
        isReady ? 'opacity-100' : 'opacity-0'
      ]"
      style="background: linear-gradient(180deg, rgba(4,8,16,0.5) 0%, rgba(4,8,16,0.85) 100%); backdrop-filter: blur(16px);"
    >
      <div class="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-14">
        <div class="grid grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(metric, index) in metrics"
            :key="index"
            :class="[
              'py-5 sm:py-7 px-4 sm:px-6 text-center lg:text-left',
              index > 0 ? 'border-l border-white/[0.06]' : '',
            ]"
          >
            <div class="font-mono text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold tracking-tight">
              <span :class="metric.accent ? 'hero-gradient-text' : 'text-white'">
                {{ getMetricValue(index, metric.value) }}
              </span>
            </div>
            <div class="text-[10px] sm:text-[11px] text-slate-500 mt-1.5 uppercase tracking-[0.14em] font-medium">
              {{ metric.label }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll hint -->
    <div
      :class="[
        'absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-1.5 transition-all duration-1000 delay-[1.4s]',
        isReady ? 'opacity-100' : 'opacity-0'
      ]"
    >
      <span class="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-medium">Scroll</span>
      <div class="w-[1px] h-8 bg-gradient-to-b from-slate-500/50 to-transparent scroll-pulse"></div>
    </div>

  </section>
</template>

<style scoped>
.hero-title-shadow {
  text-shadow: 0 4px 30px rgba(0, 0, 0, 0.9), 0 2px 8px rgba(0, 0, 0, 0.7);
}

.hero-subtitle-shadow {
  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.95);
}

.hero-gradient-text {
  background: linear-gradient(135deg, #006EFE 0%, #38BDF8 55%, #7dd3fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 4px 20px rgba(0, 110, 254, 0.4));
}

.scroll-pulse {
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; transform: scaleY(0.7); transform-origin: top; }
  50% { opacity: 0.8; transform: scaleY(1); transform-origin: top; }
}

@media (prefers-reduced-motion: reduce) {
  .scroll-pulse {
    animation: none;
    opacity: 0.5;
  }
}
</style>
