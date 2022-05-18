"use strict";

exports.__esModule = true;
var decorators = {};

var add = function add(key, fn) {
  return decorators[key] = fn;
};
var get = function get() {
  return decorators;
};

exports.add = add;
exports.get = get;