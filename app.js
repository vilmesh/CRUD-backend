var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var routes = require('./routes');

app.use(bodyParser.json());
app.use('/', routes);

module.exports = app;
