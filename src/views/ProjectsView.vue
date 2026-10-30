<script setup lang="ts">
import { ref, computed } from 'vue';
import { PROJECTS } from '../data/suitechData';
import type { ProjectImage } from '../types';
import ProjectImageContainer from '../components/ui/ProjectImageContainer.vue';
import ProjectLightbox from '../components/ui/ProjectLightbox.vue';
import { 
  FolderGit2, 
  ArrowRight, 
  Check, 
  ArrowLeft,
  Sparkles,
  Layers,
  Cpu,
  Compass,
  Eye,
  ShieldCheck,
  ExternalLink
} from 'lucide-vue-next';

// Filters: Todos, Software, IoT, Ingeniería y metalurgia
const activeFilter = ref<'all' | 'software' | 'iot' | 'ingenieria'>('all');

const filterOptions = [
  { id: 'all' as const, label: 'Todos' },
  { id: 'software' as const, label: 'Software' },
  { id: 'iot' as const, label: 'IoT' },
  { id: 'ingenieria' as const, label: 'Ingeniería y metalurgia' }
];

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return PROJECTS;
  return PROJECTS.filter(p => p.filterCategory === activeFilter.value);
});

// Lightbox modal state
const isLightboxOpen = ref(false);
const lightboxImages = ref<ProjectImage[]>([]);
const lightboxIndex = ref(0);
const lightboxProjectTitle = ref('');

const openLightbox = (images: ProjectImage[] | undefined, index = 0, title = '') => {
  if (!images || images.length === 0) return;
  lightboxImages.value = images;
  lightboxIndex.value = index;
  lightboxProjectTitle.value = title;
  isLightboxOpen.value = true;
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'desarrollado':
    case 'operativo':
      return {
        text: 'Desarrollado',
        classes: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
      };
    case 'prototipo':
      return {
        text: 'Prototipo',
        classes: 'text-amber-400 bg-amber-500/10 border-amber-500/30'
      };
    case 'desarrollo':
    default:
      return {
        text: 'En desarrollo',
        classes: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30'
      };
  }
};
</script>

<template>
  <div class="projects-page min-h-screen pt-28 sm:pt-36 pb-24 relative overflow-hidden bg-brand-dark">
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
          <span>PORTAFOLIO DE PROYECTOS</span>
        </div>
        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Proyectos que estamos <span class="text-gradient-accent">construyendo</span>.
        </h1>
        <p class="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          Una selección de desarrollos donde aplicamos software, ingeniería y tecnologías conectadas para resolver necesidades concretas.
        </p>
        <p class="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-mono">
          Cada proyecto representa una oportunidad para aplicar conocimientos técnicos, desarrollar herramientas útiles y explorar nuevas posibilidades tecnológicas.
        </p>
      </div>

      <!-- Category Filter Pills -->
      <div class="mt-10 flex flex-wrap items-center gap-2.5">
        <button
          v-for="filter in filterOptions"
          :key="filter.id"
          type="button"
          @click="activeFilter = filter.id"
          :class="[
            'px-5 py-2 rounded-full text-xs font-mono transition-all duration-200 border cursor-pointer',
            activeFilter === filter.id
              ? 'bg-brand-accent text-white border-brand-accent font-bold shadow-glow-accent'
              : 'bg-brand-surface text-slate-300 border-white/10 hover:border-brand-accent/40 hover:text-white'
          ]"
        >
          {{ filter.label }}
        </button>
      </div>

      <!-- Editorial Projects List (Alternating blocks with visual rhythm) -->
      <div class="mt-16 space-y-24 sm:space-y-32">
        
        <article
          v-for="project in filteredProjects"
          :key="project.id"
          class="relative rounded-3xl glass-panel p-6 sm:p-10 lg:p-12 border border-white/10 hover:border-brand-accent/30 transition-all duration-300"
          :class="{ 'ring-1 ring-brand-accent/30 shadow-glow-accent/15': project.id === 'gestion-operaciones-mineras' }"
        >
          <!-- PROYECTO 01: MINERÍA (DESTACADO PRINCIPAL) -->
          <div v-if="project.id === 'gestion-operaciones-mineras'" class="space-y-8">
            <!-- Header bar -->
            <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div class="flex flex-wrap items-center gap-3">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent/15 text-brand-accent border border-brand-accent/30 text-xs font-mono font-bold uppercase tracking-wider">
                  <Sparkles class="w-3.5 h-3.5" />
                  Proyecto Destacado
                </span>
                <span class="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  {{ project.category }}
                </span>
              </div>

              <!-- Status Badge -->
              <span 
                :class="[
                  'text-xs font-mono px-3 py-1 rounded-full border flex items-center gap-1.5 font-medium',
                  getStatusBadge(project.status).classes
                ]"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                {{ getStatusBadge(project.status).text }}
              </span>
            </div>

            <!-- Content Grid: 2 Columns on LG -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              <!-- Left Info Column -->
              <div class="lg:col-span-6 space-y-6">
                <div>
                  <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    {{ project.name }}
                  </h2>
                  <p class="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {{ project.description }}
                  </p>
                </div>

                <!-- Funcionalidades principales -->
                <div class="pt-4 border-t border-white/5">
                  <div class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3.5">
                    Funcionalidades principales:
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div 
                      v-for="(feature, fIndex) in project.keyFeatures" 
                      :key="fIndex"
                      class="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-200"
                    >
                      <Check class="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                      <span>{{ feature }}</span>
                    </div>
                  </div>
                </div>

                <!-- Complementary context text -->
                <div class="p-4 rounded-xl bg-brand-surface/70 border border-brand-accent/20 text-xs text-slate-300 leading-relaxed">
                  {{ project.complementaryText }}
                </div>

                <!-- Tech stack tags -->
                <div>
                  <div class="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Tecnologías y arquitectura:
                  </div>
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="tech in project.technologies" 
                      :key="tech"
                      class="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <!-- Disclaimer / Autoría -->
                <div class="pt-2 text-[11px] font-mono text-slate-400 flex items-start gap-2">
                  <ShieldCheck class="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                  <span>{{ project.honestDisclaimer }}</span>
                </div>
              </div>

              <!-- Right Visual Gallery Column (Prominent composition: 1 big + 3 thumbnails) -->
              <div class="lg:col-span-6 space-y-4">
                <!-- Large Primary Image (panel-operaciones) -->
                <ProjectImageContainer
                  v-if="project.images && project.images[0]"
                  :src="project.images[0].src"
                  :caption="project.images[0].caption"
                  aspect-class="aspect-[16/10] sm:aspect-[16/9]"
                  :is-primary="true"
                  @click="openLightbox(project.images, 0, project.name)"
                />

                <!-- 3 Secondary Thumbnails -->
                <div v-if="project.images && project.images.length > 1" class="grid grid-cols-3 gap-3">
                  <ProjectImageContainer
                    v-for="(img, idx) in project.images.slice(1)"
                    :key="img.src"
                    :src="img.src"
                    :caption="img.caption"
                    aspect-class="aspect-[4/3]"
                    @click="openLightbox(project.images, idx + 1, project.name)"
                  />
                </div>

                <!-- View Gallery Trigger Button -->
                <button
                  type="button"
                  @click="openLightbox(project.images, 0, project.name)"
                  class="w-full py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-brand-accent hover:text-white border border-white/10 text-xs font-mono font-medium text-slate-300 transition-all flex items-center justify-center gap-2"
                >
                  <Eye class="w-4 h-4 text-brand-accent" />
                  <span>Ver galería completa del proyecto (4 capturas)</span>
                </button>
              </div>

            </div>
          </div>

          <!-- PROYECTO 02: GESTIÓN EMPRESARIAL (DISEÑO VISUAL ALTERNADO) -->
          <div v-else-if="project.id === 'sistema-gestion-empresarial'" class="space-y-8">
            <!-- Header bar -->
            <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
              <span class="text-xs font-mono text-brand-accent uppercase tracking-wider">
                {{ project.category }}
              </span>
              <span 
                :class="[
                  'text-xs font-mono px-3 py-1 rounded-full border flex items-center gap-1.5 font-medium',
                  getStatusBadge(project.status).classes
                ]"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-current"></span>
                {{ getStatusBadge(project.status).text }}
              </span>
            </div>

            <!-- Content Grid: Alternated on Desktop (Images on Left, Text on Right) -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              <!-- Visual Gallery (Left on desktop) -->
              <div class="lg:col-span-6 space-y-4 order-2 lg:order-1">
                <!-- Main Horizontal Image (dashboard) -->
                <ProjectImageContainer
                  v-if="project.images && project.images[0]"
                  :src="project.images[0].src"
                  :caption="project.images[0].caption"
                  aspect-class="aspect-[16/10]"
                  :is-primary="true"
                  @click="openLightbox(project.images, 0, project.name)"
                />

                <!-- 2 Complementary Thumbnails (productos & reportes) -->
                <div v-if="project.images && project.images.length > 1" class="grid grid-cols-2 gap-3">
                  <ProjectImageContainer
                    v-for="(img, idx) in project.images.slice(1)"
                    :key="img.src"
                    :src="img.src"
                    :caption="img.caption"
                    aspect-class="aspect-[16/10]"
                    @click="openLightbox(project.images, idx + 1, project.name)"
                  />
                </div>

                <button
                  type="button"
                  @click="openLightbox(project.images, 0, project.name)"
                  class="w-full py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-brand-accent hover:text-white border border-white/10 text-xs font-mono font-medium text-slate-300 transition-all flex items-center justify-center gap-2"
                >
                  <Eye class="w-4 h-4 text-brand-accent" />
                  <span>Ver capturas de gestión (3 imágenes)</span>
                </button>
              </div>

              <!-- Text Info Column (Right on desktop) -->
              <div class="lg:col-span-6 space-y-6 order-1 lg:order-2">
                <div>
                  <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                    {{ project.name }}
                  </h2>
                  <p class="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {{ project.description }}
                  </p>
                </div>

                <!-- Áreas principales -->
                <div class="pt-4 border-t border-white/5">
                  <div class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3.5">
                    Áreas principales:
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div 
                      v-for="(feature, fIndex) in project.keyFeatures" 
                      :key="fIndex"
                      class="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-slate-200"
                    >
                      <Check class="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      <span>{{ feature }}</span>
                    </div>
                  </div>
                </div>

                <!-- Tech stack tags -->
                <div>
                  <div class="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Tecnologías utilizadas:
                  </div>
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="tech in project.technologies" 
                      :key="tech"
                      class="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <div class="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs font-mono text-slate-400">
                  {{ project.honestDisclaimer }}
                </div>
              </div>

            </div>
          </div>

          <!-- PROYECTO 03: MONITOREO REMOTO DE NIVEL DE AGUA (IoT) -->
          <div v-else-if="project.id === 'iot-nivel-agua'" class="space-y-8">
            <!-- Header bar -->
            <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
              <span class="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                {{ project.category }}
              </span>
              <span 
                :class="[
                  'text-xs font-mono px-3 py-1 rounded-full border flex items-center gap-1.5 font-medium',
                  getStatusBadge(project.status).classes
                ]"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-current"></span>
                {{ getStatusBadge(project.status).text }}
              </span>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              <!-- Text Column -->
              <div class="lg:col-span-6 space-y-6">
                <div>
                  <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                    {{ project.name }}
                  </h2>
                  <p class="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {{ project.description }}
                  </p>
                </div>

                <div class="p-4 rounded-xl bg-brand-surface/70 border border-cyan-500/20 text-xs text-slate-300 leading-relaxed">
                  {{ project.complementaryText }}
                </div>

                <!-- Componentes y tecnologías -->
                <div class="pt-4 border-t border-white/5">
                  <div class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3.5">
                    Componentes y tecnologías:
                  </div>
                  <div class="space-y-2">
                    <div 
                      v-for="(techItem, tIdx) in project.keyFeatures" 
                      :key="tIdx"
                      class="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-slate-200"
                    >
                      <Cpu class="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{{ techItem }}</span>
                    </div>
                  </div>
                </div>

                <div class="text-[11px] font-mono text-slate-400 leading-relaxed">
                  {{ project.honestDisclaimer }}
                </div>
              </div>

              <!-- Gallery Column: 3 Photos (Prototipo hardware, sensor, web panel) -->
              <div class="lg:col-span-6 space-y-4">
                <!-- Main Hardware Prototype Photo -->
                <ProjectImageContainer
                  v-if="project.images && project.images[0]"
                  :src="project.images[0].src"
                  :caption="project.images[0].caption"
                  aspect-class="aspect-[16/10]"
                  :is-primary="true"
                  @click="openLightbox(project.images, 0, project.name)"
                />

                <!-- Sensor + Web Panel -->
                <div v-if="project.images && project.images.length > 1" class="grid grid-cols-2 gap-3">
                  <ProjectImageContainer
                    v-for="(img, idx) in project.images.slice(1)"
                    :key="img.src"
                    :src="img.src"
                    :caption="img.caption"
                    aspect-class="aspect-[4/3]"
                    @click="openLightbox(project.images, idx + 1, project.name)"
                  />
                </div>

                <button
                  type="button"
                  @click="openLightbox(project.images, 0, project.name)"
                  class="w-full py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-brand-accent hover:text-white border border-white/10 text-xs font-mono font-medium text-slate-300 transition-all flex items-center justify-center gap-2"
                >
                  <Eye class="w-4 h-4 text-brand-accent" />
                  <span>Ver registro visual IoT (3 capturas)</span>
                </button>
              </div>

            </div>
          </div>

          <!-- PROYECTO 04: SUITEMINERALS -->
          <div v-else-if="project.id === 'suiteminerals'" class="space-y-8">
            <!-- Header bar -->
            <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
              <span class="text-xs font-mono text-brand-accent uppercase tracking-wider">
                {{ project.category }}
              </span>
              <span 
                :class="[
                  'text-xs font-mono px-3 py-1 rounded-full border flex items-center gap-1.5 font-medium',
                  getStatusBadge(project.status).classes
                ]"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-current"></span>
                {{ getStatusBadge(project.status).text }}
              </span>
            </div>

            <!-- Content Grid: Images on Left, Text on Right -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              <!-- Gallery Column (Left on desktop) -->
              <div class="lg:col-span-6 space-y-4 order-2 lg:order-1">
                <!-- Main Platform Image -->
                <ProjectImageContainer
                  v-if="project.images && project.images[0]"
                  :src="project.images[0].src"
                  :caption="project.images[0].caption"
                  aspect-class="aspect-[16/10]"
                  :is-primary="true"
                  @click="openLightbox(project.images, 0, project.name)"
                />

                <!-- Two Module Thumbnails -->
                <div v-if="project.images && project.images.length > 1" class="grid grid-cols-2 gap-3">
                  <ProjectImageContainer
                    v-for="(img, idx) in project.images.slice(1)"
                    :key="img.src"
                    :src="img.src"
                    :caption="img.caption"
                    aspect-class="aspect-[16/10]"
                    @click="openLightbox(project.images, idx + 1, project.name)"
                  />
                </div>

                <div class="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    @click="openLightbox(project.images, 0, project.name)"
                    class="flex-1 py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-brand-accent hover:text-white border border-white/10 text-xs font-mono font-medium text-slate-300 transition-all flex items-center justify-center gap-2"
                  >
                    <Eye class="w-4 h-4 text-brand-accent" />
                    <span>Ver capturas (3 imágenes)</span>
                  </button>

                  <a
                    href="https://suiteminerals.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 py-2.5 px-4 rounded-xl bg-brand-accent/20 hover:bg-brand-accent text-white border border-brand-accent/40 text-xs font-mono font-medium transition-all flex items-center justify-center gap-2"
                  >
                    <span>Ver proyecto SuiteMinerals</span>
                    <ExternalLink class="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <!-- Text Info Column (Right on desktop) -->
              <div class="lg:col-span-6 space-y-6 order-1 lg:order-2">
                <div>
                  <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                    {{ project.name }}
                  </h2>
                  <p class="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {{ project.description }}
                  </p>
                </div>

                <div class="p-4 rounded-xl bg-brand-surface/70 border border-brand-accent/20 text-xs text-slate-300 leading-relaxed">
                  {{ project.complementaryText }}
                </div>

                <!-- Áreas de desarrollo -->
                <div class="pt-4 border-t border-white/5">
                  <div class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3.5">
                    Áreas de desarrollo:
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div 
                      v-for="(area, aIdx) in project.keyFeatures" 
                      :key="aIdx"
                      class="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-slate-200"
                    >
                      <Compass class="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      <span>{{ area }}</span>
                    </div>
                  </div>
                </div>

                <!-- Technologies -->
                <div>
                  <div class="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Herramientas y tecnologías:
                  </div>
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="tech in project.technologies" 
                      :key="tech"
                      class="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <div class="text-[11px] font-mono text-slate-400">
                  {{ project.honestDisclaimer }}
                </div>
              </div>

            </div>
          </div>

        </article>

      </div>

      <!-- Cierre de la página: Call to Action hacia Contacto -->
      <div class="mt-24 p-8 sm:p-12 rounded-3xl glass-panel-elevated border border-brand-accent/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
        <div class="max-w-2xl">
          <span class="inline-flex items-center gap-2 text-xs font-mono text-brand-accent uppercase tracking-wider mb-2">
            <Layers class="w-3.5 h-3.5" />
            <span>COLABORACIÓN Y DESARROLLO</span>
          </span>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-white">
            ¿Tienes un proyecto en mente?
          </h3>
          <p class="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
            Si necesitas desarrollar un sistema, explorar una idea tecnológica o resolver una necesidad específica, conversemos.
          </p>
        </div>
        <router-link
          to="/#contacto"
          class="shrink-0 inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-accent to-brand-accent-glow hover:shadow-glow-accent transition-all"
        >
          <span>Hablemos de tu proyecto.</span>
          <ArrowRight class="w-4 h-4" />
        </router-link>
      </div>

    </div>

    <!-- Lightbox de Imágenes -->
    <ProjectLightbox
      :is-open="isLightboxOpen"
      :images="lightboxImages"
      :current-index="lightboxIndex"
      :project-title="lightboxProjectTitle"
      @close="closeLightbox"
      @update:current-index="lightboxIndex = $event"
    />
  </div>
</template>
