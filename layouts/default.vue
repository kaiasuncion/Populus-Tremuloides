<template>
  <div class="container">
    <div
      id="snipcart"
      data-config-modal-style="side"
      :data-api-key="$config.apiSecret"
      hidden
    />
    <ShoppingCart />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.container {
  @apply h-screen mx-auto;
}
</style>
