<script setup>
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMemberTable from "@/components/Teams/TeamMemberTable.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";
import { useTeamStore } from "@/stores/teamStore";
import Modal from "@/components/Modal.vue";
import { ref } from "vue";

let team = useTeamStore();
team.fill();

let showModal = ref(false);
</script>

<template>
  <TeamHeader @add="showModal = true" />

  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMemberTable />
  </div>
  
  <TeamFooter />

  <Modal :show="showModal" @close="showModal = false" />
</template>
