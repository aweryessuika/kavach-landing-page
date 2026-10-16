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
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Product', href: '#product' },
    { name: 'How it works', href: '#how-it-works' },
    { name: 'Daily view', href: '#daily-view' },
    { name: 'Customers', href: '#customers' },
    { name: 'Pricing', href: '#pricing' },
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
          ? 'bg-[#050705]/80 backdrop-blur-xl border-b border-white/[0.06] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full max-w-[95vw] 2xl:max-w-[1820px] mx-auto px-4 sm:px-7 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Left: Minimal Lime Emblem + Wordmark (Matching frame_002.png) */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-7 h-7 rounded-[9px] bg-[#C8FF2E] text-[#050705] flex items-center justify-center shadow-[0_0_18px_rgba(200,255,46,0.35)] transition-transform duration-200 group-hover:scale-105">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="w-4 h-4"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5.5 5.5L10 10L5.5 14.5" />
                <path d="M10.5 5.5L15 10L10.5 14.5" />
              </svg>
            </div>
            <span className="font-display font-semibold tracking-tight text-[16px] text-[#F4F6F0]">
              Kavach
            </span>
          </a>

          {/* Centre Navigation: Quiet, borderless links matching frame_002.png */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[13px] font-normal text-[#9CA698] hover:text-[#F4F6F0] transition-colors duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Status Pill + Start Free CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenSimulation}
              className="btn-press cursor-pointer flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0F0B]/85 border border-white/[0.1] text-[11.5px] font-mono text-[#D2D8D0] hover:border-[#C8FF2E]/35 transition-colors"
              title="Open interactive phone lock preview"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF2E] shadow-[0_0_8px_#C8FF2E]" />
              <span>all systems normal</span>
            </button>

            <button
              type="button"
              onClick={onExploreClick}
              className="btn-press px-4 py-1.5 rounded-full bg-[#C8FF2E] hover:bg-[#D5FF54] text-[#050705] font-semibold text-[12.5px] tracking-tight shadow-[0_0_22px_rgba(200,255,46,0.28)]"
            >
              Start free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2.5">
            <button
              type="button"
              onClick={onExploreClick}
              className="btn-press px-3.5 py-1.5 rounded-full bg-[#C8FF2E] text-[#050705] font-semibold text-xs"
            >
              Start free
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/[0.05] border border-white/10 text-[#F4F6F0]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-5 pb-6 pt-3 bg-[#050705]/95 backdrop-blur-2xl border-b border-white/[0.08]">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-[#9CA698] hover:text-[#F4F6F0] py-2 px-2 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSimulation?.();
              }}
              className="mt-2 w-full py-2.5 px-4 rounded-xl bg-white/[0.06] border border-white/10 text-xs font-mono text-[#F4F6F0] text-left flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF2E]" />
              <span>Try live phone lock preview</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
