<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vitepress'

const route = useRoute()
const router = useRouter()
const isOpen = ref(false)
const control = ref<HTMLElement | null>(null)

const isSpanish = computed(() => route.path.startsWith('/es/'))
const currentLanguage = computed(() => (isSpanish.value ? 'ES' : 'EN'))

function localizedPath(language: 'en' | 'es') {
  const path = route.path.replace(/\/+$/, '') || '/'
  const unlocalizedPath = path === '/es' ? '/' : path.replace(/^\/es(?=\/|$)/, '') || '/'
  return language === 'es'
    ? unlocalizedPath === '/' ? '/es/' : `/es${unlocalizedPath}`
    : unlocalizedPath
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

async function changeLanguage(language: 'en' | 'es') {
  closeMenu()
  await router.go(localizedPath(language))
}

onMounted(() => document.addEventListener('click', handleDocumentClick))
onBeforeUnmount(() => document.removeEventListener('click', handleDocumentClick))
</script>

<template>
  <div
    ref="control"
    class="language-control"
    :class="{ open: isOpen }"
    @focusout="handleFocusOut"
  >
    <button
      class="language-trigger"
      type="button"
      :aria-expanded="isOpen"
      aria-haspopup="menu"
      :aria-label="isSpanish ? 'Cambiar idioma' : 'Change language'"
      @click.stop="toggleMenu"
      @keydown.escape="closeMenu"
    >
      <svg class="language-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      <span class="language-current">{{ currentLanguage }}</span>
      <svg class="language-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>

    <div
      class="language-menu"
      role="menu"
      :aria-hidden="!isOpen"
      :aria-label="isSpanish ? 'Idioma' : 'Language'"
    >
      <button
        class="language-option"
        :class="{ active: !isSpanish }"
        type="button"
        role="menuitemradio"
        :aria-checked="!isSpanish"
        @click="changeLanguage('en')"
      >
        <span class="language-name">English</span>
        <span class="language-code">EN</span>
        <span class="language-check" aria-hidden="true">✓</span>
      </button>
      <button
        class="language-option"
        :class="{ active: isSpanish }"
        type="button"
        role="menuitemradio"
        :aria-checked="isSpanish"
        @click="changeLanguage('es')"
      >
        <span class="language-name">Español</span>
        <span class="language-code">ES</span>
        <span class="language-check" aria-hidden="true">✓</span>
      </button>
    </div>
  </div>
</template>
