<script setup>
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMemberTable from "@/components/Teams/TeamMemberTable.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";
import { useTeamStore } from "@/stores/teamStore";

let team = useTeamStore();
team.fill();
setTimeout(() => {
    team.grow(20)
}, 2000);
</script>

<template>
  <TeamHeader />

  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMemberTable />
  </div>
  
  <TeamFooter />
</template>
