import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Terminal,
  ArrowUpRight,
  MessageCircle,
  Copy,
  Check,
  Shield
} from 'lucide-react';
import { FAQS } from '../data/kavachData';

interface FaqSectionProps {
  onRequestKeys: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onRequestKeys }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [typedText, setTypedText] = useState<string>('');

  const fullCommand = 'kavach init --shop="Your Store Name" --keys=10 --tier=retailer';

  // Live typing effect simulation for the terminal
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullCommand.length) {
        setTypedText(fullCommand.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 45);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(fullCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="faq" className="py-20 bg-[#0E100D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* FAQ Accordion Section */}
        <div className="mb-20">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A3D489] tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 bg-[#A3D489]"></span>
              <span>// RECOVERY & COMPLIANCE FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F0F3ED] tracking-tight">
              Frequently Asked Technical Questions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] max-w-2xl font-sans">
              Clear, honest answers about Android Enterprise security, factory resets, customer disputes, and telecom compliance.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`border transition-colors duration-150 ${
                    isOpen
                      ? 'bg-[#141712] border-[#A3D489]/60'
                      : 'bg-[#121411] border-[#23291F] hover:border-[#353D2F]'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-display font-bold text-base sm:text-lg text-[#F0F3ED] flex items-center gap-3">
                      <span className="font-mono text-xs text-[#D8C686]">
                        [0{index + 1}]
                      </span>
                      {faq.question}
                    </span>
                    <span className="shrink-0 p-1 bg-[#1B2018] border border-[#23291F] text-[#A3D489]">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#A1A1AA] font-sans leading-relaxed border-t border-[#1B2018]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* HIGH-STAKES TERMINAL DEPLOYMENT CTA */}
        <div className="bg-[#141712] border-2 border-[#A3D489] p-6 sm:p-10 shadow-tactical-green relative overflow-hidden mb-16">
          {/* Subtle watermark */}
          <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-[#A3D489] bg-[#2F591D]/30 border-b border-l border-[#2F591D] uppercase">
            INSTANT DISPATCH NODE
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 font-mono text-xs text-[#D8C686] mb-3">
              <Terminal className="w-4 h-4 text-[#A3D489]" />
              <span>TERMINAL ACTIVATION // NO CREDIT CARD REQUIRED</span>
            </div>

            <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#F0F3ED] tracking-tight leading-tight">
              Ready to Lock In 90%+ EMI Recovery Margins?
            </h3>

            <p className="mt-3 text-xs sm:text-sm text-[#A1A1AA] font-sans max-w-xl">
              Equip your mobile store counter with Android Enterprise immunity today. Get 10 test keys credited immediately.
            </p>

            {/* Interactive Terminal Line */}
            <div className="mt-6 bg-[#0E100D] border border-[#23291F] p-4 font-mono text-xs sm:text-sm flex items-center justify-between gap-2 shadow-inner">
              <div className="flex items-center gap-2 text-[#A3D489] overflow-x-auto">
                <span className="text-[#D8C686]">$</span>
                <span className="text-[#F0F3ED]">{typedText}</span>
                <span className="w-2 h-4 bg-[#A3D489] animate-pulse"></span>
              </div>
              <button
                onClick={handleCopy}
                className="btn-tactile p-2 bg-[#1B2018] border border-[#23291F] text-[#7D8774] hover:text-[#F0F3ED] hover:border-[#7D8774] shrink-0 cursor-pointer"
                title="Copy Command"
              >
                {copied ? <Check className="w-4 h-4 text-[#A3D489]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onRequestKeys}
                className="btn-tactile px-6 py-4 bg-[#A3D489] hover:bg-[#BEF1A3] text-[#0E100D] font-mono text-sm font-bold tracking-wider flex items-center justify-center gap-2 shadow-tactical-green cursor-pointer clip-chamfer-tr"
              >
                <span>[DEPLOY KAVACH TO YOUR STORE]</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <a
                href="https://wa.me/919829041920?text=Hi%20Pranjay,%20I%20run%20a%20mobile%20store%20and%20want%20to%20test%20Kavach%20EMI%20locker%20keys."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile px-6 py-4 bg-[#1B2018] hover:bg-[#23291F] text-[#F0F3ED] border border-[#23291F] hover:border-[#A3D489] font-mono text-xs sm:text-sm font-medium tracking-wider flex items-center justify-center gap-2 shadow-tactical-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>[CHAT WITH FOUNDER ON WHATSAPP]</span>
              </a>
            </div>
          </div>
        </div>

        {/* TACTICAL INDUSTRIAL FOOTER */}
        <footer className="pt-10 border-t border-[#1B2018] font-mono text-xs text-[#7D8774]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Col 1: Brand & Origin */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#A3D489]" />
                <span className="font-display font-bold text-sm text-[#F0F3ED] tracking-wider">
                  KAVACH (कवच)
                </span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Native Android Enterprise Device Owner infrastructure engineered for India's offline retail finance ecosystem.
              </p>
              <div className="text-[10px] text-[#D8C686]">
                DEPLOYED ON AWS LIGHTSAIL MUMBAI
              </div>
            </div>

            {/* Col 2: Architecture */}
            <div className="space-y-2">
              <div className="text-[#F0F3ED] font-semibold uppercase tracking-wider text-[11px]">
                // SUBSYSTEMS
              </div>
              <ul className="space-y-1 text-[11px]">
                <li><a href="#simulator" className="hover:text-[#A3D489]">Hardware Kiosk Simulator</a></li>
                <li><a href="#the-moat" className="hover:text-[#A3D489]">Google Play Protect Defense</a></li>
                <li><a href="#workflow" className="hover:text-[#A3D489]">60-Second Counter Flow</a></li>
                <li><a href="#hardware-armor" className="hover:text-[#A3D489]">Kernel USB Deafening</a></li>
                <li><a href="#roi-calculator" className="hover:text-[#A3D489]">Retailer Loss Calculator</a></li>
              </ul>
            </div>

            {/* Col 3: Compliance & Legal */}
            <div className="space-y-2">
              <div className="text-[#F0F3ED] font-semibold uppercase tracking-wider text-[11px]">
                // TELECOM & REGULATORY
              </div>
              <ul className="space-y-1 text-[11px]">
                <li><span>Emergency 112 Dialing: Enforced</span></li>
                <li><span>TRAI DLT SMS Registered</span></li>
                <li><span>Indian Digital Personal Data Act (DPDP)</span></li>
                <li><span>Device-Protected Storage (DPS) AES-256</span></li>
              </ul>
            </div>

            {/* Col 4: Production Node Telemetry */}
            <div className="space-y-2 bg-[#141712] p-3 border border-[#23291F]">
              <div className="text-[#A3D489] font-bold text-[10px] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A3D489] animate-ping"></span>
                ACTIVE CLUSTER TELEMETRY
              </div>
              <div className="text-[10px] text-[#A1A1AA] space-y-0.5">
                <div>SERVER: 13.205.109.18</div>
                <div>LOCATION: MUMBAI, INDIA</div>
                <div>PROTOCOL: WSS SECURE 443</div>
                <div>LATENCY: 342ms JITTER FREE</div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#1B2018] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
            <div>
              © 2026 KAVACH INFRASTRUCTURE. ALL RIGHTS RESERVED.
            </div>
            <div className="flex items-center gap-4 text-[#A1A1AA]">
              <span>CRAFTED WITH TACTICAL PRECISION</span>
              <span>•</span>
              <a href="#" className="hover:text-[#A3D489]">PRIVACY_POLICY</a>
              <span>•</span>
              <a href="#" className="hover:text-[#A3D489]">TERMS_OF_SERVICE</a>
            </div>
          </div>
        </footer>

      </div>
    </section>
  );
};
