'use strict';

const Pages = require('./handlers/pages');
const Assets = require('./handlers/assets');

module.exports = [{
  method: 'GET',
  path: '/',
  handler: Pages.home
}, {
  method: 'GET',
  path: '/{param*}',
  handler: Assets.servePublicDirectory
}, {
  method: 'GET',
  path: '/recipes/{id}',
  handler: Pages.viewRecipe
}];
// const Recipes = require('./handlers/recipes');
//
// module.exports = [{
//   method: 'GET',
//   path: '/api/recipes',
//   handler: Recipes.find
// }, {
//   method: 'GET',
//   path: '/api/recipes/{id}',
//   handler: Recipes.findOne
// }, {
//   method: 'GET',
//   path: '/log-host',
//   handler: function(request, reply) {
//
//     console.log('request.headers.host');
//     reply();
//   }
// }, {
//   method: 'GET',
//   path: '/',
//   handler: function(request, reply) {
//     reply('Hello World!');
//   }
// }, {
//   method: 'GET',
//   path: '/json',
//   handler: function(request, reply) {
//     reply({
//       hello: 'World'
//     });
//   }
// }, {
//   method: 'POST',
//   path: '/api/recipes',
//   config: {
//     auth: 'api',
//   },
//   handler: Recipes.create
// }, {
//   method: 'POST',
//   path: '/api/recipes/{id}/star',
//   config: {
//     auth: 'api',
//     payload: {
//       output: 'data'
//     }
//   },
//   handler: Recipes.star
// }];
