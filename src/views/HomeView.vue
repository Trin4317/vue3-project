<script setup>

import TabbableTextarea from "@/components/TabbableTextarea.vue";
import { ref } from "vue";

// first we define a v-model in Parent component
// then we accept it as a prop in Child component
let comment = ref("test value");

</script>

<template>
  <main>
    <form>
    	<TabbableTextarea v-model="comment" style="width: 100%; height: 300px;" />
    </form>
  </main>
</template>
