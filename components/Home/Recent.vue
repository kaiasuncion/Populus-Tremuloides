<template>
  <ul class="recent-container">
    <li v-for="recent in recentProducts" :key="recent.path">
      <NuxtLink :to="`${recent.path}`" class="recent-wrapper">
        <img :src="recent.product_image" :alt="recent.title" />
        <div>
          <h2>{{ recent.title }}</h2>
          <p>
            {{
              Intl.NumberFormat('en', {
                style: 'currency',
                currency: 'USD',
              }).format(recent.product_price)
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
    const recentProducts = useAsync(
      async () =>
        await $content('products', { deep: true })
          .without('body')
          .sortBy('createdAt', 'desc')
          .limit(6)
          .fetch()
    )
    return { recentProducts }
  },
})
</script>

<style lang="scss" scoped>
.recent-container {
  justify-content: space-evenly;
  @screen sm {
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 2rem;
  }
  li {
    position: relative;
    height: 40vh;
    border-top: 0.25rem solid var(--border-color);
    @screen sm {
      width: 30vw;
      border: 0.25rem solid var(--border-color);
      margin-bottom: 1rem;
    }
    .recent-wrapper {
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
