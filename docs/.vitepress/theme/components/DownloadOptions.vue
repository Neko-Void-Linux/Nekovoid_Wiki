<script setup lang="ts">
import { computed } from 'vue';

interface Edition {
  name: string;
  type: string;
  checksum?: string;
  link?: string;
  status: 'available' | 'development';
  description?: string;
  recommended?: boolean;
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
    rawImage: 'RAW Image',
    recommended: 'Recommended'
  },
  es: {
    download: 'Descargar',
    checksum: 'Suma de control',
    comingSoon: 'Próximamente',
    liveIso: 'Live ISO',
    rawImage: 'Imagen RAW',
    recommended: 'Recomendado'
  }
};

const t = computed(() => translations[props.lang || 'es']);

const editions: Edition[] = [
  {
    name: 'Neko Void MATE — Xorg',
    type: 'liveIso',
    checksum: '7feb6eb989cf0028f3efc09b4daacd5d2cfa84e074ef7c514abd1352429a6fb1',
    link: 'https://archive.org/download/Neko-Void/nekovoid-mate-20260905.iso',
    status: 'available',
    recommended: true,
    description: 'Main edition, recommended to start.'
  },
  {
    name: 'Neko Void MATE — XLibre',
    type: 'liveIso',
    checksum: '8a2806829de403cddcc5e177ea62a5a51bd9c6aae3c9b34c70d18511e5182ffd',
    link: 'https://archive.org/download/Neko-Void/nekovoid-matelibre-20260905.iso',
    status: 'available',
    description: 'MATE with XLibre, an alternative display server.'
  },
  {
    name: 'Neko Void NVIDIA',
    type: 'liveIso',
    status: 'development',
    description: 'Beta support for NVIDIA proprietary drivers.'
  },
  {
    name: 'Neko Void XFCE',
    type: 'liveIso',
    checksum: 'c0b084ec6658839507b03a738af00d20b6c607641fc9ceaff727acc21cba5fa3',
    link: 'https://archive.org/download/Neko-Void/nekovoid-xfce-20260905.iso',
    status: 'available',
    description: 'Lightweight and familiar desktop, balance performance and comfort.'
  },
  {
    name: 'Neko Void KDE',
    type: 'liveIso',
    checksum: '7c2d15dafd2d9f232af6d4b3ee2166204991a612d8aacfdcfe4bc7bdb1f8899d',
    link: 'https://archive.org/download/Neko-Void/nekovoid-kde-20260905.iso',
    status: 'available',
    description: 'Full-featured and customizable daily desktop.'
  },
  {
    name: 'Neko Void I3',
    type: 'liveIso',
    checksum: '04f19f44da243d2ac17a6d9f857ae90e92f9fe94c680f8132aa9178d53215ec2',
    link: 'https://archive.org/download/Neko-Void/nekovoid-i3-20260830.iso',
    status: 'available',
    description: 'Tiling window manager for efficient workflows.'
  },
  {
    name: 'Neko Void Openbox',
    type: 'liveIso',
    status: 'development',
    description: 'Lightweight edition in development for modest hardware.'
  },
  {
    name: 'Neko Void LXQt',
    type: 'liveIso',
    checksum: '5f8ca9478134a961521a0b1b88d55773a10468022b5cce9bf3f00c94f718ad9a',
    link: 'https://archive.org/download/Neko-Void/nekovoid-lxqt-20260905.iso',
    status: 'available',
    description: 'Lightweight option for low-resource machines.'
  },
  {
    name: 'Neko Void Labwc',
    type: 'liveIso',
    checksum: '063133486497715241e11aab30556149ad5a6695ea14acad02d20f59f3911fae',
    link: 'https://archive.org/download/Neko-Void/nekovoid-labwc-20260905.iso',
    status: 'available',
    description: 'Lightweight Wayland compositor for experimenting.'
  },
  {
    name: 'Neko Void Niri',
    type: 'liveIso',
    checksum: 'a96955d36790b9d5e4ca4f008ede37b7b25bd5e582ec80ea1ac70181afbe885f',
    link: 'https://archive.org/download/Neko-Void/nekovoid-niri-20260905.iso',
    status: 'available',
    description: 'Modern Wayland setup for advanced users.'
  },
  {
    name: 'Neko Void IceWM & JWM',
    type: 'liveIso',
    checksum: '3c1fda45e5eb968e76852254d07fae050f9861daa6f728339e4c60f1b69a1287',
    link: 'https://huggingface.co/arepaconcafe/neko-base/resolve/main/nekovoid-lts-icejwm-20260822.iso',
    status: 'available',
    description: 'Low-resource edition for old or limited hardware.'
  }
];
</script>

<template>
  <div class="downloads-container">
    <div v-for="edition in editions" :key="edition.name" class="download-row">
      <div class="info-group">
        <div class="text-group">
          <h3 class="edition-name">
            {{ edition.name }}
            <span v-if="edition.recommended" class="recommended-badge">
              ★ {{ t.recommended }}
            </span>
          </h3>
          <p v-if="edition.description" class="edition-description">{{ edition.description }}</p>
        </div>
        
        <div class="tags-group">
          <span class="edition-type">{{ t[edition.type] }}</span>
          <span 
            v-if="edition.checksum" 
            class="edition-checksum" 
            :title="t.checksum + ' (SHA256): ' + edition.checksum"
          >
            SHA256: {{ edition.checksum.substring(0, 16) }}...
          </span>
        </div>
      </div>
      
      <div class="action-group">
        <template v-if="edition.status === 'available' && edition.link">
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
  border-radius: 0;
  transition: all 0.3s ease;
}

.download-row:hover {
  background-color: var(--vp-c-bg-soft);
  border-color: rgba(255, 255, 255, 0.2);
}

.info-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.text-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.edition-name {
  margin: 0 !important;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.edition-description {
  margin: 0;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  line-height: 1.4;
}

.tags-group {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.edition-type {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  background: rgba(255, 255, 255, 0.05);
  padding: 4px 12px;
  border: 1px solid var(--vp-c-divider);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.recommended-badge {
  display: inline-flex;
  align-items: center;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  padding: 2px 8px;
  border-radius: 0;
  border: 1px solid var(--vp-c-brand-1);
}

.edition-checksum {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  font-family: monospace;
  cursor: help;
  padding: 4px 8px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--vp-c-divider);
}

.action-group {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
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
  border-radius: 0;
}

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

@media (max-width: 768px) {
  .download-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 16px;
  }
  
  .info-group {
    width: 100%;
  }

  .text-group {
    margin-bottom: 8px;
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
