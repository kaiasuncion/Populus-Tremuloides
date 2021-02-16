<template>
  <div class="category-container">
    <div class="category-sidebar">
      <h1>{{ categories.heading }}</h1>
    </div>
    <ul class="category-card-holder">
      <li v-for="category in categories.category" :key="category.path">
        <NuxtLink :to="`shop/${category.path}`" class="category-card">
          <img :src="category.image" :alt="category.title" />
          <div>
            <h2>{{ category.title }}</h2>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, error }) {
    const categories = await $content('data/Categories')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Content Not Found' })
      })

    return { categories }
  },
})
</script>

<style lang="scss" scoped>
@import '~/assets/styles/variables/mixins.scss';
h1 {
  text-align: center;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 0.25rem var(--border-color);
}
.category-card-holder {
  justify-content: space-evenly;
  margin-bottom: 1rem;
  @include small {
    display: flex;
    flex-flow: row wrap;
  }
  li {
    position: relative;
    height: 40vh;
    border-top: 0.25rem solid var(--border-color);
    &:last-child {
      border-bottom: 0.25rem solid var(--border-color);
    }
    @include small {
      width: 30rem;
      border: 0.25rem solid var(--border-color);
      margin: 1rem 0.5rem;
    }
    .category-card {
      img {
        position: absolute;
        object-fit: cover;
        height: 100%;
        width: 100%;
        z-index: -1;
      }
      div {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        background-color: var(--overlay-color);
        padding: 1rem;
        color: white;
        height: 100%;
        transition: 0.4s ease-out;
        h2 {
          text-align: center;
          font-size: 2rem;
          color: white;
        }
      }
      &:hover {
        div {
          background-color: var(--overlay-color-hover);
        }
      }
    }
  }
}
</style>
