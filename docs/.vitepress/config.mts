import { defineConfig } from 'vitepress'

function normalizeSearchTerm(term: string) {
  return term
    .toLocaleLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

function searchTagsForPath(id: string) {
  const path = normalizeSearchTerm(id)
  const tags = new Set(['nekovoid', 'neko-void', 'linux', 'wiki'])

  const add = (...values: string[]) => values.forEach((value) => tags.add(value))

  if (path.includes('/guides/')) add('guias', 'tutorial', 'usuario', 'configuracion')
  if (path.includes('/installation/')) add('instalacion', 'iso', 'live', 'usb', 'arranque', 'hardware')
  if (path.includes('/troubleshooting/')) add('problemas', 'errores', 'solucion', 'diagnostico')
  if (path.includes('/dev/')) add('desarrollo', 'codigo', 'compilar', 'repositorio')
  if (path.includes('/projects/')) add('proyectos', 'software', 'herramientas')
  if (path.includes('nekovoid-os-builder')) add('iso', 'builder', 'live', 'bash', 'construccion')
  if (path.includes('kasha-installer')) add('kasha', 'instalador', 'gtk', 'particionado', 'grub', 'luks')
  if (path.includes('kore-package-manager')) add('kore', 'kpm', 'paquetes', 'rust', 'appimage', 'tarball')
  if (path.includes('/concepts/runit')) add('runit', 'init', 'pid1', 'servicios', 'daemon', 'sv', 'runsv')
  if (path.includes('/concepts/musl')) add('musl', 'libc', 'glibc', 'compatibilidad')
  if (path.includes('/concepts/')) add('conceptos', 'arquitectura', 'sistema')
  if (path.includes('/configuration/')) add('configuracion', 'ajustes', 'opciones')
  if (path.includes('/download/')) add('descargar', 'iso', 'imagen', 'instalacion')
  if (path.includes('/contributing/')) add('colaborar', 'contribuir', 'documentacion', 'desarrollo')

  return [...tags].join(' ')
}

function createLocalSearch(language: 'en' | 'es') {
  const spanish = language === 'es'

  return {
    provider: 'local' as const,
    options: {
      detailedView: true,
      translations: {
        button: {
          buttonText: spanish ? 'Buscar' : 'Search',
          buttonAriaLabel: spanish ? 'Buscar en la wiki' : 'Search the wiki'
        },
        modal: {
          displayDetails: spanish ? 'Mostrar detalles' : 'Display details',
          resetButtonTitle: spanish ? 'Limpiar búsqueda' : 'Reset search',
          backButtonTitle: spanish ? 'Cerrar búsqueda' : 'Close search',
          noResultsText: spanish ? 'Sin resultados para' : 'No results for'
        }
      },
      _render: (src: string, env: { relativePath?: string }, md: { render: (source: string, environment: unknown) => string }) => {
        const html = md.render(src, env)
        const tags = searchTagsForPath(env.relativePath ?? '')
        return html.replace('</h1>', `</h1><p>${tags}</p>`)
      },
      miniSearch: {
        searchOptions: {
          prefix: true,
          fuzzy: 0.2,
          boost: { title: 6, titles: 3, text: 1 }
        }
      }
    }
  }
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NEKO_VOID",
  description: "A open source eco-system",
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/logo-custom.svg' }],
    ['meta', { name: 'theme-color', content: '#8da383' }],
    ['meta', { name: 'author', content: 'Neko Void' }],
    ['meta', { name: 'keywords', content: 'Neko Void, Open Source, Development, Launcher, Minecraft, Community, Projects' }],
    ['meta', { name: 'darkreader-lock' }],
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
        search: createLocalSearch('en'),
        outline: [2, 4],
        outlineTitle: 'Contents',
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
              { text: 'Download', link: '/download/' },
              {
                text: 'Installation',
                collapsed: true,
                items: [
                  { text: 'Overview', link: '/guides/installation/' },
                  { text: 'System Requirements', link: '/guides/installation/requirements' },
                  { text: 'Installation Media', link: '/guides/installation/installation-media' },
                  { text: 'Booting Live Mode', link: '/guides/installation/booting' },
                  { text: 'Installing Neko Void', link: '/guides/installation/installing' }
                ]
              },
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
                  { text: 'Project overview', link: '/dev/projects/' },
                  { text: 'Neko Void OS', link: '/dev/projects/nekovoid-os-builder/' },
                  { text: 'Kasha Installer', link: '/dev/projects/kasha-installer/' },
                  { text: 'Kore Package Manager', link: '/dev/projects/kore-package-manager/' }
                ]
              },
              {
                text: 'Contributing',
                collapsed: true,
                items: [
                  { text: 'Overview', link: '/dev/contributing/' },
                  { text: 'How to contribute', link: '/dev/contributing/how-to-contribute' },
                  { text: 'Style guide', link: '/dev/contributing/style-guide' }
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
                  { text: 'musl', link: '/docs/concepts/musl' }
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
        search: createLocalSearch('es'),
        outline: [2, 4],
        outlineTitle: 'Contenido',
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
              { text: 'Descargar', link: '/es/download/' },
              {
                text: 'Instalación',
                collapsed: true,
                items: [
                  { text: 'Resumen', link: '/es/guides/installation/' },
                  { text: 'Requisitos Neko Void', link: '/es/guides/installation/requirements' },
                  { text: 'Creando un medio de instalación', link: '/es/guides/installation/installation-media' },
                  { text: 'Booteando Neko Void', link: '/es/guides/installation/booting' },
                  { text: 'Instalando Neko Void', link: '/es/guides/installation/installing' }
                ]
              },
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
                  { text: 'Resumen de proyectos', link: '/es/dev/projects/' },
                  { text: 'Neko Void OS', link: '/es/dev/projects/nekovoid-os-builder/' },
                  { text: 'Instalador Kasha', link: '/es/dev/projects/kasha-installer/' },
                  { text: 'Kore Package Manager', link: '/es/dev/projects/kore-package-manager/' }
                ]
              },
              {
                text: 'Colaborar',
                collapsed: true,
                items: [
                  { text: 'Resumen', link: '/es/dev/contributing/' },
                  { text: 'Cómo contribuir', link: '/es/dev/contributing/how-to-contribute' },
                  { text: 'Guía de estilo', link: '/es/dev/contributing/style-guide' }
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
                  { text: 'runit (Sistema Init)', link: '/es/docs/concepts/runit' },
                  { text: 'musl', link: '/es/docs/concepts/musl' }
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
          { icon: { svg: '<svg width="24" height="24" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M256 0C397.385 0 512 114.615 512 256C512 397.385 397.385 512 256 512C114.615 512 0 397.385 0 256C0 114.615 114.615 0 256 0ZM187.53 266.057C171.987 266.057 157.206 269.562 143.187 276.571C129.321 283.581 118.044 294.781 109.359 310.171C103.743 320.3 100.041 332.574 98.2529 346.993C96.5986 360.334 107.829 371.2 121.271 371.2C135.049 371.2 145.336 359.626 148.673 346.259C150.564 338.68 153.612 332.67 157.815 328.229C165.891 319.695 176.101 315.429 188.444 315.429C196.673 315.429 204.216 317.486 211.073 321.6C217.93 325.562 226.844 332.343 237.815 341.943C254.577 356.724 269.359 367.467 282.159 374.171C294.959 380.724 309.13 384 324.673 384C340.216 384 354.997 380.495 369.016 373.486C383.035 366.476 394.387 355.276 403.073 339.886C408.811 329.718 412.521 317.389 414.202 302.899C415.745 289.597 404.498 278.857 391.106 278.857C377.243 278.858 366.904 290.561 363.218 303.927C361.421 310.442 358.706 315.952 355.073 320.457C347.454 329.905 337.016 334.629 323.759 334.629C315.53 334.629 308.063 332.647 301.359 328.686C294.806 324.571 285.816 317.714 274.387 308.114C257.473 293.943 242.615 283.429 229.815 276.571C217.168 269.562 203.073 266.057 187.53 266.057ZM187.53 128C171.987 128 157.206 131.505 143.187 138.514C129.321 145.524 118.044 156.724 109.359 172.114C103.743 182.243 100.041 194.517 98.2529 208.935C96.5985 222.276 107.829 233.142 121.271 233.143C135.049 233.143 145.336 221.569 148.673 208.202C150.564 200.623 153.612 194.613 157.815 190.171C165.891 181.638 176.101 177.371 188.444 177.371C196.673 177.371 204.216 179.429 211.073 183.543C217.93 187.505 226.844 194.286 237.815 203.886C254.577 218.667 269.359 229.41 282.159 236.114C294.959 242.667 309.13 245.943 324.673 245.943C340.216 245.943 354.997 242.438 369.016 235.429C383.035 228.419 394.387 217.219 403.073 201.829C408.811 191.661 412.521 179.332 414.202 164.842C415.745 151.539 404.498 140.8 391.106 140.8C377.243 140.8 366.904 152.504 363.218 165.87C361.421 172.385 358.706 177.895 355.073 182.4C347.454 191.848 337.016 196.571 323.759 196.571C315.53 196.571 308.063 194.59 301.359 190.629C294.806 186.514 285.816 179.657 274.387 170.057C257.473 155.886 242.615 145.371 229.815 138.514C217.168 131.505 203.073 128 187.53 128Z"/></svg>' }, link: 'https://fluxer.gg/OlQ0bSc8' }
        ]
      }
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    search: createLocalSearch('en'),

    socialLinks: [
      { icon: 'github', link: 'https://codeberg.org/javiercplus/Neko-Void' },
      { icon: 'discord', link: 'https://discord.gg/meVYHCSWQX' },
      { icon: { svg: '<svg width="24" height="24" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M256 0C397.385 0 512 114.615 512 256C512 397.385 397.385 512 256 512C114.615 512 0 397.385 0 256C0 114.615 114.615 0 256 0ZM187.53 266.057C171.987 266.057 157.206 269.562 143.187 276.571C129.321 283.581 118.044 294.781 109.359 310.171C103.743 320.3 100.041 332.574 98.2529 346.993C96.5986 360.334 107.829 371.2 121.271 371.2C135.049 371.2 145.336 359.626 148.673 346.259C150.564 338.68 153.612 332.67 157.815 328.229C165.891 319.695 176.101 315.429 188.444 315.429C196.673 315.429 204.216 317.486 211.073 321.6C217.93 325.562 226.844 332.343 237.815 341.943C254.577 356.724 269.359 367.467 282.159 374.171C294.959 380.724 309.13 384 324.673 384C340.216 384 354.997 380.495 369.016 373.486C383.035 366.476 394.387 355.276 403.073 339.886C408.811 329.718 412.521 317.389 414.202 302.899C415.745 289.597 404.498 278.857 391.106 278.857C377.243 278.858 366.904 290.561 363.218 303.927C361.421 310.442 358.706 315.952 355.073 320.457C347.454 329.905 337.016 334.629 323.759 334.629C315.53 334.629 308.063 332.647 301.359 328.686C294.806 324.571 285.816 317.714 274.387 308.114C257.473 293.943 242.615 283.429 229.815 276.571C217.168 269.562 203.073 266.057 187.53 266.057ZM187.53 128C171.987 128 157.206 131.505 143.187 138.514C129.321 145.524 118.044 156.724 109.359 172.114C103.743 182.243 100.041 194.517 98.2529 208.935C96.5985 222.276 107.829 233.142 121.271 233.143C135.049 233.143 145.336 221.569 148.673 208.202C150.564 200.623 153.612 194.613 157.815 190.171C165.891 181.638 176.101 177.371 188.444 177.371C196.673 177.371 204.216 179.429 211.073 183.543C217.93 187.505 226.844 194.286 237.815 203.886C254.577 218.667 269.359 229.41 282.159 236.114C294.959 242.667 309.13 245.943 324.673 245.943C340.216 245.943 354.997 242.438 369.016 235.429C383.035 228.419 394.387 217.219 403.073 201.829C408.811 191.661 412.521 179.332 414.202 164.842C415.745 151.539 404.498 140.8 391.106 140.8C377.243 140.8 366.904 152.504 363.218 165.87C361.421 172.385 358.706 177.895 355.073 182.4C347.454 191.848 337.016 196.571 323.759 196.571C315.53 196.571 308.063 194.59 301.359 190.629C294.806 186.514 285.816 179.657 274.387 170.057C257.473 155.886 242.615 145.371 229.815 138.514C217.168 131.505 203.073 128 187.53 128Z"/></svg>' }, link: 'https://fluxer.gg/OlQ0bSc8' }
    ],

    footer: {
      message: 'Released under the BSD-3-Clause License.',
      copyright: 'Copyright © 2025-present Neko Void'
    }
  }
})
