import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export function FinalCtaSection() {
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contact.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden z-10">
      <div className="w-full max-w-[95vw] 2xl:max-w-[1820px] mx-auto px-4 sm:px-7 lg:px-10">
        {/* Two-Column Split CTA (Exact match to frame_033.png & frame_035.png) */}
        <div
          data-reveal
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
        >
          {/* LEFT CARD (5 cols): Dark Glass Brand Card with Giant Watermark Chevron */}
          <div className="lg:col-span-5 dark-glass rounded-[26px] p-8 sm:p-10 border border-white/[0.08] relative overflow-hidden flex flex-col justify-between min-h-[320px]">
            {/* Giant Subtle Watermark Double-Chevron (Matching frame_035.png) */}
            <div className="absolute right-[-18px] top-1/2 -translate-y-1/2 w-[210px] h-[210px] text-white/[0.04] pointer-events-none select-none">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full"
              >
                <path d="M6 5L13 12L6 19" />
                <path d="M13 5L20 12L13 19" />
              </svg>
            </div>

            {/* Top Logo */}
            <div className="flex items-center gap-2.5 relative z-10">
              <div className="w-7 h-7 rounded-[9px] bg-[#C8FF2E] text-[#050705] flex items-center justify-center">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="w-4 h-4"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5.5 5.5L10 10L5.5 14.5" />
                  <path d="M10.5 5.5L15 10L10.5 14.5" />
                </svg>
              </div>
              <span className="font-display font-semibold text-[16px] text-[#F4F6F0]">
                Kavach
              </span>
            </div>

            {/* Middle Tagline */}
            <div className="my-8 relative z-10 max-w-[270px]">
              <p className="text-[16px] sm:text-[17px] text-[#D2D8CE] leading-[1.5]">
                Protection for every phone that walks out of your shop on credit.
              </p>
            </div>

            {/* Bottom 'stay in touch' bar */}
            <div className="pt-5 border-t border-white/[0.07] flex items-center justify-between relative z-10">
              <span className="text-[11.5px] font-mono text-[#6E786B]">
                stay in touch
              </span>
              <div className="flex items-center gap-2">
                {[
                  { label: 'em', href: 'mailto:pranjay@kavachlock.tech' },
                  { label: 'wa', href: 'mailto:pranjay@kavachlock.tech' },
                  { label: 'in', href: '#contact' },
                  { label: 'gh', href: 'https://github.com/aweryessuika/kavach-landing-page' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="w-7 h-7 rounded-md bg-white/[0.05] hover:bg-white/[0.11] border border-white/[0.08] flex items-center justify-center text-[10.5px] font-mono text-[#9CA698] hover:text-[#F4F6F0] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CARD (7 cols): Acid-Lime Action Card (Exact match to frame_035.png) */}
          <div className="lg:col-span-7 relative rounded-[26px] bg-[#C8FF2E] text-[#050705] p-8 sm:p-11 overflow-hidden shadow-[0_30px_90px_rgba(200,255,46,0.25)] flex flex-col justify-between min-h-[320px]">
            {/* Fine Dot Matrix Texture */}
            <div className="absolute inset-0 bg-acid-dots opacity-40 pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <div className="text-[11.5px] font-mono text-[#050705]/70">
                what now
              </div>

              <h2 className="text-[32px] sm:text-[42px] font-display font-bold tracking-[-0.03em] leading-[1.08] text-[#050705]">
                Protect the next phone you{' '}
                <span className="font-serif italic font-normal text-[#050705]">
                  sell
                </span>{' '}
                today.
              </h2>

              <p className="text-[14.5px] sm:text-[15.5px] text-[#050705]/80 max-w-lg leading-[1.55]">
                Start with 5 free phone keys. If Kavach does not set up cleanly at your counter in under a minute, we will tell you so.
              </p>
            </div>

            {/* Integrated White Pill Input with Embedded Black Button (Exact match to frame_035.png) */}
            <div className="relative z-10 pt-7">
              {submitted ? (
                <div className="p-4 rounded-2xl bg-[#0A0E0A] text-[#F4F6F0] flex items-center gap-3 shadow-xl">
                  <CheckCircle2 className="w-5 h-5 text-[#C8FF2E] shrink-0" />
                  <div className="text-[12.5px] font-mono">
                    We received <span className="text-[#C8FF2E] font-semibold">{contact}</span>. Your 5 free trial keys are being sent right now.
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="w-full rounded-full bg-[#F4F6F0] p-1.5 pl-5 flex items-center justify-between shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
                >
                  <input
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Phone number or work email"
                    className="w-full bg-transparent text-[#050705] placeholder:text-[#050705]/45 text-[14px] font-sans focus:outline-none pr-3"
                  />
                  <button
                    type="submit"
                    className="btn-press px-6 py-2.5 rounded-full bg-[#0A0E0A] hover:bg-[#171E17] text-[#F4F6F0] font-semibold text-[13px] shrink-0"
                  >
                    Start free
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
