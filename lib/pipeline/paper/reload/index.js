'use strict';

exports.__esModule = true;

var _factories = require('../../../factories');

var factories = { Scope: _factories.Scope, Logic: _factories.Logic, Procedural: _factories.Procedural };

exports.default = function (type) {
  var matchable = type.factory && factories[type.factory];

  if (matchable) {
    return factories[type.factory].reload(type);
  }

  return type;
};

module.exports = exports['default'];