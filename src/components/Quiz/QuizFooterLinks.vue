<script setup>

import { inject } from "vue";

// child component of Quiz can inject the data provided by parent component based on the key
let { name, changeQuizName } = inject('quiz');

</script>

<template>
	<div style="margin-top: 10px;">
		<!-- child component change the data by calling the method provided by parent component -->
		<button @click="changeQuizName">{{ name }}</button>

		<ul>
			<li><a href="#">Get a Job</a></li>
			<li><a href="#">Contact Us</a></li>
		</ul>
	</div>
</template>