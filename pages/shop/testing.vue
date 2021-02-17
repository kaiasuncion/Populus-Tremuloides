<template>
  <div>
    <select id="color">
      <option>Black</option>
      <option>Brown</option>
      <option>Gold</option>
    </select>

    <button
      class="buy-button snipcart-add-item"
      data-item-quantity="1"
      data-item-id="RZ-SN"
      data-item-name="Starry Night"
      data-item-price="79.95"
      data-item-image="https://demo.snipcart.com/assets/images/starry-night.jpg"
      data-item-url="https://demo.snipcart.com/"
      data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
      data-item-custom1-name="Frame color"
      data-item-custom1-options="Black|Brown|Gold[+300.00]"
    >
      Buy 1 physical copy ($79.95)
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted() {
    const select = document.getElementById('color')
    select.addEventListener('change', function () {
      document.querySelector('.snipcart-add-item').dataset.itemCustom1Value =
        select.value
    })
  },
})
</script>
