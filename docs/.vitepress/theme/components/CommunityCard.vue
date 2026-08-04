<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()

const isSpanish = computed(() => lang.value.startsWith('es'))

const texts = computed(() => {
  if (isSpanish.value) {
    return {
      discordTitle: '¿Necesitas ayuda?',
      discordSubtitle: 'Únete a nuestra comunidad de Discord para obtener soporte',
      discordButton: 'Unirse a Discord',
      fluxerTitle: 'Mantente al día',
      fluxerSubtitle: 'Sigue a Neko-Void en Fluxer para noticias y actualizaciones',
      fluxerButton: 'Seguir en Fluxer'
    }
  }
  return {
    discordTitle: 'Need help?',
    discordSubtitle: 'Join our Discord community to get support',
    discordButton: 'Join Discord',
    fluxerTitle: 'Stay updated',
    fluxerSubtitle: 'Follow Neko-Void on Fluxer for news and updates',
    fluxerButton: 'Follow on Fluxer'
  }
})

const openDiscord = () => {
  window.open('https://discord.gg/meVYHCSWQX', '_blank')
}

const openFluxer = () => {
  window.open('https://fluxer.gg/OlQ0bSc8', '_blank')
}
</script>

<template>
  <div class="community-cards-container">
    <!-- Discord Card -->
    <div class="community-card discord-card">
      <div class="content">
        <h3 class="title">{{ texts.discordTitle }}</h3>
        <p class="subtitle">{{ texts.discordSubtitle }}</p>

        <button class="action-btn discord-btn" @click="openDiscord">
          <span class="icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.772-.6083 1.1583a18.3249 18.3249 0 00-5.4678 0 12.3533 12.3533 0 00-.6168-1.1583.0768.0768 0 00-.0785-.037 19.7363 19.7363 0 00-4.8851 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" fill="currentColor"/>
            </svg>
          </span>
          {{ texts.discordButton }}
        </button>
      </div>
    </div>

    <!-- Fluxer Card -->
    <div class="community-card fluxer-card">
      <div class="content">
        <h3 class="title">{{ texts.fluxerTitle }}</h3>
        <p class="subtitle">{{ texts.fluxerSubtitle }}</p>

        <button class="action-btn fluxer-btn" @click="openFluxer">
          <span class="icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
            </svg>
          </span>
          {{ texts.fluxerButton }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.community-cards-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

@media (min-width: 768px) {
  .community-cards-container {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

.community-card {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
}

.title {
  color: var(--vp-c-text-1);
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 !important;
  line-height: 1.2;
}

.subtitle {
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  margin: 0 !important;
  margin-bottom: 20px !important;
}

.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 12px 24px;
  color: white;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
}

.action-btn:hover {
  opacity: 0.9;
}

.action-btn:active {
  transform: scale(0.98);
}

.discord-btn {
  background-color: #5865F2; /* Discord Blurple */
}

.fluxer-btn {
  background-color: #6E56CF; /* Fluxer Purple */
}

.icon {
  display: flex;
  align-items: center;
}
</style>
