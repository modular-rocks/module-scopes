import { path2Pieces, pieces2Path, last, uniq } from '../../tools'
import metadata from './metadata'

const generateUniqueString = () => Math.random().toString(36).slice(-5)

class Scope {
  constructor(pathname) {
    this.pathname = pathname
    this.algorithm = 'Scope'
    this.splitAt = 'last'
  }

  setIndex(index) {
    this.index = index
  }

  build() {
    return {}
  }

  extract(path) {
    let uniqStr = generateUniqueString()
    while (path.match(uniqStr)) {
      uniqStr = generateUniqueString()
    }
    const replace = new RegExp(`/${this.pathname}/`, 'g');
    return this.cut(path.replace(replace, `/${uniqStr}/`).split(uniqStr))
  }

  cut(pieces) {
    return {
      scopeProp: pieces.slice(0, -1).join(this.pathname),
      relativePath: pieces.slice(-1).join(this.pathname)
    }
  }

  add(section, relativePath) {
    const pieces = path2Pieces(relativePath)
    const filename = pieces.slice(-1)[0]
    const folder = relativePath.replace(filename, '')

    const sect = section[this.index]

    if (!sect[folder]) sect[folder] = []
    sect[folder].push(filename)
    sect[folder] = uniq(sect[folder])
  }

  refine(path, scope, section) {
    metadata(scope, section)(path)
  }

  static reload(prev) {
    let next = new this(prev.pathname)
    Object.keys(prev).map((x) => next[x] = prev[x])
    return next
  }

  run(env) {
    const { files, modules } = env
    const names = files.map((f) => f.name)
    const index = modules[names.indexOf('index')]
    const data = index || {}

    names.map((name, i) => {
      data[name] = modules[i]
    })
    delete data['index']

    return data
  }

  inheritedFromFramework() {
    return true
  }
}

Scope.params = [
  'setIndex',
  'build',
  'extract',
  'cut',
  'add',
  'uniq',
  'refine',
  'reload',
  'run'
]

export default Scope
