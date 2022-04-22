'use strict';

exports.__esModule = true;
exports.default = extend;
var type = 'File';

function extend(env) {
  var _this = this;

  var modules = env.modules;

  var ex = env.config.extensions;

  return function (meta, i) {
    var prevFn = modules[i];
    if (!meta.extensions || !meta.extensions.length) return prevFn;

    var extensions = meta.extensions.map(function (x) {
      return ex[x];
    }).filter(Boolean);
    var fn = prevFn;
    var pipe = extensions.map(function (m) {
      fn = (m.default || m).apply(_this, [fn, env, type]);
    });
    return fn;
  };
}
module.exports = exports['default'];