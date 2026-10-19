import { useState, useEffect } from 'react';
import { SignalRibbonBackground } from './components/SignalRibbonBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OemCompatibilityRow } from './components/OemCompatibilityRow';
import { ProtectionSection } from './components/ProtectionSection';
import { SafetyIntelligenceSection } from './components/SafetyIntelligenceSection';
import { GetPriceSection } from './components/GetPriceSection';
import { LaunchSection } from './components/LaunchSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { SimulationModal } from './components/SimulationModal';

export function App() {
  const [simulationOpen, setSimulationOpen] = useState(false);

  // One shared IntersectionObserver reveals every [data-reveal] block once, then lets go.
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleScrollToCta = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#050705] text-[#F4F6F0] selection:bg-[#C8FF2E] selection:text-[#050705] overflow-x-hidden font-sans">
      <SignalRibbonBackground />

      <Navbar onExploreClick={handleScrollToCta} />

      <main className="relative z-10 w-full">
        <HeroSection onExploreClick={handleScrollToCta} onOpenSimulation={() => setSimulationOpen(true)} />
        <OemCompatibilityRow />
        <ProtectionSection />
        <SafetyIntelligenceSection />
        <GetPriceSection />
        <LaunchSection />
        <div id="contact">
          <FinalCtaSection />
        </div>
      </main>

      <Footer />

      <SimulationModal isOpen={simulationOpen} onClose={() => setSimulationOpen(false)} />
    </div>
  );
}

export default App;
