import { useId, useState } from 'react';
import { AlertCircle, CheckCircle2, Download, ExternalLink, Loader2 } from 'lucide-react';
import {
  KAVACH_FACTS,
  RETAILER_APK_URL,
  RETAILER_APP_URL,
  WHATSAPP_HELLO_URL,
  whatsappUrl,
} from '../seo/site';

const LEAD_ENDPOINT = `${RETAILER_APP_URL}/api/public/lead`;
const LEAD_TIMEOUT_MS = 8000;

type SubmitState = 'idle' | 'sending' | 'sent' | 'failed';

export function FinalCtaSection() {
  const [contact, setContact] = useState('');
  const [state, setState] = useState<SubmitState>('idle');
  const inputId = useId();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = contact.trim();
    if (!trimmed || state === 'sending') return;

    setState('sending');
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), LEAD_TIMEOUT_MS);
    try {
      const response = await fetch(LEAD_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contact: trimmed, source: 'kavachlock.tech-cta' }),
        signal: controller.signal,
      });
      setState(response.ok ? 'sent' : 'failed');
    } catch (error) {
      // Network failure or timeout: tell the shop owner and offer WhatsApp instead of
      // pretending the request went through.
      console.error('Kavach lead request failed', error);
      setState('failed');
    } finally {
      window.clearTimeout(timeoutId);
    }
  };

  return (
    <section className="relative py-20 lg:py-28 z-10">
      <div className="w-full max-w-[95vw] 2xl:max-w-[1820px] mx-auto px-4 sm:px-7 lg:px-10">
        <div
          data-reveal
          className="relative rounded-[28px] bg-[#C8FF2E] text-[#050705] p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10"
        >
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-[32px] sm:text-[44px] font-display font-bold tracking-[-0.03em] leading-[1.06] text-balance">
              Protect the next phone you{' '}
              <span className="font-serif italic font-normal">sell.</span>
            </h2>
            <p className="text-[15.5px] sm:text-[16.5px] text-[#050705]/80 max-w-lg leading-[1.55]">
              Start with {KAVACH_FACTS.freePhones} phones free. Leave your number and we will call or WhatsApp you
              to set up your shop.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4 lg:pt-2">
            {state === 'sent' && (
              <div role="status" className="p-4 rounded-2xl bg-[#0A0E0A] text-[#F4F6F0] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C8FF2E] shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[14px] leading-[1.5]">
                  Got it. We will contact you on <span className="text-[#C8FF2E] font-semibold">{contact.trim()}</span>{' '}
                  soon. You can install the shop app below in the meantime.
                </p>
              </div>
            )}

            {state === 'failed' && (
              <div role="alert" className="p-4 rounded-2xl bg-[#0A0E0A] text-[#F4F6F0] flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#C8FF2E] shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[14px] leading-[1.5]">
                  We could not send that just now.{' '}
                  <a
                    href={whatsappUrl(`Namaste Kavach team, I want to start with ${KAVACH_FACTS.freePhones} free phones. My number: ${contact.trim()}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C8FF2E] underline underline-offset-4"
                  >
                    Send it on WhatsApp instead
                  </a>
                  .
                </p>
              </div>
            )}

            {state !== 'sent' && (
              <form
                onSubmit={handleSubmit}
                className="w-full rounded-full bg-[#F4F6F0] p-1.5 pl-5 flex items-center justify-between gap-2"
              >
                <label htmlFor={inputId} className="sr-only">
                  Your phone number or email
                </label>
                <input
                  id={inputId}
                  type="text"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  disabled={state === 'sending'}
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Your phone number"
                  className="w-full min-w-0 bg-transparent text-[#050705] placeholder:text-[#050705]/50 text-[15px] focus:outline-none disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={state === 'sending'}
                  className="btn-press px-6 py-3 rounded-full bg-[#0A0E0A] hover:bg-[#171E17] text-[#F4F6F0] font-semibold text-[14px] shrink-0 flex items-center gap-2 disabled:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0E0A]"
                >
                  {state === 'sending' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#C8FF2E]" aria-hidden="true" />
                      Sending
                    </>
                  ) : (
                    'Start free'
                  )}
                </button>
              </form>
            )}

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1 text-[14px]">
              <a
                href={WHATSAPP_HELLO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-4 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0E0A]"
              >
                Or WhatsApp us
              </a>
              <a
                href={RETAILER_APK_URL}
                className="inline-flex items-center gap-1.5 underline underline-offset-4 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0E0A]"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                Download shop app (APK)
              </a>
              <a
                href={RETAILER_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 underline underline-offset-4 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0E0A]"
              >
                Shop login
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
