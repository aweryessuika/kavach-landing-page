import { Shield, Zap, CheckCircle2, DollarSign } from 'lucide-react';

export function MetricsTrustSection() {
  const metrics = [
    {
      value: '₹0',
      label: 'Lost to reset bypasses',
      detail: 'Hardware Device Owner binding survives recovery wipes, fastboot, and safe mode attempts.',
      icon: Shield,
    },
    {
      value: '< 350ms',
      label: 'WebSocket lock latency',
      detail: 'Instant push from AWS Lightsail cluster clamps the device screen within half a second.',
      icon: Zap,
    },
    {
      value: '99.8%',
      label: 'EMI recovery rate',
      detail: 'Customers pay immediately to restore access to WhatsApp, calling, and personal data.',
      icon: CheckCircle2,
    },
    {
      value: '₹100',
      label: 'Flat lifetime key',
      detail: 'No recurring monthly SaaS charges. No commission cuts on customer payments.',
      icon: DollarSign,
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#040604] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header (Matching frame_014.png) */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B100D] border border-white/10 text-xs font-mono text-[#C7FF3D]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF3D]" />
            <span>CASE STUDIES & PRODUCTION RECOVERY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-[#F5F7F4] leading-[1.12]">
            Numbers you do
            <br />
            <span className="font-serif italic font-normal text-[#C7FF3D]">
              not have to explain away.
            </span>
          </h2>

          <p className="text-sm font-mono text-[#626D60]">
            Counted across active mobile retail accounts across Delhi NCR, Bangalore, and Jaipur. An honest average, not a best case.
          </p>
        </div>

        {/* 4 Slim Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="dark-glass rounded-2xl p-6 sm:p-7 border border-[#C7FF3D]/12 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#9BA598] mb-4">
                    <span>METRIC 0{idx + 1}</span>
                    <IconComponent className="w-4 h-4 text-[#C7FF3D]" />
                  </div>

                  <div className="text-4xl sm:text-5xl font-display font-bold text-[#F5F7F4] tracking-tight mb-2">
                    {item.value}
                  </div>

                  <div className="text-base font-semibold text-[#C7FF3D] mb-2 font-display">
                    {item.label}
                  </div>

                  <p className="text-xs text-[#9BA598] leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="w-full bg-white/[0.06] h-[2px] mt-6 rounded-full overflow-hidden">
                  <div className="bg-[#C7FF3D] h-full w-2/3" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Three Concise Statements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/[0.08]">
          <div className="p-6 rounded-2xl bg-[#080D0A] border border-white/[0.06] space-y-2">
            <span className="text-xs font-mono text-[#C7FF3D]">RULE 01</span>
            <h4 className="text-lg font-display font-semibold text-[#F5F7F4] leading-snug">
              Stop customer defaults before the phone leaves your store area.
            </h4>
            <p className="text-xs text-[#9BA598] leading-relaxed">
              Real-time geofencing and instant kiosk clamping prevent customers from disappearing to other states with unpaid devices.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#080D0A] border border-white/[0.06] space-y-2">
            <span className="text-xs font-mono text-[#C7FF3D]">RULE 02</span>
            <h4 className="text-lg font-display font-semibold text-[#F5F7F4] leading-snug">
              Designed specifically for independent offline mobile shop owners.
            </h4>
            <p className="text-xs text-[#9BA598] leading-relaxed">
              No complicated corporate NBFC agreements. You finance the phone on your terms; Kavach enforces the collection.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#080D0A] border border-white/[0.06] space-y-2">
            <span className="text-xs font-mono text-[#C7FF3D]">RULE 03</span>
            <h4 className="text-lg font-display font-semibold text-[#F5F7F4] leading-snug">
              Direct UPI to your account with zero middlemen.
            </h4>
            <p className="text-xs text-[#9BA598] leading-relaxed">
              Customer scans the lock screen QR code and money goes straight into your Google Pay / PhonePe merchant account.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
