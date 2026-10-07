import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  Unlock,
  PhoneCall,
  AlertTriangle,
  Radio,
  Zap,
  RotateCcw,
  QrCode,
  Smartphone,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

interface HardwareSimulatorProps {
  onUnlockTrial?: () => void;
}

export const HardwareSimulator: React.FC<HardwareSimulatorProps> = ({ onUnlockTrial }) => {
  // Device state: 'UNLOCKED' | 'LOCKING' | 'LOCKED' | 'UNLOCKING'
  const [deviceState, setDeviceState] = useState<'UNLOCKED' | 'LOCKING' | 'LOCKED' | 'UNLOCKING'>('UNLOCKED');
  const [latency, setLatency] = useState(334);
  const [packetLogs, setPacketLogs] = useState<Array<{ timestamp: string; text: string; type: 'info' | 'warn' | 'success' | 'lock' }>>([
    { timestamp: '14:02:11.104', text: 'DEVICE_ONLINE: IMEI 860124068392104 [AIRTEL 5G CGNAT]', type: 'info' },
    { timestamp: '14:02:11.112', text: 'NTP_SYNC: Stratum-1 delta 12ms validated', type: 'info' },
    { timestamp: '14:02:11.120', text: 'POLICY: Device Owner privileges confirmed (Kavach DPC v2.4)', type: 'success' },
    { timestamp: '14:02:11.128', text: 'STANDBY: Persistent WebSocket link active on port 443', type: 'info' },
  ]);
  const overdueAmount = '₹1,850';
  const customerName = 'Rajesh Kumar';
  const phoneModel = 'Redmi Note 13 5G';

  const addLog = (text: string, type: 'info' | 'warn' | 'success' | 'lock' = 'info') => {
    const now = new Date();
    const ts = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}.${now.getMilliseconds().toString().padStart(3, '0')}`;
    setPacketLogs((prev) => [
      { timestamp: ts, text, type },
      ...prev.slice(0, 8),
    ]);
  };

  const handleToggleLock = () => {
    if (deviceState === 'UNLOCKED') {
      setDeviceState('LOCKING');
      addLog(`TRANSMIT_CMD: LOCK_IMMEDIATE -> IMEI 860124068392104`, 'warn');

      const start = performance.now();
      setTimeout(() => {
        const elapsed = Math.round(performance.now() - start + 240);
        setLatency(elapsed);
        setDeviceState('LOCKED');
        addLog(`WSS_ACK: Lock payload delivered via AWS Mumbai to Airtel CGNAT`, 'lock');
        addLog(`KIOSK_ENGAGED: WindowManager FLAG_SECURE + System Gestures intercepted in ${elapsed}ms`, 'success');
      }, 340);
    } else if (deviceState === 'LOCKED') {
      setDeviceState('UNLOCKING');
      addLog(`TRANSMIT_CMD: RELEASE_DEVICE -> Payment received acknowledgment`, 'info');

      setTimeout(() => {
        setDeviceState('UNLOCKED');
        addLog(`WSS_ACK: Normal desktop launcher restored via DPC broadcast`, 'success');
        addLog(`DEVICE_UNLOCKED: Customer handoff complete in 312ms`, 'info');
      }, 320);
    }
  };

  return (
    <div id="simulator" className="w-full relative py-12">
      {/* Background Reticle Watermark */}
      <div className="absolute inset-0 bg-tactical-grid opacity-30 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#23291F]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#A3D489] tracking-wider uppercase mb-2">
              <span className="w-2 h-2 bg-[#A3D489]"></span>
              <span>LIVE_HARDWARE_SIMULATION // AP-SOUTH-1</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F0F3ED] tracking-tight">
              Sub-350ms Real-Time Kiosk Lock Demonstration
            </h2>
            <p className="text-sm font-sans text-[#A1A1AA] max-w-2xl mt-1">
              Experience the physical reaction of a customer's phone when a shopkeeper triggers an EMI lockdown from their desktop portal.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <div className="bg-[#141712] border border-[#23291F] px-3 py-1.5 font-mono text-xs text-[#D8C686] flex items-center gap-2">
              <Radio className="w-3.5 h-3.5 text-[#A3D489] animate-pulse" />
              <span>ROUNDTRIP: <strong className="text-[#A3D489]">{latency}ms</strong></span>
            </div>
            <button
              onClick={() => {
                setDeviceState('UNLOCKED');
                addLog('SIMULATOR_RESET: Restoring factory baseline telemetry', 'info');
              }}
              className="btn-tactile p-2 bg-[#1B2018] border border-[#23291F] text-[#7D8774] hover:text-[#F0F3ED] hover:border-[#7D8774]"
              title="Reset Simulator"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* The Split Screen Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT PANEL: RETAILER DESK APP VIEW (col-span-7) */}
          <div className="lg:col-span-7 bg-[#141712] border border-[#23291F] p-5 sm:p-6 shadow-tactical-md relative">
            {/* Header Plate */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#23291F]">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 bg-[#A3D489] rotate-45"></div>
                <span className="font-mono text-xs font-semibold text-[#F0F3ED] tracking-wider">
                  KAVACH RETAILER DESK // STORE ID #JAIPUR-0419
                </span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#A3D489] bg-[#1B2018] px-2 py-0.5 border border-[#2F591D]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A3D489] animate-ping"></span>
                OM TELECOM (TONK RD)
              </div>
            </div>

            {/* Customer Device Profile Card */}
            <div className="bg-[#0E100D] border border-[#23291F] p-4 mb-5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-[#1B2018]">
                <div>
                  <div className="font-mono text-[11px] text-[#7D8774] tracking-wider uppercase">CUSTOMER RECORD</div>
                  <div className="text-base font-display font-bold text-[#F0F3ED] flex items-center gap-2">
                    {customerName}
                    <span className="text-xs font-mono font-normal text-[#D8C686] bg-[#85763E]/20 px-1.5 py-0.2 border border-[#85763E]/40">
                      8 MONTH LOAN
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-mono text-[11px] text-[#7D8774] tracking-wider uppercase">EMI AMOUNT</div>
                  <div className="text-lg font-mono font-bold text-[#D95A1E] flex items-center gap-1">
                    {overdueAmount} <span className="text-xs font-normal text-[#A1A1AA]">/ month</span>
                  </div>
                </div>
              </div>

              {/* Technical Telemetry Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                <div className="bg-[#141712] p-2 border border-[#1B2018]">
                  <span className="text-[10px] text-[#7D8774] block">PHONE MODEL</span>
                  <span className="text-[#F0F3ED] truncate block font-medium">{phoneModel}</span>
                </div>
                <div className="bg-[#141712] p-2 border border-[#1B2018]">
                  <span className="text-[10px] text-[#7D8774] block">PRIMARY IMEI</span>
                  <span className="text-[#F0F3ED] block font-medium">860124...92104</span>
                </div>
                <div className="bg-[#141712] p-2 border border-[#1B2018]">
                  <span className="text-[10px] text-[#7D8774] block">LAST NETWORK</span>
                  <span className="text-[#A3D489] block font-medium">JIO 5G (JAIPUR)</span>
                </div>
                <div className="bg-[#141712] p-2 border border-[#1B2018]">
                  <span className="text-[10px] text-[#7D8774] block">CURRENT STATUS</span>
                  <span className={`block font-medium ${
                    deviceState === 'LOCKED' ? 'text-[#D95A1E]' : 'text-[#A3D489]'
                  }`}>
                    {deviceState === 'LOCKED' ? '● LOCKED (KIOSK)' : '● UNLOCKED (CLEAN)'}
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Command Control Console */}
            <div className="bg-[#1B2018] border border-[#2F591D]/50 p-4 mb-5">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-semibold text-[#F0F3ED] tracking-wider flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#A3D489]" />
                  INSTANT COMMAND TRIGGER (WSS BROADCAST)
                </span>
                <span className="font-mono text-[10px] text-[#D8C686]">
                  PRESS TO TEST PHYSICAL HARDWARE
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Engage Lock Button */}
                <button
                  onClick={handleToggleLock}
                  disabled={deviceState === 'LOCKING' || deviceState === 'UNLOCKING'}
                  className={`btn-tactile p-3.5 flex items-center justify-center gap-2.5 font-mono text-xs font-bold tracking-wider cursor-pointer border transition-all ${
                    deviceState === 'LOCKED'
                      ? 'bg-[#141712] text-[#7D8774] border-[#23291F] opacity-70'
                      : 'bg-[#D95A1E] hover:bg-[#b04311] text-[#F0F3ED] border-[#D95A1E] shadow-tactical-sm'
                  }`}
                >
                  <Lock className="w-4 h-4" />
                  {deviceState === 'LOCKING' ? 'TRANSMITTING LOCK...' : '[ENGAGE HARDWARE LOCK]'}
                </button>

                {/* Release Shield Button */}
                <button
                  onClick={handleToggleLock}
                  disabled={deviceState === 'LOCKING' || deviceState === 'UNLOCKING'}
                  className={`btn-tactile p-3.5 flex items-center justify-center gap-2.5 font-mono text-xs font-bold tracking-wider cursor-pointer border transition-all ${
                    deviceState === 'UNLOCKED'
                      ? 'bg-[#141712] text-[#7D8774] border-[#23291F] opacity-70'
                      : 'bg-[#A3D489] hover:bg-[#BEF1A3] text-[#0E100D] border-[#A3D489] shadow-tactical-green'
                  }`}
                >
                  <Unlock className="w-4 h-4" />
                  {deviceState === 'UNLOCKING' ? 'RELEASING DEVICE...' : '[RELEASE SHIELD / PAID]'}
                </button>
              </div>

              {/* Status explanation */}
              <div className="mt-3 text-[11px] font-mono text-[#A1A1AA] flex items-center gap-2">
                <span className="text-[#A3D489]">●</span>
                <span>
                  {deviceState === 'LOCKED'
                    ? 'Customer device is fully restricted in Kiosk mode. Only 112 & Retailer Hotline buttons remain active.'
                    : 'Device is functioning in normal commercial mode. Device Owner telemetry heartbeat active every 30s.'}
                </span>
              </div>
            </div>

            {/* Live Socket Logs Terminal */}
            <div className="bg-[#0E100D] border border-[#23291F] p-3 font-mono text-[11px]">
              <div className="flex items-center justify-between text-[#7D8774] pb-2 mb-2 border-b border-[#1B2018]">
                <span className="flex items-center gap-1.5 text-xs text-[#F0F3ED]">
                  <span className="w-1.5 h-1.5 bg-[#A3D489]"></span>
                  TRANSMISSION TELEMETRY STREAM
                </span>
                <span>TCP_PORT: 443 (TLS 1.3)</span>
              </div>
              <div className="space-y-1.5 max-h-32 overflow-y-auto">
                {packetLogs.map((log, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-[#353D2F] select-none">[{log.timestamp}]</span>
                    <span
                      className={`break-all ${
                        log.type === 'lock'
                          ? 'text-[#D95A1E] font-semibold'
                          : log.type === 'success'
                          ? 'text-[#A3D489]'
                          : log.type === 'warn'
                          ? 'text-[#D8C686]'
                          : 'text-[#A1A1AA]'
                      }`}
                    >
                      {log.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Counter CTA Footnote */}
            <div className="mt-4 pt-3 border-t border-[#1B2018] flex items-center justify-between text-xs font-mono">
              <span className="text-[#7D8774]">DISRUPTIVE RETAIL PRICING:</span>
              <button
                onClick={onUnlockTrial}
                className="text-[#A3D489] hover:underline font-bold flex items-center gap-1"
              >
                <span>₹100 FLAT PER DEVICE KEY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* RIGHT PANEL: SIMULATED CUSTOMER SMARTPHONE (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Phone Hardware Mockup Outer Chassis */}
            <div className="w-[310px] sm:w-[330px] h-[640px] bg-[#121411] rounded-[36px] p-3 border-4 border-[#23291F] shadow-2xl relative transition-all duration-300">
              {/* Hardware Speaker Earpiece Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-3 bg-[#0E100D] rounded-full z-30 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#1B2018] border border-[#23291F]"></div>
              </div>

              {/* Inner Smartphone Screen */}
              <div className="w-full h-full rounded-[28px] overflow-hidden bg-[#0A0C09] relative flex flex-col border border-[#1B2018]">

                {/* Mobile System Status Bar */}
                <div className="w-full h-7 px-4 pt-1 flex items-center justify-between text-[10px] font-mono text-[#F0F3ED] z-20 bg-black/40 backdrop-blur-xs">
                  <span>14:02</span>
                  <div className="flex items-center gap-1.5 text-[9px]">
                    <span className="text-[#A3D489]">5G</span>
                    <span className="text-[#A3D489]">●●●●</span>
                    <span>88%</span>
                  </div>
                </div>

                {/* STATE 1: UNLOCKED STATE (Stock Android Home Screen) */}
                {deviceState === 'UNLOCKED' && (
                  <div className="flex-1 flex flex-col justify-between p-4 bg-gradient-to-b from-[#141A12] via-[#0E100D] to-[#0A0C09] text-center select-none animate-fadeIn">
                    {/* Clock & Date Widget */}
                    <div className="pt-6">
                      <div className="text-4xl font-display font-light text-[#F0F3ED] tracking-tight">
                        14:02
                      </div>
                      <div className="text-xs font-sans text-[#A1A1AA] mt-0.5">
                        Wednesday, 23 September
                      </div>
                      <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1B2018]/90 border border-[#2F591D] rounded-sm text-[10px] font-mono text-[#A3D489]">
                        <ShieldCheck className="w-3 h-3 text-[#A3D489]" />
                        <span>KAVACH DPC ACTIVE (SILENT)</span>
                      </div>
                    </div>

                    {/* App Grid Icons Simulation */}
                    <div className="grid grid-cols-4 gap-3 px-2 py-4">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-11 h-11 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-sm shadow-sm">
                          💬
                        </div>
                        <span className="text-[9px] text-[#A1A1AA]">WhatsApp</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-11 h-11 rounded-xl bg-[#FF0000]/20 border border-[#FF0000]/40 flex items-center justify-center text-sm shadow-sm">
                          ▶
                        </div>
                        <span className="text-[9px] text-[#A1A1AA]">YouTube</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-11 h-11 rounded-xl bg-[#4285F4]/20 border border-[#4285F4]/40 flex items-center justify-center text-sm shadow-sm">
                          🌐
                        </div>
                        <span className="text-[9px] text-[#A1A1AA]">Chrome</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-11 h-11 rounded-xl bg-[#0088CC]/20 border border-[#0088CC]/40 flex items-center justify-center text-sm shadow-sm">
                          📸
                        </div>
                        <span className="text-[9px] text-[#A1A1AA]">Camera</span>
                      </div>
                    </div>

                    {/* Google Play Protect Live Verification Widget */}
                    <div className="bg-[#141712]/90 border border-[#23291F] p-3 text-left">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-4 h-4 rounded-full bg-[#A3D489]/20 flex items-center justify-center">
                          <CheckCircle2 className="w-3 h-3 text-[#A3D489]" />
                        </div>
                        <span className="text-[11px] font-mono font-medium text-[#F0F3ED]">
                          Google Play Protect
                        </span>
                      </div>
                      <p className="text-[10px] text-[#7D8774] leading-tight font-sans">
                        No harmful apps found. Device certified for Android Enterprise Device Owner.
                      </p>
                    </div>

                    {/* Bottom Dock */}
                    <div className="flex items-center justify-around bg-[#141712]/80 border border-[#23291F] rounded-2xl py-2 px-3">
                      <div className="w-9 h-9 rounded-xl bg-[#2F591D] flex items-center justify-center text-xs">📞</div>
                      <div className="w-9 h-9 rounded-xl bg-[#1B2018] flex items-center justify-center text-xs">💬</div>
                      <div className="w-9 h-9 rounded-xl bg-[#1B2018] flex items-center justify-center text-xs">⚙️</div>
                      <div className="w-9 h-9 rounded-xl bg-[#1B2018] flex items-center justify-center text-xs">📁</div>
                    </div>
                  </div>
                )}

                {/* STATE 2: TRANSMITTING PULSE OVERLAY */}
                {deviceState === 'LOCKING' && (
                  <div className="flex-1 flex flex-col items-center justify-center bg-[#1F0C05] text-center p-6 select-none animate-pulse">
                    <div className="w-14 h-14 bg-[#D95A1E]/20 border border-[#D95A1E] rounded-full flex items-center justify-center mb-4">
                      <Lock className="w-7 h-7 text-[#D95A1E] animate-bounce" />
                    </div>
                    <div className="font-mono text-xs text-[#D95A1E] tracking-widest uppercase">
                      INCOMING POLICY PAYLOAD
                    </div>
                    <div className="font-mono text-[10px] text-[#7D8774] mt-1">
                      WSS Carrier Push: 342ms
                    </div>
                  </div>
                )}

                {/* STATE 3: FULLSCREEN KIOSK LOCK ACTIVITY (LOCKED STATE) */}
                {deviceState === 'LOCKED' && (
                  <div className="flex-1 flex flex-col justify-between p-4 bg-[#140804] border-2 border-[#D95A1E] text-center select-none animate-fadeIn relative">
                    {/* Red Strobe Bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#D95A1E] animate-pulse"></div>

                    {/* Top Security Banner */}
                    <div className="pt-4">
                      <div className="w-12 h-12 mx-auto bg-[#D95A1E]/20 border-2 border-[#D95A1E] flex items-center justify-center mb-2 shadow-tactical-sm">
                        <Lock className="w-6 h-6 text-[#D95A1E]" />
                      </div>
                      <span className="inline-block px-2 py-0.5 bg-[#D95A1E] text-[#0E100D] font-mono font-bold text-[10px] tracking-wider mb-1">
                        DEVICE RESTRICTED // EMI OVERDUE
                      </span>
                      <h3 className="font-display font-bold text-sm text-[#F0F3ED] leading-tight px-1">
                        CONTACT OM TELECOM (JAIPUR)
                      </h3>
                      <p className="text-[10px] font-mono text-[#D8C686] mt-1">
                        OUTSTANDING DUE: {overdueAmount}
                      </p>
                    </div>

                    {/* Restrictive Details Box */}
                    <div className="bg-[#0E100D] border border-[#D95A1E]/40 p-3 text-left space-y-2">
                      <div className="text-[10px] font-mono text-[#A1A1AA] flex items-center justify-between">
                        <span>HANDSHAKE ID:</span>
                        <span className="text-[#F0F3ED]">#KVC-860124</span>
                      </div>
                      <div className="text-[10px] font-mono text-[#A1A1AA] flex items-center justify-between">
                        <span>POLICY STATE:</span>
                        <span className="text-[#D95A1E] font-bold">DISALLOW_ALL_APPS</span>
                      </div>
                      <div className="text-[10px] font-mono text-[#A1A1AA] flex items-center justify-between">
                        <span>USB DATA STATUS:</span>
                        <span className="text-[#D95A1E]">DEAFENED / NO_ADB</span>
                      </div>
                      <div className="text-[9px] font-mono text-[#7D8774] border-t border-[#1B1818] pt-1.5 leading-normal">
                        * Phone access resumes automatically within 350ms once shopkeeper confirms EMI clearance.
                      </div>
                    </div>

                    {/* UPI QR Payment Code Mockup */}
                    <div className="bg-[#1B100C] border border-[#23291F] p-2.5 flex items-center gap-3">
                      <div className="w-12 h-12 bg-white p-1 flex items-center justify-center shrink-0">
                        <QrCode className="w-10 h-10 text-black" />
                      </div>
                      <div className="text-left font-mono">
                        <span className="text-[9px] text-[#A1A1AA] block">PAY VIA ANY UPI APP</span>
                        <span className="text-[10px] font-bold text-[#A3D489] block">omtelecom@icici</span>
                        <span className="text-[8px] text-[#7D8774] block">Scan from family phone</span>
                      </div>
                    </div>

                    {/* Emergency & Preserved Hotline Actions */}
                    <div className="space-y-2">
                      <a
                        href="tel:112"
                        onClick={(e) => { e.preventDefault(); alert("Simulating Emergency 112 Dial - Always Preserved under Telecom Regulations."); }}
                        className="w-full py-2 bg-[#272924] border border-[#3E4239] text-[#F0F3ED] font-mono text-[10px] flex items-center justify-center gap-1.5 hover:bg-[#353830]"
                      >
                        <AlertTriangle className="w-3.5 h-3.5 text-[#D8C686]" />
                        <span>EMERGENCY CALL (112)</span>
                      </a>

                      <button
                        onClick={() => alert("Dialing Retailer: Om Telecom Jaipur (+91 98290-XXXXX)")}
                        className="w-full py-2.5 bg-[#A3D489] text-[#0E100D] font-mono text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#BEF1A3] shadow-tactical-sm cursor-pointer"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>CALL RETAILER (STORE OWNER)</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Bottom Gesture Bar */}
                <div className="w-full h-4 flex items-center justify-center bg-black/80">
                  <div className="w-24 h-1 bg-[#23291F] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Instruction tag below phone */}
            <div className="mt-4 text-center">
              <span className="font-mono text-xs text-[#7D8774] flex items-center justify-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-[#A3D489]" />
                <span>Simulated Xiaomi Redmi Note 13 5G (Android 14)</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
