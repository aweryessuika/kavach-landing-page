import { Play } from 'lucide-react';
import { CommandCentreHero } from './CommandCentreHero';

interface HeroSectionProps {
  onExploreClick?: () => void;
  onOpenSimulation?: () => void;
}

export function HeroSection({ onExploreClick, onOpenSimulation }: HeroSectionProps) {
  return (
    <section
      id="product"
      className="relative min-h-[88vh] pt-28 pb-12 lg:pt-36 lg:pb-20 flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          {/* Left Column: Editorial Headline & Human Copy (Matching frame_002.png) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Compact mono status pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0B0F0B]/90 border border-white/[0.1] text-[11.5px] font-mono text-[#D2D8CE]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF2E] shadow-[0_0_8px_#C8FF2E]" />
              <span>live across india / 120+ phone models</span>
            </div>

            {/* Main Headline — Warm white sans + Warm white Newsreader italic serif */}
            <h1 className="text-[42px] sm:text-[56px] lg:text-[62px] font-display font-semibold tracking-[-0.03em] text-[#F4F6F0] leading-[1.04]">
              Every phone you sell
              <br />
              <span className="font-serif italic font-normal text-[#F4F6F0] tracking-[-0.01em]">
                comes back paid.
              </span>
            </h1>

            {/* Supporting Copy — Simple, human, zero developer jargon */}
            <p className="text-[15.5px] sm:text-[16.5px] text-[#9CA698] max-w-[440px] leading-[1.6] font-normal">
              Kavach protects every smartphone you sell on credit or EMI, and lets you lock or unlock it with one tap whenever it matters.
            </p>

            {/* Dual CTA Cluster (Matching frame_002.png) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                type="button"
                onClick={onExploreClick}
                className="btn-press px-6 py-3 rounded-full bg-[#C8FF2E] hover:bg-[#D5FF54] text-[#050705] font-semibold text-[13.5px] tracking-tight shadow-[0_0_28px_rgba(200,255,46,0.32)]"
              >
                Start free
              </button>

              <button
                type="button"
                onClick={onOpenSimulation}
                className="btn-press px-5 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] text-[#F4F6F0] font-normal text-[13.5px] flex items-center gap-2.5 backdrop-blur-md"
              >
                <Play className="w-3 h-3 fill-current text-[#F4F6F0]" />
                <span>Try a live lock, 1 minute</span>
              </button>
            </div>

            {/* Micro-line beneath buttons */}
            <div className="pt-1 text-[11.5px] font-mono text-[#6E786B] tracking-tight">
              first 5 phones free / ₹100 per phone / no monthly fees
            </div>
          </div>

          {/* Right Column: 3D Perspective Glass Workflow Canvas */}
          <div className="lg:col-span-7">
            <CommandCentreHero onOpenSimulation={onOpenSimulation} />
          </div>
        </div>
      </div>
    </section>
  );
}
