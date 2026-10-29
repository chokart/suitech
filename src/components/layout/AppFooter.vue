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
  <footer class="bg-brand-dark border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Top Grid: 4 Columns -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10">
        
        <!-- Column 1: Brand & Philosophy (Spans 2 cols on LG) -->
        <div class="lg:col-span-2 space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-brand-surface border border-brand-accent/40 flex items-center justify-center p-1 shadow-glow-accent/20">
              <svg viewBox="0 0 48 48" fill="none" class="w-full h-full">
                <path d="M33 15H19C16.2386 15 14 17.2386 14 20C14 22.7614 16.2386 25 19 25H29C31.7614 25 34 27.2386 34 30C34 32.7614 31.7614 35 29 35H15" stroke="url(#footerGrad)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
                <circle cx="33" cy="15" r="3" fill="#00E5A3" />
                <circle cx="15" cy="35" r="3" fill="#00C2FF" />
                <defs>
                  <linearGradient id="footerGrad" x1="14" y1="15" x2="34" y2="35" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stop-color="#00E5A3" />
                    <stop offset="100%" stop-color="#00C2FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span class="text-xl font-bold tracking-tight text-white">
              SUI<span class="text-brand-accent">TECH</span>
            </span>
          </div>

          <p class="text-sm text-slate-400 leading-relaxed max-w-sm">
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
              class="w-9 h-9 rounded-lg bg-brand-surface border border-white/10 flex items-center justify-center text-slate-400 hover:text-red-400 hover:border-red-500/40 transition-colors"
              aria-label="YouTube Suitech"
            >
              <Youtube class="w-4 h-4" />
            </a>

            <a
              :href="BRAND_INFO.linkedinUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-lg bg-brand-surface border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              aria-label="LinkedIn Suitech"
            >
              <Linkedin class="w-4 h-4" />
            </a>

            <a
              :href="BRAND_INFO.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-lg bg-brand-surface border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/40 transition-colors"
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
              <a href="#inicio" class="hover:text-brand-accent transition-colors">Inicio</a>
            </li>
            <li>
              <a href="#soluciones" class="hover:text-brand-accent transition-colors">Soluciones</a>
            </li>
            <li>
              <a href="#proyectos" class="hover:text-brand-accent transition-colors">Proyectos reales</a>
            </li>
            <li>
              <a href="#aprendizaje" class="hover:text-brand-accent transition-colors">Construyendo Suitech</a>
            </li>
            <li>
              <a href="#nosotros" class="hover:text-brand-accent transition-colors">Principios & Nosotros</a>
            </li>
            <li>
              <a href="#contacto" class="hover:text-brand-accent transition-colors">Contacto técnico</a>
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
              <a href="#soluciones" class="hover:text-brand-accent-cyan transition-colors">
                {{ sol.title }}
              </a>
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
          <span class="text-slate-400">{{ BRAND_INFO.domainDisplay }}</span>
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
