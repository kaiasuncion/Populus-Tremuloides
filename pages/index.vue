<template>
  <div>
    <div class="hero-area">
      <div class="hero-text">
        <h1>{{ homeContent.heading }}</h1>
        <p>{{ homeContent.paragraph01 }}</p>
        <NuxtLink to="/shop">
          <button aria-label="shop" class="main-button">Shop</button>
        </NuxtLink>
      </div>
      <img :src="homeContent.hero_image" alt="hero image" />
    </div>
    <!-- new products -->
    <ProductFeature :products="recentlyAdded" />
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
    <Banner />
    <!-- featured -->
    <ProductFeature :products="featuredProducts" />
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
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  async asyncData({ $content, error }) {
    const recentlyAdded = await $content('products', { deep: true })
      .without('body')
      .sortBy('createdAt', 'desc')
      .limit(6)
      .fetch()
    const featuredProducts = await $content('products', { deep: true })
      .without('body')
      .where({ tags: { $contains: 'Featured' } })
      .limit(3)
      .fetch()
    const homeContent = await $content('data/HomePage')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Content Not Found' })
      })

    return {
      recentlyAdded,
      featuredProducts,
      homeContent,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '~/assets/styles/variables/mixins.scss';
.hero-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  max-height: 100vh;
  margin-bottom: 4rem;
  @include large {
    flex-direction: row;
    img {
      width: 50vw;
    }
  }
  .hero-text {
    width: 100%;
    position: absolute;
    padding: 1rem;
    background-color: var(--overlay-color);
    border-top: 0.25rem solid var(--border-color);
    border-bottom: 0.25rem solid var(--border-color);
    .hero-wrapper {
      position: relative;
    }
    @include small {
      padding: 2rem;
    }
    @include large {
      position: relative;
      width: 50vw;
      background-color: var(--bg);
      padding: 2rem;
    }
  }
  h1 {
    max-width: 450px;
    margin: auto;
    color: white;
    font-size: 2.5rem;
    font-weight: bold;
    @include large {
      color: var(--color);
    }
  }
  p {
    color: white;
    margin: auto;
    max-width: 450px;
    @include large {
      color: var(--color);
    }
  }
  .main-button {
    margin: 1rem auto;
  }
  img {
    min-height: 70vh;
    object-fit: cover;
    z-index: -1;
    border-bottom: 0.25rem solid var(--border-color);
    @include large {
      border-left: 0.25rem solid var(--border-color);
    }
  }
}
.section-two {
  margin-bottom: 2rem;
  @include large {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .block-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    margin-bottom: 1rem;
    border: 0.25rem solid var(--border-color);
    h2 {
      font-size: 2rem;
    }
    @include large {
      max-width: 30vw;
      height: 500px;
    }
  }
}
.section-three {
  border-top: 0.25rem solid var(--border-color);
  border-bottom: 0.25rem solid var(--border-color);
  @include medium {
    display: flex;
    flex-direction: row-reverse;
  }
  .gallery-container {
    border-top: 0.25rem solid var(--border-color);
    @include medium {
      border-top: none;
      border-right: 0.25rem solid var(--border-color);
      width: 50%;
    }
    @include xl {
      height: 80vh;
      overflow: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .gallery-wrapper {
      background-color: var(--border-color);
      columns: 2;
      gap: 0.25rem;
      @include large {
        columns: 2;
      }
      img {
        width: 100%;
        border-bottom: 0.25rem solid var(--border-color);
      }
    }
  }
  .section-three-wrapper {
    padding: 2rem;
    margin: auto;
    @include medium {
      width: 50%;
    }
    h3 {
      font-size: 2rem;
    }
  }
}
</style>
