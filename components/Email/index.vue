<template>
  <div class="news-letter-container">
    <div class="news-letter-wrapper">
      <p class="news-letter-heading">Place Holder Newsletter</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque officia
        fugit facere? Explicabo atque vitae quisquam, ad sed earum at sit
        delectus perspiciatis obcaecati voluptates eaque temporibus molestias.
      </p>
      <div class="subscribe-wrapper">
        <input id="email-input" type="email" placeholder="Your email" /><button
          class="subscribe-button"
          aria-label="Subscribe"
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.news-letter-container {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: var(--bg-secondary);
  padding: 4rem;
  .news-letter-wrapper {
    max-width: 500px;
    .news-letter-heading {
      font-size: 2rem;
      text-align: center;
    }
    .subscribe-wrapper {
      margin-top: 1rem;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      .subscribe-button {
        height: 3rem;
        background-color: var(--button-color);
        color: var(--button-text);
        border-radius: 0 0.5rem 0.5rem 0;
        padding: 0 1rem;
      }
      :active,
      :focus {
        box-shadow: 0 0 0.25rem var(--button-color) inset;
      }
      #email-input {
        height: 3rem;
        color: #333;
        border-radius: 0.5rem 0 0 0.5rem;
        padding: 0 1rem;
      }
    }
  }
}
</style>
