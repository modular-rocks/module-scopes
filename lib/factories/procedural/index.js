'use strict';

exports.__esModule = true;

var _logic = require('.././logic');

var _logic2 = _interopRequireDefault(_logic);

var _run2 = require('./run');

var _run3 = _interopRequireDefault(_run2);

var _tools = require('../../tools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isFunc = function isFunc(fn) {
  return typeof fn === 'function';
};

var Procedural = function (_Logic) {
  _inherits(Procedural, _Logic);

  function Procedural(pathname) {
    _classCallCheck(this, Procedural);

    var _this = _possibleConstructorReturn(this, _Logic.call(this, pathname));

    _this.factory = 'Procedural';
    return _this;
  }

  Procedural.prototype.run = function run(env) {
    var fns = [],
        nonFuncs = [];


    for (var i = 0; i < env.modules.length; i++) {
      var module = env.modules[i];
      if (isFunc(module) && fns.push(module)) continue;
      var name = env.files[i].name;

      nonFuncs.push([module, name]);
    }

    var fn = function fn(action) {
      return (0, _run3.default)(fns, action, env);
    };

    nonFuncs.forEach(function (_ref) {
      var f = _ref[0],
          name = _ref[1];

      fn[name] = f;
    });

    return fn;
  };

  return Procedural;
}(_logic2.default);

exports.default = Procedural;
module.exports = exports['default'];