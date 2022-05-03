export default (function (enhancers) {
  return function (ext) {
    var fn = enhancers[ext];
    return fn ? fn.default || fn : undefined;
  };
});