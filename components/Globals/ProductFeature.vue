<template>
  <ul class="featured-container">
    <li v-for="featured in products" :key="featured.path">
      <NuxtLink :to="`${featured.path}`" class="featured-wrapper">
        <img :src="featured.product_image" :alt="featured.title" />
        <div>
          <h2>{{ featured.title }}</h2>
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
import Vue from 'vue'

export default Vue.extend({
  props: {
    products: {
      type: Array,
      required: true,
      default: () => null,
    },
  },
})
</script>

<style lang="scss" scoped>
@import '~/assets/styles/variables/mixins.scss';
.featured-container {
  justify-content: space-evenly;
  margin-bottom: 2rem;
  @include small {
    display: flex;
    flex-flow: row wrap;
  }
  li {
    position: relative;
    height: 40vh;
    border-top: 0.25rem solid var(--border-color);
    &:last-child {
      border-bottom: 0.25rem solid var(--border-color);
    }
    @include small {
      width: 30vw;
      border: 0.25rem solid var(--border-color);
      margin-bottom: 1rem;
    }
    .featured-wrapper {
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
          text-align: center;
          font-size: 2rem;
          color: white;
        }
      }
      &:hover {
        div {
          background-color: var(--overlay-color-hover);
        }
      }
    }
  }
}
</style>
