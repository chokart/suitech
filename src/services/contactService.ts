/**
 * Servicio de envío y validación de consultas de contacto para Suitech Perú
 * Integrado con Web3Forms (https://api.web3forms.com/submit) y endpoints personalizados.
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

// Clave de acceso pública de Web3Forms configurada para recepción de correos de Suitech
const DEFAULT_ACCESS_KEY = 'db31b2d9-0d85-411d-bd24-bf025e06ce74';

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

  // 3. Endpoint y Clave de Servicio
  const accessKey = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string) || DEFAULT_ACCESS_KEY;
  const endpoint = (import.meta.env.VITE_CONTACT_ENDPOINT as string) || 'https://api.web3forms.com/submit';

  // 4. Envío de petición HTTP POST al servicio receptor
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000); // 12s timeout

    const payload: Record<string, string> = {
      access_key: accessKey,
      name: trimmedName,
      email: trimmedEmail,
      service: data.service,
      message: trimmedMessage,
      subject: `Nueva consulta Suitech: ${data.service} - ${trimmedName}`,
      from_name: 'Suitech Perú Web'
    };

    if (data.company && data.company.trim()) {
      payload.company = data.company.trim();
    }

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
      const resJson = await response.json().catch(() => null);
      if (resJson && resJson.success === false) {
        return {
          success: false,
          error: 'service_rejected',
          message: resJson.message || 'El servicio no pudo procesar la consulta. Puedes escribirnos a chokart@gmail.com.'
        };
      }

      return {
        success: true,
        message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo a la brevedad.'
      };
    } else {
      await response.text().catch(() => '');
      return {
        success: false,
        error: `http_error_${response.status}`,
        message: `El servidor no pudo procesar tu mensaje (Código ${response.status}). Puedes escribirnos directamente a chokart@gmail.com.`
      };
    }
  } catch (err: any) {
    if (err.name === 'AbortError') {
      return {
        success: false,
        error: 'timeout',
        message: 'El servidor tardó en responder. Por favor reintenta o escríbenos directamente a chokart@gmail.com.'
      };
    }

    return {
      success: false,
      error: 'network_error',
      message: 'No hubo conexión con el servicio de mensajería. Por favor verifica tu red o escríbenos directamente a chokart@gmail.com.'
    };
  }
}
