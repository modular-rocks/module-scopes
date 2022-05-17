import Scope from './scope';
import inherit from './inherit';

export default (function (env) {
  return function (scopePath) {
    var scope = new Scope(scopePath, env);
    var enhanced = env.data.enhanced;

    scope.build(env);
    inherit(scopePath, enhanced);
  };
});