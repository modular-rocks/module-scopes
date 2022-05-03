'use strict';

exports.__esModule = true;

var _tools = require('../../../.././tools');

exports.default = function (pieces, factories) {
  var matched = [];
  var typeMap = {};
  factories.map(function (t) {
    return typeMap[t.pathname] = t;
  });
  pieces.map(function (p) {
    return typeMap[p] && matched.push(typeMap[p]);
  });
  return (0, _tools.rejectUndefined)(matched);
};

module.exports = exports['default'];