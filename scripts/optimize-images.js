import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function run() {
  const publicDir = path.resolve('public');
  
  // 1. Convert laboratorio.png to WebP
  const labPng = path.join(publicDir, 'laboratorio.png');
  const labWebp = path.join(publicDir, 'laboratorio.webp');
  if (fs.existsSync(labPng)) {
    console.log('Converting laboratorio.png to WebP...');
    await sharp(labPng)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(labWebp);
    
    const origSize = fs.statSync(labPng).size;
    const newSize = fs.statSync(labWebp).size;
    console.log(`laboratorio: ${Math.round(origSize / 1024)} KB -> ${Math.round(newSize / 1024)} KB (${Math.round((1 - newSize / origSize) * 100)}% reduction)`);
  }

  // 2. Generate og-image.png (1200x630) for social sharing
  const ogPath = path.join(publicDir, 'og-image.png');
  const svgBanner = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#070C17"/>
        <stop offset="50%" stop-color="#0C1C34"/>
        <stop offset="100%" stop-color="#070C17"/>
      </linearGradient>
      <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#006EFE"/>
        <stop offset="50%" stop-color="#2584FF"/>
        <stop offset="100%" stop-color="#60A5FA"/>
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stop-color="#006EFE" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="#006EFE" stop-opacity="0"/>
      </radialGradient>
    </defs>
    
    <!-- Background -->
    <rect width="1200" height="630" fill="url(#bg)"/>
    <circle cx="600" cy="280" r="450" fill="url(#glow)"/>

    <!-- Subtle Tech Grid Lines -->
    <g stroke="#ffffff" stroke-opacity="0.05" stroke-width="1">
      <line x1="0" y1="120" x2="1200" y2="120" />
      <line x1="0" y1="240" x2="1200" y2="240" />
      <line x1="0" y1="360" x2="1200" y2="360" />
      <line x1="0" y1="480" x2="1200" y2="480" />
      <line x1="200" y1="0" x2="200" y2="630" />
      <line x1="400" y1="0" x2="400" y2="630" />
      <line x1="600" y1="0" x2="600" y2="630" />
      <line x1="800" y1="0" x2="800" y2="630" />
      <line x1="1000" y1="0" x2="1000" y2="630" />
    </g>

    <!-- Top Badge -->
    <rect x="460" y="70" width="280" height="36" rx="18" fill="#0C1C34" stroke="#006EFE" stroke-opacity="0.4" stroke-width="1.5"/>
    <text x="600" y="93" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" fill="#60A5FA" text-anchor="middle" letter-spacing="2">SUITECH PERÚ // INGENIERÍA</text>

    <!-- Brand Name -->
    <text x="600" y="220" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="76" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="-1">SUITECH</text>
    
    <!-- Tagline -->
    <text x="600" y="280" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="700" fill="url(#accent)" text-anchor="middle">Tecnología que crea soluciones y abre posibilidades</text>

    <!-- Subtitle description -->
    <text x="600" y="340" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="400" fill="#94A3B8" text-anchor="middle">Software a Medida · Inteligencia Artificial · IoT ESP32 · Formación Técnica</text>

    <!-- 4 Pills at the bottom -->
    <g transform="translate(180, 430)">
      <!-- Pill 1: Solutions -->
      <g transform="translate(0, 0)">
        <rect width="190" height="70" rx="14" fill="#0C1C34" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1"/>
        <text x="95" y="32" font-family="monospace" font-size="11" font-weight="700" fill="#006EFE" text-anchor="middle">// 01 SOLUTIONS</text>
        <text x="95" y="52" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="600" fill="#FFFFFF" text-anchor="middle">Desarrollo Web &amp; APIs</text>
      </g>
      <!-- Pill 2: AI -->
      <g transform="translate(210, 0)">
        <rect width="190" height="70" rx="14" fill="#0C1C34" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1"/>
        <text x="95" y="32" font-family="monospace" font-size="11" font-weight="700" fill="#006EFE" text-anchor="middle">// 02 AI</text>
        <text x="95" y="52" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="600" fill="#FFFFFF" text-anchor="middle">IA Aplicada &amp; Modelos</text>
      </g>
      <!-- Pill 3: IoT -->
      <g transform="translate(420, 0)">
        <rect width="190" height="70" rx="14" fill="#0C1C34" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1"/>
        <text x="95" y="32" font-family="monospace" font-size="11" font-weight="700" fill="#006EFE" text-anchor="middle">// 03 IOT</text>
        <text x="95" y="52" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="600" fill="#FFFFFF" text-anchor="middle">ESP32 &amp; Telemetría</text>
      </g>
      <!-- Pill 4: Academy -->
      <g transform="translate(630, 0)">
        <rect width="190" height="70" rx="14" fill="#0C1C34" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1"/>
        <text x="95" y="32" font-family="monospace" font-size="11" font-weight="700" fill="#006EFE" text-anchor="middle">// 04 ACADEMY</text>
        <text x="95" y="52" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="600" fill="#FFFFFF" text-anchor="middle">Formación &amp; Tutoriales</text>
      </g>
    </g>

    <!-- Footer URL -->
    <text x="600" y="565" font-family="monospace" font-size="14" font-weight="600" fill="#64748B" text-anchor="middle" letter-spacing="1">https://suitechpe.com</text>
  </svg>
  `;

  console.log('Generating og-image.png (1200x630)...');
  await sharp(Buffer.from(svgBanner))
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(ogPath);
  console.log(`og-image.png created: ${Math.round(fs.statSync(ogPath).size / 1024)} KB`);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
