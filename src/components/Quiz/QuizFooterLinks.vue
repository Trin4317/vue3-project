<script setup>

import { inject } from "vue";

// child component of Quiz can inject the data provided by parent component based on the key
let name = inject('quiz');

</script>

<template>
	<div style="margin-top: 10px;">
		<h5>{{ name }}</h5>

		<ul>
			<li><a href="#">Get a Job</a></li>
			<li><a href="#">Contact Us</a></li>
		</ul>
	</div>
</template>