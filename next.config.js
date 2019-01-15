/* eslint-disable global-require */
const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');

const copyFile = promisify(fs.copyFile);
const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');

const exportPathMap = async (
  defaultPathMap,
  { dev, dir, outDir, distDir, buildId }
) => {
  if (dev) return defaultPathMap;

  // copy .nojekyll from project root into the out directory
  await copyFile(join(dir, '.nojekyll'), join(outDir, '.nojekyll'));

  /* eslint-disable-next-line */
  const { ['/projects/detail']: _, ...fixedRoutes } = defaultPathMap;

  return {
    ...fixedRoutes,
    '/projects/routes-planner': {
      page: '/projects/detail',
      query: { slug: 'routes-planner' }
    },
    '/projects/3d-garage-builder': {
      page: '/projects/detail',
      query: { slug: '3d-garage-builder' }
    }
  };
};

const webpack = (config, { dev }) => {
  if (dev) {
    config.module.rules.push({
      test: /\.(jsx?|gql|graphql)$/,
      exclude: ['/node_modules/', '/.next/'],
      loader: 'eslint-loader',
      enforce: 'pre'
    });
  }
  return config;
};
/* eslint-enable global-require */
module.exports = withSass(withCss({ exportPathMap, webpack }));
