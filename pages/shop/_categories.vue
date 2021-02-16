<template>
  <div>
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
