'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _factories = require('../../../factories');

var testForBundler = function testForBundler(opts) {
  if (!opts.bundler || !opts.bundler.resolve || !opts.bundler.load) {
    new Error("No bundler found for ModularRocks. Ensure a bundler is passed into the options argument under the property 'bundler'.");
  }
};

var setFactories = function setFactories(opts) {
  if (opts.factories && opts.factories.length) return;
  opts.factories = [new _factories.Procedural('rocks')];
};

var setRegex = function setRegex(opts) {
  if (opts.regex) return;
  opts.regex = /\.jsx?$/;
};

var convertStrings = function convertStrings(factories, type, index) {
  if (typeof type !== 'string') return;
  var _type = void 0;

  switch (type[0]) {
    case '+':
      _type = type.replace(/^\+/, '');
      factories[index] = new _factories.Logic(_type);
      break;
    case '*':
      _type = type.replace(/^\*/, '');
      factories[index] = new _factories.Procedural(_type);
      break;
    default:
      factories[index] = new _factories.Scope(type);
  }
};

var setIndex = function setIndex(index, type) {
  type.setIndex && type.setIndex(index);
};

var inherit = function inherit(factory, scope) {
  return function (key) {
    if (factory[key]) return;
    factory[key] = scope[key];
  };
};

var tidy = function tidy(type) {
  var pathname = type.pathname,
      inheritedFromFramework = type.inheritedFromFramework;


  if (inheritedFromFramework) return;

  if (!pathname) {
    throw Error('No pathname set for type, check your config.factories');
  }

  _factories.Scope.params.map(inherit(type, new _factories.Scope(pathname)));
};

exports.default = function (opts) {
  // opts._dirKeys = {}
  testForBundler(opts);

  setFactories(opts);
  setRegex(opts);

  opts.factories.map(function (type, index) {
    convertStrings(opts.factories, type, index);

    var isObject = (typeof type === 'undefined' ? 'undefined' : _typeof(type)) == 'object';
    isObject && !type.inheritedFromFramework && tidy(opts.factories[index]);

    setIndex(index, opts.factories[index]);
  });
};

module.exports = exports['default'];