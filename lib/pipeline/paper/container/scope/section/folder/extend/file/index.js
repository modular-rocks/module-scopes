'use strict';

exports.__esModule = true;
exports.default = extend;
var type = 'File';

function extend(env) {
  var _this = this;

  var modules = env.modules;

  var ex = env.config.enhancers;

  return function (meta, i) {
    var prevFn = modules[i];
    if (!meta.enhancers || !meta.enhancers.length) return prevFn;

    var enhancers = meta.enhancers.map(function (x) {
      return ex[x];
    }).filter(Boolean);
    var fn = prevFn;
    var pipe = enhancers.map(function (m) {
      fn = (m.default || m).apply(_this, [fn, env, type]);
    });
    return fn;
  };
}
module.exports = exports['default'];