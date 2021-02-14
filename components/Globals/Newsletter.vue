<template>
  <div class="news-letter-container">
    <div class="news-letter-wrapper">
      <p class="news-letter-heading heading">Place Holder Newsletter</p>
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
  background-color: var(--bg-secondary);
  padding: 4rem;
  border-bottom: 0.25rem solid var(--border-color);
  box-shadow: 0 -0.25rem var(--border-color);
  p {
    margin-bottom: 0.5rem;
  }
  .news-letter-wrapper {
    margin: auto;
    max-width: 500px;
    .news-letter-heading {
      font-size: 2rem;
      text-align: center;
    }
    .subscribe-wrapper {
      margin: 1rem auto;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      .subscribe-button {
        height: 3rem;
        background-color: var(--button-color);
        color: var(--button-text);
        border-radius: 0 0.5rem 0.5rem 0;
        padding: 0 1rem;
        transition: 0.1s ease-in-out;
        &:hover {
          background-color: var(--button-hover);
        }
      }
      #email-input {
        width: 100%;
        height: 3rem;
        color: #333;
        border-radius: 0.5rem 0 0 0.5rem;
        padding: 0 1rem;
        &:active,
        &:focus {
          box-shadow: 0 0 0.25rem var(--button-color) inset;
        }
      }
    }
  }
}
</style>
