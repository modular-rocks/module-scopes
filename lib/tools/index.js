'use strict';

exports.__esModule = true;
var splitPath = function splitPath(path) {
  return path.split('/');
};
var rejectBlank = function rejectBlank(arr) {
  return arr.filter(function (x) {
    return x.length;
  });
};
var rejectUndefined = function rejectUndefined(arr) {
  return arr.filter(function (x) {
    return x !== undefined;
  });
};
var pieces2Path = function pieces2Path(arr) {
  return arr.join('/');
};
var dropLast = function dropLast(arr) {
  return arr.slice(0, -1);
};
var first = function first(arr) {
  return arr[0];
};
var last = function last(arr) {
  return arr.slice(-1)[0];
};
var lastInPath = function lastInPath(arr) {
  return last(arr);
};
var uniq = function uniq(arr) {
  return arr.filter(function (elem, pos) {
    return arr.indexOf(elem) == pos;
  });
};
var unshiftBlank = function unshiftBlank(arr) {
  return [''].concat(arr);
};

var path2Pieces = function path2Pieces(path) {
  return rejectBlank(splitPath(path));
};
var parent = function parent(path) {
  return pieces2Path(unshiftBlank(dropLast(path2Pieces(path))));
};
var parentScopePath = function parentScopePath(path) {
  return clean('/' + parent(path) + '/');
};

var hasDot = function hasDot(str) {
  return str.match(/\./) && str.match(/\./).length > 0;
};
var extensionIndex = function extensionIndex(pieces) {
  return pieces.map(hasDot).indexOf(true);
};
var createFolder = function createFolder(parent, name, obj) {
  return parent[name] ? null : parent[name] = obj;
};

var splitName = function splitName(action) {
  return action ? action.split('.') : [];
};

var createPath = function createPath(scopePath, relativeFolderPath, factory) {
  var paths = [scopePath, factory.pathname, relativeFolderPath];
  return '/' + pieces2Path(path2Pieces(pieces2Path(paths))) + '/';
};

var clean = function clean(path) {
  return path.replace(/\/\/\/\//g, '/').replace(/\/\/\//g, '/').replace(/\/\//g, '/');
};

var resolve = function resolve(base, relative) {
  var stack = base.split("/"),
      parts = relative.split("/");
  // stack.pop(); // remove current file name (or empty string)
  // (omit if "base" is the current folder without trailing slash)
  for (var i = 0; i < parts.length; i++) {
    if (parts[i] == ".") continue;
    if (parts[i] == "..") stack.pop();else stack.push(parts[i]);
  }

  return clean(stack.join("/"));
};

exports.splitPath = splitPath;
exports.splitName = splitName;
exports.createPath = createPath;
exports.rejectBlank = rejectBlank;
exports.pieces2Path = pieces2Path;
exports.dropLast = dropLast;
exports.last = last;
exports.uniq = uniq;
exports.unshiftBlank = unshiftBlank;
exports.parent = parent;
exports.parentScopePath = parentScopePath;
exports.clean = clean;
exports.path2Pieces = path2Pieces;
exports.lastInPath = lastInPath;
exports.rejectUndefined = rejectUndefined;
exports.extensionIndex = extensionIndex;
exports.createFolder = createFolder;
exports.resolve = resolve;