<script setup>

// accepting v-model value from Parent component
defineProps({
	modelValue: String,
});

// emit the change to Parent component
let emit = defineEmits(['update:modelValue']);

function onTabPress(e) {
	let textarea = e.target; // will become textarea when pressing Tab inside the textarea node

	// get caret position/selection
	let val = textarea.value,
		start = textarea.selectionStart,
		end = textarea.selectionEnd;

	// set textarea value to: text before caret + tab + text after caret
	textarea.value = val.substring(0, start) + "\t" + val.substring(end);

	// put caret at right position again
	textarea.selectionStart = textarea.selectionEnd = start + 1;
}

</script>

<template>
	<textarea 
		@keydown.tab.prevent="onTabPress" 
		@keyup="emit('update:modelValue', $event.target.value)" 
		v-text="modelValue" 
	/>
</template>