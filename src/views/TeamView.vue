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

  <Modal :show="showModal" @close="showModal = false">
    <template #header>
        <p>Need to add a new member to your team?</p>
    </template>
    <template #default>
        <form class="mt-6">
            <div class="flex gap-2">
                <input type="text" placeholder="Name" class="flex-1">
                <input type="email" placeholder="Email" class="flex-1">
                Active? <input type="checkbox">
                <button class="border">Add</button>
            </div>
        </form>
    </template>
  </Modal>
</template>
