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

    // Smooth spring-damped pointer & scroll state
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentScrollY = window.scrollY;
    let targetScrollY = window.scrollY;

    const handlePointerMove = (e: PointerEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
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
        mouseX = targetMouseX = width * 0.5;
        mouseY = targetMouseY = height * 0.45;
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    handleResize();

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 64 ultra-fine silk strands that twist in 3D cross-section around the parabolic spine
    const STRAND_COUNT = 64;
    const strands = Array.from({ length: STRAND_COUNT }, (_, i) => {
      const norm = i / (STRAND_COUNT - 1); // 0 to 1 across the ribbon width
      const centered = (norm - 0.5) * 2; // -1 to 1

      // Chromatic dispersion matching frame_002.png and frame_012.png:
      // Inner fold = blazing yellow-lime, middle = olive/emerald lime, outer wing = subtle cyan-teal
      let color = '#B8FF2C';
      if (norm < 0.25) {
        color = '#EEFF99'; // Blazing warm white-lime caustic edge
      } else if (norm < 0.65) {
        color = '#B6F52A'; // Signature Relay electric lime
      } else if (norm < 0.85) {
        color = '#4ADE80'; // Muted emerald
      } else {
        color = '#38BDF8'; // Subtle cyan-blue dispersion on outer threads
      }

      return {
        index: i,
        norm,
        centered,
        color,
        // Strands near the caustic core are slightly thicker; outer wings are gossamer thin
        lineWidth: norm < 0.3 ? 1.35 : 0.65 + (1 - Math.abs(centered)) * 0.5,
        // Low individual alpha so additive 'lighter' blending naturally creates the bright vertex where they cross
        baseAlpha: norm < 0.25 ? 0.14 : 0.06 + (1 - Math.abs(centered)) * 0.07,
        twistPhase: centered * Math.PI * 0.95,
        waveSpeed: 0.008 + (i % 7) * 0.0018,
        waveOffset: i * 0.23,
      };
    });

    // Subtle floating dust motes / bokeh sparks around the light field
    const SPARK_COUNT = 38;
    const sparks = Array.from({ length: SPARK_COUNT }, (_, i) => ({
      u: Math.random(),
      v: (Math.random() - 0.5) * 220,
      speed: 0.0006 + (i % 5) * 0.00035,
      size: 0.9 + (i % 3) * 0.75,
      alpha: 0.18 + Math.random() * 0.42,
      color: i % 4 === 0 ? '#38BDF8' : i % 2 === 0 ? '#EEFFAA' : '#C8FF2E',
      phase: Math.random() * Math.PI * 2,
    }));

    let time = 0;

    // Evaluate a 4-point cubic Bezier at parameter s in [0, 1]
    const evalCubic = (s: number, p0: number, p1: number, p2: number, p3: number) => {
      const inv = 1 - s;
      return (
        inv * inv * inv * p0 +
        3 * inv * inv * s * p1 +
        3 * inv * s * s * p2 +
        s * s * s * p3
      );
    };

    const render = () => {
      // Smooth spring damping for pointer and scroll
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;
      currentScrollY += (targetScrollY - currentScrollY) * 0.08;

      const ptrX = (mouseX / Math.max(width, 1) - 0.5) * 2; // -1 to 1
      const ptrY = (mouseY / Math.max(height, 1) - 0.5) * 2;

      ctx.clearRect(0, 0, width, height);

      // Parallax shift based on scroll so the ribbon glides through the page
      const scrollShift = currentScrollY * 0.22;
      // Periodic vertical wrap so the ribbon continues gracefully down the entire long page
      const pageCycle = (currentScrollY / Math.max(height, 800)) % 2;

      // =========================================================================
      // SPINE GEOMETRY (Matches frame_002.png & frame_012.png C-shaped parabolic arc)
      // Starts top-right -> sweeps down-left to the bright C-vertex at ~35.5% X, 54% Y
      // -> sweeps down-right into the lower sections
      // =========================================================================
      const vertexX = width * 0.355 + ptrX * 28 + Math.sin(time * 0.012) * 14;
      const vertexY = height * 0.54 + ptrY * 22 - (scrollShift % (height * 0.9));

      // Top entry (upper right behind header/card)
      const topX = width * 0.94 + ptrX * 18;
      const topY = -height * 0.08;

      // Upper control points pulling the curve through the hero card
      const cp1X = width * 0.62 + Math.cos(time * 0.01) * 20;
      const cp1Y = height * 0.14 + ptrY * 15;

      // C1-smooth vertical tangent control points at the C-vertex (no pinch or kink)
      const cp2X = vertexX;
      const cp2Y = vertexY - height * 0.22;

      const cp3X = vertexX;
      const cp3Y = vertexY + height * 0.22;

      // Lower sweep control point & bottom exit (flowing into Section 2 / OEM bar)
      const cp4X = width * 0.68 + Math.sin(time * 0.011) * 24;
      const cp4Y = height * 0.78 - (scrollShift % (height * 0.4)) * 0.3;

      const botX = width * 0.74 - ptrX * 20;
      const botY = height * 1.18;

      // =========================================================================
      // 1. VOLUMETRIC ATMOSPHERIC NEBULA UNDERGLOW
      // =========================================================================
      // Bright caustic glow right at the C-vertex (where the ribbon folds)
      const vertexGlow = ctx.createRadialGradient(
        vertexX + 12,
        vertexY,
        2,
        vertexX + 25,
        vertexY,
        Math.min(width, height) * 0.46
      );
      vertexGlow.addColorStop(0, 'rgba(245, 255, 180, 0.38)');
      vertexGlow.addColorStop(0.12, 'rgba(205, 255, 55, 0.22)');
      vertexGlow.addColorStop(0.38, 'rgba(115, 185, 35, 0.08)');
      vertexGlow.addColorStop(0.75, 'rgba(20, 80, 45, 0.025)');
      vertexGlow.addColorStop(1, 'transparent');

      ctx.fillStyle = vertexGlow;
      ctx.fillRect(0, 0, width, height);

      // Secondary upper-right olive-lime ambient light behind the Hero glass card
      const cardBacklight = ctx.createRadialGradient(
        width * 0.68,
        height * 0.34,
        20,
        width * 0.68,
        height * 0.34,
        width * 0.44
      );
      cardBacklight.addColorStop(0, 'rgba(180, 245, 40, 0.11)');
      cardBacklight.addColorStop(0.5, 'rgba(70, 140, 40, 0.04)');
      cardBacklight.addColorStop(1, 'transparent');

      ctx.fillStyle = cardBacklight;
      ctx.fillRect(0, 0, width, height);

      // =========================================================================
      // 2. RENDER 3D TWISTED SILK RIBBON STRANDS (Additive Caustic Interference)
      // =========================================================================
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';

      const SEGMENTS = 68;

      strands.forEach((strand) => {
        const phase = prefersReducedMotion
          ? strand.waveOffset
          : time * strand.waveSpeed + strand.waveOffset;

        ctx.beginPath();
        ctx.strokeStyle = strand.color;
        ctx.lineWidth = strand.lineWidth;
        ctx.globalAlpha = strand.baseAlpha;

        for (let step = 0; step <= SEGMENTS; step++) {
          const t = step / SEGMENTS; // 0 (top-right) -> 0.5 (C-vertex) -> 1 (bottom-right)

          // Evaluate base spine position (two joined cubic segments at t = 0.5)
          let sx = 0;
          let sy = 0;
          if (t <= 0.5) {
            const u = t * 2;
            sx = evalCubic(u, topX, cp1X, cp2X, vertexX);
            sy = evalCubic(u, topY, cp1Y, cp2Y, vertexY);
          } else {
            const u = (t - 0.5) * 2;
            sx = evalCubic(u, vertexX, cp3X, cp4X, botX);
            sy = evalCubic(u, vertexY, cp3Y, cp4Y, botY);
          }

          // Ribbon width envelope:
          // Wide and fanned-out at top-right (t=0) and bottom-right (t=1),
          // pinched and twisted tightly at the parabolic C-vertex (t=0.5)!
          const distFromVertex = Math.abs(t - 0.48) * 2; // 0 at vertex, ~1 at ends
          const ribbonWidth = 26 + Math.pow(distFromVertex, 1.35) * 185;

          // 3D helical twist angle along the spine
          const twistAngle =
            t * Math.PI * 2.15 +
            strand.twistPhase +
            Math.sin(phase) * 0.35;

          // Project 3D ribbon cross-section onto 2D screen normal
          const offsetN = Math.sin(twistAngle) * ribbonWidth * 0.5;
          const offsetOrtho = Math.cos(twistAngle) * (14 + distFromVertex * 35);

          // Harmonic silk ripple traveling along the strand
          const silkWave =
            Math.sin(t * 10 - time * 0.022 + strand.index * 0.15) *
            (4 + distFromVertex * 12);

          const px = sx + offsetN * 0.78 + silkWave;
          const py = sy + offsetOrtho * 0.65 + silkWave * 0.4;

          if (step === 0) {
            ctx.moveTo(px, py);
          } else {
            ctx.lineTo(px, py);
          }
        }

        ctx.stroke();

        // Add soft wide volumetric pass on every 8th strand to create the velvety glow
        if (strand.index % 8 === 0) {
          ctx.lineWidth = 14;
          ctx.globalAlpha = 0.018;
          ctx.stroke();
        }
      });

      // =========================================================================
      // 3. LOWER HORIZONTAL WAVE RIBBON (Visible when scrolling to Pricing & CTA)
      // Matches frame_030.png & frame_035.png flowing horizontal green-cyan waves
      // =========================================================================
      if (pageCycle > 0.15) {
        const waveBaseY = height * 0.32;
        for (let w = 0; w < 22; w++) {
          const wNorm = w / 21;
          ctx.beginPath();
          ctx.strokeStyle = wNorm > 0.75 ? '#38BDF8' : wNorm < 0.3 ? '#EEFFAA' : '#C8FF2E';
          ctx.lineWidth = wNorm < 0.3 ? 1.2 : 0.75;
          ctx.globalAlpha = 0.045 + (1 - Math.abs(wNorm - 0.5) * 2) * 0.055;

          for (let xStep = 0; xStep <= 48; xStep++) {
            const xRatio = xStep / 48;
            const wx = xRatio * width;
            const wy =
              waveBaseY +
              Math.sin(xRatio * Math.PI * 2.2 + time * 0.014 + w * 0.18) * (42 + w * 3.2) +
              Math.cos(xRatio * Math.PI * 1.1 - time * 0.01 + w * 0.12) * 28 +
              (w - 11) * 5.5;

            if (xStep === 0) ctx.moveTo(wx, wy);
            else ctx.lineTo(wx, wy);
          }
          ctx.stroke();
        }
      }

      // =========================================================================
      // 4. FLOATING MICRO-SPARKS & BOKEH MOTES ALONG THE CAUSTIC FOLD
      // =========================================================================
      sparks.forEach((sp) => {
        if (!prefersReducedMotion) {
          sp.u += sp.speed;
          if (sp.u > 1) sp.u = 0;
        }

        const t = sp.u;
        let sx = 0;
        let sy = 0;
        if (t <= 0.5) {
          const u = t * 2;
          sx = evalCubic(u, topX, cp1X, cp2X, vertexX);
          sy = evalCubic(u, topY, cp1Y, cp2Y, vertexY);
        } else {
          const u = (t - 0.5) * 2;
          sx = evalCubic(u, vertexX, cp3X, cp4X, botX);
          sy = evalCubic(u, vertexY, cp3Y, cp4Y, botY);
        }

        const driftX = Math.sin(time * 0.015 + sp.phase) * 28 + sp.v * 0.65;
        const driftY = Math.cos(time * 0.013 + sp.phase) * 24 + sp.v * 0.45;
        const px = sx + driftX;
        const py = sy + driftY;

        const twinkle = 0.5 + 0.5 * Math.sin(time * 0.04 + sp.phase);

        ctx.beginPath();
        ctx.arc(px, py, sp.size, 0, Math.PI * 2);
        ctx.fillStyle = sp.color;
        ctx.globalAlpha = sp.alpha * twinkle;
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
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050705]">
      {/* Volumetric 3D Silk Ribbon Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* Subtle fine dot matrix across the upper field (matching Video-6454.mp4) */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.14] pointer-events-none" />

      {/* Soft radial vignette so headlines pop with effortless contrast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 95% 85% at 48% 42%, transparent 48%, rgba(5, 7, 5, 0.55) 78%, rgba(5, 7, 5, 0.92) 100%)',
        }}
      />

      {/* Film grain overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-35" />
    </div>
  );
}
