import React, { useState, useEffect } from 'react';
import { Shield, Radio, Terminal, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onRequestKeys: () => void;
  onOpenLogin: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestKeys, onOpenLogin }) => {
  const [ping, setPing] = useState(342);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Subtle live ping jitter between 336ms and 348ms to show live telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      setPing(Math.floor(336 + Math.random() * 14));
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled
        ? 'bg-[#0E100D]/95 backdrop-blur-md border-b border-[#23291F]'
        : 'bg-[#0E100D]/80 backdrop-blur-sm border-b border-[#1B2018]'
    }`}>
      {/* Top micro-ticker for defense-grade context */}
      <div className="w-full bg-[#141712] border-b border-[#23291F] px-4 py-1 text-[11px] font-mono flex items-center justify-between text-[#7D8774]">
        <div className="flex items-center gap-3 overflow-hidden whitespace-nowrap">
          <span className="flex items-center gap-1.5 text-[#A3D489]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A3D489] animate-pulse"></span>
            AWS_MUMBAI_NODE_1
          </span>
          <span className="hidden sm:inline text-[#353D2F]">|</span>
          <span className="hidden sm:inline">WSS PROTOCOL: v2.4-STABLE</span>
          <span className="hidden md:inline text-[#353D2F]">|</span>
          <span className="hidden md:inline">ANDROID ENTERPRISE DPC CERTIFIED</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#D8C686] flex items-center gap-1">
            <Radio className="w-3 h-3 text-[#A3D489]" />
            <span className="tracking-wider">LATENCY:</span> {ping}ms
          </span>
          <span className="text-[#353D2F]">|</span>
          <span className="text-[#A3D489]">0 WARNINGS</span>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo and Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 bg-[#1B2018] border border-[#2F591D] flex items-center justify-center transition-colors group-hover:border-[#A3D489] shadow-tactical-sm">
            <Shield className="w-5 h-5 text-[#A3D489] transition-transform duration-200 group-hover:scale-105" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#A3D489]"></div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold tracking-tight text-xl text-[#F0F3ED]">
                KAVACH
              </span>
              <span className="bg-[#2F591D]/40 border border-[#2F591D] px-1.5 py-0.2 text-[11px] font-mono text-[#A3D489] font-medium tracking-wide">
                कवच
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#7D8774] tracking-wider -mt-1 hidden sm:block">
              ENTERPRISE EMI LOCKER
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-mono tracking-wider text-[#A1A1AA]">
          <a href="#simulator" className="hover:text-[#A3D489] transition-colors py-1 flex items-center gap-1.5">
            <span className="text-[#2F591D]">//</span> SIMULATOR
          </a>
          <a href="#the-moat" className="hover:text-[#A3D489] transition-colors py-1 flex items-center gap-1.5">
            <span className="text-[#2F591D]">//</span> THE MOAT
          </a>
          <a href="#workflow" className="hover:text-[#A3D489] transition-colors py-1 flex items-center gap-1.5">
            <span className="text-[#2F591D]">//</span> 60s SETUP
          </a>
          <a href="#hardware-armor" className="hover:text-[#A3D489] transition-colors py-1 flex items-center gap-1.5">
            <span className="text-[#2F591D]">//</span> HARDWARE ARMOR
          </a>
          <a href="#roi-calculator" className="hover:text-[#A3D489] transition-colors py-1 flex items-center gap-1.5">
            <span className="text-[#2F591D]">//</span> ROI CALCULATOR
          </a>
          <a href="#faq" className="hover:text-[#A3D489] transition-colors py-1 flex items-center gap-1.5">
            <span className="text-[#2F591D]">//</span> FAQ
          </a>
        </nav>

        {/* Header CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenLogin}
            className="btn-tactile px-3.5 py-2 text-xs font-mono font-medium text-[#F0F3ED] bg-[#141712] border border-[#23291F] hover:border-[#7D8774] hover:bg-[#1B2018] flex items-center gap-1.5 shadow-tactical-sm cursor-pointer"
          >
            <Terminal className="w-3.5 h-3.5 text-[#D8C686]" />
            <span>DEALER LOGIN</span>
          </button>

          <button
            onClick={onRequestKeys}
            className="btn-tactile relative px-4 py-2 text-xs font-mono font-semibold tracking-wider text-[#0E100D] bg-[#A3D489] hover:bg-[#BEF1A3] border border-[#A3D489] shadow-tactical-green flex items-center gap-1.5 cursor-pointer clip-chamfer-tr"
          >
            <span>GET 10 FREE KEYS</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#F0F3ED] bg-[#141712] border border-[#23291F] hover:border-[#A3D489] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#A3D489]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0E100D] border-b border-[#23291F] px-4 pt-3 pb-6 space-y-3 font-mono text-sm">
          <div className="flex flex-col space-y-2 pt-2 pb-3 border-b border-[#1B2018]">
            <a
              href="#simulator"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F0F3ED] hover:text-[#A3D489] py-2 px-3 bg-[#141712] border border-[#1B2018]"
            >
              [01] LIVE HARDWARE SIMULATOR
            </a>
            <a
              href="#the-moat"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F0F3ED] hover:text-[#A3D489] py-2 px-3 bg-[#141712] border border-[#1B2018]"
            >
              [02] THE MOAT // PLAY PROTECT PROOF
            </a>
            <a
              href="#workflow"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F0F3ED] hover:text-[#A3D489] py-2 px-3 bg-[#141712] border border-[#1B2018]"
            >
              [03] 60-SECOND COUNTER SETUP
            </a>
            <a
              href="#hardware-armor"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F0F3ED] hover:text-[#A3D489] py-2 px-3 bg-[#141712] border border-[#1B2018]"
            >
              [04] HARDWARE ARMOR & ANTI-BYPASS
            </a>
            <a
              href="#roi-calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F0F3ED] hover:text-[#A3D489] py-2 px-3 bg-[#141712] border border-[#1B2018]"
            >
              [05] RETAILER ROI CALCULATOR
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F0F3ED] hover:text-[#A3D489] py-2 px-3 bg-[#141712] border border-[#1B2018]"
            >
              [06] FREQUENTLY ASKED QUESTIONS
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onRequestKeys(); }}
              className="w-full py-3 bg-[#A3D489] text-[#0E100D] font-bold text-center flex items-center justify-center gap-2 shadow-tactical-green"
            >
              REQUEST 10 FREE TEST KEYS
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenLogin(); }}
              className="w-full py-2.5 bg-[#141712] text-[#F0F3ED] border border-[#23291F] text-center"
            >
              DEALER PORTAL LOGIN
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
