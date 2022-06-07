<script setup>
	import { ref, watch } from "vue";
	import { useStorage } from "@/composables/useStorage";

	let food = useStorage('food', 'salad');

	let age = useStorage('age');

	let obj = useStorage('obj', { one: 'one'});

	setTimeout(() => {
		obj.value.one = 'changed';
	}, 3000);

	// inline script
	// let food = ref(localStorage.getItem('food'));
	// let age = ref(localStorage.getItem('age'));

	// watch(food, (val) => {
	// 	write('food', val);
	// });

	// watch(age, (val) => {
	// 	write('age', val);
	// });

	// function write(key, val) {
	// 	localStorage.setItem(key, val);
	// }

	// setTimeout(() => {
	// 	food.value = 'shrimp';
	// }, 2000);

</script>

<template>
  <main>
    <p>
    	What is your favorite foods? <input type="text" v-model="food">
    </p>

    <p>
    	How old are you? <input type="text" v-model="age">
    </p>
  </main>
</template>
