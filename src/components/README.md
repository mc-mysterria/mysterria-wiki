# Wiki components

The wiki uses the main site's design system (www.mysterria.net, repo `mysteria-frontend`), so its pages read as part of the same site.

## What lives where

- `std/` holds copies of the main site's std Vue components (`StdButton`, `StdCard`, `StdTag`, `StdSectionHead`, `StdChip`, `StdIcon`) and their two style sheets (`std.css`, `std-gas.css`). They are rendered to HTML at build time by `@astrojs/vue` and send no JavaScript to the page. Each file starts with a comment saying which main-site file it copies and what was changed (`vue-router` and the per-component CSS imports were removed; the two sheets are loaded once, globally, before `wiki.css`). To sync them, copy the files over from the main site again and re-apply those small changes.
- `../styles/arcana.css` and `../styles/fonts/commissioner/` hold the main site's tokens, Commissioner font and its metric-matched fallback, and the dark and parchment themes, also copied. `../styles/wiki.css` is the wiki's own: it maps Starlight onto those tokens.
- `starlight/` holds the Starlight overrides (set in `astro.config.mjs` under `components`): the main site's header, footer, theme switch (the `myst-theme` key, `dark` or `parchment`), language menu, the landing page (`Hero.astro`) and the extra SEO tags (`Head.astro`).
- `mdx/` holds the components MDX pages can use, listed below.
- The header and footer text comes from `src/content/i18n/<lang>.json`. Most of it is copied from the main site by `node scripts/sync-main-site-strings.mjs <path to mysteria-frontend>/src/locales`.

## Using components in MDX

These only work in `.mdx` pages. Import what you need at the top of the page, after the frontmatter:

```mdx
import {Card, CardGrid, Tag, Notice, Button, SequenceTable, Figure} from '~/components/mdx';
```

### Card and CardGrid

A card is a link with a title, an optional line of text and an optional icon. Put several in a `CardGrid`.

```mdx
<CardGrid>
  <Card title="Pathways" text="All 22 Pathways, from Sequence 9 to 0." icon="star" href="/magic/pathways/" />
  <Card title="Acting" text="How to digest a potion." href="/magic/acting/" />
</CardGrid>
```

The icons are the std set's own icons, listed in `std/icons.ts`. Some examples are `star`, `book`, `scroll`, `flame`, `shield`, `coin`, `clock`, `user` and `globe`. Use `<CardGrid min={200}>` to allow narrower columns.

### Tag

A small label. The tones are `neutral` (the default), `acc`, `ok`, `warn` and `bad`. Add `solid` for the one tag that matters most in a group.

```mdx
<Tag label="Sequence 9" /> <Tag tone="ok" label="Safe" /> <Tag tone="bad" solid label="Lethal" />
```

### Notice

A callout box. The tones are `info` (the default), `ok`, `warn`, `bad` and `acc`. The small label above the text defaults to Note, Tip, Caution or Danger, in the reader's language. You can change it with `kind`.

```mdx
<Notice tone="warn" title="Mind the Crimson Moon">
  Beyonders lose control more easily under it.
</Notice>
```

Starlight's own asides look the same and also work in plain `.md` pages:

```md
:::caution[Mind the Crimson Moon]
Beyonders lose control more easily under it.
:::
```

### Button

A button or link button. The variants are `primary` (use only one per section), `secondary` (the default), `quiet` and `link`. The sizes are `sm`, `md` and `lg`. Add `external` for links that open in a new tab.

```mdx
<Button href="/general/start/" variant="primary" iconEnd="arrow-right">Start playing</Button>
<Button href="https://www.mysterria.net/en/pathways" variant="link" external>Pathways on the main site</Button>
```

### SequenceTable

Wrap a Markdown table to give it the Pathway style. The table fills the column, the first column (the Sequence number) is shown in the accent colour, and the second column (the name) is bold. Leave a blank line before and after the table.

```mdx
<SequenceTable caption="Seer Pathway">

| Sequence | Name     | Notes             |
|----------|----------|-------------------|
| 9        | Seer     | Divination basics |
| 8        | Clown    | Acrobatics        |

</SequenceTable>
```

Any other Markdown table automatically gets the main site's table style.

### Figure

An image with a caption. Import a local image to have it resized and sized correctly, so the page does not jump while it loads. Add `contain` to keep a small image at its own size, centred.

```mdx
import shard from '../../assets/shards/shard.png';

<Figure src={shard} alt="An energy shard" caption="An energy shard, as found in the world." contain />
```

For a remote image, give its size: `<Figure src="https://..." width={1200} height={630} alt="..." />`.

## The landing page

The landing page is drawn by `starlight/Hero.astro` for any page that has `hero` in its frontmatter, which means `src/content/docs/index.md` and its translations. The title, tagline and buttons come from that frontmatter. The four section cards use translated titles and the description of the page they link to. To write your own card text, add a `landing` block to the page's frontmatter:

```yaml
landing:
  sections:
    - folder: magic
      title: Magic and Pathways
      text: Potions, Sequences and the 22 Pathways.
```
