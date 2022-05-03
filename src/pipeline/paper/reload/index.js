import { Scope, Logic, Procedural } from '../../../factories'
const factories = { Scope, Logic, Procedural }

export default (type) => {
  const matchable = type.factory && factories[type.factory]

  if (matchable) {
    return factories[type.factory].reload(type)
  }

  return type
}
