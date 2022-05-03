import { Scope, Logic, Procedural } from '../../../algorithms'
const algorithms = { Scope, Logic, Procedural }

export default (type) => {
  const matchable = type.algorithm && algorithms[type.algorithm]

  if (matchable) {
    return algorithms[type.algorithm].reload(type)
  }

  return type
}
