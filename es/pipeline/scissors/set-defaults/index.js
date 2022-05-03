var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

import { Scope, Logic, Enhanced } from '../../../algorithms';

var testForBundler = function testForBundler(opts) {
  if (!opts.bundler || !opts.bundler.resolve || !opts.bundler.load) {
    new Error("No bundler found for ModularRocks. Ensure a bundler is passed into the options argument under the property 'bundler'.");
  }
};

var setTypes = function setTypes(opts) {
  if (opts.types && opts.types.length) return;
  opts.types = [new Enhanced('rocks')];
};

var setRegex = function setRegex(opts) {
  if (opts.regex) return;
  opts.regex = /\.jsx?$/;
};

var convertStrings = function convertStrings(types, type, index) {
  if (typeof type !== 'string') return;
  var _type = void 0;

  switch (type[0]) {
    case '+':
      _type = type.replace(/^\+/, '');
      types[index] = new Logic(_type);
      break;
    case '*':
      _type = type.replace(/^\*/, '');
      types[index] = new Enhanced(_type);
      break;
    default:
      types[index] = new Scope(type);
  }
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

  Scope.params.map(inherit(type, new Scope(pathname)));
};

export default (function (opts) {
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
});