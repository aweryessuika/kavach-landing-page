import React, { useState } from 'react';
import { X, ArrowUpRight, CheckCircle2, Sparkles, Smartphone, Store, MapPin } from 'lucide-react';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose }) => {
  const [storeName, setStoreName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [city, setCity] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#141712] border-2 border-[#A3D489] w-full max-w-lg p-6 sm:p-8 shadow-tactical-green relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="btn-tactile absolute top-4 right-4 p-1.5 bg-[#1B2018] border border-[#23291F] text-[#7D8774] hover:text-[#F0F3ED] hover:border-[#A3D489] cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header Plate */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#D8C686] mb-2 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#A3D489]" />
              <span>INSTANT RETAILER ACTIVATION</span>
            </div>

            <h3 className="font-display font-bold text-2xl text-[#F0F3ED] mb-2">
              Claim 10 Free Kavach Test Keys
            </h3>
            <p className="text-xs sm:text-sm text-[#A1A1AA] font-sans mb-6">
              Start locking down your EMI devices today. No credit card, no deposit. Test on your shop counter in 60 seconds.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div>
                <label className="text-[11px] text-[#7D8774] block mb-1">
                  SHOP / STORE NAME *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. Om Telecom & Mobile"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    className="w-full bg-[#0E100D] border border-[#23291F] px-3.5 py-2.5 text-[#F0F3ED] focus:border-[#A3D489] outline-none"
                  />
                  <Store className="w-4 h-4 text-[#7D8774] absolute right-3 top-3" />
                </div>
              </div>

              <div>
                <label className="text-[11px] text-[#7D8774] block mb-1">
                  STORE OWNER NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Sharma"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  className="w-full bg-[#0E100D] border border-[#23291F] px-3.5 py-2.5 text-[#F0F3ED] focus:border-[#A3D489] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] text-[#7D8774] block mb-1">
                    WHATSAPP MOBILE *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      placeholder="+91 98290 XXXXX"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      className="w-full bg-[#0E100D] border border-[#23291F] px-3.5 py-2.5 text-[#F0F3ED] focus:border-[#A3D489] outline-none"
                    />
                    <Smartphone className="w-4 h-4 text-[#7D8774] absolute right-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-[#7D8774] block mb-1">
                    CITY & MARKET *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tonk Rd, Jaipur"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-[#0E100D] border border-[#23291F] px-3.5 py-2.5 text-[#F0F3ED] focus:border-[#A3D489] outline-none"
                    />
                    <MapPin className="w-4 h-4 text-[#7D8774] absolute right-3 top-3" />
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#1B2018] border border-[#2F591D] text-[11px] text-[#A1A1AA] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A3D489] shrink-0" />
                <span>10 keys (₹1,000 value) credited immediately to your mobile dashboard.</span>
              </div>

              <button
                type="submit"
                className="btn-tactile w-full py-3.5 bg-[#A3D489] hover:bg-[#BEF1A3] text-[#0E100D] font-mono text-sm font-bold tracking-wider flex items-center justify-center gap-2 shadow-tactical-green cursor-pointer mt-2"
              >
                <span>[ACTIVATE 10 FREE KEYS VIA WHATSAPP]</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 font-mono space-y-4">
            <div className="w-16 h-16 bg-[#2F591D]/40 border-2 border-[#A3D489] rounded-full flex items-center justify-center mx-auto text-[#A3D489]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-display font-bold text-2xl text-[#F0F3ED]">
              Activation Dispatched!
            </h3>

            <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-sm mx-auto font-sans">
              Welcome, <strong className="text-[#F0F3ED]">{ownerName}</strong> from <strong className="text-[#F0F3ED]">{storeName}</strong>! Your 10 free trial keys and retailer dashboard access link have been dispatched to <strong>{mobileNumber}</strong>.
            </p>

            <div className="p-4 bg-[#0E100D] border border-[#23291F] text-xs text-left space-y-1">
              <div className="text-[#7D8774]">STATUS: CREDITED</div>
              <div className="text-[#A3D489] font-bold">10/10 KEYS READY FOR QR PROVISIONING</div>
              <div className="text-[#D8C686]">NODE: AP-SOUTH-1 (MUMBAI)</div>
            </div>

            <button
              onClick={onClose}
              className="btn-tactile px-6 py-2.5 bg-[#1B2018] border border-[#23291F] hover:border-[#A3D489] text-xs font-mono text-[#F0F3ED]"
            >
              RETURN TO OVERVIEW
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
