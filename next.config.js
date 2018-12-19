const fs = require('fs')
const { join } = require('path')
const { promisify } = require('util')
const copyFile = promisify(fs.copyFile)

module.exports = {
  exportPathMap: async function (defaultPathMap, {dev, dir, outDir, distDir, buildId}) {
    if (dev) {
      return defaultPathMap
    }
    // copy .nojekyll from project root into the out directory
    await copyFile(join(dir, '.nojekyll'), join(outDir, '.nojekyll'))
    return defaultPathMap
  }
}