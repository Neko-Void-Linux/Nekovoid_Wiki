<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import AsciiLogo from './components/AsciiLogo.vue'
import LanguageControl from './components/LanguageControl.vue'
import RelatedLinks from './components/RelatedLinks.vue'
import SearchTopics from './components/SearchTopics.vue'
import TextSizeControl from './components/TextSizeControl.vue'

const { Layout } = DefaultTheme
const route = useRoute()
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
  const path = route.path.replace(/\/+$/, '')
  return path !== '' && path !== '/es'
})
</script>

<template>
  <Layout
    :class="{
      'wiki-route-pending': isRoutePending,
      'wiki-route-enter': isRouteEntering
    }"
  >
    <template #layout-top>
      <SearchTopics />
    </template>
    <template #home-hero-image>
      <AsciiLogo />
    </template>
    <template #nav-bar-content-after>
      <LanguageControl />
      <TextSizeControl v-if="isArticlePage" />
    </template>
    <template #doc-after>
      <RelatedLinks />
    </template>
  </Layout>
</template>
