<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const isSpanish = computed(() => route.path.startsWith('/es/'))
const isHidden = ref(false)
const isMounted = ref(false)

function syncOutlineVisibility() {
  document.querySelector('.VPDocAsideOutline')?.classList.toggle('is-hidden', isHidden.value)
}

function toggleContents() {
  isHidden.value = !isHidden.value
  syncOutlineVisibility()
}

onMounted(async () => {
  await nextTick()
  isMounted.value = true
  syncOutlineVisibility()
})
onBeforeUnmount(() => {
  document.querySelector('.VPDocAsideOutline')?.classList.remove('is-hidden')
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
      :aria-label="isSpanish ? 'Ocultar contenido' : 'Hide contents'"
      :title="isSpanish ? 'Ocultar contenido' : 'Hide contents'"
      @click="toggleContents"
    >
      {{ isSpanish ? 'Ocultar' : 'Hide' }}
    </button>
  </Teleport>

  <Transition name="contents-toggle-reopen">
    <button
      v-if="isMounted && isHidden"
      class="contents-toggle contents-toggle-reopen"
      type="button"
      aria-expanded="false"
      :aria-label="isSpanish ? 'Mostrar contenido' : 'Show contents'"
      :title="isSpanish ? 'Mostrar contenido' : 'Show contents'"
      @click="toggleContents"
    >
      <span class="contents-toggle-icon" aria-hidden="true" />
      <span class="contents-toggle-reopen-label">
        {{ isSpanish ? 'Contenido' : 'Contents' }}
      </span>
    </button>
  </Transition>
</template>
