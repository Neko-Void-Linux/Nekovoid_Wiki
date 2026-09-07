<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute } from 'vitepress'

type TextSize = 'small' | 'standard' | 'large'

const textSize = ref<TextSize>('standard')
const isOpen = ref(false)
const route = useRoute()
const isSpanish = computed(() => route.path.startsWith('/es/'))

const options: Array<{ value: TextSize; en: string; es: string }> = [
  { value: 'small', en: 'Small', es: 'Pequeño' },
  { value: 'standard', en: 'Standard', es: 'Estándar' },
  { value: 'large', en: 'Large', es: 'Grande' }
]

function applyTextSize(size: TextSize) {
  textSize.value = size
  document.documentElement.dataset.textSize = size
  window.localStorage.setItem('nekovoid-text-size', size)
}

function handleDocumentClick(event: MouseEvent) {
  const target = event.target as Node
  if (!(target instanceof Node) || !(event.currentTarget instanceof Document)) return

  const control = document.querySelector('.text-size-control')
  if (control && !control.contains(target)) isOpen.value = false
}

onMounted(() => {
  const saved = window.localStorage.getItem('nekovoid-text-size') as TextSize | null
  const initial = saved && options.some((option) => option.value === saved) ? saved : 'standard'
  applyTextSize(initial)
  document.addEventListener('click', handleDocumentClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleDocumentClick)
})
</script>

<template>
  <div class="text-size-control">
    <button
      class="text-size-trigger"
      type="button"
      :aria-expanded="isOpen"
      :aria-label="isSpanish ? 'Cambiar tamaño del texto' : 'Change text size'"
      :title="isSpanish ? 'Cambiar tamaño del texto' : 'Change text size'"
      @click.stop="isOpen = !isOpen"
      @keydown.escape="isOpen = false"
    >
      <span aria-hidden="true" class="text-size-icon">A</span>
      <span class="visually-hidden">{{ isSpanish ? 'Texto' : 'Text' }}</span>
    </button>

    <div v-if="isOpen" class="text-size-menu" role="dialog" :aria-label="isSpanish ? 'Tamaño del texto' : 'Text size'">
      <fieldset>
        <legend>{{ isSpanish ? 'Texto' : 'Text' }}</legend>
        <label v-for="option in options" :key="option.value" class="text-size-option">
          <input
            v-model="textSize"
            type="radio"
            name="nekovoid-text-size"
            :value="option.value"
            @change="applyTextSize(option.value)"
          >
          <span>{{ isSpanish ? option.es : option.en }}</span>
        </label>
      </fieldset>
    </div>
  </div>
</template>
