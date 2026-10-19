import { KAVACH_FACTS } from './site';

// Every competitor fact below comes from that company's own public website and was
// checked on COMPETITORS_CHECKED_ON. When a site does not say something, the value says
// so instead of guessing. Never add a claim here that the vendor's site does not make.
export interface ProductProfile {
  slug: string;
  name: string;
  website: string;
  summary: string;
  pricing: string;
  setup: string;
  lockControl: string;
  offline: string;
  resetProtection: string;
  platforms: string;
  extras: string;
  bestFor: string;
}

export const KAVACH_PROFILE: ProductProfile = {
  slug: 'kavach',
  name: 'Kavach',
  website: 'kavachlock.tech',
  summary:
    'Kavach is an EMI locker app for Indian mobile shops. The shop owner sets up each phone with one QR scan at the counter and decides personally when a phone is locked or unlocked.',
  pricing: `Paid once per phone for the whole loan, at a price quoted for each shop on WhatsApp based on volume and brands. First ${KAVACH_FACTS.freePhones} phones free. No monthly fee.`,
  setup: `One Android Enterprise QR scan on a new phone, about ${KAVACH_FACTS.averageSetupSeconds} seconds at the counter. No PC or cable.`,
  lockControl: 'Always manual. A phone locks only when the shop owner taps lock. No automatic timers.',
  offline: 'Yes. The customer reads a challenge code over a normal call and the shop gives a one time unlock PIN.',
  resetProtection: 'Yes. Factory reset, recovery mode and USB flashing cannot remove it until the shop releases the phone.',
  platforms: `${KAVACH_FACTS.androidVersions}, ${KAVACH_FACTS.phoneModels} models. Android only.`,
  extras: 'Lock screen shows the shop name, a Call Shop button and emergency 112 calling.',
  bestFor: 'Shop owners who want full control over every lock and a per phone price set for their own shop.',
};

export const COMPETITORS: ProductProfile[] = [
  {
    slug: 'zen-emi-locker',
    name: 'ZEN EMI Locker',
    website: 'zenemilocker.com',
    summary:
      'ZEN EMI Locker is an Android EMI locker that runs in Device Owner mode and is set up through a PC free OTG connection.',
    pricing: 'Not published on their website. They offer a free demo.',
    setup: 'PC free setup over an OTG connection, according to their website.',
    lockControl: 'Remote lock, unlock and reminders from the retailer side. Their site does not say whether locks can trigger automatically.',
    offline: 'Not described on their website.',
    resetProtection: 'Yes, their site says the lock stays after a factory reset (Device Owner mode).',
    platforms: 'Android.',
    extras: 'DLT registered SMS reminders. They state 10,000+ retailers and 5 lakh+ devices.',
    bestFor: 'Shops that prefer an OTG cable setup over QR.',
  },
  {
    slug: 'emivault',
    name: 'EmiVault',
    website: 'emivault.com',
    summary:
      'EmiVault is an Android EMI locker sold per activated key, with plans for India, Bangladesh, Nepal and Pakistan.',
    pricing: 'From ₹60 per activated key with no subscription, according to their website. Free 14 day trial.',
    setup: 'Six step QR setup on fresh phones. Phones already in use are enrolled by installing an app, without a reset.',
    lockControl: 'Remote lock and unlock, plus an optional "Smart Auto Lock" that decides on its own when to lock.',
    offline: 'Their website mentions locking without internet but gives no clear detail.',
    resetProtection: 'Fresh phone QR enrollment is the protected path. Their site does not detail reset protection for app installed phones.',
    platforms: 'Android.',
    extras: 'Separate camera, app and call restrictions. Hindi, Bengali, Nepali and Urdu language support.',
    bestFor: 'Shops that want the lowest published per key price or need to cover phones already sold.',
  },
  {
    slug: 'instenlock',
    name: 'InstenLock',
    website: 'instenlock.in',
    summary:
      'InstenLock is an EMI locker with a retailer portal where the shop enters each customer, device and EMI schedule.',
    pricing: 'Not published on their website. Pricing is shared on demo request or WhatsApp.',
    setup: 'Retailer adds customer, device and EMI due dates in the InstenLock portal.',
    lockControl: 'Their site says the phone auto locks when a payment is delayed, with remote control on top.',
    offline: 'Their FAQ says both the retailer and the customer phone need an active internet connection.',
    resetProtection: 'Not clearly described on their website.',
    platforms: 'Android and iPhone, according to their website.',
    extras: 'Voice alerts, reminder pop ups, wallpaper branding and a white label option.',
    bestFor: 'Shops that sell iPhones on EMI and want automatic locking by due date.',
  },
  {
    slug: 'easylock',
    name: 'EasyLock',
    website: 'easylock.in',
    summary:
      'EasyLock is an EMI device lock and Android MDM platform aimed at NBFCs, fintech lenders, distributors and mobile retailers.',
    pricing: 'Not published on their website.',
    setup: 'Single QR code enrollment in under two minutes, according to their website.',
    lockControl: 'Remote lock, plus auto lock on a missed EMI.',
    offline: 'Yes. Their site lists offline lock and an offline unlock OTP.',
    resetProtection: 'Yes. Their site lists anti tamper and FRP protection.',
    platforms: 'Android.',
    extras: 'SIM swap detection and location tracking. They state 50,000+ active devices.',
    bestFor: 'NBFCs and larger lenders that want MDM style policies.',
  },
  {
    slug: 'knox-guard',
    name: 'Samsung Knox Guard',
    website: 'samsungknox.com',
    summary:
      'Knox Guard is Samsung’s own device locking service for phones sold on credit. It works at the Samsung firmware level, so it only covers Samsung Galaxy phones.',
    pricing: 'Licensed per device through Samsung and its partners. No public retail price for single shops.',
    setup: 'Devices are registered by IMEI through Samsung’s partner and reseller channels.',
    lockControl: 'Locking rules are set by the financing company in the Knox Guard console.',
    offline: 'Managed through Samsung’s cloud console.',
    resetProtection: 'Yes, built into Samsung firmware.',
    platforms: 'Samsung Galaxy only.',
    extras: 'Mostly used by banks, NBFCs and carriers rather than single mobile shops.',
    bestFor: 'Large financiers selling only Samsung phones through formal partner channels.',
  },
];

export function findCompetitor(slug: string): ProductProfile {
  const profile = COMPETITORS.find((c) => c.slug === slug);
  if (!profile) {
    throw new Error(`Unknown competitor slug "${slug}"`);
  }
  return profile;
}
