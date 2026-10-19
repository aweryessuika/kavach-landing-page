// Shared constants for the homepage (src/components) and the prerendered SEO pages
// (src/seo), so links and facts never drift apart.
export const SITE_URL = 'https://kavachlock.tech';
export const RETAILER_APP_URL = 'https://13.205.109.18.sslip.io';
export const RETAILER_APK_URL = `${RETAILER_APP_URL}/api/retailer/download/kavach-retailer.apk`;
export const CONTACT_EMAIL = 'pranjay@kavachlock.tech';
export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;
export const LINKEDIN_URL = 'https://www.linkedin.com/in/pranjayrathore';

// Kavach's WhatsApp number in international format, without "+".
const WHATSAPP_NUMBER = '919109300253';

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_HELLO_URL = whatsappUrl('Namaste Kavach team, I run a mobile shop and want to know more.');

// Date the competitor facts on the comparison pages were last checked against each
// vendor's own website. Update it whenever those facts are re-verified.
export const COMPETITORS_CHECKED_ON = '2026-10-19';
export const COMPETITORS_CHECKED_LABEL = '19 October 2026';

// Facts about Kavach that the site repeats. The per-phone price is deliberately not
// here: it is quoted per shop (volume and brands), so the site never publishes a rate.
const ANDROID_MIN_VERSION = 10;
const ANDROID_MAX_VERSION = 15;

export const KAVACH_FACTS = {
  freePhones: 10,
  averageSetupSeconds: 48,
  phoneModels: '120+',
  androidVersions: `Android ${ANDROID_MIN_VERSION} to ${ANDROID_MAX_VERSION}`,
  androidVersionsHi: `Android ${ANDROID_MIN_VERSION} से ${ANDROID_MAX_VERSION}`,
  brands: ['Samsung', 'Xiaomi', 'Redmi', 'Vivo', 'Oppo', 'Realme', 'Motorola', 'OnePlus', 'iQOO'],
} as const;

// The places Kavach is onboarding shops first. Shown as a plain launch fact, not as
// city landing pages: marketing targets all of India.
export const LAUNCH_AREAS = ['Indore', 'Ashta', 'Bhopal'] as const;
