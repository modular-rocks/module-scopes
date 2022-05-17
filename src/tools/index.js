const splitPath = (path) => path.split('/')
const rejectBlank = (arr) => arr.filter((x) => x.length)
const rejectUndefined = (arr) => arr.filter((x) => x !== undefined )
const pieces2Path = (arr) => arr.join('/')
const dropLast = (arr) => arr.slice(0, -1)
const first = (arr) => arr[0]
const last = (arr) => arr.slice(-1)[0]
const lastInPath = (arr) => last(arr)
const uniq = (arr) => arr.filter((elem, pos) => arr.indexOf(elem) == pos)
const unshiftBlank = (arr) => [''].concat(arr)

const path2Pieces = (path) => rejectBlank(splitPath(path))
const parent = (path) => pieces2Path(unshiftBlank(dropLast(path2Pieces(path))))
const parentScopePath = (path) => clean(`/${parent(path)}/`)

const hasDot = (str) => str.match(/\./) && str.match(/\./).length > 0
const extensionIndex = (pieces) => pieces.map(hasDot).indexOf(true)
const createFolder = (parent, name, obj) => parent[name] ? null : parent[name] = obj

const splitName = (action) => action ? action.split('.') : []

const createPath = (scopePath, relativeFolderPath, factory) => {
  const paths = [scopePath, factory.pathname, relativeFolderPath]
  return `/${pieces2Path(path2Pieces(pieces2Path(paths)))}/`
}

const clean = (path) => path.replace(/\/\/\/\//g, '/').replace(/\/\/\//g, '/').replace(/\/\//g, '/')

const resolve = (base, relative) => {
  const stack = base.split("/"), parts = relative.split("/");
  // stack.pop(); // remove current file name (or empty string)
  // (omit if "base" is the current folder without trailing slash)
  for (var i=0; i < parts.length; i++) {
    if (parts[i] == ".")
      continue;
    if (parts[i] == "..")
      stack.pop();
    else
      stack.push(parts[i]);
  }

  return clean(stack.join("/"))
}

export {
  splitPath,
  splitName,
  createPath,
  rejectBlank,
  pieces2Path,
  dropLast,
  last,
  uniq,
  unshiftBlank,
  parent,
  parentScopePath,
  clean,
  path2Pieces,
  lastInPath,
  rejectUndefined,
  extensionIndex,
  createFolder,
  resolve
}
