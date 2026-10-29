<script setup lang="ts">
import { ref } from 'vue';
import HeroSection from '../components/home/HeroSection.vue';
import ServicesSection from '../components/home/ServicesSection.vue';
import WhySuitechSection from '../components/home/WhySuitechSection.vue';
import ProcessSection from '../components/home/ProcessSection.vue';
import IndustriesSection from '../components/home/IndustriesSection.vue';
import ContactSection from '../components/home/ContactSection.vue';
import { ArrowRight, FolderGit2, GraduationCap } from 'lucide-vue-next';

const contactSectionRef = ref<InstanceType<typeof ContactSection> | null>(null);

const handleSolutionSelection = (solutionId: string) => {
  if (contactSectionRef.value) {
    contactSectionRef.value.setSolutionType(solutionId);
  }
};
</script>

<template>
  <div class="home-view">
    <!-- Hero Principal -->
    <HeroSection />

    <!-- Soluciones con tarjetas interactivas -->
    <ServicesSection @select-solution="handleSolutionSelection" />

    <!-- Principios de Ingeniería -->
    <WhySuitechSection />

    <!-- Metodología de Desarrollo: Cómo trabajamos -->
    <ProcessSection />

    <!-- Portales Independientes: Banners de Acceso Rápido a Proyectos & Aprendizaje -->
    <section class="py-16 relative bg-brand-surface/30 border-y border-white/10 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- Teaser Card: Proyectos Reales -->
          <div class="rounded-3xl glass-panel p-8 sm:p-10 border border-white/10 hover:border-brand-accent/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-accent/30 text-xs font-mono text-brand-accent mb-4">
                <FolderGit2 class="w-3.5 h-3.5" />
                <span>PORTAFOLIO TÉCNICO</span>
              </div>
              <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Proyectos reales y activos desarrollados por Suitech.
              </h3>
              <p class="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Explora nuestras fichas de ingeniería: software de gestión, telemetría IoT con ESP32, automatización con modelos de IA y dashboards reactivos.
              </p>
            </div>
            <div class="mt-8 pt-6 border-t border-white/5">
              <router-link
                to="/proyectos"
                class="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-brand-accent hover:bg-brand-accent-glow shadow-glow-accent transition-all group-hover:scale-[1.02]"
              >
                <span>Ver página de Proyectos</span>
                <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </router-link>
            </div>
          </div>

          <!-- Teaser Card: Aprendizaje / Construyendo Suitech -->
          <div class="rounded-3xl glass-panel p-8 sm:p-10 border border-white/10 hover:border-brand-accent/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-accent/30 text-xs font-mono text-brand-accent mb-4">
                <GraduationCap class="w-3.5 h-3.5" />
                <span>CONSTRUYENDO SUITECH</span>
              </div>
              <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Divulgación técnica, tutoriales y código abierto.
              </h3>
              <p class="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Aprende cómo construir aplicaciones web con Vue 3, cómo conectar sensores con APIs REST y cómo integrar IA en flujos reales sin misterios.
              </p>
            </div>
            <div class="mt-8 pt-6 border-t border-white/5">
              <router-link
                to="/aprendizaje"
                class="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-white/30 transition-all group-hover:scale-[1.02]"
              >
                <span>Ver página de Aprendizaje</span>
                <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </router-link>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Campos de Aplicación -->
    <IndustriesSection />

    <!-- Canal Directo / Contacto -->
    <ContactSection ref="contactSectionRef" />
  </div>
</template>
