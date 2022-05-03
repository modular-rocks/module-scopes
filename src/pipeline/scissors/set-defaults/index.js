import { Scope, Logic, Procedural } from '../../../factories'

const testForBundler = (opts) => {
  if (!opts.bundler || !opts.bundler.resolve || !opts.bundler.load) {
    new Error("No bundler found for ModularRocks. Ensure a bundler is passed into the options argument under the property 'bundler'.")
  }
}

const setFactories = (opts) => {
  if (opts.factories && opts.factories.length) return
  opts.factories = [ new Procedural('rocks')]
}

const setRegex = (opts) => {
  if (opts.regex) return
  opts.regex = /\.jsx?$/
}

const convertStrings = (factories, type, index) => {
  if (typeof type !== 'string') return
  let _type

  switch(type[0]) {
    case '+':
      _type = type.replace(/^\+/, '')
      factories[index] = new Logic(_type)
      break;
    case '*':
      _type = type.replace(/^\*/, '')
      factories[index] = new Procedural(_type)
      break;
    default:
      factories[index] = new Scope(type)
  }
}

const setIndex = (index, type) => {
  type.setIndex && type.setIndex(index)
}

const inherit = (factory, scope) => (key) => {
  if (factory[key]) return
  factory[key] = scope[key]
}

const tidy = (type) => {
  const { pathname, inheritedFromFramework } = type

  if (inheritedFromFramework) return

  if (!pathname) {
    throw Error('No pathname set for type, check your config.factories')
  }

  Scope.params.map(inherit(type, new Scope(pathname)))
}

export default (opts) => {
  // opts._dirKeys = {}
  testForBundler(opts)

  setFactories(opts)
  setRegex(opts)

  opts.factories.map((type, index) => {
    convertStrings(opts.factories, type, index)

    const isObject = typeof type == 'object'
    isObject && !type.inheritedFromFramework && tidy(opts.factories[index])

    setIndex(index, opts.factories[index])
  })
}
