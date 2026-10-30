<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { Menu, X, ArrowUpRight } from 'lucide-vue-next';

const route = useRoute();
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Soluciones', path: '/#soluciones' },
  { name: 'Proyectos', path: '/proyectos' },
  { name: 'Academy', path: '/academy', badge: 'En construcción' },
  { name: 'Nosotros', path: '/#nosotros' }
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const isLinkActive = (path: string) => {
  if (path === '/') return route.path === '/' && !route.hash;
  if (path.startsWith('/#')) return route.path === '/' && route.hash === path.substring(1);
  return route.path === path;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'py-2.5 bg-brand-dark/95 backdrop-blur-md border-b border-brand-accent/20 shadow-lg shadow-black/50' 
        : 'py-4 sm:py-5 bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        
        <!-- Brand Official Logo (Symbol + Typography) -->
        <router-link 
          to="/" 
          class="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-xl"
          aria-label="Suitech - Inicio"
        >
          <!-- Official Yin-Yang 3D Sphere Isotype -->
          <div class="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-0.5 transition-transform duration-300 group-hover:scale-105 shrink-0">
            <img 
              src="/suitech-icon.svg" 
              alt="Suitech Isotipo" 
              class="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(0,110,254,0.45)]" 
            />
          </div>

          <!-- Official Typography: SUI in White, TECH in Official Electric Blue, with PERÚ caption -->
          <div class="flex flex-col">
            <div class="text-xl sm:text-2xl font-black tracking-tight leading-none flex items-center">
              <span class="text-white">SUI</span>
              <span class="text-brand-accent">TECH</span>
              <span class="ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
            </div>
            <div class="flex items-center gap-1.5 text-[9px] font-mono tracking-[0.25em] text-slate-400 mt-1 uppercase">
              <span class="w-3 h-[1px] bg-slate-500"></span>
              <span>P E R Ú</span>
              <span class="w-3 h-[1px] bg-slate-500"></span>
            </div>
          </div>
        </router-link>

        <!-- Desktop Navigation Menu -->
        <nav class="hidden md:flex items-center gap-1 bg-brand-surface/85 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md shadow-sm">
          <router-link
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            :class="[
              'px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent inline-flex items-center gap-1.5',
              isLinkActive(link.path)
                ? 'text-white bg-brand-accent/20 border border-brand-accent/50 font-semibold shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            ]"
          >
            <span>{{ link.name }}</span>
            <span 
              v-if="link.badge" 
              class="text-[9px] font-mono px-1.5 py-0.2 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30"
            >
              {{ link.badge }}
            </span>
          </router-link>
        </nav>

        <!-- Right Side: Contact CTA & Mobile Menu Toggle -->
        <div class="flex items-center gap-3">
          <router-link
            to="/#contacto"
            class="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-accent to-brand-accent-glow hover:shadow-glow-accent hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white border border-brand-accent/40"
          >
            <span>Contacto</span>
            <ArrowUpRight class="w-3.5 h-3.5" />
          </router-link>

          <!-- Mobile menu toggle button -->
          <button
            type="button"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden p-2 rounded-xl bg-brand-surface border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            :aria-label="isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'"
            :aria-expanded="isMobileMenuOpen"
          >
            <X v-if="isMobileMenuOpen" class="w-5 h-5 text-brand-accent" />
            <Menu v-else class="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Dropdown Navigation -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="isMobileMenuOpen" 
        class="md:hidden mt-2 mx-4 p-5 rounded-2xl glass-panel-elevated shadow-2xl border border-brand-accent/30"
      >
        <div class="flex flex-col gap-2">
          <router-link
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            @click="closeMobileMenu"
            :class="[
              'px-4 py-2.5 text-sm font-medium rounded-xl transition-colors flex items-center justify-between',
              isLinkActive(link.path)
                ? 'text-brand-accent bg-brand-accent/10 font-bold'
                : 'text-slate-200 hover:text-brand-accent hover:bg-white/5'
            ]"
          >
            <span>{{ link.name }}</span>
            <span 
              v-if="link.badge" 
              class="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30"
            >
              {{ link.badge }}
            </span>
          </router-link>
          <div class="pt-3 border-t border-white/10 mt-2">
            <router-link
              to="/#contacto"
              @click="closeMobileMenu"
              class="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-accent to-brand-accent-glow shadow-glow-accent"
            >
              <span>Hablemos de tu proyecto</span>
              <ArrowUpRight class="w-4 h-4" />
            </router-link>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>
