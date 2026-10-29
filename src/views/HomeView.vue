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
    <!-- Hero Principal -->
    <HeroSection />

    <!-- Soluciones con tarjetas interactivas -->
    <ServicesSection @select-solution="handleSolutionSelection" />

    <!-- Principios de Ingeniería -->
    <WhySuitechSection />

    <!-- Metodología de Desarrollo: Cómo trabajamos -->
    <ProcessSection />

    <!-- Campos de Aplicación -->
    <IndustriesSection />

    <!-- Canal Directo / Contacto -->
    <ContactSection ref="contactSectionRef" />
  </div>
</template>
