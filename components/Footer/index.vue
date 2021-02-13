<template>
  <footer>
    <NuxtLink to="/" class="footer-heading">Place Holder Name</NuxtLink>
    <p class="footer-contact">(000) 000-0000</p>
    <p class="footer-contact">Lorem@Ipsum.dolar</p>
    <FooterNav />
    <DarkMode />
    <p class="copy-place-holder">Kai Asuncion 2021</p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  transition: background-color 0.3s;
  padding: 2rem 0;
  .footer-heading {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  .footer-contact {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  .footer-nav {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  .copy-place-holder {
    text-align: center;
    position: absolute;
    bottom: 0;
    color: var(--color-primary);
  }
}
</style>
