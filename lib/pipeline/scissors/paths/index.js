'use strict';

exports.__esModule = true;

var _tools = require('../../.././tools');

exports.default = function (path) {
  var relative = path;
  var pieces = (0, _tools.splitPath)(relative);
  var folder = (0, _tools.parent)(relative);
  var filename = relative.replace(folder, '');

  return { relative: relative, folder: folder, filename: filename, pieces: pieces };
};

module.exports = exports['default'];