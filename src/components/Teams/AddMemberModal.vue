<template>
    <button
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        :disabled="! team.spotsRemaining"
        @click="showModal = true"
    >Add Member ({{ team.spotsRemaining }} Spots Left)</button>

    <Teleport to="body">
        <Modal :show="showModal" @close="showModal = false">
            <template #header>
                <p>Need to add a new member to your team?</p>
            </template>
            <template #default>
                <form class="mt-6">
                    <div class="flex gap-2">
                        <input type="text" placeholder="Name" class="flex-1" />
                        <input type="email" placeholder="Email" class="flex-1" />
                        Active?
                        <input type="checkbox" />
                        <button class="border">Add</button>
                    </div>
                </form>
            </template>
        </Modal>
    </Teleport>
</template>

<script setup>
import Modal from "@/components/Modal.vue";
import { useTeamStore } from "@/stores/teamStore";
import { ref } from "vue";

let team = useTeamStore();
let showModal = ref(false);
</script>