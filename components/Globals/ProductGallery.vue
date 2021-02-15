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
@import '~/assets/styles/variables/mixins.scss';
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
    line-height: 0;
    border-top: 0.25rem solid var(--border-color);
    img {
      width: 100%;
      height: 100%;
      min-height: 50vh;
      object-fit: cover;
    }
    &:first-child {
      border-top: none;
    }
  }
  @include medium {
    height: 80vh;
    overflow: scroll;
    border-right: 0.25rem solid var(--border-color);
    border-bottom: none;
    img {
      object-fit: cover;
    }
  }
}
</style>
