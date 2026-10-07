import React from 'react';
import {
  Server,
  Lock,
  Database,
  MapPin,
  Radio,
  Quote
} from 'lucide-react';
import { TESTIMONIALS } from '../data/kavachData';

export const TrustProof: React.FC = () => {
  return (
    <section className="py-20 bg-[#0E100D] border-b border-[#1B2018] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A3D489] tracking-wider uppercase mb-2">
            <span className="w-1.5 h-1.5 bg-[#A3D489]"></span>
            <span>// BATTLE-TESTED ENTERPRISE INFRASTRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F0F3ED] tracking-tight">
            Production Proof & Trust Architecture
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] max-w-3xl font-sans">
            Engineered to sustain mission-critical recovery operations across India's most challenging retail hardware environments.
          </p>
        </div>

        {/* Live Infrastructure Specification Badges (4 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {/* Badge 1: AWS Mumbai */}
          <div className="bg-[#141712] border border-[#23291F] p-4 flex flex-col justify-between shadow-tactical-sm">
            <div className="flex items-center justify-between mb-3 font-mono text-xs text-[#7D8774]">
              <span className="flex items-center gap-1.5 text-[#A3D489]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A3D489] animate-pulse"></span>
                LIVE CLUSTER
              </span>
              <span>ap-south-1</span>
            </div>
            <div>
              <div className="p-2 w-fit bg-[#1B2018] border border-[#23291F] mb-2 text-[#A3D489]">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-sm text-[#F0F3ED]">
                AWS Mumbai Lightsail LTS
              </h3>
              <p className="text-[11px] font-mono text-[#A1A1AA] mt-1 leading-normal">
                Sub-15ms Indian backbone interconnect to Jio & Airtel cellular gateways.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#1B2018] text-[10px] font-mono text-[#D8C686]">
              NODE: 13.205.109.18 // PM2 CLUSTER
            </div>
          </div>

          {/* Badge 2: End-to-End TLS 1.3 */}
          <div className="bg-[#141712] border border-[#23291F] p-4 flex flex-col justify-between shadow-tactical-sm">
            <div className="flex items-center justify-between mb-3 font-mono text-xs text-[#7D8774]">
              <span className="text-[#A3D489]">ENCRYPTION</span>
              <span>TLS 1.3</span>
            </div>
            <div>
              <div className="p-2 w-fit bg-[#1B2018] border border-[#23291F] mb-2 text-[#A3D489]">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-sm text-[#F0F3ED]">
                Strict End-to-End TLS 1.3
              </h3>
              <p className="text-[11px] font-mono text-[#A1A1AA] mt-1 leading-normal">
                Zero plain-text transmissions. Automated Let's Encrypt renewal with ECDSA certs.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#1B2018] text-[10px] font-mono text-[#D8C686]">
              CIPHER: AES-256-GCM / SHA384
            </div>
          </div>

          {/* Badge 3: Master Admin Control Tower */}
          <div className="bg-[#141712] border border-[#23291F] p-4 flex flex-col justify-between shadow-tactical-sm">
            <div className="flex items-center justify-between mb-3 font-mono text-xs text-[#7D8774]">
              <span className="text-[#A3D489]">TELEMETRY</span>
              <span>SSE STREAM</span>
            </div>
            <div>
              <div className="p-2 w-fit bg-[#1B2018] border border-[#23291F] mb-2 text-[#A3D489]">
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-sm text-[#F0F3ED]">
                Admin Telemetry Tower
              </h3>
              <p className="text-[11px] font-mono text-[#A1A1AA] mt-1 leading-normal">
                Real-time Server-Sent Events (SSE) dispatch for sub-second lock confirmation.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#1B2018] text-[10px] font-mono text-[#D8C686]">
              STATUS: REAL-TIME HANDSHAKE
            </div>
          </div>

          {/* Badge 4: SQLite WAL Mode */}
          <div className="bg-[#141712] border border-[#23291F] p-4 flex flex-col justify-between shadow-tactical-sm">
            <div className="flex items-center justify-between mb-3 font-mono text-xs text-[#7D8774]">
              <span className="text-[#A3D489]">STORAGE</span>
              <span>WAL ENGINE</span>
            </div>
            <div>
              <div className="p-2 w-fit bg-[#1B2018] border border-[#23291F] mb-2 text-[#A3D489]">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-sm text-[#F0F3ED]">
                High-Concurrency SQLite WAL
              </h3>
              <p className="text-[11px] font-mono text-[#A1A1AA] mt-1 leading-normal">
                Write-Ahead Logging guarantees zero corruption during sudden hardware reboots.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#1B2018] text-[10px] font-mono text-[#D8C686]">
              DURABILITY: ACID COMPLIANT
            </div>
          </div>
        </div>

        {/* Indian Retailer Testimonials (From the field) */}
        <div>
          <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#23291F]">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#F0F3ED] uppercase">
              <Quote className="w-4 h-4 text-[#A3D489]" />
              FIELD VOICES // VERIFIED INDIAN MOBILE SHOP OWNERS
            </div>
            <span className="text-[11px] font-mono text-[#7D8774]">
              GENUINE COUNTER FEEDBACK
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#141712] border border-[#23291F] p-6 shadow-tactical-md flex flex-col justify-between relative hover:border-[#353E2E] transition-colors"
              >
                <div>
                  {/* Top Location & Recovery Badge */}
                  <div className="flex items-center justify-between mb-4 font-mono text-[10px]">
                    <span className="text-[#A3D489] bg-[#2F591D]/30 px-2 py-0.5 border border-[#2F591D]">
                      {t.verifiedBadge}
                    </span>
                    <span className="text-[#D8C686] font-bold">
                      {t.recovered}
                    </span>
                  </div>

                  {/* Quote Body */}
                  <p className="text-xs sm:text-sm text-[#F0F3ED] leading-relaxed font-sans italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                {/* Author Credentials Plate */}
                <div className="pt-4 border-t border-[#1B2018] font-mono">
                  <div className="font-display font-bold text-sm text-[#F0F3ED] not-italic">
                    {t.name}
                  </div>
                  <div className="text-[11px] text-[#A1A1AA] truncate">
                    {t.shop}
                  </div>
                  <div className="text-[10px] text-[#7D8774] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#D8C686]" />
                    <span>{t.location} • Volume: {t.volume}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
