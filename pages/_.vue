<template>
  <div class="product-container">
    <img :src="product.product_image" :alt="product.title" />
    <div>
      <h1>{{ product.title }}</h1>
      <p>{{ product.short_description }}</p>
      <p>{{ product.product_price }}</p>
      <button
        class="snipcart-add-item add-to-cart"
        :data-item-id="product.id"
        :data-item-name="product.title"
        :data-item-price="product.product_price"
        :Description="product.short_description"
      >
        Buy Now
      </button>
      <nuxt-content :document="product" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const path = `/${params.pathMatch || 'index'}`
    const [product] = await $content({ deep: true }).where({ path }).fetch()
    if (!product) {
      return error({ statusCode: 404, message: 'Page not found - ' + path })
    }

    return {
      product,
      path,
    }
  },
}
</script>

<style lang="scss" scoped>
.product-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
}
</style>
