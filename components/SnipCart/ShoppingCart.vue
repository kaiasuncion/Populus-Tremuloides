<template>
  <button class="snipcart-checkout flex items-center">
    <span class="snipcart-total-price mr-2"></span>
    <ShoppingCartIcon class="shopping-cart-icon h-8" />
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
  fill: var(--color-primary);
}
</style>
