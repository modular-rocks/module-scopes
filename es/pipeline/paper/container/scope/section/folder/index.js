var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import push from './push';
// import enhance from './enhance'
import metadata from './metadata';
import { add, create } from './children';
import { file, folder } from './extend';

var find = function find(metadata, env) {
  return function (meta) {
    return env.config.opts.bundler.load(meta, metadata, env);
  };
};

var bind = function bind(metadata, env) {
  rebind.call(this, env, find(metadata, env));
  rebind.call(this, env, file(env));
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

  console.warn('Attaching to scope as "unknown" - check your logic in ' + metadata.absolutePath);
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

    this.metadata = metadata(relativeFolderPath, section, env);

    var exts = env.config.decorators;
    var decorators = this.metadata.decorators;
    this.decorators = decorators.reverse().map(push(exts)).filter(Boolean);
  }

  Folder.prototype.build = function build() {
    var section = this.section,
        metadata = this.metadata,
        decorators = this.decorators,
        files = this.files;
    var factory = section.factory,
        scope = section.scope;
    var _env = this.env,
        data = _env.data,
        config = _env.config;

    var _create = create(section, this),
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

    var enhanced = folder(factory.run.bind(factory), env);

    attach(name, enhanced, env);
    add(enhanced, children);

    env.module = enhanced;

    return env.scope;
  };

  return Folder;
}();

export { Folder as default };