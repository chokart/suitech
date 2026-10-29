<script setup lang="ts">
import AppHeader from './components/layout/AppHeader.vue';
import AppFooter from './components/layout/AppFooter.vue';
</script>

<template>
  <div class="min-h-screen bg-brand-dark text-brand-body flex flex-col font-sans selection:bg-brand-accent selection:text-brand-dark">
    <!-- Header Fixed Navigation -->
    <AppHeader />

    <!-- Independent Page Routes View -->
    <main class="flex-grow">
      <router-view />
    </main>

    <!-- Global Footer -->
    <AppFooter />
  </div>
</template>
