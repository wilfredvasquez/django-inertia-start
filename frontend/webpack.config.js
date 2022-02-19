const path = require("path");
const BundleTracker = require('webpack-bundle-tracker');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    entry: [
      "./src/main.js",
    ],
    output: {
      publicPath: "./static/dist/",
      filename: "[name]-[hash].js",
      chunkFilename: '[name]-[hash].js',
      path: path.resolve('../static/dist/'),
    },
  
    plugins: [
      new VueLoaderPlugin(),
      new BundleTracker({ filename: './webpack-stats.json' }),
    ],
  
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
      ]
    },
  }