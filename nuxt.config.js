

const {headConfig} = require('./config/head.js');
// import {headConfig} from './config/head.js';

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: [],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],

  icon: {
    iconSrc: './static/logo/dionizer.png'
  },

  manifest: {
    name: 'Rentfix.com',
    short_name: 'Rentfix',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    orientation: 'portrait',
  },
  meta: {
    mobileAppIOS: true,
    name: 'Rentfix.com',
    author: 'PT.REAL ESTATE TEKNOLOGI',
    lang: 'en',
    description: 'Sewa Menyewa Properti Online',


  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  workbox: {
    runtimeCaching: [{
      urlPattern: 'https://fonts.googleapis.com/.*',
      handler: 'cacheFirst',
      method: 'GET',
      strategyOptions: {
        cacheableResponse: { statuses: [0, 200] },
        cacheName: 'font-googleapis'
      }
    }]
  },
  modules: [
    '@nuxtjs/pwa',
    'nuxt-webfontloader'
  ],
  webfontloader: {
    google: {
      families: ['Tenor Sans:400&display=swap']
    }
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
