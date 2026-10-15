import { useEffect, useRef, useState } from 'react';
import { Lock } from 'lucide-react';

export function NetworkEcosystemSection() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [hasEntered, setHasEntered] = useState(false);

  // One-way hardware-accelerated entrance (triggers once and stays locked open — zero scroll jitter)
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasEntered(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* =====================================================================
            PART 1: ONE-WAY SMOOTH ACID-LIME MANIFESTO PANEL (frame_020 -> 021)
           ===================================================================== */}
        <div
          ref={cardRef}
          className="relative mx-auto rounded-[28px] bg-[#C8FF2E] text-[#050705] px-6 py-16 sm:py-24 lg:py-28 overflow-hidden shadow-[0_30px_100px_rgba(200,255,46,0.22)] mb-28 lg:mb-36"
          style={{
            transform: hasEntered
              ? 'translate3d(0, 0px, 0) scale(1)'
              : 'translate3d(0, 32px, 0) scale(0.88)',
            opacity: hasEntered ? 1 : 0,
            transition:
              'transform 820ms cubic-bezier(0.16, 1, 0.3, 1), opacity 620ms cubic-bezier(0.16, 1, 0.3, 1)',
            willChange: 'transform, opacity',
          }}
        >
          {/* Fine dot-matrix texture matching frame_021.png */}
          <div className="absolute inset-0 bg-acid-dots opacity-45 pointer-events-none" />

          <div
            className="relative z-10 max-w-3xl mx-auto text-center space-y-6"
            style={{
              transform: hasEntered
                ? 'translate3d(0, 0px, 0)'
                : 'translate3d(0, 14px, 0)',
              opacity: hasEntered ? 1 : 0,
              transition:
                'transform 750ms cubic-bezier(0.16, 1, 0.3, 1) 120ms, opacity 650ms ease 120ms',
            }}
          >
            <div className="text-[11.5px] font-mono tracking-wider text-[#050705]/65">
              [ what we are actually selling ]
            </div>

            <h2 className="text-[32px] sm:text-[46px] lg:text-[54px] font-display font-bold tracking-[-0.03em] leading-[1.08] text-[#050705]">
              The best protection is the one
              <br />
              <span className="font-serif italic font-normal text-[#050705]/55 mr-2.5">
                nobody notices
              </span>
              until it matters.
            </h2>

            {/* Center Dark Squircle Emblem (Exact match to frame_021.png) */}
            <div className="pt-4 flex justify-center">
              <div className="w-14 h-14 rounded-[18px] bg-[#0B100B] text-[#C8FF2E] flex items-center justify-center shadow-[0_14px_30px_rgba(0,0,0,0.35)] border border-white/10">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="w-6 h-6"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5.5 5.5L10 10L5.5 14.5" />
                  <path d="M10.5 5.5L15 10L10.5 14.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            PART 2: RELIABILITY SECTION ("Quiet in the ways that matter" — frame_022 & 024)
           ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C100C] border border-white/[0.09] text-[11.5px] font-mono text-[#D2D8CE]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF2E]" />
              <span>reliability</span>
            </div>

            <h2 className="text-[36px] sm:text-[48px] lg:text-[54px] font-display font-semibold tracking-[-0.03em] text-[#F4F6F0] leading-[1.06]">
              <span className="font-serif italic font-normal text-[#F4F6F0] mr-2">
                Quiet
              </span>
              in the ways that matter.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[15px] sm:text-[16px] text-[#9CA698] leading-[1.65]">
              Zero red security warnings on the customer’s phone. Zero battery drain. The parts nobody talks about, and the parts that keep your money safe all year.
            </p>
          </div>
        </div>

        {/* Two Side-by-Side Glass Cards (Exact match to frame_024.png) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT CARD: One shield, every brand */}
          <div className="dark-glass rounded-[22px] p-7 sm:p-9 border border-white/[0.08] flex flex-col justify-between">
            <div>
              <h3 className="text-[22px] font-display font-semibold text-[#F4F6F0] mb-2">
                One shield, every phone
              </h3>
              <p className="text-[14.5px] text-[#9CA698] leading-[1.6] mb-7">
                Kavach behaves the exact same way on a budget Redmi as it does on a flagship Samsung or Vivo—without ever triggering Play Protect warnings.
              </p>

              <div className="text-[11.5px] font-mono text-[#6E786B] mb-4">
                one setup flow, every brand
              </div>

              {/* Hub Diagram (Exact match to frame_024.png left card) */}
              <div className="relative h-[190px] w-full flex items-center justify-center">
                {/* Connecting horizontal line behind the central squircle */}
                <div className="absolute left-[14%] right-[14%] top-1/2 -translate-y-1/2 h-[1px] bg-white/[0.12] flex items-center justify-between px-[18%]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF2E] shadow-[0_0_8px_#C8FF2E]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF2E] shadow-[0_0_8px_#C8FF2E]" />
                </div>

                {/* Top Left Brand Node */}
                <div className="absolute left-[22%] top-[14px] flex flex-col items-center gap-1.5">
                  <div className="w-9 h-9 rounded-xl bg-[#121612] border border-white/[0.1] flex items-center justify-center text-[10.5px] font-mono text-[#D2D8CE]">
                    SM
                  </div>
                  <span className="text-[10.5px] font-mono text-[#6E786B]">samsung</span>
                </div>

                {/* Far Left Brand Node */}
                <div className="absolute left-[6%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5">
                  <div className="w-9 h-9 rounded-xl bg-[#121612] border border-white/[0.1] flex items-center justify-center text-[10.5px] font-mono text-[#D2D8CE]">
                    XM
                  </div>
                  <span className="text-[10.5px] font-mono text-[#6E786B]">xiaomi</span>
                </div>

                {/* Central Glowing Lime Squircle — Dead Center */}
                <div className="relative z-10 w-16 h-16 rounded-[18px] bg-[#C8FF2E] text-[#050705] flex items-center justify-center shadow-[0_0_45px_rgba(200,255,46,0.5)]">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="w-7 h-7"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5.5 5.5L10 10L5.5 14.5" />
                    <path d="M10.5 5.5L15 10L10.5 14.5" />
                  </svg>
                </div>

                {/* Top Right Brand Node */}
                <div className="absolute right-[22%] top-[14px] flex flex-col items-center gap-1.5">
                  <div className="w-9 h-9 rounded-xl bg-[#121612] border border-white/[0.1] flex items-center justify-center text-[10.5px] font-mono text-[#D2D8CE]">
                    VV
                  </div>
                  <span className="text-[10.5px] font-mono text-[#6E786B]">vivo</span>
                </div>

                {/* Far Right Brand Node */}
                <div className="absolute right-[6%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5">
                  <div className="w-9 h-9 rounded-xl bg-[#121612] border border-white/[0.1] flex items-center justify-center text-[10.5px] font-mono text-[#D2D8CE]">
                    OP
                  </div>
                  <span className="text-[10.5px] font-mono text-[#6E786B]">oppo</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] text-[11.5px] font-mono text-[#6E786B]">
              anti-reset, sim tracking, offline pin, silent updates
            </div>
          </div>

          {/* RIGHT CARD: Works where your customers live */}
          <div className="dark-glass rounded-[22px] p-7 sm:p-9 border border-white/[0.08] flex flex-col justify-between">
            <div>
              <h3 className="text-[22px] font-display font-semibold text-[#F4F6F0] mb-2">
                Works even without internet
              </h3>
              <p className="text-[14.5px] text-[#9CA698] leading-[1.6] mb-7">
                Lock or unlock over the internet in under a second. And if a customer is in an area with no mobile data, unlock them over a phone call with a one-time PIN.
              </p>

              <div className="text-[11.5px] font-mono text-[#6E786B] mb-5">
                how shop owners control devices, last 24 hours
              </div>

              {/* 3 Progress Rows (Exact match to frame_024.png right card) */}
              <div className="space-y-5 font-mono text-[12px]">
                {/* Row 1 */}
                <div className="grid grid-cols-12 items-center gap-3">
                  <div className="col-span-4">
                    <div className="text-[#F4F6F0]">one-tap live</div>
                    <div className="text-[11px] text-[#6E786B]">Retailer App</div>
                  </div>
                  <div className="col-span-6">
                    <div className="w-full h-2 rounded-full bg-white/[0.06] relative flex items-center">
                      <div
                        className="h-2 rounded-full bg-[#C8FF2E] shadow-[0_0_12px_rgba(200,255,46,0.5)] relative"
                        style={{ width: '64%' }}
                      >
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow" />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 text-right text-[#D2D8CE]">64%</div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-12 items-center gap-3">
                  <div className="col-span-4">
                    <div className="text-[#F4F6F0]">offline pin</div>
                    <div className="text-[11px] text-[#6E786B]">Over phone call</div>
                  </div>
                  <div className="col-span-6">
                    <div className="w-full h-2 rounded-full bg-white/[0.06] relative flex items-center">
                      <div
                        className="h-2 rounded-full bg-white/30 relative"
                        style={{ width: '24%' }}
                      >
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#D2D8CE]" />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 text-right text-[#D2D8CE]">24%</div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-12 items-center gap-3">
                  <div className="col-span-4">
                    <div className="text-[#F4F6F0]">boot shield</div>
                    <div className="text-[11px] text-[#6E786B]">After restart</div>
                  </div>
                  <div className="col-span-6">
                    <div className="w-full h-2 rounded-full bg-white/[0.06] relative flex items-center">
                      <div
                        className="h-2 rounded-full bg-white/30 relative"
                        style={{ width: '12%' }}
                      >
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#D2D8CE]" />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 text-right text-[#D2D8CE]">12%</div>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-white/[0.06] flex items-center gap-2 text-[11.5px] font-mono text-[#6E786B]">
              <Lock className="w-3.5 h-3.5 text-[#9CA698]" />
              <span>every shop account is 100% private and isolated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
