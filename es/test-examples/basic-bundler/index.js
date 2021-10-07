import { clean } from '../.././tools';

var store = {};
var resolvePath = function resolvePath(path) {
  return store.dir && store.dir.resolve(path) || path;
};
var removeRelativeDot = function removeRelativeDot(path) {
  return path[0] == '.' && path.substr(1) || path;
};
var extractScopedPath = function extractScopedPath(path, app) {
  var re = new RegExp('^' + app);

  store.keys[path] = path;

  return {
    scopedPath: path.match(re) ? path.replace(base, '') : path,
    fullpath: path
  };
};

var resolve = function resolve(path, opts) {
  var base = opts.base,
      app = opts.app;

  path = resolvePath(path);
  path = removeRelativeDot(path);
  return extractScopedPath(path, app);
};

var addFullPath = function addFullPath(path, filename) {
  return clean([path, filename].join('/'));
};
var load = function load(meta, metadata, env) {
  var filepath = addFullPath(metadata.absolutePath, meta.filename);
  var key = store.keys[filepath];
  var fn = store.dir(filepath);

  if (!fn) {
    throw Error('Filename not found at ' + filepath);
  }
  return fn.default || fn;
};

export default {
  resolve: resolve,
  load: load,
  get: function get(key) {
    return store[key];
  },
  set: function set(key, value) {
    return store[key] = value;
  }
};