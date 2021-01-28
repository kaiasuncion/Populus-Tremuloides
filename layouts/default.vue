<template>
  <div>
    <div>
      <div
        id="snipcart"
        data-config-modal-style="side"
        :data-api-key="$config.apiSecret"
        hidden
      />
      <ShoppingCart />
      <Nuxt />
    </div>
    <Email />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
