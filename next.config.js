/* eslint-disable global-require */
const fs = require('fs')
const { join } = require('path')
const { promisify } = require('util')
const copyFile = promisify(fs.copyFile)
const withSass = require('@zeit/next-sass')

const exportPathMap = async function (defaultPathMap, {dev, dir, outDir, distDir, buildId}) {
  if (dev) {
    return defaultPathMap
  }
  // copy .nojekyll from project root into the out directory
  await copyFile(join(dir, '.nojekyll'), join(outDir, '.nojekyll'))
  return defaultPathMap
}

const webpack = (config, { dev }) => {
  if (dev) {
    config.module.rules.push({
      test: /\.(jsx?|gql|graphql)$/,
      exclude: ['/node_modules/', '/.next/'],
      loader: 'eslint-loader',
      enforce: 'pre'
    })
  }
  return config
}
/* eslint-enable global-require */
module.exports = withSass({ exportPathMap, webpack })
