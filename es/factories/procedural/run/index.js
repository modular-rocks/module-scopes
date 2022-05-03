var createAction = function createAction(action) {
  return action ? action : {};
};
var isFunction = function isFunction(val) {
  return typeof val === 'function';
};

export default (function (fns, action, env) {
  action = createAction(action);
  var val = action;

  for (var i = 0; i < fns.length; i++) {
    val = fns[i](action, env.scope, env);
  }

  if (isFunction(val)) {
    return val(action, env.scope, env);
  }

  return val || action;
});