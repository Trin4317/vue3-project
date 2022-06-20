<script setup>

import QuizHeader from "@/components/Quiz/QuizHeader.vue";
import QuizQuestion from "@/components/Quiz/QuizQuestion.vue";
import QuizFooter from "@/components/Quiz/QuizFooter.vue";
import { ref, provide } from "vue";

let props = defineProps({
	quiz: Object
});

let name = ref(props.quiz.name);

// after receiving quiz from HomeView, we provide the value of quiz.name to all Quiz's child components through the key 'quiz'
provide('quiz', {
	name,
	// to keep track of changes in reactivity data, we could define a rule/method where the only place that will handle the change is parent component
	changeQuizName: () => name.value = "Changed"
});

</script>

<template>
	<QuizHeader />

	<QuizQuestion /> 

	<QuizFooter />
</template>