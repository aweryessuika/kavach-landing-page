import { useState, useEffect } from 'react';
import { QrCode, Shield, Radio, Lock, ArrowRight } from 'lucide-react';

export function NetworkEcosystemSection() {
  const [selectedNode, setSelectedNode] = useState<number>(0);
  const [signalPosition, setSignalPosition] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSignalPosition((prev) => (prev + 1) % 5);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const nodes = [
    {
      id: 0,
      title: '30-Second QR Setup',
      label: 'Zero-touch unboxing',
      role: 'Android Enterprise Provisioner',
      description: 'Tap the Welcome screen 6 times on any fresh Android phone to open the camera, scan your store QR code, and Kavach provisions automatically before initial setup finishes.',
      specs: [
        { key: 'Setup Duration', val: '< 30 seconds' },
        { key: 'Supported Android', val: 'Android 10 through 15' },
        { key: 'Computer Needed?', val: 'Zero PC/ADB Cable Needed' },
      ],
      icon: QrCode,
    },
    {
      id: 1,
      title: 'Device Owner Binding',
      label: 'Hardware-level binding',
      role: 'Non-removable DPC Anchor',
      description: 'Binds into the operating system at highest Android enterprise privilege. Blocks settings reset, developer options, USB data transfers, and safe mode evasion.',
      specs: [
        { key: 'Uninstall Prevention', val: '100% Tamper Proof' },
        { key: 'System Access', val: 'Device Owner Level' },
        { key: 'Knox Integration', val: 'Samsung Hardware Attestation' },
      ],
      icon: Shield,
    },
    {
      id: 2,
      title: 'Sub-Second Heartbeat',
      label: 'Real-time telemetry',
      role: 'AWS Lightsail Cluster Link',
      description: 'Encrypted duplex WebSocket maintains a continuous live heartbeat with the cloud. Track battery, current SIM number, device geolocation, and online health.',
      specs: [
        { key: 'WebSocket Ping', val: 'Sub-350ms Roundtrip' },
        { key: 'Data Consumption', val: '< 2 MB per month' },
        { key: 'SIM Swap Detection', val: 'Instant Push Alert' },
      ],
      icon: Radio,
    },
    {
      id: 3,
      title: 'Pre-Due Date Reminders',
      label: 'Automated recovery loop',
      role: 'WhatsApp & Screen Alerts',
      description: 'Automates customer nudges 3 days before EMI is due. Sends official WhatsApp messages with your store UPI payment link and popups full-screen audible reminders.',
      specs: [
        { key: 'Notification Channels', val: 'WhatsApp + Push + Full Screen' },
        { key: 'Store Branding', val: 'Custom Store Name & Logo' },
        { key: 'Payment Link', val: 'Dynamic UPI QR Code' },
      ],
      icon: ArrowRight,
    },
    {
      id: 4,
      title: 'Instant Kiosk Clamping',
      label: 'Enforced collection',
      role: 'Tamper-Proof Kiosk Lock',
      description: 'If EMI bounces past the grace period, the phone locks into an impenetrable kiosk screen. Only emergency calls and your UPI QR code remain active. Auto-unlocks on payment.',
      specs: [
        { key: 'Lock Trigger Time', val: '< 350ms from Dashboard' },
        { key: 'Unlock Latency', val: 'Instant Upon UPI Payment' },
        { key: 'Emergency Dialer', val: '112 Passthrough Active' },
      ],
      icon: Lock,
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 overflow-hidden bg-[#040705] border-t border-white/[0.04]">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#C7FF3D]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B100D] border border-white/10 text-xs font-mono text-[#C7FF3D]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF3D]" />
            <span>THE 30-SECOND WORKFLOW</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-[#F5F7F4] leading-[1.12]">
            One scan.
            <br />
            <span className="font-serif italic font-normal text-[#C7FF3D]">
              Permanent device ownership.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#9BA598] leading-relaxed">
            From initial customer unboxing to automated UPI collection, Kavach runs on complete autopilot without recurring server maintenance fees.
          </p>
        </div>

        {/* 5-Node Interactive Circuit */}
        <div className="relative mb-12">
          {/* Conduit Line */}
          <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-[2px] bg-white/[0.08] -z-0">
            <div
              className="h-full bg-gradient-to-r from-transparent via-[#C7FF3D] to-transparent w-36 transition-all duration-700 ease-in-out shadow-[0_0_15px_#C7FF3D]"
              style={{
                marginLeft: `${(signalPosition / 4) * 80}%`,
              }}
            />
          </div>

          {/* 5 Nodes Horizontal Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {nodes.map((node, idx) => {
              const IconComponent = node.icon;
              const isSelected = selectedNode === idx;
              const isPulseHere = signalPosition === idx;

              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(idx)}
                  className={`btn-press text-left rounded-2xl p-5 border transition-all duration-200 relative group flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#0E1511] border-[#C7FF3D]/40 shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(199,255,61,0.15)]'
                      : 'bg-[#090E0B]/80 border-white/[0.07] hover:border-white/20 hover:bg-[#0C120E]'
                  }`}
                >
                  <div>
                    {/* Icon + Beacon */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-[#C7FF3D] text-[#070A08] shadow-[0_0_15px_rgba(199,255,61,0.4)]'
                            : 'bg-white/[0.05] text-[#9BA598] group-hover:text-[#F5F7F4]'
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <div className="flex items-center gap-1.5">
                        {isPulseHere && (
                          <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-ping" />
                        )}
                        <span className="text-[11px] font-mono text-[#626D60]">0{idx + 1}</span>
                      </div>
                    </div>

                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#C7FF3D] mb-1">
                      {node.label}
                    </div>
                    <div className="text-base font-display font-semibold text-[#F5F7F4] mb-2 leading-snug">
                      {node.title}
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/[0.06] text-[11px] text-[#9BA598] flex items-center justify-between">
                    <span>Stage 0{idx + 1}</span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isSelected ? 'text-[#C7FF3D] translate-x-1' : 'text-[#626D60]'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Node Detailed Inspector Card */}
        <div className="dark-glass rounded-2xl p-6 sm:p-8 border border-[#C7FF3D]/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Story */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-full bg-[#C7FF3D]/10 text-[#C7FF3D] border border-[#C7FF3D]/20">
                  {nodes[selectedNode].label}
                </span>
                <span className="text-xs font-mono text-[#9BA598]">
                  PIPELINE STAGE 0{selectedNode + 1} OF 05
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F5F7F4]">
                {nodes[selectedNode].title} ({nodes[selectedNode].role})
              </h3>

              <p className="text-base text-[#9BA598] leading-relaxed">
                {nodes[selectedNode].description}
              </p>
            </div>

            {/* Right Technical Specs Grid */}
            <div className="lg:col-span-5 bg-[#060907] border border-white/[0.08] rounded-xl p-5 space-y-3">
              <div className="text-xs font-mono text-[#F5F7F4] flex items-center justify-between border-b border-white/[0.06] pb-2">
                <span>SPECIFICATION</span>
                <span className="text-[#C7FF3D]">FIELD VERIFIED</span>
              </div>

              {nodes[selectedNode].specs.map((spec) => (
                <div key={spec.key} className="flex justify-between items-center text-xs py-1">
                  <span className="text-[#9BA598]">{spec.key}</span>
                  <span className="font-mono font-medium text-[#F5F7F4] text-right">{spec.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
