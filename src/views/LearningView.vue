<script setup lang="ts">
import { ref, computed } from 'vue';
import { LEARNING_POSTS, BRAND_INFO } from '../data/suitechData';
import { 
  GraduationCap, 
  Youtube, 
  Clock, 
  ArrowUpRight, 
  ArrowLeft,
  Code2,
  Cpu,
  Sparkles
} from 'lucide-vue-next';

const activeCategory = ref<string>('all');

const categories = [
  { id: 'all', label: 'Todos los contenidos' },
  { id: 'iot', label: 'IoT & Firmware' },
  { id: 'frontend', label: 'Frontend & Arquitectura' },
  { id: 'ia', label: 'Inteligencia Artificial' },
];

const filteredPosts = computed(() => {
  if (activeCategory.value === 'all') return LEARNING_POSTS;
  if (activeCategory.value === 'iot') {
    return LEARNING_POSTS.filter(p => p.category.includes('IoT') || p.category.includes('Firmware'));
  }
  if (activeCategory.value === 'frontend') {
    return LEARNING_POSTS.filter(p => p.category.includes('Frontend') || p.category.includes('Arquitectura'));
  }
  if (activeCategory.value === 'ia') {
    return LEARNING_POSTS.filter(p => p.category.includes('IA'));
  }
  return LEARNING_POSTS;
});
</script>

<template>
  <div class="learning-page min-h-screen pt-28 sm:pt-36 pb-24 relative overflow-hidden">
    <!-- Ambient glows -->
    <div class="absolute top-24 right-1/4 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[170px] pointer-events-none"></div>
    <div class="absolute top-1/2 left-10 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none"></div>

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

      <!-- Page Header with YouTube Channel Banner -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-white/10">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-accent/30 text-xs font-mono text-brand-accent mb-4">
            <GraduationCap class="w-3.5 h-3.5" />
            <span>SUITECH ACADEMY · FORMACIÓN Y DIVULGACIÓN TÉCNICA EN ESPAÑOL</span>
          </div>
          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Tutoriales de <span class="text-gradient-accent">programación, IoT con ESP32</span> y aplicaciones de IA.
          </h1>
          <p class="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Aprender construyendo y compartir con honestidad. Publicamos guías prácticas de desarrollo web con Vue 3 y TypeScript, proyectos de telemetría con microcontroladores ESP32, automatización de procesos e ingeniería de software en español.
          </p>
        </div>

        <!-- YouTube Callout Card -->
        <div class="shrink-0 p-6 rounded-3xl glass-panel-elevated border border-red-500/20 max-w-md w-full">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500">
              <Youtube class="w-5 h-5" />
            </div>
            <div>
              <div class="text-sm font-bold text-white">Canal Oficial de YouTube</div>
              <div class="text-[11px] font-mono text-slate-400">@suitechpe · Videos y tutoriales paso a paso</div>
            </div>
          </div>
          <p class="text-xs text-slate-300 leading-relaxed">
            Suscríbete para acceder a explicaciones en video, pruebas de hardware en vivo y resolución de dudas técnicas.
          </p>
          <div class="mt-4 pt-3 border-t border-white/10">
            <a
              :href="BRAND_INFO.youtubeUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-white bg-red-600 hover:bg-red-500 transition-all shadow-md"
            >
              <span>Ir al canal de YouTube</span>
              <ArrowUpRight class="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      <!-- Categories Filter -->
      <div class="mt-12 flex flex-wrap gap-2.5">
        <button
          v-for="cat in categories"
          :key="cat.id"
          type="button"
          @click="activeCategory = cat.id"
          :class="[
            'px-5 py-2 rounded-full text-xs font-mono transition-all duration-200 border',
            activeCategory === cat.id
              ? 'bg-brand-accent text-white border-brand-accent font-bold shadow-glow-accent'
              : 'bg-brand-surface text-slate-300 border-white/10 hover:border-brand-accent/40 hover:text-white'
          ]"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Articles & Tutorials Grid -->
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <article
          v-for="post in filteredPosts"
          :key="post.id"
          class="rounded-3xl glass-panel p-8 flex flex-col justify-between border border-white/10 hover:border-brand-accent/40 transition-all duration-300 hover:shadow-glow-accent/10 group"
        >
          <div>
            <!-- Header Meta -->
            <div class="flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
              <span class="text-brand-accent font-semibold flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                {{ post.category }}
              </span>
              <span class="flex items-center gap-1.5 text-slate-400">
                <Clock class="w-3.5 h-3.5" />
                {{ post.readTime }}
              </span>
            </div>

            <!-- Title -->
            <h2 class="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-accent transition-colors leading-snug">
              {{ post.title }}
            </h2>

            <!-- Summary -->
            <p class="mt-4 text-sm text-slate-300 leading-relaxed font-normal">
              {{ post.summary }}
            </p>

            <!-- Tags -->
            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-[11px] font-mono text-slate-300"
              >
                #{{ tag }}
              </span>
            </div>
          </div>

          <!-- Bottom Action -->
          <div class="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
            <span class="text-xs font-mono text-slate-400">
              Serie: {{ post.targetPlatform }}
            </span>
            <a
              :href="BRAND_INFO.youtubeUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-brand-accent hover:text-white text-xs font-semibold text-brand-accent transition-all duration-200"
            >
              <span>Ver tutorial</span>
              <ArrowUpRight class="w-3.5 h-3.5" />
            </a>
          </div>
        </article>
      </div>

      <!-- Philosophy of Open Engineering Box -->
      <div class="mt-16 p-8 sm:p-10 rounded-3xl bg-brand-surface/40 border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-accent shrink-0">
            <Code2 class="w-5 h-5" />
          </div>
          <div>
            <h4 class="text-base font-bold text-white">Código Real</h4>
            <p class="text-xs text-slate-400 mt-1 leading-relaxed">
              Ejemplos funcionales probados en producción, sin fragmentos de código ficticios.
            </p>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center text-blue-400 shrink-0">
            <Cpu class="w-5 h-5" />
          </div>
          <div>
            <h4 class="text-base font-bold text-white">Hardware + Software</h4>
            <p class="text-xs text-slate-400 mt-1 leading-relaxed">
              Enseñamos cómo cruzar la barrera entre sensores físicos y aplicaciones en la nube.
            </p>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
            <Sparkles class="w-5 h-5" />
          </div>
          <div>
            <h4 class="text-base font-bold text-white">Comunidad Abierta</h4>
            <p class="text-xs text-slate-400 mt-1 leading-relaxed">
              Compartimos lo que construimos para fomentar el desarrollo tecnológico local.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
