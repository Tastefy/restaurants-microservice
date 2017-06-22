'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

var _restaurant = require('./model/restaurant');

var _restaurant2 = _interopRequireDefault(_restaurant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var port = process.env.PORT || 8888;

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.get('/', function (req, res) {
  res.send('My PID is ' + process.pid);
});
app.post('/', function (req, res) {
  var restaurantJson = req.body;
  var Restaurant = _mongoose2.default.model('Restaurant');
  var restaurantDoc = new Restaurant(restaurantJson);
  restaurantDoc.save().then(function (data) {
    res.json(data);
  }).catch(function (err) {
    res.status(500).json({
      err: err
    });
  });
});
app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening on port ' + port);
});