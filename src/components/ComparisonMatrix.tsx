import React, { useState } from 'react';
import {
  AlertOctagon,
  ShieldCheck,
  Check,
  X,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Info
} from 'lucide-react';
import { COMPARISON_DATA } from '../data/kavachData';

export const ComparisonMatrix: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleRow = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="the-moat" className="py-20 bg-[#0E100D] border-b border-[#1B2018] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A3D489] tracking-wider uppercase mb-2">
            <span className="w-1.5 h-1.5 bg-[#A3D489]"></span>
            <span>// ARCHITECTURAL DISPARITY ANALYSIS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F0F3ED] tracking-tight">
            The Moat: Grey-Market APKs vs. Kavach
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] max-w-3xl font-sans">
            Why 90% of Indian mobile retailers lose money with cheap sideloaded lockers, and how Android Enterprise Device Owner creates an unassailable security barrier.
          </p>
        </div>

        {/* Visual Callout: The Customer Counter Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Legacy Cracked Locker Experience Card */}
          <div className="bg-[#190B07] border-2 border-[#D95A1E]/60 p-5 shadow-tactical-md relative">
            <div className="absolute top-0 right-0 bg-[#D95A1E] text-[#0E100D] font-mono text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">
              LEGACY GREY-MARKET APKs
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#D95A1E]/20 border border-[#D95A1E] flex items-center justify-center shrink-0">
                <AlertOctagon className="w-6 h-6 text-[#D95A1E]" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-[#F0F3ED]">
                  Play Protect Warning Catastrophe
                </h3>
                <span className="font-mono text-xs text-[#D95A1E]">
                  Unverified Sideloaded APKs (Freedom / Cracked DPCs)
                </span>
              </div>
            </div>

            <div className="bg-[#0E100D] border border-[#3E1610] p-4 space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#EF4444] bg-[#EF4444]/10 p-2.5 border border-[#EF4444]/30">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>"Blocked by Play Protect: This app can put your device at risk"</span>
              </div>
              <p className="text-[#A1A1AA] text-xs leading-relaxed font-sans">
                Forces the retailer to tell customers to <span className="text-[#F0F3ED] font-semibold">"Turn off Google Play Protect"</span>.
                Customer immediately suspects phone is second-hand, tampered, or infected with keyloggers.
              </p>
              <div className="pt-2 border-t border-[#231714] text-[11px] text-[#7D8774] flex justify-between">
                <span>VULNERABILITY:</span>
                <span className="text-[#D95A1E]">Strip with PC UnlockTool in 3 mins</span>
              </div>
            </div>
          </div>

          {/* Kavach Android Enterprise Experience Card */}
          <div className="bg-[#121910] border-2 border-[#A3D489]/60 p-5 shadow-tactical-md relative">
            <div className="absolute top-0 right-0 bg-[#A3D489] text-[#0E100D] font-mono text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">
              KAVACH ENTERPRISE DPC
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#2F591D]/40 border border-[#A3D489] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#A3D489]" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-[#F0F3ED]">
                  100% Native Google Play Protect Clean
                </h3>
                <span className="font-mono text-xs text-[#A3D489]">
                  Official Android Enterprise Device Owner via 6-Tap QR
                </span>
              </div>
            </div>

            <div className="bg-[#0E100D] border border-[#23291F] p-4 space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#A3D489] bg-[#2F591D]/20 p-2.5 border border-[#2F591D]">
                <Check className="w-4 h-4 shrink-0" />
                <span>"This device belongs to your organization" (Official Setup)</span>
              </div>
              <p className="text-[#A1A1AA] text-xs leading-relaxed font-sans">
                Zero warnings. Verified Google zero-touch unboxing flow. The customer sees a pristine, brand-new phone setup without any suspicious manual permission overrides.
              </p>
              <div className="pt-2 border-t border-[#1B2018] text-[11px] text-[#7D8774] flex justify-between">
                <span>SECURITY ARCHITECTURE:</span>
                <span className="text-[#A3D489]">Kernel USB Deafening & Direct-Boot DPS</span>
              </div>
            </div>
          </div>
        </div>

        {/* High-Density Tabular Comparison Grid */}
        <div className="border border-[#23291F] bg-[#141712] shadow-tactical-md overflow-hidden">
          {/* Table Header Bar */}
          <div className="grid grid-cols-12 bg-[#1B2018] border-b border-[#23291F] px-4 py-3 font-mono text-xs text-[#7D8774] tracking-wider uppercase font-semibold">
            <div className="col-span-12 md:col-span-4">EVALUATION METRIC</div>
            <div className="hidden md:block md:col-span-4 text-[#D95A1E]">LEGACY GREY-MARKET APKS</div>
            <div className="hidden md:block md:col-span-4 text-[#A3D489]">KAVACH ENTERPRISE DPC</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#23291F]">
            {COMPARISON_DATA.map((item, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <div
                  key={index}
                  className={`transition-colors duration-150 ${
                    isExpanded ? 'bg-[#181D15]' : 'hover:bg-[#161A13]'
                  }`}
                >
                  {/* Row Summary Bar */}
                  <div
                    onClick={() => toggleRow(index)}
                    className="grid grid-cols-12 px-4 py-4 cursor-pointer items-center gap-3 md:gap-0"
                  >
                    {/* Metric Name */}
                    <div className="col-span-12 md:col-span-4 pr-4">
                      <span className="text-[10px] font-mono text-[#D8C686] block tracking-wider">
                        {item.category}
                      </span>
                      <span className="font-display font-bold text-sm sm:text-base text-[#F0F3ED] flex items-center justify-between md:justify-start gap-2">
                        {item.feature}
                        <span className="md:hidden">
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-[#A3D489]" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-[#7D8774]" />
                          )}
                        </span>
                      </span>
                    </div>

                    {/* Legacy APK Status */}
                    <div className="col-span-12 md:col-span-4 pr-4">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-none bg-[#D95A1E]/20 border border-[#D95A1E] flex items-center justify-center shrink-0">
                          <X className="w-3.5 h-3.5 text-[#D95A1E]" />
                        </div>
                        <span className="font-mono text-xs sm:text-sm font-semibold text-[#D95A1E]">
                          {item.legacy.title}
                        </span>
                      </div>
                    </div>

                    {/* Kavach Status */}
                    <div className="col-span-12 md:col-span-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-none bg-[#2F591D]/40 border border-[#A3D489] flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-[#A3D489]" />
                        </div>
                        <span className="font-mono text-xs sm:text-sm font-semibold text-[#A3D489]">
                          {item.kavach.title}
                        </span>
                      </div>
                      <span className="hidden md:block pl-2">
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-[#A3D489]" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-[#7D8774]" />
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Expandable Technical Deep Dive */}
                  {isExpanded && (
                    <div className="px-4 pb-5 pt-2 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-[#1E2419] bg-[#0E100D]/80">
                      <div className="bg-[#140D0B] border border-[#2D1A14] p-3 text-xs font-sans">
                        <div className="font-mono text-[10px] text-[#D95A1E] uppercase tracking-wider mb-1 font-semibold">
                          ⚠️ REALITY AT INDIAN RETAIL COUNTERS:
                        </div>
                        <p className="text-[#A1A1AA] leading-relaxed">
                          {item.legacy.detail}
                        </p>
                      </div>

                      <div className="bg-[#10170E] border border-[#23351C] p-3 text-xs font-sans">
                        <div className="font-mono text-[10px] text-[#A3D489] uppercase tracking-wider mb-1 font-semibold">
                          🛡️ KAVACH KERNEL SOLUTION:
                        </div>
                        <p className="text-[#A1A1AA] leading-relaxed">
                          {item.kavach.detail}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 bg-[#141712] border border-[#23291F] p-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-2 text-[#F0F3ED]">
            <Info className="w-4 h-4 text-[#D8C686] shrink-0" />
            <span>
              Tested across 50,000+ unboxing provisioning cycles in Delhi, Jaipur, Hyderabad & Bangalore.
            </span>
          </div>
          <a
            href="#workflow"
            className="text-[#A3D489] hover:underline flex items-center gap-1 font-semibold"
          >
            <span>See 60-Second Setup Protocol</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
