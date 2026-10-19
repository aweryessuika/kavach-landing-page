import { useId, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { KAVACH_FACTS, whatsappUrl } from '../seo/site';

const MIN_PHONES = 5;
const MAX_PHONES = 200;
const STEP = 5;

const PRICE_FACTORS = [
  {
    title: 'How many phones you sell on EMI',
    body: 'Shops that protect more phones each month pay less per phone.',
  },
  {
    title: 'Which brands you sell',
    body: 'Tell us your usual mix, like Vivo, Redmi or Samsung.',
  },
  {
    title: 'One shop or many',
    body: 'Branches and distributors share one key wallet with staff logins.',
  },
];

// Kavach does not publish a per-phone rate: it is quoted per shop. This section turns
// the old price calculator into a WhatsApp request that carries the shop's volume.
export function GetPriceSection() {
  const [phones, setPhones] = useState(30);
  const sliderId = useId();
  const percent = ((phones - MIN_PHONES) / (MAX_PHONES - MIN_PHONES)) * 100;
  const phonesLabel = phones >= MAX_PHONES ? `${MAX_PHONES}+` : String(phones);

  const message = `Namaste Kavach team, I sell about ${phonesLabel} phones on EMI every month. Please share the per-phone price for my shop.`;

  return (
    <section id="pricing" className="relative py-24 lg:py-32 z-10">
      <div className="w-full max-w-[95vw] 2xl:max-w-[1820px] mx-auto px-4 sm:px-7 lg:px-10">
        <div data-reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <h2 className="lg:col-span-7 text-[36px] sm:text-[48px] lg:text-[54px] font-display font-semibold tracking-[-0.03em] text-[#F4F6F0] leading-[1.06] text-balance">
            A price made for{' '}
            <span className="font-serif italic font-normal">your shop.</span>
          </h2>
          <p className="lg:col-span-5 text-[15px] sm:text-[16px] text-[#9CA698] leading-[1.65]">
            You pay for each phone you protect, once for the whole loan, with no cut of your customer’s EMI. The
            exact price depends on your shop, so tell us a little and we will send it on WhatsApp.
          </p>
        </div>

        <div data-reveal className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 rounded-[24px] border border-white/[0.1] bg-[#0B0F0B] p-7 sm:p-10 flex flex-col gap-8">
            <div className="space-y-5">
              <label htmlFor={sliderId} className="block text-[20px] sm:text-[22px] font-display font-medium text-[#F4F6F0]">
                How many phones do you sell on EMI each month?
              </label>
              <input
                id={sliderId}
                type="range"
                min={MIN_PHONES}
                max={MAX_PHONES}
                step={STEP}
                value={phones}
                onChange={(e) => setPhones(Number(e.target.value))}
                aria-valuetext={`${phonesLabel} phones a month`}
                className="w-full kavach-slider"
                style={{
                  background: `linear-gradient(to right, #C8FF2E ${percent}%, rgba(255,255,255,0.08) ${percent}%)`,
                  borderRadius: '9999px',
                  height: '8px',
                }}
              />
              <div className="flex justify-between items-baseline text-[12px] font-mono text-[#6E786B]">
                <span>{MIN_PHONES}</span>
                <span className="text-[28px] sm:text-[32px] font-display font-semibold text-[#F4F6F0] tracking-tight">
                  {phonesLabel} <span className="text-[14px] font-sans font-normal text-[#9CA698]">phones a month</span>
                </span>
                <span>{MAX_PHONES}+</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-auto">
              <a
                href={whatsappUrl(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#C8FF2E] hover:bg-[#D5FF54] text-[#050705] font-semibold text-[14.5px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8FF2E]"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Get my price on WhatsApp
              </a>
              <p className="text-[13px] text-[#9CA698]">
                First {KAVACH_FACTS.freePhones} phones are free to try.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-[24px] border border-white/[0.07] p-7 sm:p-10">
            <p className="text-[12px] font-mono text-[#6E786B] mb-6">what your price depends on</p>
            <ul className="space-y-6">
              {PRICE_FACTORS.map((factor) => (
                <li key={factor.title} className="space-y-1.5">
                  <p className="text-[16px] font-semibold text-[#F4F6F0]">{factor.title}</p>
                  <p className="text-[14.5px] text-[#9CA698] leading-[1.6]">{factor.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
