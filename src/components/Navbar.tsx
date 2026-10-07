import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onExploreClick?: () => void;
  onOpenSimulation?: () => void;
}

export function Navbar({ onExploreClick, onOpenSimulation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Product', href: '#system' },
    { name: 'How it works', href: '#how-it-works' },
    { name: 'Lock Kiosk', href: '#safety-intelligence' },
    { name: 'Fleet View', href: '#network-readiness' },
    { name: 'Pricing (₹100)', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050805]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.7)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Brand Mark (matching frame_001.png) */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-xl bg-[#C7FF3D] text-[#070A08] flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(199,255,61,0.4)]">
              »
            </div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold tracking-tight text-lg text-[#F5F7F4]">
                Kavach
              </span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-[#9BA598] border border-white/[0.08]">
                DPC 3.0
              </span>
            </div>
          </a>

          {/* Centre Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#090E0B]/60 border border-white/[0.08] backdrop-blur-md px-3 py-1.5 rounded-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-medium text-[#9BA598] hover:text-[#F5F7F4] px-3.5 py-1.5 rounded-full transition-colors duration-150 hover:bg-white/[0.04]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Status Pill + Primary Button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Status Pill matching frame_001.png: '● all systems normal' */}
            <div
              onClick={onOpenSimulation}
              role="button"
              tabIndex={0}
              className="cursor-pointer flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#090F0C]/80 border border-white/[0.08] text-[11px] font-mono text-[#9BA598] hover:border-[#C7FF3D]/40 transition-all duration-150"
              title="Click to trigger device lock simulation"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C7FF3D] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C7FF3D]" />
              </span>
              <span>all systems normal</span>
            </div>

            {/* Primary Button matching frame_001.png: 'Start free' */}
            <button
              onClick={onExploreClick}
              className="btn-press relative px-5 py-2 rounded-full bg-[#C7FF3D] hover:bg-[#D4FF33] text-[#070A08] font-bold text-xs tracking-tight shadow-[0_0_20px_rgba(199,255,61,0.3)] hover:shadow-[0_0_28px_rgba(199,255,61,0.5)] flex items-center gap-1 group"
            >
              <span>Start free</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onExploreClick}
              className="btn-press px-3.5 py-1.5 rounded-full bg-[#C7FF3D] text-[#070A08] font-bold text-xs"
            >
              Start free
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0B100D] border border-white/10 text-[#F5F7F4]"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pb-6 pt-2 bg-[#050805]/95 backdrop-blur-2xl border-b border-white/[0.1]">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-[#9BA598] hover:text-[#C7FF3D] py-2 px-3 rounded-lg hover:bg-white/[0.04]"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSimulation?.();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-white/[0.06] border border-white/10 text-xs font-mono text-[#F5F7F4]"
              >
                Simulate Remote Lock
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
