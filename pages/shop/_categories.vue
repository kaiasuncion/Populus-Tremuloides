<template>
  <div>
    {{ category }}
    <!-- <ul v-for="listing in category.category" :key="listing.title">
      <li>
        {{ listing.slug }}
        <NuxtLink :to="`shop/${listing.path}`">
          <h1>{{ listing.title }}</h1>
          <p>{{ listing.path }}</p>
          <img :src="listing.image" :alt="listing.title" />
        </NuxtLink>
      </li>
    </ul> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  async asyncData({ $content, params }) {
    const CatPath = params.categories
    console.log(CatPath)
    const category = await $content('products', CatPath, { deep: true })
      .without('body')
      .fetch()

    return { category }
  },
})
</script>

<style lang="scss" scoped>
img {
  height: 50px;
}
</style>
