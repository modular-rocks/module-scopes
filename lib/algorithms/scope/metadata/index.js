'use strict';

exports.__esModule = true;

var _extract = require('./extract');

var _extract2 = _interopRequireDefault(_extract);

var _tools = require('../../.././tools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keys = function keys(obj) {
  return Object.keys(obj);
};
var asc = function asc(a, b) {
  return a.num ? a.num - b.num : b.num;
};
var missingFiles = function missingFiles(files) {
  return files === undefined;
};
var noFiles = function noFiles(files) {
  return !files.length;
};

var metadata = function metadata(scope, section) {
  return function (relativePath) {
    var files = section[relativePath];
    var filesIsArray = Array.isArray(files);

    if (missingFiles(files) || filesIsArray && noFiles(files)) {
      return false;
    }

    if (filesIsArray) {
      section[relativePath] = files.map(_extract2.default).sort(asc);
      return section[relativePath];
    }

    keys(files).map(metadata(section[relativePath], files));
  };
};

exports.default = metadata;
module.exports = exports['default'];