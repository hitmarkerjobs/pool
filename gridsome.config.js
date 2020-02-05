const tailwindcss = require("tailwindcss");

module.exports = {
  siteName: 'Pool',
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
        path: 'matches/**/*.json',
        typeName: 'Matches',
        refs: {
          player1: 'Player',
          player2: 'Player'
        }
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
  }
}
