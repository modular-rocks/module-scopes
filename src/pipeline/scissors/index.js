import setDefaults from './set-defaults'
import format from './format'
import match from './match'
import paths from './paths'

const generator = (container, opts) => {
  const formated = format(container, opts)
  return (path) => {
    const { fullPath, scopedPath } = opts.bundler.resolve(path, opts)
    const { relative, folder, filename } = paths(scopedPath)

    if (!filename.match(opts.regex)) return

    formated(relative, match(folder, opts))
  }
}

const cut = (opts) => {
  const container = {}
  setDefaults(opts)
  
  const generate = generator(container, opts)

  return (collection) => {
    collection.map(generate)
    return container
  }
}

export {
  cut
}
