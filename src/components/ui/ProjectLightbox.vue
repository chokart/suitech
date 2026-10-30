<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-vue-next';
import type { ProjectImage } from '../../types';

const props = defineProps<{
  isOpen: boolean;
  images: ProjectImage[];
  currentIndex: number;
  projectTitle?: string;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'update:currentIndex', index: number): void;
}>();

const activeIndex = ref(props.currentIndex || 0);
const imgError = ref(false);

watch(() => props.currentIndex, (newVal) => {
  activeIndex.value = newVal;
  imgError.value = false;
});

watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
    imgError.value = false;
  } else {
    document.body.style.overflow = '';
  }
});

const next = () => {
  if (props.images.length === 0) return;
  imgError.value = false;
  activeIndex.value = (activeIndex.value + 1) % props.images.length;
  emit('update:currentIndex', activeIndex.value);
};

const prev = () => {
  if (props.images.length === 0) return;
  imgError.value = false;
  activeIndex.value = (activeIndex.value - 1 + props.images.length) % props.images.length;
  emit('update:currentIndex', activeIndex.value);
};

const handleKeydown = (e: KeyboardEvent) => {
  if (!props.isOpen) return;
  if (e.key === 'Escape') emit('close');
  if (e.key === 'ArrowRight') next();
  if (e.key === 'ArrowLeft') prev();
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
  document.body.style.overflow = '';
});
</script>

<template>
  <teleport to="body">
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="isOpen && images.length > 0" 
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
      >
        <!-- Top Controls -->
        <div class="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300 z-20">
          <div>
            <span v-if="projectTitle" class="text-white font-bold mr-2">{{ projectTitle }}</span>
            <span class="text-slate-400">({{ activeIndex + 1 }} / {{ images.length }})</span>
          </div>
          <button
            type="button"
            @click="emit('close')"
            class="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Cerrar visor de imágenes"
          >
            <X class="w-5 h-5" />
          </button>
        </div>

        <!-- Main Image / Placeholder Container -->
        <div class="relative max-w-5xl max-h-[82vh] w-full flex flex-col items-center justify-center">
          <img
            v-if="!imgError"
            :src="images[activeIndex].src"
            :alt="images[activeIndex].caption"
            class="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-white/10"
            @error="imgError = true"
          />

          <!-- Placeholder if missing -->
          <div 
            v-else 
            class="w-full max-w-2xl aspect-[16/10] rounded-2xl bg-brand-surface/90 border border-white/10 flex flex-col items-center justify-center p-8 text-center"
          >
            <div class="w-16 h-16 rounded-2xl bg-brand-surface border border-brand-accent/30 flex items-center justify-center text-brand-accent mb-4">
              <ImageIcon class="w-8 h-8" />
            </div>
            <h4 class="text-base font-bold text-white mb-1">
              {{ images[activeIndex].caption }}
            </h4>
            <p class="text-xs font-mono text-slate-400 mt-1 max-w-md">
              Ruta: {{ images[activeIndex].src }}
            </p>
            <span class="mt-4 inline-block text-[11px] font-mono px-3 py-1 rounded bg-white/5 border border-white/10 text-amber-300">
              Captura en preparación · Se visualizará en cuanto el archivo esté disponible
            </span>
          </div>

          <!-- Bottom Caption -->
          <div class="mt-4 text-center">
            <p class="text-sm font-mono text-slate-200">
              {{ images[activeIndex].caption }}
            </p>
          </div>
        </div>

        <!-- Left / Right Navigation Buttons (if multiple images) -->
        <button
          v-if="images.length > 1"
          type="button"
          @click="prev"
          class="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-xl bg-brand-surface/80 hover:bg-brand-accent text-white border border-white/10 transition-colors z-20"
          aria-label="Imagen anterior"
        >
          <ChevronLeft class="w-6 h-6" />
        </button>

        <button
          v-if="images.length > 1"
          type="button"
          @click="next"
          class="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-xl bg-brand-surface/80 hover:bg-brand-accent text-white border border-white/10 transition-colors z-20"
          aria-label="Imagen siguiente"
        >
          <ChevronRight class="w-6 h-6" />
        </button>
      </div>
    </transition>
  </teleport>
</template>
