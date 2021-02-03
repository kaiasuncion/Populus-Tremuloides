<template>
  <ul class="featured-container">
    <li v-for="featured in featuredProducts" :key="featured.path">
      <NuxtLink :to="`${featured.path}`" class="featured-wrapper">
        <img :src="featured.product_image" :alt="featured.title" />
        <div>
          <h2>{{ featured.title }}</h2>
          <p>{{ featured.short_description }}</p>
          <p>
            {{
              Intl.NumberFormat('en', {
                style: 'currency',
                currency: 'USD',
              }).format(featured.product_price)
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
    const featuredProducts = useAsync(
      async () =>
        await $content('products', { deep: true })
          .without('body')
          .where({ tags: { $contains: 'Featured' } })
          .limit(3)
          .fetch()
    )
    return { featuredProducts }
  },
})
</script>

<style lang="scss" scoped>
.featured-container {
  justify-content: space-evenly;
  @screen sm {
    display: flex;
    margin-bottom: 2rem;
  }
  li {
    position: relative;
    height: 50vh;
    border-top: 0.25rem solid var(--border-color);
    @screen sm {
      width: 30vw;
      border: 0.25rem solid var(--border-color);
    }
    .featured-wrapper {
      &:hover {
        div {
          background-color: var(--overlay-color-hover);
        }
      }
      img {
        position: absolute;
        object-fit: cover;
        height: 100%;
        width: 100%;
        z-index: -1;
      }
      div {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        background-color: var(--overlay-color);
        padding: 1rem;
        color: white;
        height: 100%;
        transition: 0.4s ease-out;
        h2 {
          font-size: 2rem;
          color: white;
        }
      }
    }
  }
}
</style>
