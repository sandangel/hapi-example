'use strict';

const Wreck = require('wreck');

exports.login = function(request, reply) {

  // var self = this;

  const apiUrl = this.apiBaseUrl + '/login';

  Wreck.post(apiUrl, {
    payload: JSON.stringify(request.payload),
    json: true
  }, (err, res, payload) => {

    if (err) {
      throw err;
    }

    if (res.statusCode !== 200) {
      reply.redirect(this.webBaseUrl + '/login');
    } else {
      // request.yar.set('user', {
    }

    request.cookieAuth.set({
      token: payload.token
    });
    reply.redirect(this.webBaseUrl);
  });
};

exports.createRecipe = function(request, reply) {

  var self = this;

  const apiUrl = this.apiBaseUrl + '/recipes';
  // const token = request.yar.get('user').token;
  const token = request.auth.credentials.token;

  Wreck.post(apiUrl, {
    payload: JSON.stringify(request.payload),
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }, function(err, res, payload) {
    if (err) {
      throw err;
    }

    reply.redirect(self.webBaseUrl);
  });
};

exports.logout = function(request, reply) {

  // request.yar.clear('user');
  request.cookieAuth.clear();
  reply.redirect(this.webBaseUrl);
};
