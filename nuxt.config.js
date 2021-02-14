export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Populus Tremuloides',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Populus Tremuloides is a simple eCommerce starter utilizing Nuxtjs and Snipcart. Any headless CMS can be used with it, but was built with Forrestry.io',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://app.snipcart.com' },
      { rel: 'preconnect', href: 'https://cdn.snipcart.com' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.snipcart.com/themes/v3.0.28/default/snipcart.css',
      },
    ],
    script: [
      { src: 'https://cdn.snipcart.com/themes/v3.0.28/default/snipcart.js' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/reset.scss', '~/assets/styles/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/color-mode',
    '@nuxtjs/svg',
    '@nuxtjs/composition-api',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],
  privateRuntimeConfig: {
    apiSecret: process.env.API_SECRET,
    baseUrl: process.env.BASEURL,
  },
  loading: { color: 'var(--primary-color)', height: '1rem' },
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
