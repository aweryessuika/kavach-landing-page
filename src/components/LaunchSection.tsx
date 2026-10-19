import { CONTACT_EMAIL, LAUNCH_AREAS, WHATSAPP_HELLO_URL } from '../seo/site';

const PROMISES = [
  {
    title: 'You talk to the people who built it',
    body: 'No call centre. Message us on WhatsApp and the Kavach team answers.',
  },
  {
    title: 'We set up your first phones with you',
    body: 'Your first protected phones are done together over WhatsApp, until you are comfortable doing it alone.',
  },
  {
    title: 'If it does not work on your phones, we say so',
    body: 'If Kavach does not set up cleanly on the models you sell, we will tell you before you pay anything.',
  },
];

function formatAreas(areas: readonly string[]): string {
  if (areas.length <= 1) return areas.join('');
  return `${areas.slice(0, -1).join(', ')} and ${areas[areas.length - 1]}`;
}

// Replaces the old "case studies" block. Kavach is just launching, so this section
// states that plainly instead of showing invented numbers or testimonials.
export function LaunchSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 z-10">
      <div className="w-full max-w-[95vw] 2xl:max-w-[1820px] mx-auto px-4 sm:px-7 lg:px-10">
        <div data-reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-5 space-y-5">
            <h2 className="text-[36px] sm:text-[48px] font-display font-semibold tracking-[-0.03em] text-[#F4F6F0] leading-[1.06] text-balance">
              New, and <span className="font-serif italic font-normal">straight</span> with you.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#9CA698] leading-[1.65]">
              Kavach is just starting out. We are onboarding mobile shops in {formatAreas(LAUNCH_AREAS)} first, and
              any Android shop in India can start on WhatsApp today. When our first shops finish a full EMI cycle
              with Kavach, their stories will go here, not before.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={WHATSAPP_HELLO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press px-5 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] text-[#F4F6F0] text-[14px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8FF2E]"
              >
                Message us on WhatsApp
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="px-2 py-3 text-[14px] text-[#9CA698] hover:text-[#F4F6F0] underline underline-offset-4 decoration-white/20 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8FF2E]"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          <ul className="lg:col-span-6 lg:col-start-7 divide-y divide-white/[0.07] border-y border-white/[0.07]">
            {PROMISES.map((promise) => (
              <li key={promise.title} className="py-6 space-y-1.5">
                <p className="text-[18px] font-semibold text-[#F4F6F0]">{promise.title}</p>
                <p className="text-[15px] text-[#9CA698] leading-[1.6]">{promise.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
