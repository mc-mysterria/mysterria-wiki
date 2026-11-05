/*
 * The wiki's sidebar, shared by astro.config.mjs (Starlight) and the search index
 * (src/pages/search/[lang].json.ts), so search results can name each page's section.
 */
/*
 * Nine small sections, so each one can be scanned at a glance. They follow a player's
 * road: start, walk a Pathway, keep body and mind intact, then the world, gear, money,
 * towns, churches and the late game. Every section is folded except the one holding the
 * page being read. Pages keep their folders and so their URLs, which already rank.
 */
export const sidebar = [
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
        collapsed: true,
        items: [
            'general/start',
            'general/world-and-safety',
            'general/commands',
            'guides/client-mod',
        ],
    },
    {
        label: 'Your Pathway',
        translations: {
            uk: 'Твій Шлях',
            ro: 'Calea ta',
            de: 'Dein Pfad',
            es: 'Tu Sendero',
            fr: 'Ta Voie',
            'zh-TW': '你的途徑',
            'zh-CN': '你的途径',
        },
        collapsed: true,
        items: [
            'magic/introduction',
            'magic/pathways',
            'magic/loot',
            'magic/brewing',
            'magic/acting',
            'magic/rituals',
            'magic/boons',
        ],
    },
    {
        label: 'Body and Mind',
        translations: {
            uk: 'Тіло й розум',
            ro: 'Trup și minte',
            de: 'Körper und Geist',
            es: 'Cuerpo y mente',
            fr: 'Corps et esprit',
            'zh-TW': '身體與心智',
            'zh-CN': '身体与心智',
        },
        collapsed: true,
        items: [
            'magic/spirituality',
            'magic/health',
            'magic/conditions',
            'magic/mutation',
            'magic/ordeals',
        ],
    },
    {
        label: 'Creatures and Events',
        translations: {
            uk: 'Істоти й події',
            ro: 'Creaturi și evenimente',
            de: 'Kreaturen und Ereignisse',
            es: 'Criaturas y eventos',
            fr: 'Créatures et événements',
            'zh-TW': '生物與事件',
            'zh-CN': '生物与事件',
        },
        collapsed: true,
        items: [
            'magic/creatures',
            'magic/wild-beyonders',
            'magic/crimson-moon',
            'guides/tides',
            'guides/bosses',
            'guides/dungeons',
            'guides/cosmos-incursions',
            'guides/outer-gods-anchors',
        ],
    },
    {
        label: 'Items and Gear',
        translations: {
            uk: 'Предмети й спорядження',
            ro: 'Obiecte și echipament',
            de: 'Gegenstände und Ausrüstung',
            es: 'Objetos y equipo',
            fr: 'Objets et équipement',
            'zh-TW': '物品與裝備',
            'zh-CN': '物品与装备',
        },
        collapsed: true,
        items: [
            'magic/sealed-artifacts',
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
        label: 'Money and Trade',
        translations: {
            uk: 'Гроші й торгівля',
            ro: 'Bani și comerț',
            de: 'Geld und Handel',
            es: 'Dinero y comercio',
            fr: 'Argent et commerce',
            'zh-TW': '金錢與交易',
            'zh-CN': '金钱与交易',
        },
        collapsed: true,
        items: [
            'guides/economy',
            'guides/emporium',
            'guides/agora',
            'guides/battle-pass',
            'guides/couriers',
        ],
    },
    {
        label: 'Towns and Factions',
        translations: {
            uk: 'Міста й фракції',
            ro: 'Orașe și facțiuni',
            de: 'Städte und Fraktionen',
            es: 'Ciudades y facciones',
            fr: 'Villes et factions',
            'zh-TW': '城鎮與派系',
            'zh-CN': '城镇与派系',
        },
        collapsed: true,
        items: [
            'guides/towns',
            'guides/nations-and-wars',
            'guides/orders',
        ],
    },
    {
        label: 'Churches',
        translations: {
            uk: 'Церкви',
            ro: 'Biserici',
            de: 'Kirchen',
            es: 'Iglesias',
            fr: 'Églises',
            'zh-TW': '教會',
            'zh-CN': '教会',
        },
        collapsed: true,
        items: [
            'magic/churches',
            'magic/church-management',
            'magic/church-perks',
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
        collapsed: true,
        items: [
            'magic/usurpation',
            'magic/uniqueness',
            'magic/honorific-names',
            'magic/sequence-zero',
        ],
    },
];
