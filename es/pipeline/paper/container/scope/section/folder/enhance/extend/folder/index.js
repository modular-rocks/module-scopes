var isFunction = function isFunction(fn) {
  return typeof fn == 'function';
};
var type = 'Folder';

export default (function (prevFn, env) {
  var extensions = env.data.folder.extensions.slice();
  var fn1 = extensions.splice(0, 1)[0];
  var fn = fn1(prevFn, env, type);
  extensions.map(function (m) {
    fn = m(fn, env, type);
  });
  return fn;
});