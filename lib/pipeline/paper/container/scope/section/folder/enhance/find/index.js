'use strict';

exports.__esModule = true;

var _load = require('./load');

var _load2 = _interopRequireDefault(_load);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var find = function find(metadata, env) {
  return function (meta) {
    var _env$config$opts = env.config.opts,
        root = _env$config$opts.root,
        _dirKeys = _env$config$opts._dirKeys;
    var absolutePath = metadata.absolutePath;

    var fn = (0, _load2.default)(meta, absolutePath, env.config.dir, root, _dirKeys);
    return fn;
  };
};

exports.default = find;
module.exports = exports['default'];