import {
  CONTACT_EMAIL,
  LINKEDIN_URL,
  RETAILER_APK_URL,
  RETAILER_APP_URL,
  WHATSAPP_HELLO_URL,
} from '../seo/site';
import { KavachMark } from './KavachMark';

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
  lang?: string;
}

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: 'product',
    links: [
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Lock screen', href: '#lock-screen' },
      { label: 'Get your price', href: '#pricing' },
      { label: 'Shop login', href: RETAILER_APP_URL, external: true },
      { label: 'Download shop app (APK)', href: RETAILER_APK_URL },
    ],
  },
  {
    title: 'guides',
    links: [
      { label: 'What is an EMI locker', href: '/emi-locker-app' },
      { label: 'EMI locker ऐप हिंदी में', href: '/hi/emi-locker-app', lang: 'hi-IN' },
      { label: 'How EMI locker pricing works', href: '/emi-locker-price' },
      { label: 'Best EMI locker apps in India', href: '/best-emi-locker-app-india' },
      { label: 'Kavach vs other EMI lockers', href: '/alternatives' },
    ],
  },
  {
    title: 'contact',
    links: [
      { label: 'WhatsApp', href: WHATSAPP_HELLO_URL, external: true },
      { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
      { label: 'LinkedIn', href: LINKEDIN_URL, external: true },
    ],
  },
];

const linkClass =
  'text-[#9CA698] hover:text-[#F4F6F0] transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8FF2E]';

export function Footer() {
  return (
    <footer className="relative bg-[#040604] border-t border-white/[0.07] text-[#9CA698] z-10">
      <div className="w-full max-w-[95vw] 2xl:max-w-[1820px] mx-auto px-4 sm:px-7 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-14">
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-2.5">
              <KavachMark size="sm" />
              <span className="font-display font-semibold text-[15px] text-[#F4F6F0] tracking-tight">Kavach</span>
            </div>
            <p className="text-[14px] leading-[1.6] max-w-[300px]">
              The EMI locker app for Indian mobile shops. You decide every lock.
            </p>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-[14px]">
            {COLUMNS.map((column) => (
              <div key={column.title}>
                <h2 className="font-mono text-[12px] text-[#6E786B] mb-3.5">{column.title}</h2>
                <ul className="space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        lang={link.lang}
                        hrefLang={link.lang}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className={linkClass}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="py-8 border-t border-white/[0.07] text-[12px] font-mono text-[#6E786B]">
          © 2026 Kavach Lock Technologies Pvt. Ltd. · Bengaluru, India
        </div>
      </div>
    </footer>
  );
}
