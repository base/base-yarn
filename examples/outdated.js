'use strict';

var Base = require('base');
var base = new Base({isApp: true});
var yarn = require('..');

base.use(yarn());

base.yarn.outdated(function(err) {
  if (err) return console.error(err);
  console.log('done');
});
