import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import RelatedLinks from './components/RelatedLinks.vue'
import CommunityCard from './components/CommunityCard.vue'
import ContentsToggle from './components/ContentsToggle.vue'
import FlatpakButton from './components/FlatpakButton.vue'
import MinecraftButton from './components/MinecraftButton.vue'
import DownloadOptions from './components/DownloadOptions.vue'
import ImageModal from './components/ImageModal.vue'
import TextSizeControl from './components/TextSizeControl.vue'
import './style.css'

export default {
    extends: DefaultTheme,
    Layout: Layout,
    enhanceApp({ app }: { app: any }) {
        app.component('RelatedLinks', RelatedLinks)
        app.component('CommunityCard', CommunityCard)
        app.component('ContentsToggle', ContentsToggle)
        app.component('FlatpakButton', FlatpakButton)
        app.component('MinecraftButton', MinecraftButton)
        app.component('DownloadOptions', DownloadOptions)
        app.component('ImageModal', ImageModal)
        app.component('TextSizeControl', TextSizeControl)
    }
}
