<template>
  <div>
    <div
      id="snipcart"
      data-config-modal-style="side"
      :data-api-key="$config.apiSecret"
      hidden
    />
    <Navigation />
    <Nuxt class="pt-16" />
    <Email />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
