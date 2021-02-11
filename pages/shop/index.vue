<template>
  <div>
    <h1>{{ categories.heading }}</h1>
    <ul v-for="category in categories.category" :key="category.index">
      <li>
        <NuxtLink :to="`shop/${category.path}`">
          {{ category.title }}
        </NuxtLink>
      </li>
    </ul>
    <ul v-for="category in categories.category" :key="category.title">
      <li>
        {{ category.slug }}
        <NuxtLink :to="`shop/${category.path}`">
          <h1>{{ category.title }}</h1>
          <p>{{ category.path }}</p>
          <img
            :src="category.image"
            :alt="category.title"
            height="100%"
            width="100%"
          />
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
li {
  border-bottom: 0.25rem solid black;
}
</style>
