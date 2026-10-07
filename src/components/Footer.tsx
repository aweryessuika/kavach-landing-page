export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030504] border-t border-white/[0.06] pt-16 pb-12 overflow-hidden text-[#9BA598]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Status Strip matching frame_017.png */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-12 border-b border-white/[0.06] text-xs font-mono text-[#626D60]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF3D]" />
            <span className="text-[#9BA598]">all systems normal</span>
          </div>
          <div>99% recovery pass on the first lock attempt</div>
          <div>three AWS availability regions, zero cross-border hops</div>
        </div>

        {/* Middle Navigation Grid matching frame_017.png */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-[#C7FF3D] text-[#070A08] flex items-center justify-center font-bold text-xs">
                »
              </div>
              <span className="font-display font-bold text-lg text-[#F5F7F4] tracking-tight">
                Kavach Labs
              </span>
            </div>
            <p className="text-xs text-[#9BA598] max-w-sm leading-relaxed">
              Independent, profitable, and built specifically for offline Indian mobile retailers.
            </p>
            <p className="text-[11px] font-mono text-[#626D60] pt-1">
              Google Play Protect Certified · ISO 27001 Infrastructure · AWS Lightsail BLR
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono">
            <div>
              <span className="text-[#F5F7F4] font-medium block mb-3">product</span>
              <ul className="space-y-2">
                <li><a href="#system" className="hover:text-[#C7FF3D] transition-colors">DPC Engine</a></li>
                <li><a href="#safety-intelligence" className="hover:text-[#C7FF3D] transition-colors">Kiosk Lock</a></li>
                <li><a href="#how-it-works" className="hover:text-[#C7FF3D] transition-colors">QR Setup</a></li>
                <li><a href="#contact" className="hover:text-[#C7FF3D] transition-colors">₹100 Pricing</a></li>
              </ul>
            </div>

            <div>
              <span className="text-[#F5F7F4] font-medium block mb-3">learn</span>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#C7FF3D] transition-colors">Setup Guide</a></li>
                <li><a href="#" className="hover:text-[#C7FF3D] transition-colors">Knox Whitepaper</a></li>
                <li><a href="#" className="hover:text-[#C7FF3D] transition-colors">Changelog</a></li>
                <li><a href="#" className="hover:text-[#C7FF3D] transition-colors">API Docs</a></li>
              </ul>
            </div>

            <div>
              <span className="text-[#F5F7F4] font-medium block mb-3">company</span>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#C7FF3D] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#C7FF3D] transition-colors">Retailers</a></li>
                <li><a href="#" className="hover:text-[#C7FF3D] transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-[#C7FF3D] transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <span className="text-[#F5F7F4] font-medium block mb-3">legal</span>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#C7FF3D] transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-[#C7FF3D] transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-[#C7FF3D] transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-[#C7FF3D] transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#626D60]">
          <div>© {currentYear} Kavach Labs. All rights reserved.</div>
          <div className="text-[11px]">SOC 2 Type II / Audit Log / Indian Data Residency</div>
        </div>
      </div>
    </footer>
  );
}
