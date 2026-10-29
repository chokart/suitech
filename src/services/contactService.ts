/**
 * Servicio de envío y validación de consultas de contacto para Suitech Perú
 * Se comunica con un endpoint/backend real o servicio receptor vía variable de entorno VITE_CONTACT_ENDPOINT.
 * Si no está configurado o falla, provee estados claros y mecanismos de fallback honestos.
 */

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  company?: string;
  message: string;
  honeypot?: string; // Campo trampa anti-spam invisible para usuarios
}

export interface ContactSubmissionResult {
  success: boolean;
  unconfigured?: boolean;
  error?: string;
  message: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(data: ContactFormData): Promise<ContactSubmissionResult> {
  // 1. Detección anti-spam: Si el campo trampa (honeypot) tiene contenido, se descarta silenciosamente
  if (data.honeypot && data.honeypot.trim() !== '') {
    return {
      success: false,
      error: 'spam_detected',
      message: 'No se pudo procesar la solicitud.'
    };
  }

  // 2. Validación estricta en el cliente antes de cualquier envío
  const trimmedName = (data.name || '').trim();
  const trimmedEmail = (data.email || '').trim();
  const trimmedMessage = (data.message || '').trim();

  if (!trimmedName) {
    return {
      success: false,
      error: 'validation_error',
      message: 'Por favor, ingresa tu nombre completo.'
    };
  }

  if (!trimmedEmail || !EMAIL_REGEX.test(trimmedEmail)) {
    return {
      success: false,
      error: 'validation_error',
      message: 'Por favor, ingresa un correo electrónico válido.'
    };
  }

  if (!trimmedMessage || trimmedMessage.length < 10) {
    return {
      success: false,
      error: 'validation_error',
      message: 'El mensaje debe tener al menos 10 caracteres para entender tu consulta.'
    };
  }

  // 3. Verificación de endpoint receptor configurado
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

  if (!endpoint || endpoint.trim() === '' || endpoint.includes('TU_ENDPOINT')) {
    // Si no hay endpoint configurado, no simulamos éxito: informamos con honestidad
    return {
      success: false,
      unconfigured: true,
      error: 'endpoint_unconfigured',
      message: 'El servicio automatizado de recepción se encuentra en proceso de configuración. Por favor, comunícate directamente al correo oficial: contacto@suitechpe.com.'
    };
  }

  // 4. Envío de petición HTTP POST al endpoint real
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

    const payload = {
      name: trimmedName,
      email: trimmedEmail,
      service: data.service,
      company: (data.company || '').trim() || undefined,
      message: trimmedMessage,
      submittedAt: new Date().toISOString()
    };

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      return {
        success: true,
        message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo a la brevedad.'
      };
    } else {
      await response.text().catch(() => '');
      return {
        success: false,
        error: `http_error_${response.status}`,
        message: `El servidor no pudo procesar tu mensaje (Código ${response.status}). Puedes escribirnos directamente a contacto@suitechpe.com.`
      };
    }
  } catch (err: any) {
    if (err.name === 'AbortError') {
      return {
        success: false,
        error: 'timeout',
        message: 'El servidor tardó demasiado en responder. Por favor reintenta o escríbenos a contacto@suitechpe.com.'
      };
    }

    return {
      success: false,
      error: 'network_error',
      message: 'No hubo conexión con el servicio de mensajería. Por favor verifica tu red o escríbenos directamente a contacto@suitechpe.com.'
    };
  }
}
