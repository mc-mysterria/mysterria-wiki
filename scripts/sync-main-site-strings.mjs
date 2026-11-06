/*
 * Copies the header and footer strings from the main site's locale files into
 * src/content/i18n/<lang>.json, so the wiki's chrome keeps the main site's wording.
 *
 *   node scripts/sync-main-site-strings.mjs ../mysteria-frontend-seo/src/locales
 *
 * Only the copied keys and the two wiki-only ones in the table below are written; every
 * other key in the files (the search box, the landing page) is the wiki's own and is kept.
 */
import fs from 'node:fs';
import path from 'node:path';

const M = (process.argv[2] ?? '../mysteria-frontend-seo/src/locales') + '/';
const OUT = path.join(import.meta.dirname, '..', 'src/content/i18n');
const map = {
  'nav.guide': 'navGame', 'nav.pathways': 'navPathways', 'nav.store': 'navShop', 'nav.rules': 'navRules',
  'nav.news': 'navNews', 'nav.wiki': 'navWiki',
  'header.navLabel': 'header.navLabel', 'header.themeDark': 'header.themeDark', 'header.themeLight': 'header.themeLight',
  'header.toggleNav': 'header.toggleNav', 'header.closeNav': 'header.closeNav', 'header.languageLabel': 'header.languageLabel',
  'footer.disclaimer': 'footer.disclaimer', 'footer.playHeading': 'footer.playHeading', 'footer.serverHeading': 'footer.serverHeading',
  'footer.communityHeading': 'footer.communityHeading', 'footer.linkSeats': 'footer.linkSeats', 'footer.linkHelp': 'footer.linkHelp',
  'footer.linkLotm': 'footer.linkLotm', 'footer.linkStaff': 'footer.linkStaff', 'footer.linkCompanion': 'footer.linkCompanion',
  'footer.legalLabel': 'footer.legalLabel', 'footer.changelog': 'newsPage.changelog', 'footer.terms': 'termsViewTitle',
  'footer.privacy': 'privacyViewTitle', 'services.discord': 'servicesDiscord', 'services.map': 'servicesMap',
  'services.discordDesc': 'servicesDiscordDesc', 'services.mapDesc': 'servicesMapDesc',
};
// wiki-only strings, written for the wiki (not on the main site)
const own = {
  en: {t: 'Wiki', m: 'Main site'},
  uk: {t: 'Вікі', m: 'Головний сайт'},
  ro: {t: 'Wiki', m: 'Site-ul principal'},
  de: {t: 'Wiki', m: 'Hauptseite'},
  es: {t: 'Wiki', m: 'Sitio principal'},
  fr: {t: 'Wiki', m: 'Site principal'},
  'zh-CN': {t: '维基', m: '主站'},
  'zh-TW': {t: '維基', m: '主站'},
};
for (const l of Object.keys(own)) {
  const j = JSON.parse(fs.readFileSync(M + l + '.json', 'utf8'));
  const g = p => p.split('.').reduce((o, k) => o && o[k], j);
  const file = `${OUT}/${l}.json`;
  const out = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : {};
  for (const [k, src] of Object.entries(map)) {
    const v = g(src);
    if (typeof v !== 'string') throw new Error(l + ' ' + src);
    out[k] = v;
  }
  const o = own[l];
  Object.assign(out, {'wiki.tagline': o.t, 'wiki.mainSite': o.m});
  fs.writeFileSync(file, JSON.stringify(out, null, 2) + '\n');
}
console.log(`wrote ${Object.keys(own).length} files to ${OUT}`);
