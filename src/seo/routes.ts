import { createElement } from 'react';
import { COMPETITORS, findCompetitor } from './competitors';
import {
  AlternativesHubPage,
  BestEmiLockerPage,
  DownloadPage,
  EmiLockerAppHindiPage,
  EmiLockerAppPage,
  EmiLockerPricePage,
  NotFoundPage,
  AlternativePage,
} from './pages';
import { COMPETITORS_CHECKED_ON, KAVACH_FACTS } from './site';
import type { Faq, SeoPage } from './types';

const LAST_MODIFIED = '2026-10-19';

const EMI_LOCKER_APP_EN_PATH = '/emi-locker-app';
const EMI_LOCKER_APP_HI_PATH = '/hi/emi-locker-app';

const MANUAL_LOCK_FAQ: Faq = {
  q: 'Does Kavach lock phones automatically when an EMI is late?',
  a: 'No. Kavach never locks a phone on a timer. A phone is locked only when the shop owner taps lock in the Kavach app or uses the offline PIN flow, so a customer who is a day late is never locked by surprise.',
};

const RESET_FAQ: Faq = {
  q: 'Can a customer remove the EMI lock with a factory reset?',
  a: 'No. Kavach is installed through Android Enterprise during the phone’s first setup, so factory reset, recovery mode, USB flashing tools and SIM swaps cannot remove it until the shop releases the phone.',
};

const IPHONE_FAQ: Faq = {
  q: 'Does Kavach work on iPhone?',
  a: `No. Kavach is an Android EMI locker. It supports ${KAVACH_FACTS.androidVersions} on ${KAVACH_FACTS.phoneModels} models from brands like ${KAVACH_FACTS.brands.slice(0, 6).join(', ')}.`,
};

const PRICE_FAQ: Faq = {
  q: 'How much does the Kavach EMI locker cost?',
  a: `The first ${KAVACH_FACTS.freePhones} phones are free. After that it is ${KAVACH_FACTS.pricePerPhone} per phone, paid once for the whole loan, with no monthly fee and no commission on your EMI.`,
};

const OFFLINE_FAQ: Faq = {
  q: 'How do I unlock a locked phone that has no internet?',
  a: 'The customer reads the challenge code shown on the locked screen to you over a normal phone call. The Kavach app gives you a one time PIN, the customer types it in, and the phone unlocks without any internet.',
};

function alternativePage(slug: string): SeoPage {
  const competitor = findCompetitor(slug);
  return {
    path: `/alternatives/${slug}`,
    title: `Kavach vs ${competitor.name}: EMI Locker Comparison`,
    description: `Looking for an alternative to ${competitor.name}? Compare Kavach and ${competitor.name} on price, setup, offline unlock, reset protection and who controls the lock.`,
    crumbs: [
      { label: 'Alternatives', href: '/alternatives' },
      { label: `vs ${competitor.name}`, href: `/alternatives/${slug}` },
    ],
    faqs: [
      {
        q: `Is Kavach a good ${competitor.name} alternative?`,
        a: `Kavach suits mobile shops that sell Android phones from many brands, want a published price of ${KAVACH_FACTS.pricePerPhone} per phone, and want to decide every lock themselves. ${competitor.name} may suit you better if: ${competitor.bestFor.charAt(0).toLowerCase()}${competitor.bestFor.slice(1)}`,
      },
      {
        q: `Can I use Kavach and ${competitor.name} at the same time?`,
        a: `Yes, on different phones. Keep phones already on ${competitor.name} there until their loans finish, and set up new EMI sales on Kavach.`,
      },
      MANUAL_LOCK_FAQ,
    ],
    lastModified: COMPETITORS_CHECKED_ON,
    render: () => createElement(AlternativePage, { competitor }),
  };
}

export const SEO_PAGES: SeoPage[] = [
  {
    path: EMI_LOCKER_APP_EN_PATH,
    translations: [{ lang: 'hi-IN', path: EMI_LOCKER_APP_HI_PATH }],
    title: 'EMI Locker App for Mobile Shops in India | Kavach',
    description: `Kavach is the EMI locker app for Indian mobile shops. Lock phones sold on EMI when customers stop paying. ${KAVACH_FACTS.averageSetupSeconds} second setup, ${KAVACH_FACTS.pricePerPhone} per phone, first ${KAVACH_FACTS.freePhones} free.`,
    crumbs: [{ label: 'EMI locker app', href: EMI_LOCKER_APP_EN_PATH }],
    faqs: [
      {
        q: 'What is an EMI locker app?',
        a: 'An EMI locker app lets a mobile shop lock a phone it sold on instalments when the customer stops paying, and unlock it once they pay. The customer can still call the shop and emergency numbers while the phone is locked.',
      },
      MANUAL_LOCK_FAQ,
      RESET_FAQ,
      OFFLINE_FAQ,
      {
        q: 'Do customers see Google Play Protect warnings?',
        a: 'No. Kavach is set up with official Android Enterprise QR provisioning on the new phone, so customers do not get Play Protect warning pop ups.',
      },
      IPHONE_FAQ,
      PRICE_FAQ,
    ],
    lastModified: LAST_MODIFIED,
    render: EmiLockerAppPage,
  },
  {
    path: EMI_LOCKER_APP_HI_PATH,
    lang: 'hi-IN',
    translations: [{ lang: 'en-IN', path: EMI_LOCKER_APP_EN_PATH }],
    title: 'EMI Locker ऐप: मोबाइल दुकानों के लिए फ़ोन लॉक | Kavach',
    description: `किस्त पर बेचा फ़ोन, ग्राहक ने EMI नहीं भरी? Kavach EMI locker से फ़ोन लॉक करें, पैसे मिलते ही अनलॉक। हर फ़ोन ${KAVACH_FACTS.pricePerPhone}, पहले ${KAVACH_FACTS.freePhones} फ्री।`,
    crumbs: [{ label: 'EMI locker ऐप', href: EMI_LOCKER_APP_HI_PATH }],
    faqs: [
      {
        q: 'EMI locker ऐप क्या होता है?',
        a: 'EMI locker ऐप से मोबाइल दुकानदार किस्त पर बेचा हुआ फ़ोन लॉक कर सकता है, जब ग्राहक किस्त देना बंद कर दे, और पैसे मिलने पर अनलॉक कर सकता है। लॉक फ़ोन से भी ग्राहक दुकान पर और इमरजेंसी नंबर पर कॉल कर सकता है।',
      },
      {
        q: 'किस्त लेट होने पर क्या Kavach अपने आप फ़ोन लॉक कर देता है?',
        a: 'नहीं। Kavach कभी टाइमर से फ़ोन लॉक नहीं करता। फ़ोन तभी लॉक होता है जब दुकानदार Kavach ऐप में lock दबाए या ऑफ़लाइन PIN वाला तरीका इस्तेमाल करे। इसलिए एक दिन लेट ग्राहक का फ़ोन अचानक लॉक नहीं होता।',
      },
      {
        q: 'क्या ग्राहक factory reset करके EMI lock हटा सकता है?',
        a: 'नहीं। Kavach फ़ोन के पहले सेटअप के समय Android Enterprise से लगता है, इसलिए factory reset, recovery mode, USB flashing tool या SIM बदलने से यह तब तक नहीं हटता जब तक दुकान फ़ोन release न करे।',
      },
      {
        q: 'लॉक फ़ोन में इंटरनेट न हो, तो दुकानदार उसे कैसे खोले?',
        a: 'ग्राहक लॉक स्क्रीन पर दिखा challenge कोड नॉर्मल फ़ोन कॉल पर आपको बताता है। Kavach ऐप आपको एक बार चलने वाला PIN देता है, ग्राहक उसे डालता है, और फ़ोन बिना इंटरनेट के खुल जाता है।',
      },
      {
        q: 'क्या ग्राहक को Google Play Protect की warning दिखती है?',
        a: 'नहीं। Kavach नए फ़ोन पर Android Enterprise के ऑफ़िशियल QR सेटअप से लगता है, इसलिए ग्राहक को Play Protect के warning पॉप-अप नहीं दिखते।',
      },
      {
        q: 'क्या Kavach iPhone पर चलता है?',
        a: `नहीं। Kavach सिर्फ़ Android के लिए है। यह ${KAVACH_FACTS.androidVersionsHi} पर ${KAVACH_FACTS.phoneModels} मॉडल पर चलता है, जैसे ${KAVACH_FACTS.brands.slice(0, 6).join(', ')}।`,
      },
      {
        q: 'Kavach EMI locker का दाम कितना है?',
        a: `पहले ${KAVACH_FACTS.freePhones} फ़ोन फ्री हैं। उसके बाद हर फ़ोन का ${KAVACH_FACTS.pricePerPhone}, पूरे लोन के लिए एक बार। न महीने की फ़ीस, न आपकी EMI पर कोई कमीशन।`,
      },
    ],
    lastModified: LAST_MODIFIED,
    render: EmiLockerAppHindiPage,
  },
  {
    path: '/best-emi-locker-app-india',
    title: 'Best EMI Locker Apps in India (2026), Compared | Kavach',
    description:
      'Honest comparison of the best EMI locker apps in India for mobile shops: Kavach, ZEN EMI Locker, EmiVault, InstenLock, EasyLock and Samsung Knox Guard.',
    crumbs: [{ label: 'Best EMI locker apps', href: '/best-emi-locker-app-india' }],
    faqs: [
      {
        q: 'Which is the best EMI locker app in India?',
        a: 'It depends on your shop. Check that the lock survives a factory reset, that you can unlock without internet, that the price per phone is clear, and whether you want automatic or manual locking. Kavach is built for shops that want manual control and a flat price per phone.',
      },
      {
        q: 'Which EMI locker companies operate in India?',
        a: 'Popular EMI locker apps used by Indian mobile shops include Kavach, ZEN EMI Locker, EmiVault, InstenLock, EasyLock, Quick Guard and Samsung Knox Guard for Samsung phones.',
      },
      {
        q: 'Do I need to tell the customer about the EMI locker?',
        a: 'Yes. Tell the customer at the time of sale that the phone is protected by an EMI locker and include it in the sale agreement. Kavach shows the shop name and a Call Shop button on the lock screen and always allows emergency calls.',
      },
      MANUAL_LOCK_FAQ,
      IPHONE_FAQ,
    ],
    lastModified: COMPETITORS_CHECKED_ON,
    render: BestEmiLockerPage,
  },
  {
    path: '/emi-locker-price',
    title: `EMI Locker Price in India: ${KAVACH_FACTS.pricePerPhone} per Phone | Kavach`,
    description: `What does an EMI locker key cost? Kavach charges ${KAVACH_FACTS.pricePerPhone} per phone for the whole loan, no monthly fee, first ${KAVACH_FACTS.freePhones} phones free. See plans and how prices compare.`,
    crumbs: [{ label: 'EMI locker price', href: '/emi-locker-price' }],
    faqs: [
      PRICE_FAQ,
      {
        q: 'What is an EMI locker key?',
        a: 'A key is one licence to protect one phone. You use a key when you set up a phone sold on EMI, and it covers that phone until you release it at the end of the loan.',
      },
      {
        q: 'Is there a monthly fee?',
        a: 'No. Kavach has no monthly subscription. You pay only for the keys you use.',
      },
      {
        q: 'Are there discounts for multiple shops?',
        a: 'Yes. Shops with 5 or more branches and distributors get volume pricing with a shared key wallet, staff logins and their own branding on the lock screen.',
      },
    ],
    lastModified: LAST_MODIFIED,
    render: EmiLockerPricePage,
  },
  {
    path: '/download',
    title: 'Download Kavach EMI Locker App (APK) for Android',
    description:
      'Download the Kavach EMI locker retailer app APK for Android, or open the web app. Set up phones sold on EMI and lock or unlock them in one tap.',
    crumbs: [{ label: 'Download', href: '/download' }],
    faqs: [
      {
        q: 'Is the Kavach EMI locker APK safe to install?',
        a: 'Yes, when you download it from kavachlock.tech. Android asks once to allow installs from your browser. Do not install Kavach from any other website.',
      },
      {
        q: 'Does my customer need to download an app?',
        a: 'No. Customer phones are set up by scanning one QR code during the phone’s first setup. Nothing is downloaded from a store or website by the customer.',
      },
      {
        q: 'Can I use Kavach on a computer?',
        a: 'Yes. Shop owners can also log in to the Kavach web app from any browser.',
      },
    ],
    lastModified: LAST_MODIFIED,
    render: DownloadPage,
  },
  {
    path: '/alternatives',
    title: 'EMI Locker Alternatives: Kavach Compared | Kavach',
    description:
      'Compare Kavach with ZEN EMI Locker, EmiVault, InstenLock, EasyLock and Samsung Knox Guard. Price, setup, offline unlock and lock control side by side.',
    crumbs: [{ label: 'Alternatives', href: '/alternatives' }],
    faqs: [],
    lastModified: COMPETITORS_CHECKED_ON,
    render: AlternativesHubPage,
  },
  ...COMPETITORS.map((competitor) => alternativePage(competitor.slug)),
];

export const NOT_FOUND_PAGE: SeoPage = {
  path: '/404',
  title: 'Page not found | Kavach',
  description: 'This page does not exist on kavachlock.tech.',
  crumbs: [],
  faqs: [],
  noindex: true,
  showCta: false,
  lastModified: LAST_MODIFIED,
  render: NotFoundPage,
};
