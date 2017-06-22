'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MONGO_URI = 'mongodb://localhost/test';
_mongoose2.default.connect(MONGO_URI);

var db = _mongoose2.default.connection;
db.on('error', function (err) {
  console.log('Error connecting to database ', err);
});
db.once('open', function () {
  console.log('Connected to database');
});