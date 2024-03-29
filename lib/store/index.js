'use strict';

exports.__esModule = true;
var store = {};

var get = function get(path, attr, quiet) {
  var section = store[path];
  if (section && section[attr]) {
    return section[attr];
  }

  if (!section && !quiet) {
    console.warn('Path supplied not found, defaulting to another path. Please visit http://docs.modular.rocks/docs/errors for more info. Path received: ' + path + '.');
  }

  var _Object$keys = Object.keys(store),
      first = _Object$keys[0];

  if (!first) {
    console.warn('No paths supplied');
  }

  var data = store[first];

  if (!data[attr] && !quiet) {
    console.warn('Attr not found: ' + attr + '. You\'re calling ' + attr + ' too early');
  }

  return data[attr];
};

var getStore = function getStore() {
  return store;
};
var set = function set(path, attr, data) {
  store[path] = store[path] || (store[path] = {});
  store[path][attr] = data;
  return get(path, attr);
};

var save = function save(root, attr, data) {
  set(root, attr, data);
  return get(root, attr);
};

var closest = function closest(path, attr) {
  return get(path, attr, { quiet: true });
};

exports.get = get;
exports.set = set;
exports.save = save;
exports.getStore = getStore;
exports.closest = closest;