
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: "Dionizer",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      { hid: "description", name: "description", content: "Automated Deployment Nuxt Apps using Third Parties" },
      { hid: "keyword", name: "keyword", content: "Automated, Deployment, Nuxt, Apps using, Third Parties, CI, CD, Continuous" },
      { hid: "robot", name: "robot", content: "Index, Follow" },
      { hid: "og-description", property: "og:description", content: "Automated Deployment Nuxt Apps using Third Parties" },
      { hid: "og-title", property: "og:title", content: "Dionizer.com" },
      { hid: "og-type", property: "og:type", content: "website" },
      { hid: "og-url", property: "og:url", content: "https://www.dionizer-netlify.com" },
      { hid: 'og-image-alt', property: 'og:image:alt', content: "Automated Deployment Nuxt Apps using Third Parties" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "dionizer.ico" },
    ],

  },
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
      families: ['Lato:400,700&display=swap', 'Roboto:400,700&display=swap']
    }
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {},
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
