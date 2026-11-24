<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const isSpanish = computed(() => route.path.startsWith('/es/'))
const isHidden = ref(false)
const isMounted = ref(false)

const STORAGE_KEY = 'nekovoid-sidebar-collapsed'

function syncOutlineVisibility() {
  if (typeof document === 'undefined') return
  const aside = document.querySelector('.VPDoc.has-aside .aside')
  const outline = document.querySelector('.VPDocAsideOutline')
  const vpDoc = document.querySelector('.VPDoc')

  aside?.classList.toggle('is-collapsed', isHidden.value)
  outline?.classList.toggle('is-hidden', isHidden.value)
  vpDoc?.classList.toggle('has-aside-collapsed', isHidden.value)
}

function toggleContents() {
  isHidden.value = !isHidden.value
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, String(isHidden.value))
    } catch {}
  }
  syncOutlineVisibility()
}

watch(
  () => route.path,
  async () => {
    await nextTick()
    syncOutlineVisibility()
  }
)

onMounted(async () => {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved !== null) {
        isHidden.value = saved === 'true'
      }
    } catch {}
  }
  await nextTick()
  isMounted.value = true
  syncOutlineVisibility()
})

onBeforeUnmount(() => {
  if (typeof document === 'undefined') return
  document.querySelector('.VPDoc.has-aside .aside')?.classList.remove('is-collapsed')
  document.querySelector('.VPDocAsideOutline')?.classList.remove('is-hidden')
  document.querySelector('.VPDoc')?.classList.remove('has-aside-collapsed')
})
</script>

<template>
  <Teleport v-if="isMounted" to=".VPDocAsideOutline .content">
    <button
      class="contents-toggle contents-toggle-inline"
      type="button"
      :aria-expanded="!isHidden"
      :aria-hidden="isHidden"
      :disabled="isHidden"
      :tabindex="isHidden ? -1 : 0"
      :aria-label="isSpanish ? 'Ocultar índice' : 'Hide contents'"
      :title="isSpanish ? 'Ocultar índice' : 'Hide contents'"
      @click="toggleContents"
    >
      <span class="contents-toggle-arrow" aria-hidden="true">‹</span>
      <span class="contents-toggle-label">{{ isSpanish ? 'Ocultar' : 'Hide' }}</span>
    </button>
  </Teleport>

  <Teleport v-if="isMounted" to="body">
    <Transition name="contents-tab">
      <button
        v-if="isHidden"
        class="contents-toggle contents-toggle-tab"
        type="button"
        aria-expanded="false"
        :aria-label="isSpanish ? 'Mostrar índice' : 'Show contents'"
        :title="isSpanish ? 'Mostrar índice' : 'Show contents'"
        @click="toggleContents"
      >
        <span class="contents-tab-arrow" aria-hidden="true">›</span>
        <span class="contents-tab-label">
          {{ isSpanish ? 'Contenido' : 'Contents' }}
        </span>
      </button>
    </Transition>
  </Teleport>
</template>
