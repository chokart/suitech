/**
 * Módulo de Analítica y Privacidad para Suitech Perú (https://suitechpe.com)
 * Cumplimiento de privacidad:
 * - NO envía información de identificación personal (PII: nombres, correos, teléfonos o mensajes) a Google Analytics.
 * - NO almacena datos personales de visitantes en localStorage.
 * - Distingue claramente entre envíos de formulario confirmados y clics hacia canales externos.
 * - Se desactiva de forma segura si no se cuenta con un ID real de GA4.
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
let isInitialized = false;

/**
 * Inicializa Google Analytics 4 de manera asíncrona solo si existe un ID de medición válido
 */
export function initAnalytics(): void {
  if (typeof window === 'undefined') return;

  // Si no está configurado o tiene el marcador por defecto, se desactiva sin emitir errores
  if (!GA_ID || GA_ID === 'G-XXXXXXXXXX' || !/^G-[A-Z0-9]+$/.test(GA_ID)) {
    if (import.meta.env.DEV) {
      console.log('ℹ️ [Suitech Analytics] GA4 no configurado con ID válido. Medición en modo silencioso.');
    }
    return;
  }

  if (isInitialized) return;

  try {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer?.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', GA_ID, {
      send_page_view: false, // SPA: las páginas vistas se controlan con vue-router
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure'
    });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    isInitialized = true;
  } catch (err) {
    console.warn('No se pudo inicializar el servicio de analítica:', err);
  }
}

/**
 * Registra una vista de página en cada navegación de vue-router (sin parámetros con datos personales)
 */
export function trackPageView(pagePath: string, pageTitle?: string): void {
  if (typeof window === 'undefined') return;

  const title = pageTitle || document.title;
  // Sanitizar URL: eliminar cualquier query param que pudiera contener datos sensibles
  const sanitizedPath = pagePath.split('?')[0];

  if (window.gtag && isInitialized && GA_ID) {
    window.gtag('event', 'page_view', {
      page_path: sanitizedPath,
      page_title: title,
      page_location: window.location.origin + sanitizedPath
    });
  } else if (import.meta.env.DEV) {
    console.log(`📊 [Analytics PageView] -> ${sanitizedPath} (${title})`);
  }
}

/**
 * Registra la conversión ÚNICAMENTE cuando un formulario ha sido efectivamente confirmado por el servidor receptor.
 * IMPORTANTE: No recibe ni almacena nombres, correos ni datos personales.
 */
export function trackInquirySuccess(params: { serviceType: string; channel?: string }): void {
  if (window.gtag && isInitialized && GA_ID) {
    window.gtag('event', 'generate_lead', {
      event_category: 'Conversión',
      event_label: `Formulario Web - ${params.serviceType}`,
      service_type: params.serviceType,
      contact_channel: params.channel || 'formulario_web',
      value: 1
    });
  } else if (import.meta.env.DEV) {
    console.log('🎯 [Analytics Conversión Confirmada: generate_lead]', params);
  }
}

/**
 * Registra un clic de intención de contacto hacia WhatsApp (distinto de una consulta enviada por formulario)
 */
export function trackWhatsAppClick(serviceType?: string): void {
  if (window.gtag && isInitialized && GA_ID) {
    window.gtag('event', 'contact_whatsapp_click', {
      event_category: 'Contacto Externo',
      event_label: serviceType ? `WhatsApp - ${serviceType}` : 'WhatsApp General',
      service_type: serviceType || 'general'
    });
  } else if (import.meta.env.DEV) {
    console.log('💬 [Analytics Clic WhatsApp]', serviceType);
  }
}

/**
 * Registra interacción con proyectos del portafolio
 */
export function trackProjectInteraction(projectName: string, category: string, action: 'modal_open' | 'case_study_click'): void {
  if (window.gtag && isInitialized && GA_ID) {
    window.gtag('event', 'view_item', {
      event_category: 'Portafolio de Proyectos',
      event_label: `${projectName} (${action})`,
      item_name: projectName,
      item_category: category
    });
  } else if (import.meta.env.DEV) {
    console.log(`🔍 [Analytics Project] ${projectName} [${action}]`);
  }
}

/**
 * Registra clics salientes sin registrar datos personales
 */
export function trackOutboundClick(platform: string, url: string): void {
  if (window.gtag && isInitialized && GA_ID) {
    window.gtag('event', 'click', {
      event_category: 'Enlaces Externos',
      event_label: platform,
      outbound: true
    });
  } else if (import.meta.env.DEV) {
    console.log(`🔗 [Analytics Outbound] ${platform} -> ${url}`);
  }
}
