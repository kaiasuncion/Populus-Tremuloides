<template>
  <div class="container-list">
    <div
      v-for="product in product"
      :key="product.index"
      class="container-details"
    >
      <img :src="product.product_image" :alt="product.title" />
      <div>
        <h1>{{ product.title }}</h1>
        <p>{{ product.short_description }}</p>
        <p>${{ product.product_price }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $content, error } = useContext()
    const product = useAsync(
      async () =>
        await $content('products', { deep: true })
          .only([
            'title',
            'short_description',
            'product_image',
            'product_price',
          ])
          .fetch()
    )
    if (!product || product === undefined || null) {
      return error({ statusCode: 404, message: 'Product Not Found' })
    }
    return { product }
  },
})
</script>

<style lang="scss" scoped>
.container-list {
  width: 100%;
}
.container-details {
  display: grid;
  grid-row: 2;
  grid-template-rows: 300px 1fr;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
  }
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1.5rem;
  }
}
</style>
