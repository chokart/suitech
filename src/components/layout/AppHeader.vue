<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Menu, X, ArrowUpRight } from 'lucide-vue-next';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Soluciones', href: '#soluciones' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Aprendizaje', href: '#aprendizaje' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Contacto', href: '#contacto' }
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
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
        ? 'py-3 bg-brand-dark/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40' 
        : 'py-5 bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        
        <!-- Brand Logo -->
        <a 
          href="#inicio" 
          class="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-lg"
          aria-label="Suitech - Inicio"
        >
          <div class="relative w-9 h-9 rounded-lg bg-gradient-to-br from-brand-surface to-brand-surface-elevated border border-brand-accent/30 flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105 group-hover:border-brand-accent shadow-glow-accent/20">
            <svg viewBox="0 0 48 48" fill="none" class="w-full h-full">
              <path d="M33 15H19C16.2386 15 14 17.2386 14 20C14 22.7614 16.2386 25 19 25H29C31.7614 25 34 27.2386 34 30C34 32.7614 31.7614 35 29 35H15" stroke="url(#logoGradNav)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
              <circle cx="33" cy="15" r="3" fill="#00E5A3" />
              <circle cx="15" cy="35" r="3" fill="#00C2FF" />
              <defs>
                <linearGradient id="logoGradNav" x1="14" y1="15" x2="34" y2="35" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color="#00E5A3" />
                  <stop offset="100%" stop-color="#00C2FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="flex flex-col">
            <span class="text-xl font-bold tracking-tight text-white flex items-center">
              SUI<span class="text-brand-accent">TECH</span>
              <span class="ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
            </span>
            <span class="text-[10px] uppercase font-mono tracking-wider text-brand-muted -mt-1 hidden sm:block">
              Ingeniería Aplicada
            </span>
          </div>
        </a>

        <!-- Desktop Navigation Menu -->
        <nav class="hidden md:flex items-center gap-1 bg-brand-surface/60 border border-white/5 rounded-full px-4 py-1.5 backdrop-blur-md">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            {{ link.name }}
          </a>
        </nav>

        <!-- Right Side: Contact CTA & Mobile Menu Toggle -->
        <div class="flex items-center gap-3">
          <a
            href="#contacto"
            class="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-dark bg-gradient-to-r from-brand-accent to-brand-accent-cyan hover:shadow-glow-accent hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Contacto</span>
            <ArrowUpRight class="w-3.5 h-3.5" />
          </a>

          <!-- Mobile menu toggle button -->
          <button
            type="button"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden p-2 rounded-lg bg-brand-surface border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
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
        class="md:hidden mt-2 mx-4 p-5 rounded-2xl glass-panel-elevated shadow-2xl border border-white/10"
      >
        <div class="flex flex-col gap-2">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            @click="closeMobileMenu"
            class="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-brand-accent hover:bg-white/5 rounded-xl transition-colors"
          >
            {{ link.name }}
          </a>
          <div class="pt-3 border-t border-white/10 mt-2">
            <a
              href="#contacto"
              @click="closeMobileMenu"
              class="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-brand-dark bg-gradient-to-r from-brand-accent to-brand-accent-cyan shadow-glow-accent"
            >
              <span>Hablemos de tu proyecto</span>
              <ArrowUpRight class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>
