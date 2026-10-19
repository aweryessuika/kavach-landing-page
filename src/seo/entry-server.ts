// Build-time entry for the static SEO pages. `vite build --ssr` compiles this file and
// scripts/prerender.mjs calls it to write one HTML file per page into dist/.
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { SeoLayout } from './SeoLayout';
import { NOT_FOUND_PAGE, SEO_PAGES } from './routes';
import { OG_IMAGE_URL, SITE_URL } from './site';
import type { SeoPage } from './types';

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

export function renderBody(page: SeoPage): string {
  return renderToStaticMarkup(
    createElement(
      SeoLayout,
      { currentPath: page.path, crumbs: page.crumbs, faqs: page.faqs, showCta: page.showCta ?? true },
      createElement(page.render),
    ),
  );
}

export function renderHead(page: SeoPage): string {
  const url = pageUrl(page);
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  const robots = page.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1';

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: 'en-IN',
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
      `<link rel="alternate" hreflang="en-in" href="${url}" />`,
      `<link rel="alternate" hreflang="x-default" href="${url}" />`,
      '<meta property="og:type" content="website" />',
      '<meta property="og:site_name" content="Kavach" />',
      '<meta property="og:locale" content="en_IN" />',
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

export function renderSitemap(): string {
  const entries = [
    { loc: `${SITE_URL}/`, lastmod: HOME_LAST_MODIFIED, priority: '1.0' },
    ...SEO_PAGES.filter((page) => !page.noindex).map((page) => ({
      loc: pageUrl(page),
      lastmod: page.lastModified,
      priority: page.path.startsWith('/alternatives/') ? '0.6' : '0.8',
    })),
  ];
  const urls = entries
    .map(
      (entry) =>
        `  <url>\n    <loc>${entry.loc}</loc>\n    <lastmod>${entry.lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}
