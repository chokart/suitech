<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const canvasRef = ref<HTMLCanvasElement | null>(null);
let animId: number;
let cleanupResize: (() => void) | null = null;

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  let w: number = window.innerWidth;
  let h: number = window.innerHeight;

  const setSize = () => {
    if (!canvas) return;
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  setSize();

  const handleResize = () => { setSize(); initClouds(); };
  window.addEventListener('resize', handleResize);
  cleanupResize = () => window.removeEventListener('resize', handleResize);

  // ----- Particle system -----
  interface Particle {
    x: number; y: number; z: number;
    vx: number; vy: number;
    size: number; opacity: number; color: string;
    phaseOffset: number;
  }

  const particles: Particle[] = [];
  const pCount = prefersReducedMotion ? 0 : Math.min(Math.floor((w * h) / 9000), 180);

  const colors = [
    '0,110,254',    // brand blue
    '56,189,248',    // cyan
    '80,140,255',    // periwinkle
    '180,200,240',   // soft white-blue
    '20,70,200',     // deep blue
  ];

  for (let i = 0; i < pCount; i++) {
    particles.push({
      x: Math.random() * w, y: Math.random() * h,
      z: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.15,
      size: Math.random() * 1.8 + 0.4,
      opacity: Math.random() * 0.45 + 0.08,
      color: colors[Math.floor(Math.random() * colors.length)],
      phaseOffset: Math.random() * Math.PI * 2,
    });
  }

  // ----- Nebula clouds -----
  interface Cloud {
    x: number; y: number; radius: number;
    color: string; opacity: number;
    phase: number; speed: number;
    drift: number;
  }

  const clouds: Cloud[] = [];
  const cloudDefs = [
    { color: '0,110,254',  op: 0.045, r: 350 },
    { color: '56,189,248', op: 0.025, r: 280 },
    { color: '0,50,160',   op: 0.05,  r: 400 },
    { color: '15,35,100',  op: 0.06,  r: 320 },
    { color: '0,90,220',   op: 0.03,  r: 260 },
    { color: '56,189,248', op: 0.02,  r: 300 },
    { color: '0,110,254',  op: 0.035, r: 380 },
    { color: '10,25,80',   op: 0.04,  r: 450 },
  ];

  function initClouds() {
    clouds.length = 0;
    for (const d of cloudDefs) {
      clouds.push({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: d.r + Math.random() * 80,
        color: d.color,
        opacity: d.op,
        phase: Math.random() * Math.PI * 2,
        speed: 0.001 + Math.random() * 0.003,
        drift: 30 + Math.random() * 40,
      });
    }
  }
  initClouds();

  // ----- Aurora streaks -----
  interface Aurora {
    y: number; amplitude: number; wavelength: number;
    speed: number; phase: number;
    color: string; opacity: number; width: number;
  }

  const auroras: Aurora[] = prefersReducedMotion ? [] : [
    { y: h * 0.3, amplitude: 30, wavelength: 0.003, speed: 0.004, phase: 0,      color: '0,110,254',  opacity: 0.025, width: 120 },
    { y: h * 0.55, amplitude: 25, wavelength: 0.004, speed: 0.003, phase: 1.5,   color: '56,189,248', opacity: 0.018, width: 90 },
    { y: h * 0.75, amplitude: 35, wavelength: 0.002, speed: 0.005, phase: 3.0,   color: '0,80,200',   opacity: 0.02,  width: 100 },
  ];

  let tick = 0;
  const connDist = 85;

  // ----- Render loop -----
  const render = () => {
    tick += 0.005;

    // Base
    ctx.fillStyle = '#040810';
    ctx.fillRect(0, 0, w, h);

    // Nebula clouds
    for (const c of clouds) {
      c.phase += c.speed;
      const cx = c.x + Math.sin(c.phase) * c.drift;
      const cy = c.y + Math.cos(c.phase * 0.7) * (c.drift * 0.7);
      const op = c.opacity + Math.sin(tick * 1.2 + c.phase) * 0.006;
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, c.radius);
      g.addColorStop(0, `rgba(${c.color},${Math.max(0.001, op)})`);
      g.addColorStop(0.4, `rgba(${c.color},${Math.max(0.001, op * 0.35)})`);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(cx - c.radius, cy - c.radius, c.radius * 2, c.radius * 2);
    }

    // Aurora streaks
    for (const a of auroras) {
      a.phase += a.speed;
      ctx.beginPath();
      for (let x = 0; x <= w; x += 4) {
        const y = a.y + Math.sin(x * a.wavelength + a.phase) * a.amplitude
                      + Math.sin(x * a.wavelength * 2.3 + a.phase * 1.4) * (a.amplitude * 0.3);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'transparent';
      ctx.stroke();

      // Draw as soft band
      const bandGrad = ctx.createLinearGradient(0, a.y - a.width, 0, a.y + a.width);
      bandGrad.addColorStop(0, 'rgba(0,0,0,0)');
      bandGrad.addColorStop(0.4, `rgba(${a.color},${a.opacity * (0.8 + Math.sin(tick + a.phase) * 0.2)})`);
      bandGrad.addColorStop(0.6, `rgba(${a.color},${a.opacity * (0.8 + Math.sin(tick + a.phase) * 0.2)})`);
      bandGrad.addColorStop(1, 'rgba(0,0,0,0)');

      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      for (let x = 0; x < w; x += 3) {
        const y = a.y + Math.sin(x * a.wavelength + a.phase) * a.amplitude
                      + Math.sin(x * a.wavelength * 2.3 + a.phase * 1.4) * (a.amplitude * 0.3);
        ctx.fillStyle = bandGrad;
        ctx.fillRect(x, y - a.width / 2, 4, a.width);
      }
      ctx.restore();
    }

    // Particle connections
    ctx.lineWidth = 0.35;
    for (let i = 0; i < particles.length; i++) {
      const pi = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const pj = particles[j];
        const dx = pi.x - pj.x;
        if (dx > connDist || dx < -connDist) continue;
        const dy = pi.y - pj.y;
        if (dy > connDist || dy < -connDist) continue;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < connDist) {
          ctx.beginPath();
          ctx.moveTo(pi.x, pi.y);
          ctx.lineTo(pj.x, pj.y);
          ctx.strokeStyle = `rgba(0,110,254,${0.05 * (1 - dist / connDist)})`;
          ctx.stroke();
        }
      }
    }

    // Particles
    for (const p of particles) {
      p.x += p.vx * p.z;
      p.y += p.vy * p.z;
      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;
      if (p.y < -10) p.y = h + 10;
      if (p.y > h + 10) p.y = -10;

      const flicker = 0.65 + Math.sin(tick * 1.8 + p.phaseOffset) * 0.35;
      const fOp = p.opacity * flicker;

      // Soft glow
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * p.z * 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${fOp * 0.1})`;
      ctx.fill();

      // Core
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * p.z * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${fOp})`;
      ctx.fill();
    }

    animId = requestAnimationFrame(render);
  };

  if (!prefersReducedMotion) {
    render();
  } else {
    ctx.fillStyle = '#040810';
    ctx.fillRect(0, 0, w, h);
    for (const c of clouds) {
      const g = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.radius);
      g.addColorStop(0, `rgba(${c.color},${c.opacity})`);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(c.x - c.radius, c.y - c.radius, c.radius * 2, c.radius * 2);
    }
  }

  onUnmounted(() => {
    cancelAnimationFrame(animId);
    if (cleanupResize) cleanupResize();
  });
});
</script>

<template>
  <div class="absolute inset-0 overflow-hidden z-0">
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full block"></canvas>
    <!-- Tekton-style overlays -->
    <div class="absolute inset-0 bg-black/35 mix-blend-multiply"></div>
    <div class="absolute inset-0 bg-brand-accent/[0.04] mix-blend-soft-light"></div>
    <!-- Film grain texture -->
    <div class="absolute inset-0 tekton-grain opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
    <!-- Vignette -->
    <div
      class="absolute inset-0 pointer-events-none"
      style="box-shadow: inset 0 0 200px 60px rgba(4,8,16,0.6);"
    ></div>
    <!-- Bottom gradient fade into next section -->
    <div class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
  </div>
</template>

<style scoped>
.tekton-grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 200px 200px;
}
</style>
