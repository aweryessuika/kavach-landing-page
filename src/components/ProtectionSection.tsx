import { ShieldCheck } from 'lucide-react';
import { KAVACH_FACTS } from '../seo/site';

const STEPS = [
  {
    title: 'Scan the box',
    body: 'Scan the IMEI barcode on the phone box and type the customer’s name and number in your Kavach app.',
  },
  {
    title: 'Scan one QR on the new phone',
    body: `Tap the welcome screen six times and scan the QR code. Protection is on in about ${KAVACH_FACTS.averageSetupSeconds} seconds. No computer, no cable.`,
  },
  {
    title: 'Lock only when you decide',
    body: 'Customer stops paying? Tap lock. They pay? Tap unlock. A trusted regular who is two days late keeps their phone.',
  },
];

const REMOVAL_ATTEMPTS = [
  'Factory reset from settings',
  'Recovery mode buttons',
  'USB flashing tools at a repair shop',
  'Swapping the SIM card',
  'Uninstalling the app',
];

export function ProtectionSection() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 z-10">
      <div className="w-full max-w-[95vw] 2xl:max-w-[1820px] mx-auto px-4 sm:px-7 lg:px-10">
        <div data-reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 lg:mb-20">
          <h2 className="lg:col-span-7 text-[36px] sm:text-[48px] lg:text-[54px] font-display font-semibold tracking-[-0.03em] text-[#F4F6F0] leading-[1.06] text-balance">
            Most of credit recovery is{' '}
            <span className="font-serif italic font-normal">chasing.</span>
          </h2>
          <p className="lg:col-span-5 text-[15px] sm:text-[16px] text-[#9CA698] leading-[1.65]">
            Calling a customer five times. Hearing they will pay tomorrow. Wondering if they already formatted the
            phone. Kavach takes the chasing away and leaves every decision with you.
          </p>
        </div>

        <ol data-reveal className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-28 lg:mb-36">
          {STEPS.map((step, index) => (
            <li key={step.title} className="border-t border-white/[0.12] pt-6 space-y-3">
              <span className="font-mono text-[13px] text-[#C8FF2E]">0{index + 1}</span>
              <h3 className="text-[22px] sm:text-[24px] font-display font-semibold tracking-[-0.02em] text-[#F4F6F0]">
                {step.title}
              </h3>
              <p className="text-[15px] text-[#9CA698] leading-[1.65] max-w-[42ch]">{step.body}</p>
            </li>
          ))}
        </ol>

        <div data-reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-[32px] sm:text-[40px] font-display font-semibold tracking-[-0.03em] text-[#F4F6F0] leading-[1.08] text-balance">
              A factory reset will not{' '}
              <span className="font-serif italic font-normal">get them out of it.</span>
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#9CA698] leading-[1.65]">
              Kavach is installed through Android Enterprise during the phone’s very first setup. That is why it
              stays on the phone until you release it at the end of the loan, and why customers never see Play
              Protect warnings.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-[12px] font-mono text-[#6E786B] mb-4">what customers try, and what happens</p>
            <ul className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
              {REMOVAL_ATTEMPTS.map((attempt) => (
                <li key={attempt} className="flex items-center justify-between gap-4 py-4">
                  <span className="text-[15.5px] text-[#D2D8CE]">{attempt}</span>
                  <span className="inline-flex items-center gap-1.5 text-[13px] text-[#9CA698] shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[#C8FF2E]" aria-hidden="true" />
                    Kavach stays
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
