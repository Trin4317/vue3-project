<script setup>
import { state } from "@/stores/quizStore";

</script>

<template>
	<div style="margin-top: 10px;">
		<h5>{{ state.name }}</h5>
		<button @click="state.name ='A new name'">Change Quiz Name</button>
		<ul>
			<li><a href="#">Get a Job</a></li>
			<li><a href="#">Contact Us</a></li>
		</ul>
	</div>
</template>