<script setup lang="ts">
import { LEARNING_POSTS, BRAND_INFO } from '../../data/suitechData';
import { 
  GraduationCap, 
  Youtube, 
  Clock, 
  ArrowUpRight, 
  BookOpen
} from 'lucide-vue-next';
</script>

<template>
  <section id="aprendizaje" class="py-24 relative bg-brand-surface/20 border-t border-white/10 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header with YouTube Channel Callout -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 pb-8 border-b border-white/10">
        <div class="max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-accent/30 text-xs font-mono text-brand-accent mb-4">
            <GraduationCap class="w-3.5 h-3.5" />
            <span>DIVULGACIÓN & INGENIERÍA ABIERTA</span>
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Construyendo <span class="text-gradient-accent">Suitech</span>.
          </h2>
          <p class="mt-4 text-base sm:text-lg text-slate-300 font-normal">
            Aprender construyendo y documentar con honestidad: tutoriales técnicos, guías de arquitectura, proyectos IoT y desarrollo de software paso a paso.
          </p>
        </div>

        <!-- YouTube & Social Channel Pill -->
        <div class="flex flex-wrap items-center gap-3">
          <a
            :href="BRAND_INFO.youtubeUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-red-600/10 hover:bg-red-600/20 text-red-400 border border-red-500/20 text-xs font-mono font-semibold tracking-wide transition-all"
          >
            <Youtube class="w-4 h-4 text-red-500" />
            <span>Canal de YouTube Suitech</span>
            <ArrowUpRight class="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <!-- Articles Grid (4 Tutorials) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <article
          v-for="post in LEARNING_POSTS"
          :key="post.id"
          class="rounded-2xl glass-panel p-6 sm:p-8 flex flex-col justify-between border border-white/10 hover:border-brand-accent/40 transition-all duration-300 hover:shadow-glow-accent/10 group"
        >
          <div>
            <!-- Meta row -->
            <div class="flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
              <span class="text-brand-accent-cyan font-semibold">
                {{ post.category }}
              </span>
              <span class="flex items-center gap-1.5 text-slate-400">
                <Clock class="w-3.5 h-3.5" />
                {{ post.readTime }}
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-accent transition-colors leading-snug">
              {{ post.title }}
            </h3>

            <!-- Summary -->
            <p class="mt-4 text-sm text-slate-300 leading-relaxed font-normal">
              {{ post.summary }}
            </p>

            <!-- Tags -->
            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-[11px] font-mono text-slate-300"
              >
                #{{ tag }}
              </span>
            </div>
          </div>

          <!-- Bottom link -->
          <div class="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
            <span class="text-xs font-mono text-slate-400">
              Serie: {{ post.targetPlatform }}
            </span>
            <a
              :href="BRAND_INFO.youtubeUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-accent hover:text-white transition-colors"
            >
              <span>Ver contenido</span>
              <ArrowUpRight class="w-4 h-4" />
            </a>
          </div>

        </article>

      </div>

      <!-- Content Frequency & Philosophy Box -->
      <div class="mt-12 p-6 rounded-2xl bg-brand-surface/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <BookOpen class="w-6 h-6 text-brand-accent shrink-0" />
          <div class="text-xs sm:text-sm text-slate-300">
            <strong>Publicación periódica y honesta:</strong> Publicamos tutoriales detallados y código abierto de proyectos funcionales para transferir conocimiento genuino a la comunidad técnica.
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
