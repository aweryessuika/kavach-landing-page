import { useState, useEffect, useRef } from 'react';
import { MousePointer, Plus, Redo2 } from 'lucide-react';

interface CommandCentreHeroProps {
  onOpenSimulation?: () => void;
}

export function CommandCentreHero({ onOpenSimulation }: CommandCentreHeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: -7, y: 3 });
  const [activeNode, setActiveNode] = useState<'lock' | 'unlock'>('lock');
  const [pulseStep, setPulseStep] = useState(0);

  // Subtle live activity rotation matching frame_002 -> frame_009
  const allRuns = [
    { time: '09:43:02', label: 'vivo y28 · unlocked after payment', speed: '240 ms', active: true },
    { time: '09:41:49', label: 'samsung a15 · locked by shop owner', speed: '310 ms', active: false },
    { time: '09:38:12', label: 'redmi 13c · enrolled at counter', speed: '42 s', active: false },
    { time: '09:34:05', label: 'oppo a79 · offline pin unlocked', speed: 'instant', active: false },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseStep((prev) => (prev + 1) % 2);
    }, 3600);
    return () => clearInterval(timer);
  }, []);

  const visibleRuns = pulseStep === 0 ? allRuns.slice(0, 3) : allRuns.slice(1, 4);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: -7 + nx * 6,
      y: 3 - ny * 5,
    });
  };

  const handlePointerLeave = () => {
    setTilt({ x: -7, y: 3 });
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative w-full max-w-[660px] mx-auto lg:mr-[-24px] select-none"
      style={{
        perspective: '1300px',
      }}
    >
      {/* Warm olive-lime ambient halo behind the glass board */}
      <div
        className="absolute -inset-6 rounded-[36px] blur-3xl opacity-65 -z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 25% 55%, rgba(200, 255, 46, 0.24), rgba(45, 95, 35, 0.12) 55%, transparent 80%)',
        }}
      />

      {/* Main 3D Tilted Glass Canvas Board (Matching frame_002.png) */}
      <div
        className="relative rounded-[24px] border border-white/[0.11] shadow-[0_35px_90px_rgba(0,0,0,0.88),inset_0_1px_0_rgba(255,255,255,0.14)] transition-transform duration-300 ease-out overflow-visible"
        style={{
          background:
            'linear-gradient(145deg, rgba(24, 30, 20, 0.78) 0%, rgba(12, 16, 12, 0.86) 60%, rgba(9, 12, 9, 0.92) 100%)',
          backdropFilter: 'blur(24px) saturate(150%)',
          WebkitBackdropFilter: 'blur(24px) saturate(150%)',
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-4 text-[12px] font-mono">
            <span className="text-[#D2D8CE]">EMI over ₹10,000</span>
            <span className="text-[#5E685B]">|</span>
            <span className="text-[#9CA698]">3 steps / 1 tap</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[12px] font-mono text-[#C8FF2E] tracking-tight">
              protected
            </span>
          </div>
        </div>

        {/* Interactive Node Graph Canvas */}
        <div className="relative px-6 pt-5 pb-6">
          {/* Top-right 100% zoom badge */}
          <div className="absolute right-6 top-4 px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.07] text-[10.5px] font-mono text-[#9CA698]">
            100%
          </div>

          {/* Left Mini Floating Tool Buttons (Exact match to frame_002.png) */}
          <div className="hidden sm:flex flex-col gap-1.5 absolute left-5 top-5 z-20">
            <button
              type="button"
              onClick={onOpenSimulation}
              className="w-7 h-7 rounded-lg bg-white/[0.06] hover:bg-white/[0.11] border border-white/[0.08] flex items-center justify-center text-[#D2D8CE] transition-colors"
              title="Inspect canvas"
            >
              <MousePointer className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setActiveNode(activeNode === 'lock' ? 'unlock' : 'lock')}
              className="w-7 h-7 rounded-lg bg-white/[0.06] hover:bg-white/[0.11] border border-white/[0.08] flex items-center justify-center text-[#D2D8CE] transition-colors"
              title="Toggle branch"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={onOpenSimulation}
              className="w-7 h-7 rounded-lg bg-white/[0.06] hover:bg-white/[0.11] border border-white/[0.08] flex items-center justify-center text-[#D2D8CE] transition-colors"
              title="Replay flow"
            >
              <Redo2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Desktop SVG Node Graph (Exact layout & bezier connectors from frame_002.png) */}
          <div className="relative h-[225px] w-full">
            {/* SVG Bezier Wires */}
            <svg
              viewBox="0 0 580 220"
              className="absolute inset-0 w-full h-full pointer-events-none"
              fill="none"
            >
              {/* Left Root Node -> Top Branch */}
              <path
                d="M 125 112 C 162 112, 165 56, 200 56"
                stroke={activeNode === 'lock' ? '#C8FF2E' : 'rgba(255,255,255,0.22)'}
                strokeWidth="1.5"
              />
              {/* Left Root Node -> Bottom Branch */}
              <path
                d="M 125 112 C 162 112, 165 168, 200 168"
                stroke={activeNode === 'unlock' ? '#C8FF2E' : 'rgba(255,255,255,0.22)'}
                strokeWidth="1.5"
              />

              {/* Top Branch -> Right Outcome Node */}
              <path
                d="M 358 56 C 395 56, 395 112, 428 112"
                stroke={activeNode === 'lock' ? '#C8FF2E' : 'rgba(255,255,255,0.22)'}
                strokeWidth="1.5"
              />
              {/* Bottom Branch -> Right Outcome Node */}
              <path
                d="M 358 168 C 395 168, 395 112, 428 112"
                stroke={activeNode === 'unlock' ? '#C8FF2E' : 'rgba(255,255,255,0.22)'}
                strokeWidth="1.5"
              />

              {/* Port connection dots */}
              <circle cx="125" cy="112" r="3" fill="#D2D8CE" />
              <circle cx="200" cy="56" r="2.5" fill="#9CA698" />
              <circle cx="200" cy="168" r="2.5" fill="#9CA698" />
              <circle cx="358" cy="56" r="2.5" fill="#9CA698" />
              <circle cx="358" cy="168" r="2.5" fill="#9CA698" />
              <circle cx="428" cy="112" r="3" fill="#C8FF2E" />
            </svg>

            {/* Branch Labels ('due' and 'paid') */}
            <div className="absolute left-[24%] top-[33%] px-2 py-0.5 rounded bg-[#141A14] border border-white/[0.08] text-[10px] font-mono text-[#9CA698]">
              late
            </div>
            <div className="absolute left-[24%] top-[58%] px-2 py-0.5 rounded bg-[#141A14] border border-white/[0.08] text-[10px] font-mono text-[#9CA698]">
              paid
            </div>

            {/* NODE 1: Left Root Trigger (Overlapping left edge slightly like frame_002.png) */}
            <div
              onClick={onOpenSimulation}
              className="cursor-pointer absolute left-[-10px] sm:left-[-18px] top-[80px] w-[148px] px-3.5 py-3 rounded-xl bg-[#141915]/95 border border-white/[0.12] shadow-[0_12px_30px_rgba(0,0,0,0.65)] hover:border-[#C8FF2E]/40 transition-colors"
            >
              <div className="text-[12.5px] font-medium text-[#F4F6F0] leading-tight">
                Phone sold on EMI
              </div>
              <div className="text-[11px] font-mono text-[#6E786B] mt-1">
                60s qr scan
              </div>
            </div>

            {/* NODE 2: Top Condition Node */}
            <div
              onClick={() => setActiveNode('lock')}
              className={`cursor-pointer absolute left-[34.5%] top-[24px] w-[158px] px-4 py-3 rounded-xl border transition-all ${
                activeNode === 'lock'
                  ? 'bg-[#121713]/95 border-[#C8FF2E]/35 shadow-[0_10px_28px_rgba(0,0,0,0.6)]'
                  : 'bg-[#101411]/90 border-white/[0.08]'
              }`}
            >
              <div className="text-[12.5px] font-medium text-[#F4F6F0] leading-tight">
                Payment is late
              </div>
              <div className="text-[11px] font-mono text-[#6E786B] mt-1">
                your decision
              </div>
            </div>

            {/* NODE 3: Bottom Action Node */}
            <div
              onClick={() => setActiveNode('unlock')}
              className={`cursor-pointer absolute left-[34.5%] top-[136px] w-[158px] px-4 py-3 rounded-xl border transition-all ${
                activeNode === 'unlock'
                  ? 'bg-[#121713]/95 border-[#C8FF2E]/35 shadow-[0_10px_28px_rgba(0,0,0,0.6)]'
                  : 'bg-[#101411]/90 border-white/[0.08]'
              }`}
            >
              <div className="text-[12.5px] font-medium text-[#F4F6F0] leading-tight">
                Log installment
              </div>
              <div className="text-[11px] font-mono text-[#6E786B] mt-1">
                stays unlocked
              </div>
            </div>

            {/* NODE 4: Right Final Action Node */}
            <div
              onClick={onOpenSimulation}
              className="cursor-pointer absolute right-0 top-[76px] w-[148px] px-3.5 py-3 rounded-xl bg-[#121713]/95 border border-white/[0.12] hover:border-[#C8FF2E]/45 shadow-[0_12px_30px_rgba(0,0,0,0.65)] transition-colors"
            >
              <div className="text-[12.5px] font-medium text-[#F4F6F0] leading-tight">
                {activeNode === 'lock' ? 'Lock screen' : 'Instant unlock'}
              </div>
              <div className="text-[11px] font-mono text-[#6E786B] mt-1">
                {activeNode === 'lock' ? '1 tap on your app' : 'works offline too'}
              </div>
            </div>

            {/* Sub-pill under Right Node ('● < 1 sec') */}
            <div className="absolute right-[24px] top-[152px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.07] flex items-center gap-1.5 text-[10.5px] font-mono text-[#9CA698]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF2E]" />
              <span>&lt; 1 sec</span>
            </div>
          </div>

          {/* Bottom 'last runs' activity feed (Matching frame_002.png) */}
          <div className="mt-4 pt-5 border-t border-white/[0.06]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono text-[#6E786B]">
                last actions
              </span>
              <button
                type="button"
                onClick={onOpenSimulation}
                className="text-[11px] font-mono text-[#C8FF2E] hover:underline"
              >
                test live lock →
              </button>
            </div>

            <div className="space-y-2 font-mono text-[11.5px]">
              {visibleRuns.map((run, i) => (
                <div
                  key={run.time}
                  className="flex items-center justify-between py-0.5 text-[#9CA698]"
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                        i === 0
                          ? 'bg-[#C8FF2E] shadow-[0_0_6px_#C8FF2E]'
                          : 'bg-white/25'
                      }`}
                    />
                    <span className="text-[#5E685B]">{run.time}</span>
                    <span className="text-[#D2D8CE] truncate">{run.label}</span>
                  </div>
                  <span className="text-[#6E786B] shrink-0 ml-3">{run.speed}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
