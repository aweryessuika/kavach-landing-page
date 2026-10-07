import { useState, useEffect } from 'react';
import { Lock, Unlock, PhoneCall, QrCode, Zap } from 'lucide-react';

export function SafetyIntelligenceSection() {
  const [isLocked, setIsLocked] = useState(true);
  const [latency, setLatency] = useState(182);

  // Periodic latency ping simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setLatency(Math.floor(160 + Math.random() * 45));
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="safety-intelligence" className="relative py-24 lg:py-32 overflow-hidden border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Interactive Smartphone Kiosk Simulator */}
          <div className="lg:col-span-7">
            <div className="dark-glass rounded-3xl p-6 sm:p-8 border border-[#C7FF3D]/20 shadow-[0_30px_70px_rgba(0,0,0,0.9)] space-y-6">
              {/* Console Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C7FF3D] shadow-[0_0_8px_#C7FF3D]" />
                  <span className="text-xs font-mono font-medium text-[#F5F7F4]">
                    LIVE HARDWARE KIOSK EMULATOR
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-[#00F5D4] bg-[#00F5D4]/10 border border-[#00F5D4]/20 px-2.5 py-0.5 rounded-full">
                    PING: {latency}ms
                  </span>
                </div>
              </div>

              {/* Central Phone Mockup Screen */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                {/* Physical Phone Screen Container (Span 7) */}
                <div className="sm:col-span-7 mx-auto w-full max-w-[280px]">
                  <div className="relative rounded-[36px] bg-[#020403] border-4 border-[#232F27] p-4 shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden">
                    {/* Speaker notch */}
                    <div className="w-20 h-4 bg-[#232F27] rounded-full mx-auto mb-3" />

                    {isLocked ? (
                      /* LOCKED STATE KIOSK */
                      <div className="space-y-4 text-center py-2 animate-fade-in">
                        <div className="w-12 h-12 rounded-2xl bg-[#EF4444]/15 border border-[#EF4444]/40 flex items-center justify-center mx-auto text-[#EF4444] shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                          <Lock className="w-6 h-6" />
                        </div>

                        <div>
                          <div className="text-[10px] font-mono text-[#EF4444] uppercase tracking-wider font-bold">
                            DEVICE OWNER LOCK ENGAGED
                          </div>
                          <div className="text-base font-display font-bold text-[#F5F7F4] mt-0.5">
                            EMI Payment Overdue
                          </div>
                          <div className="text-xs text-[#9BA598] mt-1">
                            Pending: <strong className="text-[#C7FF3D]">₹2,499</strong> (Due Day 3)
                          </div>
                        </div>

                        {/* Store UPI QR Code */}
                        <div className="p-3 rounded-xl bg-white text-[#070A08] max-w-[150px] mx-auto shadow-lg">
                          <div className="aspect-square bg-[#070A08] rounded-lg p-2 flex items-center justify-center text-white">
                            <QrCode className="w-20 h-20 text-[#C7FF3D]" />
                          </div>
                          <div className="text-[9px] font-mono font-bold text-[#070A08] mt-1.5">
                            SCAN TO UNLOCK INSTANTLY
                          </div>
                        </div>

                        {/* Emergency Contact Passthrough */}
                        <div className="pt-2 flex flex-col gap-1.5 text-xs font-mono">
                          <button className="w-full py-2 px-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] text-[#F5F7F4] flex items-center justify-center gap-2 border border-white/10">
                            <PhoneCall className="w-3.5 h-3.5 text-[#C7FF3D]" />
                            <span>Call Store Owner</span>
                          </button>
                          <div className="text-[9px] text-[#626D60]">
                            Dialer limited to emergency (112) & store contact
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* UNLOCKED NORMAL STATE */
                      <div className="space-y-6 text-center py-8 animate-fade-in">
                        <div className="w-14 h-14 rounded-2xl bg-[#C7FF3D]/20 border border-[#C7FF3D]/40 flex items-center justify-center mx-auto text-[#C7FF3D] shadow-[0_0_20px_rgba(199,255,61,0.3)]">
                          <Unlock className="w-7 h-7" />
                        </div>

                        <div>
                          <div className="text-[10px] font-mono text-[#C7FF3D] uppercase tracking-wider font-bold">
                            ALL RESTRICTIONS LIFTED
                          </div>
                          <div className="text-lg font-display font-bold text-[#F5F7F4] mt-1">
                            Device Normal
                          </div>
                          <p className="text-xs text-[#9BA598] mt-1 px-2">
                            Payment verified via NPCI UPI gateway. Launcher and all apps restored.
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-[#C7FF3D]">
                          Next EMI: 05 Nov 2026
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Interactive Controls Panel (Span 5) */}
                <div className="sm:col-span-5 space-y-4">
                  <div className="p-4 rounded-2xl bg-[#060907] border border-white/[0.08] space-y-3">
                    <span className="text-xs font-mono text-[#9BA598] block">
                      TEST LOCK TOGGLE
                    </span>

                    <button
                      onClick={() => setIsLocked(!isLocked)}
                      className={`btn-press w-full py-3 px-4 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all ${
                        isLocked
                          ? 'bg-[#C7FF3D] text-[#070A08] shadow-[0_0_20px_rgba(199,255,61,0.3)]'
                          : 'bg-[#EF4444] text-white shadow-[0_0_20px_rgba(239,68,68,0.3)]'
                      }`}
                    >
                      {isLocked ? (
                        <>
                          <Unlock className="w-4 h-4" />
                          <span>Simulate UPI Payment (Unlock)</span>
                        </>
                      ) : (
                        <>
                          <Lock className="w-4 h-4" />
                          <span>Simulate Overdue (Lock)</span>
                        </>
                      )}
                    </button>

                    <div className="text-[10px] font-mono text-[#626D60] leading-relaxed">
                      Toggle to see how fast the kiosk activates over WebSocket without rebooting the phone.
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#060907] border border-white/[0.08] space-y-2 text-xs font-mono">
                    <div className="text-[#9BA598] text-[10px]">CURRENT CLOUD STATE</div>
                    <div className="flex justify-between py-1 border-b border-white/[0.04]">
                      <span className="text-[#9BA598]">Instance:</span>
                      <span className="text-[#F5F7F4]">AWS Lightsail BLR</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/[0.04]">
                      <span className="text-[#9BA598]">Node Engine:</span>
                      <span className="text-[#C7FF3D]">Node 22 + PM2</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#9BA598]">Lock Latency:</span>
                      <span className="text-[#00F5D4]">&lt; 350ms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Narrative Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B100D] border border-white/10 text-xs font-mono text-[#C7FF3D]">
              <Zap className="w-3.5 h-3.5 text-[#C7FF3D]" />
              <span>DPC RUNTIME CONTROL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-[#F5F7F4] leading-[1.12]">
              Enforcement intelligence
              <br />
              <span className="font-serif italic font-normal text-[#C7FF3D]">
                where every second counts.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#9BA598] leading-relaxed">
              Kavach translates real-time payment telemetry into instant hardware action. No calls to call centers, no disputes. When payment clears, the device unlocks automatically in under five seconds.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-[#090E0B] border border-white/[0.06]">
                <h4 className="text-sm font-semibold text-[#F5F7F4] mb-1">
                  Custom Store Branding & UPI
                </h4>
                <p className="text-xs text-[#9BA598] leading-relaxed">
                  Every lock screen carries your retail store name, phone number, and direct bank VPA QR code so customer money lands in your bank account directly without intermediate commissions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#090E0B] border border-white/[0.06]">
                <h4 className="text-sm font-semibold text-[#F5F7F4] mb-1">
                  100% Google Play Protect Certified
                </h4>
                <p className="text-xs text-[#9BA598] leading-relaxed">
                  Built strictly according to official Android Management API specifications. Zero malware flags, zero false Play Protect warnings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
