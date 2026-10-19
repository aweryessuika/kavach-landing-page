import type { ReactElement } from 'react';
import type { Crumb } from './SeoLayout';

export interface Faq {
  q: string;
  a: string;
}

// BCP 47 language tags the SEO pages are written in.
export type PageLang = 'en-IN' | 'hi-IN';

export interface Translation {
  lang: PageLang;
  path: string;
}

export interface SeoPage {
  // URL path without a trailing slash, e.g. "/emi-locker-app".
  path: string;
  // Full <title>. Keep under ~60 characters so Google shows it whole.
  title: string;
  // Meta description. Keep under ~155 characters.
  description: string;
  crumbs: Crumb[];
  faqs: Faq[];
  // Pages that must stay out of the index and the sitemap (e.g. the 404 page).
  noindex?: boolean;
  // Language of the page body. Defaults to en-IN.
  lang?: PageLang;
  // The same page in other languages. Each version must list the others so the
  // hreflang tags stay reciprocal.
  translations?: Translation[];
  showCta?: boolean;
  lastModified: string;
  render: () => ReactElement;
}
