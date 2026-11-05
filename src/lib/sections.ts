/*
 * The wiki's top-level sections, read from Starlight's sidebar (which is generated from
 * the folders in src/content/docs), for the landing page and the breadcrumbs.
 */
import type {StarlightRouteData} from '@astrojs/starlight/route-data';

type SidebarEntry = StarlightRouteData['sidebar'][number];
export type SidebarLink = Extract<SidebarEntry, {type: 'link'}>;
export type SidebarGroup = Extract<SidebarEntry, {type: 'group'}>;

/** The folder a sidebar link lives in: /uk/magic/acting/ -> magic. */
export function folderOf(href: string, locale: string | undefined): string {
  const parts = href.split('/').filter(Boolean);
  if (locale && parts[0] === locale) parts.shift();
  return parts[0] ?? '';
}

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

/** Each top-level group, keyed by the folder its pages are in. */
export function sectionsByFolder(sidebar: SidebarEntry[], locale: string | undefined): Map<string, SidebarGroup> {
  const map = new Map<string, SidebarGroup>();
  for (const entry of sidebar) {
    if (entry.type !== 'group') continue;
    const first = links(entry)[0];
    if (first) map.set(folderOf(first.href, locale), entry);
  }
  return map;
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
