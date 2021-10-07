import { get } from '../.././store';
import { parentScopePath } from '../.././tools';

var rootPaths = [undefined, '//', '/'];
var shouldRespondWithRoot = function shouldRespondWithRoot(scopePath) {
  return rootPaths.includes(scopePath);
};
var shouldFindParent = function shouldFindParent(scope) {
  return scope === undefined;
};

var find = function find(rootLocation, scopePath, opts) {
  var env = get(rootLocation, 'env');
  var enhanced = env.data.enhanced;

  if (shouldRespondWithRoot(scopePath)) {
    return enhanced.root;
  }

  var scope = enhanced[scopePath];
  if (shouldFindParent(scope)) {
    return find(rootLocation, parentScopePath(scopePath));
  }

  return scope;
};

export default find;