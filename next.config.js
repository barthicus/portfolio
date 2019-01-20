/* eslint-disable global-require */
const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');

const copyFile = promisify(fs.copyFile);
const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const axios = require('axios');

const exportPathMap = async (
  defaultPathMap,
  { dev, dir, outDir, distDir, buildId }
) => {
  if (dev) return defaultPathMap;

  // copy .nojekyll from project root into the out directory
  await copyFile(join(dir, '.nojekyll'), join(outDir, '.nojekyll'));

  /* eslint-disable-next-line */
  const { ['/projects/detail']: _, ...fixedRoutes } = defaultPathMap;

  const storyBlockContent = await axios.get(
    'https://api.storyblok.com/v1/cdn/stories?starts_with=projects&version=published&token=Bc7OwWaIz7eCIIF7bN2VgAtt'
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
module.exports = withSass(withCss({ exportPathMap, webpack }));
