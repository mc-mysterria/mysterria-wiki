// @ts-check
import {defineConfig} from 'astro/config';
import {sidebar} from './src/lib/sidebar.mjs';
import {remarkLeadFigure} from './src/lib/remark-lead-figure.mjs';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';

export default defineConfig({
    output: 'static',
    image: {
        service: {
            entrypoint: 'astro/assets/services/sharp',
            config: {
                limitInputPixels: false,
            },
        },
    },
    site: 'https://wiki.mysterria.net',
    // a page's opening <Figure> loads first instead of lazily (src/lib/remark-lead-figure.mjs)
    markdown: {
        remarkPlugins: [remarkLeadFigure],
    },
    /*
     * Pages merged or removed in the Epoch II rewrite. A locale that still has its own copy of
     * the old page keeps serving it until that translation is redone.
     */
    redirects: {
        // Old wiki URLs Google still shows (Search Console, 2026-11-04): the /en/ prefix from
        // before English moved to the root, per-Pathway pages (now on the main site), old pages.
        '/en': '/',
        '/en/[...slug]': '/[...slug]',
        '/support/about': '/',
        '/en/support/about': '/',
        '/promoters/application': '/',
        '/guides/archive': '/',
        '/guides/silkroad': '/',
        '/uk/guides/archive': '/uk/',
        '/uk/guides/silkroad': '/uk/',
        '/pathways/abyss': 'https://www.mysterria.net/en/pathways/abyss',
        '/en/pathways/abyss': 'https://www.mysterria.net/en/pathways/abyss',
        '/pathways/chained': 'https://www.mysterria.net/en/pathways/chained',
        '/en/pathways/chained': 'https://www.mysterria.net/en/pathways/chained',
        '/pathways/darkness': 'https://www.mysterria.net/en/pathways/darkness',
        '/en/pathways/darkness': 'https://www.mysterria.net/en/pathways/darkness',
        '/pathways/death': 'https://www.mysterria.net/en/pathways/death',
        '/en/pathways/death': 'https://www.mysterria.net/en/pathways/death',
        '/pathways/demoness': 'https://www.mysterria.net/en/pathways/demoness',
        '/en/pathways/demoness': 'https://www.mysterria.net/en/pathways/demoness',
        '/pathways/door': 'https://www.mysterria.net/en/pathways/door',
        '/en/pathways/door': 'https://www.mysterria.net/en/pathways/door',
        '/pathways/emperor': 'https://www.mysterria.net/en/pathways/emperor',
        '/en/pathways/emperor': 'https://www.mysterria.net/en/pathways/emperor',
        '/pathways/error': 'https://www.mysterria.net/en/pathways/error',
        '/en/pathways/error': 'https://www.mysterria.net/en/pathways/error',
        '/pathways/fool': 'https://www.mysterria.net/en/pathways/fool',
        '/en/pathways/fool': 'https://www.mysterria.net/en/pathways/fool',
        '/pathways/fortune': 'https://www.mysterria.net/en/pathways/fortune',
        '/en/pathways/fortune': 'https://www.mysterria.net/en/pathways/fortune',
        '/pathways/giant': 'https://www.mysterria.net/en/pathways/giant',
        '/en/pathways/giant': 'https://www.mysterria.net/en/pathways/giant',
        '/pathways/hanged': 'https://www.mysterria.net/en/pathways/hanged',
        '/en/pathways/hanged': 'https://www.mysterria.net/en/pathways/hanged',
        '/pathways/hermit': 'https://www.mysterria.net/en/pathways/hermit',
        '/en/pathways/hermit': 'https://www.mysterria.net/en/pathways/hermit',
        '/pathways/justiciar': 'https://www.mysterria.net/en/pathways/justiciar',
        '/en/pathways/justiciar': 'https://www.mysterria.net/en/pathways/justiciar',
        '/pathways/moon': 'https://www.mysterria.net/en/pathways/moon',
        '/en/pathways/moon': 'https://www.mysterria.net/en/pathways/moon',
        '/pathways/mother': 'https://www.mysterria.net/en/pathways/mother',
        '/en/pathways/mother': 'https://www.mysterria.net/en/pathways/mother',
        '/pathways/paragon': 'https://www.mysterria.net/en/pathways/paragon',
        '/en/pathways/paragon': 'https://www.mysterria.net/en/pathways/paragon',
        '/pathways/priest': 'https://www.mysterria.net/en/pathways/priest',
        '/en/pathways/priest': 'https://www.mysterria.net/en/pathways/priest',
        '/pathways/sun': 'https://www.mysterria.net/en/pathways/sun',
        '/en/pathways/sun': 'https://www.mysterria.net/en/pathways/sun',
        '/pathways/tower': 'https://www.mysterria.net/en/pathways/tower',
        '/en/pathways/tower': 'https://www.mysterria.net/en/pathways/tower',
        '/pathways/tyrant': 'https://www.mysterria.net/en/pathways/tyrant',
        '/en/pathways/tyrant': 'https://www.mysterria.net/en/pathways/tyrant',
        '/pathways/visionary': 'https://www.mysterria.net/en/pathways/visionary',
        '/en/pathways/visionary': 'https://www.mysterria.net/en/pathways/visionary',
        '/pathways/aeon': 'https://www.mysterria.net/en/pathways/aeon',
        '/en/pathways/aeon': 'https://www.mysterria.net/en/pathways/aeon',
        '/pathways/chaos': 'https://www.mysterria.net/en/pathways/chaos',
        '/en/pathways/chaos': 'https://www.mysterria.net/en/pathways/chaos',
        '/pathways/chaosmist': 'https://www.mysterria.net/en/pathways/chaosmist',
        '/en/pathways/chaosmist': 'https://www.mysterria.net/en/pathways/chaosmist',
        '/pathways/condenser': 'https://www.mysterria.net/en/pathways/condenser',
        '/en/pathways/condenser': 'https://www.mysterria.net/en/pathways/condenser',
        '/pathways/devouring': 'https://www.mysterria.net/en/pathways/devouring',
        '/en/pathways/devouring': 'https://www.mysterria.net/en/pathways/devouring',
        '/pathways/edict': 'https://www.mysterria.net/en/pathways/edict',
        '/en/pathways/edict': 'https://www.mysterria.net/en/pathways/edict',
        '/pathways/everlasting': 'https://www.mysterria.net/en/pathways/everlasting',
        '/en/pathways/everlasting': 'https://www.mysterria.net/en/pathways/everlasting',
        '/pathways/patriarch': 'https://www.mysterria.net/en/pathways/patriarch',
        '/en/pathways/patriarch': 'https://www.mysterria.net/en/pathways/patriarch',
        '/pathways/secondlaw': 'https://www.mysterria.net/en/pathways/secondlaw',
        '/en/pathways/secondlaw': 'https://www.mysterria.net/en/pathways/secondlaw',
        '/pathways/sublunary': 'https://www.mysterria.net/en/pathways/sublunary',
        '/en/pathways/sublunary': 'https://www.mysterria.net/en/pathways/sublunary',
        '/guides/shards': '/guides/economy/#energy-shards',
        '/guides/daily': '/guides/emporium/#daily-rewards',
        '/guides/tperks': '/guides/towns/#town-perks',
        '/misc/creator-program': '/',
        '/uk/misc/creator-program': '/uk/',
        '/uk/guides/shards': '/uk/guides/economy/#energy-shards',
        '/uk/guides/daily': '/uk/guides/emporium/#daily-rewards',
        '/uk/guides/tperks': '/uk/guides/towns/#town-perks',
        '/ro/guides/shards': '/ro/guides/economy/#energy-shards',
        '/ro/guides/daily': '/ro/guides/emporium/#daily-rewards',
        '/ro/guides/tperks': '/ro/guides/towns/#town-perks',
        '/ro/misc/creator-program': '/ro/',
        '/de/guides/shards': '/de/guides/economy/#energy-shards',
        '/de/guides/daily': '/de/guides/emporium/#daily-rewards',
        '/de/guides/tperks': '/de/guides/towns/#town-perks',
        '/de/misc/creator-program': '/de/',
        '/es/guides/shards': '/es/guides/economy/#energy-shards',
        '/es/guides/daily': '/es/guides/emporium/#daily-rewards',
        '/es/guides/tperks': '/es/guides/towns/#town-perks',
        '/es/misc/creator-program': '/es/',
        '/fr/guides/shards': '/fr/guides/economy/#energy-shards',
        '/fr/guides/daily': '/fr/guides/emporium/#daily-rewards',
        '/fr/guides/tperks': '/fr/guides/towns/#town-perks',
        '/fr/misc/creator-program': '/fr/',
        '/zh-cn/guides/shards': '/zh-cn/guides/economy/#energy-shards',
        '/zh-cn/guides/daily': '/zh-cn/guides/emporium/#daily-rewards',
        '/zh-cn/guides/tperks': '/zh-cn/guides/towns/#town-perks',
        '/zh-cn/misc/creator-program': '/zh-cn/',
        '/zh-tw/guides/shards': '/zh-tw/guides/economy/#energy-shards',
        '/zh-tw/guides/daily': '/zh-tw/guides/emporium/#daily-rewards',
        '/zh-tw/guides/tperks': '/zh-tw/guides/towns/#town-perks',
        '/zh-tw/misc/creator-program': '/zh-tw/',
    },
    integrations: [
        // the main site's std components (src/components/std), rendered to HTML at build time: no client JS
        vue(),
        sitemap({
            // hreflang alternates in the sitemap too, the same eight as the pages' <link rel="alternate">
            i18n: {
                defaultLocale: 'en',
                locales: {
                    en: 'en', uk: 'uk', ro: 'ro', de: 'de', es: 'es', fr: 'fr', 'zh-tw': 'zh-TW', 'zh-cn': 'zh-CN',
                },
            },
        }),
        starlight({
            title: 'Mysterria Wiki',
            defaultLocale: 'root',
            /*
             * The same eight locales the main site serves, in the same picker
             * order, labelled with the same endonyms as its language selector
             * (see src/assets/sources/locales.json in mysteria-frontend) so a
             * reader crossing between the two sees one consistent list.
             *
             * A page missing from a locale falls back to the English page, with
             * Starlight's built-in "content is not available in your language yet"
             * notice, which it already ships translated for all eight - the same
             * behaviour the main site's ContentLanguageNotice provides. Adding a
             * translated page is just dropping the file into src/content/docs/<locale>/.
             *
             * The Chinese locale keys are lowercase because Astro lowercases
             * content-collection ids: src/content/docs/zh-CN/ is emitted at
             * /zh-cn/, which then no longer matches a 'zh-CN' key and silently
             * drops the locale. The i18n files stay zh-CN.json / zh-TW.json -
             * that collection is keyed by real file path, not by id.
             *
             * `lang` is pinned to zh-CN/zh-TW rather than the frontend's
             * zh-Hans/zh-Hant: Starlight resolves its own UI strings by looking
             * up translations/<lang>.json, and the script subtags have no file
             * there. The frontend needs the script subtags for hreflang; this
             * needs the file names.
             */
            locales: {
                root: {
                    label: 'English',
                    lang: 'en',
                },
                uk: {
                    label: 'Українська',
                },
                ro: {
                    label: 'Română',
                },
                de: {
                    label: 'Deutsch',
                },
                es: {
                    label: 'Español',
                },
                fr: {
                    label: 'Français',
                },
                'zh-tw': {
                    label: '繁體中文',
                    lang: 'zh-TW',
                },
                'zh-cn': {
                    label: '简体中文',
                    lang: 'zh-CN',
                },
            },
            /*
             * The main site's design system, then the wiki's mapping of Starlight onto it.
             * arcana.css and the two std sheets are copies (see their headers); wiki.css is ours.
             */
            customCss: [
                './src/styles/arcana.css',
                './src/components/std/std.css',
                './src/components/std/std-gas.css',
                './src/styles/wiki.css',
            ],
            // code blocks follow the main site's theme switch (<html data-theme="dark|parchment">)
            expressiveCode: {
                themes: ['github-dark', 'github-light'],
                useStarlightDarkModeSwitch: false,
                themeCssSelector: (theme) => (theme.type === 'dark' ? '[data-theme="dark"]' : '[data-theme="parchment"]'),
                styleOverrides: {
                    borderRadius: '10px',
                    borderColor: 'var(--arc-line)',
                    codeFontFamily: "ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace",
                    uiFontFamily: 'var(--arc-body)',
                    codeBackground: 'var(--arc-chip-bg)',
                    frames: {shadowColor: 'transparent'},
                },
            },
            description: 'Complete documentation for Mysterria Minecraft server inspired by Lord of the Mysteries',
            favicon: 'favicon.png',
            social: [
                {icon: 'discord', label: 'Discord', href: 'https://discord.gg/mysterria'}
            ],

            /*
             * The main site's chrome over Starlight's: its header, footer, theme switch and
             * language menu, the landing page, and the head's SEO additions. Starlight's
             * sidebar, table of contents and pagination stay its own (restyled in wiki.css). Search is the wiki's own (Search.astro).
             */
            components: {
                Head: './src/components/starlight/Head.astro',
                ThemeProvider: './src/components/starlight/ThemeProvider.astro',
                PageFrame: './src/components/starlight/PageFrame.astro',
                Header: './src/components/starlight/Header.astro',
                ThemeSelect: './src/components/starlight/ThemeSelect.astro',
                LanguageSelect: './src/components/starlight/LanguageSelect.astro',
                MobileMenuFooter: './src/components/starlight/MobileMenuFooter.astro',
                Hero: './src/components/starlight/Hero.astro',
                Search: './src/components/starlight/Search.astro',
            },

            sidebar,
        }),
    ],
});
