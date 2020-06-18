require('dotenv').config()

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    script: [
      { src: 'https://www.googletagmanager.com/gtag/js?id=UA-169900871-1', async: true},
      { src: '/js/googleanalytics.js'}
    ],
    title: 'Sólide Agency',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'Sólide, Sólide Agency, Agency, Creative, Digital, Amsterdam, Barcelona, Werner Hiemstra, Suus ten Voorde'},
      { hid: 'description', name: 'description', content: 'Creative digital agency that creates brands, websites and print products which are telling your story in a way that makes connection possible. Operating from Amsterdam and Barcelona. ' }
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
    { src: '~/plugins/nuxt-client-init.js', ssr: false }
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
    fallback: true,
    routes: [
      '/work/retailmade',
      '/work/de-film-als-een-kroket',
      '/work/sign-language-coffee-bar'
    ]
  }
}
