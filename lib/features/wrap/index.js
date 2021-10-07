'use strict';

exports.__esModule = true;

var _pipeline = require('../.././pipeline');

exports.default = function (refined, opts) {
  return _pipeline.Paper.wrap(refined, opts);
};

module.exports = exports['default'];