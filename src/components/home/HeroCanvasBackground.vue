<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const canvasRef = ref<HTMLCanvasElement | null>(null);
let animationFrameId: number;

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let mouseX = width / 2;
  let mouseY = height / 2;
  let targetMouseX = mouseX;
  let targetMouseY = mouseY;

  const handleResize = () => {
    if (!canvas) return;
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };

  const handleMouseMove = (e: MouseEvent) => {
    targetMouseX = e.clientX;
    targetMouseY = e.clientY;
  };

  window.addEventListener('resize', handleResize);
  window.addEventListener('mousemove', handleMouseMove);

  // 3D Wave lines simulation
  const numLines = 24;
  const segments = 45;
  let tick = 0;

  const render = () => {
    tick += 0.008;
    mouseX += (targetMouseX - mouseX) * 0.04;
    mouseY += (targetMouseY - mouseY) * 0.04;

    ctx.clearRect(0, 0, width, height);

    // Deep tech subtle background fill
    ctx.fillStyle = '#070c17';
    ctx.fillRect(0, 0, width, height);

    // Dynamic wave mesh
    for (let i = 0; i < numLines; i++) {
      const lineProgress = i / numLines;
      const baseY = height * 0.25 + lineProgress * (height * 0.65);
      const zDepth = 0.4 + lineProgress * 0.6; // depth factor

      ctx.beginPath();
      
      // Electric Blue & Cyan gradients based on depth
      const alpha = 0.08 + Math.sin(lineProgress * Math.PI) * 0.18;
      const r = Math.round(0 * (1 - lineProgress) + 56 * lineProgress);
      const g = Math.round(110 * (1 - lineProgress) + 189 * lineProgress);
      const b = 254;

      ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
      ctx.lineWidth = 1 + lineProgress * 1.5;

      for (let j = 0; j <= segments; j++) {
        const xProgress = j / segments;
        const x = xProgress * width;

        // Wave formula combining sine, time and subtle mouse repulsion
        const wave1 = Math.sin(xProgress * 4.5 + tick * 2 + i * 0.3) * (35 * zDepth);
        const wave2 = Math.cos(xProgress * 2.8 - tick * 1.5 + i * 0.2) * (25 * zDepth);
        
        // Mouse interaction wave
        const dx = x - mouseX;
        const dy = baseY - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const mouseEffect = Math.max(0, 1 - dist / 380) * 40 * Math.sin(dist * 0.03 - tick * 4);

        const y = baseY + wave1 + wave2 + mouseEffect;

        if (j === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    }

    // Floating data particles
    ctx.fillStyle = 'rgba(0, 110, 254, 0.45)';
    for (let p = 0; p < 18; p++) {
      const px = ((Math.sin(tick * 0.8 + p * 1.7) + 1) / 2) * width;
      const py = ((Math.cos(tick * 0.6 + p * 2.1) + 1) / 2) * (height * 0.85);
      const size = 1 + ((Math.sin(tick * 2 + p) + 1) / 2) * 2;
      
      ctx.beginPath();
      ctx.arc(px, py, size, 0, Math.PI * 2);
      ctx.fill();
    }

    animationFrameId = requestAnimationFrame(render);
  };

  render();

  onUnmounted(() => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('mousemove', handleMouseMove);
  });
});
</script>

<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <canvas ref="canvasRef" class="w-full h-full block"></canvas>
    <!-- Overlay vignette and gradient blends matching Tekton's cinematic mood -->
    <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/80"></div>
    <div class="absolute inset-0 bg-radial-vignette opacity-70"></div>
  </div>
</template>

<style scoped>
.bg-radial-vignette {
  background: radial-gradient(circle at 50% 50%, transparent 40%, #070c17 95%);
}
</style>
