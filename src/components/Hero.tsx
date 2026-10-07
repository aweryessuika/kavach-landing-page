import React from 'react';
import { ArrowUpRight, Play, CheckCircle2, Zap, Cpu, Server } from 'lucide-react';
import { HardwareSimulator } from './HardwareSimulator';

interface HeroProps {
  onRequestKeys: () => void;
  onOpenVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestKeys, onOpenVideo }) => {
  return (
    <section className="relative pt-28 pb-12 overflow-hidden border-b border-[#1B2018]">
      {/* Decorative Tactical Background Lines & Dots */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[#141A12]/40 via-[#0E100D]/80 to-[#0E100D] pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#2F591D]/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* System Overline Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#141712] border border-[#23291F] font-mono text-[11px] sm:text-xs text-[#A3D489] tracking-wider mb-6 shadow-tactical-sm">
          <span className="w-2 h-2 bg-[#A3D489] rotate-45"></span>
          <span>// ENTERPRISE DEVICE OWNER INFRASTRUCTURE FOR INDIAN MOBILE RETAILERS</span>
        </div>

        {/* Primary Hero Heading */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F0F3ED] leading-[1.08] max-w-5xl">
          The Only EMI Locker That <br className="hidden sm:inline" />
          <span className="text-[#A3D489] underline decoration-[#2F591D] decoration-wavy decoration-2 underline-offset-8">
            Google Play Protect
          </span>{' '}
          Will Never Flag.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-[#A1A1AA] max-w-3xl leading-relaxed font-sans font-normal">
          Stop risking your shop reputation with shady cracked APKs. Kavach deploys kernel-level
          <strong className="text-[#F0F3ED] font-semibold"> Android Enterprise Device Owner</strong> protection
          via a rapid 60-second QR unboxing setup. Sub-350ms instant remote lock, zero bypass vulnerability, and
          <span className="text-[#D8C686] font-mono font-bold"> ₹100 flat per device key</span>.
        </p>

        {/* Dual High-Impact Action CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <button
            onClick={onRequestKeys}
            className="btn-tactile px-7 py-4 bg-[#A3D489] hover:bg-[#BEF1A3] text-[#0E100D] font-mono text-sm font-bold tracking-wider flex items-center justify-center gap-3 shadow-tactical-green cursor-pointer clip-chamfer-tr"
          >
            <span>[START WITH 10 FREE TEST KEYS]</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <button
            onClick={onOpenVideo}
            className="btn-tactile px-6 py-4 bg-[#141712] hover:bg-[#1B2018] text-[#F0F3ED] border border-[#23291F] hover:border-[#7D8774] font-mono text-xs sm:text-sm font-medium tracking-wider flex items-center justify-center gap-2.5 shadow-tactical-sm cursor-pointer"
          >
            <Play className="w-4 h-4 text-[#D8C686] fill-[#D8C686]" />
            <span>[WATCH 60-SEC UNBOXING SETUP]</span>
          </button>
        </div>

        {/* Tactical Proof Highlights Ribbon */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#1B2018]">
          <div className="flex items-center gap-2.5 font-mono text-xs text-[#A1A1AA]">
            <CheckCircle2 className="w-4 h-4 text-[#A3D489] shrink-0" />
            <span>0 Play Protect Warnings</span>
          </div>
          <div className="flex items-center gap-2.5 font-mono text-xs text-[#A1A1AA]">
            <Zap className="w-4 h-4 text-[#A3D489] shrink-0" />
            <span>Sub-350ms WSS Lock</span>
          </div>
          <div className="flex items-center gap-2.5 font-mono text-xs text-[#A1A1AA]">
            <Cpu className="w-4 h-4 text-[#A3D489] shrink-0" />
            <span>Hardware ADB Disabled</span>
          </div>
          <div className="flex items-center gap-2.5 font-mono text-xs text-[#A1A1AA]">
            <Server className="w-4 h-4 text-[#A3D489] shrink-0" />
            <span>AWS Mumbai LTS Node</span>
          </div>
        </div>

        {/* Embedded Interactive Hardware Simulator Showcase */}
        <div className="mt-12">
          <HardwareSimulator onUnlockTrial={onRequestKeys} />
        </div>
      </div>
    </section>
  );
};
