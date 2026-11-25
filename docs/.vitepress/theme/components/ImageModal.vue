<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

const isOpen = ref(false)
const currentSrc = ref('')
const currentAlt = ref('')
const zoomScale = ref(1)
const panX = ref(0)
const panY = ref(0)
const isDragging = ref(false)
const dragStartX = ref(0)
const dragStartY = ref(0)

const isSpanish = computed(() => route.path.startsWith('/es'))

const t = computed(() => {
  if (isSpanish.value) {
    return {
      title: 'Vista previa de imagen',
      zoomIn: 'Acercar (+)',
      zoomOut: 'Alejar (-)',
      resetZoom: 'Restablecer zoom',
      openOriginal: 'Abrir en pestaña nueva',
      close: 'Cerrar (Esc)'
    }
  }
  return {
    title: 'Image Preview',
    zoomIn: 'Zoom In (+)',
    zoomOut: 'Zoom Out (-)',
    resetZoom: 'Reset Zoom',
    openOriginal: 'Open in new tab',
    close: 'Close (Esc)'
  }
})

function resetTransform() {
  zoomScale.value = 1
  panX.value = 0
  panY.value = 0
}

function openImage(img: HTMLImageElement) {
  const activeSrc = img.currentSrc || img.getAttribute('src') || ''
  if (!activeSrc) return

  currentSrc.value = activeSrc
  currentAlt.value = img.alt || img.title || ''
  resetTransform()
  isOpen.value = true

  if (typeof document !== 'undefined') {
    document.body.classList.add('image-modal-open')
  }
}

function closeModal() {
  if (!isOpen.value) return
  isOpen.value = false
  resetTransform()
  if (typeof document !== 'undefined') {
    document.body.classList.remove('image-modal-open')
  }
}

function handleZoomIn() {
  zoomScale.value = Math.min(Math.round((zoomScale.value + 0.25) * 100) / 100, 3)
}

function handleZoomOut() {
  zoomScale.value = Math.max(Math.round((zoomScale.value - 0.25) * 100) / 100, 0.5)
  if (zoomScale.value <= 1) {
    panX.value = 0
    panY.value = 0
  }
}

function handleToggleZoom() {
  if (zoomScale.value > 1.05) {
    resetTransform()
  } else {
    zoomScale.value = 1.75
  }
}

function handleWheel(e: WheelEvent) {
  e.preventDefault()
  if (e.deltaY < 0) {
    handleZoomIn()
  } else {
    handleZoomOut()
  }
}

function handleMouseDown(e: MouseEvent) {
  if (zoomScale.value <= 1) return
  isDragging.value = true
  dragStartX.value = e.clientX - panX.value
  dragStartY.value = e.clientY - panY.value
}

function handleMouseMove(e: MouseEvent) {
  if (!isDragging.value) return
  panX.value = e.clientX - dragStartX.value
  panY.value = e.clientY - dragStartY.value
}

function handleMouseUp() {
  isDragging.value = false
}

function handleKeyDown(e: KeyboardEvent) {
  if (!isOpen.value) return
  if (e.key === 'Escape') {
    closeModal()
  } else if (e.key === '+' || e.key === '=') {
    handleZoomIn()
  } else if (e.key === '-') {
    handleZoomOut()
  } else if (e.key === '0') {
    resetTransform()
  }
}

function onDocumentClick(e: MouseEvent) {
  const target = e.target as HTMLElement
  if (!target || target.tagName !== 'IMG') return

  // Check if image is inside content area
  const contentArea = target.closest('.vp-doc, .theme-aware-image')
  if (!contentArea) return

  // Exclude navigational / chrome elements
  if (target.closest('.VPNavBar, .VPNav, .VPSidebar, .image-floating-window, .no-zoom, .avatar, .badge')) return
  if (target.classList.contains('no-zoom')) return

  // If inside an external link that isn't pointing to the image itself, let navigation proceed
  const link = target.closest('a')
  if (link) {
    const href = link.getAttribute('href') || ''
    const isDirectImage = /\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i.test(href)
    if (!isDirectImage) return
    e.preventDefault()
  }

  e.preventDefault()
  e.stopPropagation()
  openImage(target as HTMLImageElement)
}

watch(() => route.path, () => {
  closeModal()
})

onMounted(() => {
  document.addEventListener('click', onDocumentClick, true)
  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseup', handleMouseUp)
})

onBeforeUnmount(() => {
  if (typeof document !== 'undefined') {
    document.removeEventListener('click', onDocumentClick, true)
    document.body.classList.remove('image-modal-open')
  }
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleKeyDown)
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseup', handleMouseUp)
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition name="image-modal-fade">
      <div
        v-if="isOpen"
        class="image-modal-backdrop"
        @click.self="closeModal"
        role="dialog"
        aria-modal="true"
        :aria-label="t.title"
      >
        <div class="image-floating-window">
          <!-- Window Title Bar -->
          <header class="image-window-header">
            <div class="image-window-title-group">
              <span class="image-window-badge" aria-hidden="true">₍^. .^₎⟆</span>
              <span class="image-window-title" :title="currentAlt || t.title">
                {{ currentAlt || t.title }}
              </span>
            </div>

            <div class="image-window-actions">
              <span class="image-zoom-indicator">
                {{ Math.round(zoomScale * 100) }}%
              </span>

              <button
                type="button"
                class="image-btn"
                :title="t.zoomOut"
                :aria-label="t.zoomOut"
                :disabled="zoomScale <= 0.5"
                @click="handleZoomOut"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </button>

              <button
                type="button"
                class="image-btn"
                :title="t.zoomIn"
                :aria-label="t.zoomIn"
                :disabled="zoomScale >= 3"
                @click="handleZoomIn"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </button>

              <button
                type="button"
                class="image-btn"
                :title="t.resetZoom"
                :aria-label="t.resetZoom"
                @click="resetTransform"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                  <path d="M3 3v5h5"></path>
                </svg>
              </button>

              <a
                :href="currentSrc"
                target="_blank"
                rel="noopener noreferrer"
                class="image-btn image-link-btn"
                :title="t.openOriginal"
                :aria-label="t.openOriginal"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>

              <button
                type="button"
                class="image-btn image-close-btn"
                :title="t.close"
                :aria-label="t.close"
                @click="closeModal"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </header>

          <!-- Window Body / Canvas -->
          <div
            class="image-window-body"
            :class="{ 'is-zoomed': zoomScale > 1, 'is-dragging': isDragging }"
            @wheel="handleWheel"
            @mousedown="handleMouseDown"
            @dblclick="handleToggleZoom"
          >
            <img
              :src="currentSrc"
              :alt="currentAlt"
              class="image-window-content"
              :style="{
                transform: `translate(${panX}px, ${panY}px) scale(${zoomScale})`
              }"
              draggable="false"
            />
          </div>

          <!-- Window Footer with Alt description if present -->
          <footer v-if="currentAlt" class="image-window-footer">
            <span class="image-footer-text">{{ currentAlt }}</span>
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
