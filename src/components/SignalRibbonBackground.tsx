import { useEffect, useRef } from 'react';

export function SignalRibbonBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Pointer tracking with spring inertia
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let scrollY = window.scrollY;

    const handlePointerMove = (e: PointerEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      if (mouseX === 0 && mouseY === 0) {
        mouseX = targetMouseX = width * 0.45;
        mouseY = targetMouseY = height * 0.45;
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    handleResize();

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Build the filament bundle (48 distinct curving fiber strands)
    const FILAMENT_COUNT = 44;
    const filaments = Array.from({ length: FILAMENT_COUNT }, (_, i) => {
      const t = i / (FILAMENT_COUNT - 1);
      return {
        id: i,
        color:
          t > 0.4 && t < 0.65
            ? '#EEFFAA' // White-hot core highlight
            : t < 0.5
            ? '#C7FF3D' // Electric acid lime
            : t < 0.8
            ? '#84CC16' // Vibrant green-lime
            : '#00F5D4', // Cyan-emerald trailing tail
        width: t > 0.35 && t < 0.65 ? 2.2 + Math.random() * 1.6 : 1.0 + Math.random() * 1.2,
        alpha: t > 0.35 && t < 0.65 ? 0.75 + Math.random() * 0.25 : 0.35 + Math.random() * 0.35,
        phase: Math.random() * Math.PI * 2,
        // Visible, silky wave speed (20x faster than previous static speed)
        speed: 0.014 + (i % 5) * 0.004,
        frequency: 0.8 + (i % 3) * 0.3,
        amplitude: 18 + (i % 4) * 8,
        spreadOffset: (t - 0.5) * 110,
        loopRadiusOffset: (t - 0.5) * 80,
        isStreamer: i % 3 === 0, // Streaming dashed line
      };
    });

    // 2. High-speed traveling energy packets (photons streaming along the path)
    const PACKET_COUNT = 24;
    const packets = Array.from({ length: PACKET_COUNT }, (_, i) => ({
      progress: (i / PACKET_COUNT),
      // Fast, silky streaming flow
      speed: 0.0035 + (i % 4) * 0.0015,
      size: 2.5 + (i % 3) * 1.5,
      filamentIndex: i % filaments.length,
      tailLength: 18 + (i % 3) * 10,
    }));

    // 3. Floating luminous bokeh particles around the vortex
    const PARTICLE_COUNT = 32;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      size: 1.2 + Math.random() * 2.4,
      alpha: 0.2 + Math.random() * 0.5,
      color: Math.random() > 0.4 ? '#C7FF3D' : '#00F5D4',
    }));

    let time = 0;

    // Helper: calculate cubic bezier point at t (0 to 1)
    const getBezierPoint = (t: number, p0: number, p1: number, p2: number, p3: number) => {
      const u = 1 - t;
      const tt = t * t;
      const uu = u * u;
      const uuu = uu * u;
      const ttt = tt * t;
      return uuu * p0 + 3 * uu * t * p1 + 3 * u * tt * p2 + ttt * p3;
    };

    const render = () => {
      // Damped pointer follow
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const normX = (mouseX / width - 0.5);
      const normY = (mouseY / height - 0.5);

      ctx.clearRect(0, 0, width, height);

      // The intense glowing pinch point sits at ~46% X and ~48% Y
      const coreX = width * 0.44 + normX * 60;
      const coreY = height * 0.48 + normY * 45 - scrollY * 0.35;

      // 1. Volumetric Radial Bloom Layers
      const breathe = Math.sin(time * 0.035) * 0.04;
      const radialCore = ctx.createRadialGradient(coreX, coreY, 5, coreX, coreY, Math.min(width, height) * 0.45);
      radialCore.addColorStop(0, `rgba(238, 255, 170, ${0.25 + breathe})`);
      radialCore.addColorStop(0.2, `rgba(199, 255, 61, ${0.18 + breathe * 0.5})`);
      radialCore.addColorStop(0.45, 'rgba(16, 185, 129, 0.09)');
      radialCore.addColorStop(0.75, 'rgba(6, 214, 160, 0.02)');
      radialCore.addColorStop(1, 'transparent');

      ctx.fillStyle = radialCore;
      ctx.fillRect(0, 0, width, height);

      // 2. Render Dense Luminous Filament Bundle
      ctx.save();
      ctx.globalCompositeOperation = 'screen';

      filaments.forEach((f) => {
        ctx.beginPath();
        ctx.strokeStyle = f.color;
        ctx.lineWidth = f.width;
        ctx.globalAlpha = f.alpha;

        const currentPhase = prefersReducedMotion ? f.phase : f.phase + time * f.speed;
        const wave = Math.sin(currentPhase * f.frequency) * f.amplitude;
        const waveX = Math.cos(currentPhase * f.frequency * 0.7) * (f.amplitude * 0.5);

        // Streaming effect for select strands
        if (f.isStreamer && !prefersReducedMotion) {
          ctx.setLineDash([14, 22]);
          ctx.lineDashOffset = -time * (2.5 + (f.id % 3) * 1.5);
        } else {
          ctx.setLineDash([]);
        }

        // Geometry:
        // Entrance from bottom-left
        const x0 = -width * 0.08 + waveX;
        const y0 = height * 0.72 + f.spreadOffset * 0.6 + wave - scrollY * 0.35;

        // Control Point 1
        const cx1 = width * 0.22 + waveX * 0.5;
        const y1 = height * 0.62 + f.spreadOffset * 0.4 - scrollY * 0.35;

        // Pinch vortex loop center with living harmonic undulation
        const pinchX = coreX + Math.sin(currentPhase * 0.9) * 14 + f.spreadOffset * 0.15;
        const pinchY = coreY + Math.cos(currentPhase * 0.9) * 12 + f.spreadOffset * 0.15;

        // Loop arc control points
        const loopTopX = pinchX - 85 - f.loopRadiusOffset * 0.3 + waveX;
        const loopTopY = pinchY - 60 - f.loopRadiusOffset * 0.4 + wave;

        const loopBottomX = pinchX - 70;
        const loopBottomY = pinchY + 65 + f.loopRadiusOffset * 0.4;

        // Exit sweeping upward towards top-right
        const cx2 = width * 0.75 + f.spreadOffset * 0.5 + waveX;
        const cy2 = height * 0.28 + wave * 0.5 - scrollY * 0.35;

        const xEnd = width * 1.12;
        const yEnd = height * 0.42 + f.spreadOffset * 0.8 - scrollY * 0.35;

        // Draw primary sweeping curve
        ctx.moveTo(x0, y0);
        ctx.bezierCurveTo(cx1, y1, loopTopX, loopTopY, pinchX, pinchY);
        ctx.bezierCurveTo(pinchX + 70, pinchY + 20, cx2, cy2, xEnd, yEnd);
        ctx.stroke();

        // Second under-loop pass
        ctx.beginPath();
        ctx.moveTo(x0 + 40, y0 + 30);
        ctx.bezierCurveTo(cx1 - 20, y1 + 50, loopBottomX, loopBottomY, pinchX, pinchY);
        ctx.stroke();
      });

      // Reset dashed lines
      ctx.setLineDash([]);

      // 3. Render Traveling Energy Packets (Live Data Flowing in Fiber)
      if (!prefersReducedMotion) {
        packets.forEach((p) => {
          p.progress += p.speed;
          if (p.progress > 1) {
            p.progress = 0;
          }

          const f = filaments[p.filamentIndex];
          const currentPhase = f.phase + time * f.speed;
          const wave = Math.sin(currentPhase * f.frequency) * f.amplitude;

          const x0 = -width * 0.08;
          const y0 = height * 0.72 + f.spreadOffset * 0.6 + wave - scrollY * 0.35;
          const cx1 = width * 0.22;
          const y1 = height * 0.62 + f.spreadOffset * 0.4 - scrollY * 0.35;
          const pinchX = coreX + f.spreadOffset * 0.15;
          const pinchY = coreY + f.spreadOffset * 0.15;
          const loopTopX = pinchX - 85;
          const loopTopY = pinchY - 60;
          const cx2 = width * 0.75;
          const cy2 = height * 0.28 - scrollY * 0.35;
          const xEnd = width * 1.12;
          const yEnd = height * 0.42 - scrollY * 0.35;

          let px = 0;
          let py = 0;

          // Split bezier path into two halves
          if (p.progress < 0.5) {
            const localT = p.progress / 0.5;
            px = getBezierPoint(localT, x0, cx1, loopTopX, pinchX);
            py = getBezierPoint(localT, y0, y1, loopTopY, pinchY);
          } else {
            const localT = (p.progress - 0.5) / 0.5;
            px = getBezierPoint(localT, pinchX, pinchX + 70, cx2, xEnd);
            py = getBezierPoint(localT, pinchY, pinchY + 20, cy2, yEnd);
          }

          // Draw radiant light pulse with head and tail
          ctx.beginPath();
          ctx.arc(px, py, p.size, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.globalAlpha = 0.95;
          ctx.fill();

          // Outer glowing aura
          ctx.beginPath();
          ctx.arc(px, py, p.size * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = f.color;
          ctx.globalAlpha = 0.4;
          ctx.fill();
        });
      }

      // 4. Ultra-Bright White-Hot Focal Ring (Pulsing dynamically)
      ctx.beginPath();
      const pulseRate = Math.sin(time * 0.04);
      const ringRx = 44 + pulseRate * 6;
      const ringRy = 68 + pulseRate * 7;

      ctx.ellipse(coreX - 25, coreY, ringRx, ringRy, -Math.PI / 5, 0, Math.PI * 2);
      ctx.strokeStyle = '#EEFFAA';
      ctx.lineWidth = 4 + pulseRate * 0.8;
      ctx.globalAlpha = 0.95;
      ctx.stroke();

      // Soft glow halos around the loop
      ctx.lineWidth = 16;
      ctx.strokeStyle = '#C7FF3D';
      ctx.globalAlpha = 0.45;
      ctx.stroke();

      ctx.lineWidth = 36;
      ctx.strokeStyle = '#10B981';
      ctx.globalAlpha = 0.2;
      ctx.stroke();

      // 5. Floating Ambient Bokeh Dust Motes
      particles.forEach((pt) => {
        if (!prefersReducedMotion) {
          pt.x += pt.vx / width;
          pt.y += pt.vy / height;
          if (pt.x < 0) pt.x = 1;
          if (pt.x > 1) pt.x = 0;
          if (pt.y < 0) pt.y = 1;
          if (pt.y > 1) pt.y = 0;
        }

        const px = pt.x * width + normX * 30;
        const py = pt.y * height + normY * 30 - scrollY * 0.2;

        ctx.beginPath();
        ctx.arc(px, py, pt.size, 0, Math.PI * 2);
        ctx.fillStyle = pt.color;
        ctx.globalAlpha = pt.alpha * (0.8 + Math.sin(time * 0.05 + pt.size) * 0.2);
        ctx.fill();
      });

      ctx.restore();

      if (!prefersReducedMotion) {
        time += 1;
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030604]">
      {/* Background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* Subtle fine technical grid with low opacity */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      {/* Subtle fine dot matrix across upper canvas */}
      <div className="absolute inset-0 bg-dot-pattern opacity-12 pointer-events-none" />

      {/* Soft vignette frame to keep typography readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 80% at 50% 40%, transparent 45%, rgba(3, 6, 4, 0.65) 75%, rgba(3, 6, 4, 0.95) 100%)',
        }}
      />

      {/* Subtle micro noise texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-30" />
    </div>
  );
}
