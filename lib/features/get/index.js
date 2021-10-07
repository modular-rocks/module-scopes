'use strict';

exports.__esModule = true;

var _store = require('../.././store');

var _tools = require('../.././tools');

var rootPaths = [undefined, '//', '/'];
var shouldRespondWithRoot = function shouldRespondWithRoot(scopePath) {
  return rootPaths.includes(scopePath);
};
var shouldFindParent = function shouldFindParent(scope) {
  return scope === undefined;
};

var find = function find(rootLocation, scopePath, opts) {
  var env = (0, _store.get)(rootLocation, 'env');
  var enhanced = env.data.enhanced;

  if (shouldRespondWithRoot(scopePath)) {
    return enhanced.root;
  }

  var scope = enhanced[scopePath];
  if (shouldFindParent(scope)) {
    return find(rootLocation, (0, _tools.parentScopePath)(scopePath));
  }

  return scope;
};

exports.default = find;
module.exports = exports['default'];