const keys = (obj) => Object.keys(obj)

const refine = (container, { factories }) => {
  factories.map((type) => {
    keys(container).forEach(function(scopePath) {
      const scope = container[scopePath]
      const section = scope[type.index]
      keys(section).map((path) => type.refine(path, scope, section))
    });
  })
  return container
}

export {
  refine
}
