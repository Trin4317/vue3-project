<script>
// using mixins	
import flash from "@/mixins/flash";

export default {
	mixins: [flash]
}
</script>

<template>
  <div>
    <p>
    	<button @click="flash('Oh hey again!')">Click me</button>
    </p>
  </div>
</template>