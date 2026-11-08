/*
 * The wiki's sections, read from Starlight's sidebar (src/lib/sidebar.mjs), for the landing
 * page and the folder hubs (/magic/, /uk/guides/ and so on: components/mdx/SectionIndex.astro).
 */
import type {StarlightRouteData} from '@astrojs/starlight/route-data';

type SidebarEntry = StarlightRouteData['sidebar'][number];
export type SidebarLink = Extract<SidebarEntry, {type: 'link'}>;
export type SidebarGroup = Extract<SidebarEntry, {type: 'group'}>;

export function links(group: SidebarGroup): SidebarLink[] {
  return group.entries.flatMap(entry => (entry.type === 'link' ? [entry] : links(entry)));
}

/** A page's id without the language: /uk/magic/acting/ -> magic/acting. */
export const pageId = (href: string, locale: string | undefined) =>
  href.split('/').filter(Boolean).filter((part, i) => !(i === 0 && part === locale)).join('/');

/**
 * Sidebar labels carry a leading emoji (set in each page's frontmatter); the landing page's
 * lists and the breadcrumbs read better without it.
 */
export const plainLabel = (label: string) => label.replace(/^[\p{Extended_Pictographic}\p{Emoji_Modifier}\u{FE0F}\u{200D}\s]+/u, '').trim() || label;

/*
 * A section's pages as one flat list. A sub-group's first page is its overview, labelled
 * "Overview" in the sidebar where the sub-group's name sits above it: here it takes that name.
 */
export const flatLinks = (group: SidebarGroup) => group.entries.flatMap(entry => {
  if (entry.type === 'link') return [{href: entry.href, label: plainLabel(entry.label), badge: entry.badge}];
  const [first, ...rest] = links(entry);
  return [
    ...(first ? [{href: first.href, label: plainLabel(entry.label), badge: first.badge}] : []),
    ...rest.map(link => ({href: link.href, label: plainLabel(link.label), badge: link.badge})),
  ];
});
