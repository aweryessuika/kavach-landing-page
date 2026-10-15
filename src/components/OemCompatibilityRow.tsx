import { useState } from 'react';

export function OemCompatibilityRow() {
  const [hoveredIdx, setHoveredIdx] = useState<number>(2);

  const brands = [
    { code: 'SM', label: 'samsung' },
    { code: 'XM', label: 'xiaomi' },
    { code: 'VV', label: 'vivo' },
    { code: 'OP', label: 'oppo' },
    { code: 'RM', label: 'realme' },
    { code: 'MT', label: 'motorola' },
    { code: 'IQ', label: 'iqoo' },
    { code: '+', label: '120+ more' },
  ];

  return (
    <section className="relative py-12 lg:py-16 z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="mb-7">
          <span className="text-[12px] font-mono text-[#6E786B] tracking-tight">
            works on every Android brand you sell, right out of the box
          </span>
        </div>

        {/* Connected Squircle Row (Matching frame_007.png & frame_012.png) */}
        <div className="relative flex items-center justify-between gap-3 overflow-x-auto pb-2">
          {/* Subtle dotted horizontal line running behind the squircles */}
          <div
            className="hidden sm:block absolute top-[26px] left-6 right-6 h-[1px] pointer-events-none -z-10"
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
                className="flex flex-col items-center gap-3 min-w-[68px] cursor-default group"
              >
                <div
                  className={`w-[52px] h-[52px] rounded-[15px] flex items-center justify-center font-mono text-[12px] transition-all duration-200 ${
                    isHighlighted
                      ? 'bg-[#1D2614]/90 border border-[#C8FF2E]/40 text-[#C8FF2E] shadow-[0_0_24px_rgba(200,255,46,0.18)]'
                      : 'bg-[#0C100C]/90 border border-white/[0.08] text-[#9CA698] group-hover:border-white/[0.18] group-hover:text-[#F4F6F0]'
                  }`}
                >
                  {item.code}
                </div>
                <span
                  className={`text-[11.5px] font-mono transition-colors ${
                    isHighlighted ? 'text-[#D2D8CE]' : 'text-[#6E786B]'
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
