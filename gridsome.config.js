const tailwindcss = require("tailwindcss");

module.exports = {
  siteName: 'Pool',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'players/**/*.json',
        typeName: 'Players'
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
