'use strict';

exports.__esModule = true;

var _pipeline = require('../.././pipeline');

exports.default = function (collection, opts) {
  var scoped = _pipeline.Scissors.cut(opts)(collection);
  var refined = _pipeline.Rocks.refine(scoped, opts);
  return {
    scoped: scoped,
    refined: refined
  };
};

module.exports = exports['default'];