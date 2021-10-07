'use strict';

exports.__esModule = true;

var _nestObject2 = require('.././nest-object');

var _nestObject3 = _interopRequireDefault(_nestObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, children) {
  var paths = Object.keys(children).filter(function (path) {
    return path != '/';
  });

  paths.map(function (path) {
    var _nestObject = (0, _nestObject3.default)(path, obj),
        parent = _nestObject.parent,
        currentPiece = _nestObject.currentPiece;

    parent[currentPiece] = children[path];
    delete children[path];
  });
};

module.exports = exports['default'];