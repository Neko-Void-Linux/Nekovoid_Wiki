<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { useRoute, withBase } from 'vitepress'

type RelatedLink = {
  path: string
  en: { title: string; description: string }
  es: { title: string; description: string }
}

const route = useRoute()
const mounted = ref(false)
const hasManualSection = ref(false)

const groups: Array<{ match: RegExp; links: RelatedLink[] }> = [
  {
    match: /\/guides\/installation\//,
    links: [
      { path: '/guides/installation/', en: { title: 'Installation overview', description: 'the complete installation path.' }, es: { title: 'Resumen de instalación', description: 'el recorrido completo de instalación.' } },
      { path: '/guides/installation/requirements', en: { title: 'System requirements', description: 'hardware and desktop recommendations.' }, es: { title: 'Requisitos del sistema', description: 'recomendaciones de hardware y escritorio.' } },
      { path: '/guides/installation/installation-media', en: { title: 'Creating installation media', description: 'prepare a bootable USB drive.' }, es: { title: 'Crear un medio de instalación', description: 'preparar un USB arrancable.' } },
      { path: '/guides/installation/booting', en: { title: 'Booting Neko Void', description: 'start live mode and test the hardware.' }, es: { title: 'Arrancar Neko Void', description: 'iniciar el modo live y probar el hardware.' } },
      { path: '/guides/installation/installing', en: { title: 'Installing Neko Void', description: 'complete the installation on disk.' }, es: { title: 'Instalar Neko Void', description: 'completar la instalación en el disco.' } }
    ]
  },
  {
    match: /\/guides\/getting-started\//,
    links: [
      { path: '/guides/', en: { title: 'Guides overview', description: 'find the right path for your task.' }, es: { title: 'Resumen de guías', description: 'encontrar el recorrido adecuado para tu tarea.' } },
      { path: '/guides/installation/requirements', en: { title: 'System requirements', description: 'check the hardware before installing.' }, es: { title: 'Requisitos del sistema', description: 'comprobar el hardware antes de instalar.' } },
      { path: '/download/', en: { title: 'Download', description: 'get the latest installation image.' }, es: { title: 'Descargar', description: 'obtener la imagen de instalación.' } }
    ]
  },
  {
    match: /\/guides\/troubleshooting\//,
    links: [
      { path: '/guides/', en: { title: 'Guides overview', description: 'browse the installation and setup guides.' }, es: { title: 'Resumen de guías', description: 'consultar las guías de instalación y configuración.' } },
      { path: '/guides/installation/requirements', en: { title: 'System requirements', description: 'verify supported hardware and desktops.' }, es: { title: 'Requisitos del sistema', description: 'verificar el hardware y los escritorios compatibles.' } },
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
    match: /\/dev\/projects\/kore-package-manager\//,
    links: [
      { path: '/dev/projects/', en: { title: 'Projects', description: 'see the other Neko Void projects.' }, es: { title: 'Proyectos', description: 'ver los demás proyectos de Neko Void.' } },
      { path: '/dev/projects/kore-package-manager/', en: { title: 'Kore overview', description: 'review the package manager.' }, es: { title: 'Resumen de Kore', description: 'revisar el gestor de paquetes.' } },
      { path: '/dev/projects/kore-package-manager/architecture', en: { title: 'Architecture', description: 'understand the internal design.' }, es: { title: 'Arquitectura', description: 'conocer el diseño interno.' } },
      { path: '/dev/projects/kore-package-manager/usage', en: { title: 'Using Kore', description: 'learn the basic package workflows.' }, es: { title: 'Usar Kore', description: 'aprender los flujos básicos de paquetes.' } }
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
    match: /\/docs\/concepts\//,
    links: [
      { path: '/docs/', en: { title: 'Documentation overview', description: 'browse the reference documentation.' }, es: { title: 'Resumen de documentación', description: 'consultar la documentación de referencia.' } },
      { path: '/docs/concepts/runit', en: { title: 'runit', description: 'learn about the init system.' }, es: { title: 'runit', description: 'conocer el sistema de inicio.' } },
      { path: '/docs/concepts/musl', en: { title: 'musl', description: 'understand the C library choice.' }, es: { title: 'musl', description: 'entender la elección de biblioteca C.' } },
      { path: '/docs/concepts/profiles', en: { title: 'Profiles', description: 'see how system profiles are organized.' }, es: { title: 'Perfiles', description: 'ver cómo se organizan los perfiles del sistema.' } }
    ]
  },
  {
    match: /\/docs\/configuration\//,
    links: [
      { path: '/docs/', en: { title: 'Documentation overview', description: 'browse the reference documentation.' }, es: { title: 'Resumen de documentación', description: 'consultar la documentación de referencia.' } },
      { path: '/docs/configuration/', en: { title: 'Configuration overview', description: 'review the available settings.' }, es: { title: 'Resumen de configuración', description: 'revisar las opciones disponibles.' } },
      { path: '/docs/configuration/global-settings', en: { title: 'Global settings', description: 'configure the system-wide defaults.' }, es: { title: 'Configuración global', description: 'configurar los valores predeterminados del sistema.' } },
      { path: '/docs/configuration/advanced-options', en: { title: 'Advanced options', description: 'fine-tune the configuration.' }, es: { title: 'Opciones avanzadas', description: 'ajustar la configuración en detalle.' } }
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
  const fallback: RelatedLink[] = [
    { path: '/guides/', en: { title: 'Guides', description: 'follow the practical setup instructions.' }, es: { title: 'Guías', description: 'seguir las instrucciones prácticas de configuración.' } },
    { path: '/dev/projects/', en: { title: 'Projects', description: 'explore the development work.' }, es: { title: 'Proyectos', description: 'explorar el trabajo de desarrollo.' } },
    { path: '/docs/', en: { title: 'Documentation', description: 'read the technical reference.' }, es: { title: 'Documentación', description: 'leer la referencia técnica.' } }
  ]

  return (group?.links ?? fallback)
    .filter((link) => `${basePath.value}${link.path}`.replace(/\/$/, '') !== currentPath.value)
    .slice(0, 4)
    .map((link) => ({ path: `${basePath.value}${link.path}`, ...(isSpanish.value ? link.es : link.en) }))
})

const refreshManualSection = async () => {
  await nextTick()
  hasManualSection.value = [...document.querySelectorAll('.vp-doc h2')]
    .some((heading) => /^(Véase también|See also)$/i.test(
      (heading.textContent ?? '').replace(/[\u200B-\u200D\uFEFF]/g, '').trim()
    ))
  mounted.value = true
}

onMounted(refreshManualSection)
watch(() => route.path, refreshManualSection)
</script>

<template>
  <section v-if="mounted && !hasManualSection && links.length" class="related-links" aria-labelledby="related-links-title">
    <h2 id="related-links-title">{{ isSpanish ? 'Véase también' : 'See also' }}</h2>
    <ul>
      <li v-for="link in links" :key="link.path">
        <a :href="withBase(link.path)">
          {{ link.title }}<span> — {{ link.description }}</span>
        </a>
      </li>
    </ul>
  </section>
</template>
