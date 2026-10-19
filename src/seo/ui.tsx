import type { ReactNode } from 'react';
import { KAVACH_PROFILE, type ProductProfile } from './competitors';
import { COMPETITORS_CHECKED_LABEL } from './site';

export function PageHero({
  eyebrow,
  title,
  accent,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <section className="pt-10 pb-12 space-y-5">
      <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0B0F0B] border border-white/[0.1] text-xs font-mono text-[#D2D8CE]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF2E]" aria-hidden="true" />
        {eyebrow}
      </p>
      <h1 className="max-w-3xl font-display font-semibold text-4xl sm:text-5xl tracking-tight text-[#F4F6F0] text-balance">
        {title}
        {accent && (
          <>
            {' '}
            <span className="font-serif italic font-normal">{accent}</span>
          </>
        )}
      </h1>
      <p className="max-w-2xl text-lg text-[#9CA698] text-pretty">{intro}</p>
      {children}
    </section>
  );
}

export function Section({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="py-12 border-t border-white/[0.07]">
      <h2 className="max-w-3xl font-display font-semibold text-3xl tracking-tight text-[#F4F6F0] text-balance mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="max-w-3xl space-y-4 text-base text-[#B8C1B4] text-pretty">{children}</div>;
}

export function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-block px-6 py-3 rounded-full bg-[#C8FF2E] hover:bg-[#D5FF54] text-[#050705] text-base font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8FF2E]"
    >
      {children}
    </a>
  );
}

export function SecondaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-block px-5 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] text-[#F4F6F0] text-base transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8FF2E]"
    >
      {children}
    </a>
  );
}

export function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="text-[#C8FF2E] underline underline-offset-4 hover:text-[#D5FF54]">
      {children}
    </a>
  );
}

export function CardGrid({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.title} className="rounded-2xl border border-white/[0.08] bg-[#0B0F0B] p-6 space-y-2">
          <h3 className="text-lg font-semibold text-[#F4F6F0] text-balance">{item.title}</h3>
          <p className="text-base text-[#9CA698] text-pretty">{item.body}</p>
        </li>
      ))}
    </ul>
  );
}

export function StepList({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="grid gap-4 md:grid-cols-3">
      {steps.map((step, index) => (
        <li key={step.title} className="rounded-2xl border border-white/[0.08] bg-[#0B0F0B] p-6 space-y-2">
          <span className="font-mono text-sm text-[#C8FF2E]">0{index + 1}</span>
          <h3 className="text-lg font-semibold text-[#F4F6F0] text-balance">{step.title}</h3>
          <p className="text-base text-[#9CA698] text-pretty">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

const COMPARE_ROWS: { key: keyof ProductProfile; label: string }[] = [
  { key: 'pricing', label: 'Price' },
  { key: 'setup', label: 'Setup at the counter' },
  { key: 'lockControl', label: 'Who decides a lock' },
  { key: 'offline', label: 'Unlock without internet' },
  { key: 'resetProtection', label: 'Factory reset protection' },
  { key: 'platforms', label: 'Phones supported' },
  { key: 'extras', label: 'Other features' },
];

// Feature by feature table. Kavach is always the first column.
export function CompareTable({ products, caption }: { products: ProductProfile[]; caption: string }) {
  const columns = [KAVACH_PROFILE, ...products];
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
      <table className="w-full min-w-[720px] text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-[#0B0F0B]">
          <tr>
            <th scope="col" className="p-4 font-mono text-xs text-[#6E786B] font-normal">
              feature
            </th>
            {columns.map((product) => (
              <th
                key={product.slug}
                scope="col"
                className={`p-4 text-base font-semibold ${product.slug === 'kavach' ? 'text-[#C8FF2E]' : 'text-[#F4F6F0]'}`}
              >
                {product.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/[0.07]">
          {COMPARE_ROWS.map((row) => (
            <tr key={row.key}>
              <th scope="row" className="p-4 align-top font-semibold text-[#F4F6F0] w-44">
                {row.label}
              </th>
              {columns.map((product) => (
                <td key={product.slug} className="p-4 align-top text-[#9CA698] text-pretty">
                  {product[row.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SourceNote() {
  return (
    <p className="mt-4 max-w-3xl text-sm text-[#6E786B] text-pretty">
      We make Kavach, so read this with that in mind. Every detail about other products comes from that company’s own
      website, checked on {COMPETITORS_CHECKED_LABEL}. Where a website does not say something, we say so instead of
      guessing. Spot something out of date? Write to us and we will fix it.
    </p>
  );
}
