'use strict';

exports.__esModule = true;

exports.default = function (env) {
  var type = this.section.type;
  var hasExtensions = this.extensions.length;

  this.modules = this.files.map((0, _find2.default)(this.metadata, env));
  env.modules = this.modules;
  this.modules = this.files.map((0, _extend.file)(env));
  env.modules = this.modules;

  if (hasExtensions) {
    return (0, _extend.folder)(type.run.bind(type), env);
  }

  return type.run(env);
};

var _find = require('./find');

var _find2 = _interopRequireDefault(_find);

var _extend = require('./extend');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];