const tailwindcss = require("tailwindcss");

module.exports = {
  siteName: 'Pool',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'players/**/*.md',
        typeName: 'Player'
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
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
