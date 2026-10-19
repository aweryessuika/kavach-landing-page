import { COMPETITORS, KAVACH_PROFILE, type ProductProfile } from './competitors';
import { KAVACH_FACTS, RETAILER_APK_URL, RETAILER_APP_URL } from './site';
import {
  CardGrid,
  CompareTable,
  InlineLink,
  LanguageLink,
  PageHero,
  PrimaryLink,
  Prose,
  SecondaryLink,
  Section,
  SourceNote,
  StepList,
} from './ui';

const SETUP_STEPS = [
  {
    title: 'Scan the box',
    body: 'Scan the IMEI barcode on the phone box and type the customer’s name and number in the Kavach retailer app.',
  },
  {
    title: 'Scan one QR on the new phone',
    body: `Tap the welcome screen six times and scan the QR code. Protection is active in about ${KAVACH_FACTS.averageSetupSeconds} seconds, with no PC or cable.`,
  },
  {
    title: 'Lock only when you decide',
    body: 'If a customer stops paying, tap lock in the app. When they pay, tap unlock. No timer ever locks a phone behind your back.',
  },
];

const BRAND_LIST = KAVACH_FACTS.brands.join(', ');

export function EmiLockerAppPage() {
  return (
    <>
      <PageHero
        eyebrow="emi locker app / android / india"
        title="The EMI locker app for"
        accent="Indian mobile shops."
        intro={`Kavach locks a phone you sold on EMI when the customer stops paying, and unlocks it the moment they pay. You set it up at the counter in about ${KAVACH_FACTS.averageSetupSeconds} seconds and pay ${KAVACH_FACTS.pricePerPhone} per phone. The first ${KAVACH_FACTS.freePhones} phones are free.`}
      >
        <div className="flex flex-wrap gap-3 pt-2">
          <PrimaryLink href="/#contact">Start free with 10 phones</PrimaryLink>
          <SecondaryLink href="/download">Download the app</SecondaryLink>
        </div>
        <p className="text-sm">
          <LanguageLink href="/hi/emi-locker-app" lang="hi-IN">
            यह पेज हिंदी में पढ़ें
          </LanguageLink>
        </p>
      </PageHero>

      <Section title="What is an EMI locker?">
        <Prose>
          <p>
            An EMI locker is software that a mobile shop installs on a phone it sells on instalments. If the customer
            stops paying, the shop can lock the phone from its own app. The customer can still call the shop and dial
            emergency numbers, but cannot use the phone until the EMI is paid. Once paid, the shop unlocks it and the
            phone works normally again.
          </p>
          <p>
            Shops also call it an EMI lock app, mobile EMI locker, finance lock app or phone EMI locker. They all mean
            the same thing: a way to sell phones on credit without losing money when a customer disappears.
          </p>
          <p>
            A good EMI locker has to survive a factory reset, work on every brand you sell, and not scare the customer
            with security warnings. Kavach is built around those three things.
          </p>
        </Prose>
      </Section>

      <Section id="how-it-works" title="How Kavach works at your counter">
        <StepList steps={SETUP_STEPS} />
      </Section>

      <Section title="Why shop owners pick Kavach">
        <CardGrid
          items={[
            {
              title: 'You decide every lock',
              body: 'Kavach never locks a phone on an automatic timer. A trusted regular who is two days late keeps their phone. You stay in charge of the relationship.',
            },
            {
              title: 'Factory reset cannot remove it',
              body: 'Formatting the phone, recovery mode, USB flashing tools and SIM swaps cannot remove Kavach until you release the phone.',
            },
            {
              title: 'Unlock without internet',
              body: 'If a locked phone has no data, the customer reads a code to you over a normal call and you read back a one time PIN.',
            },
            {
              title: 'No Play Protect warnings',
              body: 'Kavach uses official Android Enterprise setup, so customers do not see scary security pop ups on their new phone.',
            },
            {
              title: 'One price per phone',
              body: `${KAVACH_FACTS.pricePerPhone} covers the full loan, whether it runs 3 months or 12. No monthly subscription and no cut of your EMI.`,
            },
            {
              title: 'Your shop on the lock screen',
              body: 'A locked phone shows your shop name and a Call Shop button, so the customer calls you instead of a repair shop.',
            },
          ]}
        />
      </Section>

      <Section title="Works on the phones you actually sell">
        <Prose>
          <p>
            Kavach runs on {KAVACH_FACTS.androidVersions} across {KAVACH_FACTS.phoneModels} models, including{' '}
            {BRAND_LIST}. It is Android only, so it does not lock iPhones.
          </p>
          <p>
            Comparing options? Read our honest{' '}
            <InlineLink href="/best-emi-locker-app-india">comparison of EMI locker apps in India</InlineLink> or see{' '}
            <InlineLink href="/emi-locker-price">what an EMI locker key costs</InlineLink>.
          </p>
        </Prose>
      </Section>
    </>
  );
}

const SETUP_STEPS_HI = [
  {
    title: 'डिब्बा स्कैन करें',
    body: 'फ़ोन के डिब्बे पर IMEI बारकोड स्कैन करें और Kavach retailer ऐप में ग्राहक का नाम और नंबर डालें।',
  },
  {
    title: 'नए फ़ोन पर एक QR स्कैन करें',
    body: `Welcome स्क्रीन पर छह बार टैप करें और QR कोड स्कैन करें। लगभग ${KAVACH_FACTS.averageSetupSeconds} सेकंड में सुरक्षा चालू। न कंप्यूटर चाहिए, न केबल।`,
  },
  {
    title: 'लॉक तभी, जब आप चाहें',
    body: 'ग्राहक किस्त न दे तो ऐप में lock दबाएँ। पैसे दे दे तो unlock दबाएँ। कोई टाइमर आपके पीछे से फ़ोन लॉक नहीं करता।',
  },
];

export function EmiLockerAppHindiPage() {
  return (
    <>
      <PageHero
        eyebrow="emi locker app / हिंदी"
        title="मोबाइल दुकान के लिए"
        accent="EMI locker ऐप।"
        intro={`ग्राहक ने किस्त नहीं भरी? Kavach से आप EMI पर बेचा हुआ फ़ोन लॉक कर सकते हैं, और पैसे मिलते ही अनलॉक। काउंटर पर सेटअप लगभग ${KAVACH_FACTS.averageSetupSeconds} सेकंड में होता है। हर फ़ोन का ${KAVACH_FACTS.pricePerPhone}, पहले ${KAVACH_FACTS.freePhones} फ़ोन फ्री।`}
      >
        <div className="flex flex-wrap gap-3 pt-2">
          <PrimaryLink href="/#contact">{KAVACH_FACTS.freePhones} फ़ोन फ्री में शुरू करें</PrimaryLink>
          <SecondaryLink href="/download">ऐप डाउनलोड करें</SecondaryLink>
        </div>
        <p className="text-sm">
          <LanguageLink href="/emi-locker-app" lang="en-IN">
            Read this page in English
          </LanguageLink>
        </p>
      </PageHero>

      <Section title="EMI locker क्या होता है?">
        <Prose>
          <p>
            EMI locker एक सॉफ़्टवेयर है जो मोबाइल दुकानदार किस्त पर बेचे गए फ़ोन में डालता है। अगर ग्राहक किस्त देना
            बंद कर दे, तो दुकानदार अपने ऐप से फ़ोन लॉक कर सकता है। लॉक फ़ोन से ग्राहक दुकान पर कॉल कर सकता है और
            इमरजेंसी नंबर लगा सकता है, लेकिन बाकी फ़ोन तब तक नहीं चलेगा जब तक किस्त जमा न हो। पैसे मिलते ही आप फ़ोन
            अनलॉक कर देते हैं और फ़ोन पहले जैसा चलने लगता है।
          </p>
          <p>
            इसे लोग EMI lock ऐप, फ़ोन लॉक ऐप, finance lock ऐप या मोबाइल EMI locker भी कहते हैं। मतलब एक ही है: फ़ोन
            किस्त पर बेचो, और ग्राहक गायब हो जाए तो भी पैसा न डूबे।
          </p>
          <p>
            अच्छा EMI locker वही है जो factory reset से न हटे, आपकी दुकान के हर ब्रांड पर चले, और ग्राहक को डराने वाली
            security warning न दिखाए। Kavach इन्हीं तीन बातों पर बना है।
          </p>
        </Prose>
      </Section>

      <Section id="how-it-works" title="काउंटर पर Kavach कैसे काम करता है">
        <StepList steps={SETUP_STEPS_HI} />
      </Section>

      <Section title="दुकानदार Kavach क्यों चुनते हैं">
        <CardGrid
          items={[
            {
              title: 'हर लॉक का फ़ैसला आपका',
              body: 'Kavach कभी भी टाइमर से अपने आप फ़ोन लॉक नहीं करता। पुराना भरोसेमंद ग्राहक दो दिन लेट हो जाए, तो भी उसका फ़ोन चलता रहेगा। ग्राहक से रिश्ता आपके हाथ में रहता है।',
            },
            {
              title: 'Factory reset से नहीं हटता',
              body: 'फ़ोन format करना, recovery mode, USB flashing tool या SIM बदलना, कुछ भी Kavach को तब तक नहीं हटा सकता जब तक आप फ़ोन release न करें।',
            },
            {
              title: 'बिना इंटरनेट अनलॉक',
              body: 'लॉक फ़ोन में डेटा नहीं है? ग्राहक स्क्रीन पर दिखा कोड नॉर्मल कॉल पर आपको बताए, और आप उसे एक बार चलने वाला PIN बता दें।',
            },
            {
              title: 'Play Protect की warning नहीं',
              body: 'Kavach Android Enterprise के ऑफ़िशियल तरीके से लगता है, इसलिए ग्राहक को नए फ़ोन पर डराने वाले security पॉप-अप नहीं दिखते।',
            },
            {
              title: 'हर फ़ोन का एक दाम',
              body: `${KAVACH_FACTS.pricePerPhone} में पूरा लोन कवर, चाहे किस्त 3 महीने की हो या 12 की। न महीने की फ़ीस, न आपकी EMI में कोई हिस्सा।`,
            },
            {
              title: 'लॉक स्क्रीन पर आपकी दुकान',
              body: 'लॉक फ़ोन पर आपकी दुकान का नाम और Call Shop बटन दिखता है, ताकि ग्राहक रिपेयर वाले के पास नहीं, सीधे आपके पास आए।',
            },
          ]}
        />
      </Section>

      <Section title="जो फ़ोन आप बेचते हैं, उन पर चलता है">
        <Prose>
          <p>
            Kavach {KAVACH_FACTS.androidVersionsHi} पर {KAVACH_FACTS.phoneModels} मॉडल पर चलता है, जिनमें {BRAND_LIST}{' '}
            शामिल हैं। यह सिर्फ़ Android के लिए है, iPhone लॉक नहीं करता।
          </p>
          <p>
            दूसरे ऐप से तुलना करनी है? पढ़ें{' '}
            <InlineLink href="/best-emi-locker-app-india">भारत के EMI locker ऐप्स की तुलना</InlineLink> या देखें{' '}
            <InlineLink href="/emi-locker-price">एक EMI locker key का दाम</InlineLink>। ये पेज अंग्रेज़ी में हैं।
          </p>
        </Prose>
      </Section>
    </>
  );
}

export function BestEmiLockerPage() {
  return (
    <>
      <PageHero
        eyebrow="updated october 2026 / 6 apps compared"
        title="Best EMI locker apps in India,"
        accent="compared honestly."
        intro="Six EMI locker apps that Indian mobile shops use, compared on price, setup, reset protection, offline unlock and who controls the lock. We make Kavach, and we tell you where another app may suit you better."
      />

      <Section title="What to check before you pick an EMI locker">
        <CardGrid
          items={[
            {
              title: 'Survives a factory reset',
              body: 'If a customer can format the phone and remove the lock, the app is worthless. Ask for a live reset test before you pay.',
            },
            {
              title: 'Who decides the lock',
              body: 'Some apps lock automatically on the due date. Others leave it to you. Automatic locks can upset good customers who are a day late.',
            },
            {
              title: 'Unlock without internet',
              body: 'Locked phones often have no data. Check that you can unlock over a normal phone call.',
            },
            {
              title: 'Clear, published price',
              body: 'Know the price per phone or per key, and whether there is a monthly fee on top.',
            },
            {
              title: 'Setup time at the counter',
              body: 'A setup that needs a PC or takes ten minutes slows down every sale on a busy day.',
            },
            {
              title: 'No security warnings',
              body: 'Apps installed outside Android Enterprise can trigger Play Protect warnings that make customers suspicious.',
            },
          ]}
        />
      </Section>

      <Section title="EMI locker apps side by side">
        <CompareTable products={COMPETITORS} caption="Comparison of EMI locker apps in India" />
        <SourceNote />
      </Section>

      <Section title="Which EMI locker suits which shop">
        <ul className="grid gap-4 md:grid-cols-2">
          {[KAVACH_PROFILE, ...COMPETITORS].map((product) => (
            <li key={product.slug} className="rounded-2xl border border-white/[0.08] bg-[#0B0F0B] p-6 space-y-2">
              <h3 className="text-lg font-semibold text-[#F4F6F0]">{product.name}</h3>
              <p className="text-base text-[#9CA698] text-pretty">{product.summary}</p>
              <p className="text-base text-[#B8C1B4] text-pretty">
                <span className="font-semibold text-[#F4F6F0]">Best for:</span> {product.bestFor}
              </p>
              {product.slug !== 'kavach' && (
                <p className="text-sm">
                  <InlineLink href={`/alternatives/${product.slug}`}>Kavach vs {product.name}</InlineLink>
                </p>
              )}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

const PRICE_EXAMPLES = [5, 20, 40, 100];

export function EmiLockerPricePage() {
  return (
    <>
      <PageHero
        eyebrow="emi locker price / per phone"
        title="EMI locker price:"
        accent={`${KAVACH_FACTS.pricePerPhone} per phone, once.`}
        intro={`With Kavach you buy one key per phone you protect. A key costs ${KAVACH_FACTS.pricePerPhone} and covers that phone for the whole loan. The first ${KAVACH_FACTS.freePhones} keys are free, and there is no monthly fee.`}
      >
        <div className="flex flex-wrap gap-3 pt-2">
          <PrimaryLink href="/#contact">Get 10 free keys</PrimaryLink>
        </div>
      </PageHero>

      <Section title="Kavach plans">
        <ul className="grid gap-4 md:grid-cols-3">
          <li className="rounded-2xl border border-white/[0.08] bg-[#0B0F0B] p-6 space-y-2">
            <h3 className="text-lg font-semibold">Starter trial</h3>
            <p className="font-display text-4xl font-semibold text-[#F4F6F0]">₹0</p>
            <p className="text-base text-[#9CA698] text-pretty">
              First {KAVACH_FACTS.freePhones} phones free, full features, setup help on WhatsApp.
            </p>
          </li>
          <li className="rounded-2xl border border-[#C8FF2E]/40 bg-[#0B0F0B] p-6 space-y-2">
            <h3 className="text-lg font-semibold">Shop standard</h3>
            <p className="font-display text-4xl font-semibold text-[#C8FF2E]">{KAVACH_FACTS.pricePerPhone}</p>
            <p className="text-base text-[#9CA698] text-pretty">
              Per phone, one time, for the entire loan. Offline PIN unlock and reset protection included.
            </p>
          </li>
          <li className="rounded-2xl border border-white/[0.08] bg-[#0B0F0B] p-6 space-y-2">
            <h3 className="text-lg font-semibold">Multi store</h3>
            <p className="font-display text-4xl font-semibold text-[#F4F6F0]">Volume</p>
            <p className="text-base text-[#9CA698] text-pretty">
              For 5+ shops or distributors. Shared key wallet, staff logins and your branding on the lock screen.
            </p>
          </li>
        </ul>
      </Section>

      <Section title="What you pay each month">
        <div className="overflow-x-auto rounded-2xl border border-white/[0.08] max-w-2xl">
          <table className="w-full text-left text-base">
            <caption className="sr-only">Kavach cost by phones sold on EMI per month</caption>
            <thead className="bg-[#0B0F0B]">
              <tr>
                <th scope="col" className="p-4 font-mono text-xs text-[#6E786B] font-normal">
                  phones sold on emi per month
                </th>
                <th scope="col" className="p-4 font-mono text-xs text-[#6E786B] font-normal">
                  kavach cost
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.07]">
              {PRICE_EXAMPLES.map((phones) => (
                <tr key={phones}>
                  <td className="p-4 text-[#F4F6F0]">{phones} phones</td>
                  <td className="p-4 text-[#9CA698]">₹{(phones * KAVACH_FACTS.pricePerPhoneInr).toLocaleString('en-IN')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Prose>
          <p className="mt-6">
            One phone that never gets paid off usually costs a shop more than a year of Kavach keys. That is the real
            comparison to make.
          </p>
        </Prose>
      </Section>

      <Section title="How EMI locker prices compare">
        <Prose>
          <p>
            Most EMI locker companies in India do not publish prices and share them only after a demo. Of the apps we
            compared, EmiVault publishes a starting price of ₹60 per activated key. ZEN EMI Locker, InstenLock and
            EasyLock do not list prices on their websites. Samsung Knox Guard is licensed through Samsung partners.
          </p>
          <p>
            When you compare, ask three things: is there a monthly fee on top of the key, does the key cover the full
            loan, and does the price include offline unlock and reset protection. See the full{' '}
            <InlineLink href="/best-emi-locker-app-india">EMI locker comparison</InlineLink>.
          </p>
        </Prose>
        <SourceNote />
      </Section>
    </>
  );
}

export function DownloadPage() {
  return (
    <>
      <PageHero
        eyebrow="download / android apk"
        title="Download the Kavach"
        accent="EMI locker app."
        intro="The Kavach retailer app is the shop owner’s side of the EMI locker. You use it to set up new phones, see every customer and lock or unlock a phone with one tap."
      >
        <div className="flex flex-wrap gap-3 pt-2">
          <PrimaryLink href={RETAILER_APK_URL}>Download Android APK</PrimaryLink>
          <SecondaryLink href={RETAILER_APP_URL}>Open the web app</SecondaryLink>
        </div>
      </PageHero>

      <Section title="Install it in three steps">
        <StepList
          steps={[
            {
              title: 'Download the APK',
              body: 'Tap Download Android APK on this page from the phone you use at your shop counter.',
            },
            {
              title: 'Allow the install',
              body: 'Android asks once to allow installs from your browser. Allow it, then open the downloaded file.',
            },
            {
              title: 'Log in to your shop',
              body: `Sign in with your shop account, or start free on our homepage to get one. New shops start with ${KAVACH_FACTS.freePhones} free phone keys.`,
            },
          ]}
        />
      </Section>

      <Section title="Your customer does not download anything">
        <Prose>
          <p>
            Customer phones are not set up through an app download. You scan one QR code on the new phone during its
            first setup screen, and Kavach installs itself through Android Enterprise. That is why customers never see
            Play Protect warnings and why a factory reset cannot remove it.
          </p>
          <p>
            Only download Kavach from kavachlock.tech. Copies on other websites are not ours and may be unsafe.
          </p>
        </Prose>
      </Section>
    </>
  );
}

export function AlternativesHubPage() {
  return (
    <>
      <PageHero
        eyebrow="alternatives / emi locker"
        title="EMI locker alternatives:"
        accent="Kavach compared."
        intro="Already using an EMI locker, or choosing between a few? Here is how Kavach compares with each popular option, based on what each company says on its own website."
      />
      <Section title="Pick a comparison">
        <ul className="grid gap-4 md:grid-cols-2">
          {COMPETITORS.map((competitor) => (
            <li key={competitor.slug}>
              <a
                href={`/alternatives/${competitor.slug}`}
                className="block h-full rounded-2xl border border-white/[0.08] bg-[#0B0F0B] p-6 space-y-2 hover:border-[#C8FF2E]/40 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8FF2E]"
              >
                <h3 className="text-lg font-semibold text-[#F4F6F0]">Kavach vs {competitor.name}</h3>
                <p className="text-base text-[#9CA698] text-pretty">{competitor.summary}</p>
              </a>
            </li>
          ))}
        </ul>
        <SourceNote />
      </Section>
    </>
  );
}

export function AlternativePage({ competitor }: { competitor: ProductProfile }) {
  return (
    <>
      <PageHero
        eyebrow={`alternatives / ${competitor.name.toLowerCase()}`}
        title={`Kavach vs ${competitor.name}:`}
        accent="an honest comparison."
        intro={`Looking for an alternative to ${competitor.name}? Here is how Kavach and ${competitor.name} differ on price, setup, lock control, offline unlock and reset protection.`}
      >
        <div className="flex flex-wrap gap-3 pt-2">
          <PrimaryLink href="/#contact">Try Kavach free on 10 phones</PrimaryLink>
        </div>
      </PageHero>

      <Section title={`Kavach and ${competitor.name} side by side`}>
        <CompareTable products={[competitor]} caption={`Kavach compared with ${competitor.name}`} />
        <SourceNote />
      </Section>

      <Section title="The main differences">
        <Prose>
          <p>{competitor.summary}</p>
          <p>{KAVACH_PROFILE.summary}</p>
          <p>
            <strong className="text-[#F4F6F0]">Who decides a lock.</strong> With {competitor.name}:{' '}
            {competitor.lockControl.charAt(0).toLowerCase() + competitor.lockControl.slice(1)} With Kavach: no phone is
            ever locked by a timer. You decide, customer by customer.
          </p>
          <p>
            <strong className="text-[#F4F6F0]">Price.</strong> {competitor.name}:{' '}
            {competitor.pricing.charAt(0).toLowerCase() + competitor.pricing.slice(1)} Kavach: {KAVACH_PROFILE.pricing}
          </p>
        </Prose>
      </Section>

      <Section title={`When ${competitor.name} may suit you better`}>
        <Prose>
          <p>{competitor.bestFor}</p>
          <p>
            Kavach suits you better if you sell Android phones from many brands, want a clear price per phone, and want
            to decide every lock yourself.
          </p>
        </Prose>
      </Section>

      <Section title={`Switching from ${competitor.name} to Kavach`}>
        <StepList
          steps={[
            {
              title: 'Keep running loans where they are',
              body: `Phones already protected by ${competitor.name} can stay on it until their EMI is finished. Nothing needs to be moved.`,
            },
            {
              title: 'Set up new sales on Kavach',
              body: `Use your ${KAVACH_FACTS.freePhones} free keys on the next phones you sell on EMI. Each setup takes about ${KAVACH_FACTS.averageSetupSeconds} seconds.`,
            },
            {
              title: 'Compare after a month',
              body: 'See how setup time, customer calls and recoveries feel in your own shop before you buy more keys.',
            },
          ]}
        />
        <Prose>
          <p className="mt-6">
            See every option in our{' '}
            <InlineLink href="/best-emi-locker-app-india">comparison of the best EMI locker apps in India</InlineLink>.
          </p>
        </Prose>
      </Section>
    </>
  );
}

export function NotFoundPage() {
  return (
    <PageHero
      eyebrow="404 / page not found"
      title="This page does not exist."
      intro="The link may be old or mistyped. Head back to the homepage, or start with the EMI locker guide."
    >
      <div className="flex flex-wrap gap-3 pt-2">
        <PrimaryLink href="/">Go to homepage</PrimaryLink>
        <SecondaryLink href="/emi-locker-app">EMI locker guide</SecondaryLink>
      </div>
    </PageHero>
  );
}
