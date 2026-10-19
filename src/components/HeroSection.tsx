import { Play } from 'lucide-react';
import { KAVACH_FACTS, WHATSAPP_HELLO_URL } from '../seo/site';
import { HeroCounterScene } from './HeroCounterScene';

interface HeroSectionProps {
  onExploreClick?: () => void;
  onOpenSimulation?: () => void;
}

export function HeroSection({ onExploreClick, onOpenSimulation }: HeroSectionProps) {
  return (
    <section
      id="product"
      className="relative min-h-[88vh] pt-28 pb-12 lg:pt-36 lg:pb-20 flex items-center"
    >
      <div className="w-full max-w-[95vw] 2xl:max-w-[1820px] mx-auto px-4 sm:px-7 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-14 xl:gap-10 items-center">
          <div className="xl:col-span-5 space-y-6 max-w-[640px]">
            <p className="text-[12px] font-mono text-[#9CA698]">
              EMI locker app for Indian mobile shops
            </p>

            <h1 className="text-[40px] sm:text-[52px] xl:text-[60px] font-display font-semibold tracking-[-0.03em] text-[#F4F6F0] leading-[1.05] text-balance">
              <span className="sr-only">Kavach EMI locker: </span>
              Every phone you sell{' '}
              <span className="font-serif italic font-normal tracking-[-0.01em]">comes back paid.</span>
            </h1>

            <p
              lang="hi-Latn"
              className="text-[17px] sm:text-[19px] font-medium text-[#D2D8CE] leading-[1.45] max-w-[480px]"
            >
              ₹15,000 ka phone, kist ruk gayi? Ek tap mein lock. Paisa aate hi unlock.
            </p>

            <p className="text-[15.5px] sm:text-[16.5px] text-[#9CA698] max-w-[480px] leading-[1.6]">
              Sell Android phones on EMI without the fear of a customer disappearing. Set Kavach up at your counter
              in about {KAVACH_FACTS.averageSetupSeconds} seconds. You decide every lock; nothing locks on a timer.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={onExploreClick}
                className="btn-press px-6 py-3 rounded-full bg-[#C8FF2E] hover:bg-[#D5FF54] text-[#050705] font-semibold text-[14px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8FF2E]"
              >
                Start free with {KAVACH_FACTS.freePhones} phones
              </button>
              <a
                href={WHATSAPP_HELLO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press px-5 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] text-[#F4F6F0] text-[14px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8FF2E]"
              >
                WhatsApp par baat karein
              </a>
            </div>

            <button
              type="button"
              onClick={onOpenSimulation}
              className="inline-flex items-center gap-2 text-[13.5px] text-[#9CA698] hover:text-[#F4F6F0] underline underline-offset-4 decoration-white/20 hover:decoration-[#C8FF2E] transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8FF2E]"
            >
              <Play className="w-3 h-3 fill-current" aria-hidden="true" />
              See a phone get locked, 1 minute demo
            </button>
          </div>

          <div className="xl:col-span-7">
            <HeroCounterScene />
          </div>
        </div>
      </div>
    </section>
  );
}
