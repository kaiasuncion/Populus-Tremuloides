<template>
  <ul class="best-seller-container">
    <li v-for="product in products" :key="product.path">
      <NuxtLink :to="`${product.path}`" class="best-seller-wrapper">
        <img :src="product.product_image" :alt="product.title" />
        <div>
          <h4>{{ product.title }}</h4>
          <p>{{ product.short_description }}</p>
          <p>
            {{
              Intl.NumberFormat('en', {
                style: 'currency',
                currency: 'USD',
              }).format(product.product_price)
            }}
          </p>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, useContext, useAsync } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $content } = useContext()
    const products = useAsync(
      async () =>
        await $content('products', { deep: true })
          .without('body')
          .where({ tags: { $contains: 'Best Seller' } })
          .limit(4)
          .fetch<any>()
    )
    return { products }
  },
})
</script>

<style lang="scss" scoped>
@import '~/assets/styles/variables/mixins.scss';
.best-seller-container {
  @include medium {
    display: flex;
    flex-flow: row wrap;
  }
  li {
    border-bottom: 0.25rem solid var(--border-color);
    @include medium {
      width: 50%;
      border-right: 0.25rem solid var(--border-color);
      &:nth-child(even) {
        border-right: none;
      }
    }
    .best-seller-wrapper {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      transition: 0.4s ease-out;
      img {
        width: 100%;
        object-fit: cover;
        height: 100%;
        border-right: 0.25rem solid var(--border-color);
        transition: 0.5s ease-out;
      }
      div {
        padding: 1rem;
        transition: 0.5s ease;
      }
      h4 {
        font-size: 2rem;
      }
      &:hover {
        background-color: var(--color);
        color: var(--bg);
        img {
          filter: grayscale(75%);
        }
        h4 {
          color: var(--bg);
        }
      }
    }
  }
}
</style>
