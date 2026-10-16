import { useState } from 'react';
import {
  SamsungLogo,
  XiaomiLogo,
  VivoLogo,
  OppoLogo,
  RealmeLogo,
  MotorolaLogo,
  OnePlusLogo,
  AndroidLogo,
} from './BrandLogos';

export function OemCompatibilityRow() {
  const [hoveredIdx, setHoveredIdx] = useState<number>(2);

  const brands = [
    { label: 'samsung', icon: <SamsungLogo className="w-9 h-9" /> },
    { label: 'xiaomi', icon: <XiaomiLogo className="w-5 h-5" /> },
    { label: 'vivo', icon: <VivoLogo className="w-8 h-8" /> },
    { label: 'oppo', icon: <OppoLogo className="w-8 h-8" /> },
    { label: 'realme', icon: <RealmeLogo className="w-5 h-5" /> },
    { label: 'motorola', icon: <MotorolaLogo className="w-6 h-6" /> },
    { label: 'oneplus', icon: <OnePlusLogo className="w-5 h-5" /> },
    { label: '120+ more', icon: <AndroidLogo className="w-6 h-6" /> },
  ];

  return (
    <section className="relative py-12 lg:py-16 z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="mb-7">
          <span className="text-[12px] font-mono text-[#6E786B] tracking-tight">
            works on every Android brand you sell, right out of the box
          </span>
        </div>

        {/* Connected Squircle Row with Official Background-less Brand Vector Logos */}
        <div className="relative flex items-center justify-between gap-3 overflow-x-auto pb-2">
          {/* Subtle dotted horizontal line running behind the squircles */}
          <div
            className="hidden sm:block absolute top-[28px] left-6 right-6 h-[1px] pointer-events-none -z-10"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.12) 2px, transparent 2px)',
              backgroundSize: '10px 1px',
            }}
          />

          {brands.map((item, idx) => {
            const isHighlighted = hoveredIdx === idx;
            return (
              <div
                key={item.label}
                onMouseEnter={() => setHoveredIdx(idx)}
                onClick={() => setHoveredIdx(idx)}
                className="flex flex-col items-center gap-3 min-w-[72px] cursor-pointer group"
              >
                <div
                  className={`w-[56px] h-[56px] rounded-[16px] flex items-center justify-center transition-all duration-200 ${
                    isHighlighted
                      ? 'bg-[#1D2614] border border-[#C8FF2E]/45 text-[#C8FF2E] shadow-[0_0_26px_rgba(200,255,46,0.2)]'
                      : 'bg-[#0C100C] border border-white/[0.08] text-[#A2ACA0] group-hover:border-white/[0.18] group-hover:text-[#F4F6F0]'
                  }`}
                >
                  {item.icon}
                </div>
                <span
                  className={`text-[11.5px] font-mono transition-colors ${
                    isHighlighted ? 'text-[#F4F6F0]' : 'text-[#6E786B]'
                  }`}
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
