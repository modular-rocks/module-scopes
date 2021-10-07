"use strict";

exports.__esModule = true;

exports.default = function (container, types) {
  return function (folder) {
    if (!container[folder]) {
      container[folder] = types.map(function (matched) {
        return matched.build();
      });
    }
    return container[folder];
  };
};

module.exports = exports["default"];