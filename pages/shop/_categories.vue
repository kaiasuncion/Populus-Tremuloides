<template>
  <div>
    <div>
      <h1>{{ categories.heading }}</h1>
      <p>{{ categories.description }}</p>
    </div>
    <div v-for="category in categories.category" :key="category.slug">
      {{ category.slug }}
      <NuxtLink :to="'shop/categories/' + category.path">
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
    const { $content, params } = useContext()
    const path: string = params.value.categories
    console.log(path)
    const categories = useAsync(
      async () => await $content('data/Categories').fetch()
    )
    return { categories }
  },
})
</script>

<style lang="scss" scoped>
img {
  height: 50px;
}
</style>
