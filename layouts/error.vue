<template>
  <div class="error-wrapper">
    <h1 class="text-3xl">Error: {{ error.statusCode }}, {{ error.message }}</h1>
    <NuxtLink to="/">Return Home</NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    error: {
      type: Object,
      default: () => null,
    },
  },
})
</script>

<style lang="scss" scoped>
.error-wrapper {
  margin: 0;
}
</style>
