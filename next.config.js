/* eslint-disable global-require */
const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');

const copyFile = promisify(fs.copyFile);
const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass');
const css = require('@zeit/next-css');
const optimizedImages = require('next-optimized-images');
const axios = require('axios');

const exportPathMap = async (
  defaultPathMap,
  // eslint-disable-next-line no-unused-vars
  { dev, dir, outDir, distDir, buildId }
) => {
  if (dev) return defaultPathMap;

  // copy .nojekyll from project root into the out directory
  await copyFile(join(dir, '.nojekyll'), join(outDir, '.nojekyll'));

  /* eslint-disable-next-line */
  const { ['/projects/detail']: _, ...fixedRoutes } = defaultPathMap;

  const storyBlockContent = await axios.get(
    'https://api.storyblok.com/v1/cdn/stories?filter_query[component][in]=project&version=published&token=Bc7OwWaIz7eCIIF7bN2VgAtt'
  );

  const projectsRoutes = {};
  storyBlockContent.data.stories.forEach(project => {
    projectsRoutes[`/projects/${project.slug}`] = {
      page: '/projects/detail',
      query: { slug: project.slug }
    };
  });

  const allRoutes = {
    ...fixedRoutes,
    ...projectsRoutes
  };

  return allRoutes;
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
module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        // these are the default values so you don't have to provide them if they are good enough for your use-case.
        // but you can overwrite them here with any valid value you want.
        inlineImageLimit: 8192,
        imagesFolder: 'images',
        imagesName: '[name]-[hash].[ext]',
        handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
        optimizeImages: true,
        optimizeImagesInDev: false,
        mozjpeg: {
          quality: 80
        },
        optipng: {
          optimizationLevel: 3
        },
        pngquant: false,
        gifsicle: {
          interlaced: true,
          optimizationLevel: 3
        },
        webp: {
          preset: 'default',
          quality: 75
        }
      }
    ],
    css,
    sass
  ],
  { exportPathMap, webpack }
);
