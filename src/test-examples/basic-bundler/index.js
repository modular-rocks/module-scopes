import { clean } from '../.././tools'

const store = {}
const resolvePath = (path) => store.dir && store.dir.resolve(path) || path
const removeRelativeDot = (path) => path[0] == '.' && path.substr(1) || path
const extractScopedPath = (path, app) => {
  const re = new RegExp('^' + app)

  store.keys[path] = path

  return {
    scopedPath: path.match(re) ? path.replace(base, '') : path,
    fullpath: path
  }
}

const resolve = (path, opts) => {
  const { base, app } = opts
  path = resolvePath(path)
  path = removeRelativeDot(path)
  return extractScopedPath(path, app)
}

const addFullPath = (path, filename) => clean([path, filename].join('/'))
const load = (meta, metadata, env) => {
  const filepath = addFullPath(metadata.absolutePath, meta.filename)
  const key = store.keys[filepath]
  const fn = store.dir(filepath)

  if (!fn) {
    throw Error('Filename not found at ' + filepath)
  }
  return fn.default || fn
}

export default  {
  resolve,
  load,
  get: (key) => store[key],
  set: (key, value) => store[key] = value
}
