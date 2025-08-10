// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
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
    site: 'https://docs.mysterria.net',
    integrations: [
        sitemap(),
        starlight({
            title: {
                en: 'Mysterria - Magic awaits in Minecraft',
                uk: 'Mysterria - Магія чекає в Minecraft',
            },
            defaultLocale: 'en',
            description: 'Complete documentation for Mysterria Minecraft server inspired by Lord of the Mysteries',
            favicon: 'favicon.png',
            head: [
                {
                    tag: 'meta',
                    attrs: {
                        property: 'og:image',
                        content: 'https://docs.mysterria.net/favicon.svg',
                    },
                },
                {
                    tag: 'meta',
                    attrs: {
                        property: 'og:type',
                        content: 'website',
                    },
                },
                {
                    tag: 'meta',
                    attrs: {
                        name: 'twitter:card',
                        content: 'summary_large_image',
                    },
                },
                {
                    tag: 'script',
                    attrs: {
                        src: '/sidebar-navigation.js',
                        defer: true,
                    },
                },
                {
                    tag: 'script',
                    attrs: {
                        src: '/page-loader.js',
                        defer: true,
                    },
                },
            ],
            components: {
                TwoColumnContent: './src/components/Footer.astro',
            },
            locales: {
                uk: {
                    label: 'Українська',
                    lang: 'uk',
                },
                en: {
                    label: 'English',
                    lang: 'en',
                },
            },
            logo: {
                src: './src/assets/favicon.png'
            },
            social: [
                {icon: 'discord', label: 'Discord', href: 'https://discord.gg/mysterria'}
            ],
            customCss: [
                './src/fonts/font-face.css',
                './src/styles/custom.css',
            ],
        }),
    ],
});
