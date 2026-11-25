<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

const useSidebar = ref(false)
let media: MediaQueryList | undefined
function updatePlacement() {
  useSidebar.value = media?.matches ?? false
}
onMounted(async () => {
  await nextTick()
  media = window.matchMedia('(min-width: 1100px)')
  updatePlacement()
  media.addEventListener('change', updatePlacement)
})
onBeforeUnmount(() => media?.removeEventListener('change', updatePlacement))
</script>

<template>
  <!-- Mount a fresh teleport after hydration so the desktop target exists. -->
  <Teleport v-if="useSidebar" to=".VPDoc .content-container">
    <section class="related-links"><slot /></section>
  </Teleport>
  <section v-else class="related-links"><slot /></section>
</template>
