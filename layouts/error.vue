<template>
  <div class="error-container">
    <div>
      <h1>Error: {{ error.statusCode }}, {{ error.message }}</h1>
      <NuxtLink to="/">Return Home</NuxtLink>
    </div>
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
