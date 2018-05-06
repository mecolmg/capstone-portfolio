const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/capstone-portfolio/'
  }
} : {
  router: {
    base: '/'
  }
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'capstone-portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Portfolio of work done by Colm Gallagher in Creative Computing Studio Capstone at Virginia Tech' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://www.assets.cms.vt.edu/images/Standard/Standard_RGB.svg' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: ['uikit/dist/css/uikit.css'],
  plugins: [
    { src: '~/plugins/uikit.js', ssr: false }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  ...routerBase
}
