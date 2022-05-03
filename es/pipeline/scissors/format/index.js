import buildScope from './scope';
import createScopes from './scopes';

export default (function (container, opts) {
  return function (relative, type) {
    if (!type) return false;

    var _ref = type.extract && type.extract(relative),
        scopeProp = _ref.scopeProp,
        relativePath = _ref.relativePath;

    createScopes(scopeProp, container, opts.factories, type);
    var section = buildScope(container, opts.factories)(scopeProp);
    type.add && type.add(section, relativePath);
  };
});