---
layout: page
---

<script setup>
import { VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme'
import members from './team-data.json'
</script>

<VPTeamPageTitle>
  <template #title>Our Team</template>
  <template #lead>Meet the developers, designers, and contributors who dedicate their time to making Neko Void possible.</template>
</VPTeamPageTitle>

<VPTeamMembers size="small" :members="members" />
