<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute } from 'vitepress'

type TextSize = 'small' | 'standard' | 'large'
type ContentWidth = 'standard' | 'wide'

const textSize = ref<TextSize>('standard')
const contentWidth = ref<ContentWidth>('standard')
const isOpen = ref(false)
const control = ref<HTMLElement | null>(null)
const route = useRoute()
const isSpanish = computed(() => route.path.startsWith('/es/'))

const textOptions: Array<{ value: TextSize; en: string; es: string }> = [
  { value: 'small', en: 'Small', es: 'Pequeño' },
  { value: 'standard', en: 'Standard', es: 'Estándar' },
  { value: 'large', en: 'Large', es: 'Grande' }
]

const widthOptions: Array<{ value: ContentWidth; en: string; es: string }> = [
  { value: 'standard', en: 'Standard', es: 'Estándar' },
  { value: 'wide', en: 'Wide', es: 'Ancho' }
]

function applyTextSize(size: TextSize) {
  textSize.value = size
  document.documentElement.dataset.textSize = size
  window.localStorage.setItem('nekovoid-text-size', size)
}

function applyContentWidth(width: ContentWidth) {
  contentWidth.value = width
  document.documentElement.dataset.contentWidth = width
  window.localStorage.setItem('nekovoid-content-width', width)
}

function selectTextSize(size: TextSize) {
  applyTextSize(size)
  closeMenu()
}

function selectContentWidth(width: ContentWidth) {
  applyContentWidth(width)
  closeMenu()
}

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}

function handleFocusOut(event: FocusEvent) {
  const nextTarget = event.relatedTarget
  if (!(nextTarget instanceof Node) || !control.value?.contains(nextTarget)) closeMenu()
}

function handleDocumentClick(event: MouseEvent) {
  const target = event.target
  if (!(target instanceof Node) || !control.value?.contains(target)) closeMenu()
}

onMounted(() => {
  const savedTextSize = window.localStorage.getItem('nekovoid-text-size') as TextSize | null
  const initialTextSize = savedTextSize && textOptions.some((option) => option.value === savedTextSize)
    ? savedTextSize
    : 'standard'

  const savedContentWidth = window.localStorage.getItem('nekovoid-content-width') as ContentWidth | null
  const initialContentWidth = savedContentWidth && widthOptions.some((option) => option.value === savedContentWidth)
    ? savedContentWidth
    : 'standard'

  applyTextSize(initialTextSize)
  applyContentWidth(initialContentWidth)
  document.addEventListener('click', handleDocumentClick)
})

onBeforeUnmount(() => document.removeEventListener('click', handleDocumentClick))
</script>

<template>
  <div
    ref="control"
    class="text-size-control"
    :class="{ open: isOpen }"
    @focusout="handleFocusOut"
  >
    <button
      class="text-size-trigger"
      type="button"
      :aria-expanded="isOpen"
      aria-haspopup="menu"
      :aria-label="isSpanish ? 'Preferencias de lectura' : 'Reading preferences'"
      :title="isSpanish ? 'Preferencias de lectura' : 'Reading preferences'"
      @click.stop="toggleMenu"
      @keydown.escape="closeMenu"
    >
      <span aria-hidden="true" class="text-size-icon">A</span>
      <span class="visually-hidden">{{ isSpanish ? 'Preferencias de lectura' : 'Reading preferences' }}</span>
    </button>

    <div
      class="text-size-menu"
      role="menu"
      :aria-hidden="!isOpen"
      :aria-label="isSpanish ? 'Preferencias de lectura' : 'Reading preferences'"
    >
      <div class="text-size-group" role="group" :aria-label="isSpanish ? 'Tamaño del texto' : 'Text size'">
        <span class="text-size-group-label">{{ isSpanish ? 'Tamaño del texto' : 'Text size' }}</span>
        <button
          v-for="option in textOptions"
          :key="`text-${option.value}`"
          class="text-size-option"
          :class="{ active: textSize === option.value }"
          type="button"
          role="menuitemradio"
          :aria-checked="textSize === option.value"
          @click="selectTextSize(option.value)"
        >
          <span class="text-size-option-name">{{ isSpanish ? option.es : option.en }}</span>
          <span class="text-size-check" aria-hidden="true">✓</span>
        </button>
      </div>

      <div class="text-size-group" role="group" :aria-label="isSpanish ? 'Ancho del contenido' : 'Content width'">
        <span class="text-size-group-label">{{ isSpanish ? 'Ancho del contenido' : 'Content width' }}</span>
        <button
          v-for="option in widthOptions"
          :key="`width-${option.value}`"
          class="text-size-option"
          :class="{ active: contentWidth === option.value }"
          type="button"
          role="menuitemradio"
          :aria-checked="contentWidth === option.value"
          @click="selectContentWidth(option.value)"
        >
          <span class="text-size-option-name">{{ isSpanish ? option.es : option.en }}</span>
          <span class="text-size-check" aria-hidden="true">✓</span>
        </button>
      </div>
    </div>
  </div>
</template>
