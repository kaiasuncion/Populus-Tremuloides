<template>
  <button class="snipcart-checkout shopping-cart">
    <span class="snipcart-total-price"></span>
    <ShoppingCartIcon class="shopping-cart-icon" />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import ShoppingCartIcon from '@/assets/icons/shopping-cart-blocky.svg?inline'
export default Vue.extend({
  components: {
    ShoppingCartIcon,
  },
})
</script>

<style scoped>
.shopping-cart {
  display: flex;
  flex-flow: row;
  align-items: flex-end;
}
.shopping-cart-icon {
  height: 2rem;
  fill: var(--color-primary);
  margin: 0 auto;
  display: inline;
}

/* cheap fix */
.st0 {
  fill: none;
  stroke: var(--color);
  stroke-width: 3;
  stroke-miterlimit: 10;
}
</style>
