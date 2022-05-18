"use strict";

exports.__esModule = true;

exports.default = function (decorators) {
  return function (ext) {
    var fn = decorators[ext];
    return fn ? fn.default || fn : undefined;
  };
};

module.exports = exports["default"];