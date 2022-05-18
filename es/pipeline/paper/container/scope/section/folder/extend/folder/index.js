var isFunction = function isFunction(fn) {
  return typeof fn == 'function';
};
var type = 'Folder';

export default (function (prevFn, env) {
  var decorators = env.data.folder.decorators.slice();
  if (!decorators.length) return prevFn(env);

  var fn1 = decorators.splice(0, 1)[0];
  var fn = fn1(prevFn, env, type);
  decorators.map(function (m) {
    fn = m(fn, env, type);
  });
  return fn;
});