# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro project using the Starlight documentation theme for the Mysterria Minecraft server documentation website. The site is built as a static site and served by an nginx container (`Dockerfile`, `nginx.conf`), in the same eight locales as the main site.

## Development Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally before deploying |
| `npm run astro ...` | Run Astro CLI commands |

## Architecture

### Core Structure
- **Framework**: Astro 6 with Starlight 0.38 and `@astrojs/vue` (server-rendered only)
- **Content**: Markdown/MDX files in `src/content/docs/`
- **Deployment**: static files in an nginx container (`Dockerfile`, `nginx.conf`)
- **Site URL**: https://wiki.mysterria.net

### Key Directories
- `src/content/docs/` - All documentation content organized by language and category:
  - English lives at the root (`general/`, `magic/`, `guides/`, `firearms/`, `misc/`) because
    `defaultLocale` is `root`; there is no `en/` directory
  - `uk/`, `ro/`, `de/`, `es/`, `fr/`, `zh-tw/`, `zh-cn/` - one directory per locale, mirroring
    the English structure. A page only needs to exist where it has been translated
- `src/content/i18n/` - UI strings that are not page content (header, footer, landing), one JSON file
  per locale, named after the locale's BCP-47 `lang` (so `zh-CN.json`, not `zh-cn.json`)
- `src/assets/` - Images and media files organized by content category
- `src/components/` - Custom Astro components
- `src/styles/` - Custom CSS and theming
- `public/` - Files served as they are (favicon, og-image, robots.txt)

### Content Management
- **Content Config**: `src/content.config.ts` defines collection schemas
- **Sidebar Navigation**: an explicit list in `src/lib/sidebar.mjs` (see Development Notes)
- **Frontmatter**: Standard Starlight frontmatter for metadata and page configuration
- **Languages**: Eight locales - English (root), `uk`, `ro`, `de`, `es`, `fr`, `zh-tw`, `zh-cn` -
  matching mysteria-frontend's set, labels, and picker order
- **Fallback**: A page missing from a locale is served from English automatically, with
  Starlight's translated "content is not available in your language yet" notice. Translating a
  page means adding the file; nothing needs registering
- **Chinese casing**: locale keys and directories are lowercase (`zh-cn`) because Astro lowercases
  collection ids, but `lang` stays `zh-CN`. The main site routes `/zh-CN`, so `src/lib/site.ts` maps
  between them for cross-site links

### Styling & Theming
- **Design system**: the main site's (mysteria-frontend). `src/styles/arcana.css` (tokens, the
  self-hosted Commissioner face and its metric-matched fallback, dark and parchment themes) and
  `src/components/std/std.css` + `std-gas.css` are copies, pruned of the rules for pieces the
  wiki never renders; sync them from the main site rather than editing them (each header says
  how). `src/styles/wiki.css` is the wiki's own mapping of Starlight onto those tokens
- **Theme**: `localStorage['myst-theme']` = `dark` | `parchment` on `<html data-theme>`, as on the
  main site (plus a `.mysterria.net` cookie so the choice can carry across once the main site reads it)
- **Accent**: Bone (`#e4dccb`), the main site's accent before a Pathway card is drawn

### Custom Components
- See `src/components/README.md` (also the MDX usage guide)
- **Std components**: `src/components/std/` (copied Vue components, rendered server-side, no client JS)
- **Starlight overrides**: `src/components/starlight/` (Head, ThemeProvider, PageFrame, Header,
  ThemeSelect, LanguageSelect, MobileMenuFooter, Hero, Search, and TableOfContents and
  MobileTableOfContents wrapped in TocGate), registered in `astro.config.mjs`.
  Search reads `src/pages/search/[lang].json.ts` and Starlight's Pagefind index
- **Footer**: `src/components/SiteFooter.astro`, the main site's footer
- **MDX components**: `src/components/mdx/` (Card, CardGrid, Notice, SequenceTable, Figure)

### Configuration
- **Astro Config**: `astro.config.mjs` - Main configuration with Starlight setup
- **TypeScript**: Strict TypeScript configuration
- **Image Optimization**: Sharp service with unlimited input pixels
- **Sitemap**: Automatic sitemap generation, with hreflang alternates

### Deployment
- **Platform**: the Docker image (`Dockerfile`): `npm run build`, then nginx serves `dist/` with
  the redirects and cache headers in `nginx.conf`. The host's nginx terminates TLS in front of it
- **Domain**: wiki.mysterria.net

## Content Guidelines

When working with content:
- Content should be organized by locale directory (English at the root, `uk/`, `de/`, … alongside it)
- Follow existing frontmatter patterns for consistency
- Images should be placed in appropriate `src/assets/` subdirectories
- Use MDX for pages that need the components in `src/components/mdx/`
- A new page goes in a folder (its URL), and must also be listed in `src/lib/sidebar.mjs` in the section where it belongs. Pages not listed there do not show in the sidebar, the landing page or the quick search
- Images: import a file from `src/assets/` with the `~/assets/...` alias and show it with `<Figure src={...} alt="..." caption="..."/>` from `~/components/mdx`. Plain Markdown images still work
- Asides: `:::note`, `:::tip`, `:::caution` and `:::danger` work as in any Starlight site. A warning about losing items, progress or Madness is caution or danger, never tip
- Links should include the locale prefix (e.g., /uk/general/start/); English has no prefix (/general/start/)

## Development Notes

- The sidebar is an explicit list in `src/lib/sidebar.mjs` (nine sections, each folded except the current one), shared with the search index in `src/pages/search/[lang].json.ts`. It is not generated from folders
- Removing or merging a page needs a redirect in both `astro.config.mjs` (redirects) and `nginx.conf` (Docker)
- Custom styling heavily customizes the default Starlight appearance
- The landing page is drawn by `src/components/starlight/Hero.astro` from the index pages' frontmatter
- All external links point to Mysterria ecosystem (mysterria.net, Discord, etc.)