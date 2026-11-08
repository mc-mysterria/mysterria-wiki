/*
 * The components MDX pages can use. Import what you need:
 *
 *   import {Card, CardGrid, Notice, SequenceTable, Figure} from '~/components/mdx';
 *
 * (or with a relative path). Card is the main site's StdCard itself (src/components/std);
 * the rest are the wiki's, drawn in the same style. All render to plain HTML: no
 * JavaScript reaches the page. See ../README.md.
 */
export {default as Card} from '../std/StdCard.vue';
export {default as CardGrid} from './CardGrid.astro';
export {default as Notice} from './Notice.astro';
export {default as SequenceTable} from './SequenceTable.astro';
export {default as Figure} from './Figure.astro';
export {default as SectionIndex} from './SectionIndex.astro';
