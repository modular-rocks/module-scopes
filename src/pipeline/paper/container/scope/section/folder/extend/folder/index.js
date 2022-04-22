const isFunction = (fn) => typeof fn == 'function'
const type = 'Folder'

export default (prevFn, env) => {
  const extensions = env.data.folder.extensions.slice()
  if (!extensions.length) return prevFn(env)

  const fn1 = extensions.splice(0, 1)[0]
  let fn = fn1(prevFn, env, type)
  extensions.map((m) => {
    fn = m(fn, env, type)
  })
  return fn
}
