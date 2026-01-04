// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import pagePlugin from "@pelagornis/page";

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
    adapter: vercel({
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
            locales: {
                root: {
                    label: 'English',
                    lang: 'en',
                },
                uk: {
                    label: 'Ukrainian',
                },
            },
            plugins: [pagePlugin({
                navigation: [
                    { href: "/general/start/", label: "Quick Start" },
                    { href: "/magic/introduction/", label: "Introduction to Magic" },
                    { href: "/guides/towns/", label: "Guides" }
                ],
            })],
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
                    },
                    autogenerate: {directory: 'general'},
                },
                {
                    label: 'Magic',
                    translations: {
                        uk: 'Магія',
                    },
                    autogenerate: {directory: 'magic'},
                },
                {
                    label: 'Guides',
                    translations: {
                        uk: 'Посібники',
                    },
                    autogenerate: {directory: 'guides'},
                },
                {
                    label: 'Firearms',
                    translations: {
                        uk: 'Вогнепал',
                    },
                    autogenerate: {directory: 'firearms'},
                }
            ],
        }),
    ],
});
