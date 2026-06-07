import DefaultTheme from 'vitepress/theme'
import CommunityCard from './components/CommunityCard.vue'
import FlatpakButton from './components/FlatpakButton.vue'
import MinecraftButton from './components/MinecraftButton.vue'
import DownloadOptions from './components/DownloadOptions.vue'
import { inject } from '@vercel/analytics'
import './style.css'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }: { app: any }) {
        app.component('CommunityCard', CommunityCard)
        app.component('FlatpakButton', FlatpakButton)
        app.component('MinecraftButton', MinecraftButton)
        app.component('DownloadOptions', DownloadOptions)
        inject()
    }
}
