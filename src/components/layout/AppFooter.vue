<script setup lang="ts">
import { BRAND_INFO, SOLUTIONS } from '../../data/suitechData';
import { 
  ArrowUp, 
  Mail, 
  Youtube, 
  Linkedin, 
  Github 
} from 'lucide-vue-next';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <footer class="bg-brand-dark border-t border-brand-accent/20 pt-16 pb-12 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Top Grid: 4 Columns -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10">
        
        <!-- Column 1: Brand & Philosophy (Spans 2 cols on LG) -->
        <div class="lg:col-span-2 space-y-4">
          <div class="flex items-center gap-3.5">
            <div class="w-10 h-10 rounded-full p-0.5 shrink-0">
              <img 
                src="/suitech-icon.svg" 
                alt="Suitech Isotipo" 
                class="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(0,110,254,0.4)]" 
              />
            </div>
            <div class="flex flex-col">
              <div class="text-2xl font-black tracking-tight leading-none flex items-center">
                <span class="text-white">SUI</span>
                <span class="text-brand-accent">TECH</span>
              </div>
              <div class="flex items-center gap-1.5 text-[8px] font-mono tracking-[0.25em] text-slate-400 mt-1 uppercase">
                <span class="w-2.5 h-[1px] bg-slate-500"></span>
                <span>P E R Ú</span>
                <span class="w-2.5 h-[1px] bg-slate-500"></span>
              </div>
            </div>
          </div>

          <p class="text-sm text-slate-300 leading-relaxed max-w-sm pt-1">
            {{ BRAND_INFO.tagline }}
          </p>

          <p class="text-xs text-slate-400 leading-relaxed max-w-sm">
            {{ BRAND_INFO.shortDescription }}
          </p>

          <!-- Social Links (Configurable) -->
          <div class="flex items-center gap-3 pt-2">
            <a
              :href="BRAND_INFO.youtubeUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center text-slate-400 hover:text-red-400 hover:border-red-500/40 transition-colors"
              aria-label="YouTube Suitech"
            >
              <Youtube class="w-4 h-4" />
            </a>

            <a
              :href="BRAND_INFO.linkedinUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-accent hover:border-brand-accent/40 transition-colors"
              aria-label="LinkedIn Suitech"
            >
              <Linkedin class="w-4 h-4" />
            </a>

            <a
              :href="BRAND_INFO.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/40 transition-colors"
              aria-label="GitHub Suitech"
            >
              <Github class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Column 2: Navigation -->
        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
            Navegación
          </h4>
          <ul class="space-y-2.5 text-xs text-slate-400">
            <li>
              <router-link to="/" class="hover:text-brand-accent transition-colors">Inicio</router-link>
            </li>
            <li>
              <router-link to="/#soluciones" class="hover:text-brand-accent transition-colors">Soluciones</router-link>
            </li>
            <li>
              <router-link to="/proyectos" class="hover:text-brand-accent transition-colors">Proyectos reales</router-link>
            </li>
            <li>
              <router-link to="/aprendizaje" class="hover:text-brand-accent transition-colors">Construyendo Suitech</router-link>
            </li>
            <li>
              <router-link to="/#nosotros" class="hover:text-brand-accent transition-colors">Principios & Nosotros</router-link>
            </li>
            <li>
              <router-link to="/#contacto" class="hover:text-brand-accent transition-colors">Contacto técnico</router-link>
            </li>
          </ul>
        </div>

        <!-- Column 3: Soluciones Principales -->
        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
            Áreas de Solución
          </h4>
          <ul class="space-y-2.5 text-xs text-slate-400">
            <li v-for="sol in SOLUTIONS" :key="sol.id">
              <router-link to="/#soluciones" class="hover:text-blue-400 transition-colors">
                {{ sol.title }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Column 4: Contacto Oficial & Infraestructura -->
        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
            Contacto & Despliegue
          </h4>
          <div class="space-y-3 text-xs text-slate-400 font-mono">
            <div class="flex items-start gap-2">
              <Mail class="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
              <a :href="'mailto:' + BRAND_INFO.contactEmail" class="hover:text-white transition-colors truncate">
                {{ BRAND_INFO.contactEmail }}
              </a>
            </div>

            <div class="pt-2 text-[11px] text-slate-400 leading-relaxed font-sans">
              <span class="block text-slate-300 font-semibold mb-1">Infraestructura:</span>
              VPS alojado con Dokploy & GitHub Actions.
            </div>

            <div class="pt-2">
              <span class="inline-block px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-emerald-400">
                ● Servidores Operativos
              </span>
            </div>
          </div>
        </div>

      </div>

      <!-- Bottom Bar: Copyright & Back to Top -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
        <div class="flex flex-wrap items-center gap-4">
          <span>&copy; {{ new Date().getFullYear() }} {{ BRAND_INFO.name }}. Todos los derechos reservados.</span>
          <span class="text-white/20">|</span>
          <span class="text-brand-accent">{{ BRAND_INFO.domainDisplay }}</span>
        </div>

        <button
          type="button"
          @click="scrollToTop"
          class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          aria-label="Volver al inicio de la página"
        >
          <span>Volver arriba</span>
          <ArrowUp class="w-3.5 h-3.5 text-brand-accent" />
        </button>
      </div>

    </div>
  </footer>
</template>
