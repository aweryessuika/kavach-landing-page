import { useState, useEffect } from 'react';
import { X, Play, RotateCcw, Lock, Unlock, QrCode, PhoneCall } from 'lucide-react';

interface SimulationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SimulationModal({ isOpen, onClose }: SimulationModalProps) {
  const [scenario, setScenario] = useState<'remote_lock' | 'reset_attempt' | 'sim_pull'>('remote_lock');
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    setIsRunning(false);
    setProgress(0);
    setIsLocked(false);
  }, [scenario]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsRunning(false);
          setIsLocked(true);
          return 100;
        }
        if (prev >= 40 && !isLocked) {
          setIsLocked(true);
        }
        return prev + 2.5;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isRunning, isLocked]);

  if (!isOpen) return null;

  const handleStart = () => {
    setIsRunning(true);
    setProgress(0);
    setIsLocked(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setProgress(0);
    setIsLocked(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#030604]/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-4xl rounded-[24px] bg-[#0A0F0C] border border-white/[0.12] shadow-[0_30px_90px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C7FF3D] animate-ping" />
            <h3 className="font-display font-semibold text-base text-[#F5F7F4]">
              Kavach Live Enforcement Simulator
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C7FF3D]/10 text-[#C7FF3D] border border-[#C7FF3D]/20">
              DEVICE OWNER DPC 3.0
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-[#9BA598] hover:text-[#F5F7F4] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Scenario Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'remote_lock', label: 'Remote Kiosk Lock (Overdue EMI)', badge: '< 350ms Push' },
              { id: 'reset_attempt', label: 'Factory Reset Evade Attempt', badge: 'Knox Persistence' },
              { id: 'sim_pull', label: 'SIM Pull & Airplane Mode Evasion', badge: 'Offline Deadman' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setScenario(tab.id as any)}
                className={`btn-press px-4 py-2 rounded-xl text-xs font-mono border transition-all ${
                  scenario === tab.id
                    ? 'bg-[#C7FF3D]/15 border-[#C7FF3D] text-[#C7FF3D] font-bold shadow-[0_0_15px_rgba(199,255,61,0.2)]'
                    : 'bg-white/[0.03] border-white/10 text-[#9BA598] hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Interactive Screen Display */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 rounded-2xl bg-[#060A07] border border-white/[0.08]">
            {/* Phone Screen Mockup (Span 5) */}
            <div className="md:col-span-5 mx-auto w-full max-w-[260px]">
              <div className="relative rounded-[32px] bg-[#020403] border-4 border-[#212C24] p-4 shadow-2xl text-center">
                <div className="w-16 h-3.5 bg-[#212C24] rounded-full mx-auto mb-3" />

                {isLocked ? (
                  <div className="space-y-3 py-2 animate-fade-in">
                    <div className="w-10 h-10 rounded-xl bg-[#EF4444]/20 border border-[#EF4444]/40 flex items-center justify-center mx-auto text-[#EF4444]">
                      <Lock className="w-5 h-5" />
                    </div>
                    <div className="text-[9px] font-mono text-[#EF4444] font-bold">
                      HANDSET LOCKED BY STORE
                    </div>
                    <div className="text-sm font-display font-bold text-[#F5F7F4]">
                      EMI Due: ₹1,999
                    </div>
                    <div className="p-2.5 rounded-lg bg-white text-[#070A08] max-w-[120px] mx-auto">
                      <QrCode className="w-16 h-16 text-[#070A08] mx-auto" />
                      <div className="text-[7.5px] font-mono font-bold mt-1">SCAN TO UNLOCK</div>
                    </div>
                    <button className="w-full py-1.5 px-3 rounded-lg bg-white/[0.08] text-[11px] font-mono text-[#F5F7F4] flex items-center justify-center gap-1.5">
                      <PhoneCall className="w-3 h-3 text-[#C7FF3D]" />
                      <span>Call Store</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4 py-8 animate-fade-in">
                    <div className="w-12 h-12 rounded-xl bg-[#C7FF3D]/15 border border-[#C7FF3D]/40 flex items-center justify-center mx-auto text-[#C7FF3D]">
                      <Unlock className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-display font-bold text-[#F5F7F4]">
                      Normal Customer Usage
                    </div>
                    <p className="text-[10px] text-[#9BA598]">
                      Device running all apps freely. Background telemetry active.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Explanation / Progress (Span 7) */}
            <div className="md:col-span-7 space-y-4">
              <div className="text-xs font-mono text-[#9BA598] flex justify-between">
                <span>SIMULATION PROGRESS</span>
                <span className="text-[#C7FF3D] font-bold">{Math.round(progress)}%</span>
              </div>

              <div className="w-full bg-white/[0.08] h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#C7FF3D] h-full rounded-full transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="p-4 rounded-xl bg-[#0B120E] border border-white/[0.06] text-xs font-mono space-y-2">
                <div className="text-[#C7FF3D] font-semibold">
                  {scenario === 'remote_lock' && 'Scenario: Overdue EMI Remote Push'}
                  {scenario === 'reset_attempt' && 'Scenario: Hardware Button Wipe Attempt'}
                  {scenario === 'sim_pull' && 'Scenario: Delinquent Offline Attempt'}
                </div>
                <p className="text-[#9BA598] text-[11px] leading-relaxed">
                  {isLocked
                    ? 'ENFORCEMENT ACTIVE: Handset screen replaced with immutable kiosk layer. Launcher disabled, all settings inaccessible, UPI payment QR mounted.'
                    : 'Awaiting trigger event. Press "Run Incident Test" to initiate verification.'}
                </p>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={handleReset}
                  className="btn-press px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-[#9BA598] flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>

                <button
                  disabled={isRunning}
                  onClick={handleStart}
                  className={`btn-press px-6 py-2.5 rounded-xl text-xs font-mono font-bold flex items-center gap-2 ${
                    isRunning
                      ? 'bg-[#C7FF3D]/50 text-[#070A08] cursor-not-allowed'
                      : 'bg-[#C7FF3D] hover:bg-[#D4FF33] text-[#070A08] shadow-[0_0_20px_rgba(199,255,61,0.3)]'
                  }`}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Run Incident Test</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
