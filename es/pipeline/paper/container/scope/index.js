function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import Section from './section';

var Scope = function () {
  function Scope(path, env) {
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

    env.config.opts.factories.forEach(function (factory) {
      return new Section(factory, _this, env);
    });
  }

  Scope.prototype.build = function build() {
    var _this2 = this;

    this.env.config.opts.factories.map(function (factory) {
      var section = _this2.sections[factory.pathname];
      var root = section.build();
      if (root) {
        _this2.functionality[factory.pathname] = root;
      }
    });
  };

  return Scope;
}();

export { Scope as default };