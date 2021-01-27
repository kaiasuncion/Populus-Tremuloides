<template>
  <button class="snipcart-checkout">
    <span class="snipcart-total-price"></span>
    <ShoppingCartIcon class="shopping-cart-icon" />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import ShoppingCartIcon from '@/assets/icons/shopping-cart.svg?inline'
export default Vue.extend({
  components: {
    ShoppingCartIcon,
  },
})
</script>

<style scoped>
.shopping-cart-icon {
  height: 4rem;
  fill: var(--color-primary);
}
</style>
