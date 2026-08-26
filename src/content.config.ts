import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { z } from 'astro/zod';

/*
 * The `i18n` collection carries UI strings that are not part of a page's
 * content. Starlight ships its own chrome (search, "On this page", the
 * untranslated-content notice) translated for every locale we register, so the
 * only thing that needs files here is the custom footer in
 * src/components/Footer.astro - it used to hold hardcoded English, which meant
 * even the Ukrainian pages had an English footer.
 *
 * Keys mirror the wording of the main site (mysteria-frontend src/locales/*.json)
 * so the two properties read as one product.
 */
const footerStrings = z
	.object({
		'footer.tagline': z.string(),
		'footer.description': z.string(),
		'footer.headingServer': z.string(),
		'footer.headingResources': z.string(),
		'footer.headingCommunity': z.string(),
		'footer.linkHomepage': z.string(),
		'footer.linkPlayStart': z.string(),
		'footer.linkDocs': z.string(),
		'footer.linkPromoters': z.string(),
		'footer.linkShop': z.string(),
		'footer.linkDiscordServer': z.string(),
		'footer.linkHome': z.string(),
		'footer.linkPlay': z.string(),
		'footer.rights': z.string(),
		'footer.mojang': z.string(),
	})
	.partial();

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema({ extend: footerStrings }) }),
};
