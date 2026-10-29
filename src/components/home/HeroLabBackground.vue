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

  // Subtle floating telemetry sparks
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
  const nodeCount = prefersReducedMotion ? 0 : Math.min(Math.floor((w * h) / 18000), 35);

  const colors = [
    '0, 110, 254',   // Electric Blue Suitech Oficial
    '37, 132, 255',  // Azul Brillante
    '100, 165, 255', // Azul Claro
    '255, 255, 255', // Blanco
  ];

  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.16,
      vy: (Math.random() - 0.5) * 0.12,
      size: Math.random() * 1.5 + 0.6,
      opacity: Math.random() * 0.4 + 0.15,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  let tick = 0;
  const connDist = 85;

  const render = () => {
    tick += 0.007;
    ctx.clearRect(0, 0, w, h);

    // Connecting lines
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

    // Nodes
    for (const n of nodes) {
      n.x += n.vx;
      n.y += n.vy;

      if (n.x < -10) n.x = w + 10;
      if (n.x > w + 10) n.x = -10;
      if (n.y < -10) n.y = h + 10;
      if (n.y > h + 10) n.y = -10;

      const pulse = 0.7 + Math.sin(tick * 2 + n.x * 0.01) * 0.3;
      const op = n.opacity * pulse;

      ctx.beginPath();
      ctx.arc(n.x, n.y, n.size * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${n.color}, ${op * 0.15})`;
      ctx.fill();

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
    
    <!-- Base Layer: Laboratorio Suitech Image -->
    <div class="absolute inset-0 bg-[#070c17]">
      <picture>
        <source srcset="/laboratorio.webp" type="image/webp" />
        <img
          src="/laboratorio.png"
          alt="Laboratorio Tecnológico Suitech Perú"
          width="1536"
          height="1024"
          class="w-full h-full object-cover object-center lab-image-drift filter brightness-[0.82] contrast-[1.12] saturate-[1.05]"
          loading="eager"
          decoding="sync"
          fetchpriority="high"
        />
      </picture>
    </div>

    <!-- Soft Tech Navy Multiply Layer (unifies color palette) -->
    <div class="absolute inset-0 bg-[#070c17]/40 mix-blend-multiply"></div>

    <!-- Directional Scrim: Darkens the center whiteboard/chairs area, keeps left logo & right IoT bench vivid -->
    <div
      class="absolute inset-0"
      style="background: radial-gradient(ellipse 75% 65% at 50% 45%, rgba(7,12,23,0.82) 0%, rgba(7,12,23,0.55) 50%, rgba(7,12,23,0.25) 100%);"
    ></div>

    <!-- Ambient Blue/Cyan Hologram Hue -->
    <div class="absolute inset-0 bg-brand-accent/[0.04] mix-blend-color"></div>

    <!-- Transparent Telemetry Particle Canvas -->
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full block z-[2]"></canvas>

    <!-- Top Navigation Fade -->
    <div class="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#070c17]/95 via-[#070c17]/50 to-transparent z-[3]"></div>

    <!-- Bottom Transition Fade into Capabilities Bar -->
    <div class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#070c17] via-[#070c17]/85 to-transparent z-[3]"></div>
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
    transform: scale(1.04) translate(-0.5%, -0.3%);
  }
  100% {
    transform: scale(1.025) translate(0.4%, -0.2%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .lab-image-drift {
    animation: none;
    transform: none;
  }
}
</style>
