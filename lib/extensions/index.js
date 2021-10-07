"use strict";

exports.__esModule = true;
var extensions = {};

var add = function add(key, fn) {
  return extensions[key] = fn;
};
var get = function get() {
  return extensions;
};

exports.add = add;
exports.get = get;