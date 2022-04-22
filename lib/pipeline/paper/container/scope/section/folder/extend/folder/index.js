'use strict';

exports.__esModule = true;
var isFunction = function isFunction(fn) {
  return typeof fn == 'function';
};
var type = 'Folder';

exports.default = function (prevFn, env) {
  var extensions = env.data.folder.extensions.slice();
  if (!extensions.length) return prevFn(env);

  var fn1 = extensions.splice(0, 1)[0];
  var fn = fn1(prevFn, env, type);
  extensions.map(function (m) {
    fn = m(fn, env, type);
  });
  return fn;
};

module.exports = exports['default'];