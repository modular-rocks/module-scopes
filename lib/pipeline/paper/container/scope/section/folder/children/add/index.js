"use strict";

exports.__esModule = true;

exports.default = function (enhanced, children) {
  if (Object.keys(children).length < 1) return;

  var names = Object.keys(children);
  names.map(function (name) {
    enhanced[name] = children[name];
  });
};

module.exports = exports["default"];