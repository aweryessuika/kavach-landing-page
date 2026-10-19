// Build-time entry for the static SEO pages. `vite build --ssr` compiles this file and
// scripts/prerender.mjs calls it to write one HTML file per page into dist/.
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { SeoLayout } from './SeoLayout';
import { NOT_FOUND_PAGE, SEO_PAGES } from './routes';
import { OG_IMAGE_URL, SITE_URL } from './site';
import type { PageLang, SeoPage, Translation } from './types';

export { NOT_FOUND_PAGE, SEO_PAGES };
export type { SeoPage };

const HOME_LAST_MODIFIED = '2026-10-19';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// JSON inside <script> must not be able to close the tag early.
function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export function pageUrl(page: SeoPage): string {
  return `${SITE_URL}${page.path}`;
}

export function pageLang(page: SeoPage): PageLang {
  return page.lang ?? 'en-IN';
}

const OG_LOCALES: Record<PageLang, string> = { 'en-IN': 'en_IN', 'hi-IN': 'hi_IN' };

// Every language version of a page, this page included. Pages without translations
// list only themselves, which keeps the existing self-referencing en-in tag.
function languageVersions(page: SeoPage): Translation[] {
  return [{ lang: pageLang(page), path: page.path }, ...(page.translations ?? [])];
}

// Searchers whose language matches no version are sent to the English page.
function defaultVersion(versions: Translation[]): Translation {
  return versions.find((version) => version.lang === 'en-IN') ?? versions[0];
}

function hreflangTags(page: SeoPage): string[] {
  const versions = languageVersions(page);
  return [
    ...versions.map(
      (version) =>
        `<link rel="alternate" hreflang="${version.lang.toLowerCase()}" href="${SITE_URL}${version.path}" />`,
    ),
    `<link rel="alternate" hreflang="x-default" href="${SITE_URL}${defaultVersion(versions).path}" />`,
  ];
}

export function renderBody(page: SeoPage): string {
  return renderToStaticMarkup(
    createElement(
      SeoLayout,
      {
        currentPath: page.path,
        crumbs: page.crumbs,
        faqs: page.faqs,
        showCta: page.showCta ?? true,
        lang: pageLang(page),
      },
      createElement(page.render),
    ),
  );
}

export function renderHead(page: SeoPage): string {
  const url = pageUrl(page);
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  const lang = pageLang(page);
  const robots = page.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1';

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: lang,
      dateModified: page.lastModified,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#software` },
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ];

  if (page.crumbs.length > 0) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [{ label: 'Kavach', href: '/' }, ...page.crumbs].map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.label,
        item: `${SITE_URL}${crumb.href}`,
      })),
    });
  }

  if (page.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: page.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    });
  }

  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<meta name="robots" content="${robots}" />`,
  ];

  if (!page.noindex) {
    tags.push(
      `<link rel="canonical" href="${url}" />`,
      ...hreflangTags(page),
      '<meta property="og:type" content="website" />',
      '<meta property="og:site_name" content="Kavach" />',
      `<meta property="og:locale" content="${OG_LOCALES[lang]}" />`,
      ...(page.translations ?? []).map(
        (translation) => `<meta property="og:locale:alternate" content="${OG_LOCALES[translation.lang]}" />`,
      ),
      `<meta property="og:url" content="${url}" />`,
      `<meta property="og:title" content="${title}" />`,
      `<meta property="og:description" content="${description}" />`,
      `<meta property="og:image" content="${OG_IMAGE_URL}" />`,
      '<meta property="og:image:width" content="1200" />',
      '<meta property="og:image:height" content="630" />',
      '<meta name="twitter:card" content="summary_large_image" />',
      `<meta name="twitter:title" content="${title}" />`,
      `<meta name="twitter:description" content="${description}" />`,
      `<meta name="twitter:image" content="${OG_IMAGE_URL}" />`,
      `<script type="application/ld+json">${jsonLd({ '@context': 'https://schema.org', '@graph': graph })}</script>`,
    );
  }

  return tags.join('\n    ');
}

function sitemapPriority(path: string): string {
  if (path.startsWith('/alternatives/')) return '0.6';
  return '0.8';
}

interface SitemapEntry {
  loc: string;
  lastmod: string;
  priority: string;
  // hreflang alternates, written as <xhtml:link> so Google sees the language pairs
  // from the sitemap as well as from each page's head.
  alternates: Translation[];
}

function sitemapAlternates(versions: Translation[]): string {
  if (versions.length === 0) return '';
  return [
    ...versions.map(
      (version) =>
        `\n    <xhtml:link rel="alternate" hreflang="${version.lang.toLowerCase()}" href="${SITE_URL}${version.path}" />`,
    ),
    `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${defaultVersion(versions).path}" />`,
  ].join('');
}

export function renderSitemap(): string {
  const entries: SitemapEntry[] = [
    { loc: `${SITE_URL}/`, lastmod: HOME_LAST_MODIFIED, priority: '1.0', alternates: [] },
    ...SEO_PAGES.filter((page) => !page.noindex).map((page) => ({
      loc: pageUrl(page),
      lastmod: page.lastModified,
      priority: sitemapPriority(page.path),
      alternates: page.translations ? languageVersions(page) : [],
    })),
  ];
  const urls = entries
    .map(
      (entry) =>
        `  <url>\n    <loc>${entry.loc}</loc>${sitemapAlternates(entry.alternates)}\n    <lastmod>${entry.lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
}
