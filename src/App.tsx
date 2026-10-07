import { useState } from 'react';
import { SignalRibbonBackground } from './components/SignalRibbonBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OemCompatibilityRow } from './components/OemCompatibilityRow';
import { ProtectionSection } from './components/ProtectionSection';
import { NetworkEcosystemSection } from './components/NetworkEcosystemSection';
import { SafetyIntelligenceSection } from './components/SafetyIntelligenceSection';
import { BentoGridSection } from './components/BentoGridSection';
import { MetricsTrustSection } from './components/MetricsTrustSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { SimulationModal } from './components/SimulationModal';

export function App() {
  const [simulationOpen, setSimulationOpen] = useState(false);

  const handleScrollToCta = () => {
    const ctaSection = document.getElementById('contact') || document.querySelector('form');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030604] text-[#F5F7F4] selection:bg-[#C7FF3D] selection:text-[#070A08] overflow-x-hidden font-sans">
      {/* 1. Procedural Luminous Vortex Filament Background (Matching Video-6454.mp4) */}
      <SignalRibbonBackground />

      {/* 2. Sticky Glass Nav Header */}
      <Navbar
        onExploreClick={handleScrollToCta}
        onOpenSimulation={() => setSimulationOpen(true)}
      />

      {/* 3. Main Stream of Sections */}
      <main className="relative z-10 w-full">
        {/* Section 1: Hero Node Workflow */}
        <HeroSection
          onExploreClick={handleScrollToCta}
          onOpenSimulation={() => setSimulationOpen(true)}
        />

        {/* Section 1.5: OEM Chipset & Android Brand Compatibility Bar */}
        <OemCompatibilityRow />

        {/* Section 2: Most EMI recovery is lost in delay */}
        <ProtectionSection />

        {/* Section 3: One scan. Permanent device ownership */}
        <NetworkEcosystemSection />

        {/* Section 4: Live Kiosk Emulator & Enforcement Intelligence */}
        <SafetyIntelligenceSection />

        {/* Section 5: Bento Grid — The retailer sees the whole fleet */}
        <BentoGridSection />

        {/* Section 6: Numbers you do not have to explain away */}
        <MetricsTrustSection />

        {/* Section 7: Acid-Lime Card — Pick the default you hate most */}
        <div id="contact">
          <FinalCtaSection />
        </div>
      </main>

      {/* 4. Quiet Dark Footer */}
      <Footer />

      {/* 5. Interactive Simulation Modal */}
      <SimulationModal
        isOpen={simulationOpen}
        onClose={() => setSimulationOpen(false)}
      />
    </div>
  );
}

export default App;
