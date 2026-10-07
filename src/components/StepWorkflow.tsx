import React, { useState, useEffect } from 'react';
import {
  Scan,
  QrCode,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Clock,
  Check
} from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/kavachData';

export const StepWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [autoPlay, setAutoPlay] = useState<boolean>(false);

  // Auto-advance step if autoplay is enabled
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % WORKFLOW_STEPS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const currentStep = WORKFLOW_STEPS[activeStep];

  return (
    <section id="workflow" className="py-20 bg-[#121411] border-b border-[#1B2018] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A3D489] tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 bg-[#A3D489]"></span>
              <span>// RAPID COUNTER PROVISIONING PROTOCOL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F0F3ED] tracking-tight">
              The 60-Second Counter Workflow
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] max-w-2xl font-sans">
              Designed specifically for fast-paced Indian retail counters on Dhanteras, Diwali, or busy weekend evenings. Zero customer waiting, zero friction.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className={`btn-tactile px-3 py-1.5 font-mono text-xs border flex items-center gap-2 cursor-pointer ${
                autoPlay
                  ? 'bg-[#2F591D] border-[#A3D489] text-[#A3D489]'
                  : 'bg-[#141712] border-[#23291F] text-[#7D8774] hover:text-[#F0F3ED]'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${autoPlay ? 'bg-[#A3D489] animate-ping' : 'bg-[#7D8774]'}`}></span>
              <span>{autoPlay ? 'AUTO-PLAYING PROTOCOL' : 'AUTOPLAY DEMO'}</span>
            </button>
          </div>
        </div>

        {/* Horizontal Step Selector Sequencer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {WORKFLOW_STEPS.map((step, idx) => {
            const isCurrent = activeStep === idx;
            const isCompleted = activeStep > idx;

            return (
              <button
                key={idx}
                onClick={() => {
                  setAutoPlay(false);
                  setActiveStep(idx);
                }}
                className={`btn-tactile text-left p-4 border transition-all duration-150 relative cursor-pointer ${
                  isCurrent
                    ? 'bg-[#1B2018] border-[#A3D489] shadow-tactical-green'
                    : isCompleted
                    ? 'bg-[#141712] border-[#2F591D]/60 text-[#A1A1AA]'
                    : 'bg-[#0E100D] border-[#23291F] text-[#7D8774] hover:border-[#353D2F]'
                }`}
              >
                {/* Active Indicator Top Notch */}
                {isCurrent && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#A3D489]"></div>
                )}

                <div className="flex items-center justify-between font-mono text-xs mb-2">
                  <span className={`font-bold ${isCurrent ? 'text-[#A3D489]' : 'text-[#7D8774]'}`}>
                    STEP {step.step}
                  </span>
                  <span className="text-[10px] text-[#D8C686] flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {step.duration}
                  </span>
                </div>

                <div className="font-display font-bold text-sm text-[#F0F3ED] truncate mb-1">
                  {step.title}
                </div>

                <div className="text-[10px] font-mono text-[#7D8774] flex items-center gap-1 truncate">
                  <span>// CODE:</span>
                  <span className={isCurrent ? 'text-[#F0F3ED]' : ''}>{step.code}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Interactive Showcase Container */}
        <div className="bg-[#141712] border border-[#23291F] p-6 sm:p-8 shadow-tactical-md relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Column: Step Description & High-Stakes Reality */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#2F591D]/30 border border-[#A3D489] flex items-center justify-center font-mono font-bold text-[#A3D489]">
                  {currentStep.step}
                </div>
                <div>
                  <span className="text-xs font-mono text-[#D8C686] uppercase tracking-wider block">
                    PROTOCOL PHASE {currentStep.step} OF 04
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F0F3ED]">
                    {currentStep.title}
                  </h3>
                </div>
              </div>

              <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed font-sans">
                {currentStep.summary}
              </p>

              {/* Bulleted Technical Armor Points */}
              <div className="space-y-2.5 pt-2 border-t border-[#1B2018]">
                {currentStep.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-[#F0F3ED]">
                    <div className="w-4 h-4 bg-[#2F591D]/40 border border-[#A3D489] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#A3D489]" />
                    </div>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Navigation controls */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  disabled={activeStep === 0}
                  onClick={() => { setAutoPlay(false); setActiveStep(Math.max(0, activeStep - 1)); }}
                  className="btn-tactile px-4 py-2 bg-[#0E100D] border border-[#23291F] text-xs font-mono text-[#A1A1AA] hover:text-[#F0F3ED] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  PREVIOUS
                </button>
                <button
                  onClick={() => {
                    setAutoPlay(false);
                    setActiveStep((activeStep + 1) % WORKFLOW_STEPS.length);
                  }}
                  className="btn-tactile px-5 py-2 bg-[#A3D489] hover:bg-[#BEF1A3] text-[#0E100D] text-xs font-mono font-bold flex items-center gap-2 shadow-tactical-green cursor-pointer"
                >
                  <span>{activeStep === 3 ? 'REPLAY FROM STEP 01' : 'NEXT PROTOCOL STEP'}</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Right Column: Visual Mockup for the Active Step */}
            <div className="lg:col-span-6">
              <div className="bg-[#0E100D] border border-[#23291F] p-5 relative shadow-inner">
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1B2018] font-mono text-xs">
                  <span className="text-[#7D8774] flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-[#A3D489]"></span>
                    RENDER_SURFACE // {currentStep.code}
                  </span>
                  <span className="text-[#A3D489] bg-[#141712] px-2 py-0.5 border border-[#23291F]">
                    {currentStep.interfaceSnippet.badge}
                  </span>
                </div>

                {/* DYNAMIC VISUAL DISPLAY BY STEP */}
                {activeStep === 0 && (
                  <div className="space-y-4 font-mono">
                    <div className="h-44 bg-[#141712] border-2 border-dashed border-[#A3D489]/60 relative flex flex-col items-center justify-center p-4">
                      {/* Laser scan line animation */}
                      <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-[#A3D489] shadow-[0_0_8px_#A3D489] animate-pulse"></div>
                      <Scan className="w-12 h-12 text-[#A3D489]/40 mb-2" />
                      <span className="text-xs text-[#F0F3ED] font-bold">
                        POINT CAMERA AT RETAIL BOX BARCODE
                      </span>
                      <span className="text-[10px] text-[#D8C686] mt-1">
                        CameraX Mod-10 Luhn Validation: ACTIVE
                      </span>
                    </div>

                    <div className="bg-[#1B2018] p-3 border border-[#2F591D]">
                      <div className="text-[10px] text-[#7D8774]">DETECTED IMEI-1:</div>
                      <div className="text-base text-[#F0F3ED] font-bold tracking-wider">
                        860124 06 839210 4
                      </div>
                      <div className="text-[10px] text-[#A3D489] flex items-center gap-1 mt-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>TAC Verified: Xiaomi Redmi Note 13 5G (8GB/128GB)</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="bg-[#141712] p-3 border border-[#23291F]">
                      <label className="text-[10px] text-[#7D8774] block mb-1">CUSTOMER MOBILE (WHATSAPP)</label>
                      <input
                        type="text"
                        readOnly
                        value="+91 98290 41920"
                        className="w-full bg-[#0E100D] border border-[#23291F] px-3 py-2 text-[#F0F3ED] font-bold"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-[#141712] p-3 border border-[#23291F]">
                        <label className="text-[10px] text-[#7D8774] block mb-1">DOWN PAYMENT</label>
                        <div className="text-sm font-bold text-[#A3D489]">₹3,500 PAID</div>
                      </div>
                      <div className="bg-[#141712] p-3 border border-[#23291F]">
                        <label className="text-[10px] text-[#7D8774] block mb-1">MONTHLY EMI</label>
                        <div className="text-sm font-bold text-[#D8C686]">₹1,850 x 8 MO</div>
                      </div>
                    </div>

                    <div className="p-3 bg-[#1B2018] border border-[#2F591D] text-[11px] text-[#A1A1AA]">
                      <span className="text-[#A3D489] font-bold block mb-0.5">LOCAL ENCRYPTED DRAFT SAVED:</span>
                      Draft stored in IndexedDB. If counter browser crashes or power fails, zero data is lost.
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="flex flex-col items-center justify-center p-4 font-mono text-center">
                    <div className="bg-white p-3 border-4 border-[#A3D489] shadow-tactical-md mb-3">
                      {/* High-Contrast Stylized Dynamic QR Code Mockup */}
                      <div className="w-36 h-36 bg-[#0E100D] flex flex-col items-center justify-center p-2 relative">
                        <QrCode className="w-28 h-28 text-[#A3D489]" />
                        <span className="text-[8px] text-[#A3D489] tracking-widest mt-1">
                          AE_PROVISION_QR
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-[#F0F3ED] font-bold">
                      TAP 'HI THERE' 6 TIMES ➔ SCAN QR
                    </div>
                    <div className="text-[10px] text-[#7D8774] max-w-xs mt-1">
                      Android Enterprise camera opens automatically from the initial setup screen. Installs Kavach DPC as Device Owner.
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="space-y-4 font-mono">
                    <div className="bg-[#10190D] border-2 border-[#A3D489] p-4 text-center">
                      <div className="w-12 h-12 rounded-full bg-[#2F591D] mx-auto flex items-center justify-center mb-2">
                        <ShieldCheck className="w-7 h-7 text-[#BEF1A3]" />
                      </div>
                      <div className="text-sm font-bold text-[#A3D489] uppercase tracking-wider">
                        TRUTHFUL HANDSHAKE COMPLETE
                      </div>
                      <div className="text-xs text-[#F0F3ED] mt-1 font-semibold">
                        STATUS: QUEUED ➔ DELIVERED ➔ APPLIED (312ms)
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="bg-[#141712] p-2 border border-[#23291F]">
                        <span className="text-[#7D8774] block">DEVICE OWNER:</span>
                        <span className="text-[#A3D489] font-bold">ACTIVE & LOCKED</span>
                      </div>
                      <div className="bg-[#141712] p-2 border border-[#23291F]">
                        <span className="text-[#7D8774] block">USB STATUS:</span>
                        <span className="text-[#A3D489] font-bold">DATA DEAFENED</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-[#D8C686] text-center pt-2 border-t border-[#1B2018]">
                      ✓ Phone is 100% immune and safe to hand over to the customer.
                    </div>
                  </div>
                )}

                {/* Sub-label footer */}
                <div className="mt-4 pt-3 border-t border-[#1B2018] flex items-center justify-between text-[11px] font-mono text-[#7D8774]">
                  <span>SNIPPET: {currentStep.interfaceSnippet.label}</span>
                  <span className="text-[#A3D489]">● VALIDATED</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
