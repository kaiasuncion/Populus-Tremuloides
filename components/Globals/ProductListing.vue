<template>
  <ul class="recent-container">
    <li v-for="listing in products" :key="listing.path">
      <NuxtLink :to="`${listing.path}`" class="recent-wrapper">
        <img :src="listing.product_image" :alt="listing.title" />
        <div>
          <h2>{{ listing.title }}</h2>
          <p>
            {{
              Intl.NumberFormat('en', {
                style: 'currency',
                currency: 'USD',
              }).format(listing.product_price)
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
.recent-container {
  justify-content: space-evenly;
  @include small {
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 2rem;
  }
  li {
    position: relative;
    height: 40vh;
    border-top: 0.25rem solid var(--border-color);
    @include small {
      width: 30vw;
      border: 0.25rem solid var(--border-color);
      margin-bottom: 1rem;
    }
    .recent-wrapper {
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
      &:hover {
        div {
          background-color: var(--overlay-color-hover);
        }
      }
    }
  }
}
</style>
