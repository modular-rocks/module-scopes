'use strict';

exports.__esModule = true;
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
// import enhance from './enhance'


var _push = require('./push');

var _push2 = _interopRequireDefault(_push);

var _metadata = require('./metadata');

var _metadata2 = _interopRequireDefault(_metadata);

var _children = require('./children');

var _extend = require('./extend');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var find = function find(metadata, env) {
  return function (meta) {
    return env.config.opts.bundler.load(meta, metadata, env);
  };
};

var bind = function bind(metadata, env) {
  rebind.call(this, env, find(metadata, env));
  rebind.call(this, env, (0, _extend.file)(env));
};

var rebind = function rebind(env, fn) {
  this.modules = this.files.map(fn);
  env.modules = this.modules;
};

var attach = function attach(name, enhanced, env) {
  if (name) {
    return env.scope[name] = enhanced;
  }

  if ((typeof enhanced === 'undefined' ? 'undefined' : _typeof(enhanced)) == 'object') {
    for (var n in enhanced) {
      env.scope[n] = enhanced[n];
    }
    return;
  }

  console.warn('Attaching to scope as "unknown" - check your logic in ' + _metadata2.default.absolutePath);
  env.scope['unknown'] = enhanced;
};

var Folder = function () {
  function Folder(relativeFolderPath, section, env) {
    _classCallCheck(this, Folder);

    this.path = relativeFolderPath;
    this.files = section.metadata[relativeFolderPath];
    this.env = env;
    this.section = section;
    section.folders[relativeFolderPath] = this;

    this.metadata = (0, _metadata2.default)(relativeFolderPath, section, env);

    var exts = env.config.enhancers;
    var enhancers = this.metadata.enhancers;
    this.enhancers = enhancers.reverse().map((0, _push2.default)(exts)).filter(Boolean);
  }

  Folder.prototype.build = function build() {
    var section = this.section,
        metadata = this.metadata,
        enhancers = this.enhancers,
        files = this.files;
    var factory = section.factory,
        scope = section.scope;
    var _env = this.env,
        data = _env.data,
        config = _env.config;

    var _create = (0, _children.create)(section, this),
        children = _create.children,
        childStorage = _create.childStorage,
        name = _create.name;

    var env = {
      config: config,
      metadata: metadata,
      files: files,
      children: children,
      scope: childStorage,
      prop: name,
      data: {
        section: section,
        factory: factory,
        scope: scope,
        folder: this
      },
      containers: {
        metadata: this.env.metadata.container,
        data: data.container,
        enhanced: data.enhanced
      }
    };

    bind.call(this, metadata, env);

    var enhanced = (0, _extend.folder)(factory.run.bind(factory), env);

    attach(name, enhanced, env);
    (0, _children.add)(enhanced, children);

    env.module = enhanced;

    return env.scope;
  };

  return Folder;
}();

exports.default = Folder;
module.exports = exports['default'];