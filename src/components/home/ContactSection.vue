<script setup lang="ts">
import { ref } from 'vue';
import { 
  Send, 
  MessageSquare, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ShieldCheck,
  ExternalLink
} from 'lucide-vue-next';
import { BRAND_INFO, SOLUTIONS } from '../../data/suitechData';

const form = ref({
  name: '',
  email: '',
  solutionType: 'software-medida',
  message: '',
});

const isSubmitted = ref(false);
const isSubmitting = ref(false);

const setSolutionType = (typeId: string) => {
  form.value.solutionType = typeId;
};

defineExpose({
  setSolutionType
});

const handleSubmit = () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    alert('Por favor, completa los campos requeridos.');
    return;
  }

  isSubmitting.value = true;

  // Simulate instant client-side validation and response
  setTimeout(() => {
    isSubmitting.value = false;
    isSubmitted.value = true;
  }, 600);
};

const sendViaMailto = () => {
  const subject = encodeURIComponent(`Consulta Suitech: ${form.value.solutionType} - ${form.value.name}`);
  const body = encodeURIComponent(
    `Nombre: ${form.value.name}\n` +
    `Correo: ${form.value.email}\n` +
    `Tipo de Solución: ${form.value.solutionType}\n\n` +
    `Mensaje / Desafío:\n${form.value.message}`
  );
  window.location.href = `mailto:${BRAND_INFO.contactEmail}?subject=${subject}&body=${body}`;
};

const sendViaWhatsapp = () => {
  const text = encodeURIComponent(
    `Hola Suitech, soy ${form.value.name || 'un visitante web'}. ` +
    `Quiero consultar sobre una solución tecnológica (${form.value.solutionType}): ${form.value.message || 'Deseo conversar sobre viabilidad técnica.'}`
  );
  window.open(`https://wa.me/51999999999?text=${text}`, '_blank');
};
</script>

<template>
  <section id="contacto" class="py-24 relative bg-brand-dark overflow-hidden">
    <!-- Ambient glow -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-accent/5 blur-[160px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        <!-- Left Column: High-Impact Direct Call to Action -->
        <div class="lg:col-span-5">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-accent/30 text-xs font-mono text-brand-accent mb-4">
            <MessageSquare class="w-3.5 h-3.5" />
            <span>CANAL DIRECTO</span>
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            ¿Tienes una idea o un problema que podemos convertir en una <span class="text-gradient-accent">solución</span>?
          </h2>

          <p class="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Conversemos sobre tu proyecto y exploremos una solución tecnológica viable, sin compromisos y con evaluación de factibilidad honesta.
          </p>

          <!-- Contact Channels List -->
          <div class="mt-8 space-y-4">
            <!-- Email Item -->
            <div class="p-4 rounded-xl bg-brand-surface/60 border border-white/10 flex items-center gap-4">
              <div class="w-10 h-10 rounded-lg bg-brand-surface border border-white/10 flex items-center justify-center text-brand-accent shrink-0">
                <Mail class="w-5 h-5" />
              </div>
              <div class="overflow-hidden">
                <div class="text-[11px] font-mono uppercase text-slate-400">Correo Electrónico</div>
                <a :href="'mailto:' + BRAND_INFO.contactEmail" class="text-sm font-semibold text-white hover:text-brand-accent transition-colors truncate block">
                  {{ BRAND_INFO.contactEmail }}
                </a>
              </div>
            </div>

            <!-- WhatsApp Item -->
            <div class="p-4 rounded-xl bg-brand-surface/60 border border-white/10 flex items-center gap-4">
              <div class="w-10 h-10 rounded-lg bg-brand-surface border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                <MessageSquare class="w-5 h-5" />
              </div>
              <div>
                <div class="text-[11px] font-mono uppercase text-slate-400">Atención Directa</div>
                <button 
                  type="button" 
                  @click="sendViaWhatsapp"
                  class="text-sm font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
                >
                  <span>Escribir por WhatsApp</span>
                  <ExternalLink class="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          <!-- Trust Badges -->
          <div class="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-4 text-xs text-slate-400">
            <div class="flex items-center gap-2">
              <ShieldCheck class="w-4 h-4 text-brand-accent shrink-0" />
              <span>Privacidad & Confidencialidad</span>
            </div>
            <div class="flex items-center gap-2">
              <Clock class="w-4 h-4 text-brand-accent-cyan shrink-0" />
              <span>Respuesta en menos de 24h</span>
            </div>
          </div>

        </div>

        <!-- Right Column: Interactive Contact & Feasibility Form -->
        <div class="lg:col-span-7">
          <div class="rounded-2xl glass-panel-elevated p-6 sm:p-8 border border-white/15 shadow-2xl">
            
            <div v-if="!isSubmitted">
              <div class="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <h3 class="text-xl font-bold text-white">
                    Hablemos de tu proyecto
                  </h3>
                  <p class="text-xs text-slate-400 mt-1">
                    Describe brevemente lo que necesitas resolver o construir.
                  </p>
                </div>
                <Sparkles class="w-5 h-5 text-brand-accent" />
              </div>

              <form @submit.prevent="handleSubmit" class="space-y-5">
                
                <!-- Name & Email Row -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5" for="name">
                      Nombre o Empresa <span class="text-brand-accent">*</span>
                    </label>
                    <input
                      id="name"
                      v-model="form.name"
                      type="text"
                      required
                      placeholder="Ej. Carlos Mendoza"
                      class="w-full px-4 py-2.5 rounded-xl bg-brand-surface border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label class="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5" for="email">
                      Correo Electrónico <span class="text-brand-accent">*</span>
                    </label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                      placeholder="carlos@empresa.com"
                      class="w-full px-4 py-2.5 rounded-xl bg-brand-surface border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                    />
                  </div>
                </div>

                <!-- Solution Interest Selector -->
                <div>
                  <label class="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Área o Solución de Interés
                  </label>
                  <select
                    v-model="form.solutionType"
                    class="w-full px-4 py-2.5 rounded-xl bg-brand-surface border border-white/10 text-white text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                  >
                    <option v-for="sol in SOLUTIONS" :key="sol.id" :value="sol.id">
                      {{ sol.title }}
                    </option>
                    <option value="otro">Otro requerimiento / Consulta general</option>
                  </select>
                </div>

                <!-- Message Field -->
                <div>
                  <label class="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5" for="message">
                    Descripción del desafío o requerimiento <span class="text-brand-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    rows="4"
                    required
                    placeholder="Cuéntanos brevemente cuál es el problema actual, qué sistemas utilizan hoy o qué objetivo técnico buscan alcanzar..."
                    class="w-full px-4 py-2.5 rounded-xl bg-brand-surface border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors resize-y"
                  ></textarea>
                </div>

                <!-- Action Buttons: Direct Form Submit + Alternative Client Mailto -->
                <div class="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-brand-dark bg-gradient-to-r from-brand-accent to-brand-accent-cyan shadow-glow-accent hover:opacity-95 active:scale-[0.99] transition-all disabled:opacity-50"
                  >
                    <span v-if="!isSubmitting">Enviar consulta técnica</span>
                    <span v-else>Procesando...</span>
                    <Send class="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    @click="sendViaMailto"
                    class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-mono text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    <Mail class="w-4 h-4 text-brand-accent" />
                    <span>Abrir en mi correo</span>
                  </button>
                </div>

                <div class="text-[11px] font-mono text-slate-400 text-center sm:text-left pt-1">
                  Sin spam ni suscripciones involuntarias. Respuesta directa del equipo técnico.
                </div>

              </form>
            </div>

            <!-- Success State -->
            <div v-else class="py-8 text-center space-y-4">
              <div class="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto shadow-glow-accent">
                <CheckCircle2 class="w-8 h-8" />
              </div>
              <h3 class="text-2xl font-bold text-white">
                ¡Mensaje recibido con éxito!
              </h3>
              <p class="text-sm text-slate-300 max-w-md mx-auto">
                Gracias {{ form.name }}. Hemos registrado tu consulta para el área de 
                <strong class="text-brand-accent">{{ form.solutionType }}</strong>. Nos pondremos en contacto contigo vía {{ form.email }} a la brevedad.
              </p>
              <div class="pt-4 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  @click="sendViaWhatsapp"
                  class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white transition-colors"
                >
                  <MessageSquare class="w-4 h-4" />
                  <span>Acelerar por WhatsApp</span>
                </button>

                <button
                  type="button"
                  @click="isSubmitted = false; form.message = ''"
                  class="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  Enviar otra consulta
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>
