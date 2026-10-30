<script setup lang="ts">
import { BRAND_INFO } from '../../data/suitechData';
import { 
  ArrowUp, 
  Mail, 
  MessageSquare,
  MapPin,
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
        
        <!-- COLUMNA 1 — MARCA (Spans 2 cols on LG) -->
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

          <p class="text-sm font-medium text-slate-200 leading-relaxed max-w-sm pt-1">
            {{ BRAND_INFO.tagline }}
          </p>

          <p class="text-xs text-slate-400 leading-relaxed max-w-sm">
            {{ BRAND_INFO.shortDescription }}
          </p>

          <!-- Perfil oficial de GitHub -->
          <div v-if="BRAND_INFO.githubUrl" class="flex items-center gap-3 pt-2">
            <a
              :href="BRAND_INFO.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/40 transition-colors"
              aria-label="GitHub oficial de Suitech"
            >
              <Github class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- COLUMNA 2 — NAVEGACIÓN -->
        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
            Navegación
          </h4>
          <ul class="space-y-2.5 text-xs text-slate-400">
            <li>
              <router-link to="/" class="hover:text-brand-accent transition-colors">
                Inicio
              </router-link>
            </li>
            <li>
              <router-link to="/soluciones" class="hover:text-brand-accent transition-colors">
                Soluciones
              </router-link>
            </li>
            <li>
              <router-link to="/proyectos" class="hover:text-brand-accent transition-colors">
                Proyectos
              </router-link>
            </li>
            <li>
              <router-link to="/#nosotros" class="hover:text-brand-accent transition-colors">
                Nosotros
              </router-link>
            </li>
            <li>
              <router-link to="/#contacto" class="hover:text-brand-accent transition-colors">
                Contacto
              </router-link>
            </li>
          </ul>
        </div>

        <!-- COLUMNA 3 — LÍNEAS DE TRABAJO -->
        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
            Líneas de trabajo
          </h4>
          <ul class="space-y-2.5 text-xs text-slate-400">
            <li>
              <router-link to="/soluciones" class="hover:text-brand-accent transition-colors">
                Suitech Solutions
              </router-link>
            </li>
            <li>
              <router-link to="/inteligencia-artificial" class="hover:text-brand-accent transition-colors">
                Suitech AI
              </router-link>
            </li>
            <li>
              <router-link to="/iot" class="hover:text-brand-accent transition-colors">
                Suitech IoT
              </router-link>
            </li>
            <li>
              <router-link to="/academy" class="hover:text-brand-accent transition-colors">
                Suitech Academy
              </router-link>
            </li>
            <li>
              <a href="https://suiteminerals.com" target="_blank" rel="noopener noreferrer" class="hover:text-brand-accent transition-colors">
                SuiteMinerals
              </a>
            </li>
          </ul>
        </div>

        <!-- COLUMNA 4 — CONTACTO -->
        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
            Contacto
          </h4>
          <div class="space-y-3.5 text-xs text-slate-400 font-mono">
            <div class="flex items-start gap-2.5">
              <Mail class="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
              <div class="overflow-hidden">
                <div class="text-[10px] uppercase text-slate-400 font-sans">Correo electrónico</div>
                <a :href="'mailto:' + BRAND_INFO.contactEmail" class="text-slate-300 hover:text-white transition-colors truncate block mt-0.5">
                  {{ BRAND_INFO.contactEmail }}
                </a>
              </div>
            </div>

            <div v-if="BRAND_INFO.whatsappUrl" class="flex items-start gap-2.5 pt-1">
              <MessageSquare class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div class="text-[10px] uppercase text-slate-400 font-sans">WhatsApp</div>
                <a :href="BRAND_INFO.whatsappUrl" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-emerald-400 transition-colors block mt-0.5">
                  {{ BRAND_INFO.whatsappDisplay }}
                </a>
              </div>
            </div>

            <div class="flex items-start gap-2.5 pt-1 text-slate-400">
              <MapPin class="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
              <div>
                <span class="text-slate-300 block mt-0.5 font-sans">Arequipa, Perú</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- FRANJA INFERIOR -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
        <div class="flex flex-wrap items-center gap-3">
          <span>&copy; 2026 Suitech Perú. Todos los derechos reservados.</span>
          <span class="text-white/20">|</span>
          <span class="text-brand-accent">suitechpe.com</span>
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