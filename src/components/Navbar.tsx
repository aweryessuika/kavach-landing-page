import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { RETAILER_APP_URL } from '../seo/site';
import { KavachMark } from './KavachMark';

interface NavbarProps {
  onExploreClick?: () => void;
}

const NAV_LINKS = [
  { name: 'How it works', href: '#how-it-works' },
  { name: 'Lock screen', href: '#lock-screen' },
  { name: 'Get your price', href: '#pricing' },
];

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8FF2E]';

export function Navbar({ onExploreClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Solid background once scrolled: a backdrop blur that repaints on every scroll frame
  // is too heavy for the budget Android phones our retailers use.
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-[#050705]/95 border-b border-white/[0.06] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full max-w-[95vw] 2xl:max-w-[1820px] mx-auto px-4 sm:px-7 lg:px-10">
        <div className="flex items-center justify-between gap-6">
          <a href="#" className={`flex items-center gap-2.5 rounded-lg ${focusRing}`}>
            <KavachMark />
            <span className="font-display font-semibold tracking-tight text-[16px] text-[#F4F6F0]">
              Kavach
            </span>
          </a>

          <nav aria-label="Main" className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[13.5px] whitespace-nowrap text-[#9CA698] hover:text-[#F4F6F0] transition-colors duration-150 rounded ${focusRing}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <a
              href="/hi/emi-locker-app"
              hrefLang="hi-IN"
              lang="hi-IN"
              className={`text-[13.5px] text-[#9CA698] hover:text-[#F4F6F0] transition-colors rounded ${focusRing}`}
            >
              हिंदी
            </a>
            <a
              href={RETAILER_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[13.5px] whitespace-nowrap text-[#9CA698] hover:text-[#F4F6F0] transition-colors rounded ${focusRing}`}
            >
              Shop login
            </a>
            <button
              type="button"
              onClick={onExploreClick}
              className={`btn-press px-4 py-2 rounded-full bg-[#C8FF2E] hover:bg-[#D5FF54] text-[#050705] font-semibold text-[13px] whitespace-nowrap ${focusRing}`}
            >
              Start free
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2.5">
            <button
              type="button"
              onClick={onExploreClick}
              className={`btn-press px-3.5 py-1.5 rounded-full bg-[#C8FF2E] text-[#050705] font-semibold text-xs ${focusRing}`}
            >
              Start free
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg bg-white/[0.05] border border-white/10 text-[#F4F6F0] ${focusRing}`}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-5 pb-6 pt-3 border-t border-white/[0.06]">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[15px] text-[#D2D8CE] hover:text-[#F4F6F0] py-2.5 px-2 rounded-lg ${focusRing}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/hi/emi-locker-app"
              hrefLang="hi-IN"
              lang="hi-IN"
              className={`text-[15px] text-[#D2D8CE] hover:text-[#F4F6F0] py-2.5 px-2 rounded-lg ${focusRing}`}
            >
              हिंदी में पढ़ें
            </a>
            <a
              href={RETAILER_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[15px] text-[#D2D8CE] hover:text-[#F4F6F0] py-2.5 px-2 rounded-lg ${focusRing}`}
            >
              Shop login
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
