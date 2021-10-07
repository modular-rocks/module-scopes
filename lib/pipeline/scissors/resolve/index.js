'use strict';

exports.__esModule = true;

exports.default = function (path, opts) {
  var base = opts.base,
      dir = opts.dir,
      _dirKeys = opts._dirKeys,
      app = opts.app;


  var pa = dir ? dir.resolve(path) : path;
  if (pa[0] == '.') pa = pa.substr(1);

  var re = new RegExp('^' + app);
  var scopedPath = pa.match(re) ? pa.replace(base, '') : pa;
  var fullpath = pa;
  _dirKeys[fullpath] = path;

  return { fullpath: fullpath, scopedPath: scopedPath };
};

module.exports = exports['default'];