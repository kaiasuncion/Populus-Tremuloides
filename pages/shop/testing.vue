<template>
  <div>
    <!-- <label>Frame color</label>
    <select id="frame_color">
      <option value="Black">Black</option>
      <option value="Brown">Brown</option>
      <option value="Gold">Gold</option>
    </select> -->
    <select id="frame_color">
      <option v-for="item in testList" :key="item" :value="item">
        {{ item }}
      </option>
    </select>
    <button
      id="starry-night"
      class="snipcart-add-item"
      data-item-id="starry-night"
      data-item-price="79.99"
      data-item-url="/paintings/starry-night"
      data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
      data-item-image="/assets/images/starry-night.jpg"
      data-item-name="The Starry Night"
      data-item-custom1-name="Frame color"
      data-item-custom1-options="Blue|Red|Pink[200]"
      data-item-custom2-name="Gift note"
    >
      Add to cart
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      testList: ['Blue', 'Red', 'Pink'],
    }
  },
  mounted() {
    const button = document.querySelector('#starry-night')
    const select = document.querySelector('#frame_color')
    select.addEventListener('change', () => {
      // Sets the default frame color when adding the item
      button.setAttribute('data-item-custom1-value', select.value)
    })
  },
})
</script>
