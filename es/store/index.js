var store = {};

var get = function get(path, attr, quiet) {
  var section = store[path];
  if (section && section[attr]) {
    return section[attr];
  }

  if (!section && !quiet) {
    console.warn('Path supplied not found: ' + path);
    console.warn('Defaulting to first path supplied');
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

export { get, set, save, getStore, closest };