<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, withBase } from 'vitepress'

const route = useRoute()
const isSpanish = computed(() => route.path.startsWith('/es/'))

function goBack() {
  if (window.history.length > 1) {
    window.history.back()
    return
  }

  window.location.href = withBase(isSpanish.value ? '/es/' : '/')
}
</script>

<template>
  <main class="wiki-not-found">
    <p class="wiki-not-found-code">404</p>
    <h1 class="wiki-not-found-title">
      {{ isSpanish ? 'PÁGINA NO ENCONTRADA' : 'PAGE NOT FOUND' }}
    </h1>

    <div class="wiki-not-found-face" aria-hidden="true">
      <span class="wiki-not-found-eye-left">●</span>
      <span class="wiki-not-found-mouth">▲</span>
      <span class="wiki-not-found-eye-right">●</span>
    </div>

    <p class="wiki-not-found-quote">
      {{
        isSpanish
          ? 'Parece que esta página se perdió en el vacío.'
          : 'It looks like this page was lost in the void.'
      }}
    </p>

    <div class="wiki-not-found-action">
      <button
        class="wiki-not-found-back"
        type="button"
        :aria-label="isSpanish ? 'Volver a la página anterior' : 'Go back to the previous page'"
        @click="goBack"
      >
        {{ isSpanish ? 'Volver' : 'Go back' }}
      </button>
    </div>
  </main>
</template>

<style scoped>
.wiki-not-found {
  padding: 64px 24px 96px;
  text-align: center;
}

.wiki-not-found-code {
  margin: 0;
  color: var(--vp-c-text-1);
  font-family: var(--vp-font-family-mono);
  font-size: 64px;
  font-weight: 600;
  line-height: 64px;
}

.wiki-not-found-title {
  margin: 0;
  padding-top: 12px;
  border: 0;
  color: var(--vp-c-text-1);
  font-family: var(--vp-font-family-base);
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 1.3;
}

.wiki-not-found-face {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 38px;
  margin: 8px auto 10px;
  color: var(--vp-c-text-1);
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
  white-space: nowrap;
}

.wiki-not-found-face > span {
  display: inline-block;
  font: inherit;
  line-height: 1;
}

.wiki-not-found-eye-left {
  transform: translateY(4px) scale(1.2);
}

.wiki-not-found-mouth {
  transform: translateY(11px) scaleX(1.5);
  transform-origin: center;
}

.wiki-not-found-eye-right {
  transform: translateY(-8px) scale(1.2);
}

.wiki-not-found-quote {
  max-width: 320px;
  margin: 0 auto;
  color: var(--vp-c-text-2);
  font-family: var(--vp-font-family-base);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
}

.wiki-not-found-action {
  padding-top: 20px;
}

.wiki-not-found-back {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 16px;
  border: 1px solid var(--wiki-border-color);
  background: transparent;
  color: var(--vp-c-brand-2);
  cursor: pointer;
  font-family: var(--vp-font-family-mono);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 1.5;
  transition: border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease;
}

.wiki-not-found-back:hover,
.wiki-not-found-back:focus-visible {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-text-1);
  outline: none;
}

@media (min-width: 768px) {
  .wiki-not-found {
    padding: 96px 32px 168px;
  }
}
</style>
