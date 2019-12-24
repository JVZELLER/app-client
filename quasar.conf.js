// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js

module.exports = function (ctx) {
  return {
    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://quasar.dev/quasar-cli/cli-documentation/boot-files
    boot: [
      'i18n',
      'axios'
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
      scopeHoisting: true,
      // vueRouterMode: 'history', // available values: 'hash', 'history'
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
        'QItemLabel'
      ],
      directives: [
        'Ripple'
      ],
      plugins: []
    },
    animations: []
  }
}
