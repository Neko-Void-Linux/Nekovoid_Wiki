<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import AsciiLogo from './components/AsciiLogo.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-image>
      <AsciiLogo />
    </template>
  </Layout>
</template>
