<template>
  <nav :class="{ 'navbar--hidden': !showNavBar }">
    <Logo class="brand-logo" />
    <ShoppingCart class="" />
    <button
      aria-label="menu button"
      class="hamburger-icon"
      :class="menuOpen ? 'mustard' : ''"
      @click="isMenuOpen()"
    >
      <span class="buns top-bun"></span>
      <span class="patty">Menu</span>
      <span class="buns bottom-bun"></span>
    </button>
    <ul
      :class="menuOpen ? 'hamburger-open' : 'hamburger-closed'"
      class="nav-menu"
    >
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/shop">Shop</NuxtLink></li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
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

<style lang="scss" scoped>
.buns {
  background-color: var(--color-primary);
}
.hamburger-icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  z-index: 2;
}
.patty {
  transition: all 0.5s ease-in-out;
}
.top-bun,
.bottom-bun {
  content: '';
  position: absolute;
  width: 48px;
  height: 0.2rem;
  transition: all 0.5s ease-in-out;
  z-index: 2;
}
.top-bun {
  transform: translateY(-16px);
}
.bottom-bun {
  transform: translateY(16px);
}
.mustard .patty {
  transform: translateX(-50px);
  background-color: transparent;
}
.mustard .top-bun {
  transform: rotate(45deg);
}
.mustard .bottom-bun {
  transform: rotate(-45deg);
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0.5rem;
  background-color: var(--bg-secondary);
  width: 100%;
  position: fixed;
  transition: 0.4s ease-out;
  z-index: 1;
  box-shadow: 0 0 0.5rem var(--shadow-color);
  &.navbar--hidden {
    transform: translateY(-120%);
  }
  .brand-logo {
    height: 100%;
  }
  .nav-menu {
    background-color: var(--bg);
    position: fixed;
    right: -120%;
    top: 0;
    width: 90%;
    max-width: 500px;
    height: 100vh;
    z-index: 1;
    transition: ease-in-out 0.4s;
    display: flex;
    flex-flow: column nowrap;
    box-shadow: 0 0 2rem var(--shadow-color);
    overflow: auto;
    li {
      font-size: 1.5rem;
      margin: 1rem 2rem;
      padding: 0.5rem;
      transition: 0.2s ease-out;
      width: 50%;
      &:hover {
        box-shadow: -5px 0 var(--border-color);
      }
    }
  }
  .hamburger-open {
    right: 0;
  }
}
</style>
