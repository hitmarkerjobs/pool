const tailwindcss = require("tailwindcss");

module.exports = {
  siteName: 'Hitmarker Pool',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'players/**/*.json',
        typeName: 'Player'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'seasons/**/*.json',
        typeName: 'Seasons'
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
        modulePath: `src/admin/index.js`
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss
        ],
      },
    },
  },
  icon: {
    favicon: {
      src: './src/assets/ico/htmrkr.png',
      sizes: [16, 32]
    },
    touchicon: {
      src: './src/assets/ico/htmrkr_bg.png',
      sizes: [180, 192, 512]
    }
  }
}
