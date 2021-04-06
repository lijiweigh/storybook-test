const CracoAntDesignPlugin = require("craco-antd")
const CracoLessPlugin = require('craco-less')
const { merge } = require('webpack-merge');

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      }
    },
    {
      plugin: CracoLessPlugin,
      options: {
        cssLoaderOptions: {
          modules: { localIdentName: '[local]_[hash:base64:5]' },
        },
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
        modifyLessRule(lessRule, context) {
          lessRule.test = /\.module\.less$/;
          lessRule.exclude = /node_modules/;
          return lessRule;
        },
      },
    }
  ],
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // delete webpackConfig.optimization.splitChunks
      // delete webpackConfig.optimization.runtimeChunk
      // webpackConfig.output.filename = '[name].js'
      // webpackConfig.output.chunkFilename = '[name].js'
      webpackConfig.output.libraryTarget = 'window'
      return merge(webpackConfig, {
        output: {
          filename: '[name].js'
        },
        optimization: {
          splitChunks: {},
          runtimeChunk: {}
        }
      })
    }
  },
  devServer: {
    open: false,
    port: 3000,
    host: 'local.zhenguanyu.com',
    disableHostCheck: true,
    proxy: {
      '/solar-notify-admin': {
        target: 'http://orion-test.zhenguanyu.com',
        changeOrigin: true,
        ws: false,
        onProxyReq (proxyReq) {
          if (proxyReq.getHeader('origin')) {
            proxyReq.setHeader('origin', 'http://orion-test.zhenguanyu.com');
          }
        }
      },
      '/solar-cms-history': {
        target: 'http://orion-test.zhenguanyu.com',
        changeOrigin: true
      },
      '/orion-tag-config': {
        target: 'http://orion-test.zhenguanyu.com',
        changeOrigin: true
      },
      '/common-crimson/api': {
        target: 'http://orion-test.zhenguanyu.com',
        changeOrigin: true
      },
      '/fenbi-region': {
        target: 'http://orion-test.zhenguanyu.com',
        changeOrigin: true
      },
      '/yuanli-user-admin/api': {
        target: 'http://orion-test.zhenguanyu.com',
        changeOrigin: true
      },
      '/orion-experiment-admin/api': {
        target: 'http://orion-test.zhenguanyu.com',
        changeOrigin: true
      },
      '/orion-config-center-admin/api': {
        target: 'http://orion-test.zhenguanyu.com',
        changeOrigin: true
      },
    }
  },
}