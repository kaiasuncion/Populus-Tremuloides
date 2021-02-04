<template>
  <div class="footer-list-container">
    <ul class="footer-list">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/shop">Shop</NuxtLink>
      <a>lorem Ipsum</a>
      <a>Ipsum Lorem</a>
    </ul>
    <span class="vertical-line"></span>
    <ul class="footer-list">
      <a>Lorem</a>
      <a>Ipsum</a>
      <a>lorem Ipsum</a>
      <a>Ipsum Lorem</a>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.footer-list-container {
  margin: 2rem;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  .vertical-line {
    width: 2px;
    background: var(--border-color);
  }
  .footer-list {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 100%;
    a {
      margin: 1rem 0;
    }
  }
}
</style>
