import { path2Pieces, pieces2Path } from '../../../.././tools/index.js'

export const inheritScope = (scopePath, parent, container) => {
  if (!container[scopePath]) return false
  if (!parent) return false
  const scope = container[scopePath]
  for (let configuration in parent) {
    const section = scope[configuration] || (scope[configuration] = {})

    for (let prop in parent[configuration]) {
      if (!section[prop]) {
        section[prop] = parent[configuration][prop]
      }
    }
  }
}

const removeLastPath = (s) => s.splice(-1, 1)

export default (scopePath, container) => {
  if (scopePath == '//' || scopePath == '/') {
    return false
  }

  container[scopePath] = container[scopePath] || (container[scopePath] = {})

  let s = path2Pieces(scopePath)
  removeLastPath(s)

  let k
  while (s.length) {
    k = `/${s.join('/')}/`
    inheritScope(scopePath, container[k], container)
    removeLastPath(s)
  }
}
