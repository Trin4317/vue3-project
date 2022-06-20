<script setup>

defineProps({
	quiz: Object
});

</script>

<template>
	<div style="margin-top: 10px;">
		<h5>{{ quiz.name }}</h5>

		<ul>
			<li><a href="#">Get a Job</a></li>
			<li><a href="#">Contact Us</a></li>
		</ul>
	</div>
</template>