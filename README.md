# Suitech — Web Oficial

Sitio web oficial de **Suitech** ([suitechpe.com](https://suitechpe.com)).
*“Tecnología que crea soluciones y abre posibilidades.”*

Desarrollado con una estética tecnológica premium inspirada en los principios de diseño de ingeniería de alta precisión de **FirmTech** (Varsovia), adaptada 100% a la identidad, capacidades y proyectos reales de Suitech.

---

## 🚀 Tecnologías Utilizadas

- **Framework:** Vue 3 (Composition API con `<script setup lang="ts">`)
- **Herramienta de Construcción:** Vite
- **Lenguaje:** TypeScript (Strict Type Checking)
- **Estilos & Diseño:** Tailwind CSS con tokens de ingeniería personalizados
- **Iconografía:** Lucide Vue Next
- **Servidor Web de Producción:** Nginx en contenedor Alpine (Multi-stage Docker)
- **Plataforma de Despliegue:** Dokploy en VPS propio mediante integración continua con GitHub

---

## 📁 Estructura del Proyecto

```text
SUITECH/
├── public/                     # Assets estáticos y favicon SVG
│   ├── suitech-icon.svg        # Isotipo de la marca
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppHeader.vue   # Encabezado fijo con navegación y menú móvil
│   │   │   └── AppFooter.vue   # Pie de página institucional completo
│   │   ├── home/
│   │   │   ├── HeroSection.vue      # Hero con simulador interactivo de telemetría
│   │   │   ├── CapabilitiesBar.vue  # Franja marquesina de capacidades técnicas
│   │   │   ├── ServicesSection.vue  # 6 Soluciones con tarjetas y micro-luces
│   │   │   ├── WhySuitechSection.vue# 4 Principios de ingeniería honesta
│   │   │   ├── ProjectsSection.vue  # Portafolio de 4 proyectos reales con mockups
│   │   │   ├── ProcessSection.vue   # Metodología de 4 fases (Entender -> Validar)
│   │   │   ├── IndustriesSection.vue# Sectores de aplicación industrial
│   │   │   ├── LearningSection.vue  # Divulgación "Construyendo Suitech"
│   │   │   └── ContactSection.vue   # Formulario interactivo + WhatsApp + Email
│   │   └── ui/
│   │       └── ProjectModal.vue     # Modal con ficha técnica detallada por proyecto
│   ├── data/
│   │   └── suitechData.ts      # Datos centralizados y configurables de la marca
│   ├── types/
│   │   └── index.ts            # Interfaces TypeScript tipadas
│   ├── App.vue                 # Orquestador principal de la vista
│   ├── main.ts                 # Punto de entrada de la aplicación
│   └── style.css               # Estilos globales, gradientes y utilidades
├── Dockerfile                  # Multi-stage build optimizado para Dokploy
├── nginx.conf                  # Configuración Nginx con gzip, headers de seguridad y SPA routing
├── tailwind.config.js          # Paleta técnica personalizada (Deep Slate + Ciber Teal + Cyan)
├── vite.config.ts              # Configuración de compilación Vite
└── package.json
```

---

## 🛠️ Ejecución Local

### Prerrequisitos
- Node.js (v18 o superior)
- npm o pnpm

### Pasos
1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abrirá la aplicación en `http://localhost:5173`.

3. **Verificar tipos y compilar para producción:**
   ```bash
   npm run build
   ```

4. **Previsualizar la compilación de producción localmente:**
   ```bash
   npm run preview
   ```

---

## 🚢 Despliegue con GitHub y Dokploy

El proyecto está listo para desplegarse automáticamente en tu VPS administrado con **Dokploy**.

### Método Recomendado: Despliegue mediante Dockerfile en Dokploy

1. **Crear el repositorio en GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: lanzamiento de web oficial de Suitech"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/suitech-web.git
   git push -u origin main
   ```

2. **Configurar la Aplicación en Dokploy:**
   - Ingresa al panel web de tu **Dokploy** en tu VPS.
   - Crea un nuevo **Project** (o selecciona el existente) y añade una **Application**.
   - En **Source**, selecciona **GitHub**:
     - Conecta tu cuenta/organización de GitHub.
     - Selecciona el repositorio `suitech-web` y la rama `main`.
   - En **Build Type**, selecciona **Dockerfile**:
     - Dokploy detectará automáticamente el archivo `Dockerfile` en la raíz.
     - El Dockerfile ejecutará el build de Vite e insertará los archivos estáticos dentro del contenedor Nginx Alpine.
   - En **Domains**:
     - Agrega tu dominio: `suitechpe.com` y `www.suitechpe.com`.
     - Activa **Certificate (Let's Encrypt / HTTPS)** con un clic.
     - Asigna el puerto de contenedor: `80`.
   - Activa **Auto Deploy**: Cada vez que hagas `git push` a la rama `main`, Dokploy compilará y desplegará la nueva versión automáticamente sin tiempo de caída (*zero-downtime*).

3. **Desplegar:**
   - Haz clic en **Deploy**. En menos de 60 segundos tu sitio estará en línea bajo HTTPS seguro.

---

## ⚙️ Configuración de Contacto y Redes

Todos los enlaces a redes sociales, correos y números de atención están centralizados en:
👉 `src/data/suitechData.ts`

Puedes modificar:
- `contactEmail`: Correo oficial (`contacto@suitechpe.com`).
- `whatsappUrl`: Enlace directo de WhatsApp con tu número real de Perú (`51...`).
- `youtubeUrl`: Canal de YouTube de Suitech.
- `linkedinUrl`: Página de LinkedIn institucional.
- `githubUrl`: Repositorio público de la organización.
