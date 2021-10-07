import setDefaults from './set-defaults';
import format from './format';
import match from './match';
import paths from './paths';

var generator = function generator(container, opts) {
  var formated = format(container, opts);
  return function (path) {
    var _opts$bundler$resolve = opts.bundler.resolve(path, opts),
        fullPath = _opts$bundler$resolve.fullPath,
        scopedPath = _opts$bundler$resolve.scopedPath;

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