/*
 * Gives remote images in the docs their width and height (from src/data/remote-image-sizes.json,
 * written by scripts/measure-remote-images.mjs), so the browser reserves their room before
 * they load and nothing below them jumps. Every image after a page's first is also loaded
 * lazily. Local images are left to Astro, which already does both.
 */
import fs from 'node:fs';

const SIZES_FILE = new URL('../data/remote-image-sizes.json', import.meta.url);

export default function rehypeImageSizes() {
  const sizes = fs.existsSync(SIZES_FILE) ? JSON.parse(fs.readFileSync(SIZES_FILE, 'utf8')) : {};
  return tree => {
    let seen = 0;
    const visit = node => {
      if (node.type === 'element' && node.tagName === 'img') {
        const src = String(node.properties?.src ?? '');
        const size = sizes[src];
        if (size && node.properties.width == null && node.properties.height == null) {
          node.properties.width = size.width;
          node.properties.height = size.height;
        }
        if (/^https?:/.test(src)) {
          node.properties.decoding ??= 'async';
          if (seen > 0) node.properties.loading ??= 'lazy';
        }
        seen++;
      }
      for (const child of node.children ?? []) visit(child);
    };
    visit(tree);
  };
}
