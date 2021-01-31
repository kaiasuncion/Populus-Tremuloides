<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.path">
        <NuxtLink :to="`${product.path}`" class="product-container">
          <img :src="product.product_image" :alt="product.title" />
          <div>
            <h1>{{ product.title }}</h1>
            <p>{{ product.short_description }}</p>
            <p>${{ product.product_price }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, useAsync } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $content } = useContext()
    const products = useAsync(
      async () => await $content('products', { deep: true }).fetch<any>()
    )
    return { products }
  },
})
</script>

<style lang="scss" scoped>
ul {
  @screen sm {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .product-container {
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-bottom: 0.25rem solid black;
    }

    display: grid;
    grid-template-rows: 45vh 100%;
    border-bottom: 0.25rem solid black;
  }
}
</style>
