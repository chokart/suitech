<script setup lang="ts">
import { ref } from 'vue';
import HeroSection from '../components/home/HeroSection.vue';
import ServicesSection from '../components/home/ServicesSection.vue';
import WhySuitechSection from '../components/home/WhySuitechSection.vue';
import ProcessSection from '../components/home/ProcessSection.vue';
import IndustriesSection from '../components/home/IndustriesSection.vue';
import ContactSection from '../components/home/ContactSection.vue';

const contactSectionRef = ref<InstanceType<typeof ContactSection> | null>(null);

const handleSolutionSelection = (solutionId: string) => {
  if (contactSectionRef.value) {
    contactSectionRef.value.setSolutionType(solutionId);
  }
};
</script>

<template>
  <div class="home-view">
    <!-- Hero Principal (Sección 1) -->
    <HeroSection />

    <!-- Metodología de Desarrollo: Cómo trabajamos (Sección 2) -->
    <ProcessSection />

    <!-- Capacidades & Servicios (Sección 3) -->
    <ServicesSection @select-solution="handleSolutionSelection" />

    <!-- Principios de Ingeniería -->
    <WhySuitechSection />

    <!-- Campos de Aplicación -->
    <IndustriesSection />

    <!-- Canal Directo / Contacto -->
    <ContactSection ref="contactSectionRef" />
  </div>
</template>
