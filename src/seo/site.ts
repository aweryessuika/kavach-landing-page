// Shared constants for the prerendered SEO pages (src/seo). Kept in sync with the links
// used by the React homepage components.
export const SITE_URL = 'https://kavachlock.tech';
export const RETAILER_APP_URL = 'https://13.205.109.18.sslip.io';
export const RETAILER_APK_URL = `${RETAILER_APP_URL}/api/retailer/download/kavach-retailer.apk`;
export const CONTACT_EMAIL = 'pranjay@kavachlock.tech';
export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

// Date the competitor facts on the comparison pages were last checked against each
// vendor's own website. Update it whenever those facts are re-verified.
export const COMPETITORS_CHECKED_ON = '2026-10-19';
export const COMPETITORS_CHECKED_LABEL = '19 October 2026';

// Facts about Kavach that the SEO pages repeat. They must match the homepage copy.
const PRICE_PER_PHONE_INR = 100;

export const KAVACH_FACTS = {
  pricePerPhoneInr: PRICE_PER_PHONE_INR,
  pricePerPhone: `₹${PRICE_PER_PHONE_INR}`,
  freePhones: 10,
  averageSetupSeconds: 48,
  phoneModels: '120+',
  androidVersions: 'Android 10 to 15',
  brands: ['Samsung', 'Xiaomi', 'Redmi', 'Vivo', 'Oppo', 'Realme', 'Motorola', 'OnePlus', 'iQOO'],
} as const;
