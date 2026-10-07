export function OemCompatibilityRow() {
  const brands = [
    { code: 'SM', name: 'Samsung Knox', highlight: true },
    { code: 'XI', name: 'Xiaomi / HyperOS', highlight: false },
    { code: 'VV', name: 'Vivo / iQOO', highlight: false },
    { code: 'OP', name: 'Oppo / ColorOS', highlight: false },
    { code: 'RM', name: 'Realme', highlight: false },
    { code: 'MT', name: 'MediaTek Dimensity', highlight: false },
    { code: 'QC', name: 'Qualcomm Snapdragon', highlight: false },
    { code: 'RZ', name: 'Razorpay / UPI', highlight: true },
  ];

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 z-10">
      <div className="text-center sm:text-left mb-6">
        <span className="text-xs font-mono text-[#626D60] tracking-wide">
          connects to every Android OEM chipset, and whatever device you stock
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        {brands.map((b) => (
          <div
            key={b.code}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#090F0B]/80 border border-white/[0.08] hover:border-[#C7FF3D]/30 transition-all duration-200 group cursor-default"
          >
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs transition-colors ${
                b.highlight
                  ? 'bg-[#C7FF3D]/15 text-[#C7FF3D] border border-[#C7FF3D]/30 group-hover:bg-[#C7FF3D] group-hover:text-[#070A08]'
                  : 'bg-white/[0.05] text-[#9BA598] group-hover:text-[#F5F7F4]'
              }`}
            >
              {b.code}
            </div>
            <span className="text-xs font-mono text-[#9BA598] group-hover:text-[#F5F7F4] transition-colors">
              {b.name}
            </span>
          </div>
        ))}

        {/* Counter Badge */}
        <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-[#626D60]">
          <span>+ 28 OEM brands</span>
        </div>
      </div>
    </div>
  );
}
