import { useState } from 'react';
import { Search, ShieldAlert, Layers, BarChart3, Database, DollarSign } from 'lucide-react';

export function BentoGridSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [simSwapped, setSimSwapped] = useState(false);

  const auditLogs = [
    { id: 'LOG-881', time: '14:32:01', model: 'Galaxy A15', type: 'LOCK_ENGAGED', status: 'LOCKED', text: 'EMI Due Day 3 exceeded · WebSocket push executed' },
    { id: 'LOG-882', time: '14:31:58', model: 'Vivo Y28 5G', type: 'PAYMENT_CLEAR', status: 'UNLOCKED', text: 'UPI payment ₹1,850 credited to store VPA' },
    { id: 'LOG-883', time: '14:31:54', model: 'Redmi 13C', type: 'SIM_SWAP_DETECT', status: 'FLAGGED', text: 'Airtel SIM removed · Jio SIM inserted' },
    { id: 'LOG-884', time: '14:31:49', model: 'Realme C53', type: 'HEARTBEAT_ACK', status: 'NOMINAL', text: 'Device online on Wi-Fi · Battery 78%' },
    { id: 'LOG-885', time: '14:31:42', model: 'OPPO A79', type: 'DEADMAN_TICK', status: 'COUNTING', text: 'Offline timer 18h remaining' },
  ];

  const filteredLogs = auditLogs.filter(
    (log) =>
      log.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="network-readiness" className="relative py-24 lg:py-32 overflow-hidden border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B100D] border border-white/10 text-xs font-mono text-[#C7FF3D]">
            <Layers className="w-3.5 h-3.5" />
            <span>WHOLE-FLEET OBSERVABILITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-[#F5F7F4] leading-[1.12]">
            The retailer sees
            <br />
            <span className="font-serif italic font-normal text-[#C7FF3D]">
              the whole fleet.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#9BA598] leading-relaxed">
            Every financed device, SIM swap, payment clearance, and offline timer across all your store branches managed from one high-precision terminal.
          </p>
        </div>

        {/* Bento Grid Layout (6 Structured Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* CARD 1: Sub-350ms Lock Latency (Span 7) */}
          <div className="lg:col-span-7 dark-glass rounded-2xl p-6 sm:p-7 border border-[#C7FF3D]/15 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#C7FF3D]/10 text-[#C7FF3D] flex items-center justify-center">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#F5F7F4]">
                      Sub-350ms lock latency
                    </h3>
                    <span className="text-[10px] font-mono text-[#9BA598]">
                      AWS LIGHTSAIL PERSISTENT WEBSOCKET CLUSTER
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#C7FF3D]/10 text-[#C7FF3D]">
                  MEDIAN: 182ms
                </span>
              </div>

              <p className="text-xs text-[#9BA598] mb-4">
                Push lock commands to any phone in India instantly. Bypasses standard FCM notification queues that take minutes to arrive.
              </p>

              {/* Horizontal Telemetry Chart */}
              <div className="h-44 w-full bg-[#060907] rounded-xl p-4 border border-white/[0.07] relative overflow-hidden">
                <div className="absolute inset-0 bg-tech-grid opacity-25" />
                <svg viewBox="0 0 460 120" className="w-full h-full relative z-10" fill="none">
                  <line x1="40" y1="100" x2="440" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <line x1="40" y1="20" x2="40" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

                  {/* Standard Cloud Competitor Queue (Slow) */}
                  <line x1="40" y1="35" x2="440" y2="35" stroke="rgba(239, 68, 68, 0.4)" strokeDasharray="3 3" strokeWidth="1.2" />
                  <text x="45" y="30" fill="#EF4444" fontSize="8" fontFamily="JetBrains Mono">
                    STANDARD FCM NOTIFICATION QUEUE (~ 4-12 MINUTES)
                  </text>

                  {/* Kavach Sub-350ms Horizon */}
                  <line x1="40" y1="75" x2="440" y2="75" stroke="rgba(199, 255, 61, 0.3)" strokeDasharray="2 2" strokeWidth="1" />
                  <text x="45" y="70" fill="#9BA598" fontSize="8" fontFamily="JetBrains Mono">
                    KAVACH DEDICATED WEBSOCKET CLAMP (SUB-350ms)
                  </text>

                  {/* Wave */}
                  <path
                    d="M 40 76 Q 140 72 240 78 T 340 74 T 440 76"
                    stroke="#C7FF3D"
                    strokeWidth="2.5"
                    className="filter drop-shadow-[0_0_6px_rgba(199,255,61,0.7)]"
                  />
                  <circle cx="240" cy="78" r="4.5" fill="#C7FF3D" />
                  <text x="250" y="78" fill="#F5F7F4" fontSize="8.5" fontFamily="JetBrains Mono" fontWeight="bold">
                    182 ms (REAL-TIME CLAMP)
                  </text>
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/[0.06] text-[10px] font-mono text-[#9BA598]">
              <div>ENGINE: NODE 22 + PM2</div>
              <div>DATA: REDIS PUB/SUB</div>
              <div className="text-right text-[#C7FF3D]">99.99% UPTIME</div>
            </div>
          </div>

          {/* CARD 2: SIM Swap & Anti-Tamper (Span 5) */}
          <div className="lg:col-span-5 dark-glass rounded-2xl p-6 sm:p-7 border border-[#C7FF3D]/15 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#C7FF3D]/10 text-[#C7FF3D] flex items-center justify-center">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#F5F7F4]">
                    SIM Swap & Anti-Tamper
                  </h3>
                  <span className="text-[10px] font-mono text-[#9BA598]">
                    HARDWARE ICCID ATTRIBUTE BINDING
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#9BA598] mb-4">
                If the customer pulls out the registered SIM card to dodge collection, Kavach immediately triggers a security warning or locks the screen.
              </p>

              {/* Interactive SIM Swap Simulator */}
              <div className="p-4 rounded-xl bg-[#060907] border border-white/[0.07] space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-[#9BA598]">SIM TRAY STATUS:</span>
                  <span className={simSwapped ? 'text-[#EF4444] font-bold' : 'text-[#C7FF3D] font-bold'}>
                    {simSwapped ? 'SIM CARD REMOVED' : 'ORIGINAL SIM MOUNTED'}
                  </span>
                </div>

                <button
                  onClick={() => setSimSwapped(!simSwapped)}
                  className="btn-press w-full py-2.5 px-3 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-[#F5F7F4] border border-white/10"
                >
                  {simSwapped ? 'Re-insert Original SIM' : 'Simulate Pulling Out SIM Card'}
                </button>

                <div className="p-2.5 rounded-lg bg-[#0C120E] border border-white/[0.05] text-[11px] font-mono flex items-center gap-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      simSwapped ? 'bg-[#EF4444] animate-ping' : 'bg-[#C7FF3D]'
                    }`}
                  />
                  <span className="text-[#F5F7F4]">
                    {simSwapped
                      ? 'ALERT: New ICCID / Missing SIM! Lock screen enforced immediately.'
                      : 'ICCID Verified: Registered Airtel 4G line active.'}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/[0.06] text-[10px] font-mono text-[#9BA598] flex justify-between">
              <span>HARDWARE INTEGRITY</span>
              <span className="text-[#C7FF3D]">ZERO BYPASS</span>
            </div>
          </div>

          {/* CARD 3: Retailer Unit Economics (Span 6) */}
          <div className="lg:col-span-6 dark-glass rounded-2xl p-6 sm:p-7 border border-[#C7FF3D]/15 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#C7FF3D]/10 text-[#C7FF3D] flex items-center justify-center">
                  <DollarSign className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#F5F7F4]">
                    Retailer Unit Economics
                  </h3>
                  <span className="text-[10px] font-mono text-[#9BA598]">
                    FLAT ₹100 PER KEY · ZERO RECURRING CUTS
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#9BA598] mb-4">
                Other financing apps demand 15–20% of your device profit or monthly recurring SaaS cuts. Kavach costs ₹100 flat per phone key for the full lifetime of the loan.
              </p>

              {/* Comparison Matrix */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-[#060907] border border-white/[0.06]">
                  <span className="text-[10px] text-[#626D60] block">CORPORATE EMI APPS</span>
                  <div className="text-lg font-bold text-[#EF4444] mt-1">₹800 - ₹1,500</div>
                  <p className="text-[10px] text-[#9BA598] mt-1">
                    Monthly cuts + delays in bank settlements.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0E1711] border border-[#C7FF3D]/30 shadow-[0_0_15px_rgba(199,255,61,0.1)]">
                  <span className="text-[10px] text-[#C7FF3D] block font-bold">KAVACH PLATFORM</span>
                  <div className="text-lg font-bold text-[#C7FF3D] mt-1">₹100 Flat</div>
                  <p className="text-[10px] text-[#9BA598] mt-1">
                    Direct UPI to your account. 100% of profit is yours.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#9BA598]">
              <span>RECOVERY RATIO</span>
              <span className="text-[#C7FF3D]">RECOVERS PHONE VALUE IN 1 PAYMENT</span>
            </div>
          </div>

          {/* CARD 4: Cryptographic Audit Log (Span 6) */}
          <div className="lg:col-span-6 dark-glass rounded-2xl p-6 sm:p-7 border border-[#C7FF3D]/15 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#C7FF3D]/10 text-[#C7FF3D] flex items-center justify-center">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#F5F7F4]">
                    Cryptographic Audit Log
                  </h3>
                  <span className="text-[10px] font-mono text-[#9BA598]">
                    LEGAL DISPUTE PROOF & RECOVERY TRAIL
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#9BA598] mb-3">
                Searchable, timestamped records of every lock, unlock, payment attempt, and device geofence ping.
              </p>

              {/* Search input */}
              <div className="relative mb-3">
                <Search className="w-3.5 h-3.5 text-[#9BA598] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter logs by device model, action, or status..."
                  className="w-full bg-[#060907] border border-white/10 rounded-lg pl-8 pr-3 py-1.5 text-xs font-mono text-[#F5F7F4] placeholder:text-[#626D60] focus:outline-none focus:border-[#C7FF3D]/50"
                />
              </div>

              {/* Logs box */}
              <div className="h-32 bg-[#060907] rounded-xl p-2.5 border border-white/[0.07] overflow-y-auto space-y-1.5 font-mono text-[10px]">
                {filteredLogs.map((log) => (
                  <div
                    key={log.id}
                    className="flex items-center justify-between py-1 px-2 rounded bg-white/[0.02] border border-white/[0.04]"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#C7FF3D]">{log.id}</span>
                      <span className="text-[#9BA598]">{log.model}</span>
                      <span className="text-[#F5F7F4]">{log.text}</span>
                    </div>
                    <span className="text-[#626D60]">{log.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/[0.06] text-[10px] font-mono text-[#9BA598] flex justify-between">
              <span>TAMPER RESISTANT</span>
              <span className="text-[#C7FF3D]">POLICE / LEGAL READY DOCUMENTATION</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
