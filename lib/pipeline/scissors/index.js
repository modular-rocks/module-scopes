'use strict';

exports.__esModule = true;
exports.cut = undefined;

var _setDefaults = require('./set-defaults');

var _setDefaults2 = _interopRequireDefault(_setDefaults);

var _format = require('./format');

var _format2 = _interopRequireDefault(_format);

var _match = require('./match');

var _match2 = _interopRequireDefault(_match);

var _paths2 = require('./paths');

var _paths3 = _interopRequireDefault(_paths2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generator = function generator(container, opts) {
  var formated = (0, _format2.default)(container, opts);
  return function (path) {
    var _opts$bundler$resolve = opts.bundler.resolve(path, opts),
        fullPath = _opts$bundler$resolve.fullPath,
        scopedPath = _opts$bundler$resolve.scopedPath;

    var _paths = (0, _paths3.default)(scopedPath),
        relative = _paths.relative,
        folder = _paths.folder,
        filename = _paths.filename;

    if (!filename.match(opts.regex)) return;

    formated(relative, (0, _match2.default)(folder, opts));
  };
};

var cut = function cut(opts) {
  var container = {};
  (0, _setDefaults2.default)(opts);

  var generate = generator(container, opts);

  return function (collection) {
    collection.map(generate);
    return container;
  };
};

exports.cut = cut;