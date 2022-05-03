'use strict';

exports.__esModule = true;

var _tools = require('../../.././tools');

var _filter = require('./filter');

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (folder, _ref) {
  var factories = _ref.factories;

  var pieces = (0, _tools.path2Pieces)(folder);
  var matched = (0, _filter2.default)(pieces, factories);
  var nearest = matched.reverse()[0];

  return nearest;
};

module.exports = exports['default'];