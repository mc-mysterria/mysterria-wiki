# Mysterria Wiki

The wiki for Mysterria, the Lord of the Mysteries Minecraft server: https://wiki.mysterria.net

Astro and Starlight, styled with the main site's design system, in the same eight languages as the main site. It builds to plain static files that an nginx container serves.

## Commands

| Command | What it does |
| :-- | :-- |
| `npm install` | Install the dependencies |
| `npm run dev` | Start a local server at `localhost:4321` |
| `npm run build` | Build the site into `dist/` |
| `npm run preview` | Serve the built site locally |
| `docker build -t mysterria-wiki .` | Build the production image (the site behind nginx, see `nginx.conf`) |

## Where things are

- `src/content/docs/`: the pages. English is at the root, each other language in its own folder (`uk/`, `de/`, ...)
- `src/lib/sidebar.mjs`: the sidebar. A new page must be listed here to show in the sidebar, on the landing page and in search
- `src/assets/`: the images pages use
- `src/components/`: the header, footer, landing page, search and the components pages can use (see `src/components/README.md`)
- `src/styles/`: the main site's design system and the wiki's own styles

`CLAUDE.md` has the editing rules: links, images, asides and redirects.
