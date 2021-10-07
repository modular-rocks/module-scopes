import { get } from '../.././store'
import { parentScopePath } from '../.././tools'

const rootPaths = [undefined, '//', '/']
const shouldRespondWithRoot = (scopePath) => rootPaths.includes(scopePath)
const shouldFindParent = (scope) => scope === undefined

const find = (rootLocation, scopePath, opts) => {
  const env = get(rootLocation, 'env')
  const enhanced = env.data.enhanced

  if (shouldRespondWithRoot(scopePath)) {
    return enhanced.root
  }

  const scope = enhanced[scopePath]
  if (shouldFindParent(scope)) {
    return find(rootLocation, parentScopePath(scopePath))
  }

  return scope
}

export default find
