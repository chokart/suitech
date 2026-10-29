/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#070c17',            // Fondo Deep Tech Navy
          surface: '#0c162a',         // Superficie derivada de la paleta oficial
          'surface-card': '#101d36',    // Tarjetas elevadas
          'surface-elevated': '#16274a',// Paneles flotantes
          border: 'rgba(255, 255, 255, 0.08)',
          'border-highlight': 'rgba(0, 110, 254, 0.35)',
          accent: '#006EFE',          // Azul Eléctrico Oficial de SUITECH
          'accent-glow': '#2584FF',   // Azul Eléctrico brillante
          'accent-cyan': '#38BDF8',   // Sky / Cyan para telemetría
          'navy-deep': '#0B162C',     // Azul marino profundo oficial
          muted: '#8B9BB4',           // Gris metálico de "PERÚ"
          body: '#C8D5E5',
          heading: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-accent': '0 0 25px -4px rgba(0, 110, 254, 0.4)',
        'glow-cyan': '0 0 25px -4px rgba(56, 189, 248, 0.35)',
        'tech-card': '0 10px 30px -10px rgba(7, 12, 23, 0.8), 0 0 1px 1px rgba(255, 255, 255, 0.06)',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
        'linear-gradient-tech': "linear-gradient(135deg, #006EFE 0%, #38BDF8 100%)",
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
