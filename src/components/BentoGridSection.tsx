import { useState } from 'react';
import { Clock } from 'lucide-react';

export function BentoGridSection() {
  const [activeSlot, setActiveSlot] = useState<{ day: number; row: number }>({
    day: 1,
    row: 2,
  });

  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const hours = ['09', '11', '13', '15', '17'];

  const slotDetails: Record<string, string> = {
    '1-2': 'Tue 13:15 · Vivo Y28 unlocked by shop owner',
    '0-1': 'Mon 11:00 · 4 new phones enrolled at counter',
    '2-3': 'Wed 15:20 · Samsung A15 locked manually',
    '4-1': 'Fri 11:40 · 6 installments marked paid',
    '5-2': 'Sat 13:05 · Redmi 13C unlocked via offline PIN',
  };

  const activeLabel =
    slotDetails[`${activeSlot.day}-${activeSlot.row}`] ||
    `${days[activeSlot.day].toUpperCase()} ${hours[activeSlot.row]}:00 · All phones normal`;

  return (
    <section
      id="daily-view"
      className="relative py-24 lg:py-32 overflow-hidden z-10"
    >
      <div className="w-full max-w-[95vw] 2xl:max-w-[1820px] mx-auto px-4 sm:px-7 lg:px-10">
        {/* Section Header Split (Matching frame_025.png) */}
        <div
          data-reveal
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16"
        >
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C100C] border border-white/[0.09] text-[11.5px] font-mono text-[#D2D8CE]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF2E]" />
              <span>daily view</span>
            </div>

            <h2 className="text-[36px] sm:text-[48px] lg:text-[54px] font-display font-semibold tracking-[-0.03em] text-[#F4F6F0] leading-[1.06]">
              A{' '}
              <span className="font-serif italic font-normal text-[#F4F6F0]">
                Tuesday,
              </span>{' '}
              seen from Kavach.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[15px] sm:text-[16px] text-[#9CA698] leading-[1.65]">
              The screen shop owners actually keep open: which phones are active, who paid today, and who still owes an answer.
            </p>
          </div>
        </div>

        {/* =====================================================================
            ROW 1: Weekly Matrix Card (8 cols) + Circular Gauge Card (4 cols)
            (Exact match to frame_025.png)
           ===================================================================== */}
        <div
          data-reveal
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6"
        >
          {/* Left 8-Col Card: 'this week, phone by phone' */}
          <div className="lg:col-span-8 dark-glass rounded-[22px] p-6 sm:p-8 border border-white/[0.08]">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-7">
              <span className="text-[12px] font-mono text-[#9CA698]">
                this week, phone by phone
              </span>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#161E12] border border-[#C8FF2E]/25 text-[11px] font-mono text-[#D2D8CE]">
                <Clock className="w-3 h-3 text-[#C8FF2E]" />
                <span>{activeLabel}</span>
              </div>
            </div>

            {/* 7-Day Slot Grid */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Left Hour Axis */}
              <div className="flex flex-col justify-between h-[148px] text-[10.5px] font-mono text-[#5E685B] pr-1">
                {hours.map((h) => (
                  <span key={h}>{h}</span>
                ))}
              </div>

              {/* 7 Day Columns */}
              <div className="flex-1 grid grid-cols-7 gap-2 sm:gap-3">
                {days.map((day, dIdx) => (
                  <div key={day} className="flex flex-col gap-2">
                    {hours.map((_, rIdx) => {
                      const isSelected =
                        activeSlot.day === dIdx && activeSlot.row === rIdx;
                      const isWarm =
                        (dIdx === 1 && rIdx === 2) ||
                        (dIdx === 4 && rIdx === 1) ||
                        (dIdx === 5 && rIdx === 2);

                      return (
                        <button
                          key={rIdx}
                          type="button"
                          onMouseEnter={() =>
                            setActiveSlot({ day: dIdx, row: rIdx })
                          }
                          onClick={() =>
                            setActiveSlot({ day: dIdx, row: rIdx })
                          }
                          className={`h-[23px] w-full rounded-[5px] transition-all duration-150 ${
                            isSelected
                              ? 'bg-[#C8FF2E]/45 border border-[#C8FF2E] shadow-[0_0_14px_rgba(200,255,46,0.35)]'
                              : isWarm
                              ? 'bg-[#31401B]/80 border border-[#C8FF2E]/25 hover:bg-[#C8FF2E]/35'
                              : 'bg-white/[0.06] border border-white/[0.04] hover:bg-white/[0.12]'
                          }`}
                          aria-label={`${day} slot ${rIdx}`}
                        />
                      );
                    })}
                    <span className="text-center text-[11px] font-mono text-[#6E786B] mt-2">
                      {day}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right 4-Col Card: Circular Ring Gauge (Exact match to frame_025.png) */}
          <div className="lg:col-span-4 dark-glass rounded-[22px] p-6 sm:p-8 border border-white/[0.08] flex flex-col justify-between">
            <div className="text-[12px] font-mono text-[#6E786B]">
              paid without a visit
            </div>

            <div className="my-4 flex items-center justify-center">
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                  <circle
                    cx="60"
                    cy="60"
                    r="46"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.08)"
                    strokeWidth="8"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="46"
                    fill="none"
                    stroke="#C8FF2E"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="289"
                    strokeDashoffset="34"
                    style={{
                      filter: 'drop-shadow(0 0 10px rgba(200, 255, 46, 0.55))',
                    }}
                  />
                </svg>
                <span className="absolute text-[26px] font-display font-semibold text-[#F4F6F0] tracking-tight">
                  94%
                </span>
              </div>
            </div>

            <div className="text-[12px] font-mono text-[#6E786B] text-center">
              of installments settle without a single home visit
            </div>
          </div>
        </div>

        {/* =====================================================================
            ROW 2: Three Visual Bento Cards (Exact match to frame_027.png)
           ===================================================================== */}
        <div
          data-reveal
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* CARD 1: Waiting on people (Avatars + '3 approvals') */}
          <div className="dark-glass rounded-[22px] p-6 sm:p-7 border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="text-[12px] font-mono text-[#6E786B] mb-6">
                waiting on your decision
              </div>

              {/* Overlapping Customer Avatars */}
              <div className="flex items-center -space-x-2.5 mb-6">
                {[
                  { initials: 'RS', bg: 'bg-[#1D281A]', text: 'text-[#C8FF2E]' },
                  { initials: 'AK', bg: 'bg-[#182226]', text: 'text-[#38BDF8]' },
                  { initials: 'VP', bg: 'bg-[#221F1A]', text: 'text-[#F4F6F0]' },
                  { initials: 'MK', bg: 'bg-[#1A241E]', text: 'text-[#4ADE80]' },
                  { initials: 'SD', bg: 'bg-[#241D22]', text: 'text-[#D2D8CE]' },
                ].map((av, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full ${av.bg} ${av.text} border-2 border-[#0B0F0B] flex items-center justify-center text-[11px] font-mono font-semibold shadow-md`}
                  >
                    {av.initials}
                  </div>
                ))}
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[28px] font-display font-semibold text-[#C8FF2E]">
                  3
                </span>
                <span className="text-[14px] text-[#9CA698]">
                  late installments
                </span>
              </div>
            </div>

            <div className="text-[12px] text-[#6E786B] pt-3 border-t border-white/[0.05]">
              Tap once in your app to lock or extend grace days
            </div>
          </div>

          {/* CARD 2: Locks and payments (Dual Intertwined Sine Wave from frame_027.png) */}
          <div className="dark-glass rounded-[22px] p-6 sm:p-7 border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="text-[12px] font-mono text-[#6E786B] mb-4">
                locks and recoveries
              </div>

              {/* Dual Intertwined Sine Wave SVG (Exact match to frame_027.png) */}
              <div className="h-[115px] w-full flex items-center justify-center my-2">
                <svg viewBox="0 0 300 90" className="w-full h-full" fill="none">
                  {/* Muted Gray Wave */}
                  <path
                    d="M 10 25 C 60 25, 80 65, 130 65 C 180 65, 200 25, 250 25 C 275 25, 285 38, 295 45"
                    stroke="rgba(255, 255, 255, 0.24)"
                    strokeWidth="1.75"
                  />
                  {/* Luminous Lime Wave */}
                  <path
                    d="M 10 65 C 60 65, 80 25, 130 25 C 180 25, 200 65, 250 65 C 275 65, 285 52, 295 45"
                    stroke="#C8FF2E"
                    strokeWidth="2"
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(200, 255, 46, 0.5))',
                    }}
                  />

                  {/* Glowing Intersection Nodes */}
                  <circle cx="70" cy="45" r="3.5" fill="#0B0F0B" stroke="#C8FF2E" strokeWidth="2" />
                  <circle cx="190" cy="45" r="3.5" fill="#0B0F0B" stroke="#C8FF2E" strokeWidth="2" />
                  <circle cx="292" cy="45" r="3.5" fill="#0B0F0B" stroke="#C8FF2E" strokeWidth="2" />
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-5 text-[11.5px] font-mono pt-3 border-t border-white/[0.05]">
              <span className="flex items-center gap-1.5 text-[#9CA698]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF2E]" />
                paid after lock
              </span>
              <span className="flex items-center gap-1.5 text-[#5E685B]">
                <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                unpaid
              </span>
            </div>
          </div>

          {/* CARD 3: Where it runs (Dot Matrix Map from frame_027.png) */}
          <div className="dark-glass rounded-[22px] p-6 sm:p-7 border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="text-[12px] font-mono text-[#6E786B] mb-4">
                active retail hubs
              </div>

              {/* Dot Matrix Map Graphic */}
              <div className="relative h-[115px] w-full my-2 rounded-xl bg-dot-pattern flex items-center justify-center overflow-hidden">
                {/* Node 1: BLR */}
                <div className="absolute left-[14%] top-[36%] flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0A0E0A]/90 border border-white/[0.12] text-[10.5px] font-mono text-[#F4F6F0] shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#C8FF2E] shadow-[0_0_8px_#C8FF2E]" />
                  <span>blr 46%</span>
                </div>

                {/* Node 2: DEL */}
                <div className="absolute left-[48%] top-[24%] flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0A0E0A]/90 border border-white/[0.12] text-[10.5px] font-mono text-[#F4F6F0] shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#C8FF2E] shadow-[0_0_8px_#C8FF2E]" />
                  <span>del 38%</span>
                </div>

                {/* Node 3: JAI */}
                <div className="absolute right-[10%] bottom-[20%] flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0A0E0A]/90 border border-white/[0.12] text-[10.5px] font-mono text-[#F4F6F0] shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#C8FF2E] shadow-[0_0_8px_#C8FF2E]" />
                  <span>jai 16%</span>
                </div>
              </div>
            </div>

            <div className="text-[12px] text-[#6E786B] pt-3 border-t border-white/[0.05]">
              Hosted in Mumbai · every shop stays 100% isolated
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
