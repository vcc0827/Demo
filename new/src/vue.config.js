const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

let cesiumSource = './node_modules/cesium/Source'
let cesiumWorkers = '../Build/Cesium/Workers'
let cesiumThridParty = '../Build/Cesium/ThirdParty'

module.exports = {
  publicPath: './',
  assetsDir: 'static',
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '/api/v1': {
        target: 'http://192.168.0.24:8095',
        // target: "http://192.168.0.179:8095",
        pathRewrite: {
          '^/api/v1': '/api/v1'
        }
      },
      '/geoserver': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/geoserver': '/geoserver'
        }
      },
      '/arcgis': {
        target: 'http://192.168.0.23',
        pathRewrite: {
          '^/arcgis': '/arcgis'
        }
      }
    }
  },
  configureWebpack: {
    context: __dirname,
    resolve: {
      alias: {
        cesium: path.resolve(__dirname, cesiumSource)
      }
    },
    amd: {
      toUrlUndefined: true
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: path.join(cesiumSource, cesiumWorkers), to: 'Cesium/Workers' },
        {
          from: path.join(cesiumSource, cesiumThridParty),
          to: 'Cesium/ThirdParty'
        },
        { from: path.join(cesiumSource, 'Assets'), to: 'Cesium/Assets' },
        { from: path.join(cesiumSource, 'Widgets'), to: 'Cesium/Widgets' }
      ]),
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('Cesium')
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery:'jquery',
        jquery:'jquery',
        'window.jQuery':'jquery'
      })
    ]
  }
}
