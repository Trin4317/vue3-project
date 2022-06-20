<script setup>

import QuizFooterLinks from "@/components/Quiz/QuizFooterLinks.vue";

defineProps({
	quiz: Object
});

</script>

<template>
	<footer>
		<h2 style="margin-top: 10px;">Quiz Footer</h2>

		<QuizFooterLinks :quiz="quiz" />
	</footer>
</template>