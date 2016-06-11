var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  languages : {type: String, default: 'EN', enum: ['EN', 'FR', 'UA', 'PT'], uppercase: true},
  dateFormat: {type: String, default: 'YMD', enum: ['DMY', 'YMD'], uppercase: true},
  timeFormat:{type: String, default: '12H', enum: ['12H', '24H'], uppercase: true}
});

module.exports = schema;
