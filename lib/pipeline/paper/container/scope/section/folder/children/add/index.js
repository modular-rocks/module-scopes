"use strict";

exports.__esModule = true;

exports.default = function (enhanced, children) {
  var names = Object.keys(children);
  names.map(function (name) {
    enhanced[name] = children[name];
  });
};

module.exports = exports["default"];