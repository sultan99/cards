const HtmlWebPackPlugin = require(`html-webpack-plugin`)
const CopyPlugin = require(`copy-webpack-plugin`)
const path = require(`path`)

const rootPath = dir => path.resolve(__dirname, dir)

module.exports = {
  entry: `./src/index.tsx`,
  output: {
    path: rootPath(`./dist`),
    filename: `[name].[contenthash].js`
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {loader: `babel-loader`},
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        exclude: /node_modules/,
        use: [{
          loader: `file-loader`,
          options: {name: `[name].[contenthash].[ext]`}
        }],
      },
      {
        test: /\.(svg)$/i,
        use: [
          {loader: `url-loader`, options: {limit: 2000}},
        ],
      },
    ],
  },
  resolve: {
    extensions: [`.ts`, `.tsx`, `.js`, `.jsx`],
    alias: {
      '@': rootPath(`./src`),
    }
  },
  devServer: {
    allowedHosts: [`all`],
    static: rootPath(`./dist`),
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: rootPath(`./src/index.html`)
    }),
    new CopyPlugin({
      patterns: [
        {from: rootPath(`./public`)},
      ],
    }),
  ]
}
