import { useState, useRef } from 'react';
import { Lock, Bell } from 'lucide-react';

interface CommandCentreHeroProps {
  onOpenSimulation?: () => void;
}

export function CommandCentreHero({ onOpenSimulation }: CommandCentreHeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [activeBranch, setActiveBranch] = useState<'true' | 'else'>('true');

  const handleMouseMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 5, y: -y * 5 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handleMouseMove}
      onPointerLeave={handleMouseLeave}
      className="relative w-full max-w-[620px] mx-auto lg:max-w-none transition-transform duration-300 ease-out"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
      }}
    >
      {/* Ambient Backlight Glow from the vortex behind */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-[#C7FF3D]/25 via-[#10B981]/15 to-[#00F5D4]/10 rounded-[30px] blur-2xl opacity-80 -z-10 pointer-events-none" />

      {/* Main Glass Workflow Card (Matching frame_001.png) */}
      <div className="relative rounded-[24px] bg-[#0A0F0C]/80 backdrop-blur-2xl border border-white/[0.12] shadow-[0_30px_70px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.15)] overflow-hidden">
        {/* Top Header Strip */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="text-[#F5F7F4] font-medium tracking-tight">
              Default rule: Overdue &gt; Day 3
            </span>
            <span className="text-[#626D60]">3 triggers / 1 branch</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#C7FF3D]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF3D] animate-pulse" />
              enforcing
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-[#9BA598] border border-white/[0.08]">
              100% Knox Active
            </span>
          </div>
        </div>

        {/* Workflow Canvas Area (Exact node-graph tree from reference video) */}
        <div className="p-5 sm:p-6 space-y-6">
          {/* Node Graph Tree */}
          <div className="relative p-5 rounded-2xl bg-[#060A07]/90 border border-white/[0.06] overflow-hidden">
            {/* Subtle tech background grid */}
            <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

            {/* Left toolbar micro-controls */}
            <div className="absolute left-3 top-3 flex flex-col gap-1.5 z-10">
              <button className="w-6 h-6 rounded-md bg-white/[0.05] border border-white/10 text-white/50 hover:text-white flex items-center justify-center text-xs">
                +
              </button>
              <button className="w-6 h-6 rounded-md bg-white/[0.05] border border-white/10 text-white/50 hover:text-white flex items-center justify-center text-xs">
                ↺
              </button>
            </div>

            {/* Graph Nodes */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 pl-8">
              {/* Root Node: EMI Bounce */}
              <div className="p-3 rounded-xl bg-[#0F1711] border border-white/10 shadow-lg min-w-[140px]">
                <div className="text-[10px] font-mono text-[#9BA598] uppercase">TRIGGER</div>
                <div className="text-xs font-semibold text-[#F5F7F4] mt-0.5">EMI Due Breached</div>
                <div className="text-[10px] font-mono text-[#C7FF3D] mt-1 flex items-center gap-1">
                  <span>NACH / UPI bounce</span>
                </div>
              </div>

              {/* Connecting Line 1 */}
              <div className="hidden sm:flex items-center">
                <div className="w-8 h-[2px] bg-gradient-to-r from-white/20 to-[#C7FF3D]/60" />
              </div>

              {/* Decision Condition Node */}
              <div className="p-3 rounded-xl bg-[#111A13] border border-[#C7FF3D]/30 shadow-[0_0_15px_rgba(199,255,61,0.1)] min-w-[150px]">
                <div className="text-[10px] font-mono text-[#9BA598] uppercase">CONDITION</div>
                <div className="text-xs font-semibold text-[#F5F7F4] mt-0.5">Grace period passed</div>
                <div className="text-[10px] font-mono text-[#00F5D4] mt-1">
                  Day 3 at 18:00 IST
                </div>
              </div>

              {/* Connecting Branching Lines */}
              <div className="hidden sm:flex flex-col justify-center gap-6 h-24">
                <div className="flex items-center gap-1">
                  <div className="w-6 h-[2px] bg-[#C7FF3D]" />
                  <span className="text-[9px] font-mono text-[#C7FF3D]">true</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-[2px] bg-white/20" />
                  <span className="text-[9px] font-mono text-[#9BA598]">else</span>
                </div>
              </div>

              {/* Branch Output Nodes (Stacked) */}
              <div className="flex flex-col gap-3 min-w-[150px] w-full sm:w-auto">
                {/* Branch 1: Clamped Lock */}
                <div
                  onClick={() => setActiveBranch('true')}
                  className={`p-3 rounded-xl border transition-all cursor-pointer ${
                    activeBranch === 'true'
                      ? 'bg-[#152219] border-[#C7FF3D] shadow-[0_0_20px_rgba(199,255,61,0.2)]'
                      : 'bg-[#0E1510] border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#F5F7F4] flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-[#C7FF3D]" />
                      Full Kiosk Lock
                    </span>
                    <span className="text-[9px] font-mono text-[#C7FF3D]">&lt; 350ms</span>
                  </div>
                  <div className="text-[10px] font-mono text-[#9BA598] mt-1">
                    DPC overlay + UPI QR
                  </div>
                </div>

                {/* Branch 2: Nag Loop */}
                <div
                  onClick={() => setActiveBranch('else')}
                  className={`p-3 rounded-xl border transition-all cursor-pointer ${
                    activeBranch === 'else'
                      ? 'bg-[#152219] border-[#00F5D4] shadow-[0_0_15px_rgba(0,245,212,0.2)]'
                      : 'bg-[#0E1510] border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#F5F7F4] flex items-center gap-1.5">
                      <Bell className="w-3.5 h-3.5 text-[#00F5D4]" />
                      Audio Nag Alert
                    </span>
                    <span className="text-[9px] font-mono text-[#9BA598]">every 2h</span>
                  </div>
                  <div className="text-[10px] font-mono text-[#9BA598] mt-1">
                    Siren on full volume
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Last Runs Audit Stream (Matching frame_001.png bottom section) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#9BA598]">
              <span className="uppercase tracking-wider">LAST FLEET ACTIONS</span>
              <button
                onClick={onOpenSimulation}
                className="text-[#C7FF3D] hover:underline flex items-center gap-1"
              >
                Trigger Device Lock Demo →
              </button>
            </div>

            <div className="space-y-1.5 font-mono text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF3D]" />
                  <span className="text-[#626D60]">14:28:02</span>
                  <span className="text-[#F5F7F4]">Samsung Galaxy A15</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#C7FF3D]/10 text-[#C7FF3D]">
                    KIOSK LOCKED
                  </span>
                </div>
                <span className="text-[11px] text-[#9BA598]">180 ms</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4]" />
                  <span className="text-[#626D60]">14:25:12</span>
                  <span className="text-[#F5F7F4]">Vivo Y28 5G</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#00F5D4]/10 text-[#00F5D4]">
                    PAYMENT RECEIVED (₹1,850)
                  </span>
                </div>
                <span className="text-[11px] text-[#9BA598]">Instant Unlock</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span className="text-[#626D60]">14:20:44</span>
                  <span className="text-[#F5F7F4]">Redmi 13C</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/[0.06] text-[#9BA598]">
                    OFFLINE DEADMAN PING
                  </span>
                </div>
                <span className="text-[11px] text-[#9BA598]">410 ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
