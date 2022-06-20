<script setup>

import QuizHeader from "@/components/Quiz/QuizHeader.vue";
import QuizQuestion from "@/components/Quiz/QuizQuestion.vue";
import QuizFooter from "@/components/Quiz/QuizFooter.vue";
import { provide } from "vue";

let props = defineProps({
	quiz: Object
});

// after receiving quiz from HomeView, we provide the value of quiz.name to all Quiz's child components through the key 'quiz'
provide('quiz', props.quiz.name);

</script>

<template>
	<QuizHeader />

	<QuizQuestion /> 

	<QuizFooter />
</template>