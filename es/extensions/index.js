var extensions = {};

var add = function add(key, fn) {
  return extensions[key] = fn;
};
var get = function get() {
  return extensions;
};

export { add, get };