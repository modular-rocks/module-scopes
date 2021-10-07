const createAction = (action) => action ? action : {}
const isFunction = (val) => typeof val === 'function'

export default (fns, action, env) => {
  action = createAction(action)
  let val = action

  for (let i = 0; i < fns.length; i++) {
    val = fns[i](action, env.scope, env)
  }

  if (isFunction(val)) {
    return val(action, env.scope, env)
  }

  return val || action
}
