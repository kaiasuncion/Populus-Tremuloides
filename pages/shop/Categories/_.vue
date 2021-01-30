<template>
  <div v-if="products">
    <div v-for="product in products" :key="product.slug + product.index">
      <img :src="product.product_image" :alt="product.title" />
      <h1>{{ product.title }}</h1>
      <p>{{ product.product_price }}</p>
      <nuxt-content :document="product" />
    </div>
  </div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>hmmm . . .</div>
</template>

<script lang="ts">
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $content, route, error } = useContext()
    const productRoute: string = route.value.params.slug

    // deep option and file name _.vue allows dynamic content and routing
    const path: string = `${route.value.params.pathMatch || 'index'}`
    console.log('SLUG', route.value.params.slug)
    console.log('PATH', path)
    console.log('PATH MATCH', route.value.params.pathMatch)
    console.log('PRODUCT ROUTE', productRoute)
    // const product = useAsync(
    //   async () =>
    //     await $content('products', productRoute, { deep: true })
    //       .where({ path })
    //       .fetch()
    // )
    const products: object = useAsync(
      async () =>
        await $content('products', path, { deep: true })
          .without(['body'])
          .fetch()
    )
    if (!products || products === undefined || null) {
      return error({ statusCode: 404, message: 'Product Not Found' })
    }
    console.log(products)
    return { products }
  },
})
</script>
