import { useEffect, useRef } from 'react';

export function SignalRibbonBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // CRITICAL FOR MOBILE GPUs (Adreno / Mali TBDR):
    // Never use desynchronized: true (causes 40-50 purple/blue hardware tile glitch boxes on Android).
    // Use alpha: false (opaque RGB buffer) for rock-solid double-buffered mobile compositing.
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId = 0;
    let isPageVisible = !document.hidden;
    let width = 0;
    let height = 0;
    let maxScroll = 3000;

    const isMobileOrLowPower =
      window.innerWidth < 768 ||
      (typeof navigator !== 'undefined' &&
        navigator.hardwareConcurrency &&
        navigator.hardwareConcurrency <= 4);

    // Smooth spring-damped pointer & scroll state
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let smoothScrollY = window.scrollY;

    const handlePointerMove = (e: PointerEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const updateDimensions = (force = false) => {
      if (!canvas) return;
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      // On mobile, scrolling hides/shows the browser URL bar (changing innerHeight by ~60-120px).
      // Ignore small vertical-only resizes so we never reallocate the GPU texture mid-scroll!
      if (
        !force &&
        width > 0 &&
        Math.abs(newWidth - width) < 4 &&
        Math.abs(newHeight - height) < 180
      ) {
        maxScroll = Math.max(1, document.documentElement.scrollHeight - newHeight);
        return;
      }

      const maxDpr = isMobileOrLowPower ? 1.0 : 1.35;
      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
      width = newWidth;
      // Add slight vertical overscan on mobile so hiding the URL bar never leaves a gap
      height = isMobileOrLowPower ? Math.max(newHeight, newHeight + 80) : newHeight;
      maxScroll = Math.max(1, document.documentElement.scrollHeight - newHeight);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (mouseX === 0 && mouseY === 0) {
        mouseX = targetMouseX = width * 0.5;
        mouseY = targetMouseY = height * 0.45;
      }
    };

    const handleResize = () => updateDimensions(false);

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    updateDimensions(true);

    const settleTimer = window.setTimeout(() => {
      maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    }, 600);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const STRAND_COUNT = isMobileOrLowPower ? 28 : 46;
    const alphaBoost = isMobileOrLowPower ? 1.3 : 1.0;

    const strands = Array.from({ length: STRAND_COUNT }, (_, i) => {
      const norm = i / (STRAND_COUNT - 1);
      const centered = (norm - 0.5) * 2;

      let color = '#B8FF2C';
      if (norm < 0.24) {
        color = '#EEFF99';
      } else if (norm < 0.64) {
        color = '#B6F52A';
      } else if (norm < 0.84) {
        color = '#4ADE80';
      } else {
        color = '#38BDF8';
      }

      const rawAlpha = norm < 0.25 ? 0.17 : 0.075 + (1 - Math.abs(centered)) * 0.08;

      return {
        index: i,
        norm,
        centered,
        color,
        lineWidth: norm < 0.26 ? 1.45 : 0.75 + (1 - Math.abs(centered)) * 0.55,
        baseAlpha: Math.min(0.34, rawAlpha * alphaBoost),
        angleOffset: centered * Math.PI * 0.92,
        speed: 0.0085 + (i % 6) * 0.0015,
        phaseOffset: i * 0.22,
      };
    });

    const SPARK_COUNT = isMobileOrLowPower ? 14 : 26;
    const sparks = Array.from({ length: SPARK_COUNT }, (_, i) => ({
      u: Math.random(),
      radialOffset: (Math.random() - 0.5) * 180,
      orthoOffset: (Math.random() - 0.5) * 110,
      speed: 0.00055 + (i % 5) * 0.0003,
      size: 0.9 + (i % 3) * 0.7,
      alpha: 0.22 + Math.random() * 0.38,
      color: i % 4 === 0 ? '#38BDF8' : i % 2 === 0 ? '#EEFFAA' : '#C8FF2E',
      phase: Math.random() * Math.PI * 2,
    }));

    let time = 0;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const smoothstep = (edge0: number, edge1: number, x: number) => {
      const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
      return t * t * (3 - 2 * t);
    };

    // The ribbon belongs to the hero. Past it, fade the whole layer out so section text
    // sits on a plain background, and skip drawing while nothing is visible.
    const heroFade = () => 1 - smoothstep(window.innerHeight * 0.3, window.innerHeight * 1.0, window.scrollY);
    let lastFade = -1;
    const applyFade = () => {
      const fade = heroFade();
      if (wrapperRef.current && Math.abs(fade - lastFade) > 0.005) {
        wrapperRef.current.style.opacity = fade.toFixed(3);
        lastFade = fade;
      }
    };
    window.addEventListener('scroll', applyFade, { passive: true });
    applyFade();

    const render = () => {
      if (!isPageVisible) return;

      if (lastFade === 0) {
        if (!prefersReducedMotion) animationFrameId = requestAnimationFrame(render);
        return;
      }

      const rawScrollY = window.scrollY;
      smoothScrollY += (rawScrollY - smoothScrollY) * 0.075;

      mouseX += (targetMouseX - mouseX) * 0.045;
      mouseY += (targetMouseY - mouseY) * 0.045;

      const ptrX = (mouseX / Math.max(width, 1) - 0.5) * 2;
      const ptrY = (mouseY / Math.max(height, 1) - 0.5) * 2;

      const s = Math.max(0, Math.min(1, smoothScrollY / maxScroll));

      const wMid = smoothstep(0.08, 0.42, s);
      const wBot = smoothstep(0.58, 0.92, s);

      // Solid opaque background fill prevents any mobile tile alpha artifacts
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#050705';
      ctx.fillRect(0, 0, width, height);

      const breathX = Math.sin(time * 0.011) * 15;
      const breathY = Math.cos(time * 0.009) * 13;

      const startX =
        lerp(lerp(width * 0.94, width * 0.72, wMid), -width * 0.08, wBot) +
        ptrX * 16;
      const startY =
        lerp(lerp(-height * 0.08, -height * 0.1, wMid), height * 0.46, wBot) +
        ptrY * 12;

      const c1X =
        lerp(lerp(width * 0.62, width * 0.54, wMid), width * 0.18, wBot) +
        breathX;
      const c1Y =
        lerp(lerp(height * 0.14, height * 0.18, wMid), height * 0.34, wBot) +
        breathY;

      const vertexX =
        lerp(lerp(width * 0.355, width * 0.44, wMid), width * 0.48, wBot) +
        ptrX * 24 +
        breathX * 0.75;
      const vertexY =
        lerp(lerp(height * 0.54, height * 0.46, wMid), height * 0.25, wBot) +
        ptrY * 18 +
        breathY * 0.75;

      const tangentAngle = lerp(
        lerp(Math.PI * 0.5, Math.PI * 0.36, wMid),
        Math.PI * 0.08,
        wBot
      );
      const tangentLen = height * 0.22;
      const tx = Math.cos(tangentAngle) * tangentLen;
      const ty = Math.sin(tangentAngle) * tangentLen;

      const c2X = vertexX - tx;
      const c2Y = vertexY - ty;
      const c3X = vertexX + tx;
      const c3Y = vertexY + ty;

      const c4X =
        lerp(lerp(width * 0.66, width * 0.34, wMid), width * 0.78, wBot) -
        breathX;
      const c4Y =
        lerp(lerp(height * 0.8, height * 0.78, wMid), height * 0.36, wBot) +
        breathY;

      const endX =
        lerp(lerp(width * 0.74, width * 0.22, wMid), width * 1.08, wBot) -
        ptrX * 16;
      const endY =
        lerp(lerp(height * 1.16, height * 1.14, wMid), height * 0.16, wBot);

      // 1. Volumetric Nebula Underglow
      const vertexGlow = ctx.createRadialGradient(
        vertexX + 12,
        vertexY,
        2,
        vertexX + 24,
        vertexY,
        Math.min(width, height) * 0.45
      );
      vertexGlow.addColorStop(0, 'rgba(242, 255, 175, 0.32)');
      vertexGlow.addColorStop(0.14, 'rgba(200, 255, 50, 0.18)');
      vertexGlow.addColorStop(0.4, 'rgba(110, 180, 35, 0.07)');
      vertexGlow.addColorStop(0.75, 'rgba(20, 80, 45, 0.02)');
      vertexGlow.addColorStop(1, 'rgba(5, 7, 5, 0)');

      ctx.fillStyle = vertexGlow;
      ctx.fillRect(0, 0, width, height);

      // 2. Native GPU Cubic-Bezier Silk Strands ('screen' blend prevents mobile tile color overflow)
      ctx.save();
      ctx.globalCompositeOperation = 'screen';

      const nx = -Math.sin(tangentAngle);
      const ny = Math.cos(tangentAngle);

      for (let i = 0; i < strands.length; i++) {
        const strand = strands[i];
        const phase = prefersReducedMotion
          ? strand.phaseOffset
          : time * strand.speed + strand.phaseOffset;

        const a0 = strand.angleOffset + Math.sin(phase) * 0.28;
        const aMid = strand.angleOffset + Math.PI * 0.85 + Math.sin(phase * 0.9) * 0.22;
        const aEnd = strand.angleOffset + Math.PI * 1.85 + Math.cos(phase * 0.85) * 0.28;

        const s0 = Math.sin(a0) * 180;
        const o0 = Math.cos(a0) * 48;

        const s1 = Math.sin((a0 + aMid) * 0.5) * 115;
        const o1 = Math.cos((a0 + aMid) * 0.5) * 32;

        const sMid = Math.sin(aMid) * 28;
        const oMid = Math.cos(aMid) * 12;

        const s2 = Math.sin((aMid + aEnd) * 0.5) * 120;
        const o2 = Math.cos((aMid + aEnd) * 0.5) * 34;

        const sEnd = Math.sin(aEnd) * 195;
        const oEnd = Math.cos(aEnd) * 52;

        const p0x = startX + nx * s0 + o0;
        const p0y = startY + ny * s0 + o0 * 0.6;

        const p1x = c1X + nx * s1 + o1;
        const p1y = c1Y + ny * s1 + o1 * 0.6;

        const p2x = c2X + nx * sMid + oMid;
        const p2y = c2Y + ny * sMid + oMid * 0.6;

        const pVx = vertexX + nx * sMid + oMid;
        const pVy = vertexY + ny * sMid + oMid * 0.6;

        const p3x = c3X + nx * sMid + oMid;
        const p3y = c3Y + ny * sMid + oMid * 0.6;

        const p4x = c4X + nx * s2 + o2;
        const p4y = c4Y + ny * s2 + o2 * 0.6;

        const pEx = endX + nx * sEnd + oEnd;
        const pEy = endY + ny * sEnd + oEnd * 0.6;

        ctx.beginPath();
        ctx.strokeStyle = strand.color;
        ctx.lineWidth = strand.lineWidth;
        ctx.globalAlpha = strand.baseAlpha;

        ctx.moveTo(p0x, p0y);
        ctx.bezierCurveTo(p1x, p1y, p2x, p2y, pVx, pVy);
        ctx.bezierCurveTo(p3x, p3y, p4x, p4y, pEx, pEy);
        ctx.stroke();
      }

      // 3. Floating Sparks
      for (let i = 0; i < sparks.length; i++) {
        const sp = sparks[i];
        if (!prefersReducedMotion) {
          sp.u += sp.speed;
          if (sp.u > 1) sp.u = 0;
        }

        const t = sp.u;
        let bx = 0;
        let by = 0;
        if (t <= 0.5) {
          const u = t * 2;
          const inv = 1 - u;
          bx =
            inv * inv * inv * startX +
            3 * inv * inv * u * c1X +
            3 * inv * u * u * c2X +
            u * u * u * vertexX;
          by =
            inv * inv * inv * startY +
            3 * inv * inv * u * c1Y +
            3 * inv * u * u * c2Y +
            u * u * u * vertexY;
        } else {
          const u = (t - 0.5) * 2;
          const inv = 1 - u;
          bx =
            inv * inv * inv * vertexX +
            3 * inv * inv * u * c3X +
            3 * inv * u * u * c4X +
            u * u * u * endX;
          by =
            inv * inv * inv * vertexY +
            3 * inv * inv * u * c3Y +
            3 * inv * u * u * c4Y +
            u * u * u * endY;
        }

        const px =
          bx +
          nx * sp.radialOffset * 0.55 +
          Math.sin(time * 0.015 + sp.phase) * 18;
        const py =
          by +
          ny * sp.orthoOffset * 0.55 +
          Math.cos(time * 0.013 + sp.phase) * 16;

        const twinkle = 0.45 + 0.55 * Math.sin(time * 0.04 + sp.phase);

        ctx.beginPath();
        ctx.arc(px, py, sp.size, 0, Math.PI * 2);
        ctx.fillStyle = sp.color;
        ctx.globalAlpha = sp.alpha * twinkle;
        ctx.fill();
      }

      ctx.restore();

      if (!prefersReducedMotion && isPageVisible) {
        time += 1;
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;
      if (isPageVisible && !prefersReducedMotion) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    render();

    return () => {
      window.clearTimeout(settleTimer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('scroll', applyFade);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050705]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.13] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 95% 85% at 48% 42%, transparent 48%, rgba(5, 7, 5, 0.55) 78%, rgba(5, 7, 5, 0.92) 100%)',
        }}
      />
    </div>
  );
}
