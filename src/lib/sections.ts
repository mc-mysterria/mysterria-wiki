/*
 * The wiki's top-level sections, read from Starlight's sidebar (src/lib/sidebar.mjs), for the
 * landing page and the head's breadcrumbs.
 */
import type {StarlightRouteData} from '@astrojs/starlight/route-data';

type SidebarEntry = StarlightRouteData['sidebar'][number];
export type SidebarLink = Extract<SidebarEntry, {type: 'link'}>;
export type SidebarGroup = Extract<SidebarEntry, {type: 'group'}>;

/** A link's content id, and the English one it falls back to: /uk/magic/acting/ -> uk/magic/acting, magic/acting. */
export function entryIds(href: string, locale: string | undefined): string[] {
  const parts = href.split('/').filter(Boolean);
  if (locale && parts[0] === locale) parts.shift();
  const id = parts.join('/');
  return locale ? [`${locale}/${id}`, id] : [id];
}

export function links(group: SidebarGroup): SidebarLink[] {
  return group.entries.flatMap(entry => (entry.type === 'link' ? [entry] : links(entry)));
}

/** The group holding the current page, if any. */
export function currentSection(sidebar: SidebarEntry[]): SidebarGroup | undefined {
  return sidebar.find((entry): entry is SidebarGroup => entry.type === 'group' && links(entry).some(link => link.isCurrent));
}

/**
 * Sidebar labels carry a leading emoji (set in each page's frontmatter); the landing page's
 * lists and the breadcrumbs read better without it.
 */
export const plainLabel = (label: string) => label.replace(/^[\p{Extended_Pictographic}\p{Emoji_Modifier}\u{FE0F}\u{200D}\s]+/u, '').trim() || label;
