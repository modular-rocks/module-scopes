'use strict';

exports.__esModule = true;

var _nestObject2 = require('../../.././nest-object');

var _nestObject3 = _interopRequireDefault(_nestObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findOrCreate = function findOrCreate(obj, prop) {
  return obj[prop] || (obj[prop] = {});
};

var collectRemaining = function collectRemaining(relativeFolderPath, obj, children) {
  var re = new RegExp('^' + relativeFolderPath);
  var paths = Object.keys(children).filter(function (path) {
    return path.match(re);
  });

  paths.map(function (path) {
    var relPath = path.replace(relativeFolderPath, '');

    var _nestObject = (0, _nestObject3.default)(relPath, obj),
        parent = _nestObject.parent,
        currentPiece = _nestObject.currentPiece;

    parent[currentPiece] = children[path];
    delete children[path];
  });
};

exports.default = function (section, folder) {
  var _folder$metadata = folder.metadata,
      name = _folder$metadata.name,
      relativeFolderPath = _folder$metadata.relativeFolderPath,
      parentPath = _folder$metadata.parentPath;

  var childStorage = findOrCreate(section.children, parentPath);
  var children = findOrCreate(section.children, relativeFolderPath);

  delete section.children[relativeFolderPath];
  collectRemaining(relativeFolderPath, children, section.children);

  return {
    name: name,
    childStorage: childStorage,
    children: children
  };
};

module.exports = exports['default'];