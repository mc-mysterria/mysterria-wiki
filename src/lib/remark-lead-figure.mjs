/*
 * The page's lead image loads first. A <Figure> that opens the page (among its first few blocks,
 * before the first heading) is the largest thing on screen when the page opens, so it gets
 * `eager` (loading="eager" fetchpriority="high" in Figure.astro) instead of loading lazily.
 * A page can still set `eager` by hand; this only adds it where it is missing.
 */
const LEAD_BLOCKS = 4;

const isFigure = node => (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') && node.name === 'Figure';

/** The Figure in a block: the block itself, or one standing alone in a paragraph. */
const figureIn = node => {
	if (isFigure(node)) return node;
	if (node.type === 'paragraph') {
		const parts = node.children.filter(child => !(child.type === 'text' && !child.value.trim()));
		if (parts.length === 1 && isFigure(parts[0])) return parts[0];
	}
	return undefined;
};

export function remarkLeadFigure() {
	return tree => {
		let blocks = 0;
		for (const node of tree.children) {
			// imports, exports and frontmatter are not content
			if (node.type === 'mdxjsEsm' || node.type === 'yaml' || node.type === 'toml') continue;
			if (node.type === 'heading' || ++blocks > LEAD_BLOCKS) return;
			const figure = figureIn(node);
			if (!figure) continue;
			if (!figure.attributes.some(attr => attr.type === 'mdxJsxAttribute' && attr.name === 'eager')) {
				figure.attributes.push({type: 'mdxJsxAttribute', name: 'eager', value: null});
			}
			return;
		}
	};
}
