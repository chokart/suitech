<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const canvasRef = ref<HTMLCanvasElement | null>(null);
let animId: number;

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);

  const handleResize = () => {
    if (!canvas) return;
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
  window.addEventListener('resize', handleResize);

  // PCB Circuit traces and pulse packets
  interface Trace {
    points: { x: number; y: number }[];
    speed: number;
    progress: number;
    color: string;
    width: number;
  }

  const traces: Trace[] = [];

  // Generate isometric PCB circuit traces focused on the right side (FirmTech composition)
  const buildTraces = () => {
    traces.length = 0;
    const originX = w * 0.72;
    const originY = h * 0.52;

    const angles = [0, 45, 90, 135, 180, 225, 270, 315];

    for (let i = 0; i < 45; i++) {
      const pts: { x: number; y: number }[] = [];
      let curX = originX + (Math.random() - 0.5) * 120;
      let curY = originY + (Math.random() - 0.5) * 80;
      pts.push({ x: curX, y: curY });

      const numSegments = 3 + Math.floor(Math.random() * 4);
      for (let s = 0; s < numSegments; s++) {
        const dist = 50 + Math.random() * 90;
        // 45-degree or 90-degree PCB trace angles
        const ang = angles[Math.floor(Math.random() * angles.length)] * (Math.PI / 180);
        curX += Math.cos(ang) * dist;
        curY += Math.sin(ang) * (dist * 0.55); // Isometric squash
        pts.push({ x: curX, y: curY });
      }

      traces.push({
        points: pts,
        speed: 0.004 + Math.random() * 0.008,
        progress: Math.random(),
        color: Math.random() > 0.4 ? '#006EFE' : '#38BDF8',
        width: Math.random() > 0.7 ? 2 : 1
      });
    }
  };

  buildTraces();

  // Floating hologram particles over the main chip
  const hologramParticles: { angle: number; radius: number; yOffset: number; speed: number; size: number }[] = [];
  for (let p = 0; p < 35; p++) {
    hologramParticles.push({
      angle: Math.random() * Math.PI * 2,
      radius: 30 + Math.random() * 110,
      yOffset: (Math.random() - 0.5) * 90,
      speed: 0.01 + Math.random() * 0.02,
      size: 1 + Math.random() * 2
    });
  }

  let tick = 0;

  const render = () => {
    tick += 0.01;
    ctx.clearRect(0, 0, w, h);

    const centerX = w * 0.72;
    const centerY = h * 0.52;

    // 1. Draw Static PCB Traces
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    for (const trace of traces) {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(0, 110, 254, 0.12)';
      ctx.lineWidth = trace.width;
      for (let i = 0; i < trace.points.length; i++) {
        const pt = trace.points[i];
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      }
      ctx.stroke();

      // Pad terminals at vertices
      for (const pt of trace.points) {
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.2)';
        ctx.fill();
      }

      // 2. Animated Signal Pulses traveling along traces
      trace.progress += trace.speed;
      if (trace.progress > 1) trace.progress = 0;

      // Find current position along polyline
      const totalSegs = trace.points.length - 1;
      const exactSeg = trace.progress * totalSegs;
      const segIndex = Math.min(Math.floor(exactSeg), totalSegs - 1);
      const segT = exactSeg - segIndex;

      const p1 = trace.points[segIndex];
      const p2 = trace.points[segIndex + 1];

      if (p1 && p2) {
        const pulseX = p1.x + (p2.x - p1.x) * segT;
        const pulseY = p1.y + (p2.y - p1.y) * segT;

        // Glowing pulse head
        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = trace.color;
        ctx.shadowColor = trace.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    }

    // 3. Central Core Processor (Isometric chip perspective)
    ctx.save();
    ctx.translate(centerX, centerY);

    // Outer Glow Ring
    ctx.beginPath();
    ctx.ellipse(0, 0, 150, 75, 0, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(0, 110, 254, 0.25)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Secondary Pulsing Ring
    const pulseRad = 150 + Math.sin(tick * 3) * 15;
    ctx.beginPath();
    ctx.ellipse(0, 0, pulseRad, pulseRad * 0.5, 0, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(56, 189, 248, ${0.1 + Math.sin(tick * 3) * 0.08})`;
    ctx.lineWidth = 1;
    ctx.stroke();

    // Central Chip Base (Isometric Diamond)
    ctx.beginPath();
    ctx.moveTo(0, -45);
    ctx.lineTo(85, 0);
    ctx.lineTo(0, 45);
    ctx.lineTo(-85, 0);
    ctx.closePath();
    ctx.fillStyle = 'rgba(11, 22, 44, 0.9)';
    ctx.fill();
    ctx.strokeStyle = '#006EFE';
    ctx.lineWidth = 2;
    ctx.shadowColor = '#006EFE';
    ctx.shadowBlur = 15;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Chip Pins
    const pinCount = 8;
    for (let i = -pinCount / 2; i <= pinCount / 2; i++) {
      // Right-bottom pins
      ctx.beginPath();
      ctx.moveTo(30 + i * 8, 15 + i * 4);
      ctx.lineTo(45 + i * 8, 22 + i * 4);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Left-bottom pins
      ctx.beginPath();
      ctx.moveTo(-30 + i * 8, 15 - i * 4);
      ctx.lineTo(-45 + i * 8, 22 - i * 4);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    // 4. Levitating Hologram Particles above the Core
    for (const hp of hologramParticles) {
      hp.angle += hp.speed;
      const hx = Math.cos(hp.angle) * hp.radius;
      const hy = Math.sin(hp.angle) * (hp.radius * 0.5) - 35 + hp.yOffset;

      ctx.beginPath();
      ctx.arc(hx, hy, hp.size, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.shadowColor = '#38BDF8';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    // Draw interconnecting holographic lines
    for (let a = 0; a < hologramParticles.length; a += 3) {
      for (let b = a + 1; b < hologramParticles.length; b += 4) {
        const pa = hologramParticles[a];
        const pb = hologramParticles[b];
        const ax = Math.cos(pa.angle) * pa.radius;
        const ay = Math.sin(pa.angle) * (pa.radius * 0.5) - 35 + pa.yOffset;
        const bx = Math.cos(pb.angle) * pb.radius;
        const by = Math.sin(pb.angle) * (pb.radius * 0.5) - 35 + pb.yOffset;

        const d = Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2);
        if (d < 65) {
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.35 * (1 - d / 65)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    ctx.restore();

    animId = requestAnimationFrame(render);
  };

  render();

  onUnmounted(() => {
    cancelAnimationFrame(animId);
    window.removeEventListener('resize', handleResize);
  });
});
</script>

<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <!-- Deep Surface Base (identical to FirmTech's firm-surface-900) -->
    <div class="absolute inset-0 bg-[#070c17]"></div>

    <!-- Active PCB Circuit Canvas -->
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full block"></canvas>

    <!-- Mobile Overlay: 85% opacity to maximize reading clarity on small screens (FirmTech rule) -->
    <div class="absolute inset-0 bg-[#070c17]/85 lg:hidden"></div>

    <!-- Desktop Smooth Gradient Fade from Left: 100% solid dark on left for text, opening to transparent on right for circuits (FirmTech rule) -->
    <div class="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#070c17] via-[#070c17]/80 via-45% to-transparent"></div>

    <!-- Top & Bottom smooth blending gradients -->
    <div class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#070c17] to-transparent"></div>
    <div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#070c17] to-transparent"></div>

    <!-- Inner Vignette Shadow (FirmTech rule: shadow-[inset_0_0_140px_rgba(0,0,0,0.85)]) -->
    <div class="absolute inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.88)]"></div>
  </div>
</template>
