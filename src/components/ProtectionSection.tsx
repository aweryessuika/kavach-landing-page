import { useState } from 'react';
import { ShieldCheck, WifiOff, Zap } from 'lucide-react';

export function ProtectionSection() {
  const [activeCard, setActiveCard] = useState<number>(0);

  const cards = [
    {
      id: 0,
      title: 'Zero Factory Reset Bypass',
      description: 'Device Owner DPC stays permanently locked into system-level privileges.',
      subtext: 'Even if the customer enters recovery mode (Power + Vol Down) or flashes stock ROM, Kavach auto-provisions itself upon first boot before home screen access is granted.',
      badge: 'KNOX & DPC PERSISTENCE',
      icon: ShieldCheck,
      visual: (
        <div className="mt-3 p-3 rounded-lg bg-[#060907] border border-white/[0.06] font-mono text-[10px] space-y-1.5">
          <div className="flex justify-between text-[#9BA598]">
            <span>RECOVERY MODE ATTEMPT</span>
            <span className="text-[#C7FF3D]">BLOCKED</span>
          </div>
          <div className="flex justify-between text-[#F5F7F4]">
            <span>OEM UNLOCK: DISABLED</span>
            <span>USB DEBUGGING: REVOKED</span>
          </div>
          <div className="w-full bg-white/[0.08] h-1 rounded-full overflow-hidden">
            <div className="bg-[#C7FF3D] h-full w-full" />
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: 'Sub-350ms Remote Kiosk Lock',
      description: 'Trigger lock with a single click from your retailer dashboard.',
      subtext: 'Persistent bidirectional WebSockets on AWS Lightsail push encrypted commands in real time. The entire screen becomes an un-dismissible payment reminder with your UPI QR.',
      badge: 'WEBSOCKET CLAMP',
      icon: Zap,
      visual: (
        <div className="mt-3 p-3 rounded-lg bg-[#060907] border border-white/[0.06] font-mono text-[10px] space-y-1.5">
          <div className="flex justify-between text-[#9BA598]">
            <span>PUSH LATENCY</span>
            <span className="text-[#00F5D4]">182 MS ACTUAL</span>
          </div>
          <div className="flex justify-between text-[#F5F7F4]">
            <span>KIOSK STATUS: ACTIVE</span>
            <span>BACK/HOME KEYS: NULLIFIED</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#C7FF3D] text-[9px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF3D]" />
            Displays store owner custom UPI QR code + Call Store button
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Offline Deadman Auto-Lock',
      description: 'Enforces lock even when airplane mode or SIM removal is attempted.',
      subtext: 'If a delinquent customer removes the SIM or avoids Wi-Fi, the internal cryptographic timer counts down. If no online payment token is received within 24 hours, the device locks offline automatically.',
      badge: 'FAIL-SAFE COUNTER',
      icon: WifiOff,
      visual: (
        <div className="mt-3 p-3 rounded-lg bg-[#060907] border border-white/[0.06] font-mono text-[10px] space-y-1.5">
          <div className="flex justify-between text-[#9BA598]">
            <span>SIM STATUS: REMOVED</span>
            <span className="text-[#F59E0B]">DEADMAN RUNNING</span>
          </div>
          <div className="flex justify-between text-[#F5F7F4]">
            <span>OFFLINE TIMER: 23:59:40</span>
            <span>ACTION: AUTO-LOCK</span>
          </div>
          <div className="text-[9px] text-[#9BA598]">
            Cryptographically sealed system clock cannot be altered in settings.
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="system" className="relative py-24 lg:py-32 overflow-hidden border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline & Editorial Paragraph (Matching frame_007.png) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B100D] border border-white/10 text-xs font-mono text-[#C7FF3D]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF3D]" />
              <span>HARDWARE-LEVEL SECURITY ARMOR</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-[#F5F7F4] leading-[1.12]">
              Most EMI recovery is
              <br />
              <span className="font-serif italic font-normal text-[#C7FF3D]">
                lost in delay.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#9BA598] leading-relaxed">
              Calling customers for weeks. Visiting home addresses. Hoping they do not format the device before paying. Kavach replaces manual chasing with instant hardware enforcement, leaving you with zero defaulted stock.
            </p>

            {/* Strategic Pillars List */}
            <div className="pt-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#C7FF3D]/10 text-[#C7FF3D] flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono">
                  ✓
                </div>
                <p className="text-sm text-[#9BA598]">
                  <strong className="text-[#F5F7F4] font-medium">Safe Mode & Developer Options Disabled:</strong> USB debugging and developer options are permanently locked down.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#C7FF3D]/10 text-[#C7FF3D] flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono">
                  ✓
                </div>
                <p className="text-sm text-[#9BA598]">
                  <strong className="text-[#F5F7F4] font-medium">Dialer & Emergency Passthrough:</strong> Allows dialing 112 emergency services and your store contact number while all other apps remain locked.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#C7FF3D]/10 text-[#C7FF3D] flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono">
                  ✓
                </div>
                <p className="text-sm text-[#9BA598]">
                  <strong className="text-[#F5F7F4] font-medium">Auto-Unlock on UPI Payment:</strong> The instant customer pays the EMI via QR code, phone unlocks automatically in under 5 seconds.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Connected Glass Cards with Vertical Route-Line */}
          <div className="lg:col-span-7 relative">
            {/* Glowing Vertical Route Line Connector */}
            <div className="hidden sm:block absolute left-8 top-10 bottom-10 w-[2px] bg-gradient-to-b from-[#C7FF3D]/40 via-[#10B981]/30 to-[#00F5D4]/20 -z-0" />

            <div className="space-y-6 sm:pl-16 relative z-10">
              {cards.map((card, idx) => {
                const IconComponent = card.icon;
                const isSelected = activeCard === idx;

                return (
                  <div
                    key={card.id}
                    onClick={() => setActiveCard(idx)}
                    className={`dark-glass-interactive rounded-2xl p-6 sm:p-7 relative cursor-pointer border transition-all duration-300 ${
                      isSelected
                        ? 'border-[#C7FF3D]/40 bg-[#0C130F]/90 shadow-[0_20px_45px_rgba(0,0,0,0.8),0_0_30px_rgba(199,255,61,0.12)]'
                        : 'border-white/[0.08] bg-[#090E0B]/70 hover:border-white/20'
                    }`}
                  >
                    {/* Node Indicator on the line */}
                    <div
                      className={`hidden sm:flex absolute -left-16 top-8 w-6 h-6 rounded-full items-center justify-center border transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#C7FF3D] border-[#C7FF3D] shadow-[0_0_12px_#C7FF3D]'
                          : 'bg-[#070A08] border-white/20'
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          isSelected ? 'bg-[#070A08]' : 'bg-white/40'
                        }`}
                      />
                    </div>

                    {/* Card Header */}
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                            isSelected
                              ? 'bg-[#C7FF3D]/20 text-[#C7FF3D]'
                              : 'bg-white/[0.05] text-[#9BA598]'
                          }`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-[#C7FF3D] border border-[#C7FF3D]/15">
                          {card.badge}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-[#626D60]">0{idx + 1}</span>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-display font-semibold text-[#F5F7F4] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[#9BA598] leading-relaxed">
                      {card.description}
                    </p>
                    <p className="text-xs text-[#626D60] mt-2 leading-relaxed">
                      {card.subtext}
                    </p>

                    {/* Dynamic Technical Visual Component */}
                    {card.visual}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
