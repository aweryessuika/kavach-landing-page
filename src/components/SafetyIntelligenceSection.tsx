import { useState } from 'react';
import { Lock, Unlock, PhoneCall, KeyRound, ShieldCheck } from 'lucide-react';

export function SafetyIntelligenceSection() {
  const [phoneState, setPhoneState] = useState<'locked' | 'unlocked' | 'offline_pin'>('locked');

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Clean Human Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C100C] border border-white/[0.09] text-[11.5px] font-mono text-[#D2D8CE]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF2E]" />
              <span>on the customer’s screen</span>
            </div>

            <h2 className="text-[34px] sm:text-[44px] lg:text-[50px] font-display font-semibold tracking-[-0.03em] text-[#F4F6F0] leading-[1.08]">
              Clear when locked.{' '}
              <span className="font-serif italic font-normal text-[#F4F6F0]">
                Invisible
              </span>{' '}
              when paid.
            </h2>

            <p className="text-[15px] sm:text-[16px] text-[#9CA698] leading-[1.65]">
              While a customer is paying on time, they never see Kavach. If you lock the phone, their screen calmly shows your shop name, a button to call you directly, and an offline unlock PIN option.
            </p>

            {/* Interactive State Switcher */}
            <div className="pt-2 space-y-2.5">
              <div className="text-[11.5px] font-mono text-[#6E786B]">
                click to preview the customer handset:
              </div>
              <div className="flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={() => setPhoneState('locked')}
                  className={`btn-press px-4 py-2.5 rounded-xl text-[12.5px] font-medium flex items-center gap-2 border transition-all ${
                    phoneState === 'locked'
                      ? 'bg-[#C8FF2E] text-[#050705] border-[#C8FF2E] font-semibold shadow-[0_0_20px_rgba(200,255,46,0.3)]'
                      : 'bg-white/[0.04] border-white/[0.1] text-[#D2D8CE] hover:bg-white/[0.08]'
                  }`}
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Locked by Shop</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPhoneState('offline_pin')}
                  className={`btn-press px-4 py-2.5 rounded-xl text-[12.5px] font-medium flex items-center gap-2 border transition-all ${
                    phoneState === 'offline_pin'
                      ? 'bg-[#C8FF2E] text-[#050705] border-[#C8FF2E] font-semibold shadow-[0_0_20px_rgba(200,255,46,0.3)]'
                      : 'bg-white/[0.04] border-white/[0.1] text-[#D2D8CE] hover:bg-white/[0.08]'
                  }`}
                >
                  <KeyRound className="w-3.5 h-3.5" />
                  <span>Offline PIN Unlock</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPhoneState('unlocked')}
                  className={`btn-press px-4 py-2.5 rounded-xl text-[12.5px] font-medium flex items-center gap-2 border transition-all ${
                    phoneState === 'unlocked'
                      ? 'bg-[#C8FF2E] text-[#050705] border-[#C8FF2E] font-semibold shadow-[0_0_20px_rgba(200,255,46,0.3)]'
                      : 'bg-white/[0.04] border-white/[0.1] text-[#D2D8CE] hover:bg-white/[0.08]'
                  }`}
                >
                  <Unlock className="w-3.5 h-3.5" />
                  <span>Normal Everyday Use</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Handset & Retailer Pair Card */}
          <div className="lg:col-span-7">
            <div className="dark-glass rounded-[24px] p-6 sm:p-9 border border-white/[0.08] grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
              {/* Phone Preview Frame (Span 6) */}
              <div className="sm:col-span-6 flex justify-center">
                <div className="w-[248px] rounded-[34px] bg-[#060806] border-[3px] border-white/[0.14] p-4 shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
                  {/* Top Speaker Pill */}
                  <div className="w-14 h-3 rounded-full bg-white/[0.08] mx-auto mb-4" />

                  {phoneState === 'locked' && (
                    <div className="py-3 text-center space-y-4">
                      <div className="w-11 h-11 rounded-2xl bg-[#C8FF2E]/15 border border-[#C8FF2E]/35 flex items-center justify-center mx-auto text-[#C8FF2E]">
                        <Lock className="w-5 h-5" />
                      </div>

                      <div className="space-y-1">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-[#C8FF2E]">
                          Device Temporarily Locked
                        </div>
                        <div className="text-[15px] font-display font-semibold text-[#F4F6F0]">
                          Sri Balaji Mobiles
                        </div>
                        <p className="text-[11.5px] text-[#9CA698] px-2 leading-relaxed">
                          Your monthly installment is pending. Please contact the shop to restore phone access.
                        </p>
                      </div>

                      <div className="space-y-2 pt-2">
                        <div className="w-full py-2.5 px-3 rounded-xl bg-[#C8FF2E] text-[#050705] text-[12px] font-semibold flex items-center justify-center gap-2">
                          <PhoneCall className="w-3.5 h-3.5" />
                          <span>Call Shop Owner</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setPhoneState('offline_pin')}
                          className="w-full py-2 px-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-[#D2D8CE] text-[11px] font-mono"
                        >
                          Enter Offline Unlock PIN
                        </button>
                      </div>

                      <div className="text-[10px] font-mono text-[#5E685B] pt-1">
                        Emergency 112 calling is always active
                      </div>
                    </div>
                  )}

                  {phoneState === 'offline_pin' && (
                    <div className="py-3 text-center space-y-4">
                      <div className="w-11 h-11 rounded-2xl bg-[#38BDF8]/15 border border-[#38BDF8]/35 flex items-center justify-center mx-auto text-[#38BDF8]">
                        <KeyRound className="w-5 h-5" />
                      </div>

                      <div className="space-y-1">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-[#38BDF8]">
                          No Internet Needed
                        </div>
                        <div className="text-[15px] font-display font-semibold text-[#F4F6F0]">
                          Offline PIN Unlock
                        </div>
                        <p className="text-[11px] text-[#9CA698] px-1">
                          Read Challenge Code <span className="text-[#F4F6F0] font-mono">849-201</span> to shop owner over phone call:
                        </p>
                      </div>

                      <div className="flex justify-center gap-1.5 font-mono text-sm">
                        {['4', '9', '2', '8', '1', '6'].map((digit, i) => (
                          <span
                            key={i}
                            className="w-7 h-9 rounded-lg bg-white/[0.08] border border-[#C8FF2E]/40 flex items-center justify-center text-[#C8FF2E] font-bold"
                          >
                            {digit}
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => setPhoneState('unlocked')}
                        className="w-full py-2.5 px-3 rounded-xl bg-[#C8FF2E] text-[#050705] text-[12px] font-semibold"
                      >
                        Verify &amp; Unlock Phone
                      </button>
                    </div>
                  )}

                  {phoneState === 'unlocked' && (
                    <div className="py-7 text-center space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#C8FF2E]/20 border border-[#C8FF2E]/40 flex items-center justify-center mx-auto text-[#C8FF2E]">
                        <ShieldCheck className="w-6 h-6" />
                      </div>

                      <div className="space-y-1.5">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-[#C8FF2E]">
                          All Apps Active
                        </div>
                        <div className="text-[16px] font-display font-semibold text-[#F4F6F0]">
                          Phone Unlocked
                        </div>
                        <p className="text-[11.5px] text-[#9CA698] px-2 leading-relaxed">
                          Customer uses WhatsApp, YouTube, Camera, and Banking normally with zero slowdowns.
                        </p>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.07] text-[10.5px] font-mono text-[#9CA698]">
                        Protected quietly in the background
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Explanation Details (Span 6) */}
              <div className="sm:col-span-6 space-y-5">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1.5">
                  <div className="text-[13.5px] font-semibold text-[#F4F6F0]">
                    100% Manual Shop Control
                  </div>
                  <p className="text-[12.5px] text-[#9CA698] leading-relaxed">
                    Phones never lock on an automated timer. You know your customers best—so only your tap locks or unlocks a handset.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1.5">
                  <div className="text-[13.5px] font-semibold text-[#F4F6F0]">
                    Cannot Be Formatted Away
                  </div>
                  <p className="text-[12.5px] text-[#9CA698] leading-relaxed">
                    Hard reset buttons, USB computer cables, and settings menus are blocked from removing your protection until you release the phone.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1.5">
                  <div className="text-[13.5px] font-semibold text-[#F4F6F0]">
                    Works Without Internet
                  </div>
                  <p className="text-[12.5px] text-[#9CA698] leading-relaxed">
                    If a locked phone has no mobile data, your app generates a one-time PIN you can read to the customer over a regular phone call.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
