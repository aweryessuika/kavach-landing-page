import { useState, useEffect } from 'react';
import { Eye, Cpu, ShieldCheck, Zap } from 'lucide-react';

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  // Animated traveling beacon along steps
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    {
      num: '01',
      title: 'Sense',
      tagline: 'Continuous Environmental & Movement Observation',
      description: 'Train, signal, route, and movement data are continuously observed.',
      detail: 'Onboard sensors sample axle odometry 100 times per second, while trackside RFID tags transmit millimeter-accurate geo-coordinates and electronic interlocking status.',
      icon: Eye,
      signals: ['RFID Tag Interrogation', 'Speed & Distance Sampling', 'Signal Aspect Mirroring'],
    },
    {
      num: '02',
      title: 'Decide',
      tagline: 'Autonomous Fail-Safe Threat Computation',
      description: 'The system identifies when safe operating conditions are at risk.',
      detail: 'Dual SIL-4 central processors compute dynamic target braking curves based on train weight, gradient, and route clearance. Any speed or authority violation triggers the warning clock.',
      icon: Cpu,
      signals: ['Emergency Braking Distance Curve', 'Headway Clearance Validation', 'Collision Vector Projection'],
    },
    {
      num: '03',
      title: 'Protect',
      tagline: 'Deterministic Instant Intervention',
      description: 'Kavach alerts, supervises, and supports automatic protective action.',
      detail: 'If the pilot does not decelerate within the warning window, Kavach automatically commands the brake interface unit to apply service or emergency pneumatic braking to a full stop.',
      icon: ShieldCheck,
      signals: ['Audio-Visual Cab Warning', 'Auto-Service Braking Application', 'Direct Emergency Halt Clamp'],
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B100D] border border-white/10 text-xs font-mono text-[#C7FF3D]">
            <Zap className="w-3.5 h-3.5" />
            <span>THE THREE-TIER SAFETY LOOP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-[#F5F7F4] leading-[1.12]">
            How Kavach
            <br />
            <span className="font-serif italic font-normal text-[#C7FF3D]">
              safeguards every track.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#9BA598] leading-relaxed">
            From the initial trackside beacon to automated electro-pneumatic brake execution, the cycle executes in under half a second.
          </p>
        </div>

        {/* 3-Step Horizontal Sequence with Glowing Track Line */}
        <div className="relative">
          {/* Glowing Track Line in Background */}
          <div className="hidden md:block absolute top-[68px] left-[10%] right-[10%] h-[3px] bg-white/[0.08] -z-0">
            {/* Luminous Track Pulse */}
            <div
              className="h-full bg-[#C7FF3D] transition-all duration-700 ease-in-out shadow-[0_0_12px_#C7FF3D]"
              style={{
                width: `${((activeStep + 1) / 3) * 100}%`,
              }}
            />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              const isActive = activeStep === idx;

              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`dark-glass-interactive rounded-2xl p-7 sm:p-8 border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                    isActive
                      ? 'border-[#C7FF3D]/40 bg-[#0C140F]/90 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(199,255,61,0.12)]'
                      : 'border-white/[0.08] bg-[#090E0B]/75'
                  }`}
                >
                  <div>
                    {/* Step Node Marker on Line */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? 'bg-[#C7FF3D] text-[#070A08] shadow-[0_0_20px_rgba(199,255,61,0.5)]'
                            : 'bg-white/[0.05] text-[#9BA598]'
                        }`}
                      >
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <span className="font-mono text-xl font-bold text-[#626D60]">
                        {step.num}
                      </span>
                    </div>

                    <div className="text-[10px] font-mono uppercase text-[#C7FF3D] tracking-wider mb-1">
                      {step.tagline}
                    </div>

                    <h3 className="text-2xl font-display font-bold text-[#F5F7F4] mb-3">
                      {step.title}
                    </h3>

                    <p className="text-sm font-medium text-[#F5F7F4] leading-relaxed mb-2">
                      {step.description}
                    </p>

                    <p className="text-xs text-[#9BA598] leading-relaxed mb-6">
                      {step.detail}
                    </p>
                  </div>

                  {/* Signals List */}
                  <div className="pt-4 border-t border-white/[0.06] space-y-2 font-mono text-[11px]">
                    {step.signals.map((sig, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-[#9BA598]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF3D]" />
                        <span>{sig}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
