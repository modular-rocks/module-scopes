'use strict';

exports.__esModule = true;
exports.default = undefined;

var _section = require('./section');

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
    return new _section2.default(type, _this, env);
  });

  env.config.opts.factories.map(function (type) {
    var section = _this.sections[type.pathname];
    var root = section.build();
    if (root) {
      _this.functionality[type.pathname] = root;
    }
  });
};

exports.default = Scope;
module.exports = exports['default'];