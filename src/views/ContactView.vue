<script setup lang="ts">
import { ref } from 'vue';
import { 
  Send, 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  ShieldCheck, 
  MapPin,
  Mail,
  AlertCircle
} from 'lucide-vue-next';
import { BRAND_INFO } from '../data/suitechData';
import { trackInquirySuccess, trackWhatsAppClick } from '../utils/analytics';
import { sendContactMessage } from '../services/contactService';

const selectedService = ref<string>('software');
const name = ref('');
const email = ref('');
const company = ref('');
const message = ref('');
const honeypot = ref(''); // Campo trampa anti-spam
const isSubmitting = ref(false);
const isSuccess = ref(false);
const submitError = ref<string | null>(null);

const servicesList = [
  { id: 'software', label: 'Suitech Solutions · Desarrollo de Software & Web' },
  { id: 'ia', label: 'Suitech AI · Inteligencia Artificial & Automatización' },
  { id: 'iot', label: 'Suitech IoT · Telemetría, ESP32 & Sensores' },
  { id: 'academy', label: 'Suitech Academy · Formación & Asesoría Técnica' },
  { id: 'suiteminerals', label: 'SuiteMinerals · Software Metalúrgico & Balances' },
  { id: 'otro', label: 'Otra consulta técnica' }
];

const handleSubmit = async () => {
  submitError.value = null;

  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    submitError.value = 'Por favor, completa los campos requeridos marcados con (*).';
    return;
  }

  isSubmitting.value = true;

  try {
    const result = await sendContactMessage({
      name: name.value,
      email: email.value,
      service: selectedService.value,
      company: company.value,
      message: message.value,
      honeypot: honeypot.value
    });

    if (result.success) {
      isSuccess.value = true;
      trackInquirySuccess({ serviceType: selectedService.value, channel: 'formulario_web' });
    } else {
      submitError.value = result.message;
    }
  } catch (err: any) {
    submitError.value = 'No fue posible conectar con el servicio receptor. Por favor, contáctanos directamente a chokart@gmail.com.';
  } finally {
    isSubmitting.value = false;
  }
};

const sendDirectEmail = () => {
  const subject = encodeURIComponent(`Consulta Suitech: ${selectedService.value} - ${name.value || 'Contacto Web'}`);
  const body = encodeURIComponent(
    `Nombre: ${name.value}\n` +
    `Empresa: ${company.value || 'Particular'}\n` +
    `Correo: ${email.value}\n` +
    `Línea de Interés: ${selectedService.value}\n\n` +
    `Mensaje / Requerimiento:\n${message.value}\n`
  );
  window.location.href = `mailto:${BRAND_INFO.contactEmail}?subject=${subject}&body=${body}`;
};

const sendViaWhatsApp = () => {
  if (!BRAND_INFO.whatsappUrl) return;
  trackWhatsAppClick(selectedService.value);

  const text = encodeURIComponent(
    `Hola Suitech Perú, mi nombre es ${name.value || 'un cliente'}${company.value ? ' de ' + company.value : ''}. Estoy interesado en ${selectedService.value}. Mensaje: ${message.value || 'Deseo coordinar una reunión técnica.'}`
  );
  window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${text}`, '_blank');
};
</script>

<template>
  <div class="min-h-screen pt-28 pb-20 bg-brand-dark text-slate-100">
    
    <!-- Hero Section de Contacto -->
    <section class="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div class="absolute -top-10 left-1/3 w-96 h-96 bg-brand-accent/15 rounded-full blur-[140px] pointer-events-none"></div>

      <!-- Breadcrumbs -->
      <nav aria-label="Breadcrumb" class="mb-8">
        <ol class="flex items-center gap-2 text-xs font-mono text-slate-400">
          <li>
            <router-link to="/" class="hover:text-brand-accent transition-colors">Inicio</router-link>
          </li>
          <li><ChevronRight class="w-3.5 h-3.5 text-slate-600" /></li>
          <li class="text-brand-accent font-semibold" aria-current="page">Contacto</li>
        </ol>
      </nav>

      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-accent/30 text-xs font-mono text-brand-accent mb-6 shadow-sm">
          <Sparkles class="w-3.5 h-3.5" />
          <span>CANAL DIRECTO DE COMUNICACIÓN</span>
        </div>

        <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
          Conversemos directamente sobre su <span class="text-gradient-accent">proyecto tecnológico</span>.
        </h1>

        <p class="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          Sin intermediarios comerciales sin criterio técnico. Responderemos con un análisis honesto de requerimientos, tiempos y viabilidad técnica.
        </p>
      </div>
    </section>

    <!-- Contenedor de Formulario e Info de Contacto -->
    <section class="mt-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        <!-- Formulario -->
        <div class="lg:col-span-7 p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 relative">
          
          <!-- Estado Exitoso Confirmado (Solo tras respuesta 2xx de backend) -->
          <div v-if="isSuccess" class="py-12 text-center" role="status" aria-live="polite">
            <div class="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-4">
              <CheckCircle2 class="w-8 h-8" />
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">¡Mensaje recibido con éxito!</h3>
            <p class="text-slate-300 text-sm max-w-md mx-auto mb-6">
              Gracias {{ name }}. Nuestro equipo técnico revisará su consulta y le responderá directamente a {{ email }} en menos de 24 horas hábiles.
            </p>
            <button
              type="button"
              @click="isSuccess = false; message = ''"
              class="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-colors"
            >
              Enviar otra consulta
            </button>
          </div>

          <div v-else>
            <!-- Banner de Error / Estado del Servicio -->
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
                  @click="sendDirectEmail"
                  class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400/20 hover:bg-amber-400/30 text-amber-100 text-xs font-semibold transition-colors"
                >
                  <Mail class="w-3.5 h-3.5" />
                  <span>Enviar consulta vía correo directo</span>
                </button>
              </div>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6" novalidate>
              
              <!-- Anti-Spam Honeypot -->
              <div style="position: absolute; left: -9999px; width: 0; height: 0; overflow: hidden;" aria-hidden="true">
                <label for="contact-fax-page">Campo de control</label>
                <input
                  id="contact-fax-page"
                  v-model="honeypot"
                  type="text"
                  tabindex="-1"
                  autocomplete="off"
                />
              </div>

              <!-- Nombre y Empresa -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label for="contact-name" class="block text-xs font-mono text-slate-300 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    id="contact-name"
                    v-model="name"
                    type="text"
                    required
                    :disabled="isSubmitting"
                    placeholder="Ej. Ing. Carlos Mendoza"
                    class="w-full px-4 py-3 rounded-xl bg-brand-surface border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition-colors text-sm disabled:opacity-50"
                  />
                </div>

                <div>
                  <label for="contact-company" class="block text-xs font-mono text-slate-300 mb-2">
                    Empresa o Proyecto
                  </label>
                  <input
                    id="contact-company"
                    v-model="company"
                    type="text"
                    :disabled="isSubmitting"
                    placeholder="Ej. Particular o Empresa SAC"
                    class="w-full px-4 py-3 rounded-xl bg-brand-surface border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition-colors text-sm disabled:opacity-50"
                  />
                </div>
              </div>

              <!-- Email y Servicio -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label for="contact-email" class="block text-xs font-mono text-slate-300 mb-2">
                    Correo electrónico de contacto *
                  </label>
                  <input
                    id="contact-email"
                    v-model="email"
                    type="email"
                    required
                    :disabled="isSubmitting"
                    placeholder="carlos@empresa.com"
                    class="w-full px-4 py-3 rounded-xl bg-brand-surface border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition-colors text-sm disabled:opacity-50"
                  />
                </div>

                <div>
                  <label for="contact-service" class="block text-xs font-mono text-slate-300 mb-2">
                    Línea de interés *
                  </label>
                  <select
                    id="contact-service"
                    v-model="selectedService"
                    :disabled="isSubmitting"
                    class="w-full px-4 py-3 rounded-xl bg-brand-surface border border-white/10 text-white focus:outline-none focus:border-brand-accent transition-colors text-sm disabled:opacity-50"
                  >
                    <option v-for="s in servicesList" :key="s.id" :value="s.id">
                      {{ s.label }}
                    </option>
                  </select>
                </div>
              </div>

              <!-- Mensaje -->
              <div>
                <label for="contact-message" class="block text-xs font-mono text-slate-300 mb-2">
                  Descripción de la necesidad o requerimiento *
                </label>
                <textarea
                  id="contact-message"
                  v-model="message"
                  rows="4"
                  required
                  :disabled="isSubmitting"
                  placeholder="Cuéntenos sobre el problema a resolver, sistemas actuales que usan o variables que desean monitorear..."
                  class="w-full px-4 py-3 rounded-xl bg-brand-surface border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition-colors text-sm resize-none disabled:opacity-50"
                ></textarea>
              </div>

              <!-- Botones -->
              <div class="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-accent to-brand-accent-glow hover:shadow-glow-accent hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-brand-accent/40 shadow-lg disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                >
                  <span>{{ isSubmitting ? 'Transmitiendo...' : 'Enviar requerimiento' }}</span>
                  <Send class="w-4 h-4" />
                </button>

                <button
                  v-if="BRAND_INFO.whatsappUrl"
                  type="button"
                  @click="sendViaWhatsApp"
                  class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors"
                >
                  <MessageSquare class="w-4 h-4" />
                  <span>Conversar por WhatsApp</span>
                </button>

                <button
                  type="button"
                  @click="sendDirectEmail"
                  class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <Mail class="w-4 h-4 text-brand-accent" />
                  <span>Redactar en mi cliente de correo</span>
                </button>
              </div>

            </form>
          </div>

        </div>

        <!-- Info Lateral -->
        <div class="lg:col-span-5 space-y-6">
          
          <div class="p-8 rounded-3xl glass-panel border border-white/10">
            <h2 class="text-xl font-bold text-white mb-6">
              Compromisos de atención técnica
            </h2>

            <div class="space-y-5">
              <div class="flex items-start gap-3.5">
                <div class="w-9 h-9 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-accent shrink-0 mt-0.5">
                  <Clock class="w-4 h-4" />
                </div>
                <div>
                  <h3 class="text-sm font-semibold text-white">Respuesta en menos de 24 horas</h3>
                  <p class="text-xs text-slate-300 mt-1">Revisión preliminar de arquitectura y propuesta técnica sin compromiso comercial.</p>
                </div>
              </div>

              <div class="flex items-start gap-3.5">
                <div class="w-9 h-9 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-accent shrink-0 mt-0.5">
                  <ShieldCheck class="w-4 h-4" />
                </div>
                <div>
                  <h3 class="text-sm font-semibold text-white">Confidencialidad técnica</h3>
                  <p class="text-xs text-slate-300 mt-1">Tratamiento estrictamente privado de especificaciones de hardware, bases de datos o diagramas de flujo.</p>
                </div>
              </div>

              <div class="flex items-start gap-3.5">
                <div class="w-9 h-9 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-accent shrink-0 mt-0.5">
                  <MapPin class="w-4 h-4" />
                </div>
                <div>
                  <h3 class="text-sm font-semibold text-white">Ubicación y Cobertura</h3>
                  <p class="text-xs text-slate-300 mt-1">Operamos de manera remota para todo el Perú, con despliegues sobre VPS y plataformas cloud.</p>
                </div>
              </div>
            </div>

            <div class="mt-8 pt-6 border-t border-white/10">
              <div class="text-xs font-mono text-slate-400">Canal de correo directo:</div>
              <a
                :href="`mailto:${BRAND_INFO.contactEmail}`"
                class="text-sm font-mono text-brand-accent hover:underline mt-1 block"
              >
                {{ BRAND_INFO.contactEmail }}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>

  </div>
</template>
