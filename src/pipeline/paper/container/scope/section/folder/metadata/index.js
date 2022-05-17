import { path2Pieces, createPath, splitName } from '../../../../../../.././tools'

const clean = (path) => path.replace('///', '/').replace('//', '/')

export default (relativeFolderPath, section, env) => {
  const relPathPieces = path2Pieces(relativeFolderPath)
  const depth = relPathPieces.length
  const { root } = env.config.opts

  const action = relPathPieces.slice(-1)[0]
  const [name, ...enhancers] = splitName(action)

  const scope = section.scope
  const relativePath = createPath(scope.path, relativeFolderPath, section.factory)
  let absolutePath = relativePath

  if (root && !absolutePath.match(root)) {
    const abs = `${root}/${relativePath}`
    absolutePath = clean(abs)
  }

  const parentPath = clean(`/${relPathPieces.slice(0, -1).join('/')}/`)

  return {
    action,
    name,
    enhancers,
    relativeFolderPath,
    relativePath,
    absolutePath,
    relPathPieces,
    depth,
    parentPath,
    root
  }
}
