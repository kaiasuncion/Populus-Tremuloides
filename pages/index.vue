<template>
  <div>
    <div class="hero-area">
      <div class="hero-text">
        <h1>{{ homeContent.heading }}</h1>
        <p>{{ homeContent.paragraph01 }}</p>
      </div>
      <img :src="homeContent.hero_image" alt="hero image" />
    </div>
    <Recent />
    <div class="section-two">
      <div class="block-wrapper">
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
          incidunt quaerat recusandae odit debitis suscipit soluta, autem nam,
          inventore inventore exercitationem odio dolor ab cumque harum nobis
          nihil perspiciatis reprehenderit dolore?
        </p>
      </div>
      <div class="block-wrapper">
        <h2>Ipsum Lorem</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius id
          veritatis cum quaerat vel ipsa necessitatibus similique atque quos
          incidunt eligendi enim natus explicabo rem, optio quibusdam corrupti
          unde. Incidunt.
        </p>
      </div>
      <div class="block-wrapper">
        <h2>Sit Amet</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          consequatur obcaecati, deleniti debitis dignissimos ipsa magnam? Sint
          dolores, reprehenderit incidunt iusto esse tempora consequuntur alias,
          assumenda voluptatibus vitae, ducimus sit.
        </p>
      </div>
    </div>
    <Featured />
    <div class="section-three">
      <div class="section-three-wrapper">
        <h3>Lorem Ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          auctor, mauris eu porttitor sodales, lorem erat porttitor sem, quis
          lobortis tellus metus vel elit. Mauris vitae lobortis velit. Phasellus
          in neque tempus, rhoncus dui eget, commodo sapien. Curabitur luctus,
          neque ullamcorper finibus maximus, nunc felis imperdiet sapien, et
          varius nulla diam ac lectus. Cras sollicitudin tortor id metus
          porttitor iaculis at sed elit. Nullam venenatis laoreet urna, sed
          efficitur massa blandit nec. Morbi eleifend nisi tincidunt arcu
          iaculis semper ut non nisl. Sed ac dui suscipit magna commodo cursus.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Curabitur eget sagittis erat. Cras nec purus
          viverra, pretium urna ac, finibus enim. Nullam quis dapibus nunc.
          Fusce imperdiet hendrerit tristique. Sed molestie velit at porta
          pellentesque. Nullam dolor tortor, tempor ac diam vitae, semper cursus
          mauris. Sed arcu justo, efficitur in pellentesque sit amet, pharetra
          quis lectus. Duis ut sodales lacus. Nullam ac sodales lorem. Mauris
          tempor sodales dolor non dictum. Aliquam hendrerit, enim eu tincidunt
          condimentum, risus mi pulvinar leo, ut tempus mauris nisi vel augue.
          Morbi ac arcu quis velit cursus ullamcorper eu vel lorem. Vivamus
          vestibulum accumsan quam, fermentum luctus massa faucibus at.
        </p>
      </div>
      <div class="gallery-container">
        <ul class="gallery-wrapper">
          <li v-for="image in homeContent.home_gallery" :key="image">
            <img :src="image" alt="Gallery image" />
          </li>
        </ul>
      </div>
    </div>
    <BestSellers />
  </div>
</template>

<script lang="ts">
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const { $content, error } = useContext()
    const homeContent: object = useAsync(
      async () => await $content('data/HomePage').fetch()
    )
    if (!homeContent) {
      return error({ statusCode: 404, message: 'Content Not Found' })
    }
    return { homeContent }
  },
})
</script>
