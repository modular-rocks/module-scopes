export default (function (extensions) {
  return function (ext) {
    var fn = extensions[ext];
    return fn ? fn.default || fn : undefined;
  };
});