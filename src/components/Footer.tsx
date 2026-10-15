export function Footer() {
  return (
    <footer className="relative bg-[#040604] pt-8 pb-12 overflow-hidden text-[#9CA698] z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Top 3-Item Status Bar (Exact match to frame_035.png) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-10 border-b border-white/[0.07] text-[11.5px] font-mono text-[#6E786B]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF2E]" />
            <span>all systems normal</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF2E]" />
            <span>99% setup pass on the first attempt</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF2E]" />
            <span>100% manual shop owner control</span>
          </div>
        </div>

        {/* Middle Navigation Grid (Exact match to frame_035.png) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12 border-b border-white/[0.07]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-[7px] bg-[#C8FF2E] text-[#050705] flex items-center justify-center">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="w-3.5 h-3.5"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5.5 5.5L10 10L5.5 14.5" />
                  <path d="M10.5 5.5L15 10L10.5 14.5" />
                </svg>
              </div>
              <span className="font-display font-semibold text-[15px] text-[#F4F6F0] tracking-tight">
                Kavach Labs
              </span>
            </div>

            <p className="text-[13px] text-[#9CA698] max-w-xs leading-[1.6]">
              Independent, profitable, and built for everyday mobile shops across India.
            </p>

            <p className="text-[11px] font-mono text-[#5E685B] pt-1">
              Play Protect safe / full audit history / Indian data residency
            </p>
          </div>

          {/* 4 Navigation Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 text-[12.5px]">
            <div>
              <span className="font-mono text-[11.5px] text-[#6E786B] block mb-3.5">
                product
              </span>
              <ul className="space-y-2.5 text-[#9CA698]">
                <li>
                  <a href="#product" className="hover:text-[#F4F6F0] transition-colors">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-[#F4F6F0] transition-colors">
                    60s QR Setup
                  </a>
                </li>
                <li>
                  <a href="#daily-view" className="hover:text-[#F4F6F0] transition-colors">
                    Daily View
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-[#F4F6F0] transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-mono text-[11.5px] text-[#6E786B] block mb-3.5">
                features
              </span>
              <ul className="space-y-2.5 text-[#9CA698]">
                <li>
                  <a href="#how-it-works" className="hover:text-[#F4F6F0] transition-colors">
                    Manual Lock
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-[#F4F6F0] transition-colors">
                    Offline PIN
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-[#F4F6F0] transition-colors">
                    Anti-Reset
                  </a>
                </li>
                <li>
                  <a href="#customers" className="hover:text-[#F4F6F0] transition-colors">
                    Shop Stories
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-mono text-[11.5px] text-[#6E786B] block mb-3.5">
                company
              </span>
              <ul className="space-y-2.5 text-[#9CA698]">
                <li>
                  <a href="#customers" className="hover:text-[#F4F6F0] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#customers" className="hover:text-[#F4F6F0] transition-colors">
                    Retailers
                  </a>
                </li>
                <li>
                  <a href="mailto:pranjay@kavachlock.tech" className="hover:text-[#F4F6F0] transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="mailto:pranjay@kavachlock.tech" className="hover:text-[#F4F6F0] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-mono text-[11.5px] text-[#6E786B] block mb-3.5">
                legal
              </span>
              <ul className="space-y-2.5 text-[#9CA698]">
                <li>
                  <a href="#contact" className="hover:text-[#F4F6F0] transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#F4F6F0] transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#F4F6F0] transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal Entity & Inquiry Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] font-mono text-[#6E786B]">
          <p className="text-[#9CA698]">
            © 2026 Kavach Lock Technologies Pvt. Ltd. · Bengaluru, India
          </p>
          <p>
            Inquiries:{' '}
            <a
              href="mailto:pranjay@kavachlock.tech"
              className="text-[#C8FF2E] hover:underline transition-colors"
            >
              pranjay@kavachlock.tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
