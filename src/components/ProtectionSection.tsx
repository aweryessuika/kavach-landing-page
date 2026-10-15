import { useState } from 'react';
import { Check, Clock, Pause } from 'lucide-react';

export function ProtectionSection() {
  const [decisionState, setDecisionState] = useState<'pending' | 'locked' | 'held'>('pending');
  const [selectedDay, setSelectedDay] = useState<number>(5); // Saturday highlighted by default like frame_018.png

  const weekBars = [
    { day: 'mon', height: 34, count: '14 paid' },
    { day: 'tue', height: 48, count: '19 paid' },
    { day: 'wed', height: 64, count: '26 paid' },
    { day: 'thu', height: 80, count: '31 paid' },
    { day: 'fri', height: 96, count: '38 paid' },
    { day: 'sat', height: 118, count: '46 paid' },
  ];

  return (
    <section
      id="how-it-works"
      className="relative py-24 lg:py-32 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Top Section Header Split (Matching frame_015.png) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20 lg:mb-28">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C100C] border border-white/[0.09] text-[11.5px] font-mono text-[#D2D8CE]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF2E]" />
              <span>how it works</span>
            </div>

            <h2 className="text-[36px] sm:text-[48px] lg:text-[54px] font-display font-semibold tracking-[-0.03em] text-[#F4F6F0] leading-[1.06]">
              Most of credit recovery is{' '}
              <span className="font-serif italic font-normal text-[#F4F6F0]">
                chasing.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[15px] sm:text-[16px] text-[#9CA698] leading-[1.65]">
              Calling a customer five times. Hearing they will pay tomorrow. Wondering if they already formatted the phone. Kavach takes the chasing away and leaves every decision in your hands.
            </p>
          </div>
        </div>

        {/* =====================================================================
            STORY BEAT 01: Text Left, Horizontal Waterfall Card Right (frame_015.png)
           ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-24 lg:mb-32">
          <div className="lg:col-span-4 space-y-3">
            <div className="text-[12px] font-mono text-[#6E786B]">01</div>
            <h3 className="text-[24px] sm:text-[28px] font-display font-semibold tracking-[-0.02em] text-[#F4F6F0]">
              One scan, ready at the counter
            </h3>
            <p className="text-[14.5px] text-[#9CA698] leading-[1.65]">
              Scan the box barcode, enter the customer’s name, and scan one QR code on the new phone. No computers, no cables, and zero warning popups.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="dark-glass rounded-[22px] p-6 sm:p-8 border border-white/[0.08]">
              {/* Top Row */}
              <div className="flex items-center justify-between text-[12px] font-mono mb-7">
                <span className="text-[#D2D8CE]">enrollment #41982</span>
                <span className="text-[#6E786B]">finished in 48 s</span>
              </div>

              {/* Waterfall Rows (Exact match to frame_015.png) */}
              <div className="space-y-4 font-mono text-[12px]">
                {/* Row 1 */}
                <div className="grid grid-cols-12 items-center gap-3">
                  <div className="col-span-5 sm:col-span-4 flex items-center gap-2.5 text-[#D2D8CE]">
                    <Check className="w-3.5 h-3.5 text-[#9CA698]" />
                    <span className="truncate">scan box barcode</span>
                  </div>
                  <div className="col-span-5 sm:col-span-6 relative h-3 flex items-center">
                    <div
                      className="h-2.5 rounded-sm bg-gradient-to-r from-[#84CC16] to-[#C8FF2E] shadow-[0_0_16px_rgba(200,255,46,0.4)]"
                      style={{ width: '58%' }}
                    />
                  </div>
                  <div className="col-span-2 text-right text-[#6E786B]">28 s</div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-12 items-center gap-3">
                  <div className="col-span-5 sm:col-span-4 flex items-center gap-2.5 text-[#D2D8CE]">
                    <Check className="w-3.5 h-3.5 text-[#9CA698]" />
                    <span className="truncate">customer details</span>
                  </div>
                  <div className="col-span-5 sm:col-span-6 relative h-3 flex items-center">
                    <div
                      className="h-2.5 w-3.5 rounded-sm bg-[#E2E8DF]"
                      style={{ marginLeft: '58%' }}
                    />
                  </div>
                  <div className="col-span-2 text-right text-[#6E786B]">12 s</div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-12 items-center gap-3">
                  <div className="col-span-5 sm:col-span-4 flex items-center gap-2.5 text-[#D2D8CE]">
                    <Check className="w-3.5 h-3.5 text-[#9CA698]" />
                    <span className="truncate">scan 6-tap qr</span>
                  </div>
                  <div className="col-span-5 sm:col-span-6 relative h-3 flex items-center">
                    <div
                      className="h-2.5 w-2 rounded-sm bg-[#E2E8DF]"
                      style={{ marginLeft: '63%' }}
                    />
                  </div>
                  <div className="col-span-2 text-right text-[#6E786B]">8 s</div>
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-12 items-center gap-3">
                  <div className="col-span-5 sm:col-span-4 flex items-center gap-2.5 text-[#6E786B]">
                    <Clock className="w-3.5 h-3.5 text-[#6E786B]" />
                    <span className="truncate">protection active</span>
                  </div>
                  <div className="col-span-5 sm:col-span-6 relative h-3 flex items-center">
                    <div
                      className="h-2.5 w-14 rounded-sm bg-striped-lime border border-[#C8FF2E]/30"
                      style={{ marginLeft: '66%' }}
                    />
                  </div>
                  <div className="col-span-2 text-right text-[#6E786B]">verified</div>
                </div>
              </div>

              {/* Bottom Scale Axis */}
              <div className="grid grid-cols-12 mt-7 pt-4 border-t border-white/[0.05] text-[10.5px] font-mono text-[#5E685B]">
                <div className="col-span-5 sm:col-span-4" />
                <div className="col-span-5 sm:col-span-6 flex justify-between">
                  <span>0</span>
                  <span>15</span>
                  <span>30</span>
                  <span>45</span>
                  <span>60 sec</span>
                </div>
                <div className="col-span-2" />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            STORY BEAT 02: Approval Card Left, Text Right (frame_016 & frame_018)
           ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-24 lg:mb-32">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="dark-glass rounded-[22px] p-6 sm:p-8 border border-white/[0.08]">
              {/* Card Top Header */}
              <div className="flex items-center justify-between text-[12px] font-mono text-[#6E786B] pb-4 mb-5 border-b border-white/[0.06]">
                <span className="text-[#D2D8CE]">#shop-counter</span>
                <span>today</span>
              </div>

              {/* App Brand Row */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-[#C8FF2E] text-[#050705] flex items-center justify-center font-bold text-xs">
                    »
                  </div>
                  <span className="text-[13px] font-semibold text-[#F4F6F0]">
                    Kavach Retailer App
                  </span>
                </div>
                <span className="text-[11.5px] font-mono text-[#6E786B]">09:41</span>
              </div>

              {/* Question Prompt */}
              <p className="text-[14px] text-[#D2D8CE] mb-5">
                Installment of ₹2,400 for Rahul Sharma is past due. Lock handset screen now?
              </p>

              {/* Vertical Lime Bar Details Block (Exact match to frame_018.png) */}
              <div className="border-l-2 border-[#C8FF2E] pl-4 space-y-2 text-[12.5px] font-mono mb-6">
                <div className="grid grid-cols-12">
                  <span className="col-span-4 sm:col-span-3 text-[#6E786B]">amount</span>
                  <span className="col-span-8 sm:col-span-9 text-[#F4F6F0]">₹2,400 INR</span>
                </div>
                <div className="grid grid-cols-12">
                  <span className="col-span-4 sm:col-span-3 text-[#6E786B]">customer</span>
                  <span className="col-span-8 sm:col-span-9 text-[#F4F6F0]">Rahul Sharma · Vivo Y28</span>
                </div>
                <div className="grid grid-cols-12">
                  <span className="col-span-4 sm:col-span-3 text-[#6E786B]">policy</span>
                  <span className="col-span-8 sm:col-span-9 text-[#F4F6F0]">100% manual shop owner control</span>
                </div>
              </div>

              {/* Action Buttons & Status */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setDecisionState('locked')}
                    className={`btn-press px-4 py-2 rounded-lg text-[12.5px] font-semibold flex items-center gap-1.5 transition-all ${
                      decisionState === 'locked'
                        ? 'bg-[#C8FF2E] text-[#050705] shadow-[0_0_20px_rgba(200,255,46,0.4)]'
                        : 'bg-[#C8FF2E] hover:bg-[#D5FF54] text-[#050705]'
                    }`}
                  >
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>{decisionState === 'locked' ? 'Screen Locked' : 'Lock phone'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDecisionState('held')}
                    className={`btn-press px-4 py-2 rounded-lg text-[12.5px] font-medium flex items-center gap-1.5 border transition-colors ${
                      decisionState === 'held'
                        ? 'bg-white/[0.14] border-white/30 text-[#F4F6F0]'
                        : 'bg-white/[0.05] hover:bg-white/[0.09] border-white/[0.1] text-[#D2D8CE]'
                    }`}
                  >
                    <Pause className="w-3 h-3" />
                    <span>{decisionState === 'held' ? 'Kept Unlocked' : 'Hold'}</span>
                  </button>
                </div>

                <span className="text-[11.5px] font-mono text-[#6E786B]">
                  {decisionState === 'pending' && 'waiting on your tap'}
                  {decisionState === 'locked' && 'locked in 280 ms · customer can call you'}
                  {decisionState === 'held' && 'no lock sent · phone stays normal'}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 space-y-3 lg:pl-6">
            <div className="text-[12px] font-mono text-[#6E786B]">02</div>
            <h3 className="text-[24px] sm:text-[28px] font-display font-semibold tracking-[-0.02em] text-[#F4F6F0]">
              Lock or unlock where you already are
            </h3>
            <p className="text-[14.5px] text-[#9CA698] leading-[1.65]">
              Nothing locks automatically behind your back. When a customer delays payment, tap once on your phone to lock theirs—or give a trusted regular a few extra days.
            </p>
          </div>
        </div>

        {/* =====================================================================
            STORY BEAT 03: Text Left, 3D Isometric Column Chart Right (frame_018)
           ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-4 space-y-3">
            <div className="text-[12px] font-mono text-[#6E786B]">03</div>
            <h3 className="text-[24px] sm:text-[28px] font-display font-semibold tracking-[-0.02em] text-[#F4F6F0]">
              Every phone stays on the record
            </h3>
            <p className="text-[14.5px] text-[#9CA698] leading-[1.65]">
              Formatting the phone, swapping SIM cards, or visiting a local repair shop cannot remove Kavach. And if a phone has no internet, unlock it over a call with an offline PIN.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="dark-glass rounded-[22px] p-6 sm:p-8 border border-white/[0.08]">
              {/* Top Metric Header */}
              <div className="flex items-center justify-between text-[12px] font-mono mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-[#6E786B]">payments collected by day</span>
                  <span className="text-[#D2D8CE]">{weekBars[selectedDay].count}</span>
                </div>
                <span className="text-[#C8FF2E]">99.4% on time</span>
              </div>

              {/* 3D Isometric Bars with Floating Diamond Caps (Exact match to frame_018.png) */}
              <div className="grid grid-cols-6 gap-2 sm:gap-5 items-end pt-8 pb-2 h-[220px] px-2 sm:px-6">
                {weekBars.map((bar, idx) => {
                  const isHighlighted = selectedDay === idx;
                  return (
                    <div
                      key={bar.day}
                      onMouseEnter={() => setSelectedDay(idx)}
                      onClick={() => setSelectedDay(idx)}
                      className="flex flex-col items-center justify-end h-full cursor-pointer group"
                    >
                      {/* 3D Isometric Bar SVG */}
                      <div className="relative w-full max-w-[54px] flex flex-col items-center justify-end">
                        <svg
                          viewBox="0 0 60 160"
                          className="w-full overflow-visible"
                          style={{ height: `${bar.height + 42}px` }}
                        >
                          {/* Floating Diamond Cap */}
                          <polygon
                            points="30,4 54,16 30,28 6,16"
                            fill={isHighlighted ? '#D8FF66' : '#D2D8CE'}
                            className="transition-all duration-300 group-hover:-translate-y-1"
                            style={{
                              filter: isHighlighted
                                ? 'drop-shadow(0 0 14px rgba(200, 255, 46, 0.85))'
                                : 'none',
                            }}
                          />

                          {/* Top Face of 3D Pillar */}
                          <polygon
                            points="30,26 54,38 30,50 6,38"
                            fill={isHighlighted ? '#84CC16' : '#2C332C'}
                          />

                          {/* Left Face of 3D Pillar */}
                          <polygon
                            points="6,38 30,50 30,150 6,138"
                            fill={isHighlighted ? '#4D7C0F' : '#1E241E'}
                          />

                          {/* Right Face of 3D Pillar */}
                          <polygon
                            points="30,50 54,38 54,138 30,150"
                            fill={isHighlighted ? '#365314' : '#141814'}
                          />
                        </svg>
                      </div>

                      {/* Day label */}
                      <span
                        className={`mt-3 text-[11.5px] font-mono transition-colors ${
                          isHighlighted ? 'text-[#F4F6F0] font-semibold' : 'text-[#6E786B]'
                        }`}
                      >
                        {bar.day}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
