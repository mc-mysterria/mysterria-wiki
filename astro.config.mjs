// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import starlightThemeGalaxy from 'starlight-theme-galaxy'

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
    integrations: [
        sitemap(),
        starlight({
            title: 'Wiki',
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
            plugins: [starlightThemeGalaxy()],
            customCss: ['./src/styles/custom.css'],
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
            logo: {
                src: './src/assets/favicon.png'
            },
            social: [
                {icon: 'discord', label: 'Discord', href: 'https://discord.gg/mysterria'}
            ],

            components: {
                Footer: './src/components/Footer.astro',
            },

            sidebar: [
                {
                    label: 'General',
                    translations: {
                        uk: 'Загальне',
                        ro: 'General',
                        de: 'Allgemein',
                        es: 'General',
                        fr: 'Général',
                        'zh-TW': '一般',
                        'zh-CN': '通用',
                    },
                    autogenerate: {directory: 'general'},
                },
                {
                    label: 'Magic',
                    translations: {
                        uk: 'Магія',
                        ro: 'Magie',
                        de: 'Magie',
                        es: 'Magia',
                        fr: 'Magie',
                        'zh-TW': '魔法',
                        'zh-CN': '魔法',
                    },
                    autogenerate: {directory: 'magic'},
                },
                {
                    label: 'Guides',
                    translations: {
                        uk: 'Посібники',
                        ro: 'Ghiduri',
                        de: 'Leitfäden',
                        es: 'Guías',
                        fr: 'Guides',
                        'zh-TW': '指南',
                        'zh-CN': '指南',
                    },
                    autogenerate: {directory: 'guides'},
                },
                {
                    label: 'Firearms',
                    translations: {
                        uk: 'Вогнепал',
                        ro: 'Arme de foc',
                        de: 'Feuerwaffen',
                        es: 'Armas de fuego',
                        fr: 'Armes à feu',
                        'zh-TW': '槍械',
                        'zh-CN': '枪械',
                    },
                    autogenerate: {directory: 'firearms'},
                },
                {
                    label: 'Misc',
                    translations: {
                        uk: 'Інше',
                        ro: 'Diverse',
                        de: 'Verschiedenes',
                        es: 'Misceláneo',
                        fr: 'Divers',
                        'zh-TW': '其他',
                        'zh-CN': '其他',
                    },
                    autogenerate: {directory: 'misc'},
                }
            ],
        }),
    ],
});
