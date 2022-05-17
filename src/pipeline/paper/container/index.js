import Scope from './scope'
import inherit from './inherit'

export default (env) => (scopePath) => {
  const scope = new Scope(scopePath, env)
  const { enhanced } = env.data
  scope.build(env)
  inherit(scopePath, enhanced)
}
