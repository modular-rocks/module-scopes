import { parent, splitPath, resolve } from '../../.././tools'

export default (path) => {
  const relative = path
  const pieces =  splitPath(relative)
  const folder = parent(relative)
  const filename = relative.replace(folder, '')

  return { relative, folder, filename, pieces }
}
