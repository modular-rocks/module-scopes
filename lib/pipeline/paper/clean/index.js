"use strict";

exports.__esModule = true;

exports.default = function (container) {
  var counts = [];
  for (var key in container) {
    var obj = container[key];
    if (!Object.keys(obj).length) {
      delete container[key];
      continue;
    }

    counts.push([key, key.match(/\//gi).length]);
  }

  counts = counts.sort(function (a, b) {
    return a[1] - b[1];
  });
  container.root = counts[0] ? container[counts[0][0]] : {};

  return container;
};

module.exports = exports["default"];