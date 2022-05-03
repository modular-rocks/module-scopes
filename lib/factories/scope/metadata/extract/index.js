'use strict';

exports.__esModule = true;

var _tools = require('./tools');

var _tools2 = require('../../../.././tools');

var extract = function extract(filename) {
  var object = {};
  var pieces = (0, _tools2.last)((0, _tools2.splitPath)(filename)).split('.');

  (0, _tools.setName)(object, pieces);
  (0, _tools.setFileEnhancer)(object, pieces);

  object.filename = filename;

  return object;
};

exports.default = extract;
module.exports = exports['default'];