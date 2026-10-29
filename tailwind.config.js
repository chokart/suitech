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
          dark: '#070a12',
          surface: '#0d1322',
          'surface-card': '#11192d',
          'surface-elevated': '#16223d',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-highlight': 'rgba(0, 229, 163, 0.3)',
          accent: '#00E5A3',       // Teal Ciber-Industrial
          'accent-cyan': '#00C2FF',  // Cyan de Precisión
          'accent-blue': '#2563EB',  // Azul Ingeniería
          muted: '#8B9BB4',
          body: '#C2D1E4',
          heading: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-accent': '0 0 25px -5px rgba(0, 229, 163, 0.3)',
        'glow-cyan': '0 0 25px -5px rgba(0, 194, 255, 0.3)',
        'tech-card': '0 10px 30px -10px rgba(2, 6, 23, 0.8), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
        'linear-gradient-tech': "linear-gradient(135deg, #00E5A3 0%, #00C2FF 100%)",
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
