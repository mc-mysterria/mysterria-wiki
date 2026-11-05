/*
 * The wiki's links to itself and to the main site, shared by the header, the footer, the
 * landing page and the head.
 */

export const MAIN_SITE = 'https://www.mysterria.net';
export const WIKI_SITE = 'https://wiki.mysterria.net';
export const DISCORD_URL = 'https://discord.com/invite/jc7GSxBWgb';
export const MAP_URL = 'https://map.mysterria.net/';
export const COMPANION_URL = 'https://modrinth.com/mod/coi-client';
export const SERVER_IP = 'mc.mysterria.net';

/**
 * The picker's order and labels are the main site's (src/assets/sources/locales.json in
 * mysteria-frontend). `key` is the wiki's Starlight locale (undefined for English at the
 * root), `site` the main site's route segment: the two disagree on Chinese casing, because
 * Astro lowercases content-collection ids while the main site routes /zh-CN.
 */
export const LOCALES = [
  {key: undefined, site: 'en', short: 'EN', name: 'English'},
  {key: 'uk', site: 'uk', short: 'UK', name: 'Українська'},
  {key: 'ro', site: 'ro', short: 'RO', name: 'Română'},
  {key: 'de', site: 'de', short: 'DE', name: 'Deutsch'},
  {key: 'es', site: 'es', short: 'ES', name: 'Español'},
  {key: 'fr', site: 'fr', short: 'FR', name: 'Français'},
  {key: 'zh-tw', site: 'zh-TW', short: '繁', name: '繁體中文'},
  {key: 'zh-cn', site: 'zh-CN', short: '简', name: '简体中文'},
] as const;

export type WikiLocale = (typeof LOCALES)[number]['key'];

export const localeInfo = (locale: string | undefined) => LOCALES.find(l => l.key === locale) ?? LOCALES[0];

/** A wiki path in the reader's language: English has no prefix. */
export const wikiPath = (locale: string | undefined, path = '/') => (locale ? `/${locale}${path}` : path);

/** The same main-site page in the reader's language (the main site always has a segment). */
export const mainUrl = (locale: string | undefined, path = '') => `${MAIN_SITE}/${localeInfo(locale).site}${path}`;

/** The current page's path in another language (Starlight serves an English fallback where a page is untranslated). */
export function localizedPath(pathname: string, target: string | undefined): string {
  const segments = pathname.split('/');
  const keys = LOCALES.map(l => l.key).filter(Boolean) as string[];
  const rest = keys.includes(segments[1]) ? '/' + segments.slice(2).join('/') : pathname;
  return wikiPath(target, rest === '' ? '/' : rest);
}

/** The main site's nav, in its order: every item leads to www.mysterria.net in the reader's language. */
export const MAIN_NAV = [
  {key: 'nav.guide', path: '/guide'},
  {key: 'nav.pathways', path: '/pathways'},
  {key: 'nav.store', path: '/store'},
  {key: 'nav.rules', path: '/rules'},
  {key: 'nav.news', path: '/news'},
] as const;
