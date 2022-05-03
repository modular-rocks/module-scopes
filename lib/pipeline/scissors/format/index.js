'use strict';

exports.__esModule = true;

var _scope = require('./scope');

var _scope2 = _interopRequireDefault(_scope);

var _scopes = require('./scopes');

var _scopes2 = _interopRequireDefault(_scopes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (container, opts) {
  return function (relative, type) {
    if (!type) return false;

    var _ref = type.extract && type.extract(relative),
        scopeProp = _ref.scopeProp,
        relativePath = _ref.relativePath;

    (0, _scopes2.default)(scopeProp, container, opts.factories, type);
    var section = (0, _scope2.default)(container, opts.factories)(scopeProp);
    type.add && type.add(section, relativePath);
  };
};

module.exports = exports['default'];