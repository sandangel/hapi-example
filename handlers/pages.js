'user strict';

const Wreck = require('wreck');

exports.home = function(request, reply) {

  const apiUrl = this.apiBaseUrl + '/recipes';

  Wreck.get(apiUrl, {
    json: true
  }, (err, res, payload) => {

    if (err) {
      throw err;
    }

    reply.view('index', {
      recipes: payload,
      user: request.session.get('user')
    });
  });
};

exports.viewRecipe = function(request, reply) {

  const apiUrl = this.apiBaseUrl + '/recipes/' + request.params.id;

  Wreck.get(apiUrl, {
    json: true
  }, (err, res, payload) => {

    if (err) {
      throw err;
    }

    reply.view('recipe', {
      recipe: payload
    });
  });
};

exports.login = function(request, reply) {

  reply.view('login');
};

exports.createRecipe = function(request, reply) {

  reply.view('create', {
    user: request.auth.credentials
  });
};
// const recipes = [{
//   id: 1,
//   name: 'Silicate soup',
//   cuisine: 'Martian',
//   stars: '100',
//   serves: 1,
//   prep_time: '2 hours',
//   cooking_time: '12 minutes'
// }, {
//   id: 2,
//   name: 'Mathane trifle',
//   cuisine: 'Neptunian',
//   stars: 200,
//   serves: 1,
//   prep_time: '1 hour',
//   cooking_time: '24 minutes'
// }]
//
// const sql = 'SELECT * FROM recipes';
// this.db.all(sql, function(err, result) {
//
//   reply.view('index', {
//     recipes: recipes
//   });
// });
