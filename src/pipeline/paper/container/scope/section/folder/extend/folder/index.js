const isFunction = (fn) => typeof fn == 'function'
const type = 'Folder'

export default (prevFn, env) => {
  const decorators = env.data.folder.decorators.slice()
  if (!decorators.length) return prevFn(env)

  const fn1 = decorators.splice(0, 1)[0]
  let fn = fn1(prevFn, env, type)
  decorators.map((m) => {
    fn = m(fn, env, type)
  })
  return fn
}
