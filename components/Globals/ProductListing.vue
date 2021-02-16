<template>
  <ul class="listing-container">
    <li v-for="listing in products" :key="listing.path">
      <NuxtLink :to="`${listing.path}`">
        <img
          :src="listing.product_image"
          :alt="listing.title"
          height="70%"
          width="100%"
        />
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
.listing-container {
  justify-content: space-evenly;
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 2rem;
  li {
    height: 45rem;
    width: 30rem;
    margin: 1rem;
    text-align: center;
    border: 0.25rem solid var(--border-color);
    transition: 0.4s ease-out;
    img {
      object-fit: cover;
      border-bottom: 0.25rem solid var(--border-color);
    }
    div {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      height: 30%;
    }
    &:hover {
      background-color: var(--border-color);
      div {
        color: var(--bg);
        h2 {
          color: var(--bg);
        }
      }
    }
  }
}
</style>
