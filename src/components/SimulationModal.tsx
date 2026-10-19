import { useState, useEffect } from 'react';
import { X, Lock, Unlock, KeyRound, PhoneCall, Check, QrCode, ScanBarcode } from 'lucide-react';

interface SimulationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SimulationModal({ isOpen, onClose }: SimulationModalProps) {
  const [mode, setMode] = useState<'control' | 'setup'>('control');
  const [phoneState, setPhoneState] = useState<'unlocked' | 'locked' | 'offline_pin'>('locked');
  const [setupStep, setSetupStep] = useState<number>(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const setupSteps = [
    {
      step: 'Step 01 · 10 sec',
      title: 'Scan box IMEI barcode',
      detail: 'Point your shop phone camera at the new phone box. Instant Luhn checksum verifies the 15-digit IMEI with zero typing.',
      code: 'IMEI: 864920061948205 · VERIFIED',
    },
    {
      step: 'Step 02 · 12 sec',
      title: 'Enter customer name & phone',
      detail: 'Type the customer’s name and mobile number. If another customer interrupts you at the counter, your draft saves automatically.',
      code: 'CUSTOMER: RAHUL SHARMA · VIVO Y28',
    },
    {
      step: 'Step 03 · 18 sec',
      title: 'Tap 6 times & scan QR',
      detail: 'Tap 6 times on the new phone’s welcome screen and scan the one-time QR code shown on your Retailer App.',
      code: 'QR NONCE: VALID FOR 15 MINUTES',
    },
    {
      step: 'Step 04 · 8 sec',
      title: 'Device Protected by Kavach',
      detail: 'Both screens turn solid green. Zero Play Protect warnings, and you now have 100% manual lock and unlock control.',
      code: 'STATUS: PROTECTED · 48 SECONDS TOTAL',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#040604]/85 backdrop-blur-xl">
      <div className="relative w-full max-w-3xl rounded-[26px] bg-[#0B0F0B] border border-white/[0.12] shadow-[0_35px_100px_rgba(0,0,0,0.95)] overflow-hidden">
        {/* Top Bar with Mode Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMode('control')}
              className={`px-3.5 py-1.5 rounded-lg text-[12px] font-mono transition-colors ${
                mode === 'control'
                  ? 'bg-[#C8FF2E] text-[#050705] font-semibold'
                  : 'bg-white/[0.05] text-[#9CA698] hover:text-[#F4F6F0]'
              }`}
            >
              1. Live Lock &amp; Unlock
            </button>
            <button
              type="button"
              onClick={() => setMode('setup')}
              className={`px-3.5 py-1.5 rounded-lg text-[12px] font-mono transition-colors ${
                mode === 'setup'
                  ? 'bg-[#C8FF2E] text-[#050705] font-semibold'
                  : 'bg-white/[0.05] text-[#9CA698] hover:text-[#F4F6F0]'
              }`}
            >
              2. 48s Counter QR Setup
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-[#9CA698] hover:text-[#F4F6F0] transition-colors"
            aria-label="Close preview"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Mode 1: Live Manual Lock & Unlock */}
        {mode === 'control' ? (
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 space-y-5">
              <div>
                <div className="text-[11px] font-mono text-[#6E786B] mb-1">
                  MANUAL RETAILER CONTROL
                </div>
                <h3 className="text-[22px] font-display font-semibold text-[#F4F6F0]">
                  Try tapping a command
                </h3>
                <p className="text-[13.5px] text-[#9CA698] mt-1 leading-relaxed">
                  See what happens on the customer’s phone the moment you tap Lock or Unlock from your counter app.
                </p>
              </div>

              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={() => setPhoneState('locked')}
                  className={`btn-press w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    phoneState === 'locked'
                      ? 'bg-[#1A2412] border-[#C8FF2E]/50 text-[#F4F6F0]'
                      : 'bg-white/[0.03] border-white/[0.08] text-[#D2D8CE] hover:bg-white/[0.06]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#C8FF2E] text-[#050705] flex items-center justify-center">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[13.5px] font-semibold">Lock customer phone</div>
                      <div className="text-[11.5px] text-[#9CA698]">
                        Locks screen in under 1 second
                      </div>
                    </div>
                  </div>
                  {phoneState === 'locked' && (
                    <Check className="w-4 h-4 text-[#C8FF2E]" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setPhoneState('offline_pin')}
                  className={`btn-press w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    phoneState === 'offline_pin'
                      ? 'bg-[#1A2412] border-[#C8FF2E]/50 text-[#F4F6F0]'
                      : 'bg-white/[0.03] border-white/[0.08] text-[#D2D8CE] hover:bg-white/[0.06]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.08] text-[#F4F6F0] flex items-center justify-center">
                      <KeyRound className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[13.5px] font-semibold">Generate Offline PIN</div>
                      <div className="text-[11.5px] text-[#9CA698]">
                        When customer has no mobile internet
                      </div>
                    </div>
                  </div>
                  {phoneState === 'offline_pin' && (
                    <Check className="w-4 h-4 text-[#C8FF2E]" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setPhoneState('unlocked')}
                  className={`btn-press w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    phoneState === 'unlocked'
                      ? 'bg-[#1A2412] border-[#C8FF2E]/50 text-[#F4F6F0]'
                      : 'bg-white/[0.03] border-white/[0.08] text-[#D2D8CE] hover:bg-white/[0.06]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.08] text-[#F4F6F0] flex items-center justify-center">
                      <Unlock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[13.5px] font-semibold">Unlock customer phone</div>
                      <div className="text-[11.5px] text-[#9CA698]">
                        Restores all apps immediately
                      </div>
                    </div>
                  </div>
                  {phoneState === 'unlocked' && (
                    <Check className="w-4 h-4 text-[#C8FF2E]" />
                  )}
                </button>
              </div>
            </div>

            <div className="md:col-span-6 flex justify-center">
              <div className="w-[250px] rounded-[34px] bg-[#050705] border-[3px] border-white/[0.15] p-4 shadow-2xl text-center">
                <div className="w-14 h-3 rounded-full bg-white/[0.08] mx-auto mb-4" />

                {phoneState === 'locked' && (
                  <div className="py-4 space-y-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#C8FF2E]/15 border border-[#C8FF2E]/40 flex items-center justify-center mx-auto text-[#C8FF2E]">
                      <Lock className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] font-mono text-[#C8FF2E] uppercase">
                        Locked by Shop
                      </div>
                      <div className="text-[15px] font-display font-semibold text-[#F4F6F0]">
                        Sharma Mobiles
                      </div>
                      <p className="text-[11.5px] text-[#9CA698] px-2">
                        Installment of ₹2,400 is pending. Call the shop below to unlock your phone.
                      </p>
                    </div>
                    <div className="w-full py-2.5 px-3 rounded-xl bg-[#C8FF2E] text-[#050705] text-[12px] font-semibold flex items-center justify-center gap-1.5">
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Call Shop Owner</span>
                    </div>
                    <div className="text-[10px] font-mono text-[#5E685B]">
                      Emergency 112 calling always works
                    </div>
                  </div>
                )}

                {phoneState === 'offline_pin' && (
                  <div className="py-4 space-y-4">
                    <div className="w-11 h-11 rounded-2xl bg-white/[0.08] border border-white/[0.15] flex items-center justify-center mx-auto text-[#C8FF2E]">
                      <KeyRound className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] font-mono text-[#9CA698] uppercase">
                        Offline PIN Screen
                      </div>
                      <div className="text-[15px] font-display font-semibold text-[#F4F6F0]">
                        Enter 6-Digit PIN
                      </div>
                      <p className="text-[11px] text-[#9CA698]">
                        Customer enters the PIN you read to them over the phone call:
                      </p>
                    </div>
                    <div className="flex justify-center gap-1.5 font-mono text-sm">
                      {['7', '2', '9', '4', '0', '5'].map((d, i) => (
                        <span
                          key={i}
                          className="w-7 h-8 rounded bg-white/[0.08] border border-[#C8FF2E]/40 flex items-center justify-center text-[#C8FF2E] font-bold"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setPhoneState('unlocked')}
                      className="w-full py-2.5 rounded-xl bg-[#C8FF2E] text-[#050705] text-[12px] font-semibold"
                    >
                      Unlock Now
                    </button>
                  </div>
                )}

                {phoneState === 'unlocked' && (
                  <div className="py-8 space-y-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#C8FF2E]/15 border border-[#C8FF2E]/35 flex items-center justify-center mx-auto text-[#C8FF2E]">
                      <Unlock className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] font-mono text-[#C8FF2E] uppercase">
                        Normal Mode
                      </div>
                      <div className="text-[15px] font-display font-semibold text-[#F4F6F0]">
                        All Apps Unlocked
                      </div>
                      <p className="text-[11.5px] text-[#9CA698] px-2">
                        Customer uses their phone normally with zero popups or slowdowns.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Mode 2: 4-Step Counter Setup Walkthrough */
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {setupSteps.map((s, idx) => (
                <button
                  key={s.step}
                  type="button"
                  onClick={() => setSetupStep(idx)}
                  className={`btn-press p-3.5 rounded-xl border text-left transition-all ${
                    setupStep === idx
                      ? 'bg-[#1A2412] border-[#C8FF2E]/50 text-[#F4F6F0]'
                      : 'bg-white/[0.03] border-white/[0.07] text-[#9CA698] hover:text-[#F4F6F0]'
                  }`}
                >
                  <div className="text-[10.5px] font-mono text-[#C8FF2E]">
                    {s.step}
                  </div>
                  <div className="text-[13px] font-semibold mt-1 leading-snug">
                    {s.title}
                  </div>
                </button>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-md">
                <div className="text-[11px] font-mono text-[#C8FF2E]">
                  {setupSteps[setupStep].code}
                </div>
                <h4 className="text-[20px] font-display font-semibold text-[#F4F6F0]">
                  {setupSteps[setupStep].title}
                </h4>
                <p className="text-[14px] text-[#9CA698] leading-relaxed">
                  {setupSteps[setupStep].detail}
                </p>
              </div>

              <div className="w-24 h-24 rounded-2xl bg-[#121712] border border-[#C8FF2E]/35 flex items-center justify-center text-[#C8FF2E] shrink-0">
                {setupStep === 0 && <ScanBarcode className="w-11 h-11" />}
                {setupStep === 1 && <PhoneCall className="w-10 h-10" />}
                {setupStep === 2 && <QrCode className="w-11 h-11" />}
                {setupStep === 3 && <Check className="w-11 h-11" />}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
