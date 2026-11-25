---
layout: page
---

<script setup>
import { VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme'
import members from './team-data.json'
</script>

<VPTeamPageTitle>
  <template #title>Nuestro Equipo</template>
  <template #lead>Conoce a los desarrolladores, diseñadores y colaboradores que dedican su tiempo para hacer posible Neko Void.</template>
</VPTeamPageTitle>

<VPTeamMembers size="small" :members="members" />

<section class="related-links">

## Véase también <span class="related-links-kaomoji" aria-hidden="true">(˵ •̀ ᴗ - ˵ )</span> {#vease-tambien}

- [Sobre Neko Void](/es/about/)
- [Misión](/es/about/mission)
- [Valores de la comunidad](/es/about/community-values)

</section>
