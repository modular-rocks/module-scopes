"use strict";

exports.__esModule = true;

exports.default = function (container, factories) {
  return function (folder) {
    if (!container[folder]) {
      container[folder] = factories.map(function (matched) {
        return matched.build();
      });
    }
    return container[folder];
  };
};

module.exports = exports["default"];