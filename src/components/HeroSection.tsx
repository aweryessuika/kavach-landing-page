import { Play, ArrowRight } from 'lucide-react';
import { CommandCentreHero } from './CommandCentreHero';

interface HeroSectionProps {
  onExploreClick?: () => void;
  onOpenSimulation?: () => void;
}

export function HeroSection({ onExploreClick, onOpenSimulation }: HeroSectionProps) {
  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: High-End Typography & Converting Copy */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            {/* Pill with live pulsing lime dot (matching frame_001.png) */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#0A100C] border border-[#C7FF3D]/25 text-[11px] font-mono text-[#F5F7F4] shadow-[0_0_15px_rgba(199,255,61,0.12)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C7FF3D] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C7FF3D]" />
              </span>
              <span className="tracking-wide">
                live network / 24,000+ smartphones protected
              </span>
            </div>

            {/* Main Headline with High-Contrast Serif Italic Emphasis */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-[#F5F7F4] leading-[1.08]">
              The payments collect
              <br />
              <span className="font-serif italic font-normal text-[#C7FF3D] tracking-normal inline-block mt-1">
                themselves.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#9BA598] max-w-xl leading-relaxed font-normal">
              Kavach turns financed Android phones into self-recovering assets. When an EMI bounces, the device instantly clamps into a tamper-proof kiosk screen before the customer leaves town.
            </p>

            {/* CTA Action Cluster */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary CTA */}
              <button
                onClick={onExploreClick}
                className="btn-press px-6 py-3.5 rounded-full bg-[#C7FF3D] hover:bg-[#D4FF33] text-[#070A08] font-bold text-sm tracking-tight shadow-[0_0_25px_rgba(199,255,61,0.35)] hover:shadow-[0_0_35px_rgba(199,255,61,0.5)] flex items-center gap-2 group"
              >
                <span>Claim Retailer Portal</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA with Play Icon */}
              <button
                onClick={onOpenSimulation}
                className="btn-press px-5 py-3.5 rounded-full bg-[#0B100D]/80 hover:bg-[#121A15] border border-white/10 hover:border-[#C7FF3D]/30 text-[#F5F7F4] font-medium text-sm flex items-center gap-2.5 backdrop-blur-md shadow-lg group"
              >
                <div className="w-6 h-6 rounded-full bg-[#C7FF3D]/15 flex items-center justify-center text-[#C7FF3D] group-hover:bg-[#C7FF3D] group-hover:text-[#070A08] transition-colors duration-200">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>See Lock in Action</span>
              </button>
            </div>

            {/* Micro Validation Note (Matching video sub-note) */}
            <div className="pt-2 flex items-center gap-2 text-xs text-[#626D60] font-mono">
              <span>₹100 flat per device key</span>
              <span>/</span>
              <span>zero recurring cloud cuts</span>
              <span>/</span>
              <span>100% Knox bypass proof</span>
            </div>

            {/* Quick Proof Metrics Row */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-white/[0.06] max-w-lg">
              <div>
                <div className="text-xl font-display font-bold text-[#F5F7F4]">0%</div>
                <div className="text-[11px] font-mono text-[#9BA598]">Factory Reset Bypass</div>
              </div>
              <div>
                <div className="text-xl font-display font-bold text-[#C7FF3D]">&lt; 350ms</div>
                <div className="text-[11px] font-mono text-[#9BA598]">Remote Lock Latency</div>
              </div>
              <div>
                <div className="text-xl font-display font-bold text-[#00F5D4]">₹100</div>
                <div className="text-[11px] font-mono text-[#9BA598]">Flat Lifetime Key</div>
              </div>
            </div>
          </div>

          {/* Right Column: Workflow Node Graph Console */}
          <div className="lg:col-span-6 flex justify-center">
            <CommandCentreHero onOpenSimulation={onOpenSimulation} />
          </div>
        </div>
      </div>
    </section>
  );
}
