require("dotenv").config();
module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Dion Fananie",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Dion Fananie Personal Project"
      },
      {
        hid: "keyword",
        name: "keyword",
        content:
          "Automated, Deployment, Nuxt, Apps using, Third Parties, CI, CD, Continuous, Personal, Project"
      },
      { hid: "robot", name: "robot", content: "Index, Follow" },
      {
        hid: "og-description",
        property: "og:description",
        content: "Dion Fananie Personal Project"
      },
      { hid: "og-title", property: "og:title", content: "Dionizer.com" },
      { hid: "og-type", property: "og:type", content: "website" },
      {
        hid: "og-url",
        property: "og:url",
        content: "https://www.dionizer-netlify.com"
      },
      {
        hid: "og-image-alt",
        property: "og:image:alt",
        content: "Dion Fananie Personal Project"
      },
      { hid: "og-image", property: "og:image", content: "/img/og-image.png" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "dionizer.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "green" },
  /*
   ** Global CSS
   */
  css: [],

  icon: {
    iconSrc: "./static/logo/dionizer.png"
  },

  manifest: {
    name: "dionfananie.com",
    short_name: "Dion Fananie",
    theme_color: "#ffffff",
    background_color: "#ffffff",
    orientation: "portrait"
  },

  meta: {
    mobileAppIOS: true,
    name: "Rentfix.com",
    author: "PT.REAL ESTATE TEKNOLOGI",
    lang: "en",
    description: "Sewa Menyewa Properti Online"
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/typed.js", ssr: false }],
  /*
   ** Nuxt.js modules
   */
  workbox: {
    runtimeCaching: [
      {
        urlPattern: "https://fonts.googleapis.com/.*",
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: {
          cacheableResponse: { statuses: [0, 200] },
          cacheName: "font-googleapis"
        }
      }
    ]
  },
  modules: [
    "@nuxtjs/pwa",
    "nuxt-webfontloader",
    "nuxt-purgecss",
    "@nuxtjs/dotenv"
    // "@nuxtjs/apollo",
    // "@nuxtjs/proxy"
  ],
  buildModules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    configPath: "./tailwind.config.js",
    cssPath: "~/assets/css/tailwind.css",
    exposeConfig: false
  },
  // apollo: {
  //   clientConfigs: {
  //     default: {
  //       httpEndpoint: process.env.API
  //     }
  //   }
  // },

  webfontloader: {
    google: {
      families: [
        // "Lato:400,700&display=swap",
        "Courgette&display=swap"
      ]
    }
  },
  proxy: {
    "/api": process.env.API
  },
  /*
   ** Build configuration
   */
  build: {
    extractCss: true,
    optimizeCss: true,
    postcss: {
      plugins: {
        "postcss-nested": {},
        "postcss-responsive-type": {}
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
