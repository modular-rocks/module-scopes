'use strict';

exports.__esModule = true;

var _scope = require('.././scope');

var _scope2 = _interopRequireDefault(_scope);

var _tools = require('../../../.././tools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createScopes = function createScopes(createScope, current) {
  while (current.length) {
    createScope('/' + (0, _tools.pieces2Path)((0, _tools.rejectBlank)(current)) + '/');
    current.splice(-1, 1);
  }
};

exports.default = function (relative, container, types, matched) {
  var createScope = (0, _scope2.default)(container, types);
  createScopes(createScope, (0, _tools.rejectUndefined)((0, _tools.splitPath)(relative)));
  createScope('/');
  return;
};

module.exports = exports['default'];