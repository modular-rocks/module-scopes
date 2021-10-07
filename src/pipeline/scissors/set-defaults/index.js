import Enhanced from '../../../algorithms/enhanced'
import Scope from '../../../algorithms/scope'

const testForBundler = (opts) => {
  if (!opts.bundler || !opts.bundler.resolve || !opts.bundler.load) {
    new Error("No bundler found for ModularRocks. Ensure a bundler is passed into the options argument under the property 'bundler'.")
  }
}

const setTypes = (opts) => {
  if (opts.types && opts.types.length) return
  opts.types = [ new Enhanced('rocks')]
}

const setRegex = (opts) => {
  if (opts.regex) return
  opts.regex = /\.jsx?$/
}

const convertStrings = (types, type, index) => {
  if (typeof type !== 'string') return
  types[index] = new Scope(type)
}

const setIndex = (index, type) => {
  type.setIndex && type.setIndex(index)
}

const inherit = (type, scope) => (key) => {
  if (type[key]) return
  type[key] = scope[key]
}

const tidy = (type) => {
  const { pathname, inheritedFromFramework } = type

  if (inheritedFromFramework) return

  if (!pathname) {
    throw Error('No pathname set for type, check your config.types')
  }

  Scope.params.map(inherit(type, new Scope(pathname)))
}

export default (opts) => {
  // opts._dirKeys = {}
  testForBundler(opts)

  setTypes(opts)
  setRegex(opts)

  opts.types.map((type, index) => {
    convertStrings(opts.types, type, index)

    const isObject = typeof type == 'object'
    isObject && !type.inheritedFromFramework && tidy(opts.types[index])

    setIndex(index, opts.types[index])
  })
}
