import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { z } from 'astro/zod';

/*
 * The `i18n` collection carries UI strings that are not part of a page's
 * content: the header, the footer and the landing page's section titles.
 * Starlight ships its own chrome (search, "On this page", the
 * untranslated-content notice) translated for every locale we register.
 *
 * Most keys are copied from the main site (mysteria-frontend src/locales/*.json:
 * navGame -> nav.guide and so on, see scripts/sync-main-site-strings.mjs) so the
 * two properties read as one product; `wiki.*` and `landing.*` are the wiki's own.
 */
const uiStrings = z
	.object({
		'nav.guide': z.string(),
		'nav.pathways': z.string(),
		'nav.store': z.string(),
		'nav.rules': z.string(),
		'nav.news': z.string(),
		'nav.wiki': z.string(),
		'nav.home': z.string(),
		'header.navLabel': z.string(),
		'header.themeDark': z.string(),
		'header.themeLight': z.string(),
		'header.toggleNav': z.string(),
		'header.closeNav': z.string(),
		'header.languageLabel': z.string(),
		'footer.disclaimer': z.string(),
		'footer.playHeading': z.string(),
		'footer.serverHeading': z.string(),
		'footer.communityHeading': z.string(),
		'footer.linkSeats': z.string(),
		'footer.linkHelp': z.string(),
		'footer.linkLotm': z.string(),
		'footer.linkStaff': z.string(),
		'footer.linkCompanion': z.string(),
		'footer.legalLabel': z.string(),
		'footer.changelog': z.string(),
		'footer.terms': z.string(),
		'footer.privacy': z.string(),
		'services.discord': z.string(),
		'services.map': z.string(),
		'services.discordDesc': z.string(),
		'services.mapDesc': z.string(),
		'wiki.tagline': z.string(),
		'wiki.mainSite': z.string(),
		'landing.sections': z.string(),
		'landing.start': z.string(),
		'landing.magic': z.string(),
		'landing.guides': z.string(),
		'landing.firearms': z.string(),
	})
	.partial();

/*
 * Optional copy for the landing page's section cards (src/components/starlight/Hero.astro),
 * set in a locale's index.md frontmatter:
 *
 *   landing:
 *     sections:
 *       - folder: magic
 *         title: Magic and Pathways
 *         text: Potions, Sequences and the 22 Pathways.
 *
 * `folder` picks the card (general, magic, guides, firearms); a card that is not listed
 * keeps its translated name and the description of the page it leads to.
 */
const landing = z
	.object({
		sections: z
			.array(
				z.object({
					folder: z.string(),
					title: z.string().optional(),
					text: z.string().optional(),
					icon: z.string().optional(),
					link: z.string().optional(),
				}),
			)
			.optional(),
	})
	.optional();

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema({ extend: z.object({ landing }) }) }),
	i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema({ extend: uiStrings }) }),
};
