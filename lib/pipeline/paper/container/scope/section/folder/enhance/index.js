'use strict';

exports.__esModule = true;

exports.default = function (env) {
  var type = this.section.type;
  var hasExtensions = this.extensions.length;

  this.modules = this.files.map(find(this.metadata, env));
  env.modules = this.modules;
  this.modules = this.files.map((0, _extend.file)(env));
  env.modules = this.modules;

  if (hasExtensions) {
    return (0, _extend.folder)(type.run.bind(type), env);
  }

  return type.run(env);
};

var _extend = require('./extend');

var find = function find(metadata, env) {
  return function (meta) {
    return env.config.opts.bundler.load(meta, metadata, env);
  };
};

module.exports = exports['default'];