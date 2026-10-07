import React, { useState } from 'react';
import { X, Play, Pause, RotateCcw, CheckCircle2, QrCode, ArrowRight } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestKeys: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onRequestKeys }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentPlaybackStep, setCurrentPlaybackStep] = useState(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#141712] border-2 border-[#A3D489] w-full max-w-3xl shadow-tactical-green relative overflow-hidden">
        {/* Top Title Bar */}
        <div className="bg-[#1B2018] px-4 py-2.5 border-b border-[#23291F] flex items-center justify-between font-mono text-xs text-[#7D8774]">
          <div className="flex items-center gap-2 text-[#A3D489]">
            <span className="w-2 h-2 bg-[#A3D489]"></span>
            <span>VIDEO_PLAYBACK // 60-SEC_UNBOXING_PROVISIONING_MASTER.MP4</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:text-[#F0F3ED] text-[#7D8774] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player Display Screen */}
        <div className="p-6">
          <div className="aspect-video bg-[#0E100D] border-2 border-[#23291F] relative flex flex-col justify-between p-4 overflow-hidden shadow-inner">
            {/* Visual Overlays & Simulated Video Steps */}
            <div className="flex items-center justify-between text-[11px] font-mono z-10">
              <span className="bg-[#2F591D]/80 border border-[#A3D489] text-[#BEF1A3] px-2 py-0.5 font-bold">
                STEP 0{currentPlaybackStep}: {
                  currentPlaybackStep === 1 ? 'UNBOX & TAP 6 TIMES' :
                  currentPlaybackStep === 2 ? 'DYNAMIC QR PROVISIONING' :
                  'DEVICE OWNER CONFIRMED'
                }
              </span>
              <span className="text-[#D8C686] bg-[#0E100D]/80 px-2 py-0.5 border border-[#23291F]">
                RECORDED LIVE AT KAROL BAGH SHOP
              </span>
            </div>

            {/* Simulated Stage Visuals */}
            <div className="my-auto text-center font-mono py-8 select-none">
              {currentPlaybackStep === 1 && (
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-[#1B2018] border-2 border-[#A3D489] mx-auto flex items-center justify-center text-2xl">
                    👆
                  </div>
                  <div className="text-sm font-bold text-[#F0F3ED]">
                    Tapping "Hi there" Welcome Screen 6 Times
                  </div>
                  <div className="text-xs text-[#7D8774]">
                    Awakens native Google Android Enterprise Camera Engine
                  </div>
                </div>
              )}

              {currentPlaybackStep === 2 && (
                <div className="space-y-3">
                  <QrCode className="w-16 h-16 text-[#A3D489] mx-auto animate-pulse" />
                  <div className="text-sm font-bold text-[#F0F3ED]">
                    Scanning Retailer Dashboard Dynamic QR
                  </div>
                  <div className="text-xs text-[#D8C686]">
                    Admin Extras auto-configured • Package installed silently
                  </div>
                </div>
              )}

              {currentPlaybackStep === 3 && (
                <div className="space-y-3">
                  <CheckCircle2 className="w-16 h-16 text-[#A3D489] mx-auto" />
                  <div className="text-sm font-bold text-[#A3D489]">
                    0 Warnings • 100% Play Protect Certified
                  </div>
                  <div className="text-xs text-[#F0F3ED]">
                    Device Owner active • USB debugging deafened • Ready for customer!
                  </div>
                </div>
              )}
            </div>

            {/* Video Controls Bar */}
            <div className="bg-[#141712]/90 border border-[#23291F] p-3 flex items-center justify-between font-mono text-xs z-10">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1.5 bg-[#1B2018] text-[#A3D489] border border-[#2F591D] hover:bg-[#2F591D] cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setCurrentPlaybackStep(1)}
                  className="p-1.5 bg-[#1B2018] text-[#7D8774] border border-[#23291F] hover:text-[#F0F3ED] cursor-pointer"
                  title="Replay"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <div className="text-[#A1A1AA] text-[11px] hidden sm:block">
                  DURATION: 00:58 / 01:00
                </div>
              </div>

              {/* Step Jumper */}
              <div className="flex items-center gap-1.5 text-[10px]">
                <button
                  onClick={() => setCurrentPlaybackStep(1)}
                  className={`px-2 py-0.5 border cursor-pointer ${
                    currentPlaybackStep === 1 ? 'bg-[#A3D489] text-[#0E100D] font-bold' : 'bg-[#0E100D] text-[#7D8774] border-[#23291F]'
                  }`}
                >
                  01 TAP
                </button>
                <button
                  onClick={() => setCurrentPlaybackStep(2)}
                  className={`px-2 py-0.5 border cursor-pointer ${
                    currentPlaybackStep === 2 ? 'bg-[#A3D489] text-[#0E100D] font-bold' : 'bg-[#0E100D] text-[#7D8774] border-[#23291F]'
                  }`}
                >
                  02 QR
                </button>
                <button
                  onClick={() => setCurrentPlaybackStep(3)}
                  className={`px-2 py-0.5 border cursor-pointer ${
                    currentPlaybackStep === 3 ? 'bg-[#A3D489] text-[#0E100D] font-bold' : 'bg-[#0E100D] text-[#7D8774] border-[#23291F]'
                  }`}
                >
                  03 COMPLETE
                </button>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <div className="text-[#A1A1AA]">
              Ready to test this 60-second setup on your shop counter?
            </div>
            <button
              onClick={() => { onClose(); onRequestKeys(); }}
              className="btn-tactile px-5 py-2.5 bg-[#A3D489] hover:bg-[#BEF1A3] text-[#0E100D] font-bold flex items-center gap-2 shadow-tactical-green cursor-pointer"
            >
              <span>GET 10 FREE TEST KEYS</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
