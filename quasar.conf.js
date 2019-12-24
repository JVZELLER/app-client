// Configuration for your app

require('dotenv').config()

module.exports = function (ctx) {
  const ENVIRONMENT_INDICATOR_MAP = {
    PROD: ' ',
    QA: ' - QA',
  }

  const API_BASE_URL = JSON.stringify(process.env.LOCAL_BACKEND_ENDPOINT)

  if (API_BASE_URL === null) {
    throw new Error('Check if LOCAL_BACKEND_ENDPOINT is set in .env')
  }

  console.log('=========================================')
  console.log('Build Info')
  console.log(`Stage: ${process.env.stage}`)
  console.log(`App version: ${process.env.APP_VERSION}`)
  console.log(`Api base url: ${API_BASE_URL}`)
  console.log('=========================================')

  return {
    // app plugins (/src/boot)
    boot: [
      'i18n',
      'axios',
      'vuelidate',
      'view-model'
    ],
    css: [
      'app.sass'
    ],
    extras: [
      'roboto-font', // optional, you are not bound to it
      'material-icons' // optional, you are not bound to it
    ],
    supportIE: false,
    build: {
      env: {
        API_BASE_URL,
        APP_VERSION: JSON.stringify(process.env.APP_VERSION),
        ENVIRONMENT_INDICATOR: JSON.stringify(ENVIRONMENT_INDICATOR_MAP[process.env.stage] || ' - Dev'),
        STAGE: JSON.stringify(process.env.stage)
      },
      scopeHoisting: true,
      vueRouterMode: 'history', // available values: 'hash', 'history'
      // showProgress: true,
      // gzip: false,
      // analyze: false,
      // preloadChunks: false,
      // extractCSS: false,

      extendWebpack (cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
          options: {
            formatter: require('eslint').CLIEngine.getFormatter('stylish'),
            failOnError: true
          }
        })
      }
    },

    devServer: {
      // https: true,
      port: 8081,
      open: true // opens browser window automatically
    },
    framework: {
      iconSet: 'material-icons', // Quasar icon set
      lang: 'en-us', // Quasar language pack
      all: false,
      components: [
        'QLayout',
        'QHeader',
        'QDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QIcon',
        'QList',
        'QItem',
        'QItemSection',
        'QItemLabel',
        'QInput'
      ],
      directives: [
        'Ripple'
      ],
      plugins: [
        'Notify',
        'Loading'
      ]
    },
    animations: []
  }
}
