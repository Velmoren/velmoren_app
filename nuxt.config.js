module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'velmoren_app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  dev: process.env.NODE_ENV !== "production",
  server: {
    host: process.env.NODE_ENV !== "production" ? 'localhost' : '78.155.208.62',
    port: process.env.NODE_ENV !== "production" ? 3001 : 8085
  },
  axios: {
    baseURL:
      process.env.NODE_ENV !== "production"
        ? "http://127.0.0.1:3001/"
        : "http://78.155.208.62:8085/"
  },
  telemetry: true,
  serverMiddleware: [
    { path: "/api", handler: "~/server-middleware/rest.js" },
  ],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/scss/main.scss"
  ],
  styleResources: {
    scss: [
      '~/assets/scss/_vars.scss'
    ],
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['cookie-universal-nuxt', { alias: 'cookiz' }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  bootstrapVue: {
    icons: true
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build

  build: {
    babel: {
      compact: true
    }
  },
}
