var keys = function keys(obj) {
  return Object.keys(obj);
};

var refine = function refine(container, _ref) {
  var types = _ref.types;

  types.map(function (type) {
    keys(container).forEach(function (scopePath) {
      var scope = container[scopePath];
      var section = scope[type.index];
      keys(section).map(function (path) {
        return type.refine(path, scope, section);
      });
    });
  });
  return container;
};

export { refine };