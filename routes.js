'use strict';

const Pages = require('./handlers/pages');
const Assets = require('./handlers/assets');
const Actions = require('./handlers/actions');

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
}, {
  method: 'GET',
  path: '/login',
  handler: Pages.login
}, {
  method: 'POST',
  path: '/login',
  config: {
    payload: {
      output: 'data'
    }
  },
  handler: Actions.login
}, {
  method: 'GET',
  path: '/create',
  handler: Pages.createRecipe
}, {
  method: 'POST',
  path: '/create',
  config: {
    payload: {
      output: 'data'
    }
  },
  handler: Actions.createRecipe
}, {
  method: 'GET',
  path: '/logout',
  handler: Actions.logout
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

// "handlebar": "^1.0.0",
// "handlebars": "^4.0.6",
// "hapi": "^15.2.0",
// "hapi-auth-bearer-token": "^4.3.1",
// "hapi-auth-cookie": "^6.1.1",
// "inert": "^4.0.2",
// "nodemon": "^1.11.0",
// "sqlite3": "^3.1.8",
// "vision": "^4.1.0",
// "wreck": "^10.0.0"
// "good": "^7.0.2",
// "good-console": "^6.3.1",
// "good-squeeze": "^5.0.1",
//
