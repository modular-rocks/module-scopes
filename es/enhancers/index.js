var enhancers = {};

var add = function add(key, fn) {
  return enhancers[key] = fn;
};
var get = function get() {
  return enhancers;
};

export { add, get };