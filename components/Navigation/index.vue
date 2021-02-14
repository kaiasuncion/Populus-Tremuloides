<template>
  <nav :class="{ 'navbar--hidden': !showNavBar }">
    <NuxtLink class="brand-logo" to="/">
      <Logo class="brand-logo" />
    </NuxtLink>
    <ShoppingCart class="nav-cart" />
    <button
      aria-label="menu button"
      class="hamburger-icon"
      :class="menuOpen ? 'mustard' : ''"
      @click="isMenuOpen()"
    >
      <span class="top-bun"></span>
      <span class="patty"></span>
      <span class="bottom-bun"></span>
    </button>
    <ul
      :class="menuOpen ? 'hamburger-open' : 'hamburger-closed'"
      class="nav-menu"
    >
      <NuxtLink to="/" class="nav-item"
        ><li @click="isMenuOpen()">Home</li></NuxtLink
      >
      <NuxtLink to="/shop" class="nav-item"
        ><li @click="isMenuOpen()">Shop</li></NuxtLink
      >
      <li class="nav-item">Item 3</li>
      <li class="nav-item">Item 4</li>
      <li class="nav-item">Item 5</li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '@/assets/place-holders/logoPlaceHolder.svg?inline'

export default Vue.extend({
  components: {
    Logo,
  },
  data() {
    return {
      menuOpen: false,
      showNavBar: true,
      lastScrollPosition: 0,
    }
  },
  mounted() {
    document.addEventListener('click', this.closeMenu)
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    document.addEventListener('click', this.closeMenu)
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    closeMenu(e: any) {
      if (!this.$el.contains(e.target) && this.menuOpen === true) {
        this.menuOpen = false
        document.body.style.overflow = 'auto'
      }
    },
    isMenuOpen() {
      if (!this.menuOpen) {
        this.menuOpen = true
        document.body.style.overflow = 'hidden'
      } else {
        this.menuOpen = false
        document.body.style.overflow = 'auto'
      }
    },
    onScroll() {
      const currentScrollPosition: number =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 100) {
        return
      }
      this.showNavBar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    },
  },
})
</script>
