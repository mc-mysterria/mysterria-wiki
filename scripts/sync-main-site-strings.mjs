/*
 * Copies the header and footer strings from the main site's locale files into
 * src/content/i18n/<lang>.json, so the wiki's chrome keeps the main site's wording.
 *
 *   node scripts/sync-main-site-strings.mjs ../mysteria-frontend-seo/src/locales
 *
 * The `wiki.*` and `landing.*` strings are the wiki's own and are written from the table
 * below. Every run rewrites the eight files completely.
 */
import fs from 'node:fs';
import path from 'node:path';

const M = (process.argv[2] ?? '../mysteria-frontend-seo/src/locales') + '/';
const OUT = path.join(import.meta.dirname, '..', 'src/content/i18n');
const map = {
  'nav.guide': 'navGame', 'nav.pathways': 'navPathways', 'nav.store': 'navShop', 'nav.rules': 'navRules',
  'nav.news': 'navNews', 'nav.wiki': 'navWiki', 'nav.home': 'navHome',
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
  en: {t: 'Wiki', s: 'Sections', a: 'Start', b: 'Magic and Pathways', c: 'Guides', d: 'Firearms', m: 'Main site'},
  uk: {t: 'Вікі', s: 'Розділи', a: 'Початок', b: 'Магія і Шляхи', c: 'Посібники', d: 'Вогнепал', m: 'Головний сайт'},
  ro: {t: 'Wiki', s: 'Secțiuni', a: 'Început', b: 'Magie și Căi', c: 'Ghiduri', d: 'Arme de foc', m: 'Site-ul principal'},
  de: {t: 'Wiki', s: 'Bereiche', a: 'Start', b: 'Magie und Pfade', c: 'Leitfäden', d: 'Feuerwaffen', m: 'Hauptseite'},
  es: {t: 'Wiki', s: 'Secciones', a: 'Inicio', b: 'Magia y Senderos', c: 'Guías', d: 'Armas de fuego', m: 'Sitio principal'},
  fr: {t: 'Wiki', s: 'Rubriques', a: 'Commencer', b: 'Magie et Voies', c: 'Guides', d: 'Armes à feu', m: 'Site principal'},
  'zh-CN': {t: '维基', s: '栏目', a: '开始', b: '魔法与途径', c: '指南', d: '枪械', m: '主站'},
  'zh-TW': {t: '維基', s: '欄目', a: '開始', b: '魔法與途徑', c: '指南', d: '槍械', m: '主站'},
};
for (const l of Object.keys(own)) {
  const j = JSON.parse(fs.readFileSync(M + l + '.json', 'utf8'));
  const g = p => p.split('.').reduce((o, k) => o && o[k], j);
  const out = {};
  for (const [k, src] of Object.entries(map)) {
    const v = g(src);
    if (typeof v !== 'string') throw new Error(l + ' ' + src);
    out[k] = v;
  }
  const o = own[l];
  Object.assign(out, {'wiki.tagline': o.t, 'wiki.mainSite': o.m, 'landing.sections': o.s, 'landing.start': o.a, 'landing.magic': o.b, 'landing.guides': o.c, 'landing.firearms': o.d});
  fs.writeFileSync(`${OUT}/${l}.json`, JSON.stringify(out, null, 2) + '\n');
}
console.log(`wrote ${Object.keys(own).length} files to ${OUT}`);
