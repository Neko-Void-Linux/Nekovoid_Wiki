<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useData, useRoute } from 'vitepress'
import AsciiLogo from './components/AsciiLogo.vue'
import ContentsToggle from './components/ContentsToggle.vue'
import LanguageControl from './components/LanguageControl.vue'
import RelatedLinks from './components/RelatedLinks.vue'
import SearchTopics from './components/SearchTopics.vue'
import TextSizeControl from './components/TextSizeControl.vue'
import WikiNotFound from './components/WikiNotFound.vue'

const { Layout } = DefaultTheme
const route = useRoute()
const { page } = useData()
const isRoutePending = ref(false)
const isRouteEntering = ref(false)
let enterFrame = 0
let transitionId = 0
let stopRouteWatch: (() => void) | undefined

function replayPageEnter() {
  const currentTransition = ++transitionId
  if (enterFrame) window.cancelAnimationFrame(enterFrame)

  isRouteEntering.value = false
  isRoutePending.value = true

  nextTick(() => {
    if (currentTransition !== transitionId) return

    enterFrame = window.requestAnimationFrame(() => {
      if (currentTransition !== transitionId) return
      isRoutePending.value = false
      isRouteEntering.value = true
      enterFrame = 0
    })
  })
}

onMounted(() => {
  stopRouteWatch = watch(() => route.path, replayPageEnter)
})

onBeforeUnmount(() => {
  transitionId++
  if (enterFrame) window.cancelAnimationFrame(enterFrame)
  stopRouteWatch?.()
})

const isArticlePage = computed(() => {
  if (page.value.isNotFound) return false

  const path = route.path.replace(/\/+$/, '')
  const sectionLandingPages = new Set([
    '/dev/projects',
    '/en/dev/projects',
    '/es/dev/projects'
  ])

  return path !== '' && path !== '/es' && !sectionLandingPages.has(path)
})
</script>

<template>
  <Layout
    :class="{
      'wiki-route-pending': isRoutePending,
      'wiki-route-enter': isRouteEntering,
      'wiki-no-article': !isArticlePage
    }"
  >
    <template #layout-top>
      <SearchTopics />
    </template>
    <template #home-hero-image>
      <AsciiLogo />
    </template>
    <template #not-found>
      <WikiNotFound />
    </template>
    <template #nav-bar-content-after>
      <LanguageControl />
      <TextSizeControl v-if="isArticlePage" />
    </template>
    <template #aside-outline-before>
      <ContentsToggle v-if="isArticlePage" />
    </template>
    <template #doc-after>
      <RelatedLinks />
    </template>
  </Layout>
</template>
