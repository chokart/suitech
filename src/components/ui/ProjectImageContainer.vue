<script setup lang="ts">
import { ref } from 'vue';
import { Image as ImageIcon, ZoomIn } from 'lucide-vue-next';

const props = withDefaults(defineProps<{
  src: string;
  caption: string;
  aspectClass?: string;
  fit?: 'cover' | 'contain';
  isPrimary?: boolean;
}>(), {
  aspectClass: 'aspect-[16/10]',
  fit: 'cover',
  isPrimary: false
});

const emit = defineEmits<{
  (e: 'click'): void;
}>();

const isLoaded = ref(false);
const hasError = ref(false);

const onImageLoad = () => {
  isLoaded.value = true;
};

const onImageError = () => {
  hasError.value = true;
};
</script>

<template>
  <div 
    class="relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer transition-all duration-300 hover:border-brand-accent/50 hover:shadow-glow-accent/20 bg-brand-surface/60"
    :class="[aspectClass]"
    @click="emit('click')"
  >
    <!-- Actual Image when loaded and exists -->
    <img
      v-show="!hasError"
      :src="src"
      :alt="caption"
      :class="[
        'w-full h-full transition-transform duration-500 group-hover:scale-105',
        fit === 'contain' ? 'object-contain p-4' : 'object-cover',
        isLoaded ? 'opacity-100' : 'opacity-0'
      ]"
      @load="onImageLoad"
      @error="onImageError"
      loading="lazy"
    />

    <!-- Discrete Technical Placeholder (Shown if image is missing or loading) -->
    <div 
      v-if="hasError || !isLoaded" 
      class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none bg-gradient-to-b from-brand-surface/90 to-brand-dark/95"
    >
      <!-- Blueprint Grid Background Pattern -->
      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#006EFE_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

      <div class="relative z-10 flex flex-col items-center max-w-xs">
        <div class="w-12 h-12 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-accent mb-3 shadow-sm group-hover:border-brand-accent/40 group-hover:scale-105 transition-all">
          <ImageIcon class="w-6 h-6" />
        </div>
        
        <span class="text-xs font-mono font-medium text-slate-200 uppercase tracking-wider mb-1 line-clamp-2">
          {{ caption }}
        </span>
        
        <span class="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10 mt-1">
          Captura en preparación
        </span>
      </div>
    </div>

    <!-- Hover Overlay with Zoom indicator when image is loaded -->
    <div 
      v-if="isLoaded && !hasError"
      class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4"
    >
      <span class="text-xs font-mono text-white truncate max-w-[80%]">
        {{ caption }}
      </span>
      <div class="w-8 h-8 rounded-lg bg-brand-accent text-white flex items-center justify-center shadow-lg">
        <ZoomIn class="w-4 h-4" />
      </div>
    </div>

    <!-- Primary Badge indicator -->
    <div v-if="isPrimary" class="absolute top-3 left-3 z-10 pointer-events-none">
      <span class="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-brand-dark/80 text-brand-accent border border-brand-accent/30 backdrop-blur-md">
        Vista principal
      </span>
    </div>
  </div>
</template>
