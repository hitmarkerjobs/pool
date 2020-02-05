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


// import uuid from 'uuid/v4';

// const IdControl = window.createClass({
//   getInitialState: function () { return {}; },
//   componentDidMount: function () {
//     if (!this.props.value) {
//       this.props.onChange(uuid());
//     }
//   },
//   handleChange() {
//     this.props.onChange(uuid());
//   },
//   render: function () {
//     return window.h('p', null, `${this.props.value}`);
//   }
// });

// const IdPreview = window.createClass({
//   getInitialState: function () { console.log(this.props); return {}; },
//   render: function () {
//     return window.h('p', null, `ID: ${this.props.value}`);
//   }
// });
