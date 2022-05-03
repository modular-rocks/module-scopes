import buildScope from './scope'
import createScopes from './scopes'

export default (container, opts) => (relative, type) => {
  if (!type) return false

  let { scopeProp, relativePath } = type.extract && type.extract(relative)
  createScopes(scopeProp, container, opts.factories, type)
  const section = buildScope(container, opts.factories)(scopeProp)
  type.add && type.add(section, relativePath)
}
