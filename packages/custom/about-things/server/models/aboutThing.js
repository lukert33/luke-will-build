'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * AboutThing Schema
 */
var AboutThingSchema = new Schema({
  create: {
    type: Date,
    default : Date.now
  },
  factType : {
    type: String,
    default: 'misc'
  },
  content: {
    type: String,
    trim : true,
    required: true
  },
  context: {
    type: String,
    trim: true
  },
  source: {
    type: String,
    trim: true
  }
});

/**
 * Validations
 */
AboutThingSchema.path('content').validate(function(content) {
  return !!content;
}, 'Must provide content');

/**
 * Statics
 */
AboutThingSchema.statics.findByFactType = function(type, callback) {
  return this.find({
    factType: type
  }).toArray();
};

AboutThingSchema.statics.randomQuote = function(){
  var quotes = this.find({
    factType : 'quote'
  });
  var rand = Math.floor(Math.random()*quotes.count());
  return quotes[rand];
};

mongoose.model('AboutThing', AboutThingSchema);
