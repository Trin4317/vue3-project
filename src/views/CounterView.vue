<script setup>
import { useCounterStore } from "@/stores/counterStore"

let counter = useCounterStore();
</script>

<template>
  <div>
    <h1>{{ counter.count }}</h1>

    <button 
      @click="counter.increment()"
      :disabled="! counter.remaining"
    >Increment ({{ counter.remaining }} remaining)</button>
  </div>
</template>