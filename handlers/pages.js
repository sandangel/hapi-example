'user strict';

const Wreck = require('wreck');

exports.home = function(request, reply) {

  const apiUrl = this.apiBaseUrl + '/recipes';

  Wreck.get(apiUrl, {
    json: true
  }, function(err, res, payload) {

    if (err) {
      throw err;
    }

    reply.view('index', {
      recipes: payload,
      user: request.yar.get('user')
    });
  });
};

exports.viewRecipe = function(request, reply) {

  const apiUrl = this.apiBaseUrl + '/recipes/' + request.params.id;

  Wreck.get(apiUrl, {
    json: true
  }, function(err, res, payload) {

    if (err) {
      throw err;
    }

    reply.view('recipe', {
      recipe: payload,
      user: request.yar.get('user')
    });
  });
};

exports.createRecipe = function(request, reply) {

  reply.view('create', {
    user: request.yar.get('user')
  });
};

exports.login = function(request, reply) {

  reply.view('login');
}
