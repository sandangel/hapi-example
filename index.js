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
  }, require('dindin-api'),
  require('inert'),
  require('vision')
], (err) => {

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

// const validateFunc = function(token, callback) {
//
//   db.get('SELECT * FROM users WHERE token = ?', [token], (err, result) => {
//
//     if (err) {
//       return callback(err, false);
//     }
//
//     const user = result;
//
//     if (typeof user === 'undefined') {
//       return callback(null, false);
//     }
//
//     callback(null, true, {
//       id: user.id,
//       username: user.username
//     });
//   });
// };

// var n1 = {
//   nha: 'do',
//   quoctich: 'anh',
//   nuoi: 'unknowNuoi1',
//   uong: 'unknowUong1',
//   thuoc: 'unknowThuoc1'
// }
// var n2 = {
//   nha: 'unknowNha2'
//   quoctich: 'thuy dien',
//   nuoi: 'cho',
//   uong: 'unknowUong2',
//   thuoc: 'unknowThuoc2'
// }
// var n3 = {
//   nha: 'unknowNha3',
//   quoctich: 'dan mach',
//   nuoi: 'unknowUong3',
//   uong: 'tra',
//   thuoc: 'unknowThuoc3'
// }
// var n4 = {
//   nha: 'xanh',
//   quoctich: 'unknowQt4' => 'Duc',
//   nuoi: 'unknowUong4',
//   uong: 'cafe',
//   thuoc: 'unknowThuoc4' => 'Prince'
// } (n4, n2??) => (n4)
// var n5 = {
//   nha: 'unknowNha5',
//   quoctich: 'unknowQt5',
//   nuoi: 'chim',
//   uong: 'unknowUong5',
//   thuoc: 'Pall Mall'
// } (n5, n4, n3, n1??) => (n5, n3, n1??)
// var n6 = {
//   nha: 'vang',
//   quoctich: 'unknowQt6',
//   nuoi: 'unknowNuoi6',
//   uong: 'unknowUong6',
//   thuoc: 'Dunhill'
// } (n5, n3, n2??)
// var n7 = {
//   nha: 'unknowNha7',
//   quoctich: 'unknowQt7',
//   nuoi: 'meo',
//   uong: 'unknowUong7',
//   thuoc: 'Blend'
// } (n5, n4, n3, n1??) => (n3, n1??)
// var n8 = {
//   nha: 'unknowNha8',
//   quoctich: 'unknowQt8',
//   nuoi: 'unknowNuoi8',
//   uong: 'bia',
//   thuoc: 'Bluemaster'
// } (n5, n1, n2??)
// var n9 {
//   nha: 'unknowNha9',
//   quoctich: 'Duc',
//   nuoi: 'unknowNuoi9',
//   uong: 'unknowUong9',
//   thuoc: 'Prince'
// } (n5, n4??)
