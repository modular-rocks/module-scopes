'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _enhanced = require('../../../algorithms/enhanced');

var _enhanced2 = _interopRequireDefault(_enhanced);

var _scope = require('../../../algorithms/scope');

var _scope2 = _interopRequireDefault(_scope);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testForBundler = function testForBundler(opts) {
  if (!opts.bundler || !opts.bundler.resolve || !opts.bundler.load) {
    new Error("No bundler found for ModularRocks. Ensure a bundler is passed into the options argument under the property 'bundler'.");
  }
};

var setTypes = function setTypes(opts) {
  if (opts.types && opts.types.length) return;
  opts.types = [new _enhanced2.default('rocks')];
};

var setRegex = function setRegex(opts) {
  if (opts.regex) return;
  opts.regex = /\.jsx?$/;
};

var convertStrings = function convertStrings(types, type, index) {
  if (typeof type !== 'string') return;
  types[index] = new _scope2.default(type);
};

var setIndex = function setIndex(index, type) {
  type.setIndex && type.setIndex(index);
};

var inherit = function inherit(type, scope) {
  return function (key) {
    if (type[key]) return;
    type[key] = scope[key];
  };
};

var tidy = function tidy(type) {
  var pathname = type.pathname,
      inheritedFromFramework = type.inheritedFromFramework;


  if (inheritedFromFramework) return;

  if (!pathname) {
    throw Error('No pathname set for type, check your config.types');
  }

  _scope2.default.params.map(inherit(type, new _scope2.default(pathname)));
};

exports.default = function (opts) {
  // opts._dirKeys = {}
  testForBundler(opts);

  setTypes(opts);
  setRegex(opts);

  opts.types.map(function (type, index) {
    convertStrings(opts.types, type, index);

    var isObject = (typeof type === 'undefined' ? 'undefined' : _typeof(type)) == 'object';
    isObject && !type.inheritedFromFramework && tidy(opts.types[index]);

    setIndex(index, opts.types[index]);
  });
};

module.exports = exports['default'];