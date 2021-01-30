<template>
  <div>
    <div>
      <h1>{{ categories.heading }}</h1>
      <p>{{ categories.description }}</p>
    </div>
    <div
      v-for="category in categories.category"
      :key="category + categories.index"
    >
      <NuxtLink :to="'categories/' + category.path">
        <h1>{{ category.title }}</h1>
        <p>{{ category.path }}</p>
        <img :src="category.image" :alt="category.title" />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $content, error } = useContext()
    const categories = useAsync(
      async () => await $content('data/Categories').fetch()
    )
    if (!categories || categories === undefined || null) {
      return error({ statusCode: 404, message: 'Category Not Found' })
    }
    return { categories }
  },
})
</script>
