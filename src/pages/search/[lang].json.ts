/*
 * The quick search index, one small JSON file per language (/search/en.json, /search/uk.json...).
 *
 * It holds only what people type when they look for a page: each page's title, its section,
 * its description, its headings and the terms it puts in bold. The search box
 * (src/components/starlight/Search.astro) loads it on first use and ranks title matches
 * first, so "acting" opens the Acting page instead of every page that mentions acting.
 * Full text stays with Pagefind, as a second list under the quick results.
 *
 * A page without a translation falls back to the English entry, exactly as Starlight serves it.
 */
import type {APIRoute, GetStaticPaths} from 'astro';
import {getCollection, render, type CollectionEntry} from 'astro:content';
import {sidebar} from '../../lib/sidebar.mjs';

/** URL prefix of each language (English is the root) and its key in the sidebar's translations. */
const LANGS: Record<string, {prefix: string; label: string}> = {
	en: {prefix: '', label: 'en'},
	uk: {prefix: 'uk', label: 'uk'},
	ro: {prefix: 'ro', label: 'ro'},
	de: {prefix: 'de', label: 'de'},
	es: {prefix: 'es', label: 'es'},
	fr: {prefix: 'fr', label: 'fr'},
	'zh-tw': {prefix: 'zh-tw', label: 'zh-TW'},
	'zh-cn': {prefix: 'zh-cn', label: 'zh-CN'},
};

type Group = {label: string; translations?: Record<string, string>; items: (string | Group)[]};

/** Every page id in sidebar order, with the top-level section it sits in. */
function pagesOf(groups: Group[]): {id: string; section: Group}[] {
	const walk = (items: (string | Group)[], section: Group): {id: string; section: Group}[] =>
		items.flatMap(item => (typeof item === 'string' ? [{id: item, section}] : walk(item.items, section)));
	return groups.flatMap(group => walk(group.items, group));
}

const boldTerms = (body: string | undefined) =>
	[...new Set([...(body ?? '').matchAll(/\*\*([^*\n]{2,60})\*\*/g)].map(m => m[1].trim()))].slice(0, 40);

export const getStaticPaths: GetStaticPaths = () => Object.keys(LANGS).map(lang => ({params: {lang}}));

export const GET: APIRoute = async ({params}) => {
	const lang = LANGS[params.lang as string];
	const docs = new Map((await getCollection('docs')).map(entry => [entry.id, entry] as [string, CollectionEntry<'docs'>]));

	const pages = [];
	for (const {id, section} of pagesOf(sidebar as Group[])) {
		const entry = (lang.prefix && docs.get(`${lang.prefix}/${id}`)) || docs.get(id);
		if (!entry) continue;
		const {headings} = await render(entry);
		pages.push({
			t: entry.data.title,
			u: `/${lang.prefix ? `${lang.prefix}/` : ''}${id}/`,
			s: section.translations?.[lang.label] ?? section.label,
			d: entry.data.description ?? '',
			h: headings.filter(h => h.depth === 2 || h.depth === 3).map(h => [h.text, h.slug]),
			k: boldTerms(entry.body),
		});
	}

	return new Response(JSON.stringify(pages), {headers: {'Content-Type': 'application/json; charset=utf-8'}});
};
