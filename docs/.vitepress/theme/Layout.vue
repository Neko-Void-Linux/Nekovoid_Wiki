<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import AsciiLogo from './components/AsciiLogo.vue'
import RelatedLinks from './components/RelatedLinks.vue'
import SearchTopics from './components/SearchTopics.vue'
import TextSizeControl from './components/TextSizeControl.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-top>
      <SearchTopics />
    </template>
    <template #home-hero-image>
      <AsciiLogo />
    </template>
    <template #nav-bar-content-after>
      <TextSizeControl />
    </template>
    <template #doc-after>
      <RelatedLinks />
    </template>
  </Layout>
</template>
