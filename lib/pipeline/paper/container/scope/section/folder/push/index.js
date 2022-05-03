"use strict";

exports.__esModule = true;

exports.default = function (enhancers) {
  return function (ext) {
    var fn = enhancers[ext];
    return fn ? fn.default || fn : undefined;
  };
};

module.exports = exports["default"];