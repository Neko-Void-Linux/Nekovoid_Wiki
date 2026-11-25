<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, withBase } from 'vitepress'

type RelatedLink = {
  path: string
  external?: boolean
  en: { title: string; description?: string }
  es: { title: string; description?: string }
}

const route = useRoute()
const mounted = ref(false)
const hasManualSection = ref(false)

const groups: Array<{ match: RegExp; links: RelatedLink[] }> = [
  {
    match: /\/guides\/installation\//,
    links: [
      { path: '/guides/', en: { title: 'Guides & Documentation', description: 'browse all documentation and guides.' }, es: { title: 'Guías y Documentación', description: 'explora toda la documentación y guías.' } },
      { path: '/docs/concepts/runit', en: { title: 'runit (Init System)', description: 'service supervision and process management.' }, es: { title: 'runit (Sistema Init)', description: 'supervisión de servicios y gestión de procesos.' } },
      { path: '/docs/concepts/wayland', en: { title: 'Wayland', description: 'modern display protocol and compositors.' }, es: { title: 'Wayland', description: 'protocolo gráfico moderno y compositores.' } },
      { path: '/guides/troubleshooting/common-issues', en: { title: 'Common Issues', description: 'find solutions for frequent setup problems.' }, es: { title: 'Problemas comunes', description: 'soluciones para problemas frecuentes de instalación.' } },
      { path: 'https://www.neko-void-linux.online/#downloads', external: true, en: { title: 'Download', description: 'get the latest installation image.' }, es: { title: 'Descargar', description: 'obtener la imagen de instalación.' } }
    ]
  },
  {
    match: /\/guides\/$/,
    links: [
      { path: '/guides/installation/', en: { title: 'Installation overview', description: 'the complete installation path.' }, es: { title: 'Resumen de instalación', description: 'el recorrido completo de instalación.' } },
      { path: '/docs/concepts/runit', en: { title: 'runit (Init System)', description: 'service supervision and process management.' }, es: { title: 'runit (Sistema Init)', description: 'supervisión de servicios y gestión de procesos.' } },
      { path: 'https://www.neko-void-linux.online/#downloads', external: true, en: { title: 'Download', description: 'get the latest installation image.' }, es: { title: 'Descargar', description: 'obtener la imagen de instalación.' } }
    ]
  },
  {
    match: /\/guides\/troubleshooting\//,
    links: [
      { path: '/guides/', en: { title: 'Guides overview', description: 'browse the installation and setup guides.' }, es: { title: 'Resumen de guías', description: 'consultar las guías de instalación y configuración.' } },
      { path: '/guides/installation/', en: { title: 'Installation Guide', description: 'system requirements and installation steps.' }, es: { title: 'Guía de instalación', description: 'requisitos del sistema y pasos de instalación.' } },
      { path: '/dev/contributing/', en: { title: 'Contributing', description: 'help improve the documentation.' }, es: { title: 'Colaborar', description: 'ayudar a mejorar la documentación.' } }
    ]
  },
  {
    match: /\/dev\/projects\/nekovoid-os-builder\//,
    links: [
      { path: '/dev/projects/', en: { title: 'Projects', description: 'see the other Neko Void projects.' }, es: { title: 'Proyectos', description: 'ver los demás proyectos de Neko Void.' } },
      { path: '/dev/projects/nekovoid-os-builder/', en: { title: 'Neko Void OS Builder overview', description: 'understand the builder and its structure.' }, es: { title: 'Resumen de Neko Void OS Builder', description: 'conocer el constructor y su estructura.' } },
      { path: '/dev/contributing/', en: { title: 'Contributing', description: 'learn how to participate in development.' }, es: { title: 'Colaborar', description: 'aprender cómo participar en el desarrollo.' } }
    ]
  },
  {
    match: /\/dev\/projects\/kasha-installer\//,
    links: [
      { path: '/dev/projects/', en: { title: 'Projects', description: 'see the other Neko Void projects.' }, es: { title: 'Proyectos', description: 'ver los demás proyectos de Neko Void.' } },
      { path: '/dev/projects/kasha-installer/', en: { title: 'Kasha overview', description: 'review the installer and its features.' }, es: { title: 'Resumen de Kasha', description: 'revisar el instalador y sus características.' } },
      { path: '/dev/projects/kasha-installer/architecture', en: { title: 'Architecture', description: 'understand how Kasha is structured.' }, es: { title: 'Arquitectura', description: 'conocer cómo está estructurado Kasha.' } },
      { path: '/dev/projects/kasha-installer/build', en: { title: 'Build Kasha', description: 'compile and run the installer.' }, es: { title: 'Compilar Kasha', description: 'compilar y ejecutar el instalador.' } }
    ]
  },
  {
    match: /\/dev\/projects\/neko-kernel-manager\//,
    links: [
      { path: '/dev/projects/', en: { title: 'Projects', description: 'see the other Neko Void projects.' }, es: { title: 'Proyectos', description: 'ver los demás proyectos de Neko Void.' } },
      { path: '/dev/projects/neko-kernel-manager/', en: { title: 'Kernel Manager', description: 'manage kernels and DKMS modules.' }, es: { title: 'Kernel Manager', description: 'gestionar kernels y módulos DKMS.' } },
      { path: '/dev/projects/nekovoid-os-builder/', en: { title: 'OS Builder', description: 'custom ISO construction.' }, es: { title: 'OS Builder', description: 'construcción de ISOs personalizadas.' } },
      { path: '/dev/projects/kasha-installer/', en: { title: 'Kasha Installer', description: 'system installer.' }, es: { title: 'Instalador Kasha', description: 'instalador del sistema.' } }
    ]
  },
  {
    match: /\/dev\/projects\/vouru\//,
    links: [
      { path: '/dev/projects/', en: { title: 'Projects', description: 'see the other Neko Void projects.' }, es: { title: 'Proyectos', description: 'ver los demás proyectos de Neko Void.' } },
      { path: '/dev/projects/vouru/', en: { title: 'Vouru', description: 'Void User Repository helper.' }, es: { title: 'Vouru', description: 'Helper de repositorios de usuario para Void.' } },
      { path: '/dev/projects/kyoz/', en: { title: 'Kyoz', description: 'lightweight XBPS wrapper in Zig.' }, es: { title: 'Kyoz', description: 'wrapper ligero para XBPS en Zig.' } },
      { path: '/dev/projects/iruka-xbps/', en: { title: 'Iruka XBPS', description: 'graphical frontend for XBPS.' }, es: { title: 'Iruka XBPS', description: 'interfaz gráfica para XBPS.' } }
    ]
  },
  {
    match: /\/dev\/projects\/kyoz\//,
    links: [
      { path: '/dev/projects/', en: { title: 'Projects', description: 'see the other Neko Void projects.' }, es: { title: 'Proyectos', description: 'ver los demás proyectos de Neko Void.' } },
      { path: '/dev/projects/kyoz/', en: { title: 'Kyoz', description: 'lightweight XBPS wrapper in Zig.' }, es: { title: 'Kyoz', description: 'wrapper ligero para XBPS en Zig.' } },
      { path: '/dev/projects/vouru/', en: { title: 'Vouru', description: 'Void User Repository helper.' }, es: { title: 'Vouru', description: 'Helper de repositorios de usuario para Void.' } },
      { path: '/dev/projects/iruka-xbps/', en: { title: 'Iruka XBPS', description: 'graphical frontend for XBPS.' }, es: { title: 'Iruka XBPS', description: 'interfaz gráfica para XBPS.' } }
    ]
  },
  {
    match: /\/dev\/projects\/iruka-xbps\//,
    links: [
      { path: '/dev/projects/', en: { title: 'Projects', description: 'see the other Neko Void projects.' }, es: { title: 'Proyectos', description: 'ver los demás proyectos de Neko Void.' } },
      { path: '/dev/projects/iruka-xbps/', en: { title: 'Iruka XBPS', description: 'graphical frontend for XBPS.' }, es: { title: 'Iruka XBPS', description: 'interfaz gráfica para XBPS.' } },
      { path: '/dev/projects/vouru/', en: { title: 'Vouru', description: 'Void User Repository helper.' }, es: { title: 'Vouru', description: 'Helper de repositorios de usuario para Void.' } },
      { path: '/dev/projects/kyoz/', en: { title: 'Kyoz', description: 'lightweight XBPS wrapper in Zig.' }, es: { title: 'Kyoz', description: 'wrapper ligero para XBPS en Zig.' } }
    ]
  },
  {
    match: /\/dev\/contributing\//,
    links: [
      { path: '/dev/contributing/', en: { title: 'Contributing overview', description: 'start contributing to Neko Void.' }, es: { title: 'Resumen para colaboradores', description: 'empezar a colaborar con Neko Void.' } },
      { path: '/dev/contributing/how-to-contribute', en: { title: 'How to contribute', description: 'choose a task and submit changes.' }, es: { title: 'Cómo colaborar', description: 'elegir una tarea y enviar cambios.' } },
      { path: '/dev/contributing/style-guide', en: { title: 'Style guide', description: 'keep pages consistent and readable.' }, es: { title: 'Guía de estilo', description: 'mantener las páginas consistentes y legibles.' } }
    ]
  },
  {
    match: /\/docs\/configuration\//,
    links: [
      { path: '/guides/', en: { title: 'Guides & Documentation', description: 'browse all documentation and guides.' }, es: { title: 'Guías y Documentación', description: 'explora toda la documentación y guías.' } },
      { path: '/docs/configuration/japanese-input', en: { title: 'Japanese Input (fcitx5)', description: 'setup fcitx5 and Mozc for Japanese typing.' }, es: { title: 'Entrada en japonés (fcitx5)', description: 'configurar fcitx5 y Mozc para escribir en japonés.' } },
      { path: '/docs/concepts/xorg', en: { title: 'Xorg (X11)', description: 'X11 configuration and environment files.' }, es: { title: 'Xorg (X11)', description: 'configuración de X11 y variables de entorno.' } },
      { path: '/docs/concepts/wayland', en: { title: 'Wayland', description: 'modern display protocol setup.' }, es: { title: 'Wayland', description: 'configuración del protocolo moderno Wayland.' } }
    ]
  },
  {
    match: /\/docs\/concepts\//,
    links: [
      { path: '/docs/', en: { title: 'Documentation overview', description: 'browse the reference documentation.' }, es: { title: 'Resumen de documentación', description: 'consultar la documentación de referencia.' } },
      { path: '/docs/concepts/runit', en: { title: 'runit', description: 'learn about the init system.' }, es: { title: 'runit', description: 'conocer el sistema de inicio.' } },
      { path: '/docs/concepts/musl', en: { title: 'musl', description: 'understand the C library choice.' }, es: { title: 'musl', description: 'entender la elección de biblioteca C.' } },
      { path: '/docs/concepts/profiles', en: { title: 'Profiles', description: 'see how system profiles are organized.' }, es: { title: 'Perfiles', description: 'ver cómo se organizan los perfiles del sistema.' } }
    ]
  },
  {
    match: /\/docs\/?$/,
    links: [
      { path: 'https://docs.voidlinux.org', external: true, en: { title: 'Void Linux Docs' }, es: { title: 'Documentación de Void Linux' } },
      { path: 'https://www.neko-void-linux.online', external: true, en: { title: 'Neko Void' }, es: { title: 'Neko Void' } }
    ]
  },
  {
    match: /\/docs\/configuration\//,
    links: [
      { path: '/docs/', en: { title: 'Documentation overview', description: 'browse the reference documentation.' }, es: { title: 'Resumen de documentación', description: 'consultar la documentación de referencia.' } },
      { path: '/docs/configuration/', en: { title: 'Configuration overview', description: 'review the available settings.' }, es: { title: 'Resumen de configuración', description: 'revisar las opciones disponibles.' } },
      { path: '/docs/configuration/japanese-input', en: { title: 'Japanese Input (fcitx5)', description: 'setup fcitx5 and Mozc for Japanese typing.' }, es: { title: 'Entrada en japonés (fcitx5)', description: 'configurar fcitx5 y Mozc para escribir en japonés.' } },
      { path: '/docs/concepts/runit', en: { title: 'runit (Init System)', description: 'service supervision and process management.' }, es: { title: 'runit (Sistema Init)', description: 'supervisión de servicios y gestión de procesos.' } }
    ]
  },
  {
    match: /\/about\//,
    links: [
      { path: '/about/', en: { title: 'About Neko Void', description: 'learn about the project.' }, es: { title: 'Sobre Neko Void', description: 'conocer el proyecto.' } },
      { path: '/about/mission', en: { title: 'Mission', description: 'read the project mission.' }, es: { title: 'Misión', description: 'leer la misión del proyecto.' } },
      { path: '/about/community-values', en: { title: 'Community values', description: 'understand how the community works.' }, es: { title: 'Valores de la comunidad', description: 'conocer cómo funciona la comunidad.' } },
      { path: '/about/team', en: { title: 'Team', description: 'meet the people behind Neko Void.' }, es: { title: 'Equipo', description: 'conocer al equipo de Neko Void.' } }
    ]
  }
]

const isSpanish = computed(() => route.path.startsWith('/es/'))
const basePath = computed(() => {
  if (isSpanish.value) return '/es'
  if (route.path.startsWith('/en/')) return '/en'
  return ''
})
const currentPath = computed(() => route.path.replace(/\/$/, '') || '/')

const links = computed(() => {
  if (currentPath.value === '/' || currentPath.value === '/es') return []

  const group = groups.find(({ match }) => match.test(route.path))
  if (!group) return []

  return group.links
    .filter((link) => link.external || `${basePath.value}${link.path}`.replace(/\/$/, '') !== currentPath.value)
    .slice(0, 4)
    .map((link) => ({
      path: link.external ? link.path : `${basePath.value}${link.path}`,
      external: link.external,
      ...(isSpanish.value ? link.es : link.en)
    }))
})

function updateContainerClass() {
  const isVisible = mounted.value && !hasManualSection.value && links.value.length > 0
  const container = document.querySelector('.VPDoc .content-container')
  const docContainer = document.querySelector('.VPDoc .container')
  container?.classList.toggle('has-related-links', isVisible)
  docContainer?.classList.toggle('has-related-links', isVisible)
}

const refreshManualSection = async () => {
  await nextTick()
  hasManualSection.value = [...document.querySelectorAll('.vp-doc h2')]
    .some((heading) => /^(Véase también|See also)$/i.test(
      (heading.textContent ?? '').replace(/[\u200B-\u200D\uFEFF]/g, '').trim()
    ))
  mounted.value = true
  await nextTick()
  updateContainerClass()
}

onMounted(async () => {
  document.querySelectorAll('.related-outline-item').forEach((item) => item.remove())
  await refreshManualSection()
})

watch(() => route.path, refreshManualSection)

onBeforeUnmount(() => {
  document.querySelectorAll('.related-outline-item').forEach((item) => item.remove())
  const container = document.querySelector('.VPDoc .content-container')
  const docContainer = document.querySelector('.VPDoc .container')
  container?.classList.remove('has-related-links')
  docContainer?.classList.remove('has-related-links')
})
</script>

<template>
  <aside v-if="mounted && !hasManualSection && links.length" class="related-links" aria-labelledby="related-links-title">
    <h2 id="related-links-title">
      <span class="related-links-label">{{ isSpanish ? 'Véase también' : 'See also' }}</span>
      <span class="related-links-kaomoji" aria-hidden="true">(˵ •̀ ᴗ - ˵ )</span>
    </h2>
    <ul>
      <li v-for="link in links" :key="link.path">
        <a
          :class="{ 'related-links-external': link.external }"
          :href="link.external ? link.path : withBase(link.path)"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noopener noreferrer' : undefined"
        >
          {{ link.title }}
        </a>
      </li>
    </ul>
  </aside>
</template>
