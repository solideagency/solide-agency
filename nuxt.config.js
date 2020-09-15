require('dotenv').config()

export default {
  mode: 'spa',
  //needs to go to universal if it wants to be static generated
  /*
  ** Headers of the page
  */
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Sólide Agency',
    meta: [
      { property:'og:image', content: 'https://www.cmd-amsterdam.nl/wp-content/uploads/2019/04/LR-51E6AEBB-397C-4F33-AD7D-0721288BE1F0.png'},
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'Sólide, Sólide Agency, Agency, Creative, Digital, Amsterdam, Barcelona, Werner Hiemstra, Suus ten Voorde'},
      { hid: 'description', name: 'description', content: 'Creative digital agency. Sólide is there for those who want to be outstanding. Operating from Amsterdam and Barcelona.' }
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
    ['@nuxtjs/google-analytics', {
      id: process.env.GAID
    }]
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
