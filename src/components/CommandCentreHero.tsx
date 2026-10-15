import { useState, useEffect, useRef } from 'react';
import { MousePointer, Plus, Redo2 } from 'lucide-react';

interface CommandCentreHeroProps {
  onOpenSimulation?: () => void;
  onNotify?: (message: string) => void;
}

export function CommandCentreHero({ onOpenSimulation, onNotify }: CommandCentreHeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const boardRef = useRef<HTMLDivElement | null>(null);
  const [activeNode, setActiveNode] = useState<'lock' | 'unlock'>('lock');
  const [pulseStep, setPulseStep] = useState(0);

  const allRuns = [
    { time: '09:43:02', label: 'vivo y28 · unlocked after payment', speed: '240 ms' },
    { time: '09:41:49', label: 'samsung a15 · locked by shop owner', speed: '310 ms' },
    { time: '09:38:12', label: 'redmi 13c · enrolled at counter', speed: '42 s' },
    { time: '09:34:05', label: 'oppo a79 · offline pin unlocked', speed: 'instant' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseStep((prev) => (prev + 1) % 2);
    }, 3600);
    return () => clearInterval(timer);
  }, []);

  const visibleRuns = pulseStep === 0 ? allRuns.slice(0, 3) : allRuns.slice(1, 4);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current || !boardRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    const rx = (-7 + nx * 6).toFixed(2);
    const ry = (3 - ny * 5).toFixed(2);
    boardRef.current.style.transform = `rotateY(${rx}deg) rotateX(${ry}deg)`;
  };

  const handlePointerLeave = () => {
    if (!boardRef.current) return;
    boardRef.current.style.transform = 'rotateY(-7deg) rotateX(3deg)';
  };

  const handleSwitchBranch = (branch: 'lock' | 'unlock') => {
    setActiveNode(branch);
    if (branch === 'lock') {
      onNotify?.('Manual lock path selected · Ready for 1-tap lock (< 1 sec)');
    } else {
      onNotify?.('Installment logged · Handset stays unlocked');
    }
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

      {/* Main 3D Tilted Board — Zero backdrop-filter blur so 3D tilt runs at 120fps on any device */}
      <div
        ref={boardRef}
        className="relative rounded-[24px] border border-white/[0.11] shadow-[0_35px_90px_rgba(0,0,0,0.88),inset_0_1px_0_rgba(255,255,255,0.14)] transition-transform duration-300 ease-out overflow-visible will-change-transform"
        style={{
          background:
            'linear-gradient(145deg, rgba(23, 29, 20, 0.92) 0%, rgba(12, 16, 12, 0.95) 60%, rgba(9, 12, 9, 0.98) 100%)',
          transform: 'rotateY(-7deg) rotateX(3deg)',
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

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF2E] shadow-[0_0_8px_#C8FF2E]" />
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

          {/* Left Mini Floating Tool Buttons */}
          <div className="hidden sm:flex flex-col gap-1.5 absolute left-5 top-5 z-20">
            <button
              type="button"
              onClick={onOpenSimulation}
              className="w-7 h-7 rounded-lg bg-white/[0.06] hover:bg-white/[0.11] border border-white/[0.08] flex items-center justify-center text-[#D2D8CE] transition-colors"
              title="Open interactive preview"
            >
              <MousePointer className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() =>
                handleSwitchBranch(activeNode === 'lock' ? 'unlock' : 'lock')
              }
              className="w-7 h-7 rounded-lg bg-white/[0.06] hover:bg-white/[0.11] border border-white/[0.08] flex items-center justify-center text-[#D2D8CE] transition-colors"
              title="Switch path"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => {
                setPulseStep((prev) => (prev + 1) % 2);
                onNotify?.('Refreshed live counter activity log');
              }}
              className="w-7 h-7 rounded-lg bg-white/[0.06] hover:bg-white/[0.11] border border-white/[0.08] flex items-center justify-center text-[#D2D8CE] transition-colors"
              title="Refresh activity"
            >
              <Redo2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Desktop SVG Node Graph with Traveling Signal Pulse */}
          <div className="relative h-[225px] w-full">
            <svg
              viewBox="0 0 580 220"
              className="absolute inset-0 w-full h-full pointer-events-none"
              fill="none"
            >
              {/* Base Wires */}
              <path
                d="M 125 112 C 162 112, 165 56, 200 56"
                stroke={
                  activeNode === 'lock'
                    ? 'rgba(200,255,46,0.45)'
                    : 'rgba(255,255,255,0.18)'
                }
                strokeWidth="1.5"
              />
              <path
                d="M 125 112 C 162 112, 165 168, 200 168"
                stroke={
                  activeNode === 'unlock'
                    ? 'rgba(200,255,46,0.45)'
                    : 'rgba(255,255,255,0.18)'
                }
                strokeWidth="1.5"
              />
              <path
                d="M 358 56 C 395 56, 395 112, 428 112"
                stroke={
                  activeNode === 'lock'
                    ? 'rgba(200,255,46,0.45)'
                    : 'rgba(255,255,255,0.18)'
                }
                strokeWidth="1.5"
              />
              <path
                d="M 358 168 C 395 168, 395 112, 428 112"
                stroke={
                  activeNode === 'unlock'
                    ? 'rgba(200,255,46,0.45)'
                    : 'rgba(255,255,255,0.18)'
                }
                strokeWidth="1.5"
              />

              {/* Animated Traveling Signal Pulse along the Active Branch (Pure CSS GPU stroke-dashoffset) */}
              {activeNode === 'lock' ? (
                <>
                  <path
                    d="M 125 112 C 162 112, 165 56, 200 56"
                    stroke="#EEFFAA"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    className="animate-signal-flow"
                  />
                  <path
                    d="M 358 56 C 395 56, 395 112, 428 112"
                    stroke="#EEFFAA"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    className="animate-signal-flow"
                  />
                </>
              ) : (
                <>
                  <path
                    d="M 125 112 C 162 112, 165 168, 200 168"
                    stroke="#EEFFAA"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    className="animate-signal-flow"
                  />
                  <path
                    d="M 358 168 C 395 168, 395 112, 428 112"
                    stroke="#EEFFAA"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    className="animate-signal-flow"
                  />
                </>
              )}

              {/* Port connection dots */}
              <circle cx="125" cy="112" r="3" fill="#D2D8CE" />
              <circle cx="200" cy="56" r="2.5" fill="#9CA698" />
              <circle cx="200" cy="168" r="2.5" fill="#9CA698" />
              <circle cx="358" cy="56" r="2.5" fill="#9CA698" />
              <circle cx="358" cy="168" r="2.5" fill="#9CA698" />
              <circle cx="428" cy="112" r="3" fill="#C8FF2E" />
            </svg>

            {/* Branch Labels ('late' and 'paid') */}
            <div className="absolute left-[24%] top-[33%] px-2 py-0.5 rounded bg-[#141A14] border border-white/[0.08] text-[10px] font-mono text-[#9CA698]">
              late
            </div>
            <div className="absolute left-[24%] top-[58%] px-2 py-0.5 rounded bg-[#141A14] border border-white/[0.08] text-[10px] font-mono text-[#9CA698]">
              paid
            </div>

            {/* NODE 1: Left Root Trigger */}
            <div
              onClick={onOpenSimulation}
              className="cursor-pointer absolute left-[-10px] sm:left-[-18px] top-[80px] w-[148px] px-3.5 py-3 rounded-xl bg-[#141915] border border-white/[0.12] shadow-[0_12px_30px_rgba(0,0,0,0.65)] hover:border-[#C8FF2E]/40 transition-colors"
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
              onClick={() => handleSwitchBranch('lock')}
              className={`cursor-pointer absolute left-[34.5%] top-[24px] w-[158px] px-4 py-3 rounded-xl border transition-all ${
                activeNode === 'lock'
                  ? 'bg-[#131913] border-[#C8FF2E]/40 shadow-[0_10px_28px_rgba(0,0,0,0.6)]'
                  : 'bg-[#101411] border-white/[0.08] hover:border-white/[0.16]'
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
              onClick={() => handleSwitchBranch('unlock')}
              className={`cursor-pointer absolute left-[34.5%] top-[136px] w-[158px] px-4 py-3 rounded-xl border transition-all ${
                activeNode === 'unlock'
                  ? 'bg-[#131913] border-[#C8FF2E]/40 shadow-[0_10px_28px_rgba(0,0,0,0.6)]'
                  : 'bg-[#101411] border-white/[0.08] hover:border-white/[0.16]'
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
              className="cursor-pointer absolute right-0 top-[76px] w-[148px] px-3.5 py-3 rounded-xl bg-[#131913] border border-white/[0.12] hover:border-[#C8FF2E]/45 shadow-[0_12px_30px_rgba(0,0,0,0.65)] transition-colors"
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

          {/* Bottom 'last actions' activity feed */}
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
