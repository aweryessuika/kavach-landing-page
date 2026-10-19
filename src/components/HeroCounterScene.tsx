import { useState } from 'react';
import { Lock, PhoneCall, Pause, Unlock } from 'lucide-react';

type PhoneState = 'normal' | 'locked';

// Hero illustration of the one thing Kavach does: the shop owner's tap (left) decides
// what the customer's phone shows (right). Example names only, no live data.
export function HeroCounterScene() {
  const [phone, setPhone] = useState<PhoneState>('normal');
  const [graceGiven, setGraceGiven] = useState(false);

  const lock = () => {
    setPhone('locked');
    setGraceGiven(false);
  };
  const unlock = () => setPhone('normal');
  const giveGrace = () => {
    setPhone('normal');
    setGraceGiven(true);
  };

  return (
    <figure className="relative max-w-[640px] xl:ml-auto">
      <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto] gap-6 sm:gap-8 items-center">
        {/* Shop owner's app */}
        <div className="rounded-[22px] border border-white/[0.1] bg-[#0B0F0B] p-5 sm:p-6 space-y-5">
          <div className="flex items-center justify-between text-[12px] font-mono text-[#6E786B]">
            <span>your kavach app</span>
            <span>customer 1 of 1</span>
          </div>

          <div className="space-y-1">
            <p className="text-[17px] font-semibold text-[#F4F6F0]">Rahul S. · Vivo Y28</p>
            <p className="text-[14px] text-[#9CA698]">
              {phone === 'locked'
                ? 'Phone locked by you. Unlock when he pays.'
                : graceGiven
                  ? 'You gave 2 more days. Phone keeps working.'
                  : 'Kist of ₹2,400 is 3 days late.'}
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {phone === 'locked' ? (
              <button
                type="button"
                onClick={unlock}
                className="btn-press inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#C8FF2E] hover:bg-[#D5FF54] text-[#050705] text-[13.5px] font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8FF2E]"
              >
                <Unlock className="w-4 h-4" aria-hidden="true" />
                Paid, unlock
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={lock}
                  className="btn-press inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#C8FF2E] hover:bg-[#D5FF54] text-[#050705] text-[13.5px] font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8FF2E]"
                >
                  <Lock className="w-4 h-4" aria-hidden="true" />
                  Lock phone
                </button>
                <button
                  type="button"
                  onClick={giveGrace}
                  aria-pressed={graceGiven}
                  className="btn-press inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/[0.14] bg-white/[0.05] hover:bg-white/[0.09] text-[#F4F6F0] text-[13.5px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8FF2E]"
                >
                  <Pause className="w-3.5 h-3.5" aria-hidden="true" />
                  2 din aur do
                </button>
              </>
            )}
          </div>

          <p className="text-[12.5px] text-[#6E786B] border-t border-white/[0.06] pt-4">
            Nothing happens until you tap. Kavach never locks a phone on its own.
          </p>
        </div>

        {/* Customer's phone */}
        <div
          className="mx-auto w-[210px] rounded-[32px] border-[3px] border-white/[0.14] bg-[#060806] p-3.5"
          aria-live="polite"
        >
          <div className="w-12 h-2.5 rounded-full bg-white/[0.08] mx-auto mb-4" aria-hidden="true" />
          <div className="min-h-[300px] flex flex-col">
            {phone === 'locked' ? (
              <div key="locked" className="hero-screen-swap flex-1 flex flex-col text-center gap-3 pt-3">
                <span className="w-10 h-10 rounded-2xl bg-[#C8FF2E]/15 border border-[#C8FF2E]/35 flex items-center justify-center mx-auto text-[#C8FF2E]">
                  <Lock className="w-4 h-4" aria-hidden="true" />
                </span>
                <p className="text-[10.5px] font-mono uppercase tracking-wider text-[#C8FF2E]">Phone locked</p>
                <p className="text-[15px] font-semibold text-[#F4F6F0]">Sharma Mobiles</p>
                <p className="text-[11.5px] text-[#9CA698] leading-relaxed px-1">
                  Your EMI is pending. Call the shop to unlock your phone.
                </p>
                <span className="mt-auto w-full py-2.5 rounded-xl bg-[#C8FF2E] text-[#050705] text-[12px] font-semibold flex items-center justify-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5" aria-hidden="true" />
                  Call shop
                </span>
                <p className="text-[10px] font-mono text-[#6E786B]">Emergency calls always work</p>
              </div>
            ) : (
              <div key="normal" className="hero-screen-swap flex-1 flex flex-col gap-4 pt-2">
                <p className="text-center text-[30px] font-display font-semibold text-[#F4F6F0] leading-none">10:24</p>
                <p className="text-center text-[11px] text-[#9CA698]">Customer’s phone · works normally</p>
                <div className="grid grid-cols-4 gap-2.5 mt-auto" aria-hidden="true">
                  {Array.from({ length: 12 }, (_, i) => (
                    <span key={i} className="aspect-square rounded-[10px] bg-white/[0.08]" />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <figcaption className="mt-5 text-[12px] text-[#6E786B]">
        Example customer. Try the buttons: your tap decides what their phone shows.
      </figcaption>
    </figure>
  );
}
