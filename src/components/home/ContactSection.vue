<script setup lang="ts">
import { ref } from 'vue';
import { 
  Send, 
  MessageSquare, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle,
  ExternalLink
} from 'lucide-vue-next';
import { BRAND_INFO } from '../../data/suitechData';
import { trackInquirySuccess, trackWhatsAppClick } from '../../utils/analytics';
import { sendContactMessage } from '../../services/contactService';

const form = ref({
  name: '',
  email: '',
  solutionType: 'Desarrollo de software.',
  message: '',
  honeypot: '' // Campo invisible para atrapar bots de spam
});

const isSubmitted = ref(false);
const isSubmitting = ref(false);
const submitError = ref<string | null>(null);
const isUnconfiguredService = ref(false);

const setSolutionType = (typeId: string) => {
  const map: Record<string, string> = {
    'suitech-solutions': 'Desarrollo de software.',
    'software-medida': 'Desarrollo de software.',
    'Desarrollo de software.': 'Desarrollo de software.',
    'suitech-ai': 'Inteligencia artificial.',
    'ia': 'Inteligencia artificial.',
    'Inteligencia artificial.': 'Inteligencia artificial.',
    'suitech-iot': 'IoT y dispositivos.',
    'iot': 'IoT y dispositivos.',
    'IoT y dispositivos.': 'IoT y dispositivos.',
    'suitech-academy': 'Otro.',
    'academy': 'Otro.',
    'automatizacion': 'Automatización.',
    'suiteminerals': 'SuiteMinerals.',
    'otro': 'Otro.',
    'Otro.': 'Otro.'
  };
  form.value.solutionType = map[typeId] || typeId;
};

defineExpose({
  setSolutionType
});

const handleSubmit = async () => {
  submitError.value = null;
  isUnconfiguredService.value = false;

  if (!form.value.name.trim() || !form.value.email.trim() || !form.value.message.trim()) {
    submitError.value = 'Por favor, completa los campos requeridos marcados con (*).';
    return;
  }

  isSubmitting.value = true;

  try {
    const result = await sendContactMessage({
      name: form.value.name,
      email: form.value.email,
      service: form.value.solutionType,
      message: form.value.message,
      honeypot: form.value.honeypot
    });

    if (result.success) {
      isSubmitted.value = true;
      trackInquirySuccess({ serviceType: form.value.solutionType, channel: 'formulario_web' });
    } else {
      submitError.value = result.message;
      isUnconfiguredService.value = Boolean(result.unconfigured);
    }
  } catch (err: any) {
    submitError.value = 'Ocurrió un error inesperado al procesar la solicitud. Por favor escríbenos directamente a chokart@gmail.com.';
  } finally {
    isSubmitting.value = false;
  }
};

const sendViaMailto = () => {
  const subject = encodeURIComponent(`Consulta Suitech: ${form.value.solutionType} - ${form.value.name || 'Web'}`);
  const body = encodeURIComponent(
    `Nombre o empresa: ${form.value.name}\n` +
    `Correo electrónico: ${form.value.email}\n` +
    `Área de interés: ${form.value.solutionType}\n\n` +
    `Descripción del proyecto:\n${form.value.message}\n`
  );
  window.location.href = `mailto:${BRAND_INFO.contactEmail}?subject=${subject}&body=${body}`;
};

const sendViaWhatsapp = () => {
  if (!BRAND_INFO.whatsappUrl) return;
  trackWhatsAppClick(form.value.solutionType);

  const text = encodeURIComponent(
    `Hola Suitech Perú, mi nombre es ${form.value.name || 'un visitante'}. ` +
    `Deseo consultar sobre ${form.value.solutionType}: ${form.value.message || 'Conversemos sobre un proyecto.'}`
  );
  window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${text}`, '_blank');
};
</script>

<template>
  <section id="contacto" class="py-24 relative bg-brand-dark overflow-hidden">
    <!-- Ambient glow -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-accent/5 blur-[160px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        <!-- Left Column: Direct Call to Action -->
        <div class="lg:col-span-5">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-accent/30 text-xs font-mono text-brand-accent mb-4">
            <MessageSquare class="w-3.5 h-3.5" />
            <span>HABLEMOS</span>
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            ¿Tienes un proyecto en mente?
          </h2>

          <p class="mt-3 text-xl sm:text-2xl font-semibold text-gradient-accent">
            Conversemos y exploremos cómo hacerlo realidad.
          </p>

          <p class="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Cuéntanos qué necesitas desarrollar, qué problema quieres resolver o qué idea te gustaría explorar. Podemos comenzar con una conversación y conocer mejor tu propuesta.
          </p>

          <!-- Contact Channels List -->
          <div class="mt-8 space-y-4">
            <!-- Email Item (Always active official channel) -->
            <div class="p-4 rounded-xl bg-brand-surface/60 border border-white/10 flex items-center gap-4">
              <div class="w-10 h-10 rounded-lg bg-brand-surface border border-white/10 flex items-center justify-center text-brand-accent shrink-0">
                <Mail class="w-5 h-5" />
              </div>
              <div class="overflow-hidden">
                <div class="text-[11px] font-mono uppercase text-slate-400">CORREO ELECTRÓNICO</div>
                <a :href="'mailto:' + BRAND_INFO.contactEmail" class="text-sm font-semibold text-white hover:text-brand-accent transition-colors truncate block">
                  {{ BRAND_INFO.contactEmail }}
                </a>
              </div>
            </div>

            <!-- WhatsApp Item: Only rendered if a real verified phone number is configured -->
            <div v-if="BRAND_INFO.whatsappUrl" class="p-4 rounded-xl bg-brand-surface/60 border border-white/10 flex items-center gap-4">
              <div class="w-10 h-10 rounded-lg bg-brand-surface border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                <MessageSquare class="w-5 h-5" />
              </div>
              <div>
                <div class="text-[11px] font-mono uppercase text-slate-400">WHATSAPP</div>
                <button 
                  type="button" 
                  @click="sendViaWhatsapp"
                  class="text-sm font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
                >
                  <span>+51 961 795 940 · Escribir</span>
                  <ExternalLink class="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        <!-- Right Column: Interactive Contact Form -->
        <div class="lg:col-span-7">
          <div class="rounded-2xl glass-panel-elevated p-6 sm:p-8 border border-white/15 shadow-2xl">
            
            <div v-if="!isSubmitted">
              <div class="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <h3 class="text-xl sm:text-2xl font-bold text-white">
                    Cuéntanos sobre tu proyecto.
                  </h3>
                  <p class="text-xs sm:text-sm text-slate-400 mt-1">
                    Comparte algunos detalles para que podamos conocer tu necesidad.
                  </p>
                </div>
                <Sparkles class="w-5 h-5 text-brand-accent" />
              </div>

              <!-- Accessible Alert Banner for Errors or Service Configuration Notice -->
              <div 
                v-if="submitError" 
                role="alert" 
                aria-live="polite"
                class="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm flex items-start gap-3"
              >
                <AlertCircle class="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div class="space-y-2">
                  <p class="leading-relaxed">{{ submitError }}</p>
                  <button
                    type="button"
                    @click="sendViaMailto"
                    class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400/20 hover:bg-amber-400/30 text-amber-100 text-xs font-semibold transition-colors"
                  >
                    <Mail class="w-3.5 h-3.5" />
                    <span>Abrir mi correo.</span>
                  </button>
                </div>
              </div>

              <form @submit.prevent="handleSubmit" class="space-y-5" novalidate>
                
                <!-- Anti-Spam Honeypot Field (invisible to genuine users, traps automated bots) -->
                <div style="position: absolute; left: -9999px; width: 0; height: 0; overflow: hidden;" aria-hidden="true">
                  <label for="contact-fax">No completar este campo</label>
                  <input
                    id="contact-fax"
                    v-model="form.honeypot"
                    type="text"
                    tabindex="-1"
                    autocomplete="off"
                  />
                </div>

                <!-- Name & Email Row -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5" for="name">
                      Nombre o empresa <span class="text-brand-accent">*</span>
                    </label>
                    <input
                      id="name"
                      v-model="form.name"
                      type="text"
                      required
                      placeholder="Ej. Carlos Mendoza o Tu Empresa"
                      :disabled="isSubmitting"
                      class="w-full px-4 py-2.5 rounded-xl bg-brand-surface border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label class="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5" for="email">
                      Correo electrónico <span class="text-brand-accent">*</span>
                    </label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                      placeholder="carlos@ejemplo.com"
                      :disabled="isSubmitting"
                      class="w-full px-4 py-2.5 rounded-xl bg-brand-surface border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors disabled:opacity-50"
                    />
                  </div>
                </div>

                <!-- Solution Interest Selector -->
                <div>
                  <label class="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5" for="solutionType">
                    Área de interés
                  </label>
                  <select
                    id="solutionType"
                    v-model="form.solutionType"
                    :disabled="isSubmitting"
                    class="w-full px-4 py-2.5 rounded-xl bg-brand-surface border border-white/10 text-white text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors disabled:opacity-50"
                  >
                    <option value="Desarrollo de software.">Desarrollo de software.</option>
                    <option value="Inteligencia artificial.">Inteligencia artificial.</option>
                    <option value="IoT y dispositivos.">IoT y dispositivos.</option>
                    <option value="Automatización.">Automatización.</option>
                    <option value="SuiteMinerals.">SuiteMinerals.</option>
                    <option value="Otro.">Otro.</option>
                  </select>
                </div>

                <!-- Message Field -->
                <div>
                  <label class="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5" for="message">
                    Descripción del proyecto <span class="text-brand-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    rows="4"
                    required
                    :disabled="isSubmitting"
                    placeholder="Cuéntanos qué necesitas, qué problema buscas resolver o qué te gustaría desarrollar."
                    class="w-full px-4 py-2.5 rounded-xl bg-brand-surface border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors resize-y disabled:opacity-50"
                  ></textarea>
                </div>

                <!-- Action Buttons -->
                <div class="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-brand-dark bg-gradient-to-r from-brand-accent to-brand-accent-cyan shadow-glow-accent hover:opacity-95 active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                  >
                    <span v-if="!isSubmitting">Enviar mensaje.</span>
                    <span v-else>Enviando mensaje...</span>
                    <Send class="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    @click="sendViaMailto"
                    class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-mono text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    <Mail class="w-4 h-4 text-brand-accent" />
                    <span>Abrir mi correo.</span>
                  </button>
                </div>

                <div class="text-[11px] font-mono text-slate-400 text-center sm:text-left pt-2 leading-relaxed">
                  Utilizaremos tus datos únicamente para responder a tu consulta y comunicarnos contigo sobre tu proyecto. Consulta nuestra política de privacidad.
                </div>

              </form>
            </div>

            <!-- Verified Real Success State (only reachable if backend confirms receipt) -->
            <div v-else class="py-8 text-center space-y-4" role="status" aria-live="polite">
              <div class="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto shadow-glow-accent">
                <CheckCircle2 class="w-8 h-8" />
              </div>
              <h3 class="text-2xl font-bold text-white">
                ¡Mensaje enviado con éxito!
              </h3>
              <p class="text-sm text-slate-300 max-w-md mx-auto">
                Gracias {{ form.name }}. Hemos recibido tu mensaje sobre <strong class="text-brand-accent">{{ form.solutionType }}</strong>. Te responderemos directamente a {{ form.email }} a la brevedad para conversar sobre tu proyecto.
              </p>
              <div class="pt-4 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  @click="isSubmitted = false; form.message = ''"
                  class="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>