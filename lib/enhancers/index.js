"use strict";

exports.__esModule = true;
var enhancers = {};

var add = function add(key, fn) {
  return enhancers[key] = fn;
};
var get = function get() {
  return enhancers;
};

exports.add = add;
exports.get = get;