<script setup>
// using composables
import { useFlash } from "@/composables/useFlash";

let { flash } = useFlash();

// without using setup macro
// export default {
// 	setup() {
// 		let { flash } = useFlash();

// 		return { flash };
// 	}
// }

</script>

<template>
  <main>
    <p>
    	<button @click="flash('Oh hey!')">Click me</button>
    </p>
  </main>
</template>
