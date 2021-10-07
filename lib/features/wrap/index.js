'use strict';

exports.__esModule = true;

var _pipeline = require('../.././pipeline');

exports.default = function (refined, dir, opts) {
  return _pipeline.Paper.wrap(refined, dir, opts);
};

module.exports = exports['default'];