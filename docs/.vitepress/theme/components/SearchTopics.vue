<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const searchOpen = ref(false)
let observer: MutationObserver | undefined

const spanishTopics = [
  ['Neko Void', 'nekovoid'],
  ['Linux', 'linux'],
  ['Instalación', 'instalación'],
  ['runit', 'runit'],
  ['musl', 'musl'],
  ['Kasha', 'kasha'],
  ['Kore / kpm', 'kpm'],
  ['Servicios', 'servicios']
]

const englishTopics = [
  ['Neko Void', 'nekovoid'],
  ['Linux', 'linux'],
  ['Installation', 'installation'],
  ['runit', 'runit'],
  ['musl', 'musl'],
  ['Kasha', 'kasha'],
  ['Kore / kpm', 'kpm'],
  ['Services', 'services']
]

const isSpanish = computed(() => route.path.startsWith('/es/'))
const topics = computed(() => isSpanish.value ? spanishTopics : englishTopics)

function updateSearchState() {
  searchOpen.value = Boolean(document.querySelector('.VPLocalSearchBox .shell'))
}

function searchFor(query: string) {
  const input = document.querySelector<HTMLInputElement>('#localsearch-input')
  if (!input) return

  input.value = query
  input.dispatchEvent(new Event('input', { bubbles: true }))
  input.focus()
}

onMounted(() => {
  updateSearchState()
  observer = new MutationObserver(updateSearchState)
  observer.observe(document.body, { childList: true, subtree: true })
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <Teleport v-if="searchOpen" to=".VPLocalSearchBox .shell">
    <div class="search-topic-tags" :aria-label="isSpanish ? 'Temas sugeridos' : 'Suggested topics'">
      <span class="search-topic-label">{{ isSpanish ? 'Temas' : 'Topics' }}</span>
      <button
        v-for="([label, query]) in topics"
        :key="query"
        type="button"
        class="search-topic-tag"
        @click="searchFor(query)"
      >
        {{ label }}
      </button>
    </div>
  </Teleport>
</template>
