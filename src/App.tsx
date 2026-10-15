import { useState, useEffect, useCallback } from 'react';
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
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Single shared root IntersectionObserver for 1-way GPU [data-reveal] elements (0 React re-renders)
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (let i = 0; i < entries.length; i++) {
          const entry = entries[i];
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true');
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNotify = useCallback((msg: string) => {
    setToastMessage(msg);
  }, []);

  useEffect(() => {
    if (!toastMessage) return;
    const timer = window.setTimeout(() => {
      setToastMessage(null);
    }, 3200);
    return () => window.clearTimeout(timer);
  }, [toastMessage]);

  const handleScrollToCta = () => {
    const ctaSection =
      document.getElementById('contact') || document.querySelector('form');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050705] text-[#F4F6F0] selection:bg-[#C8FF2E] selection:text-[#050705] overflow-x-hidden font-sans">
      {/* 1. Adaptive 3D Volumetric Silk Ribbon Shader */}
      <SignalRibbonBackground />

      {/* 2. Floating Minimal Header */}
      <Navbar
        onExploreClick={handleScrollToCta}
        onOpenSimulation={() => setSimulationOpen(true)}
      />

      {/* 3. Main Narrative Stream */}
      <main className="relative z-10 w-full">
        <HeroSection
          onExploreClick={handleScrollToCta}
          onOpenSimulation={() => setSimulationOpen(true)}
          onNotify={handleNotify}
        />

        <OemCompatibilityRow />

        <ProtectionSection onNotify={handleNotify} />

        <NetworkEcosystemSection />

        <BentoGridSection />

        <SafetyIntelligenceSection />

        <MetricsTrustSection onExploreClick={handleScrollToCta} />

        <div id="contact">
          <FinalCtaSection />
        </div>
      </main>

      {/* 4. Ultra-Dark Editorial Footer */}
      <Footer />

      {/* 5. Interactive Live Lock & 4-Step QR Setup Modal */}
      <SimulationModal
        isOpen={simulationOpen}
        onClose={() => setSimulationOpen(false)}
      />

      {/* 6. Lightweight Sonner-Style Floating Feedback Toast */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 right-5 z-50 px-4 py-3 rounded-xl bg-[#0D120D] border border-[#C8FF2E]/35 shadow-[0_18px_45px_rgba(0,0,0,0.85)] flex items-center gap-2.5 text-[12px] font-mono text-[#F4F6F0] transition-all duration-200"
        >
          <span className="w-2 h-2 rounded-full bg-[#C8FF2E] shadow-[0_0_8px_#C8FF2E] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
