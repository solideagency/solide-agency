require('dotenv').config()

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Sólide Agency',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'Sólide, Sólide Agency, Agency, Creative, Digital, Amsterdam, Barcelona, Werner Hiemstra, Suus ten Voorde'},
      { hid: 'description', name: 'description', content: 'Creative digital agency operating from Amsterdam and Barcelona' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-wit.png' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'kentico-kontent-nuxt-module'
  ],
  kenticokontent: {
    projectId: process.env.KENTICO_PROJECTID,
    enableAdvancedLogging: false,
    enablePreviewMode: true,
    enableSecuredMode: true
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  generate: {
    fallback: false,
    routes: [
      '/work/retailmade',
      '/work/de-film-als-een-kroket',
      '/work/sign-language-coffee-bar'
    ]
  }
}
