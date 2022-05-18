var decorators = {};

var add = function add(key, fn) {
  return decorators[key] = fn;
};
var get = function get() {
  return decorators;
};

export { add, get };