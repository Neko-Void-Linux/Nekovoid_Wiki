<script setup lang="ts">
import { computed } from 'vue';

interface Edition {
  name: string;
  type: string;
  checksum?: string;
  link?: string;
  status: 'available' | 'development';
}

const props = defineProps<{
  lang?: 'en' | 'es'
}>();

const translations = {
  en: {
    download: 'Download',
    checksum: 'Checksum',
    comingSoon: 'Coming Soon',
    liveIso: 'Live ISO',
    rawImage: 'RAW Image'
  },
  es: {
    download: 'Descargar',
    checksum: 'Suma de control',
    comingSoon: 'Próximamente',
    liveIso: 'Live ISO',
    rawImage: 'Imagen RAW'
  }
};

const t = computed(() => translations[props.lang || 'en']);

const editions: Edition[] = [
  {
    name: 'Neko Void MATE - Xorg',
    type: 'liveIso',
    link: 'https://sourceforge.net/projects/neko-void/files/',
    status: 'available'
  },
  {
    name: 'Neko Void MATE - XLibre',
    type: 'liveIso',
    link: 'https://sourceforge.net/projects/neko-void/files/',
    status: 'available'
  },
  {
    name: 'Neko Void XFCE',
    type: 'liveIso',
    link: 'https://sourceforge.net/projects/neko-void/files/',
    status: 'available'
  },
  {
    name: 'Neko Void KDE',
    type: 'liveIso',
    link: 'https://sourceforge.net/projects/neko-void/files/',
    status: 'available'
  },
  {
    name: 'Neko Void SWAY & I3',
    type: 'liveIso',
    status: 'development'
  },
  {
    name: 'Neko Void HYPRLAND',
    type: 'liveIso',
    status: 'development'
  },
  {
    name: 'Neko Void LXQT',
    type: 'liveIso',
    link: 'https://sourceforge.net/projects/neko-void/files/',
    status: 'available'
  },
  {
    name: 'Neko Void LABWC & OPENBOX',
    type: 'liveIso',
    status: 'development'
  }
];
</script>

<template>
  <div class="downloads-container">
    <div v-for="edition in editions" :key="edition.name" class="download-row">
      <div class="info-group">
        <h3 class="edition-name">{{ edition.name }}</h3>
        <span class="edition-type">{{ t[edition.type] }}</span>
      </div>
      
      <div class="action-group">
        <template v-if="edition.status === 'available'">
          <a :href="edition.link" target="_blank" rel="noopener noreferrer" class="action-btn download-btn">
            {{ t.download }}
            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          </a>
        </template>
        <template v-else>
          <button class="action-btn disabled-btn" disabled>
            {{ t.comingSoon }}
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.downloads-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.download-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  padding: 16px 24px;
  border-radius: 0; /* Brutalist sharp edges */
  transition: all 0.3s ease;
}

.download-row:hover {
  background-color: var(--vp-c-bg-soft);
  border-color: rgba(255, 255, 255, 0.2);
}

.info-group {
  display: flex;
  align-items: center;
  gap: 24px;
}

.edition-name {
  margin: 0 !important;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.edition-type {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  background: rgba(255, 255, 255, 0.05);
  padding: 4px 12px;
  border: 1px solid var(--vp-c-divider);
}

.action-group {
  display: flex;
  gap: 12px;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-decoration: none;
  background-color: transparent;
  border: 1px solid var(--vp-c-divider);
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 0; /* Brutalist sharp edges */
}

/* Theme-adapted Glow for Download Buttons */
.download-btn {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
  box-shadow: 0 0 10px var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.download-btn:hover {
  background-color: var(--vp-c-brand-soft);
  box-shadow: 0 0 20px var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-2);
  color: var(--vp-c-brand-2);
}

.disabled-btn {
  color: var(--vp-c-text-2);
  background-color: var(--vp-c-bg-soft);
  cursor: not-allowed;
  opacity: 0.6;
}

.btn-icon {
  width: 16px;
  height: 16px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .download-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 16px;
  }
  
  .info-group {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .action-group {
    width: 100%;
  }
  
  .action-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
