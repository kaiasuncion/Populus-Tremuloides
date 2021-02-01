<template>
  <div class="product-container">
    <img :src="product.product_image" :alt="product.title" />
    <div class="product-details">
      {{ customFields }}
      <!-- <ul>
        <li v-for="custom in product.custom_fields" :key="custom.title">
          {{custom.title}}
        </li>
      </ul> -->
      <div class="bottom-border">
        <h1>{{ product.title }}</h1>
        <p class="short-description">{{ product.short_description }}</p>
        <p class="product-price">
          {{
            Intl.NumberFormat('en', {
              style: 'currency',
              currency: 'USD',
            }).format(product.product_price)
          }}
        </p>
        <button
          aria-label="Add to cart"
          class="snipcart-add-item add-to-cart"
          :data-item-name="product.title"
          :data-item-id="product.product_id"
          :data-item-price="product.product_price"
          :data-item-url="`${$config.baseUrl}${path}`"
          :data-item-description="product.short_description"
          :data-item-image="product.product_image"
          v-bind="customFields"
        >
          Add to Cart
        </button>
      </div>
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
  computed: {
    customFields() {
      return this.product.custom_fields
        .map(({ title, required, options }) => ({
          name: title,
          required,
          options,
        }))
        .map((x, index) =>
          Object.entries(x).map(([key, value]) => ({
            [`data-item-custom${
              index + 1
            }-${key.toString().toLowerCase()}`]: value,
          }))
        )
        .reduce((acc, curr) => acc.concat(curr), [])
        .reduce((acc, curr) => ({ ...acc, ...curr }))
    },
  },
}
</script>

<style lang="scss" scoped>
.product-container {
  border-block: 0.25rem solid var(--border-color);
  @screen md {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @screen lg {
    grid-template-columns: 2fr 1fr;
  }
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    max-height: 70vh;
    border-bottom: 0.25rem solid var(--border-color);
    @screen md {
      border-right: 0.25rem solid var(--border-color);
      border-bottom: none;
    }
  }
  h1 {
    text-align: center;
    font-size: 2rem;
    margin: 2rem;
  }
  p {
    text-align: center;
    margin: 2rem;
    &.short-description {
      font-size: 1.25rem;
    }
    &.product-price {
      font-size: 1.5rem;
    }
  }
  .add-to-cart {
    display: block;
    background-color: var(--button-color);
    color: var(--button-text);
    margin: 0 auto 2rem auto;
    border-radius: 0.5rem;
    padding: 1rem;
  }
}
</style>
