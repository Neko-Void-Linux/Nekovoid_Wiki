<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute } from 'vitepress'

type ThemePreference = 'auto' | 'light' | 'dark'

const STORAGE_KEY = 'vitepress-theme-appearance'
const preference = ref<ThemePreference>('auto')
const isOpen = ref(false)
const control = ref<HTMLElement | null>(null)
const route = useRoute()
const isSpanish = computed(() => route.path.startsWith('/es/'))
let colorSchemeQuery: MediaQueryList | null = null

const themeOptions: Array<{ value: ThemePreference; en: string; es: string }> = [
  { value: 'auto', en: 'Auto', es: 'Automático' },
  { value: 'light', en: 'Light', es: 'Claro' },
  { value: 'dark', en: 'Dark', es: 'Oscuro' }
]

function resolvedDark(theme: ThemePreference) {
  return theme === 'dark' || (theme === 'auto' && colorSchemeQuery?.matches === true)
}

function applyTheme(theme: ThemePreference, persist = true) {
  preference.value = theme
  document.documentElement.dataset.theme = theme
  document.documentElement.classList.toggle('dark', resolvedDark(theme))
  if (persist) window.localStorage.setItem(STORAGE_KEY, theme)
}

function selectTheme(theme: ThemePreference) {
  applyTheme(theme)
  closeMenu()
}

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}

function handleSystemThemeChange() {
  if (preference.value === 'auto') applyTheme('auto', false)
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
  colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)')
  colorSchemeQuery.addEventListener('change', handleSystemThemeChange)

  const savedTheme = window.localStorage.getItem(STORAGE_KEY) as ThemePreference | null
  const initialTheme = savedTheme && themeOptions.some((option) => option.value === savedTheme)
    ? savedTheme
    : 'auto'

  applyTheme(initialTheme)
  document.addEventListener('click', handleDocumentClick)
})

onBeforeUnmount(() => {
  colorSchemeQuery?.removeEventListener('change', handleSystemThemeChange)
  document.removeEventListener('click', handleDocumentClick)
})
</script>

<template>
  <div
    ref="control"
    class="theme-control"
    :class="{ open: isOpen }"
    @focusout="handleFocusOut"
  >
    <button
      class="theme-trigger"
      type="button"
      :aria-expanded="isOpen"
      aria-haspopup="menu"
      :aria-label="isSpanish ? 'Seleccionar tema' : 'Select theme'"
      :title="isSpanish ? 'Seleccionar tema' : 'Select theme'"
      @click.stop="toggleMenu"
      @keydown.escape="closeMenu"
    >
      <svg class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
      </svg>
      <span class="visually-hidden">{{ isSpanish ? 'Seleccionar tema' : 'Select theme' }}</span>
    </button>

    <div
      class="theme-menu"
      role="menu"
      :aria-hidden="!isOpen"
      :aria-label="isSpanish ? 'Tema' : 'Theme'"
    >
      <span class="theme-group-label">{{ isSpanish ? 'Tema' : 'Theme' }}</span>
      <button
        v-for="option in themeOptions"
        :key="option.value"
        class="theme-option"
        :class="{ active: preference === option.value }"
        type="button"
        role="menuitemradio"
        :aria-checked="preference === option.value"
        @click="selectTheme(option.value)"
      >
        <span class="theme-option-name">{{ isSpanish ? option.es : option.en }}</span>
        <span class="theme-check" aria-hidden="true">✓</span>
      </button>
    </div>
  </div>
</template>
