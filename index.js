'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const Sqlite3 = require('sqlite3');
const db = new Sqlite3.Database('./dindin.sqlite');

const options = {
  ops: {
    interval: 1000
  },
  reporters: {
    myReporter: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{
        log: '*',
        response: '*'
      }]
    }, {
      module: 'good-console'
    }, 'stdout']
  }
}

server.connection({
  port: 4000
});

server.bind({
  db: db,
  apiBaseUrl: 'http://localhost:4000/api',
  webBaseUrl: 'http://localhost:4000'
});

server.register([{
    register: require('good'),
    options,
  },
  require('dindin-api'),
  require('inert'),
  require('vision'), {
    register: require('yar'),
    options: {
      cookieOptions: {
        password: 'the-password-must-be-at-least-32-characters-long',
        isSecure: false
      }
    }
  }
], function(err) {

  if (err) {
    throw err;
  }

  server.views({
    engines: {
      hbs: require('handlebars')
    },
    relativeTo: __dirname,
    path: './views',
    layoutPath: './views/layout',
    layout: true,
    isCached: false,
    partialsPath: './views/partials',
    helpersPath: './views/helpers/'
  });

  server.route(require('./routes'));

  server.start((err) => {

    if (err) {
      throw err;
    }

    console.log('Server running at:', server.info.uri);
  });
});
