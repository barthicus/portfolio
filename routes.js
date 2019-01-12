const routes = require('next-routes');

module.exports = routes().add('projects/detail', '/projects/:slug');
