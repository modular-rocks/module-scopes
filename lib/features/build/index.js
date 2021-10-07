'use strict';

exports.__esModule = true;

var _pipeline = require('../.././pipeline');

var _prepare2 = require('.././prepare');

var _prepare3 = _interopRequireDefault(_prepare2);

var _wrap = require('.././wrap');

var _wrap2 = _interopRequireDefault(_wrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const cleanDot = (x) => x[0] == '.' ? x.slice(1) : x

exports.default = function (bundler, opts) {
  // opts.dir = dir
  opts.bundler = bundler;
  var collection = bundler.get('keys');
  // const collection = dir.keys()
  // const cleanDot = (x) => x[0] == '.' ? x.slice(1) : x

  var _prepare = (0, _prepare3.default)(collection, opts),
      scoped = _prepare.scoped,
      refined = _prepare.refined;

  var rocks = (0, _wrap2.default)(refined, opts);
  var path = process.env.PWD + opts.root;
  return rocks[path];
};

module.exports = exports['default'];