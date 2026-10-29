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

  let w = window.innerWidth;
  let h = window.innerHeight;

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

  const handleResize = () => setSize();
  window.addEventListener('resize', handleResize);
  cleanupResize = () => window.removeEventListener('resize', handleResize);

  // Subtle floating telemetry nodes over the lab
  interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    color: string;
  }

  const nodes: Node[] = [];
  const nodeCount = prefersReducedMotion ? 0 : Math.min(Math.floor((w * h) / 16000), 40);

  const colors = [
    '0, 110, 254',   // Electric Blue Suitech
    '56, 189, 248',  // Cyan Telemetría
    '255, 255, 255', // Blanco
  ];

  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.12,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.45 + 0.15,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  let tick = 0;
  const connDist = 90;

  const render = () => {
    tick += 0.007;
    ctx.clearRect(0, 0, w, h);

    // Subtle connection lines between telemetry nodes
    ctx.lineWidth = 0.35;
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dx = a.x - b.x;
        if (dx > connDist || dx < -connDist) continue;
        const dy = a.y - b.y;
        if (dy > connDist || dy < -connDist) continue;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < connDist) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(0, 110, 254, ${0.15 * (1 - dist / connDist)})`;
          ctx.stroke();
        }
      }
    }

    // Draw glowing nodes
    for (const n of nodes) {
      n.x += n.vx;
      n.y += n.vy;

      if (n.x < -10) n.x = w + 10;
      if (n.x > w + 10) n.x = -10;
      if (n.y < -10) n.y = h + 10;
      if (n.y > h + 10) n.y = -10;

      const pulse = 0.7 + Math.sin(tick * 2 + n.x * 0.01) * 0.3;
      const op = n.opacity * pulse;

      // Glow halo
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.size * 2.8, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${n.color}, ${op * 0.18})`;
      ctx.fill();

      // Dot core
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.size * 0.75, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${n.color}, ${op})`;
      ctx.fill();
    }

    animId = requestAnimationFrame(render);
  };

  if (!prefersReducedMotion) {
    render();
  }

  onUnmounted(() => {
    cancelAnimationFrame(animId);
    if (cleanupResize) cleanupResize();
  });
});
</script>

<template>
  <div class="absolute inset-0 overflow-hidden z-0 pointer-events-none select-none">
    
    <!-- Base Layer: Laboratorio Suitech Image (much clearer and brighter) -->
    <div class="absolute inset-0 bg-brand-dark">
      <img
        src="/laboratorio.png"
        alt="Laboratorio Tecnológico Suitech"
        class="w-full h-full object-cover object-center lab-image-drift filter brightness-[0.92] contrast-[1.08] saturate-[1.05]"
        loading="eager"
        decoding="sync"
      />
    </div>

    <!-- Soft Tech Navy tint (much lighter: 30% instead of 65%) -->
    <div class="absolute inset-0 bg-[#070c17]/30 mix-blend-multiply"></div>

    <!-- Subtle Cyan/Blue Accent Hue Tint -->
    <div class="absolute inset-0 bg-brand-accent/[0.05] mix-blend-color"></div>

    <!-- Balanced Vignette: keeps center legible while leaving all sides of the lab vivid -->
    <div
      class="absolute inset-0"
      style="background: radial-gradient(ellipse 95% 75% at 50% 45%, rgba(5,10,24,0.32) 0%, rgba(5,10,24,0.58) 55%, rgba(5,10,24,0.85) 100%);"
    ></div>

    <!-- Transparent Telemetry Particle Canvas -->
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full block z-[2]"></canvas>

    <!-- Top Navigation Fade (delicate) -->
    <div class="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#070c17]/90 via-[#070c17]/40 to-transparent z-[3]"></div>

    <!-- Bottom Transition Fade into Capabilities Bar -->
    <div class="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#070c17] via-[#070c17]/80 to-transparent z-[3]"></div>

    <!-- Ultra-subtle Film Grain -->
    <div class="absolute inset-0 lab-grain opacity-[0.025] mix-blend-overlay z-[4]"></div>
  </div>
</template>

<style scoped>
.lab-image-drift {
  animation: labDrift 28s ease-in-out infinite alternate;
  will-change: transform;
}

@keyframes labDrift {
  0% {
    transform: scale(1.02) translate(0%, 0%);
  }
  50% {
    transform: scale(1.04) translate(-0.6%, -0.4%);
  }
  100% {
    transform: scale(1.025) translate(0.5%, -0.2%);
  }
}

.lab-grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 180px 180px;
}

@media (prefers-reduced-motion: reduce) {
  .lab-image-drift {
    animation: none;
    transform: none;
  }
}
</style>
