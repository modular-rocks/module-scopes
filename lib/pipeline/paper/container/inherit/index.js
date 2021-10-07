'use strict';

exports.__esModule = true;
exports.inheritScope = undefined;

var _index = require('../../../.././tools/index.js');

var inheritScope = exports.inheritScope = function inheritScope(scopePath, parent, container) {
  if (!container[scopePath]) return false;
  if (!parent) return false;
  var scope = container[scopePath];
  for (var configuration in parent) {
    var section = scope[configuration] || (scope[configuration] = {});

    for (var prop in parent[configuration]) {
      if (!section[prop]) {
        section[prop] = parent[configuration][prop];
      }
    }
  }
};

var removeLastPath = function removeLastPath(s) {
  return s.splice(-1, 1);
};

exports.default = function (scopePath, container) {
  if (scopePath == '//' || scopePath == '/') {
    return false;
  }

  container[scopePath] = container[scopePath] || (container[scopePath] = {});

  var s = (0, _index.path2Pieces)(scopePath);
  removeLastPath(s);

  var k = void 0;
  while (s.length) {
    k = '/' + s.join('/') + '/';
    inheritScope(scopePath, container[k], container);
    removeLastPath(s);
  }
};