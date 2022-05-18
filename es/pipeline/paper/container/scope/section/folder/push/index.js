export default (function (decorators) {
  return function (ext) {
    var fn = decorators[ext];
    return fn ? fn.default || fn : undefined;
  };
});