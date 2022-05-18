'use strict';

exports.__esModule = true;
exports.default = extend;
var type = 'File';

function extend(env) {
  var _this = this;

  var modules = env.modules;

  var ex = env.config.decorators;

  return function (meta, i) {
    var prevFn = modules[i];
    if (!meta.decorators || !meta.decorators.length) return prevFn;

    var decorators = meta.decorators.map(function (x) {
      return ex[x];
    }).filter(Boolean);
    var fn = prevFn;
    var pipe = decorators.map(function (m) {
      fn = (m.default || m).apply(_this, [fn, env, type]);
    });
    return fn;
  };
}
module.exports = exports['default'];