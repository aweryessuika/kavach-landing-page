import type { ReactNode } from 'react';
import type { Faq, PageLang } from './types';
import { CONTACT_EMAIL, RETAILER_APP_URL, KAVACH_FACTS } from './site';

const NAV_LINKS = [
  { label: 'EMI locker app', href: '/emi-locker-app' },
  { label: 'Price', href: '/emi-locker-price' },
  { label: 'Compare', href: '/best-emi-locker-app-india' },
  { label: 'Alternatives', href: '/alternatives' },
  { label: 'Download', href: '/download' },
];

const FOOTER_GUIDES = [
  { label: 'EMI locker app for mobile shops', href: '/emi-locker-app' },
  { label: 'Best EMI locker apps in India', href: '/best-emi-locker-app-india' },
  { label: 'EMI locker price and keys', href: '/emi-locker-price' },
  { label: 'Download the EMI locker APK', href: '/download' },
  { label: 'EMI locker ऐप हिंदी में', href: '/hi/emi-locker-app' },
];

// Page chrome that changes with the page language. Navigation and footer stay in
// English on every page because they link to English pages.
const CHROME_TEXT: Record<
  PageLang,
  { skipLink: string; faqHeading: string; ctaTitle: string; ctaBody: string; ctaButton: string }
> = {
  'en-IN': {
    skipLink: 'Skip to content',
    faqHeading: 'Common questions',
    ctaTitle: `Protect your next ${KAVACH_FACTS.freePhones} phones free`,
    ctaBody: 'After that, you pay per phone at a price set for your shop. No monthly fee, no commission, and you decide every lock.',
    ctaButton: 'Start free',
  },
  'hi-IN': {
    skipLink: 'सीधे मुख्य हिस्से पर जाएँ',
    faqHeading: 'आम सवाल',
    ctaTitle: `अगले ${KAVACH_FACTS.freePhones} फ़ोन फ्री में सुरक्षित करें`,
    ctaBody: 'उसके बाद हर फ़ोन का दाम आपकी दुकान के हिसाब से। न महीने की फ़ीस, न कमीशन, और हर लॉक का फ़ैसला आपका।',
    ctaButton: 'फ्री में शुरू करें',
  },
};

const FOOTER_COMPARE = [
  { label: 'All alternatives', href: '/alternatives' },
  { label: 'Kavach vs ZEN EMI Locker', href: '/alternatives/zen-emi-locker' },
  { label: 'Kavach vs EmiVault', href: '/alternatives/emivault' },
  { label: 'Kavach vs InstenLock', href: '/alternatives/instenlock' },
  { label: 'Kavach vs EasyLock', href: '/alternatives/easylock' },
  { label: 'Kavach vs Samsung Knox Guard', href: '/alternatives/knox-guard' },
];

function LogoMark() {
  return (
    <span className="w-7 h-7 rounded-lg bg-[#C8FF2E] text-[#050705] flex items-center justify-center">
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="w-4 h-4"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5.5 5.5L10 10L5.5 14.5" />
        <path d="M10.5 5.5L15 10L10.5 14.5" />
      </svg>
    </span>
  );
}

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8FF2E]';

function SiteHeader({ currentPath }: { currentPath: string }) {
  return (
    <header className="border-b border-white/[0.07] bg-[#050705]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-4">
          <a href="/" className={`flex items-center gap-2.5 rounded-lg ${focusRing}`}>
            <LogoMark />
            <span className="font-display font-semibold text-base text-[#F4F6F0] tracking-tight">Kavach</span>
            <span className="sr-only">home</span>
          </a>
          <a
            href="/#contact"
            className={`md:hidden px-4 py-2 rounded-full bg-[#C8FF2E] text-[#050705] text-sm font-semibold ${focusRing}`}
          >
            Start free
          </a>
        </div>
        <nav aria-label="Main" className="overflow-x-auto [scrollbar-width:none]">
          <ul className="flex items-center gap-1 text-sm whitespace-nowrap">
            {NAV_LINKS.map((link) => {
              const active = currentPath === link.href || currentPath.startsWith(`${link.href}/`);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={`block px-3 py-2 rounded-full transition-colors duration-200 ${focusRing} ${
                      active
                        ? 'bg-white/[0.08] text-[#F4F6F0]'
                        : 'text-[#9CA698] hover:text-[#F4F6F0] hover:bg-white/[0.05]'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <a
          href="/#contact"
          className={`hidden md:inline-block px-4 py-2 rounded-full bg-[#C8FF2E] hover:bg-[#D5FF54] text-[#050705] text-sm font-semibold transition-colors duration-200 ${focusRing}`}
        >
          Start free
        </a>
      </div>
    </header>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="font-mono text-xs text-[#6E786B] mb-3">{title}</h2>
      <ul className="space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={`text-[#9CA698] hover:text-[#F4F6F0] rounded ${focusRing}`}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#040604]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4 space-y-3">
          <a href="/" className={`inline-flex items-center gap-2.5 rounded-lg ${focusRing}`}>
            <LogoMark />
            <span className="font-display font-semibold text-base text-[#F4F6F0]">Kavach</span>
          </a>
          <p className="text-sm text-[#9CA698] max-w-xs text-pretty">
            The EMI locker app for Indian mobile shops. Every phone you sell comes back paid.
          </p>
        </div>
        <div className="md:col-span-8 grid gap-8 sm:grid-cols-3">
          <FooterColumn title="guides" links={FOOTER_GUIDES} />
          <FooterColumn title="compare" links={FOOTER_COMPARE} />
          <FooterColumn
            title="kavach"
            links={[
              { label: 'Home', href: '/' },
              { label: 'Shop login', href: RETAILER_APP_URL },
              { label: 'Contact', href: `mailto:${CONTACT_EMAIL}` },
            ]}
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-10 text-xs font-mono text-[#6E786B]">
        © 2026 Kavach Lock Technologies Pvt. Ltd. · Bengaluru, India
      </div>
    </footer>
  );
}

export function FaqSection({ faqs, heading }: { faqs: Faq[]; heading: string }) {
  if (faqs.length === 0) return null;
  return (
    <section aria-labelledby="faq-heading" className="py-12 border-t border-white/[0.07]">
      <h2 id="faq-heading" className="font-display font-semibold text-3xl text-[#F4F6F0] tracking-tight mb-6">
        {heading}
      </h2>
      <div className="divide-y divide-white/[0.07] rounded-2xl border border-white/[0.08] bg-[#0B0F0B]">
        {faqs.map((faq) => (
          <details key={faq.q} className="group px-5 py-4">
            <summary
              className={`cursor-pointer list-none flex items-start justify-between gap-4 text-base font-semibold text-[#F4F6F0] rounded ${focusRing}`}
            >
              <h3 className="text-balance">{faq.q}</h3>
              <span aria-hidden="true" className="text-[#C8FF2E] transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-base text-[#9CA698] text-pretty">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function CtaBand({ lang }: { lang: PageLang }) {
  const text = CHROME_TEXT[lang];
  return (
    <section className="my-12 rounded-3xl bg-[#C8FF2E] text-[#050705] p-8 sm:p-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div className="space-y-2 max-w-xl">
        <h2 className="font-display font-bold text-3xl tracking-tight text-balance">
          {text.ctaTitle}
        </h2>
        <p className="text-base text-pretty">{text.ctaBody}</p>
      </div>
      <a
        href="/#contact"
        className="shrink-0 inline-block px-6 py-3 rounded-full bg-[#050705] text-[#F4F6F0] text-base font-semibold hover:bg-[#1F1F1F] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#050705]"
      >
        {text.ctaButton}
      </a>
    </section>
  );
}

export interface Crumb {
  label: string;
  href: string;
}

export function SeoLayout({
  currentPath,
  crumbs,
  faqs,
  showCta = true,
  lang = 'en-IN',
  children,
}: {
  currentPath: string;
  crumbs: Crumb[];
  faqs: Faq[];
  showCta?: boolean;
  lang?: PageLang;
  children?: ReactNode;
}) {
  const text = CHROME_TEXT[lang];
  return (
    <div className="min-h-screen flex flex-col bg-[#050705] text-[#F4F6F0] font-sans">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-full focus:bg-[#C8FF2E] focus:text-[#050705]"
      >
        {text.skipLink}
      </a>
      <SiteHeader currentPath={currentPath} />
      <main id="main" className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="pt-6 text-xs font-mono text-[#6E786B]">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <a href="/" className={`hover:text-[#F4F6F0] rounded ${focusRing}`}>
                  kavach
                </a>
              </li>
              {crumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  {index === crumbs.length - 1 ? (
                    <span aria-current="page" className="text-[#9CA698]">
                      {crumb.label.toLowerCase()}
                    </span>
                  ) : (
                    <a href={crumb.href} className={`hover:text-[#F4F6F0] rounded ${focusRing}`}>
                      {crumb.label.toLowerCase()}
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {children}
        <FaqSection faqs={faqs} heading={text.faqHeading} />
        {showCta && <CtaBand lang={lang} />}
      </main>
      <SiteFooter />
    </div>
  );
}
