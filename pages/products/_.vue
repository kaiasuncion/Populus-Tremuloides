<template>
  <div v-if="product[0]">
    <img :src="product[0].product_image" :alt="product[0].title" />
    <h1>{{ product[0].title }}</h1>
    <p>{{ product[0].product_price }}</p>
    <nuxt-content :document="product[0]" />
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
    const path = `${route.value.path || 'index'}`
    const product = useAsync(
      async () =>
        await $content('products', productRoute, { deep: true })
          .where({ path })
          .fetch()
    )
    if (!product || product === undefined || null) {
      return error({ statusCode: 404, message: 'Product Not Found' })
    }
    return { product }
  },
})
</script>
