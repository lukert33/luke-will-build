'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  AboutThing = mongoose.model('AboutThing'),
  _ = require('lodash');

exports.show = function(req, res) {
  res.json(req.article);
};