const isFunction = (fn) => typeof fn == 'function'
const type = 'Folder'

export default (prevFn, env) => {
  const enhancers = env.data.folder.enhancers.slice()
  if (!enhancers.length) return prevFn(env)

  const fn1 = enhancers.splice(0, 1)[0]
  let fn = fn1(prevFn, env, type)
  enhancers.map((m) => {
    fn = m(fn, env, type)
  })
  return fn
}
