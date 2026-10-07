import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

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
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Distinctive Acid-Lime Card (Matching frame_010.png and frame_017.png) */}
        <div className="relative rounded-[28px] bg-[#C7FF3D] text-[#070A08] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_30px_90px_rgba(199,255,61,0.3)]">
          {/* Subtle Fine Micro-Dots Overlay */}
          <div className="absolute inset-0 bg-acid-dots opacity-40 pointer-events-none" />

          {/* Decorative Subtle Geometry */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full border-[24px] border-[#070A08]/[0.05] pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            {/* Eyebrow Label */}
            <div className="text-xs font-mono tracking-wider uppercase font-semibold text-[#070A08]/80">
              what now
            </div>

            {/* Headline with High-Contrast Italic Serif on 'hate' */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.05] text-[#070A08]">
              Pick the default you
              <br />
              <span className="font-serif italic font-normal text-[#070A08]">
                hate most.
              </span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#070A08]/85 max-w-xl font-medium leading-relaxed">
              Bring one delinquent customer who has been dodging your calls for weeks. If Kavach cannot lock their handset within 350ms, you pay nothing.
            </p>

            {/* Long Email / Phone Input Pill */}
            {submitted ? (
              <div className="p-4 rounded-2xl bg-[#070A08] text-[#F5F7F4] flex items-center gap-3 max-w-md shadow-xl animate-fade-in">
                <CheckCircle2 className="w-5 h-5 text-[#C7FF3D] shrink-0" />
                <div className="text-xs font-mono">
                  Welcome to Kavach. License credentials generated for <span className="text-[#C7FF3D] font-bold">{contact}</span>. Check your WhatsApp.
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-xl pt-2"
              >
                <div className="relative flex-grow">
                  <input
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Work email or Store WhatsApp number"
                    className="w-full px-5 py-4 rounded-full bg-[#F5F7F4] text-[#070A08] placeholder:text-[#070A08]/50 text-sm font-sans font-medium focus:outline-none focus:ring-2 focus:ring-[#070A08] shadow-inner"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-press px-8 py-4 rounded-full bg-[#070A08] hover:bg-[#121A14] text-[#F5F7F4] font-bold text-sm tracking-tight flex items-center justify-center gap-2 shrink-0 shadow-lg group"
                >
                  <span>Start free</span>
                  <ArrowRight className="w-4 h-4 text-[#C7FF3D] transition-transform duration-150 group-hover:translate-x-1" />
                </button>
              </form>
            )}

            {/* Lower Telemetry Strip (Matching frame_017.png) */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-[#070A08]/75">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#070A08]" />
                all systems normal
              </span>
              <span>·</span>
              <span>99% pass on the first attempt</span>
              <span>·</span>
              <span>zero factory reset bypass</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
