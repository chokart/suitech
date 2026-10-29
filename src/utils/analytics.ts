/**
 * Módulo de Analítica y Medición de Consultas para Suitech Perú
 * Soporta Google Analytics 4 (GA4), registro local de consultas y métricas de navegación SPA.
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export interface InquiryLogItem {
  id: string;
  timestamp: string;
  name: string;
  email: string;
  company?: string;
  service: string;
  channel: 'formulario_web' | 'whatsapp' | 'correo';
  status: 'registrado' | 'enviado';
}

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
let isInitialized = false;

/**
 * Inicializa Google Analytics 4 de manera asíncrona sin bloquear el hilo principal
 */
export function initAnalytics(): void {
  if (typeof window === 'undefined') return;

  if (!GA_ID || GA_ID === 'G-XXXXXXXXXX') {
    if (import.meta.env.DEV) {
      console.log('ℹ️ [Suitech Analytics] GA4 no configurado o en desarrollo. Los eventos se registrarán en consola.');
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
      send_page_view: false, // Controlado manualmente por vue-router para SPAs
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure'
    });

    // Inyectar script oficial de Google Tag
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    isInitialized = true;
    console.log(`✓ [Suitech Analytics] GA4 inicializado con ID: ${GA_ID}`);
  } catch (err) {
    console.error('Error al inicializar Google Analytics:', err);
  }
}

/**
 * Registra una vista de página en cada navegación de vue-router
 */
export function trackPageView(pagePath: string, pageTitle?: string): void {
  if (typeof window === 'undefined') return;

  const title = pageTitle || document.title;
  const location = window.location.origin + pagePath;

  if (window.gtag && GA_ID) {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: title,
      page_location: location
    });
  } else if (import.meta.env.DEV) {
    console.log(`📊 [Analytics PageView] -> ${pagePath} (${title})`);
  }
}

/**
 * Registra un evento de consulta o lead comercial (Evento estándar GA4: generate_lead)
 */
export function trackInquiry(data: {
  name: string;
  email: string;
  service: string;
  company?: string;
  channel: 'formulario_web' | 'whatsapp' | 'correo';
}): void {
  // 1. Envío a Google Analytics 4
  if (window.gtag && GA_ID) {
    window.gtag('event', 'generate_lead', {
      event_category: 'Consultas & Leads',
      event_label: `${data.channel} - ${data.service}`,
      service_type: data.service,
      contact_channel: data.channel,
      value: 1
    });
  } else if (import.meta.env.DEV) {
    console.log('🎯 [Analytics Conversion: generate_lead]', data);
  }

  // 2. Registro local persistente para auditoría de consultas
  saveLocalInquiry(data);
}

/**
 * Registra la interacción con un proyecto del portafolio (view_item)
 */
export function trackProjectInteraction(projectName: string, category: string, action: 'modal_open' | 'case_study_click'): void {
  if (window.gtag && GA_ID) {
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
 * Registra clics salientes a redes sociales (YouTube, LinkedIn, GitHub)
 */
export function trackOutboundClick(platform: string, url: string): void {
  if (window.gtag && GA_ID) {
    window.gtag('event', 'click', {
      event_category: 'Enlaces Externos',
      event_label: `${platform} - ${url}`,
      outbound: true
    });
  } else if (import.meta.env.DEV) {
    console.log(`🔗 [Analytics Outbound] ${platform} -> ${url}`);
  }
}

/**
 * Guarda las consultas en localStorage para garantizar trazabilidad ante desconexiones
 */
function saveLocalInquiry(data: {
  name: string;
  email: string;
  service: string;
  company?: string;
  channel: 'formulario_web' | 'whatsapp' | 'correo';
}): void {
  try {
    const key = 'suitech_consultas_log';
    const stored = localStorage.getItem(key);
    const inquiries: InquiryLogItem[] = stored ? JSON.parse(stored) : [];

    const newItem: InquiryLogItem = {
      id: 'lead_' + Date.now(),
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      company: data.company,
      service: data.service,
      channel: data.channel,
      status: 'registrado'
    };

    inquiries.unshift(newItem);
    // Conservar las últimas 50 consultas
    localStorage.setItem(key, JSON.stringify(inquiries.slice(0, 50)));
  } catch (e) {
    console.warn('No se pudo registrar la consulta en almacenamiento local:', e);
  }
}

/**
 * Recupera el registro histórico de consultas guardadas localmente
 */
export function getLocalInquiries(): InquiryLogItem[] {
  try {
    const stored = localStorage.getItem('suitech_consultas_log');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}
