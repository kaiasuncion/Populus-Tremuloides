<template>
  <div>
    <ul>
      <li v-for="image in images" :key="image">
        <img :src="image" alt="Image in gallery" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
ul {
  height: 50vh;
  border-bottom: 0.25rem solid var(--border-color);
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  li {
    border-top: 0.25rem solid var(--border-color);
    &:first-child {
      border-top: none;
    }
  }
  @screen md {
    height: 80vh;
    overflow: scroll;
    border-right: 0.25rem solid var(--border-color);
    border-bottom: none;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
