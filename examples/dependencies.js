'use strict';

var Base = require('base');
var base = new Base({isApp: true});
var yarn = require('..');

base.use(yarn());

base.yarn.dependencies(function(err, args) {
  if (err) return console.error(err);
  console.log('done', args);
});

