<template>
  <div>
    <h1>{{ $route.params.categories }}</h1>
    <ProductListing :products="category" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  async asyncData({ $content, params }) {
    const CatPath = params.categories
    const category = await $content('products', CatPath, { deep: true })
      .without('body')
      .fetch()

    return { category }
  },
})
</script>

<style scoped>
h1 {
  text-align: center;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 0.25rem var(--border-color);
}
</style>
