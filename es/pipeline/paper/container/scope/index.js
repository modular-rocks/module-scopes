function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import Section from './section';

var Scope = function Scope(path, env) {
  var _this = this;

  _classCallCheck(this, Scope);

  this.path = path;
  this.metadata = env.metadata.container[path];
  this.env = env;
  this.sections = {};
  this.pipes = {};
  this.container = env.data.container;
  this.functionality = {};

  env.data.enhanced[path] = this.functionality;
  env.data.container[path] = this;

  env.config.opts.factories.forEach(function (type) {
    return new Section(type, _this, env);
  });

  env.config.opts.factories.map(function (type) {
    var section = _this.sections[type.pathname];
    var root = section.build();
    if (root) {
      _this.functionality[type.pathname] = root;
    }
  });
};

export { Scope as default };