import { useState } from 'react';
import { Check } from 'lucide-react';

interface MetricsTrustSectionProps {
  onExploreClick?: () => void;
}

export function MetricsTrustSection({ onExploreClick }: MetricsTrustSectionProps) {
  const [phoneCount, setPhoneCount] = useState<number>(30);

  const sliderPercent = ((phoneCount - 5) / (200 - 5)) * 100;
  const monthlyTotal = (phoneCount * 100).toLocaleString('en-IN');

  return (
    <section
      id="customers"
      className="relative py-24 lg:py-32 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* =====================================================================
            PART 1: NUMBERS WE DID NOT HAVE TO EXPLAIN AWAY (frame_027.png)
           ===================================================================== */}
        <div
          data-reveal
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16"
        >
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C100C] border border-white/[0.09] text-[11.5px] font-mono text-[#D2D8CE]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF2E]" />
              <span>case studies</span>
            </div>

            <h2 className="text-[36px] sm:text-[48px] lg:text-[54px] font-display font-semibold tracking-[-0.03em] text-[#F4F6F0] leading-[1.06]">
              Numbers we did{' '}
              <span className="font-serif italic font-normal text-[#F4F6F0]">
                not
              </span>{' '}
              have to
              <br />
              explain away.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[15px] sm:text-[16px] text-[#9CA698] leading-[1.65]">
              Counted across active mobile shops in Bengaluru, Delhi NCR, and Jaipur. An honest everyday average, not a best case.
            </p>
          </div>
        </div>

        {/* 3 Giant Minimal Stat Columns (Exact match to frame_014 & frame_027) */}
        <div
          data-reveal
          className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-8 pb-20 border-t border-white/[0.08]"
        >
          {/* Stat 1 */}
          <div className="space-y-3">
            <div className="text-[12px] font-mono text-[#6E786B]">
              counter setup time
            </div>
            <div className="text-[52px] sm:text-[64px] font-display font-semibold tracking-[-0.03em] text-[#F4F6F0] leading-none">
              48s
            </div>
            <div className="pt-4">
              <div className="w-12 h-1.5 rounded-full bg-[#C8FF2E]" />
            </div>
          </div>

          {/* Stat 2 */}
          <div className="space-y-3">
            <div className="text-[12px] font-mono text-[#6E786B]">
              phones lost to reset
            </div>
            <div className="text-[52px] sm:text-[64px] font-display font-semibold tracking-[-0.03em] text-[#F4F6F0] leading-none">
              0
            </div>
            <div className="pt-4">
              <div className="w-3.5 h-1.5 rounded-full bg-[#C8FF2E]" />
            </div>
          </div>

          {/* Stat 3 */}
          <div className="space-y-3">
            <div className="text-[12px] font-mono text-[#6E786B]">
              warning popups
            </div>
            <div className="text-[52px] sm:text-[64px] font-display font-semibold tracking-[-0.03em] text-[#F4F6F0] leading-none">
              0%
            </div>
            <div className="pt-4 flex items-center gap-2">
              <div className="w-full h-1.5 rounded-full bg-white/[0.07]" />
            </div>
          </div>
        </div>

        {/* =====================================================================
            PART 2: 3 SHOP OWNER QUOTES (Exact match to frame_030.png top)
           ===================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-t border-white/[0.07] mb-20">
          <div className="flex flex-col justify-between space-y-6">
            <p className="text-[14.5px] text-[#D2D8CE] leading-[1.65]">
              “Earlier we used a locker that gave scary red Play Protect warnings and customers refused to let us install it. Kavach goes in cleanly in under a minute.”
            </p>
            <div>
              <div className="text-[13.5px] font-semibold text-[#F4F6F0]">
                Rakesh Gupta
              </div>
              <div className="text-[11.5px] font-mono text-[#6E786B] mt-0.5">
                owner, shri balaji telecom · jaipur
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-6">
            <p className="text-[14.5px] text-[#D2D8CE] leading-[1.65]">
              “Customers stopped ignoring our calls on the 5th of the month. One tap from my counter phone, and they call back within ten minutes to clear their EMI.”
            </p>
            <div>
              <div className="text-[13.5px] font-semibold text-[#F4F6F0]">
                Imran Pasha
              </div>
              <div className="text-[11.5px] font-mono text-[#6E786B] mt-0.5">
                founder, cell point · bengaluru
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-6">
            <p className="text-[14.5px] text-[#D2D8CE] leading-[1.65]">
              “What sold me is that it never locks a phone automatically by mistake. I decide who gets two extra days and who gets locked right now.”
            </p>
            <div>
              <div className="text-[13.5px] font-semibold text-[#F4F6F0]">
                Vikramjit Singh
              </div>
              <div className="text-[11.5px] font-mono text-[#6E786B] mt-0.5">
                partner, singh mobile hub · delhi ncr
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            PART 3: INTERACTIVE PRICING SLIDER + 3 TIERS (frame_030 & frame_031)
           ===================================================================== */}
        <div id="pricing" className="pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C100C] border border-white/[0.09] text-[11.5px] font-mono text-[#D2D8CE]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF2E]" />
                <span>pricing</span>
              </div>

              <h2 className="text-[36px] sm:text-[48px] lg:text-[54px] font-display font-semibold tracking-[-0.03em] text-[#F4F6F0] leading-[1.06]">
                You pay per phone, not{' '}
                <span className="font-serif italic font-normal text-[#F4F6F0]">
                  per month.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-[15px] sm:text-[16px] text-[#9CA698] leading-[1.65]">
                No monthly subscription fees. No commission cut on your customer’s installment. You only use a key when you protect a new phone.
              </p>
            </div>
          </div>

          {/* Interactive Slider Estimator Card (Exact match to frame_031.png) */}
          <div className="dark-glass rounded-[24px] p-7 sm:p-10 border border-white/[0.09] mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left 8 Cols: Slider */}
              <div className="lg:col-span-8 lg:pr-8 space-y-6">
                <div className="text-[12px] font-mono text-[#6E786B]">
                  estimate
                </div>

                <div className="text-[20px] sm:text-[22px] font-display font-medium text-[#F4F6F0]">
                  How many phones do you sell on EMI a month?
                </div>

                <div className="pt-2">
                  <input
                    type="range"
                    min={5}
                    max={200}
                    step={5}
                    value={phoneCount}
                    onChange={(e) => setPhoneCount(Number(e.target.value))}
                    className="w-full kavach-slider"
                    style={{
                      background: `linear-gradient(to right, #84CC16 0%, #C8FF2E ${sliderPercent}%, rgba(255,255,255,0.08) ${sliderPercent}%, rgba(255,255,255,0.08) 100%)`,
                      borderRadius: '9999px',
                      height: '8px',
                    }}
                    aria-label="Phones sold on EMI per month"
                  />

                  <div className="flex justify-between text-[12px] font-mono text-[#6E786B] mt-4">
                    <span>5 phones</span>
                    <span className="text-[#F4F6F0] font-semibold">
                      {phoneCount} phones / mo
                    </span>
                    <span>200 phones</span>
                  </div>
                </div>
              </div>

              {/* Right 4 Cols: Live Calculated Plan */}
              <div className="lg:col-span-4 lg:border-l lg:border-white/[0.08] lg:pl-8 space-y-4">
                <div className="text-[12px] font-mono text-[#6E786B]">
                  your cost
                </div>
                <div className="text-[18px] font-display font-medium text-[#D2D8CE]">
                  {phoneCount >= 120 ? 'Multi-Store Fleet' : 'Shop Standard'}
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-[44px] sm:text-[50px] font-display font-bold text-[#F4F6F0] tracking-tight leading-none">
                    ₹{monthlyTotal}
                  </span>
                  <span className="text-[13px] font-mono text-[#6E786B]">
                    total ({phoneCount} keys)
                  </span>
                </div>

                <div className="text-[12px] font-mono text-[#9CA698]">
                  ₹100 flat per phone · first 5 keys free
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onExploreClick}
                    className="btn-press w-full py-3.5 px-6 rounded-full bg-[#C8FF2E] hover:bg-[#D5FF54] text-[#050705] font-semibold text-[13.5px] shadow-[0_0_28px_rgba(200,255,46,0.3)]"
                  >
                    Start free
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Tier Cards Row (Exact match to frame_031.png bottom) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tier 1: Pilot */}
            <div className="dark-glass rounded-[22px] p-7 sm:p-8 border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="text-[15px] font-medium text-[#9CA698] mb-3">
                  Starter Trial
                </div>
                <div className="text-[42px] font-display font-bold text-[#F4F6F0] tracking-tight leading-none mb-2">
                  ₹0
                </div>
                <div className="text-[12px] font-mono text-[#6E786B] mb-7">
                  first 5 phones free
                </div>

                <ul className="space-y-3 text-[13.5px] text-[#9CA698] mb-8">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#9CA698] shrink-0" />
                    <span>5 full phone keys included</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#9CA698] shrink-0" />
                    <span>60-second QR setup at counter</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#9CA698] shrink-0" />
                    <span>100% manual lock &amp; unlock</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#9CA698] shrink-0" />
                    <span>Direct WhatsApp setup help</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={onExploreClick}
                className="btn-press w-full py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.11] border border-white/[0.1] text-[#F4F6F0] text-[13px] font-medium"
              >
                Start free
              </button>
            </div>

            {/* Tier 2: Shop Standard (Most Picked) */}
            <div className="dark-glass rounded-[22px] p-7 sm:p-8 border border-[#C8FF2E]/30 shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(200,255,46,0.08)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[15px] font-medium text-[#D2D8CE]">
                    Shop Standard
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#C8FF2E] text-[#050705] text-[11px] font-mono font-semibold">
                    most picked
                  </span>
                </div>

                <div className="text-[42px] font-display font-bold text-[#F4F6F0] tracking-tight leading-none mb-2">
                  ₹100
                </div>
                <div className="text-[12px] font-mono text-[#6E786B] mb-7">
                  per phone · one time
                </div>

                <ul className="space-y-3 text-[13.5px] text-[#D2D8CE] mb-8">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#C8FF2E] shrink-0" />
                    <span>Covers the entire loan duration</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#C8FF2E] shrink-0" />
                    <span>Works on all Android 10–15 brands</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#C8FF2E] shrink-0" />
                    <span>Offline PIN unlock over phone call</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#C8FF2E] shrink-0" />
                    <span>Zero Play Protect warning popups</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={onExploreClick}
                className="btn-press w-full py-3 rounded-full bg-[#C8FF2E] hover:bg-[#D5FF54] text-[#050705] text-[13.5px] font-semibold shadow-[0_0_24px_rgba(200,255,46,0.3)]"
              >
                Start free
              </button>
            </div>

            {/* Tier 3: Multi-Store / Distributor */}
            <div className="dark-glass rounded-[22px] p-7 sm:p-8 border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="text-[15px] font-medium text-[#9CA698] mb-3">
                  Multi-Store Fleet
                </div>
                <div className="text-[42px] font-display font-bold text-[#F4F6F0] tracking-tight leading-none mb-2">
                  Volume
                </div>
                <div className="text-[12px] font-mono text-[#6E786B] mb-7">
                  for 5+ shops or distributors
                </div>

                <ul className="space-y-3 text-[13.5px] text-[#9CA698] mb-8">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#9CA698] shrink-0" />
                    <span>Shared key wallet across branches</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#9CA698] shrink-0" />
                    <span>Staff logins &amp; full action history</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#9CA698] shrink-0" />
                    <span>Custom shop branding on lock screen</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#9CA698] shrink-0" />
                    <span>Dedicated onboarding manager</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={onExploreClick}
                className="btn-press w-full py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.11] border border-white/[0.1] text-[#F4F6F0] text-[13px] font-medium"
              >
                Talk to us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
