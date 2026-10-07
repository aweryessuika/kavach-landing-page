import React, { useState } from 'react';
import { Calculator, ArrowUpRight, TrendingUp, Sparkles } from 'lucide-react';

interface RoiCalculatorProps {
  onRequestKeys: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onRequestKeys }) => {
  const [phonesPerMonth, setPhonesPerMonth] = useState<number>(50);
  const [avgPrice, setAvgPrice] = useState<number>(16000);
  const [defaultRate, setDefaultRate] = useState<number>(8); // 8% default rate

  // Math Calculations:
  // Defaulted phones count = phonesPerMonth * (defaultRate / 100)
  // Capital at risk without Kavach = defaulted phones * avgPrice
  // Kavach Cost = phonesPerMonth * 100 (₹100 flat per device)
  // Net Saved = Capital at Risk - Kavach Cost
  // ROI Multiple = Capital at Risk / Kavach Cost

  const defaultedPhones = phonesPerMonth * (defaultRate / 100);
  const capitalAtRisk = Math.round(defaultedPhones * avgPrice);
  const kavachCost = phonesPerMonth * 100;
  const netSaved = Math.max(0, capitalAtRisk - kavachCost);
  const roiMultiple = kavachCost > 0 ? (capitalAtRisk / kavachCost).toFixed(1) : '0';

  const formatCurrency = (val: number) => {
    return '₹' + val.toLocaleString('en-IN');
  };

  return (
    <section id="roi-calculator" className="py-20 bg-[#121411] border-b border-[#1B2018] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A3D489] tracking-wider uppercase mb-2">
            <span className="w-1.5 h-1.5 bg-[#A3D489]"></span>
            <span>// FINANCIAL LOSS PREVENTION CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F0F3ED] tracking-tight">
            Retailer Unit Economics & ROI Calculator
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] max-w-3xl font-sans">
            In offline Indian mobile retail, default rates average 8%. If a customer stops paying EMI after 2 months, the shop owner bears the entire hardware loss.
          </p>
        </div>

        {/* The Calculator Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Inputs Column (col-span-6) */}
          <div className="lg:col-span-6 bg-[#141712] border border-[#23291F] p-6 sm:p-8 shadow-tactical-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#23291F]">
                <span className="font-mono text-xs font-bold text-[#F0F3ED] flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-[#A3D489]" />
                  STORE SALES PARAMETERS
                </span>
                <span className="text-[11px] font-mono text-[#D8C686]">
                  REAL-TIME SIMULATION
                </span>
              </div>

              {/* Slider 1: Phones per Month */}
              <div className="mb-6">
                <div className="flex items-center justify-between font-mono mb-2">
                  <label className="text-xs text-[#A1A1AA]">
                    PHONES SOLD ON EMI PER MONTH:
                  </label>
                  <span className="text-base font-bold text-[#A3D489]">
                    {phonesPerMonth} <span className="text-xs font-normal text-[#7D8774]">devices</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="5"
                  value={phonesPerMonth}
                  onChange={(e) => setPhonesPerMonth(Number(e.target.value))}
                  className="w-full h-2 bg-[#0E100D] border border-[#23291F] accent-[#A3D489] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#7D8774] mt-1">
                  <span>10 (Small Kiosk)</span>
                  <span>100 (High Street)</span>
                  <span>500 (Multi-Counter)</span>
                </div>
              </div>

              {/* Slider 2: Average Retail Price */}
              <div className="mb-6">
                <div className="flex items-center justify-between font-mono mb-2">
                  <label className="text-xs text-[#A1A1AA]">
                    AVERAGE PHONE SELLING PRICE:
                  </label>
                  <span className="text-base font-bold text-[#D8C686]">
                    {formatCurrency(avgPrice)}
                  </span>
                </div>
                <input
                  type="range"
                  min="8000"
                  max="45000"
                  step="1000"
                  value={avgPrice}
                  onChange={(e) => setAvgPrice(Number(e.target.value))}
                  className="w-full h-2 bg-[#0E100D] border border-[#23291F] accent-[#D8C686] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#7D8774] mt-1">
                  <span>₹8,000 (Entry 4G)</span>
                  <span>₹16,000 (Sub-20K 5G)</span>
                  <span>₹45,000 (Flagship)</span>
                </div>
              </div>

              {/* Slider 3: Default Risk Percentage */}
              <div className="mb-6">
                <div className="flex items-center justify-between font-mono mb-2">
                  <label className="text-xs text-[#A1A1AA]">
                    UNSECURED CUSTOMER DEFAULT RATE:
                  </label>
                  <span className="text-base font-bold text-[#D95A1E]">
                    {defaultRate}% <span className="text-xs font-normal text-[#7D8774]">(industry avg ~8%)</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="18"
                  step="1"
                  value={defaultRate}
                  onChange={(e) => setDefaultRate(Number(e.target.value))}
                  className="w-full h-2 bg-[#0E100D] border border-[#23291F] accent-[#D95A1E] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#7D8774] mt-1">
                  <span>3% (Strict KYC)</span>
                  <span>8% (Market Norm)</span>
                  <span>18% (High-Risk Area)</span>
                </div>
              </div>
            </div>

            {/* Quick Summary Pill */}
            <div className="bg-[#0E100D] border border-[#23291F] p-4 text-xs font-mono text-[#A1A1AA] flex items-center justify-between">
              <span>ESTIMATED DEFAULTED DEVICES:</span>
              <strong className="text-[#D95A1E] text-sm">
                ~{defaultedPhones.toFixed(1)} phones / mo
              </strong>
            </div>
          </div>

          {/* Right Outputs Column (col-span-6) */}
          <div className="lg:col-span-6 bg-[#182015] border-2 border-[#A3D489]/60 p-6 sm:p-8 shadow-tactical-md flex flex-col justify-between relative">
            <div className="absolute top-0 right-0 bg-[#A3D489] text-[#0E100D] font-mono text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
              PROTECTION RETURN
            </div>

            <div className="space-y-6">
              <div>
                <span className="font-mono text-xs text-[#D8C686] tracking-wider uppercase block mb-1">
                  SECURITY BALANCE SHEET
                </span>
                <h3 className="font-display font-bold text-2xl text-[#F0F3ED]">
                  Projected Monthly Store Savings
                </h3>
              </div>

              {/* Metric 1: Capital at risk */}
              <div className="bg-[#141712] border border-[#23291F] p-4 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-[#7D8774] block uppercase">
                    CAPITAL AT RISK (WITHOUT KAVACH)
                  </span>
                  <span className="text-xs text-[#A1A1AA] font-sans">
                    Direct bad-debt loss absorbed by store
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-mono font-bold text-[#D95A1E]">
                  {formatCurrency(capitalAtRisk)}
                </div>
              </div>

              {/* Metric 2: Kavach cost */}
              <div className="bg-[#141712] border border-[#23291F] p-4 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-[#7D8774] block uppercase">
                    KAVACH PROTECTION COST (₹100 / KEY)
                  </span>
                  <span className="text-xs text-[#A1A1AA] font-sans">
                    {phonesPerMonth} device licenses x ₹100
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-mono font-bold text-[#D8C686]">
                  {formatCurrency(kavachCost)}
                </div>
              </div>

              {/* Metric 3: Net margin saved */}
              <div className="bg-[#1B2616] border-2 border-[#A3D489] p-5 flex items-center justify-between shadow-tactical-green">
                <div>
                  <span className="text-xs font-mono text-[#A3D489] font-bold block uppercase tracking-wider">
                    ★ NET STORE PROFIT PRESERVED
                  </span>
                  <span className="text-xs text-[#F0F3ED] font-sans">
                    Real hard cash staying in your bank account
                  </span>
                </div>
                <div className="text-2xl sm:text-4xl font-mono font-extrabold text-[#BEF1A3]">
                  +{formatCurrency(netSaved)}
                </div>
              </div>

              {/* ROI multiple readout */}
              <div className="flex items-center justify-between text-xs font-mono px-2 text-[#F0F3ED]">
                <span className="flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-[#A3D489]" />
                  RETURN ON SECURITY INVESTMENT:
                </span>
                <span className="text-base font-bold text-[#A3D489] bg-[#2F591D]/40 px-2 py-0.5 border border-[#2F591D]">
                  {roiMultiple}x ROI
                </span>
              </div>
            </div>

            {/* Bottom Signup Callout & Action */}
            <div className="pt-6 border-t border-[#2A3822] mt-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#D8C686]">
                <Sparkles className="w-4 h-4 text-[#A3D489] shrink-0" />
                <span>10 Free Test Keys credited instantly on signup. Zero card required.</span>
              </div>

              <button
                onClick={onRequestKeys}
                className="btn-tactile w-full py-3.5 bg-[#A3D489] hover:bg-[#BEF1A3] text-[#0E100D] font-mono text-sm font-bold tracking-wider flex items-center justify-center gap-2 shadow-tactical-green cursor-pointer clip-chamfer-tr"
              >
                <span>[CLAIM YOUR 10 FREE TEST KEYS NOW]</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
