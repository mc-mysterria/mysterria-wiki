/*
 * Records the width and height of every remote image the docs use (![...](https://...)),
 * in src/data/remote-image-sizes.json. The rehype plugin in src/lib/rehype-image-sizes.mjs
 * writes them onto the <img> tags at build time, so the browser keeps the image's room
 * before it loads and the page does not jump (layout shift). Astro only measures local
 * images; these are hosted elsewhere and the build itself never fetches them.
 *
 *   node scripts/measure-remote-images.mjs
 *
 * Run it again after adding remote images to the docs. Existing entries are kept.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = path.join(import.meta.dirname, '..');
const docs = path.join(root, 'src/content/docs');
const out = path.join(root, 'src/data/remote-image-sizes.json');

const files = fs.readdirSync(docs, {recursive: true}).filter(f => /\.mdx?$/.test(f));
const urls = new Set();
for (const file of files) {
  const text = fs.readFileSync(path.join(docs, file), 'utf8');
  for (const match of text.matchAll(/!\[[^\]]*\]\((https?:\/\/[^)\s]+)/g)) urls.add(match[1]);
  for (const match of text.matchAll(/<img[^>]+src=["'](https?:\/\/[^"']+)["']/g)) urls.add(match[1]);
}

const sizes = fs.existsSync(out) ? JSON.parse(fs.readFileSync(out, 'utf8')) : {};
for (const url of urls) {
  if (sizes[url]) continue;
  try {
    const response = await fetch(url, {signal: AbortSignal.timeout(20000)});
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const meta = await sharp(Buffer.from(await response.arrayBuffer())).metadata();
    sizes[url] = {width: meta.width, height: meta.pageHeight ?? meta.height};
    console.log(`${meta.width}x${meta.height}  ${url}`);
  } catch (error) {
    console.warn(`skipped ${url}: ${error.message}`);
  }
}

fs.mkdirSync(path.dirname(out), {recursive: true});
const sorted = Object.fromEntries(Object.entries(sizes).sort(([a], [b]) => a.localeCompare(b)));
fs.writeFileSync(out, JSON.stringify(sorted, null, 2) + '\n');
console.log(`${Object.keys(sorted).length} images in ${path.relative(root, out)}`);
