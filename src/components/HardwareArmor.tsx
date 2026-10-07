import React, { useState } from 'react';
import {
  Shield,
  Usb,
  Clock,
  HardDrive,
  Radio,
  FileCode,
  Terminal,
  Cpu
} from 'lucide-react';
import { SECURITY_MODULES, type SecurityModule } from '../data/kavachData';

export const HardwareArmor: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<SecurityModule>(SECURITY_MODULES[0]);

  // Icons mapping for tactical visual fidelity
  const getIcon = (id: string) => {
    switch (id) {
      case 'adb-firewall':
        return <Usb className="w-5 h-5 text-[#A3D489]" />;
      case 'anti-rollback':
        return <Clock className="w-5 h-5 text-[#A3D489]" />;
      case 'direct-boot':
        return <HardDrive className="w-5 h-5 text-[#A3D489]" />;
      case 'carrier-cgnat':
        return <Radio className="w-5 h-5 text-[#A3D489]" />;
      case 'anti-frida':
        return <Cpu className="w-5 h-5 text-[#A3D489]" />;
      case 'silent-ota':
        return <FileCode className="w-5 h-5 text-[#A3D489]" />;
      default:
        return <Shield className="w-5 h-5 text-[#A3D489]" />;
    }
  };

  return (
    <section id="hardware-armor" className="py-20 bg-[#0E100D] border-b border-[#1B2018] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A3D489] tracking-wider uppercase mb-2">
            <span className="w-1.5 h-1.5 bg-[#A3D489]"></span>
            <span>// KERNEL-LEVEL ANTI-TAMPER SUBSYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F0F3ED] tracking-tight">
            Hardware-Level Security Armor
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] max-w-3xl font-sans">
            Built from scratch to neutralize every known evasion vector used by grey-market mobile repair technicians in Karol Bagh and Jagdish Market.
          </p>
        </div>

        {/* The 6-Card Architectural Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SECURITY_MODULES.map((module) => {
            const isSelected = selectedModule.id === module.id;

            return (
              <div
                key={module.id}
                onClick={() => setSelectedModule(module)}
                className={`p-6 border transition-all duration-150 cursor-pointer relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#182015] border-[#A3D489] shadow-tactical-green'
                    : 'bg-[#141712] border-[#23291F] hover:border-[#3E4D36] hover:bg-[#161B13]'
                }`}
              >
                {/* Tactical Corner Indicator */}
                {isSelected && (
                  <div className="absolute top-0 right-0 w-3 h-3 bg-[#A3D489]"></div>
                )}

                <div>
                  {/* Top Metatag & Highlight */}
                  <div className="flex items-center justify-between font-mono text-xs mb-4">
                    <span className="text-[#7D8774] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-[#A3D489]"></span>
                      {module.tag}
                    </span>
                    <span className="text-[11px] font-semibold text-[#D8C686] bg-[#85763E]/20 px-2 py-0.5 border border-[#85763E]/40">
                      {module.highlight}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="p-2.5 bg-[#1B2018] border border-[#23291F] shrink-0">
                      {getIcon(module.id)}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-[#F0F3ED] leading-snug">
                        {module.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description Body */}
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-sans mt-2 mb-4">
                    {module.description}
                  </p>
                </div>

                {/* Bottom Metric & Tech Spec */}
                <div className="pt-4 border-t border-[#1F271B] mt-auto space-y-2">
                  <div className="flex items-baseline justify-between font-mono">
                    <span className="text-[11px] text-[#7D8774]">{module.metricLabel}</span>
                    <span className="text-lg font-bold text-[#A3D489]">{module.metric}</span>
                  </div>
                  <div className="bg-[#0E100D] p-2 border border-[#1B2018] text-[10px] font-mono text-[#7D8774] truncate">
                    <code>$ {module.techSpec}</code>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Terminal Inspector for the Selected Module */}
        <div className="bg-[#141712] border border-[#23291F] p-6 shadow-tactical-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-[#23291F] gap-2">
            <div className="flex items-center gap-2 font-mono text-xs text-[#F0F3ED]">
              <Terminal className="w-4 h-4 text-[#A3D489]" />
              <span className="font-bold">ARMOR INSPECTOR // {selectedModule.title}</span>
            </div>
            <div className="font-mono text-[11px] text-[#D8C686]">
              PROTECTION STATUS: <strong className="text-[#A3D489]">ENFORCED AT BOOT</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 font-mono text-xs space-y-3">
              <div className="text-[#A1A1AA] leading-relaxed">
                <span className="text-[#A3D489] font-bold">EXPLOIT VECTOR DEFENSE:</span>
                {" "}{selectedModule.description}
              </div>
              <div className="p-3 bg-[#0E100D] border border-[#23291F] text-[#D8C686] overflow-x-auto">
                <code>// KAVACH DPC SYSTEM ENFORCEMENT CALL</code><br />
                <code className="text-[#F0F3ED]">{selectedModule.techSpec}</code>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#1B2018] border border-[#2F591D]/50 p-4 font-mono text-center">
              <div className="text-[10px] text-[#7D8774] uppercase tracking-wider mb-1">
                HARDWARE EFFECTIVENESS
              </div>
              <div className="text-3xl font-display font-bold text-[#A3D489] mb-1">
                {selectedModule.metric}
              </div>
              <div className="text-xs text-[#F0F3ED] font-medium">
                {selectedModule.metricLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
