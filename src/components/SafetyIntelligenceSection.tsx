import { useState } from 'react';
import { Lock, Unlock, KeyRound, ShieldCheck } from 'lucide-react';

type PreviewState = 'locked' | 'offline_pin' | 'unlocked';

const STATES: { id: PreviewState; label: string; icon: typeof Lock; caption: string }[] = [
  {
    id: 'locked',
    label: 'Locked by you',
    icon: Lock,
    caption: 'Your shop name and number on a fully locked screen. Nothing else on the phone works until you unlock it.',
  },
  {
    id: 'offline_pin',
    label: 'No internet unlock',
    icon: KeyRound,
    caption: 'The customer reads you the code from another phone or at your counter. You read back a one time PIN from your app.',
  },
  {
    id: 'unlocked',
    label: 'Paid, normal use',
    icon: Unlock,
    caption: 'While they pay, Kavach stays out of sight. Every app works as usual.',
  },
];

export function SafetyIntelligenceSection() {
  const [phoneState, setPhoneState] = useState<PreviewState>('locked');
  const active = STATES.find((state) => state.id === phoneState) ?? STATES[0];

  return (
    <section id="lock-screen" className="relative py-20 lg:py-28 z-10">
      <div className="w-full max-w-[95vw] 2xl:max-w-[1820px] mx-auto px-4 sm:px-7 lg:px-10">
        <div data-reveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-[34px] sm:text-[44px] lg:text-[50px] font-display font-semibold tracking-[-0.03em] text-[#F4F6F0] leading-[1.08] text-balance">
              Clear when locked.{' '}
              <span className="font-serif italic font-normal">Invisible</span> when paid.
            </h2>

            <p className="text-[15px] sm:text-[16px] text-[#9CA698] leading-[1.65] max-w-[52ch]">
              This is what your customer sees. No scary warnings, no confusion about who to call. Just your shop’s
              name and a way to reach you.
            </p>

            <div className="space-y-3">
              <p className="text-[12px] font-mono text-[#6E786B]" id="lock-preview-label">
                see the customer’s screen:
              </p>
              <div className="flex flex-wrap gap-2.5" role="group" aria-labelledby="lock-preview-label">
                {STATES.map((state) => {
                  const Icon = state.icon;
                  const selected = phoneState === state.id;
                  return (
                    <button
                      key={state.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setPhoneState(state.id)}
                      className={`btn-press px-4 py-2.5 rounded-full text-[13.5px] flex items-center gap-2 border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8FF2E] ${
                        selected
                          ? 'bg-[#C8FF2E] text-[#050705] border-[#C8FF2E] font-semibold'
                          : 'bg-white/[0.04] border-white/[0.12] text-[#D2D8CE] hover:bg-white/[0.08]'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                      {state.label}
                    </button>
                  );
                })}
              </div>
              <p className="text-[14px] text-[#D2D8CE] leading-[1.6] max-w-[52ch] min-h-[3.2em]" aria-live="polite">
                {active.caption}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="w-[260px] rounded-[36px] bg-[#060806] border-[3px] border-white/[0.14] p-4">
              <div className="w-14 h-3 rounded-full bg-white/[0.08] mx-auto mb-4" aria-hidden="true" />

              {phoneState === 'locked' && (
                <div className="py-3 text-center space-y-4">
                  <span className="w-11 h-11 rounded-2xl bg-[#C8FF2E]/15 border border-[#C8FF2E]/35 flex items-center justify-center mx-auto text-[#C8FF2E]">
                    <Lock className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <div className="space-y-1">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-[#C8FF2E]">Phone locked</p>
                    <p className="text-[16px] font-display font-semibold text-[#F4F6F0]">Sharma Mobiles</p>
                    <p className="text-[12px] text-[#9CA698] px-2 leading-relaxed">
                      Your EMI is pending. Please contact the shop to use your phone again.
                    </p>
                  </div>
                  <div className="space-y-2 pt-2">
                    <div className="w-full py-2.5 px-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-[#D2D8CE] text-[11.5px] leading-snug">
                      Contact the shop from another phone
                      <span className="block font-mono text-[#C8FF2E] text-[13px] mt-0.5">98765 43210</span>
                    </div>
                    <span className="block w-full py-2 px-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-[#D2D8CE] text-[11.5px]">
                      Enter unlock PIN
                    </span>
                  </div>
                </div>
              )}

              {phoneState === 'offline_pin' && (
                <div className="py-3 text-center space-y-4">
                  <span className="w-11 h-11 rounded-2xl bg-white/[0.08] border border-white/[0.16] flex items-center justify-center mx-auto text-[#F4F6F0]">
                    <KeyRound className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <div className="space-y-1.5">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-[#9CA698]">No internet needed</p>
                    <p className="text-[12px] text-[#9CA698] px-1">
                      Read this code to the shop on a call:{' '}
                      <span className="text-[#F4F6F0] font-mono">CH-84920</span>
                    </p>
                  </div>
                  <div className="flex justify-center gap-1.5 font-mono text-sm" aria-hidden="true">
                    {['4', '9', '2', '8', '1', '6'].map((digit, i) => (
                      <span
                        key={i}
                        className="w-7 h-9 rounded-lg bg-white/[0.08] border border-[#C8FF2E]/40 flex items-center justify-center text-[#C8FF2E] font-bold"
                      >
                        {digit}
                      </span>
                    ))}
                  </div>
                  <span className="block w-full py-2.5 px-3 rounded-xl bg-[#C8FF2E] text-[#050705] text-[12.5px] font-semibold">
                    Unlock phone
                  </span>
                </div>
              )}

              {phoneState === 'unlocked' && (
                <div className="py-7 text-center space-y-4">
                  <span className="w-12 h-12 rounded-2xl bg-[#C8FF2E]/15 border border-[#C8FF2E]/35 flex items-center justify-center mx-auto text-[#C8FF2E]">
                    <ShieldCheck className="w-6 h-6" aria-hidden="true" />
                  </span>
                  <div className="space-y-1.5">
                    <p className="text-[16px] font-display font-semibold text-[#F4F6F0]">Phone works normally</p>
                    <p className="text-[12px] text-[#9CA698] px-2 leading-relaxed">
                      WhatsApp, YouTube, camera and banking apps all work as usual.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
