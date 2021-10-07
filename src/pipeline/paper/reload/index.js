import { Scope, Logic, Enhanced } from '../../../algorithms'
const algorithms = { Scope, Logic, Enhanced }

export default (type) => {
  const matchable = type.algorithm && algorithms[type.algorithm]

  if (matchable) {
    return algorithms[type.algorithm].reload(type)
  }

  return type
}
