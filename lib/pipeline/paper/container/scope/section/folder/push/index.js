"use strict";

exports.__esModule = true;

exports.default = function (extensions) {
  return function (ext) {
    var fn = extensions[ext];
    return fn ? fn.default || fn : undefined;
  };
};

module.exports = exports["default"];