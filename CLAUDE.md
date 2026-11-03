# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro project using the Starlight documentation theme for the Mysterria Minecraft server documentation website. The site is built as a static site and deployed to Vercel, serving the same eight locales as the main site.

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
- **Deployment**: Static site hosted on Vercel
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
- `public/` - Static assets (favicon, robots.txt, custom scripts)

### Content Management
- **Content Config**: `src/content.config.ts` defines collection schemas
- **Sidebar Navigation**: Auto-generated from directory structure in `astro.config.mjs`
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
  `src/components/std/std.css` + `std-gas.css` are copies; sync them from the main site rather
  than editing them. `src/styles/wiki.css` is the wiki's own mapping of Starlight onto those tokens
- **Theme**: `localStorage['myst-theme']` = `dark` | `parchment` on `<html data-theme>`, as on the
  main site (plus a `.mysterria.net` cookie so the choice can carry across once the main site reads it)
- **Accent**: Bone (`#e4dccb`), the main site's accent before a Pathway card is drawn

### Custom Components
- See `src/components/README.md` (also the MDX usage guide)
- **Std components**: `src/components/std/` (copied Vue components, rendered server-side, no client JS)
- **Starlight overrides**: `src/components/starlight/` (Head, ThemeProvider, PageFrame, Header,
  ThemeSelect, LanguageSelect, MobileMenuFooter, Hero), registered in `astro.config.mjs`
- **Footer**: `src/components/SiteFooter.astro`, the main site's footer
- **MDX components**: `src/components/mdx/` (Card, CardGrid, Tag, Notice, Button, SequenceTable, Figure)

### Configuration
- **Astro Config**: `astro.config.mjs` - Main configuration with Starlight setup
- **TypeScript**: Strict TypeScript configuration
- **Image Optimization**: Sharp service with unlimited input pixels
- **Analytics**: Vercel Web Analytics enabled
- **Sitemap**: Automatic sitemap generation

### Deployment
- **Platform**: Vercel with static output
- **Domain**: wiki.mysterria.net
- **Build**: Automatic builds on git push
- **Performance**: Optimized static site generation with image processing

## Content Guidelines

When working with content:
- Content should be organized by locale directory (English at the root, `uk/`, `de/`, … alongside it)
- Follow existing frontmatter patterns for consistency
- Images should be placed in appropriate `src/assets/` subdirectories
- Use MDX for content requiring React-like components
- Maintain consistent navigation structure through directory organization
- Links should include the locale prefix (e.g., /uk/general/start/); English has no prefix (/general/start/)

## Development Notes

- The site uses auto-generated sidebar navigation based on directory structure
- Custom styling heavily customizes the default Starlight appearance
- The landing page is drawn by `src/components/starlight/Hero.astro` from the index pages' frontmatter
- Remote images get their size from `src/data/remote-image-sizes.json` (`node scripts/measure-remote-images.mjs`)
- All external links point to Mysterria ecosystem (mysterria.net, Discord, etc.)