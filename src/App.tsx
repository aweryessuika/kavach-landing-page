import { useState } from 'react';
import { SignalRibbonBackground } from './components/SignalRibbonBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OemCompatibilityRow } from './components/OemCompatibilityRow';
import { ProtectionSection } from './components/ProtectionSection';
import { NetworkEcosystemSection } from './components/NetworkEcosystemSection';
import { BentoGridSection } from './components/BentoGridSection';
import { SafetyIntelligenceSection } from './components/SafetyIntelligenceSection';
import { MetricsTrustSection } from './components/MetricsTrustSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { SimulationModal } from './components/SimulationModal';

export function App() {
  const [simulationOpen, setSimulationOpen] = useState(false);

  const handleScrollToCta = () => {
    const ctaSection =
      document.getElementById('contact') || document.querySelector('form');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050705] text-[#F4F6F0] selection:bg-[#C8FF2E] selection:text-[#050705] overflow-x-hidden font-sans">
      {/* 1. 3D Volumetric Parabolic Silk Ribbon Shader (Matching Video-6454.mp4) */}
      <SignalRibbonBackground />

      {/* 2. Floating Minimal Header */}
      <Navbar
        onExploreClick={handleScrollToCta}
        onOpenSimulation={() => setSimulationOpen(true)}
      />

      {/* 3. Main Narrative Stream */}
      <main className="relative z-10 w-full">
        {/* Hero + 3D Tilted Workflow Canvas */}
        <HeroSection
          onExploreClick={handleScrollToCta}
          onOpenSimulation={() => setSimulationOpen(true)}
        />

        {/* Connected OEM Brand Squircles */}
        <OemCompatibilityRow />

        {/* Story Beats 01, 02, 03 (Waterfall, Manual Control Card, 3D Isometric Bars) */}
        <ProtectionSection />

        {/* Scroll-Expanding Acid-Lime Manifesto + Reliability Dual Cards */}
        <NetworkEcosystemSection />

        {/* Daily View ('A Tuesday, seen from Kavach' — Weekly Matrix, Ring Gauge, Sine Waves) */}
        <BentoGridSection />

        {/* Interactive Handset Preview (Locked, Offline PIN, Normal) */}
        <SafetyIntelligenceSection />

        {/* Numbers + Shop Owner Stories + Interactive Pricing Slider + 3 Tier Cards */}
        <MetricsTrustSection onExploreClick={handleScrollToCta} />

        {/* Two-Column Split Final CTA */}
        <div id="contact">
          <FinalCtaSection />
        </div>
      </main>

      {/* 4. Ultra-Dark Editorial Footer */}
      <Footer />

      {/* 5. Interactive Live Lock Preview Modal */}
      <SimulationModal
        isOpen={simulationOpen}
        onClose={() => setSimulationOpen(false)}
      />
    </div>
  );
}

export default App;
