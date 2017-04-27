/*!
 * base-yarn <https://github.com/node-base/base-yarn>
 *
 * Copyright (c) 2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

var isValid = require('is-valid-app');

module.exports = function() {
  return function(app) {
    if (isValid(app, 'base-yarn')) {
      this.define('yarn', require('yarn-api'));
    }
  };
};
