var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var findOrThrowError = function findOrThrowError(dir, filepath) {
  var fn = dir(filepath);

  if (!fn) {
    throw Error('Filename not found at ' + filepath);
  }
  return fn.default || fn;
};

var filenamePlusPath2WebpackPath = function filenamePlusPath2WebpackPath(filename, path, root) {
  var filepath = [path, filename].join('/');
  filepath = filepath.replace('//', '/').replace('///', '/');
  return filepath;
};

export default (function (info, path, dir, root, dirKeys) {
  var filepath = filenamePlusPath2WebpackPath(info.filename, path, root);
  var key = dirKeys[filepath];

  var fn = findOrThrowError(dir, key);
  if ((typeof fn === 'undefined' ? 'undefined' : _typeof(fn)) == 'object' || typeof fn == 'function') {
    fn._metadata = info;
  }
  return fn;
});