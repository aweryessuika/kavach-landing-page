// Writes the static SEO pages, the 404 page and sitemap.xml into dist/.
// Runs after `vite build` (client) and `vite build --ssr src/seo/entry-server.ts`.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const server = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

// Reuse the homepage's built stylesheet and font links so the SEO pages share one
// Tailwind bundle with the React app. No page JavaScript is shipped to them.
const homeHtml = await readFile(path.join(distDir, 'index.html'), 'utf8');
const stylesheetTags = homeHtml.match(/<link[^>]+rel="stylesheet"[^>]*>/g) ?? [];
const builtCss = stylesheetTags.filter((tag) => tag.includes('/assets/'));
if (builtCss.length === 0) {
  throw new Error('prerender: no built /assets/*.css stylesheet found in dist/index.html');
}
const preconnectTags = homeHtml.match(/<link[^>]+rel="preconnect"[^>]*>/g) ?? [];

function documentFor(page) {
  return `<!doctype html>
<html lang="${server.pageLang(page)}" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#050705" />
    ${server.renderHead(page)}
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="apple-touch-icon" href="/favicon.svg" />
    <link rel="manifest" href="/site.webmanifest" />
    ${[...preconnectTags, ...stylesheetTags].join('\n    ')}
  </head>
  <body class="bg-[#050705] text-[#F4F6F0] antialiased">
    ${server.renderBody(page)}
  </body>
</html>
`;
}

async function writePage(relativeFile, html) {
  const target = path.join(distDir, relativeFile);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, html, 'utf8');
  console.log(`prerender: wrote dist/${relativeFile.replaceAll(path.sep, '/')}`);
}

for (const page of server.SEO_PAGES) {
  // /emi-locker-app -> dist/emi-locker-app/index.html, served at /emi-locker-app on Vercel.
  await writePage(path.join(page.path.slice(1), 'index.html'), documentFor(page));
}
await writePage('404.html', documentFor(server.NOT_FOUND_PAGE));

const sitemap = server.renderSitemap();
await writePage('sitemap.xml', sitemap);
await writePage('sitemap-main.xml', sitemap);

await rm(ssrDir, { recursive: true, force: true });
console.log(`prerender: ${server.SEO_PAGES.length} pages, 404 and sitemap done`);
