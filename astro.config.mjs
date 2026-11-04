// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';
import rehypeImageSizes from './src/lib/rehype-image-sizes.mjs';

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
    /*
     * DOCKER_BUILD=1 drops the Vercel adapter so `astro build` emits a plain
     * static dist/ for the self-hosted container. Left unset the adapter still
     * applies, so the same source keeps building on Vercel - which is what lets
     * the two run side by side while DNS moves across.
     */
    adapter: process.env.DOCKER_BUILD
        ? undefined
        : vercel({
            webAnalytics: {
                enabled: true,
            },
            maxDuration: 8,
        }),
    site: 'https://wiki.mysterria.net',
    /*
     * Pages merged or removed in the Epoch II rewrite. A locale that still has its own copy of
     * the old page keeps serving it until that translation is redone.
     */
    redirects: {
        '/guides/shards': '/guides/economy/#energy-shards',
        '/guides/daily': '/guides/emporium/#daily-rewards',
        '/guides/tperks': '/guides/towns/#town-perks',
        '/misc/creator-program': '/',
        '/uk/misc/creator-program': '/uk/',
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
    markdown: {
        // remote images get their width and height, so they keep their room while loading
        rehypePlugins: [rehypeImageSizes],
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
             * Only English and Ukrainian have translated pages today. For every
             * other locale Starlight falls back to the English page and shows
             * its built-in "content is not available in your language yet"
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
            // plugins: [pagePlugin({
            //     navigation: [
            //         { href: "/general/start/", label: "Quick Start" },
            //         { href: "/magic/introduction/", label: "Introduction to Magic" },
            //         { href: "/guides/towns/", label: "Guides" },
            //         { href: "/misc/creator-program/", label: "Content Creator Program" }
            //     ],
            // })],
            description: 'Complete documentation for Mysterria Minecraft server inspired by Lord of the Mysteries',
            favicon: 'favicon.png',
            social: [
                {icon: 'discord', label: 'Discord', href: 'https://discord.gg/mysterria'}
            ],

            /*
             * The main site's chrome over Starlight's: its header, footer, theme switch and
             * language menu, the landing page, and the head's SEO additions. Starlight's
             * sidebar, search, table of contents and pagination stay its own (restyled in wiki.css).
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
            },

            /*
             * Seven sections in the order a new player needs them, then the late game
             * (.review/content-audit.md, 5b). Pages keep their folders and so their URLs, which
             * already rank; the sections are set here rather than by folder.
             */
            sidebar: [
                {
                    label: 'Start here',
                    translations: {
                        uk: 'Почни тут',
                        ro: 'Începe aici',
                        de: 'Erste Schritte',
                        es: 'Empieza aquí',
                        fr: 'Bien commencer',
                        'zh-TW': '新手入門',
                        'zh-CN': '新手入门',
                    },
                    items: [
                        'general/start',
                        'general/world-and-safety',
                        'general/commands',
                        'guides/client-mod',
                    ],
                },
                {
                    label: 'Becoming a Beyonder',
                    translations: {
                        uk: 'Як стати Потойбічним',
                        ro: 'Cum devii Beyonder',
                        de: 'Beyonder werden',
                        es: 'Convertirse en Trascendente',
                        fr: 'Devenir Beyonder',
                        'zh-TW': '成為非凡者',
                        'zh-CN': '成为非凡者',
                    },
                    items: [
                        'magic/introduction',
                        'magic/pathways',
                        'magic/brewing',
                        'magic/loot',
                        'magic/acting',
                        'magic/rituals',
                        'magic/spirituality',
                        'magic/health',
                        'magic/conditions',
                        'magic/mutation',
                        'magic/ordeals',
                    ],
                },
                {
                    label: 'The World',
                    translations: {
                        uk: 'Світ',
                        ro: 'Lumea',
                        de: 'Die Welt',
                        es: 'El mundo',
                        fr: 'Le monde',
                        'zh-TW': '世界',
                        'zh-CN': '世界',
                    },
                    items: [
                        'magic/creatures',
                        'magic/crimson-moon',
                        'magic/wild-beyonders',
                        'guides/tides',
                        'guides/bosses',
                        'guides/dungeons',
                        'guides/cosmos-incursions',
                        'guides/outer-gods-anchors',
                    ],
                },
                {
                    label: 'Items and Power',
                    translations: {
                        uk: 'Предмети й сила',
                        ro: 'Obiecte și putere',
                        de: 'Gegenstände und Macht',
                        es: 'Objetos y poder',
                        fr: 'Objets et puissance',
                        'zh-TW': '物品與力量',
                        'zh-CN': '物品与力量',
                    },
                    items: [
                        'magic/sealed-artifacts',
                        'magic/boons',
                        {
                            label: 'Firearms',
                            translations: {
                                uk: 'Вогнепальна зброя',
                                ro: 'Arme de foc',
                                de: 'Feuerwaffen',
                                es: 'Armas de fuego',
                                fr: 'Armes à feu',
                                'zh-TW': '槍械',
                                'zh-CN': '枪械',
                            },
                            collapsed: true,
                            items: ['firearms', 'firearms/crafting', 'firearms/ammunition', 'firearms/kleins-repeater', 'firearms/deathknell-revolver', 'firearms/steam-rifle'],
                        },
                        'guides/beverages',
                        'guides/special-items',
                    ],
                },
                {
                    label: 'Economy',
                    translations: {
                        uk: 'Економіка',
                        ro: 'Economie',
                        de: 'Wirtschaft',
                        es: 'Economía',
                        fr: 'Économie',
                        'zh-TW': '經濟',
                        'zh-CN': '经济',
                    },
                    items: [
                        'guides/economy',
                        'guides/emporium',
                        'guides/agora',
                        'guides/battle-pass',
                    ],
                },
                {
                    label: 'Towns and Society',
                    translations: {
                        uk: 'Міста й спільнота',
                        ro: 'Orașe și societate',
                        de: 'Städte und Gesellschaft',
                        es: 'Ciudades y sociedad',
                        fr: 'Villes et société',
                        'zh-TW': '城鎮與社會',
                        'zh-CN': '城镇与社会',
                    },
                    items: [
                        'guides/towns',
                        'guides/nations-and-wars',
                        'guides/orders',
                        'guides/couriers',
                    ],
                },
                {
                    label: 'High Sequences',
                    translations: {
                        uk: 'Високі Послідовності',
                        ro: 'Secvențe înalte',
                        de: 'Hohe Sequenzen',
                        es: 'Secuencias altas',
                        fr: 'Hautes Séquences',
                        'zh-TW': '高序列',
                        'zh-CN': '高序列',
                    },
                    items: [
                        'magic/usurpation',
                        'magic/uniqueness',
                        'magic/honorific-names',
                        'magic/churches',
                        'magic/church-management',
                        'magic/church-perks',
                        'magic/sequence-zero',
                    ],
                },
            ],
        }),
    ],
});
