'use strict';

exports.__esModule = true;

var _algorithms = require('../../../algorithms');

var algorithms = { Scope: _algorithms.Scope, Logic: _algorithms.Logic, Enhanced: _algorithms.Enhanced };

exports.default = function (type) {
  var matchable = type.algorithm && algorithms[type.algorithm];

  if (matchable) {
    return algorithms[type.algorithm].reload(type);
  }

  return type;
};

module.exports = exports['default'];