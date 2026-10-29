<script setup lang="ts">
import { ref } from 'vue';
import AppHeader from './components/layout/AppHeader.vue';
import HeroSection from './components/home/HeroSection.vue';
import CapabilitiesBar from './components/home/CapabilitiesBar.vue';
import ServicesSection from './components/home/ServicesSection.vue';
import WhySuitechSection from './components/home/WhySuitechSection.vue';
import ProjectsSection from './components/home/ProjectsSection.vue';
import ProcessSection from './components/home/ProcessSection.vue';
import IndustriesSection from './components/home/IndustriesSection.vue';
import LearningSection from './components/home/LearningSection.vue';
import ContactSection from './components/home/ContactSection.vue';
import AppFooter from './components/layout/AppFooter.vue';

const contactSectionRef = ref<InstanceType<typeof ContactSection> | null>(null);

const handleSolutionSelection = (solutionId: string) => {
  if (contactSectionRef.value) {
    contactSectionRef.value.setSolutionType(solutionId);
  }
};
</script>

<template>
  <div class="min-h-screen bg-brand-dark text-brand-body flex flex-col font-sans selection:bg-brand-accent selection:text-brand-dark">
    <!-- Header Fixed -->
    <AppHeader />

    <!-- Main Content Flow -->
    <main class="flex-grow">
      <!-- Section B: Hero Principal con Simulador Interactivo -->
      <HeroSection />

      <!-- Section C: Franja de Capacidades Tecnológicas -->
      <CapabilitiesBar />

      <!-- Section D: Soluciones con tarjetas elegantes -->
      <ServicesSection @select-solution="handleSolutionSelection" />

      <!-- Section E: Por qué Suitech (4 Principios) -->
      <WhySuitechSection />

      <!-- Section F: Proyectos Reales con Fichas y Mockups -->
      <ProjectsSection />

      <!-- Section G: Cómo trabajamos (Pipeline 4 Etapas) -->
      <ProcessSection />

      <!-- Section H: Sectores y Aplicaciones -->
      <IndustriesSection />

      <!-- Section I: Construyendo Suitech (Aprendizaje y Divulgación) -->
      <LearningSection />

      <!-- Section J: Llamada a la Acción & Formulario Directo -->
      <ContactSection ref="contactSectionRef" />
    </main>

    <!-- Section K: Footer -->
    <AppFooter />
  </div>
</template>
