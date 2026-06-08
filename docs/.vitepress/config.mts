import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NEKO_VOID",
  description: "A open source eco-system",
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/logo-custom.svg' }],
    ['meta', { name: 'theme-color', content: '#6ba87a' }],
    ['meta', { name: 'author', content: 'Neko Void' }],
    ['meta', { name: 'keywords', content: 'Neko Void, Open Source, Development, Launcher, Minecraft, Community, Projects' }],
    ['meta', { name: 'description', content: 'A open source eco-system providing tools and software like Neko Void.' }],
    
    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Neko Void' }],
    ['meta', { property: 'og:description', content: 'A open source eco-system providing tools and software like Neko Void.' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:site_name', content: 'Neko Void' }],

    // Twitter
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Neko Void' }],
    ['meta', { name: 'twitter:description', content: 'A open source eco-system providing tools and software like Neko Void.' }],
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guides', link: '/guides/' },
          { text: 'Projects', link: '/dev/projects/' },
          { text: 'Download', link: '/download/' }
        ],
        sidebar: [
          {
            text: 'Getting Started',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/guides/' },
              { text: 'Getting Started', link: '/guides/getting-started/' },
              {
                text: 'How to report issues',
                collapsed: true,
                items: [
                  { text: 'Common Issues', link: '/guides/troubleshooting/common-issues' },
                ]
              }
            ]
          },
          {
            text: 'Development',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/dev/' },
              {
                text: 'Projects',
                collapsed: true,
                items: [
                  { text: 'Overview', link: '/dev/projects/' },
                  {
                    text: 'Neko Void OS',
                    collapsed: true,
                    items: [
                      { text: 'Overview', link: '/dev/projects/nekovoid-os-builder/' },
                      { text: 'Build ISO', link: '/dev/projects/nekovoid-os-builder/build' }
                    ]
                  },
                  {
                    text: 'Kasha Installer',
                    collapsed: true,
                    items: [
                      { text: 'Overview', link: '/dev/projects/kasha-installer/' },
                      { text: 'Architecture', link: '/dev/projects/kasha-installer/architecture' },
                      { text: 'Build', link: '/dev/projects/kasha-installer/build' }
                    ]
                  },
                  {
                    text: 'Kore Package Manager',
                    collapsed: true,
                    items: [
                      { text: 'Overview', link: '/dev/projects/kore-package-manager/' },
                      { text: 'Usage', link: '/dev/projects/kore-package-manager/usage' },
                      { text: 'Architecture', link: '/dev/projects/kore-package-manager/architecture' }
                    ]
                  }
                ]
              }
            ]
          },
          {
            text: 'Documentation',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/docs/' },
              {
                text: 'Concepts',
                collapsed: true,
                items: [
                  { text: 'Overview', link: '/docs/concepts/' },
                  { text: 'runit (Init System)', link: '/docs/concepts/runit' },
                ]
              },
              { text: 'Configuration', link: '/docs/configuration/' }
            ]
          },
          {
            text: 'About',
            collapsed: false,
            items: [
              { text: 'Introduction', link: '/about/' },
              { text: 'Team', link: '/about/team' },
              { text: 'Mission', link: '/about/mission' },
              { text: 'Community Values', link: '/about/community-values' },
              { text: 'License', link: '/about/license' }
            ]
          }
        ]
      }
    },
    es: {
      label: 'Español',
      lang: 'es',
      link: '/es/',
      themeConfig: {
        outlineTitle: 'En esta página',
        docFooter: {
          prev: 'Página anterior',
          next: 'Página siguiente'
        },
        returnToTopLabel: 'Volver arriba',
        sidebarMenuLabel: 'Menú',
        darkModeSwitchLabel: 'Apariencia',
        nav: [
          { text: 'Inicio', link: '/es/' },
          { text: 'Guías', link: '/es/guides/' },
          { text: 'Proyectos', link: '/es/dev/projects/' },
          { text: 'Descargar', link: '/es/download/' }
        ],
        sidebar: [
          {
            text: 'Comenzando',
            collapsed: false,
            items: [
              { text: 'Resumen', link: '/es/guides/' },
              { text: 'Comenzando', link: '/es/guides/getting-started/' },
              {
                text: 'Cómo reportar problemas',
                collapsed: true,
                items: [
                  { text: 'Problemas Comunes', link: '/es/guides/troubleshooting/common-issues' },
                ]
              }
            ]
          },
          {
            text: 'Desarrollo',
            collapsed: false,
            items: [
              { text: 'Resumen', link: '/es/dev/' },
              {
                text: 'Proyectos',
                collapsed: true,
                items: [
                  { text: 'Resumen', link: '/es/dev/projects/' },
                  {
                    text: 'Neko Void OS',
                    collapsed: true,
                    items: [
                      { text: 'Resumen', link: '/es/dev/projects/nekovoid-os-builder/' },
                      { text: 'Compilación ISO', link: '/es/dev/projects/nekovoid-os-builder/build' }
                    ]
                  },
                  {
                    text: 'Instalador Kasha',
                    collapsed: true,
                    items: [
                      { text: 'Resumen', link: '/es/dev/projects/kasha-installer/' },
                      { text: 'Arquitectura', link: '/es/dev/projects/kasha-installer/architecture' },
                      { text: 'Compilación', link: '/es/dev/projects/kasha-installer/build' }
                    ]
                  },
                  {
                    text: 'Kore Package Manager',
                    collapsed: true,
                    items: [
                      { text: 'Resumen', link: '/es/dev/projects/kore-package-manager/' },
                      { text: 'Uso', link: '/es/dev/projects/kore-package-manager/usage' },
                      { text: 'Arquitectura', link: '/es/dev/projects/kore-package-manager/architecture' }
                    ]
                  }
                ]
              }
            ]
          },
          {
            text: 'Documentación',
            collapsed: false,
            items: [
              { text: 'Resumen', link: '/es/docs/' },
              {
                text: 'Conceptos',
                collapsed: true,
                items: [
                  { text: 'Resumen', link: '/es/docs/concepts/' },
                  { text: 'runit (Sistema Init)', link: '/es/docs/concepts/runit' },
                ]
              },
              { text: 'Configuración', link: '/es/docs/configuration/' }
            ]
          },
          {
            text: 'Acerca de',
            collapsed: false,
            items: [
              { text: 'Introducción', link: '/es/about/' },
              { text: 'Equipo', link: '/es/about/team' },
              { text: 'Misión', link: '/es/about/mission' },
              { text: 'Valores de la Comunidad', link: '/es/about/community-values' },
              { text: 'Licencia', link: '/es/about/license' }
            ]
          }
        ],
        footer: {
          message: 'Lanzado bajo la Licencia BSD-3-Clause.',
          copyright: 'Copyright © 2025-present Neko Void'
        },
        socialLinks: [
          { icon: 'github', link: 'https://codeberg.org/javiercplus/Neko-Void' },
          { icon: 'discord', link: 'https://discord.gg/meVYHCSWQX' },
          { icon: { svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>' }, link: 'https://fluxer.gg/OlQ0bSc8' }
        ]
      }
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    socialLinks: [
      { icon: 'github', link: 'https://codeberg.org/javiercplus/Neko-Void' },
      { icon: 'discord', link: 'https://discord.gg/meVYHCSWQX' },
      { icon: { svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>' }, link: 'https://fluxer.gg/OlQ0bSc8' }
    ],

    footer: {
      message: 'Released under the BSD-3-Clause License.',
      copyright: 'Copyright © 2025-present Neko Void'
    }
  }
})
