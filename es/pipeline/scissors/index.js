import setDefaults from './set-defaults';
import format from './format';
import match from './match';
import paths from './paths';
import resolve from './resolve';

var generator = function generator(container, opts) {
  var formated = format(container, opts);
  return function (path) {
    var _resolve = resolve(path, opts),
        fullPath = _resolve.fullPath,
        scopedPath = _resolve.scopedPath;

    var _paths = paths(scopedPath),
        relative = _paths.relative,
        folder = _paths.folder,
        filename = _paths.filename;

    if (!filename.match(opts.regex)) return;

    formated(relative, match(folder, opts));
  };
};

var cut = function cut(opts) {
  var container = {};
  setDefaults(opts);

  var generate = generator(container, opts);

  return function (collection) {
    collection.map(generate);
    return container;
  };
};

export { cut };