const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const paths = require('../config/paths')
const postcssNormalize = require('postcss-normalize')
const loaderUtils = require('loader-utils')

const isEnvDevelopment = process.env.NODE_ENV === 'development'
const isEnvProduction = process.env.NODE_ENV === 'production'

const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    isEnvDevelopment && require.resolve('style-loader'),
    isEnvProduction && {
      loader: MiniCssExtractPlugin.loader,
      options: paths.publicUrlOrPath.startsWith('.') ? { publicPath: '../../' } : {}
    },
    {
      loader: require.resolve('css-loader'),
      options: cssOptions
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          require('postcss-preset-env')({
            autoprefixer: {
              flexbox: 'no-2009'
            },
            stage: 3
          }),
          postcssNormalize()
        ],
        sourceMap: isEnvProduction ? true : isEnvDevelopment
      }
    }
  ].filter(Boolean)
  if (preProcessor) {
    loaders.push(
      {
        loader: require.resolve('resolve-url-loader'),
        options: {
          sourceMap: isEnvProduction ? true : isEnvDevelopment,
          root: paths.appSrc
        }
      },
      {
        loader: require.resolve(preProcessor),
        options: {
          sourceMap: true
        }
      }
    )
  }
  return loaders
}

const lessRegex = /\.less$/
const lessModuleRegex = /\.module\.less$/

module.exports = [
  {
    test: lessRegex,
    exclude: lessModuleRegex,
    use: getStyleLoaders(
      {
        importLoaders: 3,
        sourceMap: isEnvProduction ? true : isEnvDevelopment
      },
      'less-loader'
    ),
    sideEffects: true
  },
  {
    test: lessModuleRegex,
    use: getStyleLoaders(
      {
        importLoaders: 3,
        sourceMap: isEnvProduction ? true : isEnvDevelopment,
        modules: {
          getLocalIdent: (context, localIdentName, localName, options) => {
            const hash = loaderUtils.getHashDigest(
              path.posix.relative(context.rootContext, context.resourcePath) + localName,
              'md5',
              'base64',
              5
            )
            return `${localName}_${hash}`
          }
        }
      },
      'less-loader'
    )
  }
]
